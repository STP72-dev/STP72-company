# syntax=docker/dockerfile:1

# -----------------------------------------------------------------------------
# Stage 1: Dependencies Cache
# -----------------------------------------------------------------------------
FROM node:24-slim AS deps
WORKDIR /app

# Copy package manifests for deterministic caching
COPY package.json ./
# Install dependencies (ignoring scripts during initial resolution for security)
RUN npm install --ignore-scripts

# -----------------------------------------------------------------------------
# Stage 2: Application Builder
# -----------------------------------------------------------------------------
FROM node:24-slim AS builder
WORKDIR /app

# Copy installed dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set production environment and compile SSR bundles via Vite & Nitro
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 3: Production Minimal Runner
# -----------------------------------------------------------------------------
FROM node:24-slim AS runner
WORKDIR /app

# Runtime configuration
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Create non-root security group & user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs --home /app nodejs

# Copy only the compiled standalone Nitro bundle
COPY --from=builder --chown=nodejs:nodejs /app/.output ./.output

# Switch to unprivileged execution user
USER nodejs

# Expose HTTP application port
EXPOSE 3000

# Native Node.js healthcheck against the localized home route
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "const port = process.env.PORT || 3000; require('http').get('http://127.0.0.1:' + port + '/hu', (res) => { process.exit(res.statusCode >= 200 && res.statusCode < 400 ? 0 : 1); }).on('error', () => process.exit(1));"

# Launch Nitro entrypoint
CMD ["node", ".output/server/index.mjs"]

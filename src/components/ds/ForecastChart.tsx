import { cn } from "@/lib/utils";

type ForecastChartProps = {
  title: string;
  actualLabel: string;
  forecastLabel: string;
  bandLabel: string;
  xAxisLabel: string;
  yAxisLabel: string;
  note: string;
  className?: string;
};

/**
 * Static SVG forecast figure: actuals to t0, forecast continuation with an
 * uncertainty range. Deterministic, illustrative geometry — no animation.
 */

const W = 720;
const H = 300;
const PAD = { top: 16, right: 16, bottom: 36, left: 40 };

const actuals = [38, 41, 39, 45, 48, 46, 52, 56, 54, 61];
const forecast = [61, 64, 68, 71, 75];
const spread = [0, 4, 7, 10, 14];

const maxY = 100;
const totalPoints = actuals.length + forecast.length - 1;

const x = (i: number) => PAD.left + (i / totalPoints) * (W - PAD.left - PAD.right);
const y = (v: number) => PAD.top + (1 - v / maxY) * (H - PAD.top - PAD.bottom);

const toPath = (values: number[], offset = 0) =>
  values
    .map((v, i) => `${i === 0 ? "M" : "L"}${x(i + offset).toFixed(1)} ${y(v).toFixed(1)}`)
    .join(" ");

const bandPath = () => {
  const offset = actuals.length - 1;
  const upper = forecast.map(
    (v, i) =>
      `${i === 0 ? "M" : "L"}${x(i + offset).toFixed(1)} ${y(Math.min(maxY, v + spread[i]!)).toFixed(1)}`,
  );
  const lower = forecast
    .map((v, i) => `L${x(i + offset).toFixed(1)} ${y(Math.max(0, v - spread[i]!)).toFixed(1)}`)
    .reverse();
  return `${upper.join(" ")} ${lower.join(" ")} Z`;
};

const gridValues = [0, 25, 50, 75, 100];

export function ForecastChart({
  title,
  actualLabel,
  forecastLabel,
  bandLabel,
  xAxisLabel,
  yAxisLabel,
  note,
  className,
}: ForecastChartProps) {
  const t0 = x(actuals.length - 1);

  return (
    <figure className={cn("border-t border-border-strong bg-background", className)}>
      <div className="pt-4">
        <figcaption className="text-sm font-semibold text-foreground">{title}</figcaption>
        <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-0.5 w-5 bg-foreground" />
            {actualLabel}
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-0.5 w-5 bg-accent" />
            {forecastLabel}
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2.5 w-5 border border-accent/40 bg-accent/10" />
            {bandLabel}
          </li>
        </ul>
      </div>

      <div className="mt-4 w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`${title}. ${note}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {gridValues.map((v) => (
            <g key={v}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y(v)}
                y2={y(v)}
                stroke="var(--color-border)"
                strokeWidth="1"
              />
              <text
                x={PAD.left - 8}
                y={y(v) + 4}
                textAnchor="end"
                className="fill-muted-foreground font-mono"
                fontSize="10"
              >
                {v}
              </text>
            </g>
          ))}

          <path d={bandPath()} fill="var(--color-accent)" fillOpacity="0.1" />
          <path
            d={toPath(actuals)}
            fill="none"
            stroke="var(--color-foreground)"
            strokeWidth="2"
            strokeLinejoin="miter"
          />
          <path
            d={toPath(forecast, actuals.length - 1)}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          <line
            x1={t0}
            x2={t0}
            y1={PAD.top}
            y2={H - PAD.bottom}
            stroke="var(--color-border-strong)"
            strokeWidth="1"
          />
          <text
            x={t0 + 6}
            y={PAD.top + 12}
            className="fill-muted-foreground font-mono"
            fontSize="10"
          >
            t0
          </text>

          <line
            x1={PAD.left}
            x2={W - PAD.right}
            y1={H - PAD.bottom}
            y2={H - PAD.bottom}
            stroke="var(--color-border-strong)"
            strokeWidth="1"
          />
          <text x={PAD.left} y={H - 10} className="fill-muted-foreground font-mono" fontSize="10">
            {xAxisLabel}
          </text>
          <text
            x={W - PAD.right}
            y={H - 10}
            textAnchor="end"
            className="fill-muted-foreground font-mono"
            fontSize="10"
          >
            {yAxisLabel}
          </text>
        </svg>
      </div>

      <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">{note}</p>
    </figure>
  );
}

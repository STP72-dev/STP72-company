import type { LocaleContent } from "./types";
import {
  solutionsPageEn,
  solutionFamiliesEn,
  solutionDetailsEn,
} from "./solutions.en";

export const en: LocaleContent = {
  meta: {
    home: {
      title: "STP72 — AI, business software and data solutions for SMEs",
      description:
        "We build business applications, automation and data solutions for small and mid-sized companies. We work with the systems and processes you already have, one step at a time.",
    },
  },
  pages: {
    "ai-solutions": {
      navLabel: "AI solutions",
      title: "AI solutions",
      intro:
        "AI-based solutions for document processing, internal information search and support for repetitive administrative work. How it is applied depends on the task, the data available and the cost of an error.",
      sections: [
        {
          key: "documents",
          title: "Document and data processing",
          body: "Extracting structured data from incoming documents, with an approval step inside the process.",
        },
        {
          key: "assist",
          title: "Search and summarisation",
          body: "Search and summaries across internal material, with sources shown so results can be traced back.",
        },
        {
          key: "guardrails",
          title: "Accountability",
          body: "Logging and access control; where the risk of error is higher, a mandatory review or approval point can be part of the process.",
        },
      ],
      seo: {
        title: "AI solutions – STP72",
        description:
          "Practical AI applied to specific business tasks: document processing, internal information search and support for repetitive administration, in a reviewable way.",
      },
    },
    "business-systems": {
      navLabel: "Business systems",
      title: "Business systems",
      intro:
        "Purpose-built business applications for operations where spreadsheets or general-purpose software no longer fit the process.",
      sections: [
        {
          key: "scope",
          title: "Typical areas",
          body: "Support for warehouse, production, rental, service and internal administrative processes.",
        },
        {
          key: "foundations",
          title: "Where the work goes",
          body: "Recurring technical functions are built with proven solutions, so the work can concentrate on the company's own process.",
        },
        {
          key: "adoption",
          title: "Adoption",
          body: "Roll-out can start with one well-bounded area and extend based on results and business needs.",
        },
      ],
      seo: {
        title: "Business systems – STP72",
        description:
          "Purpose-built business applications for small and mid-sized companies: warehouse, production, rental and internal processes, fitted to real operations.",
      },
    },
    "data-forecasting": {
      navLabel: "Data and forecasting",
      title: "Data and forecasting",
      intro:
        "Consolidating data, management and operational reporting, and — where the data allows it — demand, stock or capacity forecasting.",
      sections: [
        {
          key: "foundation",
          title: "One consistent data base",
          body: "Data from existing systems brought together with validated, checked import.",
        },
        {
          key: "reporting",
          title: "Reporting",
          body: "Management and operational figures that give every user the same result.",
        },
        {
          key: "forecast",
          title: "Forecasting",
          body: "Demand and capacity planning with time-series methods and a stated evaluation approach.",
        },
      ],
      seo: {
        title: "Data and forecasting – STP72",
        description:
          "A consistent data base, management reporting, demand and capacity forecasting with uncertainty ranges for small and mid-sized companies.",
      },
    },
    "software-integrations": {
      navLabel: "Software and integrations",
      title: "Software and integrations",
      intro:
        "Connecting existing systems so the same data is not entered twice. Tools that work well stay in place, and we connect to them.",
      sections: [
        {
          key: "connections",
          title: "Data connections",
          body: "Links to invoicing, webshop, accounting and logistics systems with documented interfaces.",
        },
        {
          key: "migration",
          title: "Data migration",
          body: "Taking over existing records with validation and a result that can be reconciled.",
        },
        {
          key: "custom",
          title: "Custom development",
          body: "Development effort goes into the part that is genuinely company-specific.",
        },
      ],
      seo: {
        title: "Software and integrations – STP72",
        description:
          "System integration and custom development: invoicing, webshop and accounting connections, data migration and validation.",
      },
    },
    "devops-infrastructure": {
      navLabel: "DevOps and infrastructure",
      title: "DevOps and infrastructure",
      intro:
        "A solution is only worth having if it runs reliably. Operations, backup and access management are part of the work, not an afterthought.",
      sections: [
        {
          key: "operations",
          title: "Operations",
          body: "Monitoring, incident handling and planned updates with a transparent process.",
        },
        {
          key: "delivery",
          title: "Delivery",
          body: "Automated build and deployment so every change can be traced and reversed.",
        },
        {
          key: "security",
          title: "Security and backup",
          body: "Access management, a defined backup routine and regular restore checks.",
        },
      ],
      seo: {
        title: "DevOps and infrastructure – STP72",
        description:
          "Operations, automated delivery, access management and backup routines that keep implemented solutions running reliably.",
      },
    },
    solutions: {
      navLabel: "Solutions",
      title: "Solutions",
      intro:
        "The areas where we have a worked-out approach and existing engineering material. Scope is always shaped by the company's own processes.",
      sections: [
        {
          key: "areas",
          title: "Solution areas",
          body: "Inventory and warehouse, operational processes, production and traceability, rental and asset management, documents and internal data.",
        },
        {
          key: "scope",
          title: "Scope",
          body: "We do not sell packages: scope is set from the process involved and the data actually available.",
        },
      ],
      seo: {
        title: "Solutions – STP72",
        description:
          "Solution areas: inventory and warehouse, operational processes, production, rental, document and data handling for SMEs.",
      },
    },
    references: {
      navLabel: "References",
      title: "Engineering references",
      intro:
        "We publish public engineering material and reference architectures. They show how we build — they are not client references, commercial deployments or products.",
      sections: [
        {
          key: "purpose",
          title: "What they are for",
          body: "The code and the documented architecture let you judge the quality of our work without naming clients.",
        },
        {
          key: "status",
          title: "Status marking",
          body: "Every item states its maturity: reference architecture, prototype or working demonstrator. These are not client references or live deployments.",
        },
      ],
      seo: {
        title: "Engineering references – STP72",
        description:
          "Public engineering material and reference architectures, each with its maturity stated. Not client references or commercial deployments.",
      },
    },
    "how-we-work": {
      navLabel: "How we work",
      title: "How we work",
      intro:
        "Five stages, each with a result that stands on its own. Continuing is decided at the end of each stage — and not every piece of work reaches the last one.",
      sections: [
        {
          key: "assessment",
          title: "Assessment and first task",
          body: "We review the process and the data available, then record scope, constraints and a recommended first step in writing.",
        },
        {
          key: "pilot",
          title: "A working base solution",
          body: "A working solution for one well-bounded workflow, on available data or a representative sample, with evaluation criteria agreed in advance.",
        },
        {
          key: "rollout",
          title: "Related processes and integrations",
          body: "Data connections, migration and additional roles, brought in where commercially justified.",
        },
        {
          key: "intelligence",
          title: "Reporting, forecasting and AI where justified",
          body: "Reporting, forecasting or AI support comes into play when the data and the business question support it.",
        },
        {
          key: "operate",
          title: "Operation and further development",
          body: "Deployment, monitoring, backups, documentation and maintenance boundaries, sized to the solution.",
        },
      ],
      seo: {
        title: "How we work – STP72",
        description:
          "Five stages from assessment to operation: what we ask for before the first conversation, what you receive at the end of each stage, and when we recommend something other than development.",
      },
    },

    about: {
      navLabel: "About",
      title: "About STP72",
      intro:
        "Practical AI and business systems, built around your operations. We focus on small and mid-sized companies, in Hungarian and English.",
      sections: [
        {
          key: "approach",
          title: "Approach",
          body: "We build the tasks where the change is visible in daily operations, and fit the technical decisions to that.",
        },
        {
          key: "scope",
          title: "Who this is for",
          body: "We focus on Hungarian small and mid-sized companies whose processes have outgrown spreadsheets, but where replacing everything with a large ERP would be out of proportion.",
        },
      ],
      seo: {
        title: "About STP72",
        description:
          "Practical AI and business systems for small and mid-sized companies: engineering precision, step-by-step adoption, transparent method.",
      },
    },
    contact: {
      navLabel: "Contact",
      title: "Contact",
      intro:
        "Write a few lines about where the process stands today and what you want to achieve. After a short conversation we will say what a realistic first step is — even if that is not development.",
      sections: [
        {
          key: "email",
          title: "Email",
          body: "Email is the simplest way to outline the starting situation and the goal.",
        },
        {
          key: "prepare",
          title: "What to include",
          body: "Which process is involved, which systems are in use today, and what causes the most friction in daily work.",
        },
      ],
      seo: {
        title: "Contact – STP72",
        description:
          "Get in touch: describe the process and the systems in use, and we will suggest a realistic first step.",
      },
    },
  },
  servicePages: {
    "ai-solutions": {
      eyebrow: "Practical AI inside daily operations",
      summary: [
        "We apply AI to a specific, repeating step of work: where the volume of information is high, the source material is identifiable, and the result can be checked.",
        "We do not build a standalone chat interface. The solution sits in the process where the work actually happens.",
      ],
      situations: {
        title: "What problem does this address?",
        intro:
          "Common starting points where it is worth examining whether AI applies.",
        items: [
          {
            key: "documents",
            title: "Incoming documents handled by hand",
            body: "Data from supplier invoices, orders, contracts or forms is typed into records manually. The work is slow and mistakes surface late.",
          },
          {
            key: "knowledge",
            title: "Internal knowledge is hard to search",
            body: "Policies, technical descriptions and earlier correspondence sit in several places, so everyone looks for the same answer somewhere else.",
          },
          {
            key: "admin",
            title: "Repeating administrative rounds",
            body: "The same classification, extraction or forwarding happens several times a day, always following the same rules.",
          },
          {
            key: "decision",
            title: "Decisions prepared from scattered data",
            body: "Putting together a quote, a price or a priority means collecting data from several sources before anyone can decide.",
          },
        ],
      },
      criteria: {
        title: "When is AI worth using?",
        intro:
          "AI is not the right answer to every task. The first step of the assessment is deciding whether it is worth starting at all.",
        items: [
          "The task repeats and involves reviewing a lot of text or record-level information.",
          "There is identifiable source material the result can be traced back to.",
          "The result can be checked: someone with the relevant knowledge can judge it quickly.",
          "There is a starting point to measure against — time spent or error rate, for example.",
          "The cost of an error is known, so the level of review can be set accordingly.",
        ],
        note:
          "Where source material is incomplete or contradictory, we sort out the data and the process first. In such cases, this is often a precondition for introducing AI at all.",
      },
      scope: {
        title: "What we build",
        intro: "Working solutions that remove or shorten one named step of work.",
        items: [
          {
            key: "extraction",
            title: "Document processing",
            body: "Structured data extracted from incoming documents, written into the records, with the review step the case requires.",
          },
          {
            key: "search",
            title: "Internal search and summaries",
            body: "Answers drawn from the company's own material, with the source indicated so any statement can be traced.",
          },
          {
            key: "workflow",
            title: "Administrative process support",
            body: "Classification, extraction, prepared replies and routing, fitted to the steps of the existing workflow.",
          },
          {
            key: "decision-support",
            title: "Decision preparation",
            body: "A prepared proposal together with the data behind it, so the person deciding can review or override it quickly.",
          },
          {
            key: "controls",
            title: "Controls and traceability",
            body: "Logging, access management and review points set according to risk. Where the risk of error is higher, a mandatory review or approval point can be part of the solution.",
          },
          {
            key: "measurement",
            title: "Measurement",
            body: "A comparison of the situation before and after, so the decision to continue rests on figures.",
          },
        ],
      },
      fit: {
        title: "How it connects to current operations",
        intro:
          "The solution fits the systems already in use. The aim is not another interface but fewer manual steps in the same process.",
        items: [
          {
            key: "systems",
            title: "Existing systems stay",
            body: "Email, invoicing, the webshop and internal records remain the primary sources. We connect to them rather than replace them.",
          },
          {
            key: "data",
            title: "Controlled data access",
            body: "Access is limited to what the task requires and follows the company's own permission model.",
          },
          {
            key: "process",
            title: "Fitted to the process steps",
            body: "The result appears where the work happens: in the records, the task list or the mailbox.",
          },
          {
            key: "handover",
            title: "Operation that can be handed over",
            body: "Documented configuration and operating notes, so the solution does not depend on one person's knowledge.",
          },
        ],
      },
      start: {
        title: "How a project starts",
        intro: "The project can be split into stages; at the end of each stage the result and the next step can be assessed separately.",
        steps: [
          {
            key: "assessment",
            name: "Assessment",
            body: "We look at the task, the available source material, the cost of an error and the review required. It ends with a written summary.",
          },
          {
            key: "first",
            name: "First solution",
            body: "A working solution for one narrowly defined task, tried on real material.",
          },
          {
            key: "rollout",
            name: "Rollout",
            body: "Connection to existing systems, permissions, training and the switch to daily use.",
          },
          {
            key: "expand",
            name: "Extension",
            body: "If the first area proves itself, the next task can follow — as a business decision.",
          },
        ],
      },
      evidence: {
        title: "Related engineering material",
        intro:
          "Our public material shows how we structure a data- and process-driven solution. It is not client work and not a commercial product.",
        keys: ["forecastlabai", "crentsys"],
      },
      technical: {
        title: "Technical background",
        intro:
          "A short note on implementation for those interested. The choice always depends on the task.",
        items: [
          "Language models used as a service, with the company data in scope defined precisely.",
          "Answers with cited sources from the company's own document base, so statements can be traced.",
          "Logging, access management and approval steps matched to the level of risk.",
          "Connection to existing systems through documented interfaces.",
        ],
      },
    },
    "business-systems": {
      eyebrow: "Purpose-built business applications",
      summary: [
        "Not every problem calls for replacing a full enterprise system. In many cases a targeted application, or an addition to a system already in use, can be introduced with less risk.",
        "We build applications for operational areas where spreadsheets no longer suffice and general-purpose software does not match the real process.",
      ],
      situations: {
        title: "What problem does this address?",
        intro: "Typical situations where a purpose-built business application can be justified.",
        items: [
          {
            key: "spreadsheets",
            title: "The process has outgrown spreadsheets",
            body: "Several parallel files live side by side and it is hard to tell which version applies. The same data is entered more than once.",
          },
          {
            key: "misfit",
            title: "General-purpose software does not fit",
            body: "The program in use covers part of the process; the rest is handled in email and notes.",
          },
          {
            key: "erp",
            title: "A large system would be out of proportion",
            body: "The cost, timeline and risk of a full enterprise system do not match the problem to be solved.",
          },
          {
            key: "traceability",
            title: "Nothing can be traced afterwards",
            body: "It is difficult to establish who recorded what, when, and with whose approval.",
          },
          {
            key: "field",
            title: "The work does not happen at a desk",
            body: "Colleagues in the warehouse, the workshop or on site have to record data on paper or over the phone.",
          },
        ],
      },
      scope: {
        title: "What we build",
        intro: "A web application shaped around one operational area, usable in a browser and on mobile.",
        items: [
          {
            key: "inventory",
            title: "Stock and warehouse",
            body: "Goods receipt, issuing, stock movements, counts, batch and expiry tracking, and multiple locations.",
          },
          {
            key: "production",
            title: "Production and traceability",
            body: "Production steps, materials used, quality control points and lot-level traceability, documented as they happen.",
          },
          {
            key: "rental",
            title: "Rental and asset management",
            body: "Condition, availability and movement of assets, with records that connect to contracts and invoicing.",
          },
          {
            key: "service",
            title: "Service and internal administration",
            body: "Job sheets, task assignment, status tracking and approval steps in one place.",
          },
          {
            key: "roles",
            title: "Permissions and audit trail",
            body: "Who can see and change what, and what happened to a given record — in a form that can be looked up.",
          },
          {
            key: "reporting",
            title: "Reporting",
            body: "Management and operational reports from the same database, so there are not two versions of the truth.",
          },
        ],
      },
      fit: {
        title: "How it connects to current operations",
        intro:
          "What works stays. The new application covers the missing part and shares data with the systems already in place.",
        items: [
          {
            key: "keep",
            title: "Proven systems remain",
            body: "Invoicing, accounting and the webshop stay where they are. Replacing the whole estate is not the goal.",
          },
          {
            key: "integrate",
            title: "Data connections where justified",
            body: "Where double entry is a real burden, we connect the systems through a documented interface.",
          },
          {
            key: "migration",
            title: "Existing data taken over",
            body: "Data from spreadsheets and earlier records is migrated with validation and a result that can be reconciled.",
          },
          {
            key: "focus",
            title: "Custom work goes where it matters",
            body: "The parts that recur in every application — sign-in, permissions, audit trail, reporting, data import — are not started from scratch. More of the effort goes into the company's own process.",
          },
        ],
      },
      start: {
        title: "How a project starts",
        intro: "Roll-out can start with one well-bounded area and extend based on results and business needs.",
        steps: [
          {
            key: "assessment",
            name: "Assessment",
            body: "We go through the process and the current tools, then set out in writing the possible solution and the effort involved.",
          },
          {
            key: "first",
            name: "First area",
            body: "A working application for one narrow, well-bounded area, tried on the data available and real process examples.",
          },
          {
            key: "rollout",
            name: "Rollout",
            body: "Data migration, integrations, permissions, training and the switch to daily use.",
          },
          {
            key: "expand",
            name: "Extension",
            body: "If the result of the first area justifies it, the next task can be taken on by a separate decision.",
          },
        ],
      },
      evidence: {
        title: "Related engineering material",
        intro:
          "Our public material shows how these operational areas are structured. These are not client systems and not products for sale.",
        keys: ["warehouse-management", "wms-food-prod", "crentsys"],
      },
      technical: {
        title: "Technical background",
        intro: "A short summary of the implementation.",
        items: [
          "A web application usable on desktop and mobile without separate installation.",
          "A relational database with validated data import and export.",
          "Role-based access management and an event log.",
          "Documented interfaces to existing systems, with backups and monitoring.",
        ],
      },
    },
    "data-forecasting": {
      eyebrow: "Reporting and forecasting from existing data",
      summary: [
        "We build consistent, verifiable reporting from the operational data already available, then — where the data allows it — forecasting for demand, stock and capacity planning.",
        "Forecasting is not an end in itself. It is useful when it appears where the decision is made, alongside a clear indication of how uncertain it is.",
      ],
      situations: {
        title: "What problem does this address?",
        intro: "These situations indicate there is work to do on the data side.",
        items: [
          {
            key: "conflicting",
            title: "Every source gives a different number",
            body: "Invoicing, the warehouse and spreadsheets answer the same question differently, and reconciling them is manual work.",
          },
          {
            key: "slow",
            title: "Management reporting arrives late",
            body: "Producing the report takes days, so decisions always rest on outdated figures.",
          },
          {
            key: "planning",
            title: "Planning rests on estimates",
            body: "Order quantities, stock levels and capacity are set from experience rather than figures.",
          },
          {
            key: "stock",
            title: "Shortages and surplus at the same time",
            body: "Some items sit in the warehouse in excess while others run out regularly.",
          },
          {
            key: "dashboard",
            title: "Reporting does not reach daily decisions",
            body: "Reporting exists, but on a separate screen away from the workflow, so it is not available where the decision is made.",
          },
        ],
      },
      scope: {
        title: "What we build",
        intro: "From sorting out the data to forecasting — each step produces a result that is usable on its own.",
        items: [
          {
            key: "consolidation",
            title: "Consolidating data",
            body: "Data from existing systems brought together in one place, with consistent definitions and validated import.",
          },
          {
            key: "validation",
            title: "Data quality checks",
            body: "Missing, contradictory and duplicated records made visible, so it is clear what can safely be built on.",
          },
          {
            key: "reporting",
            title: "Management and operational reporting",
            body: "Reports from a single database that give every user the same result.",
          },
          {
            key: "forecast",
            title: "Demand, stock and capacity forecasting",
            body: "Time-series forecasting where sufficient and reasonably reliable history is available.",
          },
          {
            key: "uncertainty",
            title: "Evaluation and uncertainty",
            body: "Forecast accuracy can be measured back, and results can be presented together with an uncertainty range rather than as a single number.",
          },
          {
            key: "scenario",
            title: "Scenarios",
            body: "Where the data allows it, what-if comparisons can also be built. This is not an automatic part of every project.",
          },
        ],
      },
      fit: {
        title: "How it connects to current operations",
        intro:
          "Analysis supports operations when it is available at the point of decision — not on yet another screen someone has to open.",
        items: [
          {
            key: "sources",
            title: "Existing systems are the data sources",
            body: "Invoicing, warehouse records, the webshop and spreadsheets stay. We read from them on a scheduled, validated basis.",
          },
          {
            key: "inline",
            title: "The figure at the point of decision",
            body: "The suggested order quantity or expected load is visible where the order or the schedule is put together.",
          },
          {
            key: "ownership",
            title: "Unambiguous definitions",
            body: "We record exactly what a measure means, so different areas are talking about the same thing.",
          },
          {
            key: "review",
            title: "Human override",
            body: "A forecast is decision-support information; it can be overridden where needed, and the reason for the change can be recorded.",
          },
        ],
      },
      maturity: {
        title: "A realistic order",
        intro:
          "If the source data is inaccurate, the forecast will be too. These steps are best taken in this order.",
        steps: [
          {
            key: "quality",
            name: "1. Data quality",
            body: "Consolidating and cleaning the data and exposing the gaps. Without this, every later step rests on uncertain ground.",
          },
          {
            key: "reporting",
            name: "2. Reliable reporting",
            body: "Consistent, quickly available reports that reflect what actually happens.",
          },
          {
            key: "forecast",
            name: "3. Forecasting",
            body: "Time-series forecasting on stable data, with accuracy measured regularly.",
          },
          {
            key: "support",
            name: "4. Decision support",
            body: "The forecast built into ordering, stock and capacity planning.",
          },
        ],
      },
      figure: true,
      start: {
        title: "How a project starts",
        intro: "We start by reviewing the data, because that determines what can be built.",
        steps: [
          {
            key: "assessment",
            name: "Data assessment",
            body: "We review the available data, its quality and how far back it goes, then set out in writing what can be built on it.",
          },
          {
            key: "first",
            name: "First report",
            body: "A report or forecast for one specific decision, tried on real data.",
          },
          {
            key: "rollout",
            name: "Rollout",
            body: "Scheduled data refresh, access, training and integration into daily use.",
          },
          {
            key: "expand",
            name: "Extension",
            body: "Further product groups, sites or decision points once the first area has proven itself.",
          },
        ],
      },
      evidence: {
        title: "Related engineering material",
        intro:
          "Our public material shows how we structure forecasting and warehouse data work. These are not client deployments.",
        keys: ["forecastlabai", "warehouse-management"],
      },
      technical: {
        title: "Technical background",
        intro: "A short summary for those interested in the implementation.",
        items: [
          "Scheduled data loading from source systems, with validation rules and an error list.",
          "A relational database with a consistent definition layer underneath the reports.",
          "Time-series forecasting methods, evaluated against earlier periods with ongoing accuracy tracking.",
          "Results available through an interface as well, so they can be embedded in the applications in use.",
        ],
      },
    },
    "software-integrations": {
      eyebrow: "Connecting systems and focused custom development",
      summary: [
        "Invoicing, the webshop, accounting, warehouse records and spreadsheets can stay where they are. The goal is to remove duplicate data entry and fill in the missing steps of a process.",
        "Custom development is concentrated on the part that is genuinely specific to the company; everything else builds on data already held in the existing systems where possible.",
      ],
      situations: {
        title: "When is it justified?",
        intro:
          "In these situations it is worth examining whether a data connection or focused development would simplify day-to-day work.",
        items: [
          {
            key: "double-entry",
            title: "The same data is entered into several systems",
            body: "Orders, partner records or stock movements are typed into two or three places by hand. Discrepancies surface later.",
          },
          {
            key: "manual-reconciliation",
            title: "CSV and Excel reconciliation by hand",
            body: "Exported files and formulas stand in for a real connection, usually resting on the knowledge of one or two colleagues.",
          },
          {
            key: "partial-coverage",
            title: "One system covers only part of the workflow",
            body: "Halfway through the process email, phone calls or notes take over, and the record keeping breaks there.",
          },
          {
            key: "legacy",
            title: "Important data sits in a legacy or in-house tool",
            body: "The tool is dated, but daily operations still depend on the data and logic inside it.",
          },
          {
            key: "migration",
            title: "Data has to be taken over from earlier records",
            body: "When systems change or merge, older data needs to be carried across in a verifiable way rather than retyped.",
          },
        ],
      },
      scope: {
        title: "What we build",
        intro: "Scope depends on which interfaces are available and where the real manual burden sits.",
        items: [
          {
            key: "connections",
            title: "Documented data connections",
            body: "Data exchange between systems with a written field mapping, so it stays clear later where each value comes from.",
          },
          {
            key: "api",
            title: "API integration where an interface exists",
            body: "Where the system involved offers a suitable programming interface, we connect the data through it.",
          },
          {
            key: "files",
            title: "Scheduled file and data exchange",
            body: "Where an API is unavailable or not appropriate, scheduled export and import can work, with an error list and repeatable runs.",
          },
          {
            key: "migration",
            title: "Data migration with validation",
            body: "Existing records are taken over with checks and a reconcilable result, so the figures can be verified afterwards.",
          },
          {
            key: "custom",
            title: "Focused custom functionality",
            body: "Web or application functionality for the missing workflow step — completing the process rather than replacing whole systems.",
          },
          {
            key: "logging",
            title: "Logging and error handling",
            body: "Where a data connection matters commercially, logging, error signalling and re-run capability are built around it.",
          },
        ],
      },
      criteria: {
        title: "How we decide what is worth connecting",
        intro: "Not every connection pays off. These are the questions we go through during the assessment.",
        items: [
          "How much burden duplicate entry or manual reconciliation actually creates today.",
          "Which system is the primary source for a given data set, and who owns its content.",
          "Whether a usable interface exists, and how well it is documented.",
          "The quality of the data: how many records are missing, duplicated or contradictory.",
          "What happens if the connection is temporarily unavailable, and how it can be recovered.",
        ],
        note: "If a connection turns out to be disproportionately complex compared with the expected benefit, we say so at the end of the assessment.",
      },
      start: {
        title: "How it starts",
        intro: "The first step is a map of systems and data, not development.",
        steps: [
          {
            key: "mapping",
            name: "System and process map",
            body: "We go through which systems are in use, what data moves between them, and where the transfer happens by hand.",
          },
          {
            key: "interfaces",
            name: "Interfaces and data samples",
            body: "We review the available interfaces, exports and a few real data samples so feasibility can be judged.",
          },
          {
            key: "first",
            name: "First connection or migration slice",
            body: "One well-bounded data connection or migration step is delivered, with evaluation criteria agreed in advance.",
          },
          {
            key: "rollout",
            name: "Live use and documentation",
            body: "Scheduling, error handling, monitoring signals and written documentation for operations.",
          },
        ],
      },
      evidence: {
        title: "Related engineering material",
        intro:
          "Our public material shows how data connections, imports and exports are structured. These are not client deployments.",
        keys: ["crentsys", "warehouse-management", "forecastlabai"],
      },
      technical: {
        title: "Technical background",
        intro: "Implementation depends on the systems involved; the following are options, not a required architecture.",
        items: [
          "HTTP-based interfaces where the system involved offers them.",
          "File-based import and export on a schedule, with an error list and repeatable runs.",
          "A relational database for shared data and for verifying reconciliations.",
          "Queues and scheduled jobs for longer-running or time-based transfers, where justified.",
        ],
      },
    },
    "devops-infrastructure": {
      eyebrow: "The technical background that keeps delivered systems running",
      summary: [
        "Part of development is planning how the system will be deployed, updated, monitored and restored. How much infrastructure work is needed follows from the business importance of the solution and the company's existing environment.",
        "This is not a general hosting service: we set up the technical background required to operate the business, data and AI solutions we deliver.",
      ],
      situations: {
        title: "When is more operational control needed?",
        intro:
          "The greater the operational risk, the more attention deployment, monitoring and recovery deserve.",
        items: [
          {
            key: "critical",
            title: "A business-critical process",
            body: "If an outage immediately affects service, production or invoicing, the recovery path has to be defined in advance.",
          },
          {
            key: "sensitive",
            title: "Sensitive or internal data",
            body: "Personal, contractual or internal business data means access and logging need separate design.",
          },
          {
            key: "multi-site",
            title: "Several sites or many users",
            body: "Multiple locations, shifts or larger user numbers make availability and access management more complex.",
          },
          {
            key: "integrations",
            title: "External integrations",
            body: "When the system exchanges data with others, detecting failures and re-running transfers is part of the solution.",
          },
          {
            key: "recovery",
            title: "A recovery requirement",
            body: "If getting back up within a defined time is expected, backup and restore have to be designed for that.",
          },
        ],
      },
      scope: {
        title: "What it can cover",
        intro: "From the list below we include what the importance of the solution and the existing environment justify.",
        items: [
          {
            key: "deploy",
            title: "Repeatable deployment and release",
            body: "Deployment and version changes follow written, repeatable steps, so a change can be traced and reversed.",
          },
          {
            key: "config",
            title: "Environments, configuration, secrets",
            body: "Separated test and production environments, with configuration and access keys kept apart from the code.",
          },
          {
            key: "monitoring",
            title: "Monitoring, logging, health checks",
            body: "Basic operational signals and logs, so a failure is not first discovered through a user report.",
          },
          {
            key: "backup",
            title: "Backup and restore",
            body: "A backup routine plus the ability to verify a restore — a backup on its own is not enough.",
          },
          {
            key: "access",
            title: "Access, roles, network boundaries",
            body: "Who can reach what, in which role, and what network exposure is justified for the system in question.",
          },
          {
            key: "runbook",
            title: "Updates, rollback, operational notes",
            body: "Written guidance on how updates run, how to roll back, and how to handle common operational tasks.",
          },
        ],
      },
      criteria: {
        title: "Where the system can run",
        intro:
          "The runtime environment follows the company's existing practice, data-handling expectations and internal capacity.",
        items: [
          "In the company's own, locally managed environment.",
          "At a cloud provider, where access, scaling or maintenance is simpler that way.",
          "In a mixed setup, with some parts on-premises and others in the cloud.",
        ],
        note: "We are not tied to a single provider. The decision depends on data-handling expectations, existing contracts and available operational capacity.",
      },
      fit: {
        title: "Handover and operability",
        intro:
          "Running the system should not depend solely on the developer. Handover therefore includes documentation and clear responsibility boundaries.",
        items: [
          {
            key: "documentation",
            title: "Documented configuration and deployment",
            body: "We record in writing how the environment is put together and what steps deploy or update it.",
          },
          {
            key: "signals",
            title: "Monitoring signals",
            body: "We define which signals indicate a fault and where they are visible during daily operation.",
          },
          {
            key: "restore",
            title: "Backup and restore instructions",
            body: "We document what is backed up, how often, and what steps restore it.",
          },
          {
            key: "boundaries",
            title: "Responsibility boundaries",
            body: "We make clear what belongs to internal IT, to the provider, and to us.",
          },
        ],
      },
      start: {
        title: "How it starts",
        intro: "Operational questions are addressed alongside development, not afterwards.",
        steps: [
          {
            key: "review",
            name: "Review of the environment",
            body: "We go through current servers, access, backups and internal operational practice.",
          },
          {
            key: "requirements",
            name: "Recording expectations",
            body: "We write down what availability, data handling and recovery the solution actually justifies.",
          },
          {
            key: "setup",
            name: "Deployment and monitoring setup",
            body: "Environments, deployment process, basic monitoring and backups, sized to the solution.",
          },
          {
            key: "handover",
            name: "Handover and documentation",
            body: "Operational documentation, a tested restore, and clarified responsibility boundaries.",
          },
        ],
      },
      evidence: {
        title: "Related engineering material",
        intro:
          "Our public material shows the deployment and observability approach. These are not client environments.",
        keys: ["wms-food-prod", "warehouse-management", "forecastlabai"],
      },
      technical: {
        title: "Technical background",
        intro: "Implementation options, not a required architecture or a service promise.",
        items: [
          "Container-based deployment where standardising the environment justifies it.",
          "Automated build and release, so changes can be traced and reversed.",
          "Basic metrics, log collection and health checks to follow how the system behaves.",
          "Reverse proxy, network separation and access restrictions, sized to the system's exposure.",
        ],
      },
    },
  },
  referencesPage: {
    eyebrow: "Public engineering material",
    summary: [
      "We publish engineering material and reference architectures so that our way of working can be judged from concrete code and documentation.",
      "These are engineering references, not client references: they do not represent commercial deployments or off-the-shelf products.",
    ],
    howToRead: {
      title: "How to read these",
      intro: "For each item, three things are worth looking at separately.",
      items: [
        {
          key: "scope",
          title: "Scope",
          body: "Which operational area and which problem the material models — for example warehouse issuing, production traceability or demand forecasting.",
        },
        {
          key: "evidence",
          title: "Evidence",
          body: "What is actually visible in the public material: code, specification, architecture, data model or operational patterns.",
        },
        {
          key: "maturity",
          title: "Maturity",
          body: "The status label describes the maturity of the public material, not whether the solution is in live use at a client.",
        },
      ],
    },
    legend: {
      title: "About the status labels",
      intro:
        "We use three levels: reference architecture, prototype and working demonstrator. The label shown next to an item is the one that applies to it.",
      note: "At present all of our public material is shown at reference-architecture level. We only raise the maturity when the public material supports it.",
    },
    limits: {
      title: "What an engineering reference does not mean",
      intro: "It matters that these materials are understood for exactly what they prove.",
      items: [
        "It is not a client reference, and does not mean the solution is in use at a particular company.",
        "It does not prove a live, production deployment.",
        "It is not a packaged product that can be bought unchanged.",
      ],
      note: "What it does show is how we think about architecture, data modelling and implementation decisions — to the extent visible in the public material.",
    },
    evidenceLabel: "What is visible in the material",
  },
  processPage: {
    eyebrow: "Working in stages, without mandatory packages",
    summary: [
      "We work in five stages. Each produces a result that stands on its own, and continuing is a decision made at the end of each stage.",
      "These are conceptual stages, not packages to be bought up front. Not every piece of work reaches all of them, and some conclude at the first.",
    ],
    stages: {
      title: "The stages of working together",
      intro: "The stages build on each other, but each also stands alone.",
      outputLabel: "Output",
      items: [
        {
          key: "start",
          code: "START",
          name: "Assessment and first task",
          body: "We go through the process involved, the systems in use, the available data and the constraints.",
          output:
            "A written summary of scope, constraints, available data and interfaces, with a recommended first, well-bounded task.",
        },
        {
          key: "core",
          code: "CORE",
          name: "A working base solution",
          body: "A working solution is built for one well-bounded workflow or feature.",
          output:
            "A usable solution running on available data or a representative sample, with evaluation criteria agreed in advance.",
        },
        {
          key: "extend",
          code: "EXTEND",
          name: "Related processes and integrations",
          body: "Bringing in the processes around the solution where this is commercially justified.",
          output:
            "Data connections, migration, additional roles and workflows — each a separately decidable step.",
        },
        {
          key: "intelligence",
          code: "INTELLIGENCE",
          name: "Reporting, forecasting and AI where justified",
          body: "Reporting, forecasting or AI support comes into play when the data and the business question support it.",
          output:
            "A report, forecast or AI function together with a way of evaluating it. This stage is not justified for every piece of work.",
        },
        {
          key: "operate",
          code: "OPERATE",
          name: "Operation and further development",
          body: "Setting up the technical and organisational frame needed to run the system.",
          output:
            "Deployment and monitoring arrangements, backup and restore, documentation, and recorded maintenance boundaries.",
        },
      ],
      note: "Stage boundaries are decision points: at the end of each one it can be decided whether continuing makes sense.",
    },
    prepare: {
      title: "What we ask for before the first conversation",
      intro: "Nothing unusual. This is normally enough for us to give a sensible recommendation.",
      items: [
        "A short description of how the process runs today.",
        "Which systems and tools are used for it at the moment.",
        "A few representative data samples or a typical document, if available.",
        "The most disruptive point in day-to-day operation.",
        "Who uses the process, and in what role.",
      ],
      note: "We do not ask for sensitive or production data before an agreement. An anonymised or representative sample is usually enough for the assessment.",
    },
    outputs: {
      title: "What the company receives at the end of each stage",
      intro: "Every stage closes with something concrete: a written document or a working solution, not a general consulting summary.",
      items: [
        {
          key: "written",
          title: "Written scope and constraints",
          body: "What can be built, which data it relies on, what is left out, and what uncertainties remain.",
        },
        {
          key: "working",
          title: "A working solution",
          body: "A usable function or application for the agreed workflow, in a form that can be tried out.",
        },
        {
          key: "criteria",
          title: "Evaluation criteria",
          body: "Criteria agreed in advance for judging whether the result of a stage met its goal.",
        },
        {
          key: "handover",
          title: "Handover material",
          body: "Deployment, operational and usage documentation, at the depth the solution justifies.",
        },
      ],
    },
    stop: {
      title: "When we stop",
      intro: "An assessment can also conclude that we recommend something other than development.",
      items: [
        "If the current state of the data or process does not justify development.",
        "If the expected benefit cannot be evaluated sensibly, so the effort cannot be weighed against it.",
        "If configuring the existing system, tidying up how it is used, or a simpler organisational step gives a better answer.",
        "If the expectation would rely on data that is not available and cannot realistically be produced in the short term.",
      ],
    },
    dataAccess: {
      title: "Data and access",
      intro: "Access is kept to the narrowest scope the task requires.",
      items: [
        "During assessment we work with representative or anonymised samples wherever possible.",
        "We only request access to a production system when the task requires it and this is agreed beforehand.",
        "The scope, purpose and duration of access can be recorded in writing.",
        "Access can be revoked when the work concludes; we review this together.",
      ],
    },
  },

  solutionsPage: solutionsPageEn,
  solutionFamilies: solutionFamiliesEn,
  solutionDetails: solutionDetailsEn,

  common: {
    skipToContent: "Skip to content",
    languageSwitch: "Language",
    mainNav: "Main navigation",
    openMenu: "Menu",
    closeMenu: "Close menu",
    contactLabel: "Contact",
    emailLabel: "Email",
    moreLabel: "More",
    homeLabel: "Home",
    breadcrumbLabel: "Breadcrumb",
    pageInProgress: "Detailed content for this page is still being expanded. For a specific question, get in touch.",
    currentPageLabel: "Current page",
    appearanceLabel: "Appearance",
    themeToDark: "Switch to dark appearance",
    themeToLight: "Switch to light appearance",
    openRepository: "Open the public repository",
    detailsLabel: "Details",
    solutionAreasTitle: "Solution areas",
    solutionAreasIntro:
      "This area covers several clearly distinct solutions. An implementation normally starts with one of them.",
    familyWhenTitle: "When to consider this family",
    solutionSections: {
      situations: "When it is useful",
      capabilities: "What it can cover",
      inputs: "Inputs and connections",
      start: "How it starts",
      evaluation: "How it is evaluated",
      evidence: "Related engineering material",
      technical: "Technical background",
    },
    searchLabel: "Search",
    searchPlaceholder: "Search the site",
    searchClear: "Clear search",
    searchClose: "Close search",
    searchResultsCount: "{count} results",
    searchNoResults: "No results for this term.",
    searchNoResultsHelp: "Clear the search, browse the solution areas, or get in touch.",
    searchGroups: {
      page: "Page",
      section: "Page section",
      service: "Service",
      solution: "Solution area",
      "solution-detail": "Solution",
      situation: "Business need",
      reference: "Reference",
    },
    ai: {
      label: "AI",
      disclosureTitle: "What did AI do here?",
      whatItDid: "What it did",
      whatItUsed: "What information it used",
      whatToVerify: "What you should verify",
      close: "Close",
    },

  },
  nav: [
    { key: "solutions", label: "Solutions", href: "#megoldasok" },
    { key: "situations", label: "When we help", href: "#helyzetek" },
    { key: "data", label: "Data and forecasting", href: "#adat" },
    { key: "process", label: "How we work", href: "#folyamat" },
    { key: "references", label: "References", href: "#referenciak" },
    { key: "contact", label: "Contact", href: "#kapcsolat" },
  ],
  home: {
    hero: {
      eyebrow: "AI, business software and data solutions for SMEs",
      title: "Software that fits how the business actually runs.",
      body: "We build business applications, automation and data solutions for small and mid-sized companies. The goal is not another isolated system, but simpler day-to-day processes and better use of the data a company already holds.",
      primaryCta: "Discuss your requirement",
      secondaryCta: "See our solutions",
    },
    services: {
      title: "What we do",
      intro:
        "We focus on four main areas. An introduction can start with one well-bounded operational problem and extend from there if needed.",
    },
    situations: {
      title: "When it makes sense to talk to us",
      intro:
        "In the situations below it is worth examining whether purpose-built software, integration, data analysis or automation could simplify the operation.",
      items: [
        {
          key: "excel",
          title: "Manual work and spreadsheets",
          body: "Administration runs on spreadsheets and email. The same data is entered more than once, and nobody is sure which version is current.",
        },
        {
          key: "disconnected",
          title: "Systems that do not talk to each other",
          body: "Invoicing, stock and the webshop each hold their own data, and consolidation happens by hand.",
        },
        {
          key: "operations",
          title: "No suitable system for the operation",
          body: "A general-purpose tool does not cover the warehouse, production, rental or service process, and a full ERP programme would be out of proportion.",
        },
        {
          key: "reporting",
          title: "Slow or inconsistent reporting",
          body: "Management figures arrive days late, and different sources produce different numbers.",
        },
        {
          key: "forecasting",
          title: "Planning without usable numbers",
          body: "Stock, capacity and purchasing decisions rest on experience because there is no reliable forecast to work from.",
        },
        {
          key: "ai",
          title: "AI, but with a real use case",
          body: "There is interest in AI, provided it makes a specific task substantially easier to carry out.",
        },
      ],
    },
    modular: {
      title: "Step-by-step implementation",
      body: "Nothing has to be replaced all at once. We start with one well-chosen area, connect it to the systems already in use, and extend based on results and business needs.",
      points: [
        {
          key: "start",
          title: "Start with one problem",
          body: "We pick an area where the change becomes visible in daily work within a short time.",
        },
        {
          key: "connect",
          title: "Build on what is already there",
          body: "Invoicing, the webshop, accounting and existing spreadsheets stay if they work well. We connect to them rather than replace them.",
        },
        {
          key: "reuse",
          title: "Development focuses on what is needed",
          body: "Recurring parts — users, permissions, reporting, data import — are not rebuilt on every project. Custom work goes into the part that is genuinely company-specific.",
        },
        {
          key: "scale",
          title: "Extend when it is justified",
          body: "Further modules are a business decision, not part of a package bought up front.",
        },
      ],
    },
    solutions: {
      title: "Solution areas",
      intro:
        "These are the areas where we have a worked-out approach, supported by public engineering material and reference architectures. The scope is always shaped by the company's own processes.",
      note: "Solution areas and engineering references, not packaged products.",
      items: [
        {
          key: "inventory",
          name: "Inventory and warehouse",
          summary:
            "Clear handling of goods in, goods out, stock movements and counts, with expiry and lot tracking where the industry requires it.",
        },
        {
          key: "operations",
          name: "Operational processes",
          summary:
            "Job sheets, task assignment, status tracking and approval steps in one place, instead of paper and parallel spreadsheets.",
        },
        {
          key: "production",
          name: "Production and traceability",
          summary:
            "Production steps, materials used and quality checkpoints documented so they can be traced back later.",
        },
        {
          key: "rental",
          name: "Rental and asset management",
          summary:
            "Condition, availability and movement of assets, with records that connect to contracts and invoicing.",
        },
        {
          key: "knowledge",
          name: "Company data and documents",
          summary:
            "Document processing, search across internal material and automation of recurring administrative steps.",
        },
      ],
    },
    data: {
      title: "Data and forecasting",
      heading: "Analysis is only useful when it supports a decision.",
      body: "Reporting and forecasting are not built as a separate system. They sit in the same interface where the work happens, so figures inform daily decisions — how much to order, whether capacity is sufficient, where stock is building up unnecessarily.",
      points: [
        "One consistent data base drawn from existing systems, with validated import.",
        "Demand and capacity planning based on actual figures.",
        "Forecasts that show uncertainty instead of a single number.",
        "Reporting that gives everyone the same result.",
      ],
      chart: {
        title: "Demand: actuals and forecast",
        actualLabel: "Actual",
        forecastLabel: "Forecast",
        bandLabel: "Uncertainty range",
        xAxisLabel: "Period",
        yAxisLabel: "Volume",
        note: "Schematic illustration of the presentation. Not client data.",
      },
    },
    process: {
      title: "How we work",
      intro:
        "Four stages, each with a result that stands on its own. Continuing is decided at the end of each stage.",
      steps: [
        {
          key: "assessment",
          name: "Assessment",
          body: "We review the process and the data available, then set out in writing what can be solved and at what effort.",
        },
        {
          key: "pilot",
          name: "First solution",
          body: "A working solution for a narrow, real task, tried on the data available or a representative sample against evaluation criteria agreed in advance.",
        },
        {
          key: "rollout",
          name: "Rollout",
          body: "Data migration, integrations, training and the switch to daily use alongside existing systems.",
        },
        {
          key: "operate",
          name: "Operation and extension",
          body: "Monitoring, incident handling, access management and the next area of development, at whatever pace suits.",
        },
      ],
    },
    architecture: {
      title: "Solution areas",
      intro:
        "Three areas, thirteen solutions that can be introduced on their own. Implementation usually starts with a single area and grows from there.",
      cta: "Browse all solutions",
    },
    lenses: {
      switcherLabel: "Choose a view",
      situationsTab: "Business needs",
      solutionsTab: "Solution areas",
    },
    references: {
      title: "Engineering references",
      heading: "Public engineering material",
      body: "We publish engineering material and reference implementations. They show how we build — they are not commercial products and not client work.",
      cta: "Open the material on GitHub",
      statusColumn: "Status",
      statusLabels: {
        demonstrator: "Working demonstrator",
        "reference-architecture": "Reference architecture",
        prototype: "Prototype",
      },
      items: [
        {
          key: "crentsys",
          name: "cRentSys",
          summary:
            "Public engineering material for car-rental operations: booking, fleet, staff tasks, reporting, role-based access and audit concepts. Currently specification-level material, not a system running at a client.",
          status: "reference-architecture",
          url: "https://github.com/w7-mgfcode/cRentSys",
          evidence: [
            "Modelling of the rental process: booking, handover and fleet status.",
            "Conceptual structure for staff task assignment and status tracking.",
            "Role-based access and audit principles.",
            "Reporting requirements and the data structure behind them.",
          ],

        },
        {
          key: "forecastlabai",
          name: "ForecastLabAI",
          summary:
            "Engineering reference implementation for retail demand forecasting: forecasting workflow, dashboards and model evaluation on FastAPI and PostgreSQL. Not a commercial deployment.",
          status: "reference-architecture",
          url: "https://github.com/w7-mgfcode/ForecastLabAI",
          evidence: [
            "A demand forecasting workflow from data loading to presenting results.",
            "Model evaluation against earlier periods, with accuracy tracking.",
            "A FastAPI application layer and a PostgreSQL data model.",
            "Dashboards that show the forecast and its uncertainty together.",
            "A container-based development and deployment approach.",
          ],

        },
        {
          key: "wms-food-prod",
          name: "Food production WMS specification",
          summary:
            "Documented reference architecture for production flow, lot-level traceability, HACCP and quality control points, role-based access and operational observability.",
          status: "reference-architecture",
          url: "https://github.com/w7-mgfcode/specs-wms-food-prod",
          evidence: [
            "Detailed description of the production flow and warehouse steps.",
            "Lot-level traceability and the data model behind it.",
            "HACCP and quality control points built into the process.",
            "Documented role-based access and audit principles.",
            "Operational observability and deployment considerations written down.",
          ],

        },
        {
          key: "warehouse-management",
          name: "Warehouse management system",
          summary:
            "Engineering implementation of warehouse records: FEFO issuing, batch and expiry tracking, multiple warehouses, stock reservations, import, export and monitoring.",
          status: "reference-architecture",
          url: "https://github.com/w7-mgfcode/warehouse-management-system",
          evidence: [
            "FEFO-based issuing and stock reservation implemented in code.",
            "Batch and expiry tracking across multiple warehouses.",
            "Data import and export with validation checks.",
            "Monitoring and operational signals for following how the system behaves.",
          ],

        },
      ],
    },

    contact: {
      title: "Contact",
      heading: "Let's go through the actual requirement.",
      body: "Write a few lines about where the process stands and what you want to achieve. After a short conversation we will tell you what a realistic first step looks like — including when that step is not development.",
      cta: "Discuss your requirement",
    },
  },
  footer: {
    columns: [
      {
        key: "services",
        title: "Services",
        pages: ["ai-solutions", "business-systems", "data-forecasting", "software-integrations", "devops-infrastructure"],
      },
      {
        key: "company",
        title: "Company",
        pages: ["solutions", "references", "how-we-work", "about", "contact"],
      },
    ],
    legal: "All rights reserved.",
  },
  services: [
    {
      key: "ai-automation",
      name: "AI and automation",
      summary:
        "Machine support for recurring administrative and decision-support tasks, where the task, the data and the review requirements justify it.",
      points: [
        "Processing documents and incoming data",
        "Search and summarisation across internal material",
        "Automating repeated steps, with review points",
      ],
      tier: "primary",
      pictogram: "automation",
    },
    {
      key: "business-applications",
      name: "Business applications",
      summary:
        "Purpose-built applications shaped around the operation, instead of a large ERP programme.",
      points: [
        "Warehouse, production, rental and service processes",
        "Permissions, approvals and audit trails",
        "Interfaces that work on desktop and mobile",
      ],
      tier: "primary",
      pictogram: "applications",
    },
    {
      key: "data-forecasting",
      name: "Data and forecasting",
      summary: "Reporting and forecasts from existing data, tied to everyday decisions.",
      points: [
        "One consistent data base with validated import",
        "Management and operational reporting",
        "Demand and capacity planning",
      ],
      tier: "primary",
      pictogram: "forecasting",
    },
    {
      key: "integration-operations",
      name: "Integration and operations",
      summary:
        "Connecting systems and keeping them running: data links, operations and security.",
      points: [
        "Links to invoicing, webshop and accounting systems",
        "Data migration and validation",
        "Monitoring, backup and access management",
      ],
      tier: "supporting",
      pictogram: "integration",
    },
  ],
};

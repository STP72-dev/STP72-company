import type {
  SolutionDetailContent,
  SolutionFamilyContent,
  SolutionsPageContent,
} from "./types";
import type { SolutionFamilyKey, SolutionKey } from "@/config/solutions";

/** English solution catalogue: three families, thirteen sub-solutions. */

export const solutionsPageEn: SolutionsPageContent = {
  eyebrow: "Solution catalogue",
  title: "Solutions for specific operational problems",
  summary: [
    "STP72 works across three areas: AI solutions, business systems, and data and forecasting. They combine well, but an implementation almost always starts with one clearly bounded problem.",
    "The catalogue below shows the operational problems we have a worked-out approach for. The actual scope is always determined by the company's own process and the data available.",
  ],
  switcherLabel: "Solution families",
  supporting: {
    title: "Supporting engineering capabilities",
    intro:
      "The areas above rarely stand alone: a delivered solution has to fit the existing environment and stay operable. Two supporting capabilities cover that.",
    items: [
      {
        key: "software-integrations",
        body: "Connects the delivered solution to the systems already in use: data exchange, interfaces, permissions and error handling.",
      },
      {
        key: "devops-infrastructure",
        body: "Makes the delivered system deployable, observable and maintainable: environments, deployment, backup, logging and alerting.",
      },
    ],
  },
};

export const solutionFamiliesEn: Record<SolutionFamilyKey, SolutionFamilyContent> = {
  ai: {
    label: "AI Solutions",
    title: "AI Solutions",
    description:
      "AI is not the goal here; it is a capability inside an existing process: making documents and internal knowledge findable, preparing repetitive administrative work, and adding model capability to applications that already run.",
    when: [
      "The information you need already exists in documents, but finding and combining it takes time.",
      "There is a lot of repetitive administrative preparation that follows describable rules.",
      "An existing application needs model capability without introducing a new system.",
      "Human review at higher-risk points matters.",
    ],
  },
  business: {
    label: "Business Systems",
    title: "Business Systems",
    description:
      "Process- and record-centred software: inventory, operations, production, rental and asset management, and company-specific workflows that no off-the-shelf system covers. AI is at most a supporting element here.",
    when: [
      "Operations run across spreadsheets and email, and current status is hard to establish.",
      "An off-the-shelf system covers part of the process but not the step that matters.",
      "Lot-level traceability or a controlled issuing rule is required.",
      "Several roles work on the same records with different permissions.",
    ],
  },
  data: {
    label: "Data & Forecasting",
    title: "Data & Forecasting",
    description:
      "Decision support: consolidating operational data, defining consistent measures, forecasting with the uncertainty shown, and scenario calculation based on stated assumptions. The aim is not prediction but having something solid to decide on.",
    when: [
      "Data from several systems has to produce one consistent picture.",
      "Demand, stock or capacity planning currently rests on experience alone.",
      "Alternative plans need to be compared before a decision is made.",
      "Management reporting is prepared manually every period.",
    ],
  },
};

const s = (
  key: SolutionKey,
  value: SolutionDetailContent,
): [SolutionKey, SolutionDetailContent] => [key, value];

export const solutionDetailsEn: Record<SolutionKey, SolutionDetailContent> = Object.fromEntries([
  s("company-knowledge-ai", {
    navLabel: "Company Knowledge AI",
    title: "Company knowledge and AI search",
    eyebrow: "Finding internal information",
    summary: [
      "In most companies the information needed already exists: in policies, procedures, product descriptions, past quotes and the systems in use. The problem is not missing information, it is finding it.",
      "This solution makes existing material searchable. Answers point back to the source material wherever the implementation supports it, so the reader can check what the system relied on.",
    ],
    catalogSummary:
      "Makes internal documents, procedures and technical material findable, with references back to the source.",
    catalogPoints: [
      "Natural-language questions over existing material",
      "Source references where the implementation supports it",
      "Permission-aware retrieval where source systems expose access context",
    ],
    situations: [
      "Answering a customer question requires reading across several documents.",
      "Onboarding is slow because knowledge is scattered across many places.",
      "The same question gets different answers depending on who answers it.",
      "Policies are updated, but daily work does not necessarily surface the current version.",
    ],
    capabilities: [
      "Ask a question in natural language, scoped to the company's own material.",
      "Show the source passages used, where the data source allows it.",
      "Handle different document types differently: policy, technical description, tabular data.",
      "Permission-aware retrieval where the source system passes access context.",
      "Collect feedback on useful and incorrect answers so the content can be improved.",
    ],
    inputs: [
      "Internal documents: policies, procedures, manuals, templates.",
      "Product and technical descriptions, price lists, previous quotations.",
      "A structured knowledge base or wiki, if one exists.",
      "Read interfaces of selected business systems, where the data belongs there.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We review what material exists, where it is stored, and which topics cost the most search time.",
      },
      {
        key: "slice",
        name: "Representative material",
        body: "We select a narrow but real document set on which processing and retrieval quality can be judged.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "One user group, one document set, real questions. This is where content gaps surface.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "More material and user groups are added if the first stage justifies it.",
      },
    ],
    evaluation: [
      "We build a question list from actual daily work and measure how usable the results are.",
      "We check that an answer can be traced to a source, and that the source really contains the statement.",
      "We test cases where the system has too little information: the correct behaviour there is to say so.",
      "For permission-bound material we verify that no content appears that the user may not see.",
    ],
    evidenceKeys: [],
    technical: [
      "Document chunking and a retrieval index matched to the content type.",
      "Model calls through a provider interface, with loggable input and output.",
      "Storing source references alongside the answer where processing allows it.",
      "Taking access context from the source system where one is available.",
    ],
    seo: {
      title: "Company Knowledge AI – STP72",
      description:
        "Make internal documents, policies and technical material searchable with natural-language questions and source references.",
    },
  }),
  s("ai-automation", {
    navLabel: "AI Automation",
    title: "AI automation",
    eyebrow: "Repetitive administrative work",
    summary: [
      "A significant amount of time goes into administrative preparation that largely follows rules: sorting incoming documents, extracting data, writing summaries, routing items to the right colleague.",
      "This solution prepares those steps automatically. Human approval stays in the process at the riskier points, because the aim is to speed up preparation, not to remove accountability.",
    ],
    catalogSummary:
      "Automated preparation of document intake, extraction, classification and routing, with human review points.",
    catalogPoints: [
      "Document classification and field extraction",
      "Summaries and routing to the responsible role",
      "Human approval at higher-risk steps",
    ],
    situations: [
      "Many emails or documents arrive daily and sorting them is manual work.",
      "The same data is typed into several systems more than once.",
      "Processing depends on one or two colleagues and stalls when they are away.",
      "Summaries for decisions are written by hand from long documents.",
    ],
    capabilities: [
      "Receive incoming documents and classify them by type.",
      "Field-level extraction into a structured form suitable for further processing.",
      "Produce a short, factual summary from longer material.",
      "Route items to the responsible role based on content.",
      "Insert an approval point wherever a wrong decision has material consequences.",
      "Logging: what happened, from which input, and who approved it.",
    ],
    inputs: [
      "The mailbox or document store where material arrives.",
      "Scanned or digitally received documents: invoices, orders, contracts, reports.",
      "Master data for classification: partners, items, roles.",
      "The target system interface, if the result has to be handed over.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We pick the administrative step that is frequent, describable and costs measurable time.",
      },
      {
        key: "slice",
        name: "Sample material",
        body: "We process a sample of real documents, including irregular and incomplete cases.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "One document type taken from intake to approval on live data.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further document types or departments are added if the first stage justifies it.",
      },
    ],
    evaluation: [
      "Extracted data is compared with manual processing of the same sample.",
      "Incomplete, poor-quality and non-standard documents are examined separately.",
      "We verify that uncertain cases actually reach human approval.",
      "We track how often approvers correct the automated result, and what they correct.",
    ],
    evidenceKeys: [],
    technical: [
      "Document reading and text extraction matched to the source format.",
      "Schema-based structured output so the next system can process it.",
      "An uncertainty threshold above which the process requests human approval.",
      "Logging and re-runnability when processing fails.",
    ],
    seo: {
      title: "AI Automation – STP72",
      description:
        "Automated preparation of document intake, data extraction, classification and routing, with human review points.",
    },
  }),
  s("ai-agents", {
    navLabel: "AI Agents",
    title: "AI agents",
    eyebrow: "Bounded multi-step tasks",
    summary: [
      "An agent here means a bounded software component that can coordinate a predefined multi-step task: gather information, prepare a structured action, and call the tools it has been permitted to use.",
      "This is not an autonomous employee and not unlimited system access. Permissions, logging and approval points are matched to the risk of the task.",
    ],
    catalogSummary:
      "Coordinates a bounded multi-step task using approved tools, with logging and approval points.",
    catalogPoints: [
      "A predefined task, not open-ended authority",
      "Approved tools and interfaces only",
      "Logging and approval points according to risk",
    ],
    situations: [
      "A recurring task requires opening several systems and combining the results by hand.",
      "The steps are describable, but they cost the colleague many small context switches.",
      "Preparation can be automated, but the final decision must stay with a person.",
      "The steps performed have to be auditable afterwards.",
    ],
    capabilities: [
      "Break a task into predefined steps with fixed boundaries.",
      "Gather information from approved sources only.",
      "Prepare a structured action: a form, record, message or summary.",
      "Call approved tools and interfaces; nothing else is reachable.",
      "Stop at an approval point where the consequence of the step is significant.",
      "A full step log of the operations performed.",
    ],
    inputs: [
      "A step-by-step description of the process, including decision points.",
      "The interfaces of the systems the agent may use.",
      "Permission rules: what it may read and what it may write.",
      "The approvers and the threshold above which approval is mandatory.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We select a task that is multi-step, repetitive and can be described precisely.",
      },
      {
        key: "boundaries",
        name: "Setting boundaries",
        body: "We fix which tools it may use, what it must not do, and where approval is mandatory.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "The agent completes a single task, initially with approval at every step.",
      },
      {
        key: "rollout",
        name: "Gradual relaxation",
        body: "Approval points are relaxed only where the logs justify it.",
      },
    ],
    evaluation: [
      "The task is run on real cases and compared with manual execution.",
      "We verify that the agent cannot step outside its permitted tool set.",
      "Faulty and incomplete input is tested separately: the correct behaviour is to stop.",
      "Every operation performed must be traceable in the log.",
    ],
    evidenceKeys: [],
    technical: [
      "An explicit tool-call list with deny-by-default access.",
      "Per-step logging of input, decision and result.",
      "Approval states handled in the process state machine.",
      "Time limits and stop conditions to avoid endless retries.",
    ],
    seo: {
      title: "AI Agents – STP72",
      description:
        "Bounded software agents that coordinate defined multi-step tasks using approved tools, with logging and approval points.",
    },
  }),
  s("ai-integration", {
    navLabel: "AI Integration",
    title: "AI integration",
    eyebrow: "Model capability inside an existing application",
    summary: [
      "Not every AI task needs a new system. Often the best answer is to place the model capability inside the application or process people already use.",
      "This work is about the boundary: where the model is called, what structured input it receives, in what form it returns a result, and what happens when the service is unavailable or returns something unusable.",
    ],
    catalogSummary:
      "Adds model capability to an existing application or process, with controlled input and output.",
    catalogPoints: [
      "A defined model and provider boundary",
      "Structured, schema-based input and output",
      "Logging and fallback behaviour on failure",
    ],
    situations: [
      "There is a working application and model capability is needed at one point in it.",
      "The company does not want to replace its existing business system.",
      "Several providers are possible and lock-in should be avoided.",
      "AI call results have to be logged and auditable.",
    ],
    capabilities: [
      "Insert a model call into the workflow of the existing application.",
      "A provider-independent boundary so the model stays replaceable.",
      "Schema-based structured output the rest of the system can process.",
      "Logging: input, output, timestamp, user.",
      "Fallback behaviour on error, timeout or unusable responses.",
      "Cost and usage monitoring where that is warranted.",
    ],
    inputs: [
      "The point in the existing application or process where the capability belongs.",
      "Available interfaces: API, database, message queue.",
      "Provider access and its terms of use.",
      "Data handling constraints: what may not leave the company environment.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We identify the point in the process where a model makes a real difference.",
      },
      {
        key: "slice",
        name: "Boundary definition",
        body: "We fix the input and output schema, then try it on one narrow function.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "One function goes live with logging and fallback behaviour.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further functions are connected if logs and feedback justify it.",
      },
    ],
    evaluation: [
      "We verify that output matches the expected schema and that bad responses are a handled case.",
      "We test service outage: the process must remain in a sensible state.",
      "Model results are compared with the previous manual or rule-based approach.",
      "Logs are reviewed: call volume, error rate, typical problems.",
    ],
    evidenceKeys: ["forecastlabai"],
    technical: [
      "Provider calls in a separate layer with a replaceable implementation.",
      "Schema-based response parsing and validation.",
      "Retry and timeout handling.",
      "Logging detailed enough to stay auditable.",
    ],
    seo: {
      title: "AI Integration – STP72",
      description:
        "Add model capability to an existing application: structured input and output, logging, fallbacks and a provider-independent boundary.",
    },
  }),

  s("inventory-wms", {
    navLabel: "Inventory & WMS",
    title: "Inventory and warehouse management",
    eyebrow: "Warehouse records and stock movement",
    summary: [
      "Inventory records become a problem when recorded quantities and physical stock diverge. The cause is usually not missing software but movements recorded away from where and when they happen.",
      "This solution covers the warehouse process from receiving to issuing, adapted to the company's own rules: lot and expiry tracking, reservations, multiple warehouses, and logged role-based access.",
    ],
    catalogSummary:
      "Warehouse process and stock records: receiving, issuing, reservations, lot and expiry tracking, multiple warehouses.",
    catalogPoints: [
      "Receiving, issuing and stock movement records",
      "Lot, batch and expiry tracking, FEFO where the process requires it",
      "Reservations, multi-warehouse, import and export",
    ],
    situations: [
      "Recorded and physical stock differ regularly.",
      "For expiry-bound goods it is unclear which lot should be issued.",
      "Goods move between warehouses or locations without one consistent view.",
      "Stocktaking is slow because movements are reconstructed after the fact.",
      "There is no record of who changed a stock figure and when.",
    ],
    capabilities: [
      "Record receiving and issuing where the work actually happens.",
      "Track stock movements and transfers at storage-location level.",
      "Reservations: separate committed stock from freely available stock.",
      "Lot, batch and expiry tracking, with FEFO issuing where the process requires it.",
      "Multiple warehouses and storage structures.",
      "Validated import and export, role-based permissions and audit trail.",
    ],
    inputs: [
      "Item master data with units and packaging units.",
      "Warehouse and storage-location structure.",
      "Incoming and outgoing documents, if they come from another system.",
      "The interface of the existing invoicing or ERP system, if stock data has to be shared.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We walk through the actual warehouse process and locate where the divergence appears.",
      },
      {
        key: "slice",
        name: "One process segment",
        body: "One warehouse or product group is described precisely, on real data.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "Receiving and issuing go live for one area, with movements recorded on the spot.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further warehouses, product groups and interfaces are connected.",
      },
    ],
    evaluation: [
      "Recorded stock is compared with a physical count within a bounded area.",
      "We verify that reservations genuinely prevent double commitment.",
      "For expiry-bound goods we test that the issuing order follows the rule.",
      "The audit trail is reviewed: every stock change must map to a user and a document.",
    ],
    evidenceKeys: ["warehouse-management", "wms-food-prod"],
    technical: [
      "A movement-based data model where current state derives from recorded movements.",
      "Lot- and expiry-level records where the process requires them.",
      "Import and export channels with validation and error reporting.",
      "Role-based permissions and complete audit logging.",
    ],
    seo: {
      title: "Inventory & WMS – STP72",
      description:
        "Warehouse process and stock records: receiving, issuing, reservations, lot and expiry tracking, FEFO, multi-warehouse and audit trail.",
    },
  }),
  s("erp-operations", {
    navLabel: "ERP / Operations",
    title: "ERP and operations management",
    eyebrow: "Operational processes in one place",
    summary: [
      "This is not a promise to replace a full enterprise ERP. At SME scale the question is rarely how to fit everything into one large system, but how to make the essential steps of daily operations traceable and handoverable.",
      "The aim is a focused operations layer shaped around the company's process: master data, order and job states, approvals, operational records, and a few management views that are genuinely used.",
    ],
    catalogSummary:
      "Focused, process-shaped operations software: master data, job states, approvals and management views.",
    catalogPoints: [
      "Master data and operational records in one place",
      "Orders, jobs and states tracked end to end",
      "Approval steps and basic management reporting",
    ],
    situations: [
      "Operations run in spreadsheets and current status can only be found by asking.",
      "Several manual handovers sit between order and fulfilment, and information gets lost.",
      "Master data is inconsistent: the same partner or item appears under several names.",
      "Approvals happen by email and are hard to reconstruct later.",
    ],
    capabilities: [
      "Master data management: partners, items, roles, sites.",
      "Records for orders, jobs and tasks with explicit states.",
      "Approval steps at the risky points of the process.",
      "Operational recording: fulfilment, quantity, time spent, notes.",
      "Basic management views of the current state of the process.",
      "Connection to invoicing or accounting systems where the interface allows it.",
    ],
    inputs: [
      "A description of the current process and the spreadsheets in use today.",
      "Existing master data, possibly from several sources, with cleanup needs.",
      "The invoicing or accounting system interface, if there is one.",
      "Roles and permission expectations.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We determine the process segment where structure makes the biggest difference.",
      },
      {
        key: "slice",
        name: "Master data and states",
        body: "We fix master data structure and workflow states against real cases.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "One process runs live end to end, including approvals.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further processes and integrations are added if the first stage justifies it.",
      },
    ],
    evaluation: [
      "Real cases are taken through the process to see where recording breaks down.",
      "We check that states reflect actual operations, not just the theoretical process.",
      "We verify that approvals are traceable and unambiguous.",
      "Management views are compared with the spreadsheets in use today.",
    ],
    evidenceKeys: ["crentsys"],
    technical: [
      "A state-machine workflow with explicit transitions.",
      "Role-based permissions and change logging.",
      "An interface layer towards invoicing or accounting where available.",
      "Reporting directly from operational data, without a separate reporting store where size allows.",
    ],
    seo: {
      title: "ERP & Operations – STP72",
      description:
        "Focused operations software for SMEs: master data, orders, job states, approvals and management views.",
    },
  }),
  s("production", {
    navLabel: "Production",
    title: "Production",
    eyebrow: "Manufacturing process and traceability",
    summary: [
      "In production, most disputes arise when it is impossible to say afterwards which raw material went into which product, and what happened at each step. This question returns in both quality management and customer handling.",
      "This solution records production jobs, material movement and lot-level traceability, with quality checkpoints built into the process wherever the industry requires them.",
    ],
    catalogSummary:
      "Production jobs, material movement and lot-level traceability, with quality checkpoints.",
    catalogPoints: [
      "Production jobs and runs recorded",
      "Material consumption and lot-level traceability",
      "Quality and process checkpoints where required",
    ],
    situations: [
      "In a recall or complaint it is hard to establish which lots are affected.",
      "Raw material consumption is known only in aggregate, not per production job.",
      "Quality checks are done on paper and are not linked to the production record.",
      "The current state of production can only be found by asking.",
    ],
    capabilities: [
      "Records for production jobs and runs with explicit states.",
      "Material consumption recorded with the lots actually used.",
      "Lot-level traceability from raw material to finished goods.",
      "Quality and process checkpoints where the procedure prescribes them.",
      "Finished-goods receipt and stock update.",
      "Status tracking and shop-floor feedback on progress.",
    ],
    inputs: [
      "Product recipes or bills of material, where available.",
      "Raw material and finished-goods master data, with current lot identification practice.",
      "The existing quality procedure and the list of checkpoints.",
      "Warehouse records, if kept in a separate system.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We follow an actual production run and mark where recording has to happen.",
      },
      {
        key: "slice",
        name: "One product type",
        body: "Material movement and traceability are described precisely for one product or line.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "One production process is recorded live with lot tracking and the required checkpoints.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further products, lines and the warehouse side are connected.",
      },
    ],
    evaluation: [
      "We take a finished-goods lot and trace it back to every raw material lot used.",
      "We verify that checkpoints cannot be skipped where they are mandatory.",
      "Accounted and actual material consumption are compared.",
      "We check that shop-floor recording is realistically doable under working conditions.",
    ],
    evidenceKeys: ["wms-food-prod"],
    technical: [
      "A lot-level data model that records both consumption and creation.",
      "Checkpoints wired into the workflow state machine.",
      "A shop-floor interface usable in few steps.",
      "Logging and permissions on quality data.",
    ],
    seo: {
      title: "Production – STP72",
      description:
        "Production jobs, material consumption and lot-level traceability with quality checkpoints built into the process.",
    },
  }),
  s("rental-asset-management", {
    navLabel: "Rental & Asset Management",
    title: "Rental and asset management",
    eyebrow: "Asset availability and movement",
    summary: [
      "In rental and asset management the key question is simple: what is free now, what is out, and when does it come back. Without a reliable answer you get both booking conflicts and idle assets.",
      "This solution tracks fleet availability, bookings and the handover-return process, together with the associated documents and condition records.",
    ],
    catalogSummary:
      "Asset and fleet availability, bookings, handover and return, condition records and documents.",
    catalogPoints: [
      "Availability and booking calendar",
      "Handover and return with condition records",
      "Rental documents and pricing rules",
    ],
    situations: [
      "Bookings are kept in several places and conflicts occur.",
      "Damage found on return is not documented.",
      "Maintenance windows are not reflected in availability.",
      "Rental documents are produced by hand, sometimes with differing content.",
    ],
    capabilities: [
      "Asset and fleet records with condition and availability.",
      "Booking management with conflict checking.",
      "Handover and return records including condition and damage descriptions.",
      "Maintenance-related downtime reflected in availability.",
      "Pricing rules and generation of rental documents.",
      "Owner and management views of utilisation, where the data allows it.",
    ],
    inputs: [
      "Asset master data: identifiers, categories, sites.",
      "The current booking records, even in spreadsheet form.",
      "Pricing rules and the contract templates in use.",
      "Maintenance schedules, where they affect availability.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We review current booking and handover practice and locate the source of conflicts.",
      },
      {
        key: "slice",
        name: "One asset group",
        body: "Availability rules are described precisely for one category or site.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "Booking and handover-return go live, including document generation.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further asset groups, sites and management views are added.",
      },
    ],
    evaluation: [
      "Conflict checking is tested on real booking cases.",
      "We verify that condition recorded at return remains retrievable later.",
      "Availability shown in the system is compared with actual asset status.",
      "Generated document content is checked against current practice.",
    ],
    evidenceKeys: ["crentsys"],
    technical: [
      "An interval-based booking model with conflict checking.",
      "Asset condition history built from handover and return events.",
      "Document templates rendered from rental data.",
      "Role-based permissions and logging.",
    ],
    seo: {
      title: "Rental & Asset Management – STP72",
      description:
        "Fleet and asset management: availability, bookings with conflict checking, handover and return, condition records and rental documents.",
    },
  }),
  s("custom-business-system", {
    navLabel: "Custom Business System",
    title: "Custom business system",
    eyebrow: "Filling the missing workflow",
    summary: [
      "In many companies the essential part of operations falls between two off-the-shelf systems: one covers invoicing, another covers stock, and nobody handles the workflow in between. That part stays in spreadsheets and email.",
      "Custom does not mean rewriting everything. The aim is to build the missing workflow while the systems that work well stay in place.",
    ],
    catalogSummary:
      "Builds the company-specific workflow that falls between existing systems, keeping what already works.",
    catalogPoints: [
      "Only the missing process is built",
      "Roles, forms, records and approvals",
      "Integration with the systems that stay",
    ],
    situations: [
      "Part of the process is handled in spreadsheets and email because no system covers it.",
      "Customising the off-the-shelf system would cost more than building the missing part.",
      "Data from several systems has to be combined in one workflow.",
      "The process is specific to the company and working differently is an advantage.",
    ],
    capabilities: [
      "Workflow and state handling matching the company's actual practice.",
      "Roles, forms and records shaped around the process.",
      "Approval steps and logging.",
      "Reporting on process state and lead time.",
      "Integration with the systems that stay, where interfaces are available.",
      "Incremental extension as the process changes.",
    ],
    inputs: [
      "A description of the current process, with the spreadsheets and templates used today.",
      "Interfaces and data structures of the systems that stay.",
      "Roles and approval rules.",
      "Current data quality, if data comes from several sources.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We define exactly what is missing and what is not worth rebuilding.",
      },
      {
        key: "slice",
        name: "Process slice",
        body: "One clearly bounded segment is described with real cases and data.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "The missing segment goes live while existing systems stay in place.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further segments and integrations follow if usage justifies them.",
      },
    ],
    evaluation: [
      "Real cases are taken through the system to find where it diverges from actual practice.",
      "We verify that the parallel spreadsheet can genuinely be dropped.",
      "Integrations are checked against faulty or delayed data.",
      "Permissions and logging are reviewed at the sensitive points of the process.",
    ],
    evidenceKeys: ["crentsys", "warehouse-management"],
    technical: [
      "A modular structure so process changes do not require a rewrite.",
      "A state-machine workflow with explicit transitions.",
      "An integration layer towards the remaining systems, with error handling.",
      "Role-based permissions and logging.",
    ],
    seo: {
      title: "Custom Business System – STP72",
      description:
        "Build the company-specific workflow that falls between existing systems: roles, records, approvals and integration.",
    },
  }),

  s("analytics", {
    navLabel: "Analytics",
    title: "Analytics",
    eyebrow: "One consistent view of operations",
    summary: [
      "In most companies the data is not missing; a shared interpretation of it is. The same measure has several values because everyone calculates it from a different source with a different definition.",
      "This work consolidates operational data, defines measures unambiguously, and produces reporting that appears where the decision is actually made.",
    ],
    catalogSummary:
      "Consolidates operational data, defines consistent measures, and puts reporting close to the decision.",
    catalogPoints: [
      "Data from several systems consolidated",
      "Consistent, documented measure definitions",
      "Management and operational reporting with drill-down",
    ],
    situations: [
      "Two departments give two different numbers for the same question.",
      "Monthly reporting is produced by copying between spreadsheets.",
      "Data sits in several systems with no shared identifier.",
      "Decision-makers see only totals, never the detail behind them.",
    ],
    capabilities: [
      "Connect data sources and load them on a schedule.",
      "Define measures consistently and document them.",
      "Management and operational reporting from the same data.",
      "Drill-down and segmentation where the data genuinely supports it.",
      "Data quality checks and alerts when a load fails.",
      "Reporting placed in the workflow rather than in a separate system.",
    ],
    inputs: [
      "Databases or exports from the systems involved.",
      "Currently used reports and the calculation logic behind them.",
      "Business definitions of the measures as management understands them.",
      "Master data for joining the sources.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We pick a few measures that currently cause disagreement and clarify their definitions.",
      },
      {
        key: "slice",
        name: "Data slice",
        body: "One source, one period is loaded and its quality is checked.",
      },
      {
        key: "scope",
        name: "First working report",
        body: "One genuinely used report is produced automatically from the defined measures.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further sources, measures and user groups are added.",
      },
    ],
    evaluation: [
      "The new report is compared with today's manual calculation and differences are explained.",
      "We check that a failed load is visible rather than silently producing wrong figures.",
      "Drill-down is validated only to the depth the data actually supports.",
      "Definitions are written down and made available on the report itself.",
    ],
    evidenceKeys: ["forecastlabai"],
    technical: [
      "Scheduled loads from source systems with run logs.",
      "Measures calculated in one place to avoid parallel logic.",
      "Data quality checks as part of the load.",
      "Reports served in the interface where the user already works.",
    ],
    seo: {
      title: "Analytics – STP72",
      description:
        "Consolidate operational data, define consistent measures, and deliver management and operational reporting with quality checks.",
    },
  }),
  s("forecasting", {
    navLabel: "Forecasting",
    title: "Forecasting",
    eyebrow: "Planning demand, stock and capacity",
    summary: [
      "Forecasting is not about telling the future; it is about planning on something more than experience alone. That requires a range alongside the estimate, showing how much uncertainty there is.",
      "The method is chosen by validating it against historical data, and the output is presented so the planner can see how reliable a given forecast is.",
    ],
    catalogSummary:
      "Demand, stock or capacity forecasting with historical validation and uncertainty shown.",
    catalogPoints: [
      "Forecasts with an uncertainty range",
      "Backtesting against earlier periods",
      "Model comparison where warranted",
    ],
    situations: [
      "Order quantities rest on experience and are regularly over or under.",
      "There is seasonality, but no numerical way of handling it.",
      "Stock is simultaneously too high on some items and short on others.",
      "Capacity planning for the coming period has nothing to build on.",
    ],
    capabilities: [
      "Forecast demand, stock requirement or capacity need depending on the data.",
      "Show an uncertainty range alongside the point estimate.",
      "Backtest against earlier periods and track accuracy.",
      "Compare several methods where the data allows it.",
      "Exception handling: flag items where the forecast is not reliable.",
      "Override and review as a capability where the process requires it.",
    ],
    inputs: [
      "Historical sales, issuing or production data, preferably over several years.",
      "Item and partner master data for segmentation.",
      "Known external factors: promotions, seasonality, opening hours, campaigns.",
      "Current planning practice, so there is a baseline for comparison.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We review what historical data exists and in what quality.",
      },
      {
        key: "slice",
        name: "Representative data slice",
        body: "A forecast is produced for one product group or site and backtested.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "The forecast is wired into the planning process, with uncertainty shown.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further product groups, horizons and user groups are added.",
      },
    ],
    evaluation: [
      "The forecast is run over earlier periods and compared with what actually happened.",
      "It is compared with current planning practice over the same period.",
      "Items with sparse or irregular data are examined separately.",
      "Live deviation is tracked so degradation of the method becomes visible.",
    ],
    evidenceKeys: ["forecastlabai"],
    technical: [
      "A forecasting workflow from data load to presentation of results.",
      "Backtesting over earlier periods with stored results.",
      "Uncertainty calculated and shown in the reporting.",
      "Scheduled re-runs with run logs.",
    ],
    seo: {
      title: "Forecasting – STP72",
      description:
        "Demand, stock and capacity forecasting with backtesting, uncertainty ranges and model comparison.",
    },
  }),
  s("what-if-planning", {
    navLabel: "What-if Planning",
    title: "What-if and scenario planning",
    eyebrow: "Comparing alternative plans",
    summary: [
      "Before a decision the question is often not what will happen, but which plan holds up better if things turn out differently. That requires stating assumptions and quantifying their effect.",
      "A scenario is built from the user's assumptions and is kept clearly separate from the data-driven forecast. Its output is not a prediction; it is the consequence of the assumptions given.",
    ],
    catalogSummary:
      "Compare alternative plans built on explicit assumptions, with sensitivity analysis.",
    catalogPoints: [
      "Assumptions stated explicitly",
      "Alternative plans compared side by side",
      "Sensitivity to demand, stock and capacity assumptions",
    ],
    situations: [
      "A capacity investment has to be decided and the effect is not obvious.",
      "Several purchasing or pricing options have to be chosen between.",
      "You need to show what happens if demand is weaker than expected.",
      "The planning debate is really about whose assumptions are used.",
    ],
    capabilities: [
      "Enter and record assumptions so a plan stays interpretable later.",
      "Run and compare several scenarios in parallel.",
      "Sensitivity analysis: which assumption drives the result most.",
      "Data-driven forecast and user scenario shown separately.",
      "Save scenarios and later compare them with actual data.",
      "A comparison report to document the decision.",
    ],
    inputs: [
      "An existing forecast or historical data as a starting point.",
      "The company's planning assumptions: prices, capacity, lead time, utilisation.",
      "Cost and capacity constraints, where they are part of the decision.",
      "Current planning spreadsheets, so the logic can be compared.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We define the concrete decision and the assumptions that influence it.",
      },
      {
        key: "slice",
        name: "Two comparable variants",
        body: "Two scenarios are built from real data with explicit assumptions.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "Scenario calculation is wired into planning with a comparison view.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further variables, constraints and user groups are added.",
      },
    ],
    evaluation: [
      "We verify that the result follows from the stated assumptions and that this is traceable.",
      "Past decision situations are replayed: what the model would have shown then.",
      "Extreme assumptions are tested so the model does not return meaningless output.",
      "Presentation keeps forecast and user assumption visually distinct.",
    ],
    evidenceKeys: ["forecastlabai"],
    technical: [
      "A scenario as a separate, versioned data set including its assumptions.",
      "Re-runnable calculation so results stay reproducible.",
      "A comparison view showing the difference, not just absolute values.",
      "Distinct marking of forecast and scenario in reporting.",
    ],
    seo: {
      title: "What-if Planning – STP72",
      description:
        "Compare alternative plans with explicit assumptions and sensitivity analysis, kept separate from the data-driven forecast.",
    },
  }),
  s("ai-analyst", {
    navLabel: "AI Analyst",
    title: "AI analyst",
    eyebrow: "Questions and answers over company data",
    summary: [
      "Analysis stalls even when reports exist: a management question often fits none of them, and producing the analysis takes days.",
      "The AI analyst answers business questions from governed, defined data. It does not decide and does not replace an analyst: the answer comes with the data source and calculation basis wherever that is possible.",
    ],
    catalogSummary:
      "Natural-language business questions over governed company measures, answered with structure and sources.",
    catalogPoints: [
      "Ask in natural language over defined measures",
      "Structured explanation and comparison",
      "Source context shown; hand-off instead of guessing",
    ],
    situations: [
      "The management question does not fit the existing reports.",
      "Ad hoc analysis always depends on the data team's capacity.",
      "Reports exist, but the link between them has to be found by hand.",
      "A quick but checkable comparison is needed before a decision.",
    ],
    capabilities: [
      "Ask a business question in natural language.",
      "Identify the relevant predefined measure and data source.",
      "Produce a structured explanation, comparison and time breakdown.",
      "Show the source and calculation basis used, where possible.",
      "Hand off to a detailed report or analysis when the question exceeds the defined measures.",
      "Answer negatively when the data does not support the question.",
    ],
    inputs: [
      "Documented measure definitions and their data sources.",
      "The analytics layer where measures are produced consistently.",
      "Permission rules on who may see which data.",
      "A list of typical management questions for evaluation.",
    ],
    start: [
      {
        key: "assess",
        name: "Assessment",
        body: "We collect the questions that genuinely recur in management work.",
      },
      {
        key: "slice",
        name: "Governed measure set",
        body: "Answering is restricted to a narrow, documented set of measures.",
      },
      {
        key: "scope",
        name: "First working scope",
        body: "It goes live for one user group with source references and a feedback path.",
      },
      {
        key: "rollout",
        name: "Extension",
        body: "Further measures and data areas are added if evaluation justifies it.",
      },
    ],
    evaluation: [
      "A real question list is used to check that answers use the right measure and period.",
      "We verify that any figure shown can be traced back to the underlying data.",
      "Questions the data cannot answer are tested separately: a negative answer is correct there.",
      "Permission boundaries are watched: users must not receive data they may not see.",
    ],
    evidenceKeys: [],
    technical: [
      "Answers built only from predefined measures, without open database access.",
      "Mapping the question to a known measure and period, with a clear refusal when it fails.",
      "Source references and calculation basis stored with the answer.",
      "Permission context enforced in the query.",
    ],
    seo: {
      title: "AI Analyst – STP72",
      description:
        "Ask business questions in natural language over governed company measures and get structured, source-referenced answers.",
    },
  }),
]) as Record<SolutionKey, SolutionDetailContent>;

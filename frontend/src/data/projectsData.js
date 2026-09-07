export const PROJECTS_DATA = [
  {
    id: "1",
    slug: "sales-analytics-bi-dashboard",
    title: "Sales Analytics & Business Intelligence Engine",
    category: "Data Analytics",
    summary: "High-throughput business intelligence dashboard delivering multi-dimensional sales aggregation, revenue trend forecasting, and automated regional order breakdown.",
    client: "Enterprise Retail Group",
    timeline: "3 Months",
    role: "Lead Full-Stack & Data Engineer",
    overview: "The client needed to replace legacy fragmented spreadsheets with an executive reporting engine capable of processing millions of transactional records in near real-time without latency bottlenecks.",
    challenge: "Querying raw transactional databases directly for monthly and quarterly reports resulted in query execution times exceeding 12 seconds, blocking client OLTP databases during business hours.",
    solution: "Designed a dedicated analytical reporting pipeline using PostgreSQL read-replicas, index optimization, and materialized views, paired with a responsive React frontend that visualizes sales metrics via custom interactive SVG charts.",
    architecture: [
      "Frontend: React SPA with custom telemetry charts and date-range filters",
      "API Layer: Node.js & Express REST endpoints with server-side caching",
      "Database: PostgreSQL with composite indexing and normalized star schema",
      "Analytics: Python scripts for automated nightly rollups and anomaly detection"
    ],
    schemaHighlights: [
      "Materialized view 'mv_daily_sales_rollup' refreshed every 6 hours",
      "Partitioned 'orders' table by transaction date range",
      "B-Tree indexing on composite keys (store_id, order_timestamp)"
    ],
    metrics: [
      { label: "Query Execution Speed", val: "110ms", note: "Down from 12.4s" },
      { label: "Data Integrity Rate", val: "100%", note: "Deterministic ACID" },
      { label: "Pipeline Throughput", val: "2.4M+", note: "Rows daily" }
    ],
    techStack: ["React", "PostgreSQL", "Node.js", "Python", "Pandas", "SQL"],
    liveTelemetry: {
      mrr: "$148,290",
      activeNodes: "4 Nodes",
      cacheHitRate: "94.2%"
    }
  },
  {
    id: "2",
    slug: "e-commerce-management-platform",
    title: "Omnichannel Commerce Management Platform",
    category: "Web Development",
    summary: "Production-grade e-commerce operations portal handling inventory synchronization, order fulfillment pipelines, and automated multi-warehouse stock allocations.",
    client: "Aura Logistics & Retail",
    timeline: "4 Months",
    role: "Senior Frontend Engineer",
    overview: "A comprehensive administrative portal unifying multiple storefronts into one central control room with real-time stock updates and invoice processing.",
    challenge: "Concurrent orders during seasonal flash sales caused inventory race conditions and checkout delays across distributed warehouse centers.",
    solution: "Engineered an optimistic UI with background polling and transactional inventory checks via Prisma ORM transaction locks, ensuring zero overselling across channels.",
    architecture: [
      "Frontend: React with clean component design tokens and role-based views",
      "Backend: Express.js microservice architecture with JWT token validation",
      "Database: PostgreSQL managed with Prisma schema migrations",
      "Cache: In-memory session tracking and rate-limiting middleware"
    ],
    schemaHighlights: [
      "Row-level locking during inventory reduction transactions",
      "Audit trail table logging all warehouse stock adjustments with timestamps",
      "Normalized SKU catalog table linked to supplier matrices"
    ],
    metrics: [
      { label: "Checkout Latency", val: "<180ms", note: "P99 SLA" },
      { label: "Oversell Incidents", val: "0", note: "Race conditions eliminated" },
      { label: "Orders Processed", val: "45,000+", note: "Monthly volume" }
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    liveTelemetry: {
      mrr: "$320,000",
      activeNodes: "8 Clusters",
      cacheHitRate: "97.8%"
    }
  },
  {
    id: "3",
    slug: "hospital-operations-portal",
    title: "Hospital Operations & Patient Allocation Portal",
    category: "Cloud & IT Solutions",
    summary: "Secure management portal coordinating doctor shift scheduling, administrative patient admissions, and outpatient billing ledgers with strict role-based access.",
    client: "Apex Health Network",
    timeline: "5 Months",
    role: "Full-Stack Architect",
    overview: "Built to streamline patient triage and ward room assignments across three clinical hospital campuses, replacing antiquated desktop terminal software.",
    challenge: "Strict compliance requirements regarding sensitive health data protection, combined with the need for immediate ward availability status for emergency rooms.",
    solution: "Implemented end-to-end data encryption in transit and at rest, scoped permissions using JWT claims, and developed clean, high-contrast UI screens optimized for fast clinical scanning.",
    architecture: [
      "Frontend: Ergonomic React portal with strict WCAG AA contrast standards",
      "Backend: Node.js API with cryptographic hashing and input sanitization",
      "Database: Relational PostgreSQL instance hosted in isolated VPC",
      "DevOps: Dockerized microservices deployed with zero-downtime health checks"
    ],
    schemaHighlights: [
      "Role-Based Access Control (RBAC) linking staff IDs to department grants",
      "Deterministic audit logging on every patient record lookup",
      "Indexed bed allocation registry preventing double bookings"
    ],
    metrics: [
      { label: "Patient Admission Time", val: "-45%", note: "Cut by half" },
      { label: "System Uptime", val: "99.98%", note: "24/7 reliability" },
      { label: "Records Managed", val: "24,000+", note: "Active profiles" }
    ],
    techStack: ["React", "Express.js", "Prisma ORM", "PostgreSQL", "Docker"],
    liveTelemetry: {
      mrr: "Enterprise Tier",
      activeNodes: "Dedicated VPC",
      cacheHitRate: "99.1%"
    }
  },
  {
    id: "4",
    slug: "predictive-customer-churn-model",
    title: "Predictive Customer Churn & Retention Model",
    category: "AI & Machine Learning",
    summary: "Machine learning inference pipeline analyzing customer behavioral telemetry to flag churn risk and trigger automated retention workflows.",
    client: "CloudPulse SaaS",
    timeline: "2.5 Months",
    role: "Data Analyst & ML Developer",
    overview: "A machine learning pipeline integrated into a customer success dashboard that scores account engagement and predicts likelihood of cancellation.",
    challenge: "Customer success teams were discovering account dissatisfaction only after cancellation notices were submitted, leaving no window for intervention.",
    solution: "Trained an ensemble classification model on 18 months of historical telemetry (login frequencies, ticket submissions, feature usage drops) to generate a dynamic 0-100 risk score.",
    architecture: [
      "Inference Engine: Python with Scikit-Learn and Pandas data transformers",
      "API Bridge: FastAPI endpoints serving real-time probability scores",
      "Frontend: Embedded React dashboard cards highlighting at-risk accounts",
      "Storage: PostgreSQL analytical views with weekly score re-calculations"
    ],
    schemaHighlights: [
      "Automated feature vector generation from event tracking tables",
      "Score snapshot history table tracking weekly trajectory shifts",
      "Alert threshold triggers logging automated webhook dispatches"
    ],
    metrics: [
      { label: "Model Accuracy", val: "88.4%", note: "Validation F1-score" },
      { label: "Churn Reduction", val: "22%", note: "First quarter impact" },
      { label: "Accounts Scored", val: "12,500+", note: "Weekly batch" }
    ],
    techStack: ["Python", "Pandas", "Scikit-Learn", "PostgreSQL", "FastAPI", "React"],
    liveTelemetry: {
      mrr: "N/A",
      activeNodes: "Inference Server",
      cacheHitRate: "91.5%"
    }
  },
  {
    id: "5",
    slug: "cross-platform-field-operations-app",
    title: "Cross-Platform Field Operations Mobile Suite",
    category: "Mobile App Development",
    summary: "Cross-platform mobile inspection application allowing field engineers to complete audits, capture biometric signatures, and sync logs offline.",
    client: "Veritas Infrastructure Services",
    timeline: "3.5 Months",
    role: "Mobile Solutions Engineer",
    overview: "Engineered for field technicians inspecting utility infrastructure in rural areas with intermittent or zero cellular connectivity.",
    challenge: "Data collected in remote locations was frequently lost or corrupted due to unreliable network handoffs and device memory crashes.",
    solution: "Designed an offline-first mobile architecture utilizing local SQLite database caching with automatic bidirectional conflict resolution upon network reconnect.",
    architecture: [
      "Mobile App: React Native unified code for iOS and Android",
      "Local Storage: SQLite database with schema versioning",
      "Sync Service: Exponential backoff background worker with TLS encryption",
      "Backend: Express.js ingestion queue with idempotent request processing"
    ],
    schemaHighlights: [
      "UUID primary keys generated on device to prevent network collision",
      "Sync status flag ('pending', 'syncing', 'committed') on inspection rows",
      "Binary payload compression for field photo uploads"
    ],
    metrics: [
      { label: "Offline Data Loss", val: "0%", note: "Zero lost inspections" },
      { label: "Sync Turnaround", val: "<3s", note: "On reconnect" },
      { label: "App Store Rating", val: "4.8/5", note: "Internal enterprise" }
    ],
    techStack: ["React Native", "TypeScript", "SQLite", "Node.js", "Express"],
    liveTelemetry: {
      mrr: "N/A",
      activeNodes: "Mobile Deployed",
      cacheHitRate: "100% Offline"
    }
  },
  {
    id: "6",
    slug: "design-system-token-architecture",
    title: "Nexora Core Design System & UI Architecture",
    category: "UI/UX Design",
    summary: "Centralized component design token architecture and Figma library establishing universal typography, color contrast, and ergonomics.",
    client: "Nexora Solutions Internal Studio",
    timeline: "Ongoing",
    role: "Lead UI/UX Designer & Frontend Engineer",
    overview: "Created to unify all digital client deliverables under a cohesive, high-contrast, accessibility-tested design standard.",
    challenge: "Inconsistent spacing, mismatched card elevations, and poor contrast across light and dark themes caused visual fragmentation in client software.",
    solution: "Engineered a centralized CSS variable design token matrix paired with responsive grid hierarchies and ergonomic mobile touch targets.",
    architecture: [
      "Tokens: CSS custom properties for surfaces, borders, text, and glows",
      "Components: Reusable button, card, modal, and badge primitives",
      "Typography: Plus Jakarta Sans for UI paired with JetBrains Mono for telemetry",
      "Accessibility: Full compliance with WCAG 2.1 AA contrast ratios"
    ],
    schemaHighlights: [
      "Centralized :root and [data-theme] attribute tokens",
      "Fluid clamp() typography scaling without layout shifts",
      "Semantic HTML landmarks across all page templates"
    ],
    metrics: [
      { label: "Lighthouse Score", val: "98/100", note: "Performance benchmark" },
      { label: "WCAG Compliance", val: "AA Level", note: "Zero contrast violations" },
      { label: "Component Count", val: "24+", note: "Production primitives" }
    ],
    techStack: ["Figma", "CSS3 Design Tokens", "HTML5", "JavaScript (ES6+)"],
    liveTelemetry: {
      mrr: "Internal Core",
      activeNodes: "Token Engine",
      cacheHitRate: "100%"
    }
  }
];
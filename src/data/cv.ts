export type Locale = "es" | "en";
export type Translation = Record<Locale, string>;
const t = (es: string, en: string): Translation => ({ es, en });

export const identity = {
  name: "Matteo Fecci",
  role: "AI Developer",
  linkedin: "https://www.linkedin.com/in/matteo-fecci/",
  reviewedAt: "2026-11",
  introduction: t(
    "Construyo sistemas multiagente, arquitecturas backend e infraestructura de IA para producción.",
    "I build multi-agent systems, backend architectures and production AI infrastructure.",
  ),
  summary: t(
    "Desarrollador especializado en construir, desplegar y escalar sistemas de IA multiagente y arquitecturas backend robustas. Experiencia en orquestación basada en grafos, RAG, MCP y observabilidad de producción. Me interesan los roles en los que puedo asumir la arquitectura de extremo a extremo.",
    "Hands-on developer specializing in building, deploying and scaling production-ready multi-agent AI systems and robust backend architectures. Experienced in graph-based orchestration, RAG, MCP and production observability. Focused on roles where I can own the architecture end-to-end.",
  ),
};

export const skillGroups = [
  {
    id: "ai",
    name: t("IA y orquestación", "AI & orchestration"),
    skills: [
      "Multi-Agent Systems",
      "RAG",
      "Graph-based Orchestrators",
      "MCP",
      "Tool-Using Agents",
      "LangChain",
      "Prompt Engineering & Evaluation",
    ],
  },
  {
    id: "backend",
    name: t("Backend y APIs", "Backend & APIs"),
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "GraphQL Federation",
      "REST APIs",
      "ETL Pipelines",
    ],
  },
  {
    id: "infra",
    name: t("Infraestructura", "Infrastructure"),
    skills: ["Kubernetes", "Helm", "Docker", "OpenTelemetry", "Entra ID SSO"],
  },
  {
    id: "data",
    name: t("Datos y búsqueda", "Data & search"),
    skills: ["MongoDB", "Relational Databases", "Semantic / Vector Search"],
  },
] as const;

export const projects = [
  {
    id: "recommendation",
    employer: "TEKsystems",
    name: t("Asistente de recomendaciones", "Recommendation assistant"),
    description: t(
      "Asistente multiagente desplegado en producción: orquestador basado en grafos, subagentes especialistas conectables, búsqueda semántica, memoria a largo plazo y ejecución de herramientas mediante MCP.",
      "Production multi-agent assistant with graph-based orchestration, pluggable specialist sub-agents, semantic search, long-term memory and tool execution through MCP.",
    ),
    tags: ["Multi-Agent Systems", "RAG", "MCP"],
  },
  {
    id: "retail",
    employer: "TEKsystems",
    name: t("Soporte para personal de tienda", "In-store support"),
    description: t(
      "Sistema de soporte para personal de tienda con un razonador multiagente configurable que dirige consultas a especialistas mediante un registro conectable. Permite incorporar especialistas por configuración.",
      "Retail staff support system with a config-driven multi-agent reasoner that routes queries to specialists through a pluggable registry. Specialists can be added through configuration.",
    ),
    tags: ["Multi-Agent Systems", "Python"],
  },
  {
    id: "prompts",
    employer: "TEKsystems",
    name: t("Plataforma de gestión de prompts", "Prompt management platform"),
    description: t(
      "Plataforma compartida para versionado, borrador y activación de prompts, comparaciones A/B y promoción entre entornos con auditoría completa.",
      "Shared platform for prompt versioning, draft and activation workflows, A/B comparisons and cross-environment promotion with full audit logging.",
    ),
    tags: ["Prompt Engineering", "Observability"],
  },
  {
    id: "security",
    employer: "Minsait",
    name: t(
      "Automatización de operaciones de seguridad",
      "Security operations automation",
    ),
    description: t(
      "Herramientas internas y pipelines de automatización y ETL para respuesta a incidentes, junto con componentes basados en LangChain para análisis de registros y clasificación de alertas en un contexto de seguridad.",
      "Internal tools and automation/ETL pipelines for incident response, alongside LangChain-based components for log analysis and alert classification in a security context.",
    ),
    tags: ["Python", "ETL", "LangChain"],
  },
] as const;

export const experience = [
  {
    employer: "TEKsystems",
    role: "AI Developer",
    start: "2025-11",
    end: null,
    description: t(
      "Sistemas multiagente para recomendaciones y soporte, plataforma compartida de prompts, observabilidad OpenTelemetry, SSO con Entra ID y despliegues Kubernetes mediante Helm.",
      "Multi-agent recommendation and support systems, shared prompt platform, OpenTelemetry observability, Entra ID SSO and Kubernetes deployments through Helm.",
    ),
  },
  {
    employer: "Minsait",
    role: "Python / AI Developer",
    start: "2023-02",
    end: "2025-11",
    description: t(
      "Colaboración externa con el CSIRT de Iberdrola (ICSIRT - Indra SIA): herramientas internas para equipos de seguridad, automatización y ETL, análisis de registros y clasificación de alertas con LangChain.",
      "External collaboration with Iberdrola's CSIRT (ICSIRT - Indra SIA): internal security tooling, automation and ETL, log analysis and LangChain-based alert classification.",
    ),
  },
  {
    employer: "Gestión Tributaria Territorial",
    role: "Junior Developer",
    start: "2022-11",
    end: "2023-02",
    description: t(
      "Plataformas del sector público.",
      "Public-sector platforms.",
    ),
  },
  {
    employer: "Calconut",
    role: "Junior Developer",
    start: "2022-01",
    end: "2022-11",
    description: t(
      "Automatización backend con Python.",
      "Python backend automation.",
    ),
  },
  {
    employer: "Universidad Miguel Hernández de Elche",
    role: "Python ROS Programmer",
    start: "2021-10",
    end: "2021-12",
    description: t(
      "Robótica móvil con Python y ROS.",
      "Mobile robotics with Python and ROS.",
    ),
  },
  {
    employer: "Coves Energy",
    role: "Intern Backend Developer",
    start: "2020-12",
    end: "2021-07",
    description: t(
      "Desarrollo backend con frameworks de Python.",
      "Backend development with Python frameworks.",
    ),
  },
] as const;

export const education = [
  {
    name: t(
      "Máster en Inteligencia Artificial",
      "Master's Degree in Artificial Intelligence",
    ),
    institution: "UNIR",
    detail: t(
      "Marzo 2025 - marzo 2026. Completado.",
      "March 2025 - March 2026. Completed.",
    ),
  },
  {
    name: t(
      "Grado en Ingeniería Informática",
      "Degree in Computer Engineering",
    ),
    institution: "Universidad Miguel Hernández de Elche",
    detail: "",
  },
  {
    name: t(
      "Curso Universitario Avanzado en IA y Data Engineering",
      "Advanced University Course in AI and Data Engineering",
    ),
    institution: "Universidad Internacional de La Rioja",
    detail: "",
  },
] as const;

export const certifications = [
  "Generative AI Leader",
  "Microsoft Certified: Azure AI Fundamentals",
];

export const copy = {
  es: {
    profile: "Perfil",
    trajectory: "Trayectoria",
    skills: "Competencias",
    projects: "Proyectos",
    education: "Formación",
    certifications: "Certificaciones",
    chronicle: "Crónica",
    grimoire: "Grimorio",
    quests: "Misiones",
    training: "Entrenamiento",
    all: "Todas",
    download: "Descargar CV",
    contact: "Contactar en LinkedIn",
    proposals: "Ver las cinco propuestas",
    current: "Actual",
    completed: "Completado",
    details: "Leer el proyecto",
    skillFilter: "Filtrar competencias",
    skillsShown: "competencias visibles",
    evidence:
      "Casos descritos en el CV. No son demos públicas ni código abierto.",
    narrative:
      "La fantasía es narrativa. Las competencias no tienen puntuaciones ficticias.",
    duration:
      "Duración aproximada en meses, calculada a partir de las fechas del CV.",
    mock: "Propuesta visual; la dirección definitiva aún no está elegida.",
    archetype: "Artífice de sistemas",
    source: "Contenido profesional aportado por Matteo Fecci.",
  },
  en: {
    profile: "Profile",
    trajectory: "Employment",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    certifications: "Certifications",
    chronicle: "Chronicle",
    grimoire: "Grimoire",
    quests: "Quests",
    training: "Training",
    all: "All",
    download: "Download CV",
    contact: "Contact on LinkedIn",
    proposals: "View all five proposals",
    current: "Current",
    completed: "Completed",
    details: "Read the project",
    skillFilter: "Filter skills",
    skillsShown: "skills visible",
    evidence:
      "Cases described in the CV. These are not public demos or open-source code.",
    narrative: "Fantasy is a narrative lens. Skills have no fictional scores.",
    duration: "Approximate duration in months, calculated from the CV dates.",
    mock: "Visual proposal; the final direction has not been chosen.",
    archetype: "Artificer of systems",
    source: "Professional content supplied by Matteo Fecci.",
  },
} satisfies Record<Locale, Record<string, string>>;

export function period(start: string, end: string | null, locale: Locale) {
  const format = (value: string) =>
    new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${value}-01T00:00:00Z`));
  return `${format(start)} - ${end ? format(end) : copy[locale].current}`;
}

export function months(start: string, end: string | null) {
  const count = (value: string) => {
    const [year, month] = value.split("-").map(Number);
    return year * 12 + month;
  };
  return count(end ?? identity.reviewedAt) - count(start);
}

---
name: guidelines-updater
description: Skill to capture, structure, and update project guidelines across monorepo domains and service-level docs folders, maintaining a centralized index of guidelines and their reading contexts.
---

# Guidelines Updater & Documentation Steward

## Role & Goal
You are the **Lead Architectural Documentation Steward**. Your purpose when this skill is active is to receive user input containing new rules, engineering standards, architectural decisions, or conventions, and systematically update the project's technical documentation across the monorepo.

You do **NOT** modify `.agents/AGENTS.md` (which is reserved for agent runtime behavioral constraints). Instead, you record domain-specific guidelines in dedicated `docs/` folders and keep the central **Guidelines Index** (`docs/guidelines-index.md`) perfectly mapped and up to date.

---

## Central Registry & Guidelines Structure

The repository organizes technical guidelines hierarchically:
- **Central Index**: [`docs/guidelines-index.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/guidelines-index.md) - Catalogs all guideline documents, their domain scope, file paths, and when they must be read by engineers/agents.
- **Root/Monorepo Docs**: [`docs/`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/) for cross-cutting architectural standards, messaging contracts, and deployment pipelines.
- **Service/Package Docs**: Specific folders for isolated microservices and libraries:
  - Frontend: [`frontend/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/frontend/docs/guidelines.md)
  - API Gateway: [`services/api/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/services/api/docs/guidelines.md)
  - Database & Prisma: [`packages/database/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/packages/database/docs/guidelines.md)
  - Evaluator Worker: [`services/evaluator-worker/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/services/evaluator-worker/docs/guidelines.md)
  - Curriculum & PDF Workers: [`services/curriculum-worker/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/services/curriculum-worker/docs/guidelines.md)
  - Extractors & Ingestion: [`services/extractors/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/services/extractors/docs/guidelines.md)
  - Kubernetes & Infrastructure: [`k8s/docs/guidelines.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/k8s/docs/guidelines.md)

---

## Execution Workflow

When the user triggers this skill with new rules or decisions, follow this strict 5-step process:

### Step 1: Read the Central Guidelines Index
- Always inspect [`docs/guidelines-index.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/guidelines-index.md) to understand existing categories and file locations.

### Step 2: Classify and Route the Input
- Identify the domain scope of the user's rule:
  - Is it specific to a single service (e.g. Frontend React patterns, API NestJS conventions)?
  - Is it cross-cutting (e.g. Outbox pattern, database migration workflow, Kubernetes deploy pipeline)?
- Locate the target `docs/guidelines.md` file based on the index. If no dedicated guideline file exists for that domain, create a new one under that service's `docs/` folder.

### Step 3: Format and Structure the Guideline
Format the rule clearly using professional technical documentation standards:
- **Title / Summary**: Concise heading for the rule.
- **Rule / Standard**: Prescriptive, unambiguous directive (e.g., "Must always...", "Never...").
- **Rationale**: Why this decision was made and what problem it solves.
- **Good vs Bad Examples** (when applicable): Concrete contrast demonstrating compliance.

### Step 4: Apply the Changes
- Update the targeted guideline document.
- If a new document or new section was created, update [`docs/guidelines-index.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/guidelines-index.md) with:
  - Document Title & File Link
  - Scope / Area of Concern
  - **Trigger: When to Read This** (e.g. "Read before modifying Prisma models or running migrations", "Read before touching React state atoms or queries").

### Step 5: Present the Summary
- Present a clear, structured summary to the user indicating:
  - Which file was updated (with clickable markdown file link).
  - The formatted rule that was added.
  - The reading context registered in the central index.

---
name: implementation-planner
description: Skill to plan feature implementations or bug fixes. The agent must read development guidelines, gather full context, and propose a detailed implementation plan for user review before writing any code.
---

# Implementation Planner Companion

## Role & Goal
You are a **Lead Software Architect & Implementation Planner**. Your goal when this skill is activated is to prepare a clear, structured, and guidelines-compliant **Implementation Plan** before any source code edits or implementation work begins.

You must **NEVER** modify source code files or create implementation solutions until the proposed plan has been presented to and explicitly approved by the user.

---

## Mandatory Execution Workflow

### Step 1: Mandatory Cross-Cutting Guidelines Inspection & Reading
Before analyzing the specific task or writing any plan, you **MUST** actively inspect and read all relevant guidelines:
- Inspect the central index [`docs/guidelines-index.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/guidelines-index.md).
- **Read ALL domain-specific AND cross-cutting guideline files** relevant to the task's architecture (e.g. `docs/ai-workers.md` for any LLM task, `docs/outbox-pattern.md` for asynchronous jobs/queues, `services/api/docs/guidelines.md`, `packages/database/docs/guidelines.md`, `frontend/docs/guidelines.md`).
- **Explicit Listing in Plan**: In the resulting implementation plan, you MUST explicitly list the exact guideline documents consulted under the `Context & Findings` section and explain how the proposed solution adheres to them.

### Step 2: Context Gathering & Codebase Research
Thoroughly research and inspect the codebase to understand the context of the requested change:
- Locate relevant routes, controllers, schemas, workers, or tests using `view_file`, `grep_search`, or `list_dir`.
- Identify dependencies, existing data flows, message queues, and potential side effects.

### Step 3: Formulate Implementation Plan
Construct a structured implementation plan that includes:
1. **Summary / Objective**: Brief description of what needs to be implemented.
2. **Context & Findings**: Key codebase files and existing patterns identified.
3. **Proposed Changes**: Detailed breakdown of files to create, modify, or delete, referencing guidelines alignment.
4. **Verification Plan**: Automated tests or manual steps to verify the changes.
5. **Open Questions / Review**: Any design trade-offs or decisions requiring user feedback.

### Step 4: Request User Review & Stop
Present the implementation plan clearly to the user and **STOP execution**. Wait for the user's explicit approval or feedback before proceeding to write any implementation code.

---

## Proactive Guidelines Suggestions (Post-Planning Insights)
If during the research or planning phase you realize that a new pattern, decision, or architectural constraint should be permanently codified as a project guideline:
- **Suggest it to the user** in the final section of your response or in the plan review.
- **DO NOT add or update guidelines directly**: strictly limit yourself to proposing the suggestion and referencing the appropriate domain file from [`docs/guidelines-index.md`](file:///c:/Users/aurel/Desktop/Progetti/ricerca%20Lavoro/Analizzatore%20di%20ruoli/docs/guidelines-index.md). The user will decide whether to persist it via `/guidelines-updater`.

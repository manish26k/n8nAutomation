cd "$env:USERPROFILE\Downloads\n8n-ecommerce-poc"

@'
# Architecture Decision Records
## Enterprise n8n + Playwright Ecommerce POC

### ADR-001: n8n as the Orchestration Layer
Status: Accepted

Decision:
Use n8n to coordinate test requests, execution stages,
workflow branching, error handling and reporting.

Rationale:
Separates workflow orchestration from browser automation logic.

### ADR-002: Playwright as the Browser Automation Engine
Status: Accepted

Decision:
Use Playwright with TypeScript for browser interaction,
locators, assertions, fixtures and test execution.

Rationale:
Keeps browser automation deterministic, testable and maintainable.

### ADR-003: Separate Automation Repository
Status: Accepted

Decision:
Create a new standalone repository for this POC.

Rationale:
Provides an independent project structure and avoids coupling
the POC to existing automation frameworks.

### ADR-004: Controlled Node.js Execution Adapter
Status: Accepted

Decision:
Use a controlled local Node.js runner to connect n8n and Playwright.

Rationale:
Defines a clear execution contract and enables structured
status and result handling.

Implementation detail:
The exact invocation mechanism will be selected after reviewing
the n8n installation mode and available security controls.

### ADR-005: Structured Test Results
Status: Accepted

Decision:
Produce machine-readable Playwright results and retain
human-readable reports and failure evidence.

Rationale:
Allows n8n to process outcomes without parsing console text alone.

### ADR-006: Deterministic Test Outcomes
Status: Accepted

Decision:
Playwright assertions determine pass or fail.
AI-generated analysis remains advisory.

Rationale:
Prevents nondeterministic AI output from changing test outcomes.

### ADR-007: Configuration-Driven Execution
Status: Accepted

Decision:
Keep environment and approved execution parameters
separate from test implementation.

Rationale:
Enables reusable workflows without hardcoding test selections.

### ADR-008: Local-First Cost Strategy
Status: Accepted

Decision:
Use free and local-first tools for the core POC.

Rationale:
Avoids mandatory paid infrastructure during initial development.

### ADR-009: Centralized Error Handling
Status: Accepted

Decision:
Design explicit error paths for workflow, runner,
test and reporting failures.

Rationale:
Ensures execution problems are visible and classifiable.

### ADR-010: Incremental Implementation
Status: Accepted

Decision:
Implement and verify a small working vertical slice
before adding advanced capabilities.

Rationale:
Reduces integration risk and keeps each stage verifiable.

### Change Policy
Revisit an ADR when new evidence invalidates its assumptions.
Record the reason, impact and replacement decision.
'@ | Set-Content .\ARCHITECTURE-DECISIONS.md -Encoding utf8
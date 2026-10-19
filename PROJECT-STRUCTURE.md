@'
# Enterprise POC Project Structure

## Root Repository

n8n-ecommerce-poc/
├── docs/
│   ├── architecture/
│   ├── requirements/
│   └── operations/
├── automation/
│   ├── src/
│   │   ├── config/
│   │   ├── fixtures/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── tests/
│   │   ├── api/
│   │   ├── data/
│   │   └── utils/
│   ├── playwright.config.ts
│   └── package.json
├── n8n/
│   ├── workflows/
│   ├── error-workflows/
│   └── README.md
├── runner/
│   ├── src/
│   └── README.md
├── reports/
├── artifacts/
├── scripts/
├── .gitignore
├── README.md
├── POC-OBJECTIVE.md
├── REQUIREMENTS.md
├── NON-FUNCTIONAL-REQUIREMENTS.md
├── POC-SCOPE.md
├── ARCHITECTURE-DECISIONS.md
├── REQUIREMENTS-TRACEABILITY.md
└── PROJECT-STRUCTURE.md

## Directory Responsibilities

- docs/: Architecture, requirements and operating procedures.
- automation/src/config/: Validated environment configuration.
- automation/src/fixtures/: Shared Playwright fixtures.
- automation/src/pages/: Page Object Model classes.
- automation/src/components/: Reusable UI component abstractions.
- automation/src/tests/: Test specifications and suites.
- automation/src/api/: API clients and service-level helpers.
- automation/src/data/: Test-data factories and datasets.
- automation/src/utils/: Shared deterministic utility functions.
- n8n/workflows/: Exported orchestration workflows.
- n8n/error-workflows/: Centralized workflow error handling.
- runner/src/: Controlled interface between n8n and Playwright.
- reports/: Generated machine-readable and human-readable results.
- artifacts/: Screenshots, traces and other execution evidence.
- scripts/: Setup, validation and maintenance scripts.

## Architectural Boundaries

- Playwright owns browser interaction and assertions.
- n8n owns orchestration and workflow routing.
- The runner owns controlled execution and status propagation.
- Reports and artifacts are generated outputs, not source code.
- Secrets and local environment files must not be committed.
- Workflow exports must not contain live credentials.

## Implementation Note

This structure is the proposed target, not a claim that all
directories or files already exist. Directories will be created
incrementally when their implementation phase begins.
'@ | Set-Content .\PROJECT-STRUCTURE.md -Encoding utf8
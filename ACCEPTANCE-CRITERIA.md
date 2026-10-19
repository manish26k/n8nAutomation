@'
# Enterprise POC Acceptance Criteria

## Purpose

Define measurable acceptance conditions for the n8n and Playwright Ecommerce POC.

## AC01 — Project Setup

- The repository has documented setup instructions.
- Required dependencies and supported runtime versions are documented.
- A clean setup can be validated using documented commands.

## AC02 — Browser Automation

- Playwright can open the configured Ecommerce Playground URL.
- Browser execution can run in the configured headless or headed mode.
- At least one deterministic browser test passes.
- Failed tests produce actionable diagnostic information.

## AC03 — Test Design

- Tests are organized into clearly named suites.
- Reusable page objects or equivalent abstractions are used where appropriate.
- Test assertions verify observable application behavior.
- Tests avoid unnecessary arbitrary waits and shared mutable state.

## AC04 — Configuration

- Environment and suite selection are configurable.
- Required configuration is validated before execution.
- Invalid configuration fails with a clear, safe error.
- Secrets are not hardcoded or exposed in logs.

## AC05 — Node.js Runner

- The runner accepts documented execution inputs.
- The runner validates inputs before launching Playwright.
- The runner returns an unambiguous execution status.
- Process exit codes correctly reflect success or failure.

## AC06 — n8n Orchestration

- An n8n workflow can invoke the approved runner interface.
- Workflow inputs are validated.
- The workflow distinguishes successful execution from failure or error.
- Execution results are available to downstream workflow steps.
- Workflow exports contain no live credentials.

## AC07 — Reporting

- A machine-readable test report is generated.
- A human-readable report is generated.
- Reports identify the relevant test outcomes.
- Report generation failures are handled explicitly.

## AC08 — Failure Diagnostics

- Failed tests capture screenshots when configured.
- Trace collection works when enabled.
- Logs and artifacts can be correlated with an execution.
- Sensitive information is excluded or redacted.

## AC09 — Reliability

- A documented smoke suite can be run repeatedly.
- Test outcomes are consistent under the same controlled conditions.
- A deliberately failing test is reported as failed.
- A runner or configuration error cannot be reported as a successful run.

## AC10 — Maintainability and Security

- Repository, configuration and secret-handling standards are followed.
- Generated outputs and local secret files are excluded from source control.
- Architecture and setup documentation match the implementation.
- Known limitations and deferred features are documented.

## Acceptance Decision

- Each criterion must be marked Passed, Failed or Not Applicable.
- Not Applicable requires a documented reason and approval.
- Failed criteria must be resolved or explicitly accepted as limitations before final sign-off.
- Acceptance requires documented evidence for each applicable criterion.
- A successful demonstration alone does not replace verification evidence.

## Definition of Done

- All ten acceptance criteria are documented.
- Each criterion has verifiable outcomes.
- The acceptance decision rules are documented.
- The document has been reviewed and approved.
'@ | Set-Content .\ACCEPTANCE-CRITERIA.md -Encoding utf8
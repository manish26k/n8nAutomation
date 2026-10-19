cd "$env:USERPROFILE\Downloads\n8n-ecommerce-poc"

@'
# Non-Functional Requirements
## Enterprise n8n + Playwright Ecommerce POC

### 1. Reliability
- NFR-001: Test execution must return an explicit final status.
- NFR-002: Missing or malformed result files must be detected.
- NFR-003: Workflow errors must be routed to centralized error handling.
- NFR-004: Retries must be bounded and configurable.
- NFR-005: Infrastructure failures must be distinguished from test failures.

### 2. Performance
- NFR-006: Test execution and workflow steps must have configurable timeouts.
- NFR-007: Execution duration must be recorded.
- NFR-008: Performance baselines must be measured before enforcing thresholds.
- NFR-009: The initial POC must prioritize correctness over parallel execution.

### 3. Security
- NFR-010: Credentials must not be hardcoded in source code.
- NFR-011: Passwords, tokens and secrets must not appear in logs.
- NFR-012: Command execution must use approved inputs and controlled arguments.
- NFR-013: The n8n instance must not be exposed publicly without appropriate security controls.
- NFR-014: Workflow and runner permissions must follow least-privilege principles.

### 4. Maintainability
- NFR-015: Automation code must use TypeScript and Playwright conventions.
- NFR-016: Reusable browser interactions must be separated from test assertions.
- NFR-017: Environment configuration must be separated from test logic.
- NFR-018: Workflow names and execution inputs must follow documented conventions.
- NFR-019: Setup and execution must be reproducible from project documentation.

### 5. Observability and Reporting
- NFR-020: Each execution must have a unique run identifier.
- NFR-021: Logs must include useful execution context.
- NFR-022: Test results and failure evidence must be discoverable.
- NFR-023: Reporting must distinguish test outcomes from runner or infrastructure errors.
- NFR-024: Evidence retention must be configurable.

### 6. Scalability and Resilience
- NFR-025: Workflow modules must support reuse.
- NFR-026: Duplicate execution requests must be handled according to a documented policy.
- NFR-027: Concurrent execution must not be enabled until resource and isolation behavior is validated.
- NFR-028: Recovery behavior must be documented for interrupted executions.

### 7. AI Governance
- NFR-029: AI-generated failure analysis must be advisory.
- NFR-030: Deterministic test results must remain the source of truth.
- NFR-031: AI outputs must be evaluated for correctness before wider adoption.
- NFR-032: The initial framework must remain usable when the local AI service is unavailable.

### 8. Cost and Portability
- NFR-033: The POC must prioritize free and local-first tooling.
- NFR-034: Paid cloud services must not be mandatory for core local execution.
- NFR-035: Platform-specific dependencies must be documented.
- NFR-036: Tool versions and setup prerequisites must be documented.

### 9. Acceptance Policy
- NFR-037: Requirements must be verifiable through inspection, execution or documented evidence.
- NFR-038: Performance limits must be established using observed baseline measurements.
- NFR-039: Security-sensitive configuration must be reviewed before external exposure.
- NFR-040: Known limitations must be documented in the final POC report.
'@ | Set-Content .\NON-FUNCTIONAL-REQUIREMENTS.md -Encoding utf8
@'
# Configuration Standards

## 1. Configuration Principles

- Configuration must be separate from application logic.
- Environment-specific values must not be hardcoded in tests.
- Configuration must be validated before test execution.
- Missing or invalid required settings must produce clear errors.
- Defaults must be safe, documented and suitable for local development.

## 2. Supported Environments

- dev: Local development and initial validation.
- qa: Dedicated test environment when available.
- uat: User acceptance environment when available.

The initial POC targets the LambdaTest Ecommerce Playground website.
Additional environments must be explicitly configured and validated before use.

## 3. Configuration Categories

- Application base URL.
- Browser name and headless mode.
- Test timeout and expectation timeout.
- Retry and worker settings.
- Test suite or test selection.
- Report output locations.
- Artifact output locations.
- Execution identifiers and logging settings.

## 4. Environment Variables

- Environment variables may override non-secret configuration.
- Variable names must be consistent and documented.
- Required variables must be validated at startup.
- Boolean and numeric values must be parsed and validated explicitly.
- Secrets must never be printed in logs or error messages.

## 5. Local Environment Files

- Local .env files may be used for development when needed.
- Local environment files containing secrets must be excluded from Git.
- A sanitized .env.example may document required variable names.
- Example files must contain placeholders, not real credentials.
- Never assume that a local environment file exists.

## 6. Secret Management

- Do not hardcode passwords, tokens or API keys.
- Do not store secrets in source code or committed workflow exports.
- Use n8n credentials for credentials required by n8n workflows.
- Use environment variables or an appropriate credential store for runner secrets.
- Redact sensitive values from logs and reports.

## 7. Configuration Validation

Before execution, validate:

- The selected environment is supported.
- The base URL is present and valid.
- Browser settings use supported values.
- Timeout, retry and worker values are valid.
- Required output directories can be created or accessed.
- Required credentials are available without displaying their values.

## 8. Configuration Precedence

Use this precedence for non-secret settings:

1. Explicit command-line overrides, when implemented.
2. Environment variables.
3. Environment-specific configuration.
4. Documented safe defaults.

Secrets must follow their designated credential source and must not be placed in ordinary configuration files.

## 9. Error Handling

- Report the setting name when validation fails.
- Do not reveal secret values in validation errors.
- Fail early when a required setting is missing or invalid.
- Avoid silently replacing invalid values with defaults.
- Include enough context to diagnose configuration failures safely.

## Definition of Done

- Configuration categories and supported environments are documented.
- Environment variable and local-file rules are documented.
- Secret-handling expectations are documented.
- Validation, precedence and error-handling rules are documented.
- The document has been reviewed and approved.
'@ | Set-Content .\CONFIGURATION-STANDARDS.md -Encoding utf8
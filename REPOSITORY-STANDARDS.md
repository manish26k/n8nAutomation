@'
# Repository Standards

## 1. Version Control

- Git is the source control system for this project.
- The main branch represents the stable, reviewed baseline.
- Feature branches are used for isolated changes.
- Changes must be committed in small, logical units.
- Generated reports and execution artifacts are not source-controlled.

## 2. Branch Naming

Use the following naming conventions:

- feature/<short-description>
- fix/<short-description>
- docs/<short-description>
- test/<short-description>

Examples:

- feature/playwright-runner
- fix/checkout-test
- docs/architecture-notes
- test/product-search

## 3. Commit Messages

Use this format:

<type>: <short description>

Allowed types:

- feat: new functionality
- fix: defect correction
- test: test additions or updates
- docs: documentation changes
- chore: tooling or maintenance
- refactor: internal restructuring without intended behavior changes

Commit messages must be concise and describe the actual change.

## 4. Review and Validation

- Review changed files before committing.
- Validate relevant tests before merging implementation changes.
- Never commit knowingly broken code without clearly documenting the reason.
- Requirements and architecture changes must update the relevant documentation.
- Avoid unrelated changes in a single commit.

## 5. Files Excluded from Version Control

The following must not be committed:

- node_modules/
- .env and other files containing live secrets
- Playwright test-results/
- Playwright playwright-report/
- Generated reports and execution artifacts
- Local debug logs
- Operating-system and editor-specific temporary files

Use sanitized example configuration files when configuration documentation is needed.

## 6. Security

- Never store passwords, API keys, access tokens or credentials in Git.
- Never export live credentials inside n8n workflow files.
- Review staged changes for accidental secret exposure.
- Use environment variables or an appropriate credential store for secrets.

## 7. Repository Maintenance

- Keep documentation aligned with the implemented behavior.
- Keep test data deterministic and avoid dependence on production accounts.
- Prefer readable, maintainable changes over unnecessary complexity.
- Document temporary workarounds and known limitations.

## Definition of Done

- Repository standards are documented.
- Branch and commit conventions are defined.
- Review and validation expectations are defined.
- Generated files and secrets are explicitly excluded.
- The document has been reviewed and approved.
'@ | Set-Content .\REPOSITORY-STANDARDS.md -Encoding utf8
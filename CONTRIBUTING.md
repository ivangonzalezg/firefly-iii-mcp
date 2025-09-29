# Contributing

Thank you for your interest in improving **firefly-iii-mcp**. This project aims
to provide a reliable Model Context Protocol layer on top of Firefly III, and we
welcome contributions that help us move faster while keeping the server stable.

## Getting started

1. Fork and clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the verification pipeline before opening a pull request:
   ```bash
   npm run verify
   ```
   This command lints the TypeScript sources, builds the distributable and runs
   the Node test suite against the generated bundle.

## Conventional Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/)
standard to keep the history machine-readable and to streamline changelog
updates. Please format commit messages using:

```
<type>(optional scope): <description>
```

Common types include:

- `feat`: New functionality or endpoints.
- `fix`: Bug fixes or behavioural corrections.
- `docs`: Documentation updates.
- `chore`: Tooling, CI or maintenance tasks.
- `refactor`: Internal code improvements without behaviour changes.

Include a short body when additional context is required. Multiple commits are
welcome; squash merges are optional but not required.

## Adding or updating tools

- Each endpoint lives in `src/tools.ts` as both a JSON Schema fragment and a Zod
  definition.
- Prefer reusing shared Zod helpers when possible and keep descriptions concise
  so they display well in MCP clients.
- After editing, run `npm run verify` and ensure `tests/tools.test.mjs` still
  passes.

## Release process

1. Update `CHANGELOG.md` with a new `[x.y.z]` section describing the changes.
2. Ensure the main branch is clean and up to date.
3. Run the automated release helper, passing the semver bump you need:
   ```bash
   npm run release -- patch
   # or
   npm run release -- minor
   npm run release -- major
   ```
4. Review the generated commit and tag, push them to the repository.
5. Trigger the **Publish Package** GitHub Actions workflow (manually via
   *Run workflow* or by drafting a GitHub release). The workflow runs
   `npm publish` using the repository secret `NPM_TOKEN`.

The release script automatically runs `npm run verify` before bumping the
package version, guarding against accidental broken builds. Ensure `NPM_TOKEN`
is configured under the repository secrets with publish access on npm.

## Communication

Questions or discussions are welcome via
[GitHub issues](https://github.com/ivangonzalez/firefly-iii-mcp/issues) or by
email at [contacto@ivangonzalez.co](mailto:contacto@ivangonzalez.co).

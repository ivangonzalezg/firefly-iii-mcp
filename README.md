# firefly-iii-mcp

A Model Context Protocol (MCP) server that exposes curated tools for the
[Firefly III](https://www.firefly-iii.org/) personal finance API. It is designed
to be consumed by MCP-aware assistants so they can query account data, run
autocompletion endpoints, and inspect transactions on behalf of the user.

## Why use this MCP server?

- Thin wrapper over the official Firefly III REST API with built-in parameter
  validation via [Zod](https://zod.dev/).
- Ships as an executable MCP server so you never need to generate your own
  build artefacts.
- Works with any assistant or automation platform that speaks the Model
  Context Protocol over stdio.

## Prerequisites

- A running instance of Firefly III with API access enabled.
- A personal access token that can read the resources you want to expose.
- Node.js 18 or later to install and run the MCP server locally.

## Installation

Install the package globally (or add it to the environment that hosts your MCP
clients):

```bash
npm install -g firefly-iii-mcp
```

You can also run it ad hoc with `npx` when configuring a new assistant:

```bash
npx firefly-iii-mcp --stdio
```

## Configuration

Set the required Firefly III credentials before launching the server. A sample
configuration lives in [`.env.example`](./.env.example).

- `FIREFLY_III_BASE_URL`: For example `https://demo.firefly-iii.org`.
- `FIREFLY_III_PAT`: Personal access token generated from your Firefly III
  profile.

Export these variables in the same shell session that starts the MCP server, or
store them in the configuration mechanism used by your assistant platform.

## Running the MCP server

The CLI entry point speaks MCP over stdio, which allows plug-and-play
integration with most clients:

```bash
firefly-iii --stdio
```

Refer to your assistant's documentation for details on registering an external
MCP server. Typically, you will point it to the executable above and ensure the
environment variables are in scope. Once connected, each Firefly III endpoint is
published as an MCP tool that returns formatted JSON responses.

## Tool catalogue

A curated summary of the most common tools lives in
[`docs/TOOLS.md`](./docs/TOOLS.md), together with examples for programmatically
exploring the full catalogue.

## Development notes

While consumers do not need to build anything manually, contributors can run:

```bash
npm install
npm run build
```

`npm run build` compiles TypeScript into the `build/` directory and preserves
the executable shebang for the CLI. The `prepublishOnly` script keeps published
artefacts up to date.

## Release notes

Version history and notable changes are documented in
[`CHANGELOG.md`](./CHANGELOG.md).

## Contributing

Contribution guidelines, commit conventions and release workflow details are
documented in [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Support

Questions, feature ideas, or bug reports are welcome on the
[issue tracker](https://github.com/ivangonzalezg/firefly-iii-mcp/issues) or via
email at [contacto@ivangonzalez.co](mailto:contacto@ivangonzalez.co).

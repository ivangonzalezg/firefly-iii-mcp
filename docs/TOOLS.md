# MCP Tool Catalogue

This package publishes 300+ Firefly III endpoints as Model Context Protocol (MCP)
tools. Each tool mirrors the Firefly III REST method, request parameters and
response schema while adding runtime validation through Zod.

The list below highlights the most commonly-used groups. You can retrieve the
full catalogue programmatically when the MCP server is running.

## Representative tools

| Tool name          | Method | Path                              | Purpose |
|--------------------|:------:|-----------------------------------|---------|
| `get_accounts_ac`  |  GET   | `/v1/autocomplete/accounts`       | Search accounts using Firefly III's autocomplete endpoint. Optional filters let you scope by type, limit, and date. |
| `get_bills_ac`     |  GET   | `/v1/autocomplete/bills`          | Fetch bill suggestions for payee entry forms. |
| `get_budgets_ac`   |  GET   | `/v1/autocomplete/budgets`        | Surface budget names for quick selection widgets. |
| `list_accounts`    |  GET   | `/v1/accounts`                    | Retrieve accounts with pagination and filtering support. |
| `store_transaction`|  POST  | `/v1/transactions`                | Create a new transaction using the Firefly III JSON schema payload. |
| `get_transactions` |  GET   | `/v1/transactions`                | Query transactions with the same filters offered in the Firefly III UI. |

> **Tip**: Most `autocomplete` tools contain optional `query`, `limit`, and
> `date` parameters to mirror the server-side behaviour.

## Discovering the full toolset

When the MCP server is connected, assistants can enumerate available tools
through standard MCP introspection. You can also inspect the catalogue manually:

```bash
# Print all tool names
node -e "console.log(require('./build/tools.js').tools.map(t => t.name).join('\n'))"

# Inspect a single tool definition
node -e "const { tools } = require('./build/tools.js'); const tool = tools.find(t => t.name === 'list_accounts'); console.log(tool);"
```

Each tool object exposes:

- `name`: Unique identifier used by MCP clients.
- `description`: Human-readable summary shown in prompts/tool pickers.
- `method`: HTTP verb used against the Firefly III API.
- `pathTemplate`: REST template under `/api` (prefixed automatically at runtime).
- `executionParameters`: Set of path/query arguments consumed by the tool.
- `zodShape`: Zod schema that validates input before the HTTP request is made.

## Adding new tools

The source of truth lives in `src/tools.ts`. New endpoints can be appended to the
`tools` array with their JSON Schema and Zod shape. After editing the TypeScript
file run:

```bash
npm run build
npm test
```

The tests ensure the generated bundle exposes well-formed tool metadata.

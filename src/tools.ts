import { z } from "zod";
import type { McpToolDefinition } from "./types.js";

export const tools: McpToolDefinition[] = [
  {
    name: "get_accounts_ac",
    tags: ["autocomplete"],
    description:
      "Returns all accounts of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
        date: {
          type: "string",
          description:
            "If the account is an asset account or a liability, the autocomplete will also return the balance of the account on this date. Example: 2025-09-01",
        },
        types: {
          type: "array",
          items: {
            type: "string",
            enum: [
              "all",
              "asset",
              "cash",
              "expense",
              "revenue",
              "special",
              "hidden",
              "liability",
              "liabilities",
              "Default account",
              "Cash account",
              "Asset account",
              "Expense account",
              "Revenue account",
              "Initial balance account",
              "Beneficiary account",
              "Import account",
              "Reconciliation account",
              "Loan",
              "Debt",
              "Mortgage",
            ],
            description:
              "The type of accounts you wish to limit the search to.",
          },
          description:
            "Optional filter on the account type(s) used in the autocomplete.",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
      date: z
        .string()
        .describe(
          "If the account is an asset account or a liability, the autocomplete will also return the balance of the account on this date. Example: 2025-09-01"
        )
        .optional(),
      types: z
        .array(
          z.enum([
            "all",
            "asset",
            "cash",
            "expense",
            "revenue",
            "special",
            "hidden",
            "liability",
            "liabilities",
            "Default account",
            "Cash account",
            "Asset account",
            "Expense account",
            "Revenue account",
            "Initial balance account",
            "Beneficiary account",
            "Import account",
            "Reconciliation account",
            "Loan",
            "Debt",
            "Mortgage",
          ])
        )
        .describe(
          "Optional filter on the account type(s) used in the autocomplete."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/accounts",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
      {
        name: "date",
        in: "query",
      },
      {
        name: "types",
        in: "query",
      },
    ],
    operationId: "get_accounts_ac",
  },
  {
    name: "get_bills_ac",
    tags: ["autocomplete"],
    description:
      "Returns all bills of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/bills",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_bills_ac",
  },
  {
    name: "get_budgets_ac",
    tags: ["autocomplete"],
    description:
      "Returns all budgets of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/budgets",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_budgets_ac",
  },
  {
    name: "get_categories_ac",
    tags: ["autocomplete"],
    description:
      "Returns all categories of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/categories",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_categories_ac",
  },
  {
    name: "get_currencies_ac",
    tags: ["autocomplete"],
    description:
      "Returns all currencies of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/currencies",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_currencies_ac",
  },
  {
    name: "get_currencies_code_ac",
    tags: ["autocomplete"],
    description:
      "Returns all currencies of the user returned in a basic auto-complete array. This endpoint is DEPRECATED and I suggest you DO NOT use it.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/currencies-with-code",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_currencies_code_ac",
  },
  {
    name: "get_object_groups_ac",
    tags: ["autocomplete"],
    description:
      "Returns all object groups of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/object-groups",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_object_groups_ac",
  },
  {
    name: "get_piggies_ac",
    tags: ["autocomplete"],
    description:
      "Returns all piggy banks of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/piggy-banks",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_piggies_ac",
  },
  {
    name: "get_piggies_balance_ac",
    tags: ["autocomplete"],
    description:
      "Returns all piggy banks of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/piggy-banks-with-balance",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_piggies_balance_ac",
  },
  {
    name: "get_recurring_ac",
    tags: ["autocomplete"],
    description:
      "Returns all recurring transactions of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/recurring",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_recurring_ac",
  },
  {
    name: "get_rule_groups_ac",
    tags: ["autocomplete"],
    description:
      "Returns all rule groups of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/rule-groups",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_rule_groups_ac",
  },
  {
    name: "get_rules_ac",
    tags: ["autocomplete"],
    description:
      "Returns all rules of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/rules",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_rules_ac",
  },
  {
    name: "get_subscriptions_ac",
    tags: ["autocomplete"],
    description:
      "Returns all subscriptions of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/subscriptions",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_subscriptions_ac",
  },
  {
    name: "get_tag_ac",
    tags: ["autocomplete"],
    description:
      "Returns all tags of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/tags",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_tag_ac",
  },
  {
    name: "get_transaction_types_ac",
    tags: ["autocomplete"],
    description:
      "Returns all transaction types returned in a basic auto-complete array. English only.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/transaction-types",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_transaction_types_ac",
  },
  {
    name: "get_transactions_ac",
    tags: ["autocomplete"],
    description:
      "Returns all transaction descriptions of the user returned in a basic auto-complete array.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/transactions",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_transactions_ac",
  },
  {
    name: "get_transactions_idac",
    tags: ["autocomplete"],
    description:
      "Returns all transactions, complemented with their ID, of the user returned in a basic auto-complete array. This endpoint is DEPRECATED and I suggest you DO NOT use it.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The autocomplete search query. Example: string",
        },
        limit: {
          type: "integer",
          format: "int32",
          description: "The number of items returned. Example: 10",
        },
      },
    },
    zodShape: {
      query: z
        .string()
        .describe("The autocomplete search query. Example: string")
        .optional(),
      limit: z
        .number()
        .int()
        .describe("The number of items returned. Example: 10")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/autocomplete/transactions-with-id",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
      {
        name: "limit",
        in: "query",
      },
    ],
    operationId: "get_transactions_idac",
  },
  {
    name: "get_chart_account_overview",
    tags: ["charts"],
    description:
      "This endpoint returns the data required to generate a chart with basic asset account balance information. This is used on the dashboard. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        period: {
          type: "string",
          enum: ["1D", "1W", "1M", "3M", "6M", "1Y"],
          example: "1M",
          description:
            "Optional period to group the data by. If not provided, it will default to '1M' or whatever is deemed relevant for the range provided. If you want to know which periods are available, see the enums or get the configuration value: `GET /api/v1/configuration/firefly.valid_view_ranges` ",
        },
        preselected: {
          type: "string",
          enum: ["empty", "all", "assets", "liabilities"],
          example: "all",
          description:
            'Optional set of preselected accounts to limit the chart to. This may be easier than submitting all asset accounts manually, for example. If you want to know which selection are available, see the enums here or get the configuration value: `GET /api/v1/configuration/firefly.preselected_accounts` - `empty`: do not do a pre-selection - `all`: select all asset and all liability accounts - `assets`: select all asset accounts - `liabilities`: select all liability accounts If no accounts are found, the user\'s "frontpage accounts" preference will be used. If that is empty, all asset accounts will be used. ',
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      period: z
        .enum(["1D", "1W", "1M", "3M", "6M", "1Y"])
        .describe(
          "Optional period to group the data by. If not provided, it will default to '1M' or whatever is deemed relevant for the range provided. If you want to know which periods are available, see the enums or get the configuration value: `GET /api/v1/configuration/firefly.valid_view_ranges`"
        )
        .optional(),
      preselected: z
        .enum(["empty", "all", "assets", "liabilities"])
        .describe(
          'Optional set of preselected accounts to limit the chart to. This may be easier than submitting all asset accounts manually, for example. If you want to know which selection are available, see the enums here or get the configuration value: `GET /api/v1/configuration/firefly.preselected_accounts` - `empty`: do not do a pre-selection - `all`: select all asset and all liability accounts - `assets`: select all asset accounts - `liabilities`: select all liability accounts If no accounts are found, the user\'s "frontpage accounts" preference will be used. If that is empty, all asset accounts will be used.'
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/chart/account/overview",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "period",
        in: "query",
      },
      {
        name: "preselected",
        in: "query",
      },
    ],
    operationId: "get_chart_account_overview",
  },
  {
    name: "get_chart_balance",
    tags: ["charts"],
    description:
      "This endpoint returns the data required to generate a chart with balance information. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        period: {
          type: "string",
          enum: ["1D", "1W", "1M", "3M", "6M", "1Y"],
          example: "1M",
          description:
            "Optional period to group the data by. If not provided, it will default to '1M' or whatever is deemed relevant for the range provided. If you want to know which periods are available, see the enums or get the configuration value: `GET /api/v1/configuration/firefly.valid_view_ranges` ",
        },
        preselected: {
          type: "string",
          enum: ["empty", "all", "assets", "liabilities"],
          example: "all",
          description:
            'Optional set of preselected accounts to limit the chart to. This may be easier than submitting all asset accounts manually, for example. If you want to know which selection are available, see the enums here or get the configuration value: `GET /api/v1/configuration/firefly.preselected_accounts` - `empty`: do not do a pre-selection - `all`: select all asset and all liability accounts - `assets`: select all asset accounts - `liabilities`: select all liability accounts If no accounts are found, the user\'s "frontpage accounts" preference will be used. If that is empty, all asset accounts will be used. ',
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "Limit the chart to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped. This list of accounts will be OVERRULED by the `preselected` parameter. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      period: z
        .enum(["1D", "1W", "1M", "3M", "6M", "1Y"])
        .describe(
          "Optional period to group the data by. If not provided, it will default to '1M' or whatever is deemed relevant for the range provided. If you want to know which periods are available, see the enums or get the configuration value: `GET /api/v1/configuration/firefly.valid_view_ranges`"
        )
        .optional(),
      preselected: z
        .enum(["empty", "all", "assets", "liabilities"])
        .describe(
          'Optional set of preselected accounts to limit the chart to. This may be easier than submitting all asset accounts manually, for example. If you want to know which selection are available, see the enums here or get the configuration value: `GET /api/v1/configuration/firefly.preselected_accounts` - `empty`: do not do a pre-selection - `all`: select all asset and all liability accounts - `assets`: select all asset accounts - `liabilities`: select all liability accounts If no accounts are found, the user\'s "frontpage accounts" preference will be used. If that is empty, all asset accounts will be used.'
        )
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "Limit the chart to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped. This list of accounts will be OVERRULED by the `preselected` parameter."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/chart/balance/balance",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "period",
        in: "query",
      },
      {
        name: "preselected",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "get_chart_balance",
  },
  {
    name: "get_chart_budget_overview",
    tags: ["charts"],
    description:
      "This endpoint returns the data required to generate a chart with basic budget information. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
    },
    method: "get",
    pathTemplate: "/v1/chart/budget/overview",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "get_chart_budget_overview",
  },
  {
    name: "get_chart_category_overview",
    tags: ["charts"],
    description:
      "This endpoint returns the data required to generate a chart with basic category information. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
    },
    method: "get",
    pathTemplate: "/v1/chart/category/overview",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "get_chart_category_overview",
  },
  {
    name: "bulk_update_transactions",
    tags: ["data"],
    description: "Allows you to update transactions in bulk. ",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The JSON query.",
        },
      },
      required: ["query"],
    },
    zodShape: { query: z.string().describe("The JSON query.") },
    method: "post",
    pathTemplate: "/v1/data/bulk/transactions",
    executionParameters: [
      {
        name: "query",
        in: "query",
      },
    ],
    operationId: "bulk_update_transactions",
  },
  {
    name: "destroy_data",
    tags: ["data"],
    description:
      "A call to this endpoint deletes the requested data type. Use it with care and always with user permission. The demo user is incapable of using this endpoint. ",
    inputSchema: {
      type: "object",
      properties: {
        objects: {
          type: "string",
          enum: [
            "not_assets_liabilities",
            "budgets",
            "bills",
            "piggy_banks",
            "rules",
            "recurring",
            "categories",
            "tags",
            "object_groups",
            "accounts",
            "asset_accounts",
            "expense_accounts",
            "revenue_accounts",
            "liabilities",
            "transactions",
            "withdrawals",
            "deposits",
            "transfers",
          ],
          description:
            "The type of data that you wish to destroy. You can only use one at a time.",
        },
      },
      required: ["objects"],
    },
    zodShape: {
      objects: z
        .enum([
          "not_assets_liabilities",
          "budgets",
          "bills",
          "piggy_banks",
          "rules",
          "recurring",
          "categories",
          "tags",
          "object_groups",
          "accounts",
          "asset_accounts",
          "expense_accounts",
          "revenue_accounts",
          "liabilities",
          "transactions",
          "withdrawals",
          "deposits",
          "transfers",
        ])
        .describe(
          "The type of data that you wish to destroy. You can only use one at a time."
        ),
    },
    method: "delete",
    pathTemplate: "/v1/data/destroy",
    executionParameters: [
      {
        name: "objects",
        in: "query",
      },
    ],
    operationId: "destroy_data",
  },
  {
    name: "export_accounts",
    tags: ["data"],
    description:
      "This endpoint allows you to export your accounts from Firefly III into a file. Currently supports CSV exports only. ",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["csv"],
          description:
            "The file type the export file (CSV is currently the only option).",
        },
      },
    },
    zodShape: {
      type: z
        .literal("csv")
        .describe(
          "The file type the export file (CSV is currently the only option)."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/data/export/accounts",
    executionParameters: [
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "export_accounts",
  },
  {
    name: "export_bills",
    tags: ["data"],
    description:
      "This endpoint allows you to export your bills from Firefly III into a file. Currently supports CSV exports only. ",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["csv"],
          description:
            "The file type the export file (CSV is currently the only option).",
        },
      },
    },
    zodShape: {
      type: z
        .literal("csv")
        .describe(
          "The file type the export file (CSV is currently the only option)."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/data/export/bills",
    executionParameters: [
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "export_bills",
  },
  {
    name: "export_budgets",
    tags: ["data"],
    description:
      "This endpoint allows you to export your budgets and associated budget data from Firefly III into a file. Currently supports CSV exports only. ",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["csv"],
          description:
            "The file type the export file (CSV is currently the only option).",
        },
      },
    },
    zodShape: {
      type: z
        .literal("csv")
        .describe(
          "The file type the export file (CSV is currently the only option)."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/data/export/budgets",
    executionParameters: [
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "export_budgets",
  },
  {
    name: "export_categories",
    tags: ["data"],
    description:
      "This endpoint allows you to export your categories from Firefly III into a file. Currently supports CSV exports only. ",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["csv"],
          description:
            "The file type the export file (CSV is currently the only option).",
        },
      },
    },
    zodShape: {
      type: z
        .literal("csv")
        .describe(
          "The file type the export file (CSV is currently the only option)."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/data/export/categories",
    executionParameters: [
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "export_categories",
  },
  {
    name: "export_piggies",
    tags: ["data"],
    description:
      "This endpoint allows you to export your piggy banks from Firefly III into a file. Currently supports CSV exports only. ",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["csv"],
          description:
            "The file type the export file (CSV is currently the only option).",
        },
      },
    },
    zodShape: {
      type: z
        .literal("csv")
        .describe(
          "The file type the export file (CSV is currently the only option)."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/data/export/piggy-banks",
    executionParameters: [
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "export_piggies",
  },
  {
    name: "export_recurring",
    tags: ["data"],
    description:
      "This endpoint allows you to export your recurring transactions from Firefly III into a file. Currently supports CSV exports only. ",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["csv"],
          description:
            "The file type the export file (CSV is currently the only option).",
        },
      },
    },
    zodShape: {
      type: z
        .literal("csv")
        .describe(
          "The file type the export file (CSV is currently the only option)."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/data/export/recurring",
    executionParameters: [
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "export_recurring",
  },
  {
    name: "export_rules",
    tags: ["data"],
    description:
      "This endpoint allows you to export your rules and rule groups from Firefly III into a file. Currently supports CSV exports only. ",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["csv"],
          description:
            "The file type the export file (CSV is currently the only option).",
        },
      },
    },
    zodShape: {
      type: z
        .literal("csv")
        .describe(
          "The file type the export file (CSV is currently the only option)."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/data/export/rules",
    executionParameters: [
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "export_rules",
  },
  {
    name: "export_tags",
    tags: ["data"],
    description:
      "This endpoint allows you to export your tags from Firefly III into a file. Currently supports CSV exports only. ",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["csv"],
          description:
            "The file type the export file (CSV is currently the only option).",
        },
      },
    },
    zodShape: {
      type: z
        .literal("csv")
        .describe(
          "The file type the export file (CSV is currently the only option)."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/data/export/tags",
    executionParameters: [
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "export_tags",
  },
  {
    name: "export_transactions",
    tags: ["data"],
    description:
      "This endpoint allows you to export transactions from Firefly III into a file. Currently supports CSV exports only. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        accounts: {
          type: "string",
          description:
            "Limit the export of transactions to these accounts only. Only asset accounts will be accepted. Other types will be silently dropped. Example: 1,2,3",
        },
        type: {
          type: "string",
          enum: ["csv"],
          description:
            "The file type the export file (CSV is currently the only option).",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      accounts: z
        .string()
        .describe(
          "Limit the export of transactions to these accounts only. Only asset accounts will be accepted. Other types will be silently dropped. Example: 1,2,3"
        )
        .optional(),
      type: z
        .literal("csv")
        .describe(
          "The file type the export file (CSV is currently the only option)."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/data/export/transactions",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "export_transactions",
  },
  {
    name: "purge_data",
    tags: ["data"],
    description:
      "A call to this endpoint purges all previously deleted data. Use it with care and always with user permission. The demo user is incapable of using this endpoint. ",
    inputSchema: {
      type: "object",
      properties: {},
    },
    zodShape: {},
    method: "delete",
    pathTemplate: "/v1/data/purge",
    executionParameters: [],
    operationId: "purge_data",
  },
  {
    name: "insight_expense_expense",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, grouped by expense account. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you add the accounts ID's of expense accounts, only those accounts are included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. You can combine both asset / liability and expense account ID's. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you add the accounts ID's of expense accounts, only those accounts are included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. You can combine both asset / liability and expense account ID's. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/expense",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_expense",
  },
  {
    name: "insight_expense_asset",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, grouped by asset account. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/asset",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_asset",
  },
  {
    name: "insight_income_revenue",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the income received by the user, grouped by revenue account. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you add the accounts ID's of revenue accounts, only those accounts are included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. You can combine both asset / liability and deposit account ID's. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you add the accounts ID's of revenue accounts, only those accounts are included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. You can combine both asset / liability and deposit account ID's. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/income/revenue",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_income_revenue",
  },
  {
    name: "insight_income_asset",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the income received by the user, grouped by asset account. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/income/asset",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_income_asset",
  },
  {
    name: "insight_transfers",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the transfers made by the user, grouped by asset account or lability. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/transfer/asset",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_transfers",
  },
  {
    name: "insight_expense_bill",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, grouped by (any) bill. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "bills[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description: "The bills to be included in the results. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "bills[]": z
        .array(z.number().int())
        .describe("The bills to be included in the results.")
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/bill",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "bills[]",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_bill",
  },
  {
    name: "insight_expense_no_bill",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, including only expenses with no bill. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/no-bill",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_no_bill",
  },
  {
    name: "insight_expense_budget",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, grouped by (any) budget. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "budgets[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description: "The budgets to be included in the results. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "budgets[]": z
        .array(z.number().int())
        .describe("The budgets to be included in the results.")
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/budget",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "budgets[]",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_budget",
  },
  {
    name: "insight_expense_no_budget",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, including only expenses with no budget. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/no-budget",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_no_budget",
  },
  {
    name: "insight_expense_category",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, grouped by (any) category. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "categories[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description: "The categories to be included in the results. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "categories[]": z
        .array(z.number().int())
        .describe("The categories to be included in the results.")
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/category",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "categories[]",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_category",
  },
  {
    name: "insight_expense_no_category",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, including only expenses with no category. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/no-category",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_no_category",
  },
  {
    name: "insight_income_category",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the income received by the user, grouped by (any) category. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "categories[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description: "The categories to be included in the results. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "categories[]": z
        .array(z.number().int())
        .describe("The categories to be included in the results.")
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/income/category",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "categories[]",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_income_category",
  },
  {
    name: "insight_income_no_category",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the income received by the user, including only income with no category. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/income/no-category",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_income_no_category",
  },
  {
    name: "insight_transfer_category",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the transfers made by the user, grouped by (any) category. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "categories[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description: "The categories to be included in the results. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "categories[]": z
        .array(z.number().int())
        .describe("The categories to be included in the results.")
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/transfer/category",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "categories[]",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_transfer_category",
  },
  {
    name: "insight_transfer_no_category",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the transfers made by the user, including only transfers with no category. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/transfer/no-category",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_transfer_no_category",
  },
  {
    name: "insight_expense_tag",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, grouped by (any) tag. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "tags[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description: "The tags to be included in the results. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "tags[]": z
        .array(z.number().int())
        .describe("The tags to be included in the results.")
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/tag",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "tags[]",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_tag",
  },
  {
    name: "insight_expense_no_tag",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the expenses made by the user, including only expenses with no tag. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/no-tag",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_no_tag",
  },
  {
    name: "insight_income_tag",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the income received by the user, grouped by (any) tag. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "tags[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description: "The tags to be included in the results. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "tags[]": z
        .array(z.number().int())
        .describe("The tags to be included in the results.")
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/income/tag",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "tags[]",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_income_tag",
  },
  {
    name: "insight_income_no_tag",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the income received by the user, including only income with no tag. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/income/no-tag",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_income_no_tag",
  },
  {
    name: "insight_transfer_tag",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the transfers created by the user, grouped by (any) tag. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "tags[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description: "The tags to be included in the results. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "tags[]": z
        .array(z.number().int())
        .describe("The tags to be included in the results.")
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/transfer/tag",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "tags[]",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_transfer_tag",
  },
  {
    name: "insight_transfer_no_tag",
    tags: ["insight"],
    description:
      "This endpoint gives a summary of the transfers made by the user, including only transfers with no tag. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/transfer/no-tag",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_transfer_no_tag",
  },
  {
    name: "insight_expense_total",
    tags: ["insight"],
    description:
      "This endpoint gives a sum of the total expenses made by the user. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/expense/total",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_expense_total",
  },
  {
    name: "insight_income_total",
    tags: ["insight"],
    description:
      "This endpoint gives a sum of the total income received by the user. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/income/total",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_income_total",
  },
  {
    name: "insight_transfer_total",
    tags: ["insight"],
    description:
      "This endpoint gives a sum of the total amount transfers made by the user. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those asset accounts / liabilities will be included. Other account ID's will be ignored."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/insight/transfer/total",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "insight_transfer_total",
  },
  {
    name: "list_transaction_by_account",
    tags: ["accounts"],
    description:
      "This endpoint returns a list of all the transactions connected to the account. ",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the account.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description: "A date formatted YYYY-MM-DD. ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the account."),
      start: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
      end: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/accounts/{id}/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction_by_account",
  },
  {
    name: "list_attachment_by_account",
    tags: ["accounts"],
    description: "Lists all attachments.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the account.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the account."),
    },
    method: "get",
    pathTemplate: "/v1/accounts/{id}/attachments",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_attachment_by_account",
  },
  {
    name: "list_piggy_bank_by_account",
    tags: ["accounts"],
    description:
      "This endpoint returns a list of all the piggy banks connected to the account. ",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the account.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the account."),
    },
    method: "get",
    pathTemplate: "/v1/accounts/{id}/piggy-banks",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_piggy_bank_by_account",
  },
  {
    name: "list_account",
    tags: ["accounts"],
    description:
      "This endpoint returns a list of all the accounts owned by the authenticated user. ",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. May be omitted. ",
        },
        end: {
          type: "string",
          description:
            'A date formatted YYYY-MM-DD. Must be after "start". Can not be the same as "start". May be omitted. ',
        },
        date: {
          type: "string",
          description:
            "A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day. ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "asset",
            "cash",
            "expense",
            "revenue",
            "special",
            "hidden",
            "liability",
            "liabilities",
            "Default account",
            "Cash account",
            "Asset account",
            "Expense account",
            "Revenue account",
            "Initial balance account",
            "Beneficiary account",
            "Import account",
            "Reconciliation account",
            "Loan",
            "Debt",
            "Mortgage",
          ],
          description: "The type of accounts you wish to limit the search to.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      start: z
        .string()
        .describe("A date formatted YYYY-MM-DD. May be omitted.")
        .optional(),
      end: z
        .string()
        .describe(
          'A date formatted YYYY-MM-DD. Must be after "start". Can not be the same as "start". May be omitted.'
        )
        .optional(),
      date: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day."
        )
        .optional(),
      type: z
        .enum([
          "all",
          "asset",
          "cash",
          "expense",
          "revenue",
          "special",
          "hidden",
          "liability",
          "liabilities",
          "Default account",
          "Cash account",
          "Asset account",
          "Expense account",
          "Revenue account",
          "Initial balance account",
          "Beneficiary account",
          "Import account",
          "Reconciliation account",
          "Loan",
          "Debt",
          "Mortgage",
        ])
        .describe("Optional filter on the account type(s) returned")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/accounts",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "date",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_account",
  },
  {
    name: "store_account",
    tags: ["accounts"],
    description:
      "Creates a new account. The data required can be submitted as a JSON body or as a list of parameters (in key=value pairs, like a webform).",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["name", "type"],
          properties: {
            name: {
              type: "string",
              example: "My checking account",
            },
            type: {
              type: "string",
              example: "asset",
              description:
                "Can only be one one these account types. import, initial-balance and reconciliation cannot be set manually.",
              enum: [
                "asset",
                "expense",
                "import",
                "revenue",
                "cash",
                "liability",
                "liabilities",
                "initial-balance",
                "reconciliation",
              ],
            },
            iban: {
              type: "string",
              example: "GB98MIDL07009312345678",
              nullable: true,
            },
            bic: {
              type: "string",
              example: "BOFAUS3N",
              nullable: true,
            },
            account_number: {
              type: "string",
              nullable: true,
              example: "7009312345678",
            },
            opening_balance: {
              type: "string",
              example: "-1012.12",
              description:
                "Represents the opening balance, the initial amount this account holds.",
            },
            opening_balance_date: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
              nullable: true,
              description: "Represents the date of the opening balance.",
            },
            virtual_balance: {
              type: "string",
              example: "123.45",
            },
            currency_id: {
              type: "string",
              example: "12",
              description:
                "Use either currency_id or currency_code. Defaults to the user's financial administration's currency.",
            },
            currency_code: {
              type: "string",
              example: "EUR",
              description:
                "Use either currency_id or currency_code. Defaults to the user's financial administration's currency.",
            },
            active: {
              type: "boolean",
              example: false,
              default: true,
              description: "If omitted, defaults to true.",
            },
            order: {
              type: "integer",
              format: "int32",
              example: 1,
              description: "Order of the account",
            },
            include_net_worth: {
              type: "boolean",
              example: true,
              default: true,
              description: "If omitted, defaults to true.",
            },
            account_role: {
              type: "string",
              example: "defaultAsset",
              description: "Is only mandatory when the type is asset.",
              nullable: true,
              enum: [
                "defaultAsset",
                "sharedAsset",
                "savingAsset",
                "ccAsset",
                "cashWalletAsset",
                null,
              ],
            },
            credit_card_type: {
              type: "string",
              example: "monthlyFull",
              description:
                "Mandatory when the account_role is ccAsset. Can only be monthlyFull or null.",
              nullable: true,
              enum: ["monthlyFull", null],
            },
            monthly_payment_date: {
              nullable: true,
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
              description:
                "Mandatory when the account_role is ccAsset. Moment at which CC payment installments are asked for by the bank.",
            },
            liability_type: {
              type: "string",
              example: "loan",
              description:
                "Mandatory when type is liability. Specifies the exact type.",
              nullable: true,
              enum: ["loan", "debt", "mortgage", null],
            },
            liability_direction: {
              type: "string",
              example: "credit",
              description:
                "'credit' indicates somebody owes you the liability. 'debit' Indicates you owe this debt yourself. Works only for liabilities.",
              nullable: true,
              enum: ["credit", "debit", null],
            },
            interest: {
              type: "string",
              example: "5.3",
              default: "0",
              description:
                "Mandatory when type is liability. Interest percentage.",
              nullable: true,
            },
            interest_period: {
              type: "string",
              example: "monthly",
              description:
                "Mandatory when type is liability. Period over which the interest is calculated.",
              nullable: true,
              enum: [
                "weekly",
                "monthly",
                "quarterly",
                "half-year",
                "yearly",
                null,
              ],
            },
            notes: {
              type: "string",
              nullable: true,
              example: "Some example notes",
            },
            latitude: {
              type: "number",
              format: "double",
              example: 51.983333,
              nullable: true,
              description:
                "Latitude of the accounts's location, if applicable. Can be used to draw a map.",
            },
            longitude: {
              type: "number",
              format: "double",
              example: 5.916667,
              nullable: true,
              description:
                "Latitude of the accounts's location, if applicable. Can be used to draw a map.",
            },
            zoom_level: {
              type: "integer",
              format: "int32",
              example: 6,
              nullable: true,
              description:
                "Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels.",
            },
          },
          description:
            "JSON array with the necessary account information or key=value pairs. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          name: z.string(),
          type: z
            .enum([
              "asset",
              "expense",
              "import",
              "revenue",
              "cash",
              "liability",
              "liabilities",
              "initial-balance",
              "reconciliation",
            ])
            .describe(
              "Can only be one one these account types. import, initial-balance and reconciliation cannot be set manually."
            ),
          iban: z.string().nullable().optional(),
          bic: z.string().nullable().optional(),
          account_number: z.string().nullable().optional(),
          opening_balance: z
            .string()
            .describe(
              "Represents the opening balance, the initial amount this account holds."
            )
            .optional(),
          opening_balance_date: z
            .string()
            .datetime({ offset: true })
            .nullable()
            .describe("Represents the date of the opening balance.")
            .optional(),
          virtual_balance: z.string().optional(),
          currency_id: z
            .string()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's financial administration's currency."
            )
            .optional(),
          currency_code: z
            .string()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's financial administration's currency."
            )
            .optional(),
          active: z
            .boolean()
            .describe("If omitted, defaults to true.")
            .default(true),
          order: z.number().int().describe("Order of the account").optional(),
          include_net_worth: z
            .boolean()
            .describe("If omitted, defaults to true.")
            .default(true),
          account_role: z
            .union([
              z.literal("defaultAsset"),
              z.literal("sharedAsset"),
              z.literal("savingAsset"),
              z.literal("ccAsset"),
              z.literal("cashWalletAsset"),
              z.literal(null),
            ])
            .nullable()
            .describe("Is only mandatory when the type is asset.")
            .optional(),
          credit_card_type: z
            .union([z.literal("monthlyFull"), z.literal(null)])
            .nullable()
            .describe(
              "Mandatory when the account_role is ccAsset. Can only be monthlyFull or null."
            )
            .optional(),
          monthly_payment_date: z
            .string()
            .datetime({ offset: true })
            .nullable()
            .describe(
              "Mandatory when the account_role is ccAsset. Moment at which CC payment installments are asked for by the bank."
            )
            .optional(),
          liability_type: z
            .union([
              z.literal("loan"),
              z.literal("debt"),
              z.literal("mortgage"),
              z.literal(null),
            ])
            .nullable()
            .describe(
              "Mandatory when type is liability. Specifies the exact type."
            )
            .optional(),
          liability_direction: z
            .union([z.literal("credit"), z.literal("debit"), z.literal(null)])
            .nullable()
            .describe(
              "'credit' indicates somebody owes you the liability. 'debit' Indicates you owe this debt yourself. Works only for liabilities."
            )
            .optional(),
          interest: z
            .string()
            .nullable()
            .describe("Mandatory when type is liability. Interest percentage.")
            .default("0"),
          interest_period: z
            .union([
              z.literal("weekly"),
              z.literal("monthly"),
              z.literal("quarterly"),
              z.literal("half-year"),
              z.literal("yearly"),
              z.literal(null),
            ])
            .nullable()
            .describe(
              "Mandatory when type is liability. Period over which the interest is calculated."
            )
            .optional(),
          notes: z.string().nullable().optional(),
          latitude: z
            .number()
            .nullable()
            .describe(
              "Latitude of the accounts's location, if applicable. Can be used to draw a map."
            )
            .optional(),
          longitude: z
            .number()
            .nullable()
            .describe(
              "Latitude of the accounts's location, if applicable. Can be used to draw a map."
            )
            .optional(),
          zoom_level: z
            .number()
            .int()
            .nullable()
            .describe(
              "Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels."
            )
            .optional(),
        })
        .describe(
          "JSON array with the necessary account information or key=value pairs. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/accounts",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_account",
  },
  {
    name: "get_account",
    tags: ["accounts"],
    description: "Returns a single account by its ID. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. May be omitted. ",
        },
        end: {
          type: "string",
          description:
            'A date formatted YYYY-MM-DD. Must be after "start". Can not be the same as "start". May be omitted. ',
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the account.",
        },
        date: {
          type: "string",
          description:
            "A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day. ",
        },
      },
      required: ["id"],
    },
    zodShape: {
      start: z
        .string()
        .describe("A date formatted YYYY-MM-DD. May be omitted.")
        .optional(),
      end: z
        .string()
        .describe(
          'A date formatted YYYY-MM-DD. Must be after "start". Can not be the same as "start". May be omitted.'
        )
        .optional(),
      id: z.string().describe("The ID of the account."),
      date: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/accounts/{id}",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "date",
        in: "query",
      },
    ],
    operationId: "get_account",
  },
  {
    name: "update_account",
    tags: ["accounts"],
    description:
      "Used to update a single account. All fields that are not submitted will be cleared (set to NULL). The model will tell you which fields are mandatory. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the account.",
        },
        requestBody: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "My checking account",
            },
            iban: {
              type: "string",
              example: "GB98MIDL07009312345678",
              nullable: true,
            },
            bic: {
              type: "string",
              example: "BOFAUS3N",
              nullable: true,
            },
            account_number: {
              type: "string",
              nullable: true,
              example: "7009312345678",
            },
            opening_balance: {
              type: "string",
              example: "-1012.12",
            },
            opening_balance_date: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
              nullable: true,
            },
            virtual_balance: {
              type: "string",
              example: "123.45",
            },
            currency_id: {
              type: "string",
              example: "12",
              description:
                "Use either currency_id or currency_code. Defaults to the user's financial administration's currency.",
            },
            currency_code: {
              type: "string",
              example: "EUR",
              description:
                "Use either currency_id or currency_code. Defaults to the user's financial administration's currency.",
            },
            active: {
              type: "boolean",
              example: false,
              default: true,
              description: "If omitted, defaults to true.",
            },
            order: {
              type: "integer",
              format: "int32",
              example: 1,
              description: "Order of the account",
            },
            include_net_worth: {
              type: "boolean",
              example: true,
              default: true,
              description: "If omitted, defaults to true.",
            },
            account_role: {
              type: "string",
              example: "defaultAsset",
              description: "Is only mandatory when the type is asset.",
              nullable: true,
              enum: [
                "defaultAsset",
                "sharedAsset",
                "savingAsset",
                "ccAsset",
                "cashWalletAsset",
                null,
              ],
            },
            credit_card_type: {
              type: "string",
              example: "monthlyFull",
              description:
                "Mandatory when the account_role is ccAsset. Can only be monthlyFull or null.",
              nullable: true,
              enum: ["monthlyFull", null],
            },
            monthly_payment_date: {
              nullable: true,
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
              description:
                "Mandatory when the account_role is ccAsset. Moment at which CC payment installments are asked for by the bank.",
            },
            liability_type: {
              type: "string",
              example: "loan",
              description:
                "Mandatory when type is liability. Specifies the exact type.",
              nullable: true,
              enum: ["loan", "debt", "mortgage", null],
            },
            interest: {
              type: "string",
              example: "5.3",
              description:
                "Mandatory when type is liability. Interest percentage.",
              nullable: true,
            },
            interest_period: {
              type: "string",
              example: "monthly",
              description:
                "Mandatory when type is liability. Period over which the interest is calculated.",
              nullable: true,
              enum: [
                "weekly",
                "monthly",
                "quarterly",
                "half-year",
                "yearly",
                null,
              ],
            },
            notes: {
              type: "string",
              nullable: true,
              example: "Some example notes",
            },
            latitude: {
              type: "number",
              format: "double",
              example: 51.983333,
              nullable: true,
              description:
                "Latitude of the account's location, if applicable. Can be used to draw a map. If omitted, the existing location will be kept. If submitted as NULL, the current location will be removed.",
            },
            longitude: {
              type: "number",
              format: "double",
              example: 5.916667,
              nullable: true,
              description:
                "Latitude of the account's location, if applicable. Can be used to draw a map. If omitted, the existing location will be kept. If submitted as NULL, the current location will be removed.",
            },
            zoom_level: {
              type: "integer",
              format: "int32",
              example: 6,
              nullable: true,
              description:
                "Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels. If omitted, the existing location will be kept. If submitted as NULL, the current location will be removed.",
            },
          },
          description:
            "JSON array or form-data with updated account information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the account."),
      requestBody: z
        .object({
          name: z.string(),
          iban: z.string().nullable().optional(),
          bic: z.string().nullable().optional(),
          account_number: z.string().nullable().optional(),
          opening_balance: z.string().optional(),
          opening_balance_date: z
            .string()
            .datetime({ offset: true })
            .nullable()
            .optional(),
          virtual_balance: z.string().optional(),
          currency_id: z
            .string()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's financial administration's currency."
            )
            .optional(),
          currency_code: z
            .string()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's financial administration's currency."
            )
            .optional(),
          active: z
            .boolean()
            .describe("If omitted, defaults to true.")
            .default(true),
          order: z.number().int().describe("Order of the account").optional(),
          include_net_worth: z
            .boolean()
            .describe("If omitted, defaults to true.")
            .default(true),
          account_role: z
            .union([
              z.literal("defaultAsset"),
              z.literal("sharedAsset"),
              z.literal("savingAsset"),
              z.literal("ccAsset"),
              z.literal("cashWalletAsset"),
              z.literal(null),
            ])
            .nullable()
            .describe("Is only mandatory when the type is asset.")
            .optional(),
          credit_card_type: z
            .union([z.literal("monthlyFull"), z.literal(null)])
            .nullable()
            .describe(
              "Mandatory when the account_role is ccAsset. Can only be monthlyFull or null."
            )
            .optional(),
          monthly_payment_date: z
            .string()
            .datetime({ offset: true })
            .nullable()
            .describe(
              "Mandatory when the account_role is ccAsset. Moment at which CC payment installments are asked for by the bank."
            )
            .optional(),
          liability_type: z
            .union([
              z.literal("loan"),
              z.literal("debt"),
              z.literal("mortgage"),
              z.literal(null),
            ])
            .nullable()
            .describe(
              "Mandatory when type is liability. Specifies the exact type."
            )
            .optional(),
          interest: z
            .string()
            .nullable()
            .describe("Mandatory when type is liability. Interest percentage.")
            .optional(),
          interest_period: z
            .union([
              z.literal("weekly"),
              z.literal("monthly"),
              z.literal("quarterly"),
              z.literal("half-year"),
              z.literal("yearly"),
              z.literal(null),
            ])
            .nullable()
            .describe(
              "Mandatory when type is liability. Period over which the interest is calculated."
            )
            .optional(),
          notes: z.string().nullable().optional(),
          latitude: z
            .number()
            .nullable()
            .describe(
              "Latitude of the account's location, if applicable. Can be used to draw a map. If omitted, the existing location will be kept. If submitted as NULL, the current location will be removed."
            )
            .optional(),
          longitude: z
            .number()
            .nullable()
            .describe(
              "Latitude of the account's location, if applicable. Can be used to draw a map. If omitted, the existing location will be kept. If submitted as NULL, the current location will be removed."
            )
            .optional(),
          zoom_level: z
            .number()
            .int()
            .nullable()
            .describe(
              "Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels. If omitted, the existing location will be kept. If submitted as NULL, the current location will be removed."
            )
            .optional(),
        })
        .describe(
          "JSON array or form-data with updated account information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/accounts/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_account",
  },
  {
    name: "delete_account",
    tags: ["accounts"],
    description:
      "Will permanently delete an account. Any associated transactions and piggy banks are ALSO deleted. Cannot be recovered from. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the account.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the account.") },
    method: "delete",
    pathTemplate: "/v1/accounts/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_account",
  },
  {
    name: "list_attachment",
    tags: ["attachments"],
    description: "This endpoint lists all attachments. ",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/attachments",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_attachment",
  },
  {
    name: "store_attachment",
    tags: ["attachments"],
    description:
      "Creates a new attachment. The data required can be submitted as a JSON body or as a list of parameters. You cannot use this endpoint to upload the actual file data (see below). This endpoint only creates the attachment object. ",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["filename", "attachable_type", "attachable_id"],
          properties: {
            filename: {
              type: "string",
              example: "file.pdf",
            },
            attachable_type: {
              type: "string",
              example: "Bill",
              description:
                "The object class to which the attachment must be linked.",
              enum: [
                "Account",
                "Budget",
                "Bill",
                "TransactionJournal",
                "PiggyBank",
                "Tag",
              ],
            },
            attachable_id: {
              type: "string",
              example: "134",
              description: "ID of the model this attachment is linked to.",
            },
            title: {
              type: "string",
              example: "Some PDF file",
            },
            notes: {
              type: "string",
              example: "Some notes",
              nullable: true,
            },
          },
          description:
            "JSON array or key=value pairs with the necessary attachment information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          filename: z.string(),
          attachable_type: z
            .enum([
              "Account",
              "Budget",
              "Bill",
              "TransactionJournal",
              "PiggyBank",
              "Tag",
            ])
            .describe(
              "The object class to which the attachment must be linked."
            ),
          attachable_id: z
            .string()
            .describe("ID of the model this attachment is linked to."),
          title: z.string().optional(),
          notes: z.string().nullable().optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary attachment information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/attachments",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_attachment",
  },
  {
    name: "get_attachment",
    tags: ["attachments"],
    description:
      "Get a single attachment. This endpoint only returns the available metadata for the attachment. Actual file data is handled in two other endpoints (see below). ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the attachment.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the attachment.") },
    method: "get",
    pathTemplate: "/v1/attachments/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_attachment",
  },
  {
    name: "update_attachment",
    tags: ["attachments"],
    description:
      "Update the meta data for an existing attachment. This endpoint does not allow you to upload or download data. For that, see below. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the attachment.",
        },
        requestBody: {
          type: "object",
          properties: {
            filename: {
              type: "string",
              example: "file.pdf",
            },
            title: {
              type: "string",
              example: "Some PDF file",
            },
            notes: {
              type: "string",
              example: "Some notes",
              nullable: true,
            },
          },
          description:
            "JSON array with updated attachment information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the attachment."),
      requestBody: z
        .object({
          filename: z.string().optional(),
          title: z.string().optional(),
          notes: z.string().nullable().optional(),
        })
        .describe(
          "JSON array with updated attachment information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/attachments/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_attachment",
  },
  {
    name: "delete_attachment",
    tags: ["attachments"],
    description:
      "With this endpoint you delete an attachment, including any stored file data. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the single attachment.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the single attachment.") },
    method: "delete",
    pathTemplate: "/v1/attachments/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_attachment",
  },
  {
    name: "download_attachment",
    tags: ["attachments"],
    description:
      'This endpoint allows you to download the binary content of a transaction. It will be sent to you as a download, using the content type "application/octet-stream" and content disposition "attachment; filename=example.pdf". ',
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the attachment.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the attachment.") },
    method: "get",
    pathTemplate: "/v1/attachments/{id}/download",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "download_attachment",
  },
  {
    name: "upload_attachment",
    tags: ["attachments"],
    description:
      "Use this endpoint to upload (and possible overwrite) the file contents of an attachment. Simply put the entire file in the body as binary data. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the attachment.",
        },
        requestBody: {
          type: "string",
          description: "Request body (content type: application/octet-stream)",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the attachment."),
      requestBody: z
        .string()
        .describe("Request body (content type: application/octet-stream)")
        .optional(),
    },
    method: "post",
    pathTemplate: "/v1/attachments/{id}/upload",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/octet-stream",
    operationId: "upload_attachment",
  },
  {
    name: "list_available_budgets",
    tags: ["available_budgets"],
    description:
      'Firefly III calculates the total amount of money budgeted in so-called "available budgets". This endpoint returns all of these amounts and the periods for which they are calculated. ',
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description: "A date formatted YYYY-MM-DD. ",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      start: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
      end: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
    },
    method: "get",
    pathTemplate: "/v1/available-budgets",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "list_available_budgets",
  },
  {
    name: "get_available_budget",
    tags: ["available_budgets"],
    description: "Get a single available budget, by ID.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the available budget.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the available budget.") },
    method: "get",
    pathTemplate: "/v1/available-budgets/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_available_budget",
  },
  {
    name: "list_attachment_by_bill",
    tags: ["bills"],
    description: "This endpoint will list all attachments linked to the bill.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the bill.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the bill."),
    },
    method: "get",
    pathTemplate: "/v1/bills/{id}/attachments",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_attachment_by_bill",
  },
  {
    name: "list_rule_by_bill",
    tags: ["bills"],
    description:
      "This endpoint will list all rules that have an action to set the bill to this bill.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the bill.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the bill.") },
    method: "get",
    pathTemplate: "/v1/bills/{id}/rules",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_rule_by_bill",
  },
  {
    name: "list_transaction_by_bill",
    tags: ["bills"],
    description:
      "This endpoint will list all transactions linked to this bill.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the bill.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description: "A date formatted YYYY-MM-DD. ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the bill."),
      start: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
      end: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/bills/{id}/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction_by_bill",
  },
  {
    name: "list_bill",
    tags: ["bills"],
    description: "This endpoint will list all the user's bills.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD. If it is are added to the request, Firefly III will calculate the appropriate payment and paid dates. ",
        },
        end: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD. If it is added to the request, Firefly III will calculate the appropriate payment and paid dates. ",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. If it is are added to the request, Firefly III will calculate the appropriate payment and paid dates."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. If it is added to the request, Firefly III will calculate the appropriate payment and paid dates."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/bills",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "list_bill",
  },
  {
    name: "store_bill",
    tags: ["bills"],
    description:
      "Creates a new bill. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["name", "amount_min", "amount_max", "date", "repeat_freq"],
          properties: {
            currency_id: {
              type: "string",
              example: "5",
              description: "Use either currency_id or currency_code",
            },
            currency_code: {
              type: "string",
              example: "EUR",
              description: "Use either currency_id or currency_code",
            },
            name: {
              type: "string",
              example: "Rent",
            },
            amount_min: {
              type: "string",
              example: "123.45",
            },
            amount_max: {
              type: "string",
              example: "123.45",
            },
            date: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            end_date: {
              type: "string",
              format: "date-time",
              example: "2025-09-30T23:59:59+00:00",
              description:
                "The date after which this bill is no longer valid or applicable",
            },
            extension_date: {
              type: "string",
              format: "date-time",
              example: "2025-09-30T23:59:59+00:00",
              description:
                "The date before which the bill must be renewed (or cancelled)",
            },
            repeat_freq: {
              type: "string",
              example: "monthly",
              description: "How often the bill must be paid.",
              enum: ["weekly", "monthly", "quarterly", "half-year", "yearly"],
            },
            skip: {
              type: "integer",
              format: "int32",
              example: 0,
              description:
                "How often the bill must be skipped. 1 means a bi-monthly bill.",
            },
            active: {
              type: "boolean",
              example: true,
              description: "If the bill is active.",
            },
            notes: {
              type: "string",
              example: "Some example notes",
              nullable: true,
            },
            object_group_id: {
              type: "string",
              example: "5",
              nullable: true,
              description:
                "The group ID of the group this object is part of. NULL if no group.",
            },
            object_group_title: {
              type: "string",
              example: "Example Group",
              nullable: true,
              description: "The name of the group. NULL if no group.",
            },
          },
          description:
            "JSON array or key=value pairs with the necessary bill information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          currency_id: z
            .string()
            .describe("Use either currency_id or currency_code")
            .optional(),
          currency_code: z
            .string()
            .describe("Use either currency_id or currency_code")
            .optional(),
          name: z.string(),
          amount_min: z.string(),
          amount_max: z.string(),
          date: z.string().datetime({ offset: true }),
          end_date: z
            .string()
            .datetime({ offset: true })
            .describe(
              "The date after which this bill is no longer valid or applicable"
            )
            .optional(),
          extension_date: z
            .string()
            .datetime({ offset: true })
            .describe(
              "The date before which the bill must be renewed (or cancelled)"
            )
            .optional(),
          repeat_freq: z
            .enum(["weekly", "monthly", "quarterly", "half-year", "yearly"])
            .describe("How often the bill must be paid."),
          skip: z
            .number()
            .int()
            .describe(
              "How often the bill must be skipped. 1 means a bi-monthly bill."
            )
            .optional(),
          active: z.boolean().describe("If the bill is active.").optional(),
          notes: z.string().nullable().optional(),
          object_group_id: z
            .string()
            .nullable()
            .describe(
              "The group ID of the group this object is part of. NULL if no group."
            )
            .optional(),
          object_group_title: z
            .string()
            .nullable()
            .describe("The name of the group. NULL if no group.")
            .optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary bill information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/bills",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_bill",
  },
  {
    name: "get_bill",
    tags: ["bills"],
    description: "Get a single bill.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the bill.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD. If it is are added to the request, Firefly III will calculate the appropriate payment and paid dates. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD. If it is added to the request, Firefly III will calculate the appropriate payment and paid dates. ",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the bill."),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. If it is are added to the request, Firefly III will calculate the appropriate payment and paid dates."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. If it is added to the request, Firefly III will calculate the appropriate payment and paid dates."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/bills/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "get_bill",
  },
  {
    name: "update_bill",
    tags: ["bills"],
    description: "Update existing bill.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the bill.",
        },
        requestBody: {
          type: "object",
          required: ["name"],
          properties: {
            currency_id: {
              type: "string",
              example: "5",
              description: "Use either currency_id or currency_code",
            },
            currency_code: {
              type: "string",
              example: "EUR",
              description: "Use either currency_id or currency_code",
            },
            name: {
              type: "string",
              example: "Rent",
            },
            amount_min: {
              type: "string",
              example: "123.45",
            },
            amount_max: {
              type: "string",
              example: "123.45",
            },
            date: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            end_date: {
              type: "string",
              format: "date-time",
              example: "2025-09-30T23:59:59+00:00",
              description:
                "The date after which this bill is no longer valid or applicable",
            },
            extension_date: {
              type: "string",
              format: "date-time",
              example: "2025-09-30T23:59:59+00:00",
              description:
                "The date before which the bill must be renewed (or cancelled)",
            },
            repeat_freq: {
              type: "string",
              example: "monthly",
              description: "How often the bill must be paid.",
              enum: ["weekly", "monthly", "quarterly", "half-year", "yearly"],
            },
            skip: {
              type: "integer",
              format: "int32",
              example: 0,
              description:
                "How often the bill must be skipped. 1 means a bi-monthly bill.",
            },
            active: {
              type: "boolean",
              example: true,
              description: "If the bill is active.",
            },
            notes: {
              type: "string",
              example: "Some example notes",
              nullable: true,
            },
            object_group_id: {
              type: "string",
              example: "5",
              nullable: true,
              description:
                "The group ID of the group this object is part of. NULL if no group.",
            },
            object_group_title: {
              type: "string",
              example: "Example Group",
              nullable: true,
              description: "The name of the group. NULL if no group.",
            },
          },
          description:
            "JSON array or key=value pairs with updated bill information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the bill."),
      requestBody: z
        .object({
          currency_id: z
            .string()
            .describe("Use either currency_id or currency_code")
            .optional(),
          currency_code: z
            .string()
            .describe("Use either currency_id or currency_code")
            .optional(),
          name: z.string(),
          amount_min: z.string().optional(),
          amount_max: z.string().optional(),
          date: z.string().datetime({ offset: true }).optional(),
          end_date: z
            .string()
            .datetime({ offset: true })
            .describe(
              "The date after which this bill is no longer valid or applicable"
            )
            .optional(),
          extension_date: z
            .string()
            .datetime({ offset: true })
            .describe(
              "The date before which the bill must be renewed (or cancelled)"
            )
            .optional(),
          repeat_freq: z
            .enum(["weekly", "monthly", "quarterly", "half-year", "yearly"])
            .describe("How often the bill must be paid.")
            .optional(),
          skip: z
            .number()
            .int()
            .describe(
              "How often the bill must be skipped. 1 means a bi-monthly bill."
            )
            .optional(),
          active: z.boolean().describe("If the bill is active.").optional(),
          notes: z.string().nullable().optional(),
          object_group_id: z
            .string()
            .nullable()
            .describe(
              "The group ID of the group this object is part of. NULL if no group."
            )
            .optional(),
          object_group_title: z
            .string()
            .nullable()
            .describe("The name of the group. NULL if no group.")
            .optional(),
        })
        .describe(
          "JSON array or key=value pairs with updated bill information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/bills/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_bill",
  },
  {
    name: "delete_bill",
    tags: ["bills"],
    description:
      "Delete a bill. This will not delete any associated rules. Will not remove associated transactions. WILL remove all associated attachments.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the bill.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the bill.") },
    method: "delete",
    pathTemplate: "/v1/bills/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_bill",
  },
  {
    name: "list_transaction_by_budget_limit",
    tags: ["budgets"],
    description:
      "List all the transactions within one budget limit. The start and end date are dictated by the budget limit.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description:
            "The ID of the budget. The budget limit MUST be associated to the budget ID.",
        },
        limitId: {
          type: "string",
          example: "123",
          description:
            "The ID of the budget limit. The budget limit MUST be associated to the budget ID.",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
      required: ["id", "limitId"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z
        .string()
        .describe(
          "The ID of the budget. The budget limit MUST be associated to the budget ID."
        ),
      limitId: z
        .string()
        .describe(
          "The ID of the budget limit. The budget limit MUST be associated to the budget ID."
        ),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/budgets/{id}/limits/{limitId}/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "limitId",
        in: "path",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction_by_budget_limit",
  },
  {
    name: "list_budget_limit_by_budget",
    tags: ["budgets"],
    description:
      'Get all budget limits for this budget and the money spent, and money left. You can limit the list by submitting a date range as well. The "spent" array for each budget limit is NOT influenced by the start and end date of your query, but by the start and end date of the budget limit itself. ',
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the requested budget.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description: "A date formatted YYYY-MM-DD. ",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the requested budget."),
      start: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
      end: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
    },
    method: "get",
    pathTemplate: "/v1/budgets/{id}/limits",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "list_budget_limit_by_budget",
  },
  {
    name: "store_budget_limit",
    tags: ["budgets"],
    description: "Store a new budget limit under this budget.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the budget.",
        },
        requestBody: {
          type: "object",
          required: ["amount", "start", "end", "budget_id"],
          properties: {
            currency_id: {
              type: "string",
              example: "5",
              description:
                "Use either currency_id or currency_code. Defaults to the user's primary currency.",
            },
            currency_code: {
              type: "string",
              example: "EUR",
              description:
                "Use either currency_id or currency_code. Defaults to the user's primary currency.",
            },
            budget_id: {
              type: "string",
              example: "23",
              description: "The budget ID of the associated budget.",
            },
            start: {
              type: "string",
              example: "2025-09-01",
              description: "Start date of the budget limit.",
            },
            period: {
              type: "string",
              example: "monthly",
              nullable: true,
              description:
                "Period of the budget limit. Only used when auto-generated by auto-budget.",
            },
            end: {
              type: "string",
              example: "2025-09-30",
              description: "End date of the budget limit.",
            },
            amount: {
              type: "string",
              example: "123.45",
            },
            notes: {
              type: "string",
              example: "Some example notes",
              nullable: true,
              description: "Some notes for this specific budget limit.",
            },
          },
          description:
            "JSON array or key=value pairs with the necessary budget information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the budget."),
      requestBody: z
        .object({
          currency_id: z
            .string()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's primary currency."
            )
            .optional(),
          currency_code: z
            .string()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's primary currency."
            )
            .optional(),
          budget_id: z
            .string()
            .describe("The budget ID of the associated budget."),
          start: z.string().describe("Start date of the budget limit."),
          period: z
            .string()
            .nullable()
            .describe(
              "Period of the budget limit. Only used when auto-generated by auto-budget."
            )
            .optional(),
          end: z.string().describe("End date of the budget limit."),
          amount: z.string(),
          notes: z
            .string()
            .nullable()
            .describe("Some notes for this specific budget limit.")
            .optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary budget information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/budgets/{id}/limits",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "store_budget_limit",
  },
  {
    name: "get_budget_limit",
    tags: ["budgets"],
    description: "Get single budget limit.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description:
            "The ID of the budget. The budget limit MUST be associated to the budget ID.",
        },
        limitId: {
          type: "integer",
          minimum: 1,
          example: 1,
          description:
            "The ID of the budget limit. The budget limit MUST be associated to the budget ID.",
        },
      },
      required: ["id", "limitId"],
    },
    zodShape: {
      id: z
        .string()
        .describe(
          "The ID of the budget. The budget limit MUST be associated to the budget ID."
        ),
      limitId: z
        .number()
        .int()
        .gte(1)
        .describe(
          "The ID of the budget limit. The budget limit MUST be associated to the budget ID."
        ),
    },
    method: "get",
    pathTemplate: "/v1/budgets/{id}/limits/{limitId}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "limitId",
        in: "path",
      },
    ],
    operationId: "get_budget_limit",
  },
  {
    name: "update_budget_limit",
    tags: ["budgets"],
    description: "Update existing budget limit.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description:
            "The ID of the budget. The budget limit MUST be associated to the budget ID.",
        },
        limitId: {
          type: "string",
          example: "123",
          description:
            "The ID of the budget limit. The budget limit MUST be associated to the budget ID.",
        },
        requestBody: {
          type: "object",
          properties: {
            created_at: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            updated_at: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            start: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
              description: "Start date of the budget limit.",
            },
            end: {
              type: "string",
              format: "date-time",
              example: "2025-09-30T23:59:59+00:00",
              description: "End date of the budget limit.",
            },
            budget_id: {
              type: "string",
              example: "23",
              description: "The budget ID of the associated budget.",
            },
            object_has_currency_setting: {
              type: "boolean",
              example: true,
              description:
                "Indicates whether the object has a currency setting. If false, the object uses the administration's primary currency.",
            },
            currency_id: {
              type: "string",
              example: "5",
              description:
                "The currency ID of the currency associated with this object.",
            },
            currency_name: {
              type: "string",
              example: "Euro",
              description:
                "The currency name of the currency associated with this object.",
            },
            currency_code: {
              type: "string",
              example: "EUR",
              description:
                "The currency code of the currency associated with this object.",
            },
            currency_symbol: {
              type: "string",
              example: "$",
            },
            currency_decimal_places: {
              type: "integer",
              format: "int32",
              example: 2,
            },
            primary_currency_id: {
              type: "string",
              example: "5",
              description:
                "The currency ID of the administration's primary currency.",
            },
            primary_currency_name: {
              type: "string",
              example: "Euro",
              description:
                "The currency name of the administration's primary currency.",
            },
            primary_currency_code: {
              type: "string",
              example: "EUR",
              description:
                "The currency code of the administration's primary currency.",
            },
            primary_currency_symbol: {
              type: "string",
              example: "$",
              description:
                "The currency symbol of the administration's primary currency.",
            },
            primary_currency_decimal_places: {
              type: "integer",
              format: "int32",
              example: 2,
              description:
                "The currency decimal places of the administration's primary currency.",
            },
            period: {
              type: "string",
              example: "monthly",
              nullable: true,
              description:
                "Period of the budget limit. Only used when auto-generated by auto-budget.",
            },
            amount: {
              type: "string",
              example: "123.45",
            },
            pc_amount: {
              type: "string",
              example: "123.45",
              nullable: true,
              description:
                "The amount of this budget limit in the user's primary currency, if the original amount is in a different currency.",
            },
            spent: {
              type: "string",
              example: "-1012.12",
              nullable: true,
              description:
                "Will be in the primary currency if this is turned on by the user.",
            },
            notes: {
              type: "string",
              example: "Some example notes",
              nullable: true,
              description: "Some notes for this specific budget limit.",
            },
          },
          description:
            "JSON array with updated budget limit information. See the model for the exact specifications.",
        },
      },
      required: ["id", "limitId", "requestBody"],
    },
    zodShape: {
      id: z
        .string()
        .describe(
          "The ID of the budget. The budget limit MUST be associated to the budget ID."
        ),
      limitId: z
        .string()
        .describe(
          "The ID of the budget limit. The budget limit MUST be associated to the budget ID."
        ),
      requestBody: z
        .object({
          created_at: z.string().datetime({ offset: true }).optional(),
          updated_at: z.string().datetime({ offset: true }).optional(),
          start: z
            .string()
            .datetime({ offset: true })
            .describe("Start date of the budget limit.")
            .optional(),
          end: z
            .string()
            .datetime({ offset: true })
            .describe("End date of the budget limit.")
            .optional(),
          budget_id: z
            .string()
            .describe("The budget ID of the associated budget.")
            .optional(),
          object_has_currency_setting: z
            .boolean()
            .describe(
              "Indicates whether the object has a currency setting. If false, the object uses the administration's primary currency."
            )
            .optional(),
          currency_id: z
            .string()
            .describe(
              "The currency ID of the currency associated with this object."
            )
            .optional(),
          currency_name: z
            .string()
            .describe(
              "The currency name of the currency associated with this object."
            )
            .optional(),
          currency_code: z
            .string()
            .describe(
              "The currency code of the currency associated with this object."
            )
            .optional(),
          currency_symbol: z.string().optional(),
          currency_decimal_places: z.number().int().optional(),
          primary_currency_id: z
            .string()
            .describe(
              "The currency ID of the administration's primary currency."
            )
            .optional(),
          primary_currency_name: z
            .string()
            .describe(
              "The currency name of the administration's primary currency."
            )
            .optional(),
          primary_currency_code: z
            .string()
            .describe(
              "The currency code of the administration's primary currency."
            )
            .optional(),
          primary_currency_symbol: z
            .string()
            .describe(
              "The currency symbol of the administration's primary currency."
            )
            .optional(),
          primary_currency_decimal_places: z
            .number()
            .int()
            .describe(
              "The currency decimal places of the administration's primary currency."
            )
            .optional(),
          period: z
            .string()
            .nullable()
            .describe(
              "Period of the budget limit. Only used when auto-generated by auto-budget."
            )
            .optional(),
          amount: z.string().optional(),
          pc_amount: z
            .string()
            .nullable()
            .describe(
              "The amount of this budget limit in the user's primary currency, if the original amount is in a different currency."
            )
            .optional(),
          spent: z
            .string()
            .nullable()
            .describe(
              "Will be in the primary currency if this is turned on by the user."
            )
            .optional(),
          notes: z
            .string()
            .nullable()
            .describe("Some notes for this specific budget limit.")
            .optional(),
        })
        .describe(
          "JSON array with updated budget limit information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/budgets/{id}/limits/{limitId}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "limitId",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_budget_limit",
  },
  {
    name: "delete_budget_limit",
    tags: ["budgets"],
    description: "Delete a budget limit.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description:
            "The ID of the budget. The budget limit MUST be associated to the budget ID.",
        },
        limitId: {
          type: "string",
          example: "123",
          description:
            "The ID of the budget limit. The budget limit MUST be associated to the budget ID.",
        },
      },
      required: ["id", "limitId"],
    },
    zodShape: {
      id: z
        .string()
        .describe(
          "The ID of the budget. The budget limit MUST be associated to the budget ID."
        ),
      limitId: z
        .string()
        .describe(
          "The ID of the budget limit. The budget limit MUST be associated to the budget ID."
        ),
    },
    method: "delete",
    pathTemplate: "/v1/budgets/{id}/limits/{limitId}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "limitId",
        in: "path",
      },
    ],
    operationId: "delete_budget_limit",
  },
  {
    name: "list_budget_limit",
    tags: ["budgets"],
    description: "Get all budget limits for for this date range. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          example: "2025-09-01",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description: "A date formatted YYYY-MM-DD. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
    },
    method: "get",
    pathTemplate: "/v1/budget-limits",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "list_budget_limit",
  },
  {
    name: "list_transaction_by_budget",
    tags: ["budgets"],
    description:
      "Get all transactions linked to a budget, possibly limited by start and end",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the budget.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description: "A date formatted YYYY-MM-DD. ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the budget."),
      start: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
      end: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/budgets/{id}/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction_by_budget",
  },
  {
    name: "list_attachment_by_budget",
    tags: ["budgets"],
    description: "Lists all attachments.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the budget.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the budget."),
    },
    method: "get",
    pathTemplate: "/v1/budgets/{id}/attachments",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_attachment_by_budget",
  },
  {
    name: "list_transaction_without_budget",
    tags: ["budgets"],
    description:
      "Get all transactions NOT linked to a budget, possibly limited by start and end",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description: "A date formatted YYYY-MM-DD. ",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      start: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
      end: z.string().describe("A date formatted YYYY-MM-DD.").optional(),
    },
    method: "get",
    pathTemplate: "/v1/budgets/transactions-without-budget",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "list_transaction_without_budget",
  },
  {
    name: "list_budget",
    tags: ["budgets"],
    description:
      'List all the budgets the user has made. If the start date and end date are submitted as well, the "spent" array will be updated accordingly.',
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD, to get info on how much the user has spent. You must submit both start and end. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD, to get info on how much the user has spent. You must submit both start and end. ",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to get info on how much the user has spent. You must submit both start and end."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to get info on how much the user has spent. You must submit both start and end."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/budgets",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "list_budget",
  },
  {
    name: "store_budget",
    tags: ["budgets"],
    description:
      "Creates a new budget. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "Bills",
            },
            active: {
              type: "boolean",
              example: false,
            },
            order: {
              type: "integer",
              format: "int32",
              example: 5,
            },
            notes: {
              type: "string",
              example: "Some notes",
              nullable: true,
            },
            auto_budget_type: {
              type: "string",
              example: "reset",
              nullable: true,
              description:
                "The type of auto-budget that Firefly III must create.",
              enum: ["reset", "rollover", "none", null],
            },
            auto_budget_currency_id: {
              type: "string",
              example: "12",
              nullable: true,
              description:
                "Use either currency_id or currency_code. Defaults to the user's financial administration's currency.",
            },
            auto_budget_currency_code: {
              type: "string",
              example: "EUR",
              nullable: true,
              description:
                "Use either currency_id or currency_code. Defaults to the user's financial administration's currency.",
            },
            auto_budget_amount: {
              type: "string",
              example: "-1012.12",
              nullable: true,
            },
            auto_budget_period: {
              type: "string",
              example: "monthly",
              nullable: true,
              description: "Period for the auto budget",
              enum: [
                "daily",
                "weekly",
                "monthly",
                "quarterly",
                "half-year",
                "yearly",
                null,
              ],
            },
          },
          description:
            "JSON array or key=value pairs with the necessary budget information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          name: z.string(),
          active: z.boolean().optional(),
          order: z.number().int().optional(),
          notes: z.string().nullable().optional(),
          auto_budget_type: z
            .union([
              z.literal("reset"),
              z.literal("rollover"),
              z.literal("none"),
              z.literal(null),
            ])
            .nullable()
            .describe("The type of auto-budget that Firefly III must create.")
            .optional(),
          auto_budget_currency_id: z
            .string()
            .nullable()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's financial administration's currency."
            )
            .optional(),
          auto_budget_currency_code: z
            .string()
            .nullable()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's financial administration's currency."
            )
            .optional(),
          auto_budget_amount: z.string().nullable().optional(),
          auto_budget_period: z
            .union([
              z.literal("daily"),
              z.literal("weekly"),
              z.literal("monthly"),
              z.literal("quarterly"),
              z.literal("half-year"),
              z.literal("yearly"),
              z.literal(null),
            ])
            .nullable()
            .describe("Period for the auto budget")
            .optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary budget information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/budgets",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_budget",
  },
  {
    name: "get_budget",
    tags: ["budgets"],
    description:
      'Get a single budget. If the start date and end date are submitted as well, the "spent" array will be updated accordingly.',
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the requested budget.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD, to get info on how much the user has spent. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD, to get info on how much the user has spent. ",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the requested budget."),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to get info on how much the user has spent."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to get info on how much the user has spent."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/budgets/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "get_budget",
  },
  {
    name: "update_budget",
    tags: ["budgets"],
    description:
      "Update existing budget. This endpoint cannot be used to set budget amount limits.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the budget.",
        },
        requestBody: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "Bills",
            },
            active: {
              type: "boolean",
              example: false,
            },
            order: {
              type: "integer",
              format: "int32",
              example: 5,
            },
            notes: {
              type: "string",
              example: "Some notes",
              nullable: true,
            },
            auto_budget_type: {
              type: "string",
              example: "reset",
              nullable: true,
              description:
                "The type of auto-budget that Firefly III must create.",
              enum: ["reset", "rollover", "none", null],
            },
            auto_budget_currency_id: {
              type: "string",
              example: "12",
              nullable: true,
              description:
                "Use either currency_id or currency_code. Defaults to the user's financial administration's currency.",
            },
            auto_budget_currency_code: {
              type: "string",
              example: "EUR",
              nullable: true,
              description:
                "Use either currency_id or currency_code. Defaults to the user's financial administration's currency.",
            },
            auto_budget_amount: {
              type: "string",
              example: "-1012.12",
              nullable: true,
            },
            auto_budget_period: {
              type: "string",
              example: "monthly",
              nullable: true,
              description: "Period for the auto budget",
              enum: [
                "daily",
                "weekly",
                "monthly",
                "quarterly",
                "half-year",
                "yearly",
                null,
              ],
            },
          },
          description:
            "JSON array with updated budget information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the budget."),
      requestBody: z
        .object({
          name: z.string(),
          active: z.boolean().optional(),
          order: z.number().int().optional(),
          notes: z.string().nullable().optional(),
          auto_budget_type: z
            .union([
              z.literal("reset"),
              z.literal("rollover"),
              z.literal("none"),
              z.literal(null),
            ])
            .nullable()
            .describe("The type of auto-budget that Firefly III must create.")
            .optional(),
          auto_budget_currency_id: z
            .string()
            .nullable()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's financial administration's currency."
            )
            .optional(),
          auto_budget_currency_code: z
            .string()
            .nullable()
            .describe(
              "Use either currency_id or currency_code. Defaults to the user's financial administration's currency."
            )
            .optional(),
          auto_budget_amount: z.string().nullable().optional(),
          auto_budget_period: z
            .union([
              z.literal("daily"),
              z.literal("weekly"),
              z.literal("monthly"),
              z.literal("quarterly"),
              z.literal("half-year"),
              z.literal("yearly"),
              z.literal(null),
            ])
            .nullable()
            .describe("Period for the auto budget")
            .optional(),
        })
        .describe(
          "JSON array with updated budget information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/budgets/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_budget",
  },
  {
    name: "delete_budget",
    tags: ["budgets"],
    description: "Delete a budget. Transactions will not be deleted.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the budget.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the budget.") },
    method: "delete",
    pathTemplate: "/v1/budgets/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_budget",
  },
  {
    name: "list_transaction_by_category",
    tags: ["categories"],
    description:
      "List all transactions in a category, optionally limited to the date ranges specified.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the category.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD, to limit the result list. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD, to limit the result list. ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the category."),
      start: z
        .string()
        .describe("A date formatted YYYY-MM-DD, to limit the result list.")
        .optional(),
      end: z
        .string()
        .describe("A date formatted YYYY-MM-DD, to limit the result list.")
        .optional(),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/categories/{id}/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction_by_category",
  },
  {
    name: "list_attachment_by_category",
    tags: ["categories"],
    description: "Lists all attachments.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the category.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the category."),
    },
    method: "get",
    pathTemplate: "/v1/categories/{id}/attachments",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_attachment_by_category",
  },
  {
    name: "list_category",
    tags: ["categories"],
    description: "List all categories.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/categories",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_category",
  },
  {
    name: "store_category",
    tags: ["categories"],
    description:
      "Creates a new category. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "Lunch",
            },
            notes: {
              type: "string",
              nullable: true,
              example: "Some example notes",
            },
          },
          description:
            "JSON array or key=value pairs with the necessary category information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({ name: z.string(), notes: z.string().nullable().optional() })
        .describe(
          "JSON array or key=value pairs with the necessary category information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/categories",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_category",
  },
  {
    name: "get_category",
    tags: ["categories"],
    description: "Get a single category.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the category.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD, to show spent and earned info. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD, to show spent and earned info. ",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the category."),
      start: z
        .string()
        .describe("A date formatted YYYY-MM-DD, to show spent and earned info.")
        .optional(),
      end: z
        .string()
        .describe("A date formatted YYYY-MM-DD, to show spent and earned info.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/categories/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "get_category",
  },
  {
    name: "update_category",
    tags: ["categories"],
    description: "Update existing category.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the category.",
        },
        requestBody: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "Lunch",
            },
            notes: {
              type: "string",
              nullable: true,
              example: "Some example notes",
            },
          },
          description:
            "JSON array with updated category information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the category."),
      requestBody: z
        .object({ name: z.string(), notes: z.string().nullable().optional() })
        .describe(
          "JSON array with updated category information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/categories/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_category",
  },
  {
    name: "delete_category",
    tags: ["categories"],
    description: "Delete a category. Transactions will not be removed.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the category.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the category.") },
    method: "delete",
    pathTemplate: "/v1/categories/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_category",
  },
  {
    name: "list_currency_exchange_rates",
    tags: ["currency_exchange_rates"],
    description: "List exchange rates that Firefly III knows.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/exchange-rates",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_currency_exchange_rates",
  },
  {
    name: "store_currency_exchange_rate",
    tags: ["currency_exchange_rates"],
    description:
      "Stores a new exchange rate. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["from", "to"],
          properties: {
            from: {
              type: "string",
              example: "USD",
              description: "The base currency code.",
              nullable: false,
            },
            to: {
              type: "string",
              example: "EUR",
              description: "The destination currency code.",
              nullable: false,
            },
            rate: {
              type: "string",
              nullable: false,
              example: "2.3456",
              description:
                "The exchange rate from the base currency to the destination currency.",
            },
          },
          description:
            "JSON array or key=value pairs with the necessary exchange rate information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          from: z.string().describe("The base currency code."),
          to: z.string().describe("The destination currency code."),
          rate: z
            .string()
            .describe(
              "The exchange rate from the base currency to the destination currency."
            )
            .optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary exchange rate information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/exchange-rates",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_currency_exchange_rate",
  },
  {
    name: "list_specific_currency_exchange_rate",
    tags: ["currency_exchange_rates"],
    description: "List a single specific exchange rate by its ID.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the requested currency exchange rate.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z
        .string()
        .describe("The ID of the requested currency exchange rate."),
    },
    method: "get",
    pathTemplate: "/v1/exchange-rates/{id}",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_specific_currency_exchange_rate",
  },
  {
    name: "update_currency_exchange_rate",
    tags: ["currency_exchange_rates"],
    description:
      "Used to update a single currency exchange rate by its ID. Including the from/to currency is optional. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the currency exchange rate.",
        },
        requestBody: {
          type: "object",
          required: ["date", "rate"],
          properties: {
            date: {
              type: "string",
              example: "2025-09-01",
              description: "The date to which the exchange rate is applicable.",
              nullable: false,
            },
            rate: {
              type: "string",
              nullable: false,
              example: "2.3456",
              description:
                "The exchange rate from the base currency to the destination currency.",
            },
            from: {
              type: "string",
              example: "USD",
              description: "The base currency code.",
              nullable: true,
            },
            to: {
              type: "string",
              example: "EUR",
              description: "The destination currency code.",
              nullable: true,
            },
          },
          description:
            "JSON array or form-data with updated exchange rate information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the currency exchange rate."),
      requestBody: z
        .object({
          date: z
            .string()
            .describe("The date to which the exchange rate is applicable."),
          rate: z
            .string()
            .describe(
              "The exchange rate from the base currency to the destination currency."
            ),
          from: z
            .string()
            .nullable()
            .describe("The base currency code.")
            .optional(),
          to: z
            .string()
            .nullable()
            .describe("The destination currency code.")
            .optional(),
        })
        .describe(
          "JSON array or form-data with updated exchange rate information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/exchange-rates/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_currency_exchange_rate",
  },
  {
    name: "delete_specific_currency_exchange_rate",
    tags: ["currency_exchange_rates"],
    description: "Delete a specific currency exchange rate by its internal ID.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the requested currency exchange rate.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z
        .string()
        .describe("The ID of the requested currency exchange rate."),
    },
    method: "delete",
    pathTemplate: "/v1/exchange-rates/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_specific_currency_exchange_rate",
  },
  {
    name: "list_specific_currency_exchange_rates",
    tags: ["currency_exchange_rates"],
    description: "List all exchange rates from/to the mentioned currencies.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        from: {
          type: "string",
          example: "EUR",
          description: "The currency code of the 'from' currency.",
        },
        to: {
          type: "string",
          example: "USD",
          description: "The currency code of the 'to' currency.",
        },
      },
      required: ["from", "to"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      from: z.string().describe("The currency code of the 'from' currency."),
      to: z.string().describe("The currency code of the 'to' currency."),
    },
    method: "get",
    pathTemplate: "/v1/exchange-rates/{from}/{to}",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "from",
        in: "path",
      },
      {
        name: "to",
        in: "path",
      },
    ],
    operationId: "list_specific_currency_exchange_rates",
  },
  {
    name: "delete_specific_currency_exchange_rates",
    tags: ["currency_exchange_rates"],
    description:
      "Deletes ALL currency exchange rates from 'from' to 'to'. It's important to know that the reverse exchange rates (from 'to' to 'from') will not be deleted and Firefly III will still be able to infer the correct exchange rate from the reverse one.",
    inputSchema: {
      type: "object",
      properties: {
        from: {
          type: "string",
          example: "EUR",
          description: "The currency code of the 'from' currency.",
        },
        to: {
          type: "string",
          example: "USD",
          description: "The currency code of the 'to' currency.",
        },
      },
      required: ["from", "to"],
    },
    zodShape: {
      from: z.string().describe("The currency code of the 'from' currency."),
      to: z.string().describe("The currency code of the 'to' currency."),
    },
    method: "delete",
    pathTemplate: "/v1/exchange-rates/{from}/{to}",
    executionParameters: [
      {
        name: "from",
        in: "path",
      },
      {
        name: "to",
        in: "path",
      },
    ],
    operationId: "delete_specific_currency_exchange_rates",
  },
  {
    name: "list_specific_currency_exchange_rate_on_date",
    tags: ["currency_exchange_rates"],
    description:
      "List the exchange rate for the from and to-currency on the requested date.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        from: {
          type: "string",
          example: "EUR",
          description: "The currency code of the 'from' currency.",
        },
        to: {
          type: "string",
          example: "USD",
          description: "The currency code of the 'to' currency.",
        },
        date: {
          type: "string",
          description: "Example: 2025-09-01",
        },
      },
      required: ["from", "to", "date"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      from: z.string().describe("The currency code of the 'from' currency."),
      to: z.string().describe("The currency code of the 'to' currency."),
      date: z.string().describe("Example: 2025-09-01"),
    },
    method: "get",
    pathTemplate: "/v1/exchange-rates/{from}/{to}/{date}",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "from",
        in: "path",
      },
      {
        name: "to",
        in: "path",
      },
      {
        name: "date",
        in: "path",
      },
    ],
    operationId: "list_specific_currency_exchange_rate_on_date",
  },
  {
    name: "update_currency_exchange_rate_by_date",
    tags: ["currency_exchange_rates"],
    description:
      "Used to update a single currency exchange rate by its currency codes and date ",
    inputSchema: {
      type: "object",
      properties: {
        from: {
          type: "string",
          example: "EUR",
          description: "The currency code of the 'from' currency.",
        },
        to: {
          type: "string",
          example: "USD",
          description: "The currency code of the 'to' currency.",
        },
        date: {
          type: "string",
          description: "Example: 2025-09-01",
        },
        requestBody: {
          type: "object",
          required: ["rate"],
          properties: {
            rate: {
              type: "string",
              nullable: false,
              example: "2.3456",
              description:
                "The exchange rate from the base currency to the destination currency.",
            },
          },
          description:
            "JSON array or form-data with updated exchange rate information. See the model for the exact specifications.",
        },
      },
      required: ["from", "to", "date", "requestBody"],
    },
    zodShape: {
      from: z.string().describe("The currency code of the 'from' currency."),
      to: z.string().describe("The currency code of the 'to' currency."),
      date: z.string().describe("Example: 2025-09-01"),
      requestBody: z
        .object({
          rate: z
            .string()
            .describe(
              "The exchange rate from the base currency to the destination currency."
            ),
        })
        .describe(
          "JSON array or form-data with updated exchange rate information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/exchange-rates/{from}/{to}/{date}",
    executionParameters: [
      {
        name: "from",
        in: "path",
      },
      {
        name: "to",
        in: "path",
      },
      {
        name: "date",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_currency_exchange_rate_by_date",
  },
  {
    name: "delete_specific_currency_exchange_rate_on_date",
    tags: ["currency_exchange_rates"],
    description:
      "Delete the currency exchange rate from 'from' to 'to' on the specified date.  It's important to know that the reverse exchange rate (from 'to' to 'from') will not be deleted and Firefly III will still be able to infer the correct exchange rate from the reverse one.",
    inputSchema: {
      type: "object",
      properties: {
        from: {
          type: "string",
          example: "EUR",
          description: "The currency code of the 'from' currency.",
        },
        to: {
          type: "string",
          example: "USD",
          description: "The currency code of the 'to' currency.",
        },
        date: {
          type: "string",
          description: "Example: 2025-09-01",
        },
      },
      required: ["from", "to", "date"],
    },
    zodShape: {
      from: z.string().describe("The currency code of the 'from' currency."),
      to: z.string().describe("The currency code of the 'to' currency."),
      date: z.string().describe("Example: 2025-09-01"),
    },
    method: "delete",
    pathTemplate: "/v1/exchange-rates/{from}/{to}/{date}",
    executionParameters: [
      {
        name: "from",
        in: "path",
      },
      {
        name: "to",
        in: "path",
      },
      {
        name: "date",
        in: "path",
      },
    ],
    operationId: "delete_specific_currency_exchange_rate_on_date",
  },
  {
    name: "store_currency_exchange_rates_by_date",
    tags: ["currency_exchange_rates"],
    description:
      "Stores a new set of exchange rates. The date is fixed (in the URL parameter) and the data required can be submitted as a JSON body.",
    inputSchema: {
      type: "object",
      properties: {
        date: {
          type: "string",
          description: "Example: 2025-09-01",
        },
        requestBody: {
          type: "object",
          required: ["from", "rates"],
          properties: {
            from: {
              type: "string",
              example: "EUR",
              description: "The 'from'-currency",
            },
            rates: {
              type: "object",
              description:
                "The actual entries for this data set. They 'key' value is 'to' currency. The value is the exchange rate.",
              additionalProperties: {
                type: "string",
              },
              example: {
                USD: "1.2345",
                GBP: "6.3456",
              },
            },
          },
          description:
            "JSON array with the necessary currency exchange rate information. See the model for the exact specifications.",
        },
      },
      required: ["date", "requestBody"],
    },
    zodShape: {
      date: z.string().describe("Example: 2025-09-01"),
      requestBody: z
        .object({
          from: z.string().describe("The 'from'-currency"),
          rates: z
            .record(z.string())
            .describe(
              "The actual entries for this data set. They 'key' value is 'to' currency. The value is the exchange rate."
            ),
        })
        .describe(
          "JSON array with the necessary currency exchange rate information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/exchange-rates/by-date/{date}",
    executionParameters: [
      {
        name: "date",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "store_currency_exchange_rates_by_date",
  },
  {
    name: "store_currency_exchange_rates_by_pair",
    tags: ["currency_exchange_rates"],
    description:
      "Stores a new set of exchange rates for this pair. The date is variable, and the data required can be submitted as a JSON body.",
    inputSchema: {
      type: "object",
      properties: {
        from: {
          type: "string",
          example: "EUR",
          description: "The currency code of the 'from' currency.",
        },
        to: {
          type: "string",
          example: "USD",
          description: "The currency code of the 'to' currency.",
        },
        requestBody: {
          type: "object",
          description:
            "JSON array with the necessary currency exchange rate information. See the model for the exact specifications.",
          additionalProperties: {
            type: "string",
          },
          example: {
            "2025-08-01": "1.2345",
            "2025-08-02": "6.3456",
          },
        },
      },
      required: ["from", "to", "requestBody"],
    },
    zodShape: {
      from: z.string().describe("The currency code of the 'from' currency."),
      to: z.string().describe("The currency code of the 'to' currency."),
      requestBody: z
        .record(z.string())
        .describe(
          "JSON array with the necessary currency exchange rate information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/exchange-rates/by-currencies/{from}/{to}",
    executionParameters: [
      {
        name: "from",
        in: "path",
      },
      {
        name: "to",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "store_currency_exchange_rates_by_pair",
  },
  {
    name: "list_transaction_by_link_type",
    tags: ["links"],
    description:
      "List all transactions under this link type, both the inward and outward transactions. ",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the link type.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description: "A date formatted YYYY-MM-DD, to limit the results. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description: "A date formatted YYYY-MM-DD, to limit the results. ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the link type."),
      start: z
        .string()
        .describe("A date formatted YYYY-MM-DD, to limit the results.")
        .optional(),
      end: z
        .string()
        .describe("A date formatted YYYY-MM-DD, to limit the results.")
        .optional(),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/link-types/{id}/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction_by_link_type",
  },
  {
    name: "list_link_type",
    tags: ["links"],
    description:
      "List all the link types the system has. These include the default ones as well as any new ones. ",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/link-types",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_link_type",
  },
  {
    name: "store_link_type",
    tags: ["links"],
    description:
      "Creates a new link type. The data required can be submitted as a JSON body or as a list of parameters (in key=value pairs, like a webform).",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["name", "inward", "outward"],
          properties: {
            name: {
              type: "string",
              example: "Paid",
            },
            inward: {
              type: "string",
              example: "is (partially) paid for by",
            },
            outward: {
              type: "string",
              example: "(partially) pays for",
            },
            editable: {
              type: "boolean",
              example: false,
            },
          },
          description:
            "JSON array with the necessary link type information or key=value pairs. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          name: z.string(),
          inward: z.string(),
          outward: z.string(),
          editable: z.boolean().optional(),
        })
        .describe(
          "JSON array with the necessary link type information or key=value pairs. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/link-types",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_link_type",
  },
  {
    name: "get_link_type",
    tags: ["links"],
    description: "Returns a single link type by its ID. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the link type.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the link type.") },
    method: "get",
    pathTemplate: "/v1/link-types/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_link_type",
  },
  {
    name: "update_link_type",
    tags: ["links"],
    description:
      "Used to update a single link type. All fields that are not submitted will be cleared (set to NULL). The model will tell you which fields are mandatory. You cannot update some of the system provided link types, indicated by the editable=false flag when you list it. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the link type.",
        },
        requestBody: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Paid",
            },
            inward: {
              type: "string",
              example: "is (partially) paid for by",
            },
            outward: {
              type: "string",
              example: "(partially) pays for",
            },
          },
          description:
            "JSON array or form-data with updated link type information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the link type."),
      requestBody: z
        .object({
          name: z.string().optional(),
          inward: z.string().optional(),
          outward: z.string().optional(),
        })
        .describe(
          "JSON array or form-data with updated link type information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/link-types/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_link_type",
  },
  {
    name: "delete_link_type",
    tags: ["links"],
    description:
      "Will permanently delete a link type. The links between transactions will be removed. The transactions themselves remain. You cannot delete some of the system provided link types, indicated by the editable=false flag when you list it. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the link type.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the link type.") },
    method: "delete",
    pathTemplate: "/v1/link-types/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_link_type",
  },
  {
    name: "list_transaction_link",
    tags: ["links"],
    description: "List all the transaction links. ",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/transaction-links",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_transaction_link",
  },
  {
    name: "store_transaction_link",
    tags: ["links"],
    description:
      "Store a new link between two transactions. For this end point you need the journal_id from a transaction.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["link_type_id", "inward_id", "outward_id"],
          properties: {
            link_type_id: {
              type: "string",
              example: "5",
              description:
                "The link type ID to use. You can also use the link_type_name field.",
            },
            link_type_name: {
              type: "string",
              example: "Is paid by",
              description:
                "The link type name to use. You can also use the link_type_id field.",
            },
            inward_id: {
              type: "string",
              example: "131",
              description:
                "The inward transaction transaction_journal_id for the link. This becomes the 'is paid by' transaction of the set.",
            },
            outward_id: {
              type: "string",
              example: "131",
              description:
                "The outward transaction transaction_journal_id for the link. This becomes the 'pays for' transaction of the set.",
            },
            notes: {
              type: "string",
              example: "Some example notes",
              nullable: true,
              description: "Optional. Some notes.",
            },
          },
          description:
            "JSON array with the necessary link type information or key=value pairs. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          link_type_id: z
            .string()
            .describe(
              "The link type ID to use. You can also use the link_type_name field."
            ),
          link_type_name: z
            .string()
            .describe(
              "The link type name to use. You can also use the link_type_id field."
            )
            .optional(),
          inward_id: z
            .string()
            .describe(
              "The inward transaction transaction_journal_id for the link. This becomes the 'is paid by' transaction of the set."
            ),
          outward_id: z
            .string()
            .describe(
              "The outward transaction transaction_journal_id for the link. This becomes the 'pays for' transaction of the set."
            ),
          notes: z
            .string()
            .nullable()
            .describe("Optional. Some notes.")
            .optional(),
        })
        .describe(
          "JSON array with the necessary link type information or key=value pairs. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/transaction-links",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_transaction_link",
  },
  {
    name: "get_transaction_link",
    tags: ["links"],
    description: "Returns a single link by its ID. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction link.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the transaction link.") },
    method: "get",
    pathTemplate: "/v1/transaction-links/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_transaction_link",
  },
  {
    name: "update_transaction_link",
    tags: ["links"],
    description: "Used to update a single existing link. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction link.",
        },
        requestBody: {
          type: "object",
          properties: {
            link_type_id: {
              type: "string",
              example: "5",
              description:
                "The link type ID to use. Use this field OR use the link_type_name field.",
            },
            link_type_name: {
              type: "string",
              example: "Is paid by",
              description:
                "The link type name to use. Use this field OR use the link_type_id field.",
            },
            inward_id: {
              type: "string",
              example: "131",
              description:
                "The inward transaction transaction_journal_id for the link. This becomes the 'is paid by' transaction of the set.",
            },
            outward_id: {
              type: "string",
              example: "131",
              description:
                "The outward transaction transaction_journal_id for the link. This becomes the 'pays for' transaction of the set.",
            },
            notes: {
              type: "string",
              example: "Some example notes",
              nullable: true,
              description:
                "Optional. Some notes. If you submit an empty string the current notes will be removed",
            },
          },
          description:
            "JSON array or form-data with updated link type information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the transaction link."),
      requestBody: z
        .object({
          link_type_id: z
            .string()
            .describe(
              "The link type ID to use. Use this field OR use the link_type_name field."
            )
            .optional(),
          link_type_name: z
            .string()
            .describe(
              "The link type name to use. Use this field OR use the link_type_id field."
            )
            .optional(),
          inward_id: z
            .string()
            .describe(
              "The inward transaction transaction_journal_id for the link. This becomes the 'is paid by' transaction of the set."
            )
            .optional(),
          outward_id: z
            .string()
            .describe(
              "The outward transaction transaction_journal_id for the link. This becomes the 'pays for' transaction of the set."
            )
            .optional(),
          notes: z
            .string()
            .nullable()
            .describe(
              "Optional. Some notes. If you submit an empty string the current notes will be removed"
            )
            .optional(),
        })
        .describe(
          "JSON array or form-data with updated link type information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/transaction-links/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_transaction_link",
  },
  {
    name: "delete_transaction_link",
    tags: ["links"],
    description: "Will permanently delete link. Transactions remain. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction link.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the transaction link.") },
    method: "delete",
    pathTemplate: "/v1/transaction-links/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_transaction_link",
  },
  {
    name: "list_piggy_bank_by_object_group",
    tags: ["object_groups"],
    description:
      "This endpoint returns a list of all the piggy banks connected to the object group. ",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the account.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the account."),
    },
    method: "get",
    pathTemplate: "/v1/object-groups/{id}/piggy-banks",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_piggy_bank_by_object_group",
  },
  {
    name: "list_bill_by_object_group",
    tags: ["object_groups"],
    description: "List all bills with this object group.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the account.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the account."),
    },
    method: "get",
    pathTemplate: "/v1/object-groups/{id}/bills",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_bill_by_object_group",
  },
  {
    name: "list_object_groups",
    tags: ["object_groups"],
    description: "List all object groups.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/object-groups",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_object_groups",
  },
  {
    name: "get_object_group",
    tags: ["object_groups"],
    description: "Get a single object group.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the object group.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the object group.") },
    method: "get",
    pathTemplate: "/v1/object-groups/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_object_group",
  },
  {
    name: "update_object_group",
    tags: ["object_groups"],
    description: "Update existing object group.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the object group",
        },
        requestBody: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              example: "My object group",
            },
            order: {
              type: "integer",
              format: "int32",
              example: 1,
              description: "Order of the object group",
            },
          },
          description:
            "JSON array with updated piggy bank information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the object group"),
      requestBody: z
        .object({
          title: z.string(),
          order: z
            .number()
            .int()
            .describe("Order of the object group")
            .optional(),
        })
        .describe(
          "JSON array with updated piggy bank information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/object-groups/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_object_group",
  },
  {
    name: "delete_object_group",
    tags: ["object_groups"],
    description: "Delete a object group.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the object group.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the object group.") },
    method: "delete",
    pathTemplate: "/v1/object-groups/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_object_group",
  },
  {
    name: "list_event_by_piggy_bank",
    tags: ["piggy_banks"],
    description:
      "List all events linked to a piggy bank (adding and removing money).",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the piggy bank",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the piggy bank"),
    },
    method: "get",
    pathTemplate: "/v1/piggy-banks/{id}/events",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_event_by_piggy_bank",
  },
  {
    name: "list_attachment_by_piggy_bank",
    tags: ["piggy_banks"],
    description: "Lists all attachments.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the piggy bank.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the piggy bank."),
    },
    method: "get",
    pathTemplate: "/v1/piggy-banks/{id}/attachments",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_attachment_by_piggy_bank",
  },
  {
    name: "list_piggy_bank",
    tags: ["piggy_banks"],
    description: "List all piggy banks.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/piggy-banks",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_piggy_bank",
  },
  {
    name: "store_piggy_bank",
    tags: ["piggy_banks"],
    description:
      "Creates a new piggy bank. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["name", "target_amount", "start_date"],
          properties: {
            name: {
              type: "string",
              example: "New digital camera",
            },
            accounts: {
              type: "array",
              items: {
                type: "object",
                required: ["id"],
                properties: {
                  id: {
                    type: "string",
                    example: "3",
                    nullable: true,
                    description: "The ID of the account.",
                  },
                  name: {
                    type: "string",
                    nullable: true,
                    example: "Checking account",
                    description: "The name of the account.",
                  },
                  current_amount: {
                    type: "string",
                    example: "123.45",
                    description: "The amount saved currently.",
                  },
                },
              },
            },
            target_amount: {
              type: "string",
              example: "123.45",
              nullable: true,
            },
            current_amount: {
              type: "string",
              example: "123.45",
            },
            start_date: {
              type: "string",
              example: "2025-09-01",
              description: "The date you started with this piggy bank.",
            },
            target_date: {
              type: "string",
              nullable: true,
              example: "2025-09-30",
              description: "The date you intend to finish saving money.",
            },
            order: {
              type: "integer",
              format: "int32",
              example: 5,
            },
            active: {
              type: "boolean",
              example: true,
            },
            notes: {
              type: "string",
              nullable: true,
              example: "Some notes",
            },
            object_group_id: {
              type: "string",
              example: "5",
              nullable: true,
              description:
                "The group ID of the group this object is part of. NULL if no group.",
            },
            object_group_title: {
              type: "string",
              example: "Example Group",
              nullable: true,
              description: "The name of the group. NULL if no group.",
            },
          },
          description:
            "JSON array or key=value pairs with the necessary piggy bank information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          name: z.string(),
          accounts: z
            .array(
              z.object({
                id: z.string().nullable().describe("The ID of the account."),
                name: z
                  .string()
                  .nullable()
                  .describe("The name of the account.")
                  .optional(),
                current_amount: z
                  .string()
                  .describe("The amount saved currently.")
                  .optional(),
              })
            )
            .optional(),
          target_amount: z.string().nullable(),
          current_amount: z.string().optional(),
          start_date: z
            .string()
            .describe("The date you started with this piggy bank."),
          target_date: z
            .string()
            .nullable()
            .describe("The date you intend to finish saving money.")
            .optional(),
          order: z.number().int().optional(),
          active: z.boolean().optional(),
          notes: z.string().nullable().optional(),
          object_group_id: z
            .string()
            .nullable()
            .describe(
              "The group ID of the group this object is part of. NULL if no group."
            )
            .optional(),
          object_group_title: z
            .string()
            .nullable()
            .describe("The name of the group. NULL if no group.")
            .optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary piggy bank information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/piggy-banks",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_piggy_bank",
  },
  {
    name: "get_piggy_bank",
    tags: ["piggy_banks"],
    description: "Get a single piggy bank.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the piggy bank.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the piggy bank.") },
    method: "get",
    pathTemplate: "/v1/piggy-banks/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_piggy_bank",
  },
  {
    name: "update_piggy_bank",
    tags: ["piggy_banks"],
    description: "Update existing piggy bank.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the piggy bank",
        },
        requestBody: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "New digital camera",
            },
            accounts: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  account_id: {
                    type: "string",
                    example: "3",
                    nullable: true,
                    description: "The ID of the account.",
                  },
                  name: {
                    type: "string",
                    nullable: true,
                    example: "Checking account",
                    description: "The name of the account.",
                  },
                  current_amount: {
                    type: "string",
                    nullable: true,
                    example: "123.45",
                    description: "The amount saved currently.",
                  },
                },
              },
            },
            currency_id: {
              type: "string",
              example: "5",
            },
            currency_code: {
              type: "string",
              example: "USD",
            },
            target_amount: {
              type: "string",
              nullable: true,
              example: "123.45",
            },
            start_date: {
              type: "string",
              example: "2025-09-01",
              description: "The date you started with this piggy bank.",
            },
            target_date: {
              type: "string",
              nullable: true,
              example: "2025-09-30",
              description: "The date you intend to finish saving money.",
            },
            order: {
              type: "integer",
              format: "int32",
              example: 5,
            },
            active: {
              type: "boolean",
              example: true,
            },
            notes: {
              type: "string",
              nullable: true,
              example: "Some notes",
            },
            object_group_id: {
              type: "string",
              example: "5",
              nullable: true,
              description:
                "The group ID of the group this object is part of. NULL if no group.",
            },
            object_group_title: {
              type: "string",
              example: "Example Group",
              nullable: true,
              description: "The name of the group. NULL if no group.",
            },
          },
          description:
            "JSON array with updated piggy bank information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the piggy bank"),
      requestBody: z
        .object({
          name: z.string().optional(),
          accounts: z
            .array(
              z.object({
                account_id: z
                  .string()
                  .nullable()
                  .describe("The ID of the account.")
                  .optional(),
                name: z
                  .string()
                  .nullable()
                  .describe("The name of the account.")
                  .optional(),
                current_amount: z
                  .string()
                  .nullable()
                  .describe("The amount saved currently.")
                  .optional(),
              })
            )
            .optional(),
          currency_id: z.string().optional(),
          currency_code: z.string().optional(),
          target_amount: z.string().nullable().optional(),
          start_date: z
            .string()
            .describe("The date you started with this piggy bank.")
            .optional(),
          target_date: z
            .string()
            .nullable()
            .describe("The date you intend to finish saving money.")
            .optional(),
          order: z.number().int().optional(),
          active: z.boolean().optional(),
          notes: z.string().nullable().optional(),
          object_group_id: z
            .string()
            .nullable()
            .describe(
              "The group ID of the group this object is part of. NULL if no group."
            )
            .optional(),
          object_group_title: z
            .string()
            .nullable()
            .describe("The name of the group. NULL if no group.")
            .optional(),
        })
        .describe(
          "JSON array with updated piggy bank information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/piggy-banks/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_piggy_bank",
  },
  {
    name: "delete_piggy_bank",
    tags: ["piggy_banks"],
    description: "Delete a piggy bank.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the piggy bank.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the piggy bank.") },
    method: "delete",
    pathTemplate: "/v1/piggy-banks/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_piggy_bank",
  },
  {
    name: "list_transaction_by_recurrence",
    tags: ["recurrences"],
    description:
      "List all transactions created by a recurring transaction, optionally limited to the date ranges specified.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the recurring transaction.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD. Both the start and end date must be present. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD. Both the start and end date must be present. ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the recurring transaction."),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. Both the start and end date must be present."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. Both the start and end date must be present."
        )
        .optional(),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/recurrences/{id}/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction_by_recurrence",
  },
  {
    name: "list_recurrence",
    tags: ["recurrences"],
    description: "List all recurring transactions.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/recurrences",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_recurrence",
  },
  {
    name: "store_recurrence",
    tags: ["recurrences"],
    description:
      "Creates a new recurring transaction. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: [
            "type",
            "title",
            "first_date",
            "repeat_until",
            "repetitions",
            "transactions",
          ],
          properties: {
            type: {
              type: "string",
              example: "withdrawal",
              enum: ["withdrawal", "transfer", "deposit"],
            },
            title: {
              type: "string",
              example: "Rent",
            },
            description: {
              type: "string",
              example: "Recurring transaction for the monthly rent",
              description:
                "Not to be confused with the description of the actual transaction(s) being created.",
            },
            first_date: {
              type: "string",
              example: "2025-09-30",
              description:
                "First time the recurring transaction will fire. Must be after today.",
            },
            repeat_until: {
              type: "string",
              example: "2025-09-30",
              description:
                "Date until the recurring transaction can fire. Use either this field or repetitions.",
              nullable: true,
            },
            nr_of_repetitions: {
              type: "integer",
              format: "int32",
              example: 5,
              description:
                "Max number of created transactions. Use either this field or repeat_until.",
              nullable: true,
            },
            apply_rules: {
              type: "boolean",
              example: true,
              description:
                "Whether or not to fire the rules after the creation of a transaction.",
            },
            active: {
              type: "boolean",
              example: true,
              description: "If the recurrence is even active.",
            },
            notes: {
              type: "string",
              example: "Some notes",
              nullable: true,
            },
            repetitions: {
              type: "array",
              items: {
                type: "object",
                required: ["type", "moment"],
                properties: {
                  type: {
                    type: "string",
                    example: "weekly",
                    description:
                      "The type of the repetition. ndom means: the n-th weekday of the month, where you can also specify which day of the week.",
                    enum: ["daily", "weekly", "ndom", "monthly", "yearly"],
                  },
                  moment: {
                    type: "string",
                    example: "3",
                    description:
                      "Information that defined the type of repetition. - For 'daily', this is empty. - For 'weekly', it is day of the week between 1 and 7 (Monday - Sunday). - For 'ndom', it is '1,2' or '4,5' or something else, where the first number is the week in the month, and the second number is the day in the week (between 1 and 7). '2,3' means: the 2nd Wednesday of the month - For 'monthly' it is the day of the month (1 - 31) - For yearly, it is a full date, ie '2025-09-01'. The year you use does not matter. ",
                  },
                  skip: {
                    type: "integer",
                    format: "int32",
                    example: 0,
                    description:
                      "How many occurrences to skip. 0 means skip nothing. 1 means every other.",
                  },
                  weekend: {
                    type: "integer",
                    format: "int32",
                    example: 1,
                    description:
                      "How to respond when the recurring transaction falls in the weekend. Possible values: 1. Do nothing, just create it 2. Create no transaction. 3. Skip to the previous Friday. 4. Skip to the next Monday. ",
                  },
                },
              },
            },
            transactions: {
              type: "array",
              items: {
                type: "object",
                required: [
                  "description",
                  "amount",
                  "source_id",
                  "destination_id",
                ],
                properties: {
                  description: {
                    type: "string",
                    example: "Rent for the current month",
                  },
                  amount: {
                    type: "string",
                    example: "123.45",
                    description: "Amount of the transaction.",
                  },
                  foreign_amount: {
                    type: "string",
                    example: "123.45",
                    description: "Foreign amount of the transaction.",
                    nullable: true,
                  },
                  currency_id: {
                    type: "string",
                    example: "3",
                    description:
                      "Submit either a currency_id or a currency_code.",
                  },
                  currency_code: {
                    type: "string",
                    example: "EUR",
                    description:
                      "Submit either a currency_id or a currency_code.",
                  },
                  foreign_currency_id: {
                    type: "string",
                    example: "17",
                    nullable: true,
                    description:
                      "Submit either a foreign_currency_id or a foreign_currency_code, or neither.",
                  },
                  foreign_currency_code: {
                    type: "string",
                    example: "GBP",
                    nullable: true,
                    description:
                      "Submit either a foreign_currency_id or a foreign_currency_code, or neither.",
                  },
                  budget_id: {
                    type: "string",
                    example: "4",
                    description: "The budget ID for this transaction.",
                  },
                  category_id: {
                    type: "string",
                    description: "Category ID for this transaction.",
                    example: "211",
                  },
                  source_id: {
                    type: "string",
                    example: "913",
                    description: "ID of the source account.",
                  },
                  destination_id: {
                    type: "string",
                    example: "258",
                    description: "ID of the destination account.",
                  },
                  tags: {
                    type: "array",
                    nullable: true,
                    example: null,
                    description: "Array of tags.",
                    items: {
                      type: "string",
                      description: "Tag.",
                      example: "Barbecue preparation",
                    },
                  },
                  piggy_bank_id: {
                    type: "string",
                    example: "123",
                    nullable: true,
                    description: "Optional.",
                  },
                  bill_id: {
                    type: "string",
                    example: "123",
                    nullable: true,
                    description: "Optional.",
                  },
                },
              },
            },
          },
          description:
            "JSON array or key=value pairs with the necessary recurring transaction information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          type: z.enum(["withdrawal", "transfer", "deposit"]),
          title: z.string(),
          description: z
            .string()
            .describe(
              "Not to be confused with the description of the actual transaction(s) being created."
            )
            .optional(),
          first_date: z
            .string()
            .describe(
              "First time the recurring transaction will fire. Must be after today."
            ),
          repeat_until: z
            .string()
            .nullable()
            .describe(
              "Date until the recurring transaction can fire. Use either this field or repetitions."
            ),
          nr_of_repetitions: z
            .number()
            .int()
            .nullable()
            .describe(
              "Max number of created transactions. Use either this field or repeat_until."
            )
            .optional(),
          apply_rules: z
            .boolean()
            .describe(
              "Whether or not to fire the rules after the creation of a transaction."
            )
            .optional(),
          active: z
            .boolean()
            .describe("If the recurrence is even active.")
            .optional(),
          notes: z.string().nullable().optional(),
          repetitions: z.array(
            z.object({
              type: z
                .enum(["daily", "weekly", "ndom", "monthly", "yearly"])
                .describe(
                  "The type of the repetition. ndom means: the n-th weekday of the month, where you can also specify which day of the week."
                ),
              moment: z
                .string()
                .describe(
                  "Information that defined the type of repetition. - For 'daily', this is empty. - For 'weekly', it is day of the week between 1 and 7 (Monday - Sunday). - For 'ndom', it is '1,2' or '4,5' or something else, where the first number is the week in the month, and the second number is the day in the week (between 1 and 7). '2,3' means: the 2nd Wednesday of the month - For 'monthly' it is the day of the month (1 - 31) - For yearly, it is a full date, ie '2025-09-01'. The year you use does not matter."
                ),
              skip: z
                .number()
                .int()
                .describe(
                  "How many occurrences to skip. 0 means skip nothing. 1 means every other."
                )
                .optional(),
              weekend: z
                .number()
                .int()
                .describe(
                  "How to respond when the recurring transaction falls in the weekend. Possible values: 1. Do nothing, just create it 2. Create no transaction. 3. Skip to the previous Friday. 4. Skip to the next Monday."
                )
                .optional(),
            })
          ),
          transactions: z.array(
            z.object({
              description: z.string(),
              amount: z.string().describe("Amount of the transaction."),
              foreign_amount: z
                .string()
                .nullable()
                .describe("Foreign amount of the transaction.")
                .optional(),
              currency_id: z
                .string()
                .describe("Submit either a currency_id or a currency_code.")
                .optional(),
              currency_code: z
                .string()
                .describe("Submit either a currency_id or a currency_code.")
                .optional(),
              foreign_currency_id: z
                .string()
                .nullable()
                .describe(
                  "Submit either a foreign_currency_id or a foreign_currency_code, or neither."
                )
                .optional(),
              foreign_currency_code: z
                .string()
                .nullable()
                .describe(
                  "Submit either a foreign_currency_id or a foreign_currency_code, or neither."
                )
                .optional(),
              budget_id: z
                .string()
                .describe("The budget ID for this transaction.")
                .optional(),
              category_id: z
                .string()
                .describe("Category ID for this transaction.")
                .optional(),
              source_id: z.string().describe("ID of the source account."),
              destination_id: z
                .string()
                .describe("ID of the destination account."),
              tags: z
                .array(z.string().describe("Tag."))
                .nullable()
                .describe("Array of tags.")
                .optional(),
              piggy_bank_id: z
                .string()
                .nullable()
                .describe("Optional.")
                .optional(),
              bill_id: z.string().nullable().describe("Optional.").optional(),
            })
          ),
        })
        .describe(
          "JSON array or key=value pairs with the necessary recurring transaction information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/recurrences",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_recurrence",
  },
  {
    name: "get_recurrence",
    tags: ["recurrences"],
    description: "Get a single recurring transaction.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the recurring transaction.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the recurring transaction."),
    },
    method: "get",
    pathTemplate: "/v1/recurrences/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_recurrence",
  },
  {
    name: "update_recurrence",
    tags: ["recurrences"],
    description: "Update existing recurring transaction.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the recurring transaction.",
        },
        requestBody: {
          type: "object",
          properties: {
            title: {
              type: "string",
              example: "Rent",
            },
            description: {
              type: "string",
              example: "Recurring transaction for the monthly rent",
              description:
                "Not to be confused with the description of the actual transaction(s) being created.",
            },
            first_date: {
              type: "string",
              example: "2025-09-30",
              description: "First time the recurring transaction will fire.",
            },
            repeat_until: {
              type: "string",
              example: "2025-09-30",
              description:
                "Date until when the recurring transaction can fire. After that date, it's basically inactive. Use either this field or repetitions.",
              nullable: true,
            },
            nr_of_repetitions: {
              type: "integer",
              format: "int32",
              example: 5,
              description:
                "Max number of created transactions. Use either this field or repeat_until.",
              nullable: true,
            },
            apply_rules: {
              type: "boolean",
              example: true,
              description:
                "Whether or not to fire the rules after the creation of a transaction.",
            },
            active: {
              type: "boolean",
              example: true,
              description: "If the recurrence is even active.",
            },
            notes: {
              type: "string",
              example: "Some notes",
              nullable: true,
            },
            repetitions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  type: {
                    type: "string",
                    example: "weekly",
                    description:
                      "The type of the repetition. ndom means: the n-th weekday of the month, where you can also specify which day of the week.",
                    enum: ["daily", "weekly", "ndom", "monthly", "yearly"],
                  },
                  moment: {
                    type: "string",
                    example: "3",
                    description:
                      "Information that defined the type of repetition. - For 'daily', this is empty. - For 'weekly', it is day of the week between 1 and 7 (Monday - Sunday). - For 'ndom', it is '1,2' or '4,5' or something else, where the first number is the week in the month, and the second number is the day in the week (between 1 and 7). '2,3' means: the 2nd Wednesday of the month - For 'monthly' it is the day of the month (1 - 31) - For yearly, it is a full date, ie '2025-09-01'. The year you use does not matter. ",
                  },
                  skip: {
                    type: "integer",
                    format: "int32",
                    example: 0,
                    description:
                      "How many occurrences to skip. 0 means skip nothing. 1 means every other.",
                  },
                  weekend: {
                    type: "integer",
                    format: "int32",
                    example: 1,
                    description:
                      "How to respond when the recurring transaction falls in the weekend. Possible values: 1. Do nothing, just create it 2. Create no transaction. 3. Skip to the previous Friday. 4. Skip to the next Monday. ",
                  },
                },
              },
            },
            transactions: {
              type: "array",
              items: {
                type: "object",
                required: ["id"],
                properties: {
                  id: {
                    type: "string",
                    example:
                      "ID of the recurring transaction. Not to be confused with the ID of the recurrence itself. Is marked as REQUIRED but can be skipped when there is only ONE transaction.",
                  },
                  description: {
                    type: "string",
                    example: "Rent for the current month",
                  },
                  amount: {
                    type: "string",
                    example: "123.45",
                    description: "Amount of the transaction.",
                  },
                  foreign_amount: {
                    type: "string",
                    example: "123.45",
                    description: "Foreign amount of the transaction.",
                    nullable: true,
                  },
                  currency_id: {
                    type: "string",
                    example: "3",
                    description:
                      "Submit either a currency_id or a currency_code.",
                  },
                  currency_code: {
                    type: "string",
                    example: "EUR",
                    description:
                      "Submit either a currency_id or a currency_code.",
                  },
                  foreign_currency_id: {
                    type: "string",
                    example: "17",
                    nullable: true,
                    description:
                      "Submit either a foreign_currency_id or a foreign_currency_code, or neither.",
                  },
                  budget_id: {
                    type: "string",
                    example: "4",
                    description: "The budget ID for this transaction.",
                  },
                  category_id: {
                    type: "string",
                    description: "Category ID for this transaction.",
                    example: "211",
                  },
                  source_id: {
                    type: "string",
                    example: "913",
                    description:
                      "ID of the source account. Submit either this or source_name.",
                  },
                  destination_id: {
                    type: "string",
                    example: "258",
                    description:
                      "ID of the destination account. Submit either this or destination_name.",
                  },
                  tags: {
                    type: "array",
                    nullable: true,
                    example: null,
                    description: "Array of tags.",
                    items: {
                      type: "string",
                      description: "Tag.",
                      example: "Barbecue preparation",
                    },
                  },
                  piggy_bank_id: {
                    type: "string",
                    example: "123",
                    nullable: true,
                  },
                  bill_id: {
                    type: "string",
                    example: "123",
                    nullable: true,
                    description: "Optional.",
                  },
                },
              },
            },
          },
          description:
            "JSON array with updated recurring transaction information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the recurring transaction."),
      requestBody: z
        .object({
          title: z.string().optional(),
          description: z
            .string()
            .describe(
              "Not to be confused with the description of the actual transaction(s) being created."
            )
            .optional(),
          first_date: z
            .string()
            .describe("First time the recurring transaction will fire.")
            .optional(),
          repeat_until: z
            .string()
            .nullable()
            .describe(
              "Date until when the recurring transaction can fire. After that date, it's basically inactive. Use either this field or repetitions."
            )
            .optional(),
          nr_of_repetitions: z
            .number()
            .int()
            .nullable()
            .describe(
              "Max number of created transactions. Use either this field or repeat_until."
            )
            .optional(),
          apply_rules: z
            .boolean()
            .describe(
              "Whether or not to fire the rules after the creation of a transaction."
            )
            .optional(),
          active: z
            .boolean()
            .describe("If the recurrence is even active.")
            .optional(),
          notes: z.string().nullable().optional(),
          repetitions: z
            .array(
              z.object({
                type: z
                  .enum(["daily", "weekly", "ndom", "monthly", "yearly"])
                  .describe(
                    "The type of the repetition. ndom means: the n-th weekday of the month, where you can also specify which day of the week."
                  )
                  .optional(),
                moment: z
                  .string()
                  .describe(
                    "Information that defined the type of repetition. - For 'daily', this is empty. - For 'weekly', it is day of the week between 1 and 7 (Monday - Sunday). - For 'ndom', it is '1,2' or '4,5' or something else, where the first number is the week in the month, and the second number is the day in the week (between 1 and 7). '2,3' means: the 2nd Wednesday of the month - For 'monthly' it is the day of the month (1 - 31) - For yearly, it is a full date, ie '2025-09-01'. The year you use does not matter."
                  )
                  .optional(),
                skip: z
                  .number()
                  .int()
                  .describe(
                    "How many occurrences to skip. 0 means skip nothing. 1 means every other."
                  )
                  .optional(),
                weekend: z
                  .number()
                  .int()
                  .describe(
                    "How to respond when the recurring transaction falls in the weekend. Possible values: 1. Do nothing, just create it 2. Create no transaction. 3. Skip to the previous Friday. 4. Skip to the next Monday."
                  )
                  .optional(),
              })
            )
            .optional(),
          transactions: z
            .array(
              z.object({
                id: z.string(),
                description: z.string().optional(),
                amount: z
                  .string()
                  .describe("Amount of the transaction.")
                  .optional(),
                foreign_amount: z
                  .string()
                  .nullable()
                  .describe("Foreign amount of the transaction.")
                  .optional(),
                currency_id: z
                  .string()
                  .describe("Submit either a currency_id or a currency_code.")
                  .optional(),
                currency_code: z
                  .string()
                  .describe("Submit either a currency_id or a currency_code.")
                  .optional(),
                foreign_currency_id: z
                  .string()
                  .nullable()
                  .describe(
                    "Submit either a foreign_currency_id or a foreign_currency_code, or neither."
                  )
                  .optional(),
                budget_id: z
                  .string()
                  .describe("The budget ID for this transaction.")
                  .optional(),
                category_id: z
                  .string()
                  .describe("Category ID for this transaction.")
                  .optional(),
                source_id: z
                  .string()
                  .describe(
                    "ID of the source account. Submit either this or source_name."
                  )
                  .optional(),
                destination_id: z
                  .string()
                  .describe(
                    "ID of the destination account. Submit either this or destination_name."
                  )
                  .optional(),
                tags: z
                  .array(z.string().describe("Tag."))
                  .nullable()
                  .describe("Array of tags.")
                  .optional(),
                piggy_bank_id: z.string().nullable().optional(),
                bill_id: z.string().nullable().describe("Optional.").optional(),
              })
            )
            .optional(),
        })
        .describe(
          "JSON array with updated recurring transaction information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/recurrences/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_recurrence",
  },
  {
    name: "delete_recurrence",
    tags: ["recurrences"],
    description:
      "Delete a recurring transaction. Transactions created by the recurring transaction will not be deleted.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the recurring transaction.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the recurring transaction."),
    },
    method: "delete",
    pathTemplate: "/v1/recurrences/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_recurrence",
  },
  {
    name: "trigger_recurrence_recurrence",
    tags: ["recurrences"],
    description:
      "Trigger the creation of a transaction for a specific recurring transaction. All recurrences have a set of future occurrences. For those moments, you can trigger the creation of the transaction. That means the transaction will be created NOW, instead of on the indicated date. The transaction will be dated to _today_. So, if you recurring transaction that occurs every Monday, you can trigger the creation of a transaction for Monday in two weeks, today. On that Monday two weeks from now, no transaction will be created. Instead, the transaction is created right now, and dated _today_. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the recurring transaction.",
        },
        date: {
          type: "string",
          description:
            "A date formatted YYYY-MM-DD. This is the date for which you want the recurrence to fire. You can take the date from the list of occurrences in the recurring transaction. ",
        },
      },
      required: ["id", "date"],
    },
    zodShape: {
      id: z.string().describe("The ID of the recurring transaction."),
      date: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. This is the date for which you want the recurrence to fire. You can take the date from the list of occurrences in the recurring transaction."
        ),
    },
    method: "post",
    pathTemplate: "/v1/recurrences/{id}/trigger",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "date",
        in: "query",
      },
    ],
    operationId: "trigger_recurrence_recurrence",
  },
  {
    name: "list_rule_by_group",
    tags: ["rule_groups"],
    description: "List rules in this rule group.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the rule group.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the rule group."),
    },
    method: "get",
    pathTemplate: "/v1/rule-groups/{id}/rules",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_rule_by_group",
  },
  {
    name: "test_rule_group",
    tags: ["rule_groups"],
    description:
      "Test which transactions would be hit by the rule group. No changes will be made. Limit the result if you want to.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the rule group.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present. ",
        },
        search_limit: {
          type: "integer",
          description:
            "Maximum number of transactions Firefly III will try. Don't set this too high, or it will take Firefly III very long to run the test. I suggest a max of 200. ",
        },
        triggered_limit: {
          type: "integer",
          description:
            "Maximum number of transactions the rule group can actually trigger on, before Firefly III stops. I would suggest setting this to 10 or 15. Don't go above the user's page size, because browsing to page 2 or 3 of a test result would fire the test again, making any navigation efforts very slow. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "Limit the testing of the rule group to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped. ",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the rule group."),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present."
        )
        .optional(),
      search_limit: z
        .number()
        .int()
        .describe(
          "Maximum number of transactions Firefly III will try. Don't set this too high, or it will take Firefly III very long to run the test. I suggest a max of 200."
        )
        .optional(),
      triggered_limit: z
        .number()
        .int()
        .describe(
          "Maximum number of transactions the rule group can actually trigger on, before Firefly III stops. I would suggest setting this to 10 or 15. Don't go above the user's page size, because browsing to page 2 or 3 of a test result would fire the test again, making any navigation efforts very slow."
        )
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "Limit the testing of the rule group to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/rule-groups/{id}/test",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "search_limit",
        in: "query",
      },
      {
        name: "triggered_limit",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "test_rule_group",
  },
  {
    name: "fire_rule_group",
    tags: ["rule_groups"],
    description:
      "Fire the rule group on your transactions. Changes will be made by the rules in the rule group. Limit the result if you want to.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the rule group.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. Both the start date and the end date must be present. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. Both the start date and the end date must be present. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "Limit the triggering of the rule group to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped. ",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the rule group."),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. Both the start date and the end date must be present."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. Both the start date and the end date must be present."
        )
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "Limit the triggering of the rule group to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped."
        )
        .optional(),
    },
    method: "post",
    pathTemplate: "/v1/rule-groups/{id}/trigger",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "fire_rule_group",
  },
  {
    name: "list_rule_group",
    tags: ["rule_groups"],
    description: "List all rule groups.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/rule-groups",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_rule_group",
  },
  {
    name: "store_rule_group",
    tags: ["rule_groups"],
    description:
      "Creates a new rule group. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              example: "Default rule group",
            },
            description: {
              type: "string",
              example: "Description of this rule group",
              nullable: true,
            },
            order: {
              type: "integer",
              format: "int32",
              example: 4,
            },
            active: {
              type: "boolean",
              example: true,
            },
          },
          description:
            "JSON array or key=value pairs with the necessary rule group information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          title: z.string(),
          description: z.string().nullable().optional(),
          order: z.number().int().optional(),
          active: z.boolean().optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary rule group information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/rule-groups",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_rule_group",
  },
  {
    name: "get_rule_group",
    tags: ["rule_groups"],
    description:
      "Get a single rule group. This does not include the rules. For that, see below.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the rule group.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the rule group.") },
    method: "get",
    pathTemplate: "/v1/rule-groups/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_rule_group",
  },
  {
    name: "update_rule_group",
    tags: ["rule_groups"],
    description: "Update existing rule group.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the rule group.",
        },
        requestBody: {
          type: "object",
          properties: {
            title: {
              type: "string",
              example: "Default rule group",
            },
            description: {
              type: "string",
              example: "Description of this rule group",
              nullable: true,
            },
            order: {
              type: "integer",
              format: "int32",
              example: 4,
            },
            active: {
              type: "boolean",
              example: true,
            },
          },
          description:
            "JSON array with updated rule group information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the rule group."),
      requestBody: z
        .object({
          title: z.string().optional(),
          description: z.string().nullable().optional(),
          order: z.number().int().optional(),
          active: z.boolean().optional(),
        })
        .describe(
          "JSON array with updated rule group information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/rule-groups/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_rule_group",
  },
  {
    name: "delete_rule_group",
    tags: ["rule_groups"],
    description: "Delete a rule group.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the rule group.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the rule group.") },
    method: "delete",
    pathTemplate: "/v1/rule-groups/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_rule_group",
  },
  {
    name: "test_rule",
    tags: ["rules"],
    description:
      "Test which transactions would be hit by the rule. No changes will be made. Limit the result if you want to.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the rule.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "Limit the testing of the rule to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped. ",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the rule."),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present."
        )
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "Limit the testing of the rule to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/rules/{id}/test",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "test_rule",
  },
  {
    name: "fire_rule",
    tags: ["rules"],
    description:
      "Fire the rule group on your transactions. Changes will be made by the rules in the group. Limit the result if you want to.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the rule.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. If the start date is not present, it will be set to one year ago. If you use this field, both the start date and the end date must be present. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. If the end date is not present, it will be set to today. If you use this field, both the start date and the end date must be present. ",
        },
        "accounts[]": {
          type: "array",
          items: {
            type: "integer",
            format: "int64",
          },
          example: [1, 2, 3],
          description:
            "Limit the triggering of the rule to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped. ",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the rule."),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. If the start date is not present, it will be set to one year ago. If you use this field, both the start date and the end date must be present."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. If the end date is not present, it will be set to today. If you use this field, both the start date and the end date must be present."
        )
        .optional(),
      "accounts[]": z
        .array(z.number().int())
        .describe(
          "Limit the triggering of the rule to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped."
        )
        .optional(),
    },
    method: "post",
    pathTemplate: "/v1/rules/{id}/trigger",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "accounts[]",
        in: "query",
      },
    ],
    operationId: "fire_rule",
  },
  {
    name: "list_rule",
    tags: ["rules"],
    description: "List all rules.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/rules",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_rule",
  },
  {
    name: "store_rule",
    tags: ["rules"],
    description:
      "Creates a new rule. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: [
            "title",
            "rule_group_id",
            "trigger",
            "triggers",
            "actions",
          ],
          properties: {
            title: {
              type: "string",
              example: "First rule title.",
            },
            description: {
              type: "string",
              example: "First rule description",
            },
            rule_group_id: {
              type: "string",
              example: "81",
              description:
                "ID of the rule group under which the rule must be stored. Either this field or rule_group_title is mandatory.",
            },
            rule_group_title: {
              type: "string",
              example: "New rule group",
              description:
                "Title of the rule group under which the rule must be stored. Either this field or rule_group_id is mandatory.",
            },
            order: {
              type: "integer",
              format: "int32",
              example: 5,
            },
            trigger: {
              type: "string",
              example: "store-journal",
              description:
                "Which action is necessary for the rule to fire? Use either store-journal or update-journal.",
              enum: ["store-journal", "update-journal"],
            },
            active: {
              type: "boolean",
              example: true,
              default: true,
              description:
                "Whether or not the rule is even active. Default is true.",
            },
            strict: {
              type: "boolean",
              example: true,
              default: true,
              description:
                "If the rule is set to be strict, ALL triggers must hit in order for the rule to fire. Otherwise, just one is enough. Default value is true.",
            },
            stop_processing: {
              type: "boolean",
              example: false,
              description:
                "If this value is true and the rule is triggered, other rules  after this one in the group will be skipped. Default value is false.",
            },
            triggers: {
              type: "array",
              items: {
                type: "object",
                required: ["type", "value"],
                properties: {
                  type: {
                    type: "string",
                    example: "user_action",
                    description:
                      "The type of thing this trigger responds to. A limited set is possible",
                    enum: [
                      "from_account_starts",
                      "from_account_ends",
                      "from_account_is",
                      "from_account_contains",
                      "to_account_starts",
                      "to_account_ends",
                      "to_account_is",
                      "to_account_contains",
                      "amount_less",
                      "amount_exactly",
                      "amount_more",
                      "description_starts",
                      "description_ends",
                      "description_contains",
                      "description_is",
                      "transaction_type",
                      "category_is",
                      "budget_is",
                      "tag_is",
                      "currency_is",
                      "has_attachments",
                      "has_no_category",
                      "has_any_category",
                      "has_no_budget",
                      "has_any_budget",
                      "has_no_tag",
                      "has_any_tag",
                      "notes_contains",
                      "notes_start",
                      "notes_end",
                      "notes_are",
                      "no_notes",
                      "any_notes",
                      "source_account_is",
                      "destination_account_is",
                      "source_account_starts",
                    ],
                  },
                  value: {
                    type: "string",
                    example: "tag1",
                    description:
                      "The accompanying value the trigger responds to. This value is often mandatory, but this depends on the trigger.",
                  },
                  order: {
                    type: "integer",
                    format: "int32",
                    example: 5,
                    description: "Order of the trigger",
                  },
                  active: {
                    type: "boolean",
                    example: true,
                    default: true,
                    description: "If the trigger is active. Defaults to true.",
                  },
                  prohibited: {
                    type: "boolean",
                    example: false,
                    default: false,
                    description:
                      "If 'prohibited' is true, this rule trigger will be negated. 'Description is' will become 'Description is NOT' etc.",
                  },
                  stop_processing: {
                    type: "boolean",
                    example: false,
                    default: false,
                    description:
                      "When true, other triggers will not be checked if this trigger was triggered. Defaults to false.",
                  },
                },
              },
            },
            actions: {
              type: "array",
              items: {
                type: "object",
                required: ["type", "value"],
                properties: {
                  type: {
                    type: "string",
                    example: "set_category",
                    description:
                      "The type of thing this action will do. A limited set is possible.",
                    enum: [
                      "user_action",
                      "set_category",
                      "clear_category",
                      "set_budget",
                      "clear_budget",
                      "add_tag",
                      "remove_tag",
                      "remove_all_tags",
                      "set_description",
                      "append_description",
                      "prepend_description",
                      "set_source_account",
                      "set_destination_account",
                      "set_notes",
                      "append_notes",
                      "prepend_notes",
                      "clear_notes",
                      "link_to_bill",
                      "convert_withdrawal",
                      "convert_deposit",
                      "convert_transfer",
                      "delete_transaction",
                    ],
                  },
                  value: {
                    type: "string",
                    example: "Daily groceries",
                    nullable: true,
                    description:
                      "The accompanying value the action will set, change or update. Can be empty, but for some types this value is mandatory.",
                  },
                  order: {
                    type: "integer",
                    format: "int32",
                    example: 5,
                    description: "Order of the action",
                  },
                  active: {
                    type: "boolean",
                    example: true,
                    default: true,
                    description: "If the action is active. Defaults to true.",
                  },
                  stop_processing: {
                    type: "boolean",
                    example: false,
                    default: false,
                    description:
                      "When true, other actions will not be fired after this action has fired. Defaults to false.",
                  },
                },
              },
            },
          },
          description:
            "JSON array or key=value pairs with the necessary rule information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          title: z.string(),
          description: z.string().optional(),
          rule_group_id: z
            .string()
            .describe(
              "ID of the rule group under which the rule must be stored. Either this field or rule_group_title is mandatory."
            ),
          rule_group_title: z
            .string()
            .describe(
              "Title of the rule group under which the rule must be stored. Either this field or rule_group_id is mandatory."
            )
            .optional(),
          order: z.number().int().optional(),
          trigger: z
            .enum(["store-journal", "update-journal"])
            .describe(
              "Which action is necessary for the rule to fire? Use either store-journal or update-journal."
            ),
          active: z
            .boolean()
            .describe(
              "Whether or not the rule is even active. Default is true."
            )
            .default(true),
          strict: z
            .boolean()
            .describe(
              "If the rule is set to be strict, ALL triggers must hit in order for the rule to fire. Otherwise, just one is enough. Default value is true."
            )
            .default(true),
          stop_processing: z
            .boolean()
            .describe(
              "If this value is true and the rule is triggered, other rules  after this one in the group will be skipped. Default value is false."
            )
            .optional(),
          triggers: z.array(
            z.object({
              type: z
                .enum([
                  "from_account_starts",
                  "from_account_ends",
                  "from_account_is",
                  "from_account_contains",
                  "to_account_starts",
                  "to_account_ends",
                  "to_account_is",
                  "to_account_contains",
                  "amount_less",
                  "amount_exactly",
                  "amount_more",
                  "description_starts",
                  "description_ends",
                  "description_contains",
                  "description_is",
                  "transaction_type",
                  "category_is",
                  "budget_is",
                  "tag_is",
                  "currency_is",
                  "has_attachments",
                  "has_no_category",
                  "has_any_category",
                  "has_no_budget",
                  "has_any_budget",
                  "has_no_tag",
                  "has_any_tag",
                  "notes_contains",
                  "notes_start",
                  "notes_end",
                  "notes_are",
                  "no_notes",
                  "any_notes",
                  "source_account_is",
                  "destination_account_is",
                  "source_account_starts",
                ])
                .describe(
                  "The type of thing this trigger responds to. A limited set is possible"
                ),
              value: z
                .string()
                .describe(
                  "The accompanying value the trigger responds to. This value is often mandatory, but this depends on the trigger."
                ),
              order: z
                .number()
                .int()
                .describe("Order of the trigger")
                .optional(),
              active: z
                .boolean()
                .describe("If the trigger is active. Defaults to true.")
                .default(true),
              prohibited: z
                .boolean()
                .describe(
                  "If 'prohibited' is true, this rule trigger will be negated. 'Description is' will become 'Description is NOT' etc."
                )
                .default(false),
              stop_processing: z
                .boolean()
                .describe(
                  "When true, other triggers will not be checked if this trigger was triggered. Defaults to false."
                )
                .default(false),
            })
          ),
          actions: z.array(
            z.object({
              type: z
                .enum([
                  "user_action",
                  "set_category",
                  "clear_category",
                  "set_budget",
                  "clear_budget",
                  "add_tag",
                  "remove_tag",
                  "remove_all_tags",
                  "set_description",
                  "append_description",
                  "prepend_description",
                  "set_source_account",
                  "set_destination_account",
                  "set_notes",
                  "append_notes",
                  "prepend_notes",
                  "clear_notes",
                  "link_to_bill",
                  "convert_withdrawal",
                  "convert_deposit",
                  "convert_transfer",
                  "delete_transaction",
                ])
                .describe(
                  "The type of thing this action will do. A limited set is possible."
                ),
              value: z
                .string()
                .nullable()
                .describe(
                  "The accompanying value the action will set, change or update. Can be empty, but for some types this value is mandatory."
                ),
              order: z
                .number()
                .int()
                .describe("Order of the action")
                .optional(),
              active: z
                .boolean()
                .describe("If the action is active. Defaults to true.")
                .default(true),
              stop_processing: z
                .boolean()
                .describe(
                  "When true, other actions will not be fired after this action has fired. Defaults to false."
                )
                .default(false),
            })
          ),
        })
        .describe(
          "JSON array or key=value pairs with the necessary rule information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/rules",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_rule",
  },
  {
    name: "get_rule",
    tags: ["rules"],
    description: "Get a single rule.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the object.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the object.") },
    method: "get",
    pathTemplate: "/v1/rules/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_rule",
  },
  {
    name: "update_rule",
    tags: ["rules"],
    description: "Update existing rule.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the object.",
        },
        requestBody: {
          type: "object",
          properties: {
            title: {
              type: "string",
              example: "First rule title.",
            },
            description: {
              type: "string",
              example: "First rule description",
            },
            rule_group_id: {
              type: "string",
              example: "81",
              description:
                "ID of the rule group under which the rule must be stored. Either this field or rule_group_title is mandatory.",
            },
            order: {
              type: "integer",
              format: "int32",
              example: 5,
            },
            trigger: {
              type: "string",
              example: "store-journal",
              description:
                "Which action is necessary for the rule to fire? Use either store-journal or update-journal.",
              enum: ["store-journal", "update-journal"],
            },
            active: {
              type: "boolean",
              example: true,
              default: true,
              description:
                "Whether or not the rule is even active. Default is true.",
            },
            strict: {
              type: "boolean",
              example: true,
              description:
                "If the rule is set to be strict, ALL triggers must hit in order for the rule to fire. Otherwise, just one is enough. Default value is true.",
            },
            stop_processing: {
              type: "boolean",
              example: false,
              default: false,
              description:
                "If this value is true and the rule is triggered, other rules  after this one in the group will be skipped. Default value is false.",
            },
            triggers: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  type: {
                    type: "string",
                    example: "user_action",
                    description:
                      "The type of thing this trigger responds to. A limited set is possible",
                    enum: [
                      "from_account_starts",
                      "from_account_ends",
                      "from_account_is",
                      "from_account_contains",
                      "to_account_starts",
                      "to_account_ends",
                      "to_account_is",
                      "to_account_contains",
                      "amount_less",
                      "amount_exactly",
                      "amount_more",
                      "description_starts",
                      "description_ends",
                      "description_contains",
                      "description_is",
                      "transaction_type",
                      "category_is",
                      "budget_is",
                      "tag_is",
                      "currency_is",
                      "has_attachments",
                      "has_no_category",
                      "has_any_category",
                      "has_no_budget",
                      "has_any_budget",
                      "has_no_tag",
                      "has_any_tag",
                      "notes_contains",
                      "notes_start",
                      "notes_end",
                      "notes_are",
                      "no_notes",
                      "any_notes",
                      "source_account_is",
                      "destination_account_is",
                      "source_account_starts",
                    ],
                  },
                  value: {
                    type: "string",
                    example: "tag1",
                    description:
                      "The accompanying value the trigger responds to. This value is often mandatory, but this depends on the trigger. If the rule trigger is something like 'has any tag', submit the string 'true'.",
                  },
                  order: {
                    type: "integer",
                    format: "int32",
                    example: 5,
                    description: "Order of the trigger",
                  },
                  active: {
                    type: "boolean",
                    example: true,
                    description: "If the trigger is active.",
                  },
                  stop_processing: {
                    type: "boolean",
                    example: false,
                    description:
                      "When true, other triggers will not be checked if this trigger was triggered.",
                  },
                },
              },
            },
            actions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  type: {
                    type: "string",
                    example: "set_category",
                    description:
                      "The type of thing this action will do. A limited set is possible.",
                    enum: [
                      "user_action",
                      "set_category",
                      "clear_category",
                      "set_budget",
                      "clear_budget",
                      "add_tag",
                      "remove_tag",
                      "remove_all_tags",
                      "set_description",
                      "append_description",
                      "prepend_description",
                      "set_source_account",
                      "set_destination_account",
                      "set_notes",
                      "append_notes",
                      "prepend_notes",
                      "clear_notes",
                      "link_to_bill",
                      "convert_withdrawal",
                      "convert_deposit",
                      "convert_transfer",
                      "delete_transaction",
                    ],
                  },
                  value: {
                    type: "string",
                    example: "Daily groceries",
                    nullable: true,
                    description:
                      "The accompanying value the action will set, change or update. Can be empty, but for some types this value is mandatory.",
                  },
                  order: {
                    type: "integer",
                    format: "int32",
                    example: 5,
                    description: "Order of the action",
                  },
                  active: {
                    type: "boolean",
                    example: true,
                    description: "If the action is active.",
                  },
                  stop_processing: {
                    type: "boolean",
                    example: false,
                    description:
                      "When true, other actions will not be fired after this action has fired.",
                  },
                },
              },
            },
          },
          description:
            "JSON array with updated rule information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the object."),
      requestBody: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          rule_group_id: z
            .string()
            .describe(
              "ID of the rule group under which the rule must be stored. Either this field or rule_group_title is mandatory."
            )
            .optional(),
          order: z.number().int().optional(),
          trigger: z
            .enum(["store-journal", "update-journal"])
            .describe(
              "Which action is necessary for the rule to fire? Use either store-journal or update-journal."
            )
            .optional(),
          active: z
            .boolean()
            .describe(
              "Whether or not the rule is even active. Default is true."
            )
            .default(true),
          strict: z
            .boolean()
            .describe(
              "If the rule is set to be strict, ALL triggers must hit in order for the rule to fire. Otherwise, just one is enough. Default value is true."
            )
            .optional(),
          stop_processing: z
            .boolean()
            .describe(
              "If this value is true and the rule is triggered, other rules  after this one in the group will be skipped. Default value is false."
            )
            .default(false),
          triggers: z
            .array(
              z.object({
                type: z
                  .enum([
                    "from_account_starts",
                    "from_account_ends",
                    "from_account_is",
                    "from_account_contains",
                    "to_account_starts",
                    "to_account_ends",
                    "to_account_is",
                    "to_account_contains",
                    "amount_less",
                    "amount_exactly",
                    "amount_more",
                    "description_starts",
                    "description_ends",
                    "description_contains",
                    "description_is",
                    "transaction_type",
                    "category_is",
                    "budget_is",
                    "tag_is",
                    "currency_is",
                    "has_attachments",
                    "has_no_category",
                    "has_any_category",
                    "has_no_budget",
                    "has_any_budget",
                    "has_no_tag",
                    "has_any_tag",
                    "notes_contains",
                    "notes_start",
                    "notes_end",
                    "notes_are",
                    "no_notes",
                    "any_notes",
                    "source_account_is",
                    "destination_account_is",
                    "source_account_starts",
                  ])
                  .describe(
                    "The type of thing this trigger responds to. A limited set is possible"
                  )
                  .optional(),
                value: z
                  .string()
                  .describe(
                    "The accompanying value the trigger responds to. This value is often mandatory, but this depends on the trigger. If the rule trigger is something like 'has any tag', submit the string 'true'."
                  )
                  .optional(),
                order: z
                  .number()
                  .int()
                  .describe("Order of the trigger")
                  .optional(),
                active: z
                  .boolean()
                  .describe("If the trigger is active.")
                  .optional(),
                stop_processing: z
                  .boolean()
                  .describe(
                    "When true, other triggers will not be checked if this trigger was triggered."
                  )
                  .optional(),
              })
            )
            .optional(),
          actions: z
            .array(
              z.object({
                type: z
                  .enum([
                    "user_action",
                    "set_category",
                    "clear_category",
                    "set_budget",
                    "clear_budget",
                    "add_tag",
                    "remove_tag",
                    "remove_all_tags",
                    "set_description",
                    "append_description",
                    "prepend_description",
                    "set_source_account",
                    "set_destination_account",
                    "set_notes",
                    "append_notes",
                    "prepend_notes",
                    "clear_notes",
                    "link_to_bill",
                    "convert_withdrawal",
                    "convert_deposit",
                    "convert_transfer",
                    "delete_transaction",
                  ])
                  .describe(
                    "The type of thing this action will do. A limited set is possible."
                  )
                  .optional(),
                value: z
                  .string()
                  .nullable()
                  .describe(
                    "The accompanying value the action will set, change or update. Can be empty, but for some types this value is mandatory."
                  )
                  .optional(),
                order: z
                  .number()
                  .int()
                  .describe("Order of the action")
                  .optional(),
                active: z
                  .boolean()
                  .describe("If the action is active.")
                  .optional(),
                stop_processing: z
                  .boolean()
                  .describe(
                    "When true, other actions will not be fired after this action has fired."
                  )
                  .optional(),
              })
            )
            .optional(),
        })
        .describe(
          "JSON array with updated rule information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/rules/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_rule",
  },
  {
    name: "delete_rule",
    tags: ["rules"],
    description: "Delete an rule.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the rule.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the rule.") },
    method: "delete",
    pathTemplate: "/v1/rules/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_rule",
  },
  {
    name: "list_attachment_by_tag",
    tags: ["tags"],
    description: "Lists all attachments.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        tag: {
          type: "string",
          example: "groceries",
          description: "Either the tag itself or the tag ID.",
        },
      },
      required: ["tag"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      tag: z.string().describe("Either the tag itself or the tag ID."),
    },
    method: "get",
    pathTemplate: "/v1/tags/{tag}/attachments",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "tag",
        in: "path",
      },
    ],
    operationId: "list_attachment_by_tag",
  },
  {
    name: "list_transaction_by_tag",
    tags: ["tags"],
    description: "List all transactions with this tag.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        tag: {
          type: "string",
          example: "groceries",
          description: "Either the tag itself or the tag ID.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD. This is the start date of the selected range (inclusive). ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD. This is the end date of the selected range (inclusive). ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
      required: ["tag"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      tag: z.string().describe("Either the tag itself or the tag ID."),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. This is the start date of the selected range (inclusive)."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. This is the end date of the selected range (inclusive)."
        )
        .optional(),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/tags/{tag}/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "tag",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction_by_tag",
  },
  {
    name: "list_tag",
    tags: ["tags"],
    description: "List all of the user's tags.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/tags",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_tag",
  },
  {
    name: "store_tag",
    tags: ["tags"],
    description:
      "Creates a new tag. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          title: "A single tag (A)",
          type: "object",
          required: ["tag"],
          properties: {
            tag: {
              type: "string",
              example: "expensive",
              description: "The tag",
            },
            date: {
              type: "string",
              example: "2025-09-01",
              description: "The date to which the tag is applicable.",
              nullable: true,
            },
            description: {
              type: "string",
              example: "Tag for expensive stuff",
              nullable: true,
            },
            latitude: {
              type: "number",
              format: "double",
              example: 51.983333,
              nullable: true,
              description:
                "Latitude of the tag's location, if applicable. Can be used to draw a map.",
            },
            longitude: {
              type: "number",
              format: "double",
              example: 5.916667,
              nullable: true,
              description:
                "Latitude of the tag's location, if applicable. Can be used to draw a map.",
            },
            zoom_level: {
              type: "integer",
              format: "int32",
              example: 6,
              nullable: true,
              description:
                "Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels.",
            },
          },
          description:
            "JSON array or key=value pairs with the necessary tag information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          tag: z.string().describe("The tag"),
          date: z
            .string()
            .nullable()
            .describe("The date to which the tag is applicable.")
            .optional(),
          description: z.string().nullable().optional(),
          latitude: z
            .number()
            .nullable()
            .describe(
              "Latitude of the tag's location, if applicable. Can be used to draw a map."
            )
            .optional(),
          longitude: z
            .number()
            .nullable()
            .describe(
              "Latitude of the tag's location, if applicable. Can be used to draw a map."
            )
            .optional(),
          zoom_level: z
            .number()
            .int()
            .nullable()
            .describe(
              "Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels."
            )
            .optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary tag information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/tags",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_tag",
  },
  {
    name: "get_tag",
    tags: ["tags"],
    description: "Get a single tag.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        tag: {
          type: "string",
          example: "groceries",
          description:
            "Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your mileage may vary.",
        },
      },
      required: ["tag"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      tag: z
        .string()
        .describe(
          "Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your mileage may vary."
        ),
    },
    method: "get",
    pathTemplate: "/v1/tags/{tag}",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "tag",
        in: "path",
      },
    ],
    operationId: "get_tag",
  },
  {
    name: "update_tag",
    tags: ["tags"],
    description: "Update existing tag.",
    inputSchema: {
      type: "object",
      properties: {
        tag: {
          type: "string",
          example: "groceries",
          description:
            "Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your mileage may vary.",
        },
        requestBody: {
          title: "A single tag (B)",
          type: "object",
          properties: {
            tag: {
              type: "string",
              example: "expensive",
              description: "The tag",
            },
            date: {
              type: "string",
              example: "2025-09-01",
              description: "The date to which the tag is applicable.",
              nullable: true,
            },
            description: {
              type: "string",
              example: "Tag for expensive stuff",
              nullable: true,
            },
            latitude: {
              type: "number",
              format: "double",
              example: 51.983333,
              nullable: true,
              description:
                "Latitude of the tag's location, if applicable. Can be used to draw a map.",
            },
            longitude: {
              type: "number",
              format: "double",
              example: 5.916667,
              nullable: true,
              description:
                "Latitude of the tag's location, if applicable. Can be used to draw a map.",
            },
            zoom_level: {
              type: "integer",
              format: "int32",
              example: 6,
              nullable: true,
              description:
                "Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels.",
            },
          },
          description:
            "JSON array with updated tag information. See the model for the exact specifications.",
        },
      },
      required: ["tag", "requestBody"],
    },
    zodShape: {
      tag: z
        .string()
        .describe(
          "Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your mileage may vary."
        ),
      requestBody: z
        .object({
          tag: z.string().describe("The tag").optional(),
          date: z
            .string()
            .nullable()
            .describe("The date to which the tag is applicable.")
            .optional(),
          description: z.string().nullable().optional(),
          latitude: z
            .number()
            .nullable()
            .describe(
              "Latitude of the tag's location, if applicable. Can be used to draw a map."
            )
            .optional(),
          longitude: z
            .number()
            .nullable()
            .describe(
              "Latitude of the tag's location, if applicable. Can be used to draw a map."
            )
            .optional(),
          zoom_level: z
            .number()
            .int()
            .nullable()
            .describe(
              "Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels."
            )
            .optional(),
        })
        .describe(
          "JSON array with updated tag information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/tags/{tag}",
    executionParameters: [
      {
        name: "tag",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_tag",
  },
  {
    name: "delete_tag",
    tags: ["tags"],
    description: "Delete an tag.",
    inputSchema: {
      type: "object",
      properties: {
        tag: {
          type: "string",
          example: "groceries",
          description:
            "Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your mileage may vary.",
        },
      },
      required: ["tag"],
    },
    zodShape: {
      tag: z
        .string()
        .describe(
          "Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your mileage may vary."
        ),
    },
    method: "delete",
    pathTemplate: "/v1/tags/{tag}",
    executionParameters: [
      {
        name: "tag",
        in: "path",
      },
    ],
    operationId: "delete_tag",
  },
  {
    name: "list_account_by_currency",
    tags: ["currencies"],
    description: "List all accounts with this currency.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        code: {
          type: "string",
          example: "USD",
          description: "The currency code.",
        },
        date: {
          type: "string",
          description:
            "A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day. ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "asset",
            "cash",
            "expense",
            "revenue",
            "special",
            "hidden",
            "liability",
            "liabilities",
            "Default account",
            "Cash account",
            "Asset account",
            "Expense account",
            "Revenue account",
            "Initial balance account",
            "Beneficiary account",
            "Import account",
            "Reconciliation account",
            "Loan",
            "Debt",
            "Mortgage",
          ],
          description: "The type of accounts you wish to limit the search to.",
        },
      },
      required: ["code"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      code: z.string().describe("The currency code."),
      date: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day."
        )
        .optional(),
      type: z
        .enum([
          "all",
          "asset",
          "cash",
          "expense",
          "revenue",
          "special",
          "hidden",
          "liability",
          "liabilities",
          "Default account",
          "Cash account",
          "Asset account",
          "Expense account",
          "Revenue account",
          "Initial balance account",
          "Beneficiary account",
          "Import account",
          "Reconciliation account",
          "Loan",
          "Debt",
          "Mortgage",
        ])
        .describe("Optional filter on the account type(s) returned")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/currencies/{code}/accounts",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "code",
        in: "path",
      },
      {
        name: "date",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_account_by_currency",
  },
  {
    name: "list_available_budget_by_currency",
    tags: ["currencies"],
    description: "List all available budgets with this currency.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        code: {
          type: "string",
          example: "EUR",
          description: "The currency code.",
        },
      },
      required: ["code"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      code: z.string().describe("The currency code."),
    },
    method: "get",
    pathTemplate: "/v1/currencies/{code}/available-budgets",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "code",
        in: "path",
      },
    ],
    operationId: "list_available_budget_by_currency",
  },
  {
    name: "list_bill_by_currency",
    tags: ["currencies"],
    description: "List all bills with this currency.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        code: {
          type: "string",
          example: "USD",
          description: "The currency code.",
        },
      },
      required: ["code"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      code: z.string().describe("The currency code."),
    },
    method: "get",
    pathTemplate: "/v1/currencies/{code}/bills",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "code",
        in: "path",
      },
    ],
    operationId: "list_bill_by_currency",
  },
  {
    name: "list_budget_limit_by_currency",
    tags: ["currencies"],
    description: "List all budget limits with this currency",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        code: {
          type: "string",
          example: "USD",
          description: "The currency code.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description: "Start date for the budget limit list.",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description: "End date for the budget limit list.",
        },
      },
      required: ["code"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      code: z.string().describe("The currency code."),
      start: z
        .string()
        .describe("Start date for the budget limit list.")
        .optional(),
      end: z
        .string()
        .describe("End date for the budget limit list.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/currencies/{code}/budget-limits",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "code",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
    ],
    operationId: "list_budget_limit_by_currency",
  },
  {
    name: "list_recurrence_by_currency",
    tags: ["currencies"],
    description: "List all recurring transactions with this currency.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        code: {
          type: "string",
          example: "EUR",
          description: "The currency code.",
        },
      },
      required: ["code"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      code: z.string().describe("The currency code."),
    },
    method: "get",
    pathTemplate: "/v1/currencies/{code}/recurrences",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "code",
        in: "path",
      },
    ],
    operationId: "list_recurrence_by_currency",
  },
  {
    name: "list_rule_by_currency",
    tags: ["currencies"],
    description: "List all rules with this currency.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        code: {
          type: "string",
          example: "USD",
          description: "The currency code.",
        },
      },
      required: ["code"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      code: z.string().describe("The currency code."),
    },
    method: "get",
    pathTemplate: "/v1/currencies/{code}/rules",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "code",
        in: "path",
      },
    ],
    operationId: "list_rule_by_currency",
  },
  {
    name: "list_transaction_by_currency",
    tags: ["currencies"],
    description: "List all transactions with this currency.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        code: {
          type: "string",
          example: "USD",
          description: "The currency code.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD, to limit the list of transactions. ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD, to limit the list of transactions. ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
      required: ["code"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      code: z.string().describe("The currency code."),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the list of transactions."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD, to limit the list of transactions."
        )
        .optional(),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/currencies/{code}/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "code",
        in: "path",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction_by_currency",
  },
  {
    name: "list_currency",
    tags: ["currencies"],
    description: "List all currencies.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/currencies",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_currency",
  },
  {
    name: "store_currency",
    tags: ["currencies"],
    description:
      "Creates a new currency. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["code", "name", "symbol"],
          properties: {
            enabled: {
              type: "boolean",
              example: true,
              default: true,
              description: "Defaults to true",
            },
            primary: {
              type: "boolean",
              example: true,
              description:
                "Make this currency the primary currency for the current administration. You can set this value to FALSE, in which case nothing will change to the primary currency. If you set it to TRUE, the current primary currency will no longer be the primary currency.",
            },
            code: {
              type: "string",
              example: "AMS",
            },
            name: {
              type: "string",
              example: "Ankh-Morpork dollar",
            },
            symbol: {
              type: "string",
              example: "AM$",
            },
            decimal_places: {
              type: "integer",
              format: "int32",
              example: 2,
              description: "Supports 0-16 decimals.",
            },
          },
          description:
            "JSON array or key=value pairs with the necessary currency information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          enabled: z.boolean().describe("Defaults to true").default(true),
          primary: z
            .boolean()
            .describe(
              "Make this currency the primary currency for the current administration. You can set this value to FALSE, in which case nothing will change to the primary currency. If you set it to TRUE, the current primary currency will no longer be the primary currency."
            )
            .optional(),
          code: z.string(),
          name: z.string(),
          symbol: z.string(),
          decimal_places: z
            .number()
            .int()
            .describe("Supports 0-16 decimals.")
            .optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary currency information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/currencies",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_currency",
  },
  {
    name: "enable_currency",
    tags: ["currencies"],
    description: "Enable a single currency.",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          example: "USD",
          description: "The currency code.",
        },
      },
      required: ["code"],
    },
    zodShape: { code: z.string().describe("The currency code.") },
    method: "post",
    pathTemplate: "/v1/currencies/{code}/enable",
    executionParameters: [
      {
        name: "code",
        in: "path",
      },
    ],
    operationId: "enable_currency",
  },
  {
    name: "disable_currency",
    tags: ["currencies"],
    description: "Disable a currency.",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          example: "GBP",
          description: "The currency code.",
        },
      },
      required: ["code"],
    },
    zodShape: { code: z.string().describe("The currency code.") },
    method: "post",
    pathTemplate: "/v1/currencies/{code}/disable",
    executionParameters: [
      {
        name: "code",
        in: "path",
      },
    ],
    operationId: "disable_currency",
  },
  {
    name: "primary_currency",
    tags: ["currencies"],
    description:
      "Make this currency the primary currency for the current financial administration. If the currency is not enabled, it will be enabled as well.",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          example: "USD",
          description: "The currency code.",
        },
      },
      required: ["code"],
    },
    zodShape: { code: z.string().describe("The currency code.") },
    method: "post",
    pathTemplate: "/v1/currencies/{code}/primary",
    executionParameters: [
      {
        name: "code",
        in: "path",
      },
    ],
    operationId: "primary_currency",
  },
  {
    name: "get_currency",
    tags: ["currencies"],
    description: "Get a single currency.",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          example: "USD",
          description: "The currency code.",
        },
      },
      required: ["code"],
    },
    zodShape: { code: z.string().describe("The currency code.") },
    method: "get",
    pathTemplate: "/v1/currencies/{code}",
    executionParameters: [
      {
        name: "code",
        in: "path",
      },
    ],
    operationId: "get_currency",
  },
  {
    name: "update_currency",
    tags: ["currencies"],
    description: "Update existing currency.",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          example: "EUR",
          description: "The currency code.",
        },
        requestBody: {
          type: "string",
          description:
            "JSON array with updated currency information. See the model for the exact specifications.",
        },
      },
      required: ["code", "requestBody"],
    },
    zodShape: {
      code: z.string().describe("The currency code."),
      requestBody: z
        .string()
        .describe(
          "JSON array with updated currency information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/currencies/{code}",
    executionParameters: [
      {
        name: "code",
        in: "path",
      },
    ],
    requestBodyContentType: "application/vnd.api+json",
    operationId: "update_currency",
  },
  {
    name: "delete_currency",
    tags: ["currencies"],
    description: "Delete a currency.",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          example: "GBP",
          description: "The currency code.",
        },
      },
      required: ["code"],
    },
    zodShape: { code: z.string().describe("The currency code.") },
    method: "delete",
    pathTemplate: "/v1/currencies/{code}",
    executionParameters: [
      {
        name: "code",
        in: "path",
      },
    ],
    operationId: "delete_currency",
  },
  {
    name: "get_primary_currency",
    tags: ["currencies"],
    description:
      'Get the primary currency of the current administration. This replaces what was called "the user\'s default currency" although they are essentially the same.',
    inputSchema: {
      type: "object",
      properties: {},
    },
    zodShape: {},
    method: "get",
    pathTemplate: "/v1/currencies/primary",
    executionParameters: [],
    operationId: "get_primary_currency",
  },
  {
    name: "list_links_by_journal",
    tags: ["transactions"],
    description:
      "Lists all the transaction links for an individual journal (a split). Don't use the group ID, you need the actual underlying journal (the split).",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction journal / the split.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the transaction journal / the split."),
    },
    method: "get",
    pathTemplate: "/v1/transaction-journals/{id}/links",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_links_by_journal",
  },
  {
    name: "get_transaction_by_journal",
    tags: ["transactions"],
    description: "Get a single transaction by underlying journal (split).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction journal (split).",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z.string().describe("The ID of the transaction journal (split)."),
    },
    method: "get",
    pathTemplate: "/v1/transaction-journals/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_transaction_by_journal",
  },
  {
    name: "delete_transaction_journal",
    tags: ["transactions"],
    description: "Delete an individual journal (split) from a transaction.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description:
            "The ID of the transaction journal (the split) you wish to delete.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      id: z
        .string()
        .describe(
          "The ID of the transaction journal (the split) you wish to delete."
        ),
    },
    method: "delete",
    pathTemplate: "/v1/transaction-journals/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_transaction_journal",
  },
  {
    name: "list_attachment_by_transaction",
    tags: ["transactions"],
    description: "Lists all attachments.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the transaction."),
    },
    method: "get",
    pathTemplate: "/v1/transactions/{id}/attachments",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_attachment_by_transaction",
  },
  {
    name: "list_event_by_transaction",
    tags: ["transactions"],
    description: "Lists all piggy bank events.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction.",
        },
      },
      required: ["id"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The ID of the transaction."),
    },
    method: "get",
    pathTemplate: "/v1/transactions/{id}/piggy-bank-events",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "list_event_by_transaction",
  },
  {
    name: "list_transaction",
    tags: ["transactions"],
    description: "List all the user's transactions.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        start: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD. This is the start date of the selected range (inclusive). ",
        },
        end: {
          type: "string",
          example: "2025-09-30",
          description:
            "A date formatted YYYY-MM-DD. This is the end date of the selected range (inclusive). ",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "withdrawal",
            "withdrawals",
            "expense",
            "deposit",
            "deposits",
            "income",
            "transfer",
            "transfers",
            "opening_balance",
            "reconciliation",
            "special",
            "specials",
            "default",
          ],
          description: "Optional filter on the transaction type(s) returned.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      start: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. This is the start date of the selected range (inclusive)."
        )
        .optional(),
      end: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. This is the end date of the selected range (inclusive)."
        )
        .optional(),
      type: z
        .enum([
          "all",
          "withdrawal",
          "withdrawals",
          "expense",
          "deposit",
          "deposits",
          "income",
          "transfer",
          "transfers",
          "opening_balance",
          "reconciliation",
          "special",
          "specials",
          "default",
        ])
        .describe("Optional filter on the transaction type(s) returned.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
    ],
    operationId: "list_transaction",
  },
  {
    name: "store_transaction",
    tags: ["transactions"],
    description:
      "Creates a new transaction. The data required can be submitted as a JSON body or as a list of parameters.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["transactions"],
          properties: {
            error_if_duplicate_hash: {
              type: "boolean",
              example: false,
              description: "Break if the submitted transaction exists already.",
            },
            apply_rules: {
              type: "boolean",
              example: false,
              description:
                "Whether or not to apply rules when submitting transaction.",
            },
            fire_webhooks: {
              type: "boolean",
              example: true,
              default: true,
              description:
                "Whether or not to fire the webhooks that are related to this event.",
            },
            group_title: {
              type: "string",
              description:
                "Title of the transaction if it has been split in more than one piece. Empty otherwise.",
              example: "Split transaction title.",
              nullable: true,
            },
            transactions: {
              type: "array",
              items: {
                type: "object",
                required: ["amount", "date", "description", "type"],
                properties: {
                  type: {
                    type: "string",
                    example: "withdrawal",
                    enum: [
                      "withdrawal",
                      "deposit",
                      "transfer",
                      "reconciliation",
                      "opening balance",
                    ],
                  },
                  date: {
                    type: "string",
                    format: "date-time",
                    example: "2025-09-01T00:00:00+00:00",
                    description: "Date of the transaction",
                  },
                  amount: {
                    type: "string",
                    example: "123.45",
                    description: "Amount of the transaction.",
                  },
                  description: {
                    type: "string",
                    example: "Vegetables",
                    description: "Description of the transaction.",
                  },
                  order: {
                    type: "integer",
                    format: "int32",
                    example: 0,
                    nullable: true,
                    description:
                      "Order of this entry in the list of transactions.",
                  },
                  currency_id: {
                    type: "string",
                    example: "12",
                    nullable: true,
                    description:
                      "Currency ID. Default is the source account's currency, or the user's financial administration's currency. The value you submit may be overruled by the source or destination account.",
                  },
                  currency_code: {
                    type: "string",
                    example: "EUR",
                    nullable: true,
                    description:
                      "Currency code. Default is the source account's currency, or the user's financial administration's primary currency. The value you submit may be overruled by the source or destination account.",
                  },
                  foreign_amount: {
                    type: "string",
                    example: "123.45",
                    nullable: true,
                    description: "The amount in a foreign currency.",
                  },
                  foreign_currency_id: {
                    type: "string",
                    example: "17",
                    nullable: true,
                    description:
                      "Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount.",
                  },
                  foreign_currency_code: {
                    type: "string",
                    example: "USD",
                    description:
                      "Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount.",
                    nullable: true,
                  },
                  budget_id: {
                    type: "string",
                    nullable: true,
                    example: "4",
                    description: "The budget ID for this transaction.",
                  },
                  budget_name: {
                    type: "string",
                    example: "Groceries",
                    description:
                      "The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.",
                    nullable: true,
                  },
                  category_id: {
                    type: "string",
                    nullable: true,
                    example: "43",
                    description: "The category ID for this transaction.",
                  },
                  category_name: {
                    type: "string",
                    example: "Groceries",
                    nullable: true,
                    description:
                      "The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name.",
                  },
                  source_id: {
                    type: "string",
                    example: "2",
                    nullable: true,
                    description:
                      "ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account.",
                  },
                  source_name: {
                    type: "string",
                    example: "Checking account",
                    nullable: true,
                    description:
                      "Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name.",
                  },
                  destination_id: {
                    type: "string",
                    example: "2",
                    nullable: true,
                    description:
                      "ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account.",
                  },
                  destination_name: {
                    type: "string",
                    example: "Buy and Large",
                    nullable: true,
                    description:
                      "Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough.",
                  },
                  reconciled: {
                    type: "boolean",
                    example: false,
                    description:
                      "If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user.",
                  },
                  piggy_bank_id: {
                    type: "integer",
                    format: "int32",
                    description:
                      "Optional. Use either this or the piggy_bank_name",
                    nullable: true,
                  },
                  piggy_bank_name: {
                    type: "string",
                    description:
                      "Optional. Use either this or the piggy_bank_id",
                    nullable: true,
                  },
                  bill_id: {
                    type: "string",
                    nullable: true,
                    example: "112",
                    description: "Optional. Use either this or the bill_name",
                  },
                  bill_name: {
                    type: "string",
                    example: "Monthly rent",
                    nullable: true,
                    description: "Optional. Use either this or the bill_id",
                  },
                  tags: {
                    type: "array",
                    nullable: true,
                    example: null,
                    description: "Array of tags.",
                    items: {
                      type: "string",
                      description: "Tag.",
                      example: "Barbecue preparation",
                    },
                  },
                  notes: {
                    type: "string",
                    example: "Some example notes",
                    nullable: true,
                  },
                  internal_reference: {
                    type: "string",
                    nullable: true,
                    description:
                      "Reference to internal reference of other systems.",
                  },
                  external_id: {
                    type: "string",
                    nullable: true,
                    description: "Reference to external ID in other systems.",
                  },
                  external_url: {
                    type: "string",
                    nullable: true,
                    description: "External, custom URL for this transaction.",
                  },
                  sepa_cc: {
                    type: "string",
                    nullable: true,
                    description: "SEPA Clearing Code",
                  },
                  sepa_ct_op: {
                    type: "string",
                    description: "SEPA Opposing Account Identifier",
                    nullable: true,
                  },
                  sepa_ct_id: {
                    type: "string",
                    nullable: true,
                    description: "SEPA end-to-end Identifier",
                  },
                  sepa_db: {
                    type: "string",
                    nullable: true,
                    description: "SEPA mandate identifier",
                  },
                  sepa_country: {
                    type: "string",
                    nullable: true,
                    description: "SEPA Country",
                  },
                  sepa_ep: {
                    type: "string",
                    nullable: true,
                    description: "SEPA External Purpose indicator",
                  },
                  sepa_ci: {
                    type: "string",
                    nullable: true,
                    description: "SEPA Creditor Identifier",
                  },
                  sepa_batch_id: {
                    type: "string",
                    nullable: true,
                    description: "SEPA Batch ID",
                  },
                  interest_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  book_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  process_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  due_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  payment_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  invoice_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                },
              },
            },
          },
          description:
            "JSON array or key=value pairs with the necessary transaction information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          error_if_duplicate_hash: z
            .boolean()
            .describe("Break if the submitted transaction exists already.")
            .optional(),
          apply_rules: z
            .boolean()
            .describe(
              "Whether or not to apply rules when submitting transaction."
            )
            .optional(),
          fire_webhooks: z
            .boolean()
            .describe(
              "Whether or not to fire the webhooks that are related to this event."
            )
            .default(true),
          group_title: z
            .string()
            .nullable()
            .describe(
              "Title of the transaction if it has been split in more than one piece. Empty otherwise."
            )
            .optional(),
          transactions: z.array(
            z.object({
              type: z.enum([
                "withdrawal",
                "deposit",
                "transfer",
                "reconciliation",
                "opening balance",
              ]),
              date: z
                .string()
                .datetime({ offset: true })
                .describe("Date of the transaction"),
              amount: z.string().describe("Amount of the transaction."),
              description: z
                .string()
                .describe("Description of the transaction."),
              order: z
                .number()
                .int()
                .nullable()
                .describe("Order of this entry in the list of transactions.")
                .optional(),
              currency_id: z
                .string()
                .nullable()
                .describe(
                  "Currency ID. Default is the source account's currency, or the user's financial administration's currency. The value you submit may be overruled by the source or destination account."
                )
                .optional(),
              currency_code: z
                .string()
                .nullable()
                .describe(
                  "Currency code. Default is the source account's currency, or the user's financial administration's primary currency. The value you submit may be overruled by the source or destination account."
                )
                .optional(),
              foreign_amount: z
                .string()
                .nullable()
                .describe("The amount in a foreign currency.")
                .optional(),
              foreign_currency_id: z
                .string()
                .nullable()
                .describe(
                  "Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount."
                )
                .optional(),
              foreign_currency_code: z
                .string()
                .nullable()
                .describe(
                  "Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount."
                )
                .optional(),
              budget_id: z
                .string()
                .nullable()
                .describe("The budget ID for this transaction.")
                .optional(),
              budget_name: z
                .string()
                .nullable()
                .describe(
                  "The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored."
                )
                .optional(),
              category_id: z
                .string()
                .nullable()
                .describe("The category ID for this transaction.")
                .optional(),
              category_name: z
                .string()
                .nullable()
                .describe(
                  "The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name."
                )
                .optional(),
              source_id: z
                .string()
                .nullable()
                .describe(
                  "ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account."
                )
                .optional(),
              source_name: z
                .string()
                .nullable()
                .describe(
                  "Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name."
                )
                .optional(),
              destination_id: z
                .string()
                .nullable()
                .describe(
                  "ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account."
                )
                .optional(),
              destination_name: z
                .string()
                .nullable()
                .describe(
                  "Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough."
                )
                .optional(),
              reconciled: z
                .boolean()
                .describe(
                  "If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user."
                )
                .optional(),
              piggy_bank_id: z
                .number()
                .int()
                .nullable()
                .describe("Optional. Use either this or the piggy_bank_name")
                .optional(),
              piggy_bank_name: z
                .string()
                .nullable()
                .describe("Optional. Use either this or the piggy_bank_id")
                .optional(),
              bill_id: z
                .string()
                .nullable()
                .describe("Optional. Use either this or the bill_name")
                .optional(),
              bill_name: z
                .string()
                .nullable()
                .describe("Optional. Use either this or the bill_id")
                .optional(),
              tags: z
                .array(z.string().describe("Tag."))
                .nullable()
                .describe("Array of tags.")
                .optional(),
              notes: z.string().nullable().optional(),
              internal_reference: z
                .string()
                .nullable()
                .describe("Reference to internal reference of other systems.")
                .optional(),
              external_id: z
                .string()
                .nullable()
                .describe("Reference to external ID in other systems.")
                .optional(),
              external_url: z
                .string()
                .nullable()
                .describe("External, custom URL for this transaction.")
                .optional(),
              sepa_cc: z
                .string()
                .nullable()
                .describe("SEPA Clearing Code")
                .optional(),
              sepa_ct_op: z
                .string()
                .nullable()
                .describe("SEPA Opposing Account Identifier")
                .optional(),
              sepa_ct_id: z
                .string()
                .nullable()
                .describe("SEPA end-to-end Identifier")
                .optional(),
              sepa_db: z
                .string()
                .nullable()
                .describe("SEPA mandate identifier")
                .optional(),
              sepa_country: z
                .string()
                .nullable()
                .describe("SEPA Country")
                .optional(),
              sepa_ep: z
                .string()
                .nullable()
                .describe("SEPA External Purpose indicator")
                .optional(),
              sepa_ci: z
                .string()
                .nullable()
                .describe("SEPA Creditor Identifier")
                .optional(),
              sepa_batch_id: z
                .string()
                .nullable()
                .describe("SEPA Batch ID")
                .optional(),
              interest_date: z
                .string()
                .datetime({ offset: true })
                .nullable()
                .optional(),
              book_date: z
                .string()
                .datetime({ offset: true })
                .nullable()
                .optional(),
              process_date: z
                .string()
                .datetime({ offset: true })
                .nullable()
                .optional(),
              due_date: z
                .string()
                .datetime({ offset: true })
                .nullable()
                .optional(),
              payment_date: z
                .string()
                .datetime({ offset: true })
                .nullable()
                .optional(),
              invoice_date: z
                .string()
                .datetime({ offset: true })
                .nullable()
                .optional(),
            })
          ),
        })
        .describe(
          "JSON array or key=value pairs with the necessary transaction information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/transactions",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_transaction",
  },
  {
    name: "get_transaction",
    tags: ["transactions"],
    description: "Get a single transaction.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the transaction.") },
    method: "get",
    pathTemplate: "/v1/transactions/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_transaction",
  },
  {
    name: "update_transaction",
    tags: ["transactions"],
    description: "Update an existing transaction.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction.",
        },
        requestBody: {
          type: "object",
          properties: {
            apply_rules: {
              type: "boolean",
              example: false,
              description:
                "Whether or not to apply rules when submitting transaction.",
            },
            fire_webhooks: {
              type: "boolean",
              example: true,
              default: true,
              description:
                "Whether or not to fire the webhooks that are related to this event.",
            },
            group_title: {
              type: "string",
              description:
                "Title of the transaction if it has been split in more than one piece. Empty otherwise.",
              example: "Split transaction title.",
              nullable: true,
            },
            transactions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  transaction_journal_id: {
                    type: "string",
                    example: "123",
                    description:
                      "Transaction journal ID of current transaction (split).",
                  },
                  type: {
                    type: "string",
                    example: "withdrawal",
                    enum: [
                      "withdrawal",
                      "deposit",
                      "transfer",
                      "reconciliation",
                      "opening balance",
                    ],
                  },
                  date: {
                    type: "string",
                    format: "date-time",
                    example: "2025-09-01T00:00:00+00:00",
                    description: "Date of the transaction",
                  },
                  amount: {
                    type: "string",
                    example: "123.45",
                    description: "Amount of the transaction.",
                  },
                  description: {
                    type: "string",
                    example: "Vegetables",
                    description: "Description of the transaction.",
                  },
                  order: {
                    type: "integer",
                    format: "int32",
                    example: 0,
                    nullable: true,
                    description:
                      "Order of this entry in the list of transactions.",
                  },
                  currency_id: {
                    type: "string",
                    example: "12",
                    nullable: true,
                    description:
                      "Currency ID. Default is the source account's currency, or the user's financial administration's primary currency. Can be used instead of currency_code.",
                  },
                  currency_code: {
                    type: "string",
                    example: "EUR",
                    nullable: true,
                    description:
                      "Currency code. Default is the source account's currency, or the user's financial administration's primary currency. Can be used instead of currency_id.",
                  },
                  currency_symbol: {
                    type: "string",
                    example: "$",
                  },
                  currency_name: {
                    type: "string",
                    example: "Euro",
                  },
                  currency_decimal_places: {
                    type: "integer",
                    format: "int32",
                    example: 2,
                    description: "Number of decimals used in this currency.",
                  },
                  foreign_amount: {
                    type: "string",
                    example: "123.45",
                    nullable: true,
                    description: "The amount in a foreign currency.",
                  },
                  foreign_currency_id: {
                    type: "string",
                    example: "17",
                    nullable: true,
                    description:
                      "Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount.",
                  },
                  foreign_currency_code: {
                    type: "string",
                    example: "USD",
                    description:
                      "Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount.",
                    nullable: true,
                  },
                  foreign_currency_symbol: {
                    type: "string",
                    example: "$",
                    nullable: true,
                  },
                  foreign_currency_decimal_places: {
                    type: "integer",
                    format: "int32",
                    example: 2,
                    description: "Number of decimals in the currency",
                    nullable: true,
                  },
                  budget_id: {
                    type: "string",
                    nullable: true,
                    example: "4",
                    description: "The budget ID for this transaction.",
                  },
                  budget_name: {
                    type: "string",
                    example: "Groceries",
                    description:
                      "The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.",
                    nullable: true,
                  },
                  category_id: {
                    type: "string",
                    nullable: true,
                    example: "43",
                    description: "The category ID for this transaction.",
                  },
                  category_name: {
                    type: "string",
                    example: "Groceries",
                    nullable: true,
                    description:
                      "The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name.",
                  },
                  source_id: {
                    type: "string",
                    example: "2",
                    nullable: true,
                    description:
                      "ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account.",
                  },
                  source_name: {
                    type: "string",
                    example: "Checking account",
                    nullable: true,
                    description:
                      "Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name.",
                  },
                  source_iban: {
                    type: "string",
                    example: "NL02ABNA0123456789",
                    nullable: true,
                  },
                  destination_id: {
                    type: "string",
                    example: "2",
                    nullable: true,
                    description:
                      "ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account.",
                  },
                  destination_name: {
                    type: "string",
                    example: "Buy and Large",
                    nullable: true,
                    description:
                      "Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough.",
                  },
                  destination_iban: {
                    type: "string",
                    example: "NL02ABNA0123456789",
                    nullable: true,
                  },
                  reconciled: {
                    type: "boolean",
                    example: false,
                    description:
                      "If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user.",
                  },
                  bill_id: {
                    type: "string",
                    nullable: true,
                    example: "111",
                    description: "Optional. Use either this or the bill_name",
                  },
                  bill_name: {
                    type: "string",
                    example: "Monthly rent",
                    nullable: true,
                    description: "Optional. Use either this or the bill_id",
                  },
                  tags: {
                    type: "array",
                    nullable: true,
                    example: null,
                    description: "Array of tags.",
                    items: {
                      type: "string",
                      description: "Tag.",
                      example: "Barbecue preparation",
                    },
                  },
                  notes: {
                    type: "string",
                    example: "Some example notes",
                    nullable: true,
                  },
                  internal_reference: {
                    type: "string",
                    nullable: true,
                    description:
                      "Reference to internal reference of other systems.",
                  },
                  external_id: {
                    type: "string",
                    nullable: true,
                    description: "Reference to external ID in other systems.",
                  },
                  external_url: {
                    type: "string",
                    nullable: true,
                    description: "External, custom URL for this transaction.",
                  },
                  sepa_cc: {
                    type: "string",
                    nullable: true,
                    description: "SEPA Clearing Code",
                  },
                  sepa_ct_op: {
                    type: "string",
                    description: "SEPA Opposing Account Identifier",
                    nullable: true,
                  },
                  sepa_ct_id: {
                    type: "string",
                    nullable: true,
                    description: "SEPA end-to-end Identifier",
                  },
                  sepa_db: {
                    type: "string",
                    nullable: true,
                    description: "SEPA mandate identifier",
                  },
                  sepa_country: {
                    type: "string",
                    nullable: true,
                    description: "SEPA Country",
                  },
                  sepa_ep: {
                    type: "string",
                    nullable: true,
                    description: "SEPA External Purpose indicator",
                  },
                  sepa_ci: {
                    type: "string",
                    nullable: true,
                    description: "SEPA Creditor Identifier",
                  },
                  sepa_batch_id: {
                    type: "string",
                    nullable: true,
                    description: "SEPA Batch ID",
                  },
                  interest_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  book_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  process_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  due_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  payment_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                  invoice_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true,
                  },
                },
              },
            },
          },
          description:
            "JSON array with updated transaction information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the transaction."),
      requestBody: z
        .object({
          apply_rules: z
            .boolean()
            .describe(
              "Whether or not to apply rules when submitting transaction."
            )
            .optional(),
          fire_webhooks: z
            .boolean()
            .describe(
              "Whether or not to fire the webhooks that are related to this event."
            )
            .default(true),
          group_title: z
            .string()
            .nullable()
            .describe(
              "Title of the transaction if it has been split in more than one piece. Empty otherwise."
            )
            .optional(),
          transactions: z
            .array(
              z.object({
                transaction_journal_id: z
                  .string()
                  .describe(
                    "Transaction journal ID of current transaction (split)."
                  )
                  .optional(),
                type: z
                  .enum([
                    "withdrawal",
                    "deposit",
                    "transfer",
                    "reconciliation",
                    "opening balance",
                  ])
                  .optional(),
                date: z
                  .string()
                  .datetime({ offset: true })
                  .describe("Date of the transaction")
                  .optional(),
                amount: z
                  .string()
                  .describe("Amount of the transaction.")
                  .optional(),
                description: z
                  .string()
                  .describe("Description of the transaction.")
                  .optional(),
                order: z
                  .number()
                  .int()
                  .nullable()
                  .describe("Order of this entry in the list of transactions.")
                  .optional(),
                currency_id: z
                  .string()
                  .nullable()
                  .describe(
                    "Currency ID. Default is the source account's currency, or the user's financial administration's primary currency. Can be used instead of currency_code."
                  )
                  .optional(),
                currency_code: z
                  .string()
                  .nullable()
                  .describe(
                    "Currency code. Default is the source account's currency, or the user's financial administration's primary currency. Can be used instead of currency_id."
                  )
                  .optional(),
                currency_symbol: z.string().optional(),
                currency_name: z.string().optional(),
                currency_decimal_places: z
                  .number()
                  .int()
                  .describe("Number of decimals used in this currency.")
                  .optional(),
                foreign_amount: z
                  .string()
                  .nullable()
                  .describe("The amount in a foreign currency.")
                  .optional(),
                foreign_currency_id: z
                  .string()
                  .nullable()
                  .describe(
                    "Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount."
                  )
                  .optional(),
                foreign_currency_code: z
                  .string()
                  .nullable()
                  .describe(
                    "Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount."
                  )
                  .optional(),
                foreign_currency_symbol: z.string().nullable().optional(),
                foreign_currency_decimal_places: z
                  .number()
                  .int()
                  .nullable()
                  .describe("Number of decimals in the currency")
                  .optional(),
                budget_id: z
                  .string()
                  .nullable()
                  .describe("The budget ID for this transaction.")
                  .optional(),
                budget_name: z
                  .string()
                  .nullable()
                  .describe(
                    "The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored."
                  )
                  .optional(),
                category_id: z
                  .string()
                  .nullable()
                  .describe("The category ID for this transaction.")
                  .optional(),
                category_name: z
                  .string()
                  .nullable()
                  .describe(
                    "The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name."
                  )
                  .optional(),
                source_id: z
                  .string()
                  .nullable()
                  .describe(
                    "ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account."
                  )
                  .optional(),
                source_name: z
                  .string()
                  .nullable()
                  .describe(
                    "Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name."
                  )
                  .optional(),
                source_iban: z.string().nullable().optional(),
                destination_id: z
                  .string()
                  .nullable()
                  .describe(
                    "ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account."
                  )
                  .optional(),
                destination_name: z
                  .string()
                  .nullable()
                  .describe(
                    "Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough."
                  )
                  .optional(),
                destination_iban: z.string().nullable().optional(),
                reconciled: z
                  .boolean()
                  .describe(
                    "If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user."
                  )
                  .optional(),
                bill_id: z
                  .string()
                  .nullable()
                  .describe("Optional. Use either this or the bill_name")
                  .optional(),
                bill_name: z
                  .string()
                  .nullable()
                  .describe("Optional. Use either this or the bill_id")
                  .optional(),
                tags: z
                  .array(z.string().describe("Tag."))
                  .nullable()
                  .describe("Array of tags.")
                  .optional(),
                notes: z.string().nullable().optional(),
                internal_reference: z
                  .string()
                  .nullable()
                  .describe("Reference to internal reference of other systems.")
                  .optional(),
                external_id: z
                  .string()
                  .nullable()
                  .describe("Reference to external ID in other systems.")
                  .optional(),
                external_url: z
                  .string()
                  .nullable()
                  .describe("External, custom URL for this transaction.")
                  .optional(),
                sepa_cc: z
                  .string()
                  .nullable()
                  .describe("SEPA Clearing Code")
                  .optional(),
                sepa_ct_op: z
                  .string()
                  .nullable()
                  .describe("SEPA Opposing Account Identifier")
                  .optional(),
                sepa_ct_id: z
                  .string()
                  .nullable()
                  .describe("SEPA end-to-end Identifier")
                  .optional(),
                sepa_db: z
                  .string()
                  .nullable()
                  .describe("SEPA mandate identifier")
                  .optional(),
                sepa_country: z
                  .string()
                  .nullable()
                  .describe("SEPA Country")
                  .optional(),
                sepa_ep: z
                  .string()
                  .nullable()
                  .describe("SEPA External Purpose indicator")
                  .optional(),
                sepa_ci: z
                  .string()
                  .nullable()
                  .describe("SEPA Creditor Identifier")
                  .optional(),
                sepa_batch_id: z
                  .string()
                  .nullable()
                  .describe("SEPA Batch ID")
                  .optional(),
                interest_date: z
                  .string()
                  .datetime({ offset: true })
                  .nullable()
                  .optional(),
                book_date: z
                  .string()
                  .datetime({ offset: true })
                  .nullable()
                  .optional(),
                process_date: z
                  .string()
                  .datetime({ offset: true })
                  .nullable()
                  .optional(),
                due_date: z
                  .string()
                  .datetime({ offset: true })
                  .nullable()
                  .optional(),
                payment_date: z
                  .string()
                  .datetime({ offset: true })
                  .nullable()
                  .optional(),
                invoice_date: z
                  .string()
                  .datetime({ offset: true })
                  .nullable()
                  .optional(),
              })
            )
            .optional(),
        })
        .describe(
          "JSON array with updated transaction information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/transactions/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_transaction",
  },
  {
    name: "delete_transaction",
    tags: ["transactions"],
    description: "Delete a transaction.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the transaction.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the transaction.") },
    method: "delete",
    pathTemplate: "/v1/transactions/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_transaction",
  },
  {
    name: "list_user_groups",
    tags: ["user_groups"],
    description:
      "List all the user groups available to this user. These are essentially the 'financial administrations' that Firefly III supports.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/user-groups",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_user_groups",
  },
  {
    name: "get_user_group",
    tags: ["user_groups"],
    description: "Returns a single user group by its ID. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The ID of the user group.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The ID of the user group.") },
    method: "get",
    pathTemplate: "/v1/user-groups/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_user_group",
  },
  {
    name: "update_user_group",
    tags: ["user_groups"],
    description:
      "Used to update a single user group. The available fields are still limited. ",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "1",
          description: "The ID of the account.",
        },
        requestBody: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              example: "New user group title",
              description: "A descriptive title for the user group.",
            },
            primary_currency_id: {
              type: "string",
              example: "1",
              description:
                "Use either primary_currency_id or primary_currency_code. This will set the primary currency for the user group ('financial administration').",
            },
            primary_currency_code: {
              type: "string",
              example: "EUR",
              description:
                "Use either primary_currency_id or primary_currency_code. This will set the primary currency for the user group ('financial administration').",
            },
          },
          description:
            "JSON array or form-data with new user group information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The ID of the account."),
      requestBody: z
        .object({
          title: z.string().describe("A descriptive title for the user group."),
          primary_currency_id: z
            .string()
            .describe(
              "Use either primary_currency_id or primary_currency_code. This will set the primary currency for the user group ('financial administration')."
            )
            .optional(),
          primary_currency_code: z
            .string()
            .describe(
              "Use either primary_currency_id or primary_currency_code. This will set the primary currency for the user group ('financial administration')."
            )
            .optional(),
        })
        .describe(
          "JSON array or form-data with new user group information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/user-groups/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_user_group",
  },
  {
    name: "search_accounts",
    tags: ["search"],
    description: "Search for accounts",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        query: {
          type: "string",
          example: "checking",
          description: "The query you wish to search for.",
        },
        type: {
          type: "string",
          enum: [
            "all",
            "asset",
            "cash",
            "expense",
            "revenue",
            "special",
            "hidden",
            "liability",
            "liabilities",
            "Default account",
            "Cash account",
            "Asset account",
            "Expense account",
            "Revenue account",
            "Initial balance account",
            "Beneficiary account",
            "Import account",
            "Reconciliation account",
            "Loan",
            "Debt",
            "Mortgage",
          ],
          description: "The type of accounts you wish to limit the search to.",
        },
        field: {
          type: "string",
          enum: ["all", "iban", "name", "number", "id"],
          description: "The account field(s) you want to search in.",
        },
      },
      required: ["query", "field"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      query: z.string().describe("The query you wish to search for."),
      type: z
        .enum([
          "all",
          "asset",
          "cash",
          "expense",
          "revenue",
          "special",
          "hidden",
          "liability",
          "liabilities",
          "Default account",
          "Cash account",
          "Asset account",
          "Expense account",
          "Revenue account",
          "Initial balance account",
          "Beneficiary account",
          "Import account",
          "Reconciliation account",
          "Loan",
          "Debt",
          "Mortgage",
        ])
        .describe("The type of accounts you wish to limit the search to.")
        .optional(),
      field: z
        .enum(["all", "iban", "name", "number", "id"])
        .describe("The account field(s) you want to search in."),
    },
    method: "get",
    pathTemplate: "/v1/search/accounts",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "query",
        in: "query",
      },
      {
        name: "type",
        in: "query",
      },
      {
        name: "field",
        in: "query",
      },
    ],
    operationId: "search_accounts",
  },
  {
    name: "search_transactions",
    tags: ["search"],
    description: "Searches through the users transactions.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        query: {
          type: "string",
          example: "groceries",
          description: "The query you wish to search for.",
        },
      },
      required: ["query"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      query: z.string().describe("The query you wish to search for."),
    },
    method: "get",
    pathTemplate: "/v1/search/transactions",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "query",
        in: "query",
      },
    ],
    operationId: "search_transactions",
  },
  {
    name: "get_basic_summary",
    tags: ["summary"],
    description:
      "Returns basic sums of the users data, like the net worth, spent and earned amounts. It is multi-currency, and is used in Firefly III to populate the dashboard. ",
    inputSchema: {
      type: "object",
      properties: {
        start: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        end: {
          type: "string",
          description: "A date formatted YYYY-MM-DD. ",
        },
        currency_code: {
          type: "string",
          description:
            "A currency code like EUR or USD, to filter the result. ",
        },
      },
      required: ["start", "end"],
    },
    zodShape: {
      start: z.string().describe("A date formatted YYYY-MM-DD."),
      end: z.string().describe("A date formatted YYYY-MM-DD."),
      currency_code: z
        .string()
        .describe("A currency code like EUR or USD, to filter the result.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/summary/basic",
    executionParameters: [
      {
        name: "start",
        in: "query",
      },
      {
        name: "end",
        in: "query",
      },
      {
        name: "currency_code",
        in: "query",
      },
    ],
    operationId: "get_basic_summary",
  },
  {
    name: "get_about",
    tags: ["about"],
    description:
      "Returns general system information and versions of the (supporting) software. ",
    inputSchema: {
      type: "object",
      properties: {},
    },
    zodShape: {},
    method: "get",
    pathTemplate: "/v1/about",
    executionParameters: [],
    operationId: "get_about",
  },
  {
    name: "get_current_user",
    tags: ["about"],
    description: "Returns the currently authenticated user. ",
    inputSchema: {
      type: "object",
      properties: {},
    },
    zodShape: {},
    method: "get",
    pathTemplate: "/v1/about/user",
    executionParameters: [],
    operationId: "get_current_user",
  },
  {
    name: "get_configuration",
    tags: ["configuration"],
    description:
      "Returns all editable and not-editable configuration values for this Firefly III installation",
    inputSchema: {
      type: "object",
      properties: {},
    },
    zodShape: {},
    method: "get",
    pathTemplate: "/v1/configuration",
    executionParameters: [],
    operationId: "get_configuration",
  },
  {
    name: "get_single_configuration",
    tags: ["configuration"],
    description:
      "Returns one configuration variable for this Firefly III installation",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "configuration.is_demo_site",
          description: "The name of the configuration value you want to know.",
          enum: [
            "configuration.is_demo_site",
            "configuration.permission_update_check",
            "configuration.last_update_check",
            "configuration.single_user_mode",
            "firefly.version",
            "firefly.default_location",
            "firefly.account_to_transaction",
            "firefly.allowed_opposing_types",
            "firefly.accountRoles",
            "firefly.valid_liabilities",
            "firefly.interest_periods",
            "firefly.enable_external_map",
            "firefly.expected_source_types",
            "app.timezone",
            "firefly.bill_periods",
            "firefly.credit_card_types",
            "firefly.languages",
            "firefly.valid_view_ranges",
          ],
        },
      },
      required: ["name"],
    },
    zodShape: {
      name: z
        .enum([
          "configuration.is_demo_site",
          "configuration.permission_update_check",
          "configuration.last_update_check",
          "configuration.single_user_mode",
          "firefly.version",
          "firefly.default_location",
          "firefly.account_to_transaction",
          "firefly.allowed_opposing_types",
          "firefly.accountRoles",
          "firefly.valid_liabilities",
          "firefly.interest_periods",
          "firefly.enable_external_map",
          "firefly.expected_source_types",
          "app.timezone",
          "firefly.bill_periods",
          "firefly.credit_card_types",
          "firefly.languages",
          "firefly.valid_view_ranges",
        ])
        .describe("The name of the configuration value you want to know."),
    },
    method: "get",
    pathTemplate: "/v1/configuration/{name}",
    executionParameters: [
      {
        name: "name",
        in: "path",
      },
    ],
    operationId: "get_single_configuration",
  },
  {
    name: "set_configuration",
    tags: ["configuration"],
    description:
      "Set a single configuration value. Not all configuration values can be updated so the list of accepted configuration variables is small.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          enum: [
            "configuration.is_demo_site",
            "configuration.permission_update_check",
            "configuration.last_update_check",
            "configuration.single_user_mode",
          ],
          description:
            "The name of the configuration value you want to update.",
        },
        requestBody: {
          type: "object",
          required: ["value"],
          properties: {
            value: {
              oneOf: [
                {
                  type: "boolean",
                },
                {
                  type: "string",
                },
                {
                  type: "object",
                },
                {
                  type: "array",
                  items: {
                    type: "string",
                    example: "EUR",
                    description: "The actual preference content.",
                  },
                },
              ],
            },
          },
          description:
            "JSON array with the necessary account information or key=value pairs. See the model for the exact specifications.",
        },
      },
      required: ["name", "requestBody"],
    },
    zodShape: {
      name: z
        .enum([
          "configuration.is_demo_site",
          "configuration.permission_update_check",
          "configuration.last_update_check",
          "configuration.single_user_mode",
        ])
        .describe("The name of the configuration value you want to update."),
      requestBody: z
        .object({
          value: z.any().superRefine((x, ctx) => {
            const schemas = [
              z.boolean(),
              z.string(),
              z.record(z.any()),
              z.array(z.string().describe("The actual preference content.")),
            ];
            const errors = schemas.reduce<z.ZodError[]>(
              (errors, schema) =>
                ((result) =>
                  result.error ? [...errors, result.error] : errors)(
                  schema.safeParse(x)
                ),
              []
            );
            if (schemas.length - errors.length !== 1) {
              ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
              });
            }
          }),
        })
        .describe(
          "JSON array with the necessary account information or key=value pairs. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/configuration/{name}",
    executionParameters: [
      {
        name: "name",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "set_configuration",
  },
  {
    name: "get_cron",
    tags: ["about"],
    description:
      "Firefly III has one endpoint for its various cron related tasks. Send a GET to this endpoint to run the cron. The cron requires the CLI token to be present. The cron job will fire for all users. ",
    inputSchema: {
      type: "object",
      properties: {
        cliToken: {
          type: "string",
          example: "d5ea6b5fb774618dd6ad6ba6e0a7f55c",
          description:
            "The CLI token of any user in Firefly III, required to run the cron job.",
        },
        date: {
          type: "string",
          example: "2025-09-01",
          description:
            "A date formatted YYYY-MM-DD. This can be used to make the cron job pretend it's running on another day. ",
        },
        force: {
          type: "boolean",
          example: false,
          description:
            "Forces the cron job to fire, regardless of whether it has fired before. This may result in double transactions or weird budgets, so be careful. ",
        },
      },
      required: ["cliToken"],
    },
    zodShape: {
      cliToken: z
        .string()
        .describe(
          "The CLI token of any user in Firefly III, required to run the cron job."
        ),
      date: z
        .string()
        .describe(
          "A date formatted YYYY-MM-DD. This can be used to make the cron job pretend it's running on another day."
        )
        .optional(),
      force: z
        .boolean()
        .describe(
          "Forces the cron job to fire, regardless of whether it has fired before. This may result in double transactions or weird budgets, so be careful."
        )
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/cron/{cliToken}",
    executionParameters: [
      {
        name: "cliToken",
        in: "path",
      },
      {
        name: "date",
        in: "query",
      },
      {
        name: "force",
        in: "query",
      },
    ],
    operationId: "get_cron",
  },
  {
    name: "list_user",
    tags: ["users"],
    description: "List all the users in this instance of Firefly III.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/users",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_user",
  },
  {
    name: "store_user",
    tags: ["users"],
    description:
      'Creates a new user. The data required can be submitted as a JSON body or as a list of parameters. The user will be given a random password, which they can reset using the "forgot password" function. ',
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          title: "A single user",
          type: "object",
          required: ["email"],
          properties: {
            created_at: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            updated_at: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            email: {
              type: "string",
              example: "james@firefly-iii.org",
              description: "The new users email address.",
            },
            blocked: {
              type: "boolean",
              example: false,
              description: "Boolean to indicate if the user is blocked.",
            },
            blocked_code: {
              type: "string",
              nullable: true,
              example: "email_changed",
              description:
                "If you say the user must be blocked, this will be the reason code.",
              enum: ["email_changed", null],
            },
            role: {
              type: "string",
              example: "owner",
              nullable: true,
              description: "Role for the user. Can be empty or omitted.",
              enum: ["owner", "demo", null],
            },
          },
          description:
            "JSON array with updated user information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          created_at: z.string().datetime({ offset: true }).optional(),
          updated_at: z.string().datetime({ offset: true }).optional(),
          email: z.string().describe("The new users email address."),
          blocked: z
            .boolean()
            .describe("Boolean to indicate if the user is blocked.")
            .optional(),
          blocked_code: z
            .union([z.literal("email_changed"), z.literal(null)])
            .nullable()
            .describe(
              "If you say the user must be blocked, this will be the reason code."
            )
            .optional(),
          role: z
            .union([z.literal("owner"), z.literal("demo"), z.literal(null)])
            .nullable()
            .describe("Role for the user. Can be empty or omitted.")
            .optional(),
        })
        .describe(
          "JSON array or key=value pairs with the necessary user information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/users",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_user",
  },
  {
    name: "get_user",
    tags: ["users"],
    description: "Gets all info of a single user.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The user ID.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The user ID.") },
    method: "get",
    pathTemplate: "/v1/users/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_user",
  },
  {
    name: "update_user",
    tags: ["users"],
    description: "Update existing user.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The user ID.",
        },
        requestBody: {
          title: "A single user",
          type: "object",
          required: ["email"],
          properties: {
            created_at: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            updated_at: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            email: {
              type: "string",
              example: "james@firefly-iii.org",
              description: "The new users email address.",
            },
            blocked: {
              type: "boolean",
              example: false,
              description: "Boolean to indicate if the user is blocked.",
            },
            blocked_code: {
              type: "string",
              nullable: true,
              example: "email_changed",
              description:
                "If you say the user must be blocked, this will be the reason code.",
              enum: ["email_changed", null],
            },
            role: {
              type: "string",
              example: "owner",
              nullable: true,
              description: "Role for the user. Can be empty or omitted.",
              enum: ["owner", "demo", null],
            },
          },
          description:
            "JSON array with updated user information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The user ID."),
      requestBody: z
        .object({
          created_at: z.string().datetime({ offset: true }).optional(),
          updated_at: z.string().datetime({ offset: true }).optional(),
          email: z.string().describe("The new users email address."),
          blocked: z
            .boolean()
            .describe("Boolean to indicate if the user is blocked.")
            .optional(),
          blocked_code: z
            .union([z.literal("email_changed"), z.literal(null)])
            .nullable()
            .describe(
              "If you say the user must be blocked, this will be the reason code."
            )
            .optional(),
          role: z
            .union([z.literal("owner"), z.literal("demo"), z.literal(null)])
            .nullable()
            .describe("Role for the user. Can be empty or omitted.")
            .optional(),
        })
        .describe(
          "JSON array with updated user information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/users/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_user",
  },
  {
    name: "delete_user",
    tags: ["users"],
    description:
      "Delete a user. You cannot delete the user you're authenticated with. This cannot be undone. Be careful.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The user ID.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The user ID.") },
    method: "delete",
    pathTemplate: "/v1/users/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_user",
  },
  {
    name: "list_preference",
    tags: ["preferences"],
    description: "List all of the preferences of the user.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/preferences",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_preference",
  },
  {
    name: "store_preference",
    tags: ["preferences"],
    description:
      "This endpoint creates a new preference. The name and data are free-format, and entirely up to you. If the preference is not used in Firefly III itself it may not be configurable through the user interface, but you can use this endpoint to persist custom data for your own app.",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          required: ["name", "data"],
          properties: {
            created_at: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            updated_at: {
              type: "string",
              format: "date-time",
              example: "2025-09-01T00:00:00+00:00",
            },
            name: {
              type: "string",
              example: "currencyPreference",
            },
            data: {
              oneOf: [
                {
                  type: "boolean",
                },
                {
                  type: "string",
                },
                {
                  type: "object",
                },
                {
                  type: "array",
                  items: {
                    type: "string",
                    example: "EUR",
                    description: "The actual preference content.",
                  },
                },
              ],
            },
          },
          description:
            "JSON array with the necessary preference information or key=value pairs. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          created_at: z.string().datetime({ offset: true }).optional(),
          updated_at: z.string().datetime({ offset: true }).optional(),
          name: z.string(),
          data: z.any().superRefine((x, ctx) => {
            const schemas = [
              z.boolean(),
              z.string(),
              z.record(z.any()),
              z.array(z.string().describe("The actual preference content.")),
            ];
            const errors = schemas.reduce<z.ZodError[]>(
              (errors, schema) =>
                ((result) =>
                  result.error ? [...errors, result.error] : errors)(
                  schema.safeParse(x)
                ),
              []
            );
            if (schemas.length - errors.length !== 1) {
              ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
              });
            }
          }),
        })
        .describe(
          "JSON array with the necessary preference information or key=value pairs. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/preferences",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_preference",
  },
  {
    name: "get_preference",
    tags: ["preferences"],
    description: "Return a single preference and the value.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "currencyPreference",
          description: "The name of the preference.",
        },
      },
      required: ["name"],
    },
    zodShape: { name: z.string().describe("The name of the preference.") },
    method: "get",
    pathTemplate: "/v1/preferences/{name}",
    executionParameters: [
      {
        name: "name",
        in: "path",
      },
    ],
    operationId: "get_preference",
  },
  {
    name: "update_preference",
    tags: ["preferences"],
    description: "Update a user's preference.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "currencyPreference",
          description:
            "The name of the preference. Will always overwrite. Will be created if it does not exist.",
        },
        requestBody: {
          type: "object",
          required: ["data"],
          properties: {
            data: {
              oneOf: [
                {
                  type: "boolean",
                },
                {
                  type: "string",
                },
                {
                  type: "object",
                },
                {
                  type: "array",
                  items: {
                    type: "string",
                    example: "EUR",
                    description: "The actual preference content.",
                  },
                },
              ],
            },
          },
          description:
            "JSON array or key=value pairs with the necessary preference information. See the model for the exact specifications.",
        },
      },
      required: ["name", "requestBody"],
    },
    zodShape: {
      name: z
        .string()
        .describe(
          "The name of the preference. Will always overwrite. Will be created if it does not exist."
        ),
      requestBody: z
        .object({
          data: z.any().superRefine((x, ctx) => {
            const schemas = [
              z.boolean(),
              z.string(),
              z.record(z.any()),
              z.array(z.string().describe("The actual preference content.")),
            ];
            const errors = schemas.reduce<z.ZodError[]>(
              (errors, schema) =>
                ((result) =>
                  result.error ? [...errors, result.error] : errors)(
                  schema.safeParse(x)
                ),
              []
            );
            if (schemas.length - errors.length !== 1) {
              ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
              });
            }
          }),
        })
        .describe(
          "JSON array or key=value pairs with the necessary preference information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/preferences/{name}",
    executionParameters: [
      {
        name: "name",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_preference",
  },
  {
    name: "get_webhook_messages",
    tags: ["webhooks"],
    description:
      'When a webhook is triggered the actual message that will be send is stored in a "message". You can view and analyse these messages.',
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The webhook ID.") },
    method: "get",
    pathTemplate: "/v1/webhooks/{id}/messages",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_webhook_messages",
  },
  {
    name: "get_single_webhook_message",
    tags: ["webhooks"],
    description:
      "When a webhook is triggered it will store the actual content of the webhook in a webhook message. You can view and analyse a single one using this endpoint.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID.",
        },
        messageId: {
          type: "integer",
          example: 1,
          description: "The webhook message ID.",
        },
      },
      required: ["id", "messageId"],
    },
    zodShape: {
      id: z.string().describe("The webhook ID."),
      messageId: z.number().int().describe("The webhook message ID."),
    },
    method: "get",
    pathTemplate: "/v1/webhooks/{id}/messages/{messageId}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "messageId",
        in: "path",
      },
    ],
    operationId: "get_single_webhook_message",
  },
  {
    name: "delete_webhook_message",
    tags: ["webhooks"],
    description:
      "Delete a webhook message. Any time a webhook is triggered the message is stored before it's sent. You can delete them before or after sending.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID.",
        },
        messageId: {
          type: "integer",
          example: 1,
          description: "The webhook message ID.",
        },
      },
      required: ["id", "messageId"],
    },
    zodShape: {
      id: z.string().describe("The webhook ID."),
      messageId: z.number().int().describe("The webhook message ID."),
    },
    method: "delete",
    pathTemplate: "/v1/webhooks/{id}/messages/{messageId}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "messageId",
        in: "path",
      },
    ],
    operationId: "delete_webhook_message",
  },
  {
    name: "get_webhook_message_attempts",
    tags: ["webhooks"],
    description:
      'When a webhook message fails to send it will store the failure in an "attempt". You can view and analyse these. Webhook messages that receive too many attempts (failures) will not be sent again. You must first clear out old attempts before the message can go out again.',
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID.",
        },
        messageId: {
          type: "integer",
          example: 1,
          description: "The webhook message ID.",
        },
      },
      required: ["id", "messageId"],
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
      id: z.string().describe("The webhook ID."),
      messageId: z.number().int().describe("The webhook message ID."),
    },
    method: "get",
    pathTemplate: "/v1/webhooks/{id}/messages/{messageId}/attempts",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
      {
        name: "id",
        in: "path",
      },
      {
        name: "messageId",
        in: "path",
      },
    ],
    operationId: "get_webhook_message_attempts",
  },
  {
    name: "get_single_webhook_message_attempt",
    tags: ["webhooks"],
    description:
      'When a webhook message fails to send it will store the failure in an "attempt". You can view and analyse these. Webhooks messages that receive too many attempts (failures) will not be fired. You must first clear out old attempts and try again. This endpoint shows you the details of a single attempt. The ID of the attempt must match the corresponding webhook and webhook message.',
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID.",
        },
        messageId: {
          type: "integer",
          example: 1,
          description: "The webhook message ID.",
        },
        attemptId: {
          type: "integer",
          example: 1,
          description: "The webhook attempt ID.",
        },
      },
      required: ["id", "messageId", "attemptId"],
    },
    zodShape: {
      id: z.string().describe("The webhook ID."),
      messageId: z.number().int().describe("The webhook message ID."),
      attemptId: z.number().int().describe("The webhook attempt ID."),
    },
    method: "get",
    pathTemplate: "/v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "messageId",
        in: "path",
      },
      {
        name: "attemptId",
        in: "path",
      },
    ],
    operationId: "get_single_webhook_message_attempt",
  },
  {
    name: "delete_webhook_message_attempt",
    tags: ["webhooks"],
    description:
      "Delete a webhook message attempt. If you delete all attempts for a webhook message, Firefly III will (once again) assume all is well with the webhook message and will try to send it again.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID.",
        },
        messageId: {
          type: "integer",
          example: 1,
          description: "The webhook message ID.",
        },
        attemptId: {
          type: "integer",
          example: 1,
          description: "The webhook message attempt ID.",
        },
      },
      required: ["id", "messageId", "attemptId"],
    },
    zodShape: {
      id: z.string().describe("The webhook ID."),
      messageId: z.number().int().describe("The webhook message ID."),
      attemptId: z.number().int().describe("The webhook message attempt ID."),
    },
    method: "delete",
    pathTemplate: "/v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "messageId",
        in: "path",
      },
      {
        name: "attemptId",
        in: "path",
      },
    ],
    operationId: "delete_webhook_message_attempt",
  },
  {
    name: "submit_webhook",
    tags: ["webhooks"],
    description:
      "This endpoint will submit any open messages for this webhook. This is an asynchronous operation, so you can't see the result. Refresh the webhook message and/or the webhook message attempts to see the results. This may take some time if the webhook receiver is slow.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID.",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The webhook ID.") },
    method: "post",
    pathTemplate: "/v1/webhooks/{id}/submit",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "submit_webhook",
  },
  {
    name: "trigger_transaction_webhook",
    tags: ["webhooks"],
    description:
      "This endpoint will execute this webhook for a given transaction ID. This is an asynchronous operation, so you can't see the result. Refresh the webhook message and/or the webhook message attempts to see the results. This may take some time if the webhook receiver is slow.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID.",
        },
        transactionId: {
          type: "string",
          example: "123",
          description: "The transaction ID.",
        },
      },
      required: ["id", "transactionId"],
    },
    zodShape: {
      id: z.string().describe("The webhook ID."),
      transactionId: z.string().describe("The transaction ID."),
    },
    method: "post",
    pathTemplate: "/v1/webhooks/{id}/trigger-transaction/{transactionId}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
      {
        name: "transactionId",
        in: "path",
      },
    ],
    operationId: "trigger_transaction_webhook",
  },
  {
    name: "list_webhook",
    tags: ["webhooks"],
    description: "List all the user's webhooks.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          format: "int32",
          example: 10,
          description:
            "Number of items per page. The default pagination is per 50 items.",
        },
        page: {
          type: "integer",
          format: "int32",
          example: 1,
          description: "Page number. The default pagination is per 50 items.",
        },
      },
    },
    zodShape: {
      limit: z
        .number()
        .int()
        .describe(
          "Number of items per page. The default pagination is per 50 items."
        )
        .optional(),
      page: z
        .number()
        .int()
        .describe("Page number. The default pagination is per 50 items.")
        .optional(),
    },
    method: "get",
    pathTemplate: "/v1/webhooks",
    executionParameters: [
      {
        name: "limit",
        in: "query",
      },
      {
        name: "page",
        in: "query",
      },
    ],
    operationId: "list_webhook",
  },
  {
    name: "store_webhook",
    tags: ["webhooks"],
    description:
      "Creates a new webhook. The data required can be submitted as a JSON body or as a list of parameters. The webhook will be given a random secret. ",
    inputSchema: {
      type: "object",
      properties: {
        requestBody: {
          title: "A single webhook (store)",
          type: "object",
          required: ["title", "url"],
          properties: {
            active: {
              type: "boolean",
              example: false,
              description: "Boolean to indicate if the webhook is active",
            },
            title: {
              type: "string",
              example: "Update magic mirror on new transaction",
              description: "A title for the webhook for easy recognition.",
            },
            triggers: {
              type: "array",
              minItems: 1,
              maxItems: 3,
              items: {
                type: "string",
                nullable: false,
                example: "DESTROY_TRANSACTION",
                description: "The trigger for the webhook.",
                enum: [
                  "ANY",
                  "STORE_TRANSACTION",
                  "UPDATE_TRANSACTION",
                  "DESTROY_TRANSACTION",
                  "STORE_BUDGET",
                  "UPDATE_BUDGET",
                  "DESTROY_BUDGET",
                  "STORE_UPDATE_BUDGET_LIMIT",
                ],
              },
              example: ["STORE_TRANSACTION", "UPDATE_TRANSACTION"],
            },
            responses: {
              type: "array",
              minItems: 1,
              maxItems: 1,
              items: {
                type: "string",
                nullable: false,
                example: "RELEVANT",
                description:
                  "Indicator for what Firefly III will deliver to the webhook URL.",
                enum: [
                  "TRANSACTIONS",
                  "ACCOUNTS",
                  "BUDGET",
                  "RELEVANT",
                  "NONE",
                ],
              },
              example: ["TRANSACTIONS"],
            },
            deliveries: {
              type: "array",
              minItems: 1,
              maxItems: 1,
              items: {
                type: "string",
                nullable: false,
                example: ["JSON"],
                description: "Format of the delivered response.",
                enum: ["JSON"],
              },
              example: ["JSON"],
            },
            url: {
              type: "string",
              example: "https://example.com",
              description: "The URL of the webhook. Has to start with `https`.",
            },
          },
          description:
            "JSON array or key=value pairs with the necessary webhook information. See the model for the exact specifications.",
        },
      },
      required: ["requestBody"],
    },
    zodShape: {
      requestBody: z
        .object({
          active: z
            .boolean()
            .describe("Boolean to indicate if the webhook is active")
            .optional(),
          title: z
            .string()
            .describe("A title for the webhook for easy recognition."),
          triggers: z
            .array(
              z
                .enum([
                  "ANY",
                  "STORE_TRANSACTION",
                  "UPDATE_TRANSACTION",
                  "DESTROY_TRANSACTION",
                  "STORE_BUDGET",
                  "UPDATE_BUDGET",
                  "DESTROY_BUDGET",
                  "STORE_UPDATE_BUDGET_LIMIT",
                ])
                .describe("The trigger for the webhook.")
            )
            .min(1)
            .max(3)
            .optional(),
          responses: z
            .array(
              z
                .enum([
                  "TRANSACTIONS",
                  "ACCOUNTS",
                  "BUDGET",
                  "RELEVANT",
                  "NONE",
                ])
                .describe(
                  "Indicator for what Firefly III will deliver to the webhook URL."
                )
            )
            .min(1)
            .max(1)
            .optional(),
          deliveries: z
            .array(
              z.literal("JSON").describe("Format of the delivered response.")
            )
            .min(1)
            .max(1)
            .optional(),
          url: z
            .string()
            .describe("The URL of the webhook. Has to start with `https`."),
        })
        .describe(
          "JSON array or key=value pairs with the necessary webhook information. See the model for the exact specifications."
        ),
    },
    method: "post",
    pathTemplate: "/v1/webhooks",
    executionParameters: [],
    requestBodyContentType: "application/json",
    operationId: "store_webhook",
  },
  {
    name: "get_webhook",
    tags: ["webhooks"],
    description: "Gets all info of a single webhook.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID. Example: 123",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The webhook ID. Example: 123") },
    method: "get",
    pathTemplate: "/v1/webhooks/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "get_webhook",
  },
  {
    name: "update_webhook",
    tags: ["webhooks"],
    description:
      'Update an existing webhook\'s information. If you wish to reset the secret, submit any value as the "secret". Firefly III will take this as a hint and reset the secret of the webhook.',
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID. Example: 123",
        },
        requestBody: {
          title: "A single webhook (update)",
          type: "object",
          properties: {
            active: {
              type: "boolean",
              example: false,
              description: "Boolean to indicate if the webhook is active",
            },
            title: {
              type: "string",
              example: "Update magic mirror on new transaction",
              description: "A title for the webhook for easy recognition.",
            },
            secret: {
              type: "string",
              example: "iMLZLtLx2JHWhK9Dtyuoqyir",
              description:
                "A 24-character secret for the webhook. It's generated by Firefly III when saving a new webhook. If you submit a new secret through the PUT endpoint it will generate a new secret for the selected webhook, a new secret bearing no relation to whatever you just submitted.",
            },
            triggers: {
              type: "array",
              minItems: 1,
              maxItems: 3,
              items: {
                type: "string",
                nullable: false,
                example: "DESTROY_TRANSACTION",
                description: "The trigger for the webhook.",
                enum: [
                  "ANY",
                  "STORE_TRANSACTION",
                  "UPDATE_TRANSACTION",
                  "DESTROY_TRANSACTION",
                  "STORE_BUDGET",
                  "UPDATE_BUDGET",
                  "DESTROY_BUDGET",
                  "STORE_UPDATE_BUDGET_LIMIT",
                ],
              },
              example: ["STORE_TRANSACTION", "UPDATE_TRANSACTION"],
            },
            responses: {
              type: "array",
              minItems: 1,
              maxItems: 1,
              items: {
                type: "string",
                nullable: false,
                example: "RELEVANT",
                description:
                  "Indicator for what Firefly III will deliver to the webhook URL.",
                enum: [
                  "TRANSACTIONS",
                  "ACCOUNTS",
                  "BUDGET",
                  "RELEVANT",
                  "NONE",
                ],
              },
              example: ["TRANSACTIONS"],
            },
            deliveries: {
              type: "array",
              minItems: 1,
              maxItems: 1,
              items: {
                type: "string",
                nullable: false,
                example: ["JSON"],
                description: "Format of the delivered response.",
                enum: ["JSON"],
              },
              example: ["JSON"],
            },
            url: {
              type: "string",
              example: "https://example.com",
              description: "The URL of the webhook. Has to start with `https`.",
            },
          },
          description:
            "JSON array with updated webhook information. See the model for the exact specifications.",
        },
      },
      required: ["id", "requestBody"],
    },
    zodShape: {
      id: z.string().describe("The webhook ID. Example: 123"),
      requestBody: z
        .object({
          active: z
            .boolean()
            .describe("Boolean to indicate if the webhook is active")
            .optional(),
          title: z
            .string()
            .describe("A title for the webhook for easy recognition.")
            .optional(),
          secret: z
            .string()
            .describe(
              "A 24-character secret for the webhook. It's generated by Firefly III when saving a new webhook. If you submit a new secret through the PUT endpoint it will generate a new secret for the selected webhook, a new secret bearing no relation to whatever you just submitted."
            )
            .optional(),
          triggers: z
            .array(
              z
                .enum([
                  "ANY",
                  "STORE_TRANSACTION",
                  "UPDATE_TRANSACTION",
                  "DESTROY_TRANSACTION",
                  "STORE_BUDGET",
                  "UPDATE_BUDGET",
                  "DESTROY_BUDGET",
                  "STORE_UPDATE_BUDGET_LIMIT",
                ])
                .describe("The trigger for the webhook.")
            )
            .min(1)
            .max(3)
            .optional(),
          responses: z
            .array(
              z
                .enum([
                  "TRANSACTIONS",
                  "ACCOUNTS",
                  "BUDGET",
                  "RELEVANT",
                  "NONE",
                ])
                .describe(
                  "Indicator for what Firefly III will deliver to the webhook URL."
                )
            )
            .min(1)
            .max(1)
            .optional(),
          deliveries: z
            .array(
              z.literal("JSON").describe("Format of the delivered response.")
            )
            .min(1)
            .max(1)
            .optional(),
          url: z
            .string()
            .describe("The URL of the webhook. Has to start with `https`.")
            .optional(),
        })
        .describe(
          "JSON array with updated webhook information. See the model for the exact specifications."
        ),
    },
    method: "put",
    pathTemplate: "/v1/webhooks/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    requestBodyContentType: "application/json",
    operationId: "update_webhook",
  },
  {
    name: "delete_webhook",
    tags: ["webhooks"],
    description: "Delete a webhook.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "123",
          description: "The webhook ID. Example: 123",
        },
      },
      required: ["id"],
    },
    zodShape: { id: z.string().describe("The webhook ID. Example: 123") },
    method: "delete",
    pathTemplate: "/v1/webhooks/{id}",
    executionParameters: [
      {
        name: "id",
        in: "path",
      },
    ],
    operationId: "delete_webhook",
  },
];

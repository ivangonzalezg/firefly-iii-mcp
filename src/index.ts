#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { tools } from "./tools.js";

import axios from "axios";
import { DEFAULT_PRESET_TAGS, getPresetTags, presetExists } from "./presets.js";

const baseURL = process.env.FIREFLY_III_BASE_URL;

const pat = process.env.FIREFLY_III_PAT;

const preset = process.env.FIREFLY_III_PRESET;

const enableTags =
  preset && presetExists(preset) ? getPresetTags(preset) : DEFAULT_PRESET_TAGS;

const server = new McpServer({
  name: "Firefly III MCP",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

tools
  .filter(
    (tool) =>
      enableTags.length === 0 ||
      enableTags.some((tag) => tool.tags.includes(tag))
  )
  .forEach((tool) => {
    server.tool(tool.name, tool.description, tool.zodShape, async (args) => {
      try {
        const requestMethod = tool.method.toUpperCase();
        const requestHeaders: Record<string, any> = {
          Accept: "application/json",
          Authorization: `Bearer ${pat}`,
        };

        const requestQuery: Record<string, any> = {};
        const requestBody = args["requestBody"];

        if (tool.requestBodyContentType) {
          requestHeaders["content-type"] = tool.requestBodyContentType;
        }

        let url = `/api${tool.pathTemplate}`;

        tool.executionParameters.forEach((executionParameter) => {
          const value = args[executionParameter.name];
          if (value) {
            if (executionParameter.in === "path") {
              url = url.replace(
                `{${executionParameter.name}}`,
                encodeURIComponent(String(value))
              );
            } else if (executionParameter.in === "query") {
              requestQuery[executionParameter.name] = value;
            }
          }
        });

        const requestUrl = requestQuery
          ? `${url}?${new URLSearchParams(requestQuery).toString()}`
          : url;

        const { data } = await axios({
          baseURL,
          method: requestMethod,
          url: requestUrl,
          data: requestBody ? JSON.stringify(requestBody) : undefined,
          headers: requestHeaders,
        });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        console.error(error);
        return {
          content: [
            {
              type: "text",
              text: error?.response?.data?.message || error.message,
            },
          ],
        };
      }
    });
  });

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Weather MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});

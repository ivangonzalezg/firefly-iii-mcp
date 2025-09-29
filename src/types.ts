import { ZodRawShape } from "zod";

interface ExecutionParameter {
  name: string;
  in: "path" | "query";
}

export interface McpToolDefinition {
  name: string;
  tags: string[];
  description: string;
  inputSchema: any;
  zodShape: ZodRawShape;
  method: string;
  pathTemplate: string;
  executionParameters: ExecutionParameter[];
  requestBodyContentType?: string;
  operationId: string;
}

type JsonValue = string | number | boolean | null | JsonArray | JsonObject;
interface JsonArray extends Array<JsonValue> {}
interface JsonObject { [key: string]: JsonValue; }

/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/v1/prompt/query": {
    post: operations["GetPrompts"];
  };
  "/v1/prompt/{promptId}/query": {
    post: operations["GetPrompt"];
  };
  "/v1/prompt/{promptId}": {
    delete: operations["DeletePrompt"];
  };
  "/v1/prompt/version/{promptVersionId}/subversion": {
    post: operations["CreateSubversion"];
  };
  "/v1/prompt/version/{promptVersionId}/inputs/query": {
    post: operations["GetInputs"];
  };
  "/v1/prompt/{promptId}/versions/query": {
    post: operations["GetPromptVersions"];
  };
  "/v1/settings/query": {
    get: operations["GetSettings"];
  };
  "/v1/key/generateHash": {
    post: operations["GenerateHash"];
  };
  "/v1/dataset/{datasetId}/fine-tune": {
    post: operations["DatasetFineTune"];
  };
  "/v1/fine-tune": {
    post: operations["FineTune"];
  };
  "/v1/fine-tune/{jobId}/stats": {
    get: operations["FineTuneJobStats"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    PromptsResult: {
      id: string;
      user_defined_id: string;
      description: string;
      pretty_name: string;
      created_at: string;
      /** Format: double */
      major_version: number;
    };
    "ResultSuccess_PromptsResult-Array_": {
      data: components["schemas"]["PromptsResult"][];
      /** @enum {number|null} */
      error: null;
    };
    ResultError_string_: {
      /** @enum {number|null} */
      data: null;
      error: string;
    };
    "Result_PromptsResult-Array.string_": components["schemas"]["ResultSuccess_PromptsResult-Array_"] | components["schemas"]["ResultError_string_"];
    /** @description Make all properties in T optional */
    Partial_TextOperators_: {
      "not-equals"?: string;
      equals?: string;
      like?: string;
      ilike?: string;
      contains?: string;
      "not-contains"?: string;
    };
    /** @description Make all properties in T optional */
    Partial_PromptToOperators_: {
      id?: components["schemas"]["Partial_TextOperators_"];
      user_defined_id?: components["schemas"]["Partial_TextOperators_"];
    };
    /** @description From T, pick a set of properties whose keys are in the union K */
    "Pick_FilterLeaf.prompt_v2_": {
      prompt_v2?: components["schemas"]["Partial_PromptToOperators_"];
    };
    FilterLeafSubset_prompt_v2_: components["schemas"]["Pick_FilterLeaf.prompt_v2_"];
    PromptsFilterNode: components["schemas"]["FilterLeafSubset_prompt_v2_"] | components["schemas"]["PromptsFilterBranch"] | "all";
    PromptsFilterBranch: {
      right: components["schemas"]["PromptsFilterNode"];
      /** @enum {string} */
      operator: "or" | "and";
      left: components["schemas"]["PromptsFilterNode"];
    };
    PromptsQueryParams: {
      filter: components["schemas"]["PromptsFilterNode"];
    };
    PromptResult: {
      id: string;
      user_defined_id: string;
      description: string;
      pretty_name: string;
      /** Format: double */
      major_version: number;
      latest_version_id: string;
      latest_model_used: string;
      created_at: string;
      last_used: string;
      versions: string[];
    };
    ResultSuccess_PromptResult_: {
      data: components["schemas"]["PromptResult"];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptResult.string_": components["schemas"]["ResultSuccess_PromptResult_"] | components["schemas"]["ResultError_string_"];
    PromptQueryParams: {
      timeFilter: {
        end: string;
        start: string;
      };
    };
    PromptVersionResult: {
      id: string;
      /** Format: double */
      minor_version: number;
      /** Format: double */
      major_version: number;
      helicone_template: string;
      prompt_v2: string;
      model: string;
    };
    ResultSuccess_PromptVersionResult_: {
      data: components["schemas"]["PromptVersionResult"];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptVersionResult.string_": components["schemas"]["ResultSuccess_PromptVersionResult_"] | components["schemas"]["ResultError_string_"];
    PromptCreateSubversionParams: {
      newHeliconeTemplate: unknown;
    };
    /** @description Construct a type with a set of properties K of type T */
    "Record_string.string_": {
      [key: string]: string;
    };
    PromptInputRecord: {
      id: string;
      inputs: components["schemas"]["Record_string.string_"];
      source_request: string;
      prompt_version: string;
      created_at: string;
      response_body: string;
    };
    "ResultSuccess_PromptInputRecord-Array_": {
      data: components["schemas"]["PromptInputRecord"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptInputRecord-Array.string_": components["schemas"]["ResultSuccess_PromptInputRecord-Array_"] | components["schemas"]["ResultError_string_"];
    "ResultSuccess_PromptVersionResult-Array_": {
      data: components["schemas"]["PromptVersionResult"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptVersionResult-Array.string_": components["schemas"]["ResultSuccess_PromptVersionResult-Array_"] | components["schemas"]["ResultError_string_"];
    GenerateHashQueryParams: {
      apiKey: string;
      userId: string;
      keyName: string;
    };
    FineTuneResult: {
      error: string;
    } | {
      data: {
        url: string;
        fineTuneJob: string;
      };
      success: boolean;
    };
    FineTuneBodyParams: {
      providerKeyId: string;
    };
    FineTuneBody: {
      providerKeyId: string;
    };
  };
  responses: {
  };
  parameters: {
  };
  requestBodies: {
  };
  headers: {
  };
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  GetPrompts: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromptsQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptsResult-Array.string_"];
        };
      };
    };
  };
  GetPrompt: {
    parameters: {
      path: {
        promptId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromptQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptResult.string_"];
        };
      };
    };
  };
  DeletePrompt: {
    parameters: {
      path: {
        promptId: string;
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  CreateSubversion: {
    parameters: {
      path: {
        promptVersionId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromptCreateSubversionParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptVersionResult.string_"];
        };
      };
    };
  };
  GetInputs: {
    parameters: {
      path: {
        promptVersionId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          random?: boolean;
          /** Format: double */
          limit: number;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptInputRecord-Array.string_"];
        };
      };
    };
  };
  GetPromptVersions: {
    parameters: {
      path: {
        promptId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": Record<string, never>;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptVersionResult-Array.string_"];
        };
      };
    };
  };
  GetSettings: {
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            useAzureForExperiment: boolean;
          };
        };
      };
    };
  };
  GenerateHash: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["GenerateHashQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            error?: {
              details?: string;
              message?: string;
            };
            success?: boolean;
          };
        };
      };
    };
  };
  DatasetFineTune: {
    parameters: {
      path: {
        datasetId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["FineTuneBodyParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["FineTuneResult"];
        };
      };
    };
  };
  FineTune: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["FineTuneBody"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            error: string;
          } | {
            data: {
              url: string;
              fineTuneJob: string;
            };
            success: boolean;
          };
        };
      };
    };
  };
  FineTuneJobStats: {
    parameters: {
      path: {
        jobId: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            error: string;
          } | {
            events: unknown;
            job: unknown;
          };
        };
      };
    };
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.28.14
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * Resources Types define the technology that Applications can have dependencies on.
 * 
 * Each Resource Type also defines a set of input parameters (`inputs_schema`), and a set of output data (`outputs_schema`). When provisioning a resource, these are treated as inputs and outputs respectively.
 * @export
 * @interface ResourceTypeResponse
 */
export interface ResourceTypeResponse {
    /**
     * Category name (used to group similar resources on the UI).
     * @type {string}
     * @memberof ResourceTypeResponse
     */
    category: string;
    /**
     * A JSON Schema specifying the type-specific parameters for the driver (input).
     * @type {{ [key: string]: any; }}
     * @memberof ResourceTypeResponse
     */
    inputs_schema: { [key: string]: any; };
    /**
     * Display name.
     * @type {string}
     * @memberof ResourceTypeResponse
     */
    name: string;
    /**
     * A JSON Schema specifying the type-specific data passed to the deployment (output).
     * @type {{ [key: string]: any; }}
     * @memberof ResourceTypeResponse
     */
    outputs_schema: { [key: string]: any; };
    /**
     * Unique resource type identifier (system-wide, across all organizations).
     * @type {string}
     * @memberof ResourceTypeResponse
     */
    type: string;
    /**
     * Kind of dependency between resource of this type and a workload. It should be one of: `direct`, `indirect`, `implicit`.
     * @type {string}
     * @memberof ResourceTypeResponse
     */
    use: string;
}

/**
 * Check if a given object implements the ResourceTypeResponse interface.
 */
export function instanceOfResourceTypeResponse(value: object): boolean {
    if (!('category' in value)) return false;
    if (!('inputs_schema' in value)) return false;
    if (!('name' in value)) return false;
    if (!('outputs_schema' in value)) return false;
    if (!('type' in value)) return false;
    if (!('use' in value)) return false;
    return true;
}

export function ResourceTypeResponseFromJSON(json: any): ResourceTypeResponse {
    return ResourceTypeResponseFromJSONTyped(json, false);
}

export function ResourceTypeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceTypeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'category': json['category'],
        'inputs_schema': json['inputs_schema'],
        'name': json['name'],
        'outputs_schema': json['outputs_schema'],
        'type': json['type'],
        'use': json['use'],
    };
}

export function ResourceTypeResponseToJSON(value?: ResourceTypeResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'category': value['category'],
        'inputs_schema': value['inputs_schema'],
        'name': value['name'],
        'outputs_schema': value['outputs_schema'],
        'type': value['type'],
        'use': value['use'],
    };
}


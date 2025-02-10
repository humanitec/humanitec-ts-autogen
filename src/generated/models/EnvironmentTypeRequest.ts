/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.3
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * Environment Types are a way of grouping and managing Environments. Every Environment has exactly 1 Environment Type.
 * 
 * Environment Types can be used with External Resources to manage where resources such as databases are provisioned or even which cluster to deploy to.
 * @export
 * @interface EnvironmentTypeRequest
 */
export interface EnvironmentTypeRequest {
    /**
     * A Human-readable description of the Environment Type
     * @type {string}
     * @memberof EnvironmentTypeRequest
     */
    description?: string;
    /**
     * The ID of the Environment Type. (Must be unique within an Organization.)
     * @type {string}
     * @memberof EnvironmentTypeRequest
     */
    id: string;
}

/**
 * Check if a given object implements the EnvironmentTypeRequest interface.
 */
export function instanceOfEnvironmentTypeRequest(value: object): boolean {
    if (!('id' in value)) return false;
    return true;
}

export function EnvironmentTypeRequestFromJSON(json: any): EnvironmentTypeRequest {
    return EnvironmentTypeRequestFromJSONTyped(json, false);
}

export function EnvironmentTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentTypeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'],
    };
}

export function EnvironmentTypeRequestToJSON(value?: EnvironmentTypeRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'id': value['id'],
    };
}


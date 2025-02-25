/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.4
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * A deploy condition for the workload
 * 
 * Possible values for "when" are: - "before", deployed before other workloads - "deploy", deployed in-parallel with other workloads (default) - "after", deployed after other workloads
 * 
 * Possible values for "success" are: - "deploy", workload deployed - "available", workload available - "complete", workload complete (often used with jobs)
 * @export
 * @interface DeployConditionRequest
 */
export interface DeployConditionRequest {
    /**
     * 
     * @type {string}
     * @memberof DeployConditionRequest
     */
    success?: string;
    /**
     * 
     * @type {number}
     * @memberof DeployConditionRequest
     */
    timeout?: number;
    /**
     * 
     * @type {string}
     * @memberof DeployConditionRequest
     */
    when?: string;
}

/**
 * Check if a given object implements the DeployConditionRequest interface.
 */
export function instanceOfDeployConditionRequest(value: object): boolean {
    return true;
}

export function DeployConditionRequestFromJSON(json: any): DeployConditionRequest {
    return DeployConditionRequestFromJSONTyped(json, false);
}

export function DeployConditionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeployConditionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'timeout': json['timeout'] == null ? undefined : json['timeout'],
        'when': json['when'] == null ? undefined : json['when'],
    };
}

export function DeployConditionRequestToJSON(value?: DeployConditionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'success': value['success'],
        'timeout': value['timeout'],
        'when': value['when'],
    };
}


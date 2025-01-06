/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.27
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { DeploymentResponse } from './DeploymentResponse.js';
import {
    DeploymentResponseFromJSON,
    DeploymentResponseFromJSONTyped,
    DeploymentResponseToJSON,
} from './DeploymentResponse.js';

/**
 * Environments are independent spaces where Applications can run. An Application is always deployed into an Environment.
 * @export
 * @interface EnvironmentResponse
 */
export interface EnvironmentResponse {
    /**
     * The timestamp in UTC of when the Environment was created.
     * @type {Date}
     * @memberof EnvironmentResponse
     */
    created_at: Date;
    /**
     * The user who created the Environment
     * @type {string}
     * @memberof EnvironmentResponse
     */
    created_by: string;
    /**
     * 
     * @type {DeploymentResponse}
     * @memberof EnvironmentResponse
     */
    from_deploy?: DeploymentResponse;
    /**
     * The ID the Environment is referenced as.
     * @type {string}
     * @memberof EnvironmentResponse
     */
    id: string;
    /**
     * 
     * @type {DeploymentResponse}
     * @memberof EnvironmentResponse
     */
    last_deploy?: DeploymentResponse;
    /**
     * The Human-friendly name for the Environment.
     * @type {string}
     * @memberof EnvironmentResponse
     */
    name: string;
    /**
     * The Environment Type. This is used for organizing and managing Environments.
     * @type {string}
     * @memberof EnvironmentResponse
     */
    type: string;
}

/**
 * Check if a given object implements the EnvironmentResponse interface.
 */
export function instanceOfEnvironmentResponse(value: object): boolean {
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function EnvironmentResponseFromJSON(json: any): EnvironmentResponse {
    return EnvironmentResponseFromJSONTyped(json, false);
}

export function EnvironmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'created_by': json['created_by'],
        'from_deploy': json['from_deploy'] == null ? undefined : DeploymentResponseFromJSON(json['from_deploy']),
        'id': json['id'],
        'last_deploy': json['last_deploy'] == null ? undefined : DeploymentResponseFromJSON(json['last_deploy']),
        'name': json['name'],
        'type': json['type'],
    };
}

export function EnvironmentResponseToJSON(value?: EnvironmentResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['created_at']).toISOString()),
        'created_by': value['created_by'],
        'from_deploy': DeploymentResponseToJSON(value['from_deploy']),
        'id': value['id'],
        'last_deploy': DeploymentResponseToJSON(value['last_deploy']),
        'name': value['name'],
        'type': value['type'],
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.28.4
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { EnvironmentBaseResponse } from './EnvironmentBaseResponse.js';
import {
    EnvironmentBaseResponseFromJSON,
    EnvironmentBaseResponseFromJSONTyped,
    EnvironmentBaseResponseToJSON,
} from './EnvironmentBaseResponse.js';

/**
 * An Application is a collection of Workloads that work together. When deployed, all Workloads in an Application are deployed to the same namespace.
 * 
 * Apps are the root of the configuration tree holding Environments, Deployments, Shared Values, and Secrets.
 * @export
 * @interface ApplicationResponse
 */
export interface ApplicationResponse {
    /**
     * The timestamp in UTC indicates when the Application was created.
     * @type {string}
     * @memberof ApplicationResponse
     */
    created_at: string;
    /**
     * The user who created the Application.
     * @type {string}
     * @memberof ApplicationResponse
     */
    created_by: string;
    /**
     * The Environments associated with the Application.
     * @type {Array<EnvironmentBaseResponse>}
     * @memberof ApplicationResponse
     */
    envs: Array<EnvironmentBaseResponse>;
    /**
     * The ID which refers to a specific application.
     * @type {string}
     * @memberof ApplicationResponse
     */
    id: string;
    /**
     * The Human-friendly name for the Application.
     * @type {string}
     * @memberof ApplicationResponse
     */
    name: string;
    /**
     * The Organization id of this Application
     * @type {string}
     * @memberof ApplicationResponse
     */
    org_id: string;
    /**
     * The status of the application
     * @type {string}
     * @memberof ApplicationResponse
     */
    status: ApplicationResponseStatusEnum;
    /**
     * The timestamp in UTC of when the Environment status was last changed.
     * @type {Date}
     * @memberof ApplicationResponse
     */
    status_changed_at: Date;
    /**
     * The message associated with the status of the environment
     * @type {string}
     * @memberof ApplicationResponse
     */
    status_message?: string;
}

/**
* @export
* @enum {string}
*/
export enum ApplicationResponseStatusEnum {
    active = 'active',
    deleting = 'deleting',
    unknown_default_open_api = '11184809'
}


/**
 * Check if a given object implements the ApplicationResponse interface.
 */
export function instanceOfApplicationResponse(value: object): boolean {
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('envs' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('org_id' in value)) return false;
    if (!('status' in value)) return false;
    if (!('status_changed_at' in value)) return false;
    return true;
}

export function ApplicationResponseFromJSON(json: any): ApplicationResponse {
    return ApplicationResponseFromJSONTyped(json, false);
}

export function ApplicationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'],
        'created_by': json['created_by'],
        'envs': ((json['envs'] as Array<any>).map(EnvironmentBaseResponseFromJSON)),
        'id': json['id'],
        'name': json['name'],
        'org_id': json['org_id'],
        'status': json['status'],
        'status_changed_at': (new Date(json['status_changed_at'])),
        'status_message': json['status_message'] == null ? undefined : json['status_message'],
    };
}

export function ApplicationResponseToJSON(value?: ApplicationResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': value['created_at'],
        'created_by': value['created_by'],
        'envs': ((value['envs'] as Array<any>).map(EnvironmentBaseResponseToJSON)),
        'id': value['id'],
        'name': value['name'],
        'org_id': value['org_id'],
        'status': value['status'],
        'status_changed_at': ((value['status_changed_at']).toISOString()),
        'status_message': value['status_message'],
    };
}


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
/**
 * Details about a terminated container.
 * @export
 * @interface RuntimeInfoContainerStateTerminated
 */
export interface RuntimeInfoContainerStateTerminated {
    /**
     * Exit status from the last termination of the container.
     * @type {number}
     * @memberof RuntimeInfoContainerStateTerminated
     */
    exit_code?: number;
    /**
     * Signal from the last termination of the container.
     * @type {number}
     * @memberof RuntimeInfoContainerStateTerminated
     */
    signal?: number;
    /**
     * Reason from the last termination of the container.
     * @type {string}
     * @memberof RuntimeInfoContainerStateTerminated
     */
    reason?: string;
    /**
     * Message regarding the last termination of the container.
     * @type {string}
     * @memberof RuntimeInfoContainerStateTerminated
     */
    message?: string;
    /**
     * Time at which previous execution of the container started.
     * @type {Date}
     * @memberof RuntimeInfoContainerStateTerminated
     */
    started_at?: Date;
    /**
     * Time at which the container last terminated.
     * @type {Date}
     * @memberof RuntimeInfoContainerStateTerminated
     */
    finished_at?: Date;
    /**
     * Container's ID in the format '<type>://<container_id>'.
     * @type {string}
     * @memberof RuntimeInfoContainerStateTerminated
     */
    container_id?: string;
}

/**
 * Check if a given object implements the RuntimeInfoContainerStateTerminated interface.
 */
export function instanceOfRuntimeInfoContainerStateTerminated(value: object): boolean {
    return true;
}

export function RuntimeInfoContainerStateTerminatedFromJSON(json: any): RuntimeInfoContainerStateTerminated {
    return RuntimeInfoContainerStateTerminatedFromJSONTyped(json, false);
}

export function RuntimeInfoContainerStateTerminatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeInfoContainerStateTerminated {
    if (json == null) {
        return json;
    }
    return {
        
        'exit_code': json['exit_code'] == null ? undefined : json['exit_code'],
        'signal': json['signal'] == null ? undefined : json['signal'],
        'reason': json['reason'] == null ? undefined : json['reason'],
        'message': json['message'] == null ? undefined : json['message'],
        'started_at': json['started_at'] == null ? undefined : (new Date(json['started_at'])),
        'finished_at': json['finished_at'] == null ? undefined : (new Date(json['finished_at'])),
        'container_id': json['container_id'] == null ? undefined : json['container_id'],
    };
}

export function RuntimeInfoContainerStateTerminatedToJSON(value?: RuntimeInfoContainerStateTerminated | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'exit_code': value['exit_code'],
        'signal': value['signal'],
        'reason': value['reason'],
        'message': value['message'],
        'started_at': value['started_at'] == null ? undefined : ((value['started_at']).toISOString()),
        'finished_at': value['finished_at'] == null ? undefined : ((value['finished_at']).toISOString()),
        'container_id': value['container_id'],
    };
}


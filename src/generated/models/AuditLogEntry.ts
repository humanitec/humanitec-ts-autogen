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
 * An entry in the audit log
 * @export
 * @interface AuditLogEntry
 */
export interface AuditLogEntry {
    /**
     * The date and time when the event was recorded.
     * @type {Date}
     * @memberof AuditLogEntry
     */
    at: Date;
    /**
     * The id of the Organization this event occurred in.
     * @type {string}
     * @memberof AuditLogEntry
     */
    org_id?: string;
    /**
     * The id of the User who triggered the event.
     * @type {string}
     * @memberof AuditLogEntry
     */
    user_id: string;
    /**
     * The HTTP method that was requested. Only POST, PATCH, PUT, and DELETE are audited.
     * @type {string}
     * @memberof AuditLogEntry
     */
    request_method: string;
    /**
     * The URL path that was called.
     * @type {string}
     * @memberof AuditLogEntry
     */
    request_path: string;
    /**
     * The status code of the response. Only successful responses are audited.
     * @type {number}
     * @memberof AuditLogEntry
     */
    response_status: number;
}

/**
 * Check if a given object implements the AuditLogEntry interface.
 */
export function instanceOfAuditLogEntry(value: object): boolean {
    if (!('at' in value)) return false;
    if (!('user_id' in value)) return false;
    if (!('request_method' in value)) return false;
    if (!('request_path' in value)) return false;
    if (!('response_status' in value)) return false;
    return true;
}

export function AuditLogEntryFromJSON(json: any): AuditLogEntry {
    return AuditLogEntryFromJSONTyped(json, false);
}

export function AuditLogEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditLogEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'at': (new Date(json['at'])),
        'org_id': json['org_id'] == null ? undefined : json['org_id'],
        'user_id': json['user_id'],
        'request_method': json['request_method'],
        'request_path': json['request_path'],
        'response_status': json['response_status'],
    };
}

export function AuditLogEntryToJSON(value?: AuditLogEntry | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'at': ((value['at']).toISOString()),
        'org_id': value['org_id'],
        'user_id': value['user_id'],
        'request_method': value['request_method'],
        'request_path': value['request_path'],
        'response_status': value['response_status'],
    };
}


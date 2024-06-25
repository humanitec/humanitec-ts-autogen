/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types All of the Humanitec API unless explicitly only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning** | | --- | --- | | `200` | Success | | `201` | Success (In future, `201` will be replaced by `200`) | | `204` | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` should be regarded as an error which can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning** | | --- | --- | | `400` | General error. (Body will contain details) | | `401` | Attempt to access protected resource without `Authorization` Header. | | `403` | The `Bearer` or `JWT` does not grant access to the requested resource. | | `404` | Resource not found. | | `405` | Method not allowed | | `409` | Conflict. Usually indicated a resource with that ID already exists. | | `422` | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429` | Too many requests - request rate limit has been reached. | | `500` | Internal Error. If it occurs repeatedly, contact support. | 
 *
 * The version of the OpenAPI document: 0.26.6
 * Contact: apiteam@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * ResourceAccount represents the account being used to access a resource.
 * 
 * Resource Accounts hold credentials that are required to provision and manage resources.
 * @export
 * @interface ResourceAccountResponse
 */
export interface ResourceAccountResponse {
    /**
     * The timestamp of when the account was created.
     * @type {Date}
     * @memberof ResourceAccountResponse
     */
    created_at: Date;
    /**
     * The ID of the user who created the account.
     * @type {string}
     * @memberof ResourceAccountResponse
     */
    created_by: string;
    /**
     * Unique identifier for the account (in scope of the organization it belongs to).
     * @type {string}
     * @memberof ResourceAccountResponse
     */
    id: string;
    /**
     * Indicates if this account is being used (referenced) by any resource definition.
     * @type {boolean}
     * @memberof ResourceAccountResponse
     */
    is_used: boolean;
    /**
     * Display name.
     * @type {string}
     * @memberof ResourceAccountResponse
     */
    name: string;
    /**
     * The type of the account
     * @type {string}
     * @memberof ResourceAccountResponse
     */
    type: string;
}

/**
 * Check if a given object implements the ResourceAccountResponse interface.
 */
export function instanceOfResourceAccountResponse(value: object): boolean {
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('id' in value)) return false;
    if (!('is_used' in value)) return false;
    if (!('name' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function ResourceAccountResponseFromJSON(json: any): ResourceAccountResponse {
    return ResourceAccountResponseFromJSONTyped(json, false);
}

export function ResourceAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceAccountResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'created_by': json['created_by'],
        'id': json['id'],
        'is_used': json['is_used'],
        'name': json['name'],
        'type': json['type'],
    };
}

export function ResourceAccountResponseToJSON(value?: ResourceAccountResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['created_at']).toISOString()),
        'created_by': value['created_by'],
        'id': value['id'],
        'is_used': value['is_used'],
        'name': value['name'],
        'type': value['type'],
    };
}


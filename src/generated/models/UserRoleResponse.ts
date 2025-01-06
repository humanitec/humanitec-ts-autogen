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
/**
 * UserRole holds the mapping of role to user for a particular object.
 * @export
 * @interface UserRoleResponse
 */
export interface UserRoleResponse {
    /**
     * The role that this user holds
     * @type {string}
     * @memberof UserRoleResponse
     */
    role: string;
    /**
     * The user ID that hold the role
     * @type {string}
     * @memberof UserRoleResponse
     */
    user?: string;
    /**
     * The time the user was first registered with Humanitec
     * @type {string}
     * @memberof UserRoleResponse
     */
    created_at: string;
    /**
     * The email address of the user from the profile
     * @type {string}
     * @memberof UserRoleResponse
     */
    email?: string;
    /**
     * The User ID for this user
     * @type {string}
     * @memberof UserRoleResponse
     */
    id: string;
    /**
     * The status of an invitation (If applicable)
     * @type {string}
     * @memberof UserRoleResponse
     */
    invite?: string;
    /**
     * The name the user goes by
     * @type {string}
     * @memberof UserRoleResponse
     */
    name: string;
    /**
     * The type of the account. Could be user, service or system
     * @type {string}
     * @memberof UserRoleResponse
     */
    type: string;
}

/**
 * Check if a given object implements the UserRoleResponse interface.
 */
export function instanceOfUserRoleResponse(value: object): boolean {
    if (!('role' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function UserRoleResponseFromJSON(json: any): UserRoleResponse {
    return UserRoleResponseFromJSONTyped(json, false);
}

export function UserRoleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRoleResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'role': json['role'],
        'user': json['user'] == null ? undefined : json['user'],
        'created_at': json['created_at'],
        'email': json['email'] == null ? undefined : json['email'],
        'id': json['id'],
        'invite': json['invite'] == null ? undefined : json['invite'],
        'name': json['name'],
        'type': json['type'],
    };
}

export function UserRoleResponseToJSON(value?: UserRoleResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'role': value['role'],
        'user': value['user'],
        'created_at': value['created_at'],
        'email': value['email'],
        'id': value['id'],
        'invite': value['invite'],
        'name': value['name'],
        'type': value['type'],
    };
}


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
 * UserInvite stores the invitation details.
 * @export
 * @interface UserInviteResponse
 */
export interface UserInviteResponse {
    /**
     * The timestamp this invitation was created.
     * @type {string}
     * @memberof UserInviteResponse
     */
    created_at: string;
    /**
     * The ID of the user who created this invitation.
     * @type {string}
     * @memberof UserInviteResponse
     */
    created_by: string;
    /**
     * The email address of the user from the profile.
     * @type {string}
     * @memberof UserInviteResponse
     */
    email?: string;
    /**
     * The timestamp this invitation would expire.
     * @type {string}
     * @memberof UserInviteResponse
     */
    expires_at: string;
    /**
     * The User ID for this user.
     * @type {string}
     * @memberof UserInviteResponse
     */
    user_id: string;
}

/**
 * Check if a given object implements the UserInviteResponse interface.
 */
export function instanceOfUserInviteResponse(value: object): boolean {
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('expires_at' in value)) return false;
    if (!('user_id' in value)) return false;
    return true;
}

export function UserInviteResponseFromJSON(json: any): UserInviteResponse {
    return UserInviteResponseFromJSONTyped(json, false);
}

export function UserInviteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInviteResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'],
        'created_by': json['created_by'],
        'email': json['email'] == null ? undefined : json['email'],
        'expires_at': json['expires_at'],
        'user_id': json['user_id'],
    };
}

export function UserInviteResponseToJSON(value?: UserInviteResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': value['created_at'],
        'created_by': value['created_by'],
        'email': value['email'],
        'expires_at': value['expires_at'],
        'user_id': value['user_id'],
    };
}


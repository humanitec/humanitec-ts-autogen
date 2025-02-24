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
 * PublicKey stores a Public Key an organization shares with Humanitec.
 * @export
 * @interface PublicKey
 */
export interface PublicKey {
    /**
     * 
     * @type {string}
     * @memberof PublicKey
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PublicKey
     */
    key: string;
    /**
     * 
     * @type {Date}
     * @memberof PublicKey
     */
    created_at: Date;
    /**
     * 
     * @type {string}
     * @memberof PublicKey
     */
    created_by: string;
    /**
     * 
     * @type {Date}
     * @memberof PublicKey
     */
    expired_at: Date;
    /**
     * It's the hexadecimal representation of the sha256 hash of the DER representation of the key, it's computed and stored when a new key is uploaded.
     * @type {string}
     * @memberof PublicKey
     */
    fingerprint: string;
}

/**
 * Check if a given object implements the PublicKey interface.
 */
export function instanceOfPublicKey(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('key' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('expired_at' in value)) return false;
    if (!('fingerprint' in value)) return false;
    return true;
}

export function PublicKeyFromJSON(json: any): PublicKey {
    return PublicKeyFromJSONTyped(json, false);
}

export function PublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicKey {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'key': json['key'],
        'created_at': (new Date(json['created_at'])),
        'created_by': json['created_by'],
        'expired_at': (new Date(json['expired_at'])),
        'fingerprint': json['fingerprint'],
    };
}

export function PublicKeyToJSON(value?: PublicKey | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'key': value['key'],
        'created_at': ((value['created_at']).toISOString()),
        'created_by': value['created_by'],
        'expired_at': ((value['expired_at']).toISOString()),
        'fingerprint': value['fingerprint'],
    };
}


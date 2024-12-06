/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.25
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * It stores sensitive value in the organization primary store or a reference to a sensitive value stored in a store registered under the organization.
 * @export
 * @interface SecretReference
 */
export interface SecretReference {
    /**
     * Secret Store id. This can't be `humanitec` (our internal Secret Store). It's mandatory if `ref` is defined and can't be used if `value` is defined.
     * @type {string}
     * @memberof SecretReference
     */
    store?: string;
    /**
     * Secret reference in the format of the target store. It can't be defined if `value` is defined.
     * @type {string}
     * @memberof SecretReference
     */
    ref?: string;
    /**
     * Optional, only valid if `ref` is defined. It's the version of the secret as defined in the target store.
     * @type {string}
     * @memberof SecretReference
     */
    version?: string;
    /**
     * Value to store in the secret store. It can't be defined if `ref` is defined.
     * @type {string}
     * @memberof SecretReference
     */
    value?: string;
}

/**
 * Check if a given object implements the SecretReference interface.
 */
export function instanceOfSecretReference(value: object): boolean {
    return true;
}

export function SecretReferenceFromJSON(json: any): SecretReference {
    return SecretReferenceFromJSONTyped(json, false);
}

export function SecretReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretReference {
    if (json == null) {
        return json;
    }
    return {
        
        'store': json['store'] == null ? undefined : json['store'],
        'ref': json['ref'] == null ? undefined : json['ref'],
        'version': json['version'] == null ? undefined : json['version'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function SecretReferenceToJSON(value?: SecretReference | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'store': value['store'],
        'ref': value['ref'],
        'version': value['version'],
        'value': value['value'],
    };
}


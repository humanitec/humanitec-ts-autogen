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
import type { SecretReference } from './SecretReference.js';
import {
    SecretReferenceFromJSON,
    SecretReferenceFromJSONTyped,
    SecretReferenceToJSON,
} from './SecretReference.js';

/**
 * Shared Values can be used to manage variables and configuration that might vary between environments. They are also the way that secrets can be stored securely.
 * 
 * Shared Values are by default shared across all environments in an application. However, they can be overridden on an Environment by Environment basis.
 * 
 * For example: There might be 2 API keys that are used in an application. One development key used in the development and staging environments and another used for production. The development API key would be set at the Application level. The value would then be overridden at the Environment level for the production Environment.
 * @export
 * @interface ValueRequest
 */
export interface ValueRequest {
    /**
     * A Human friendly description of what the Shared Value is.
     * @type {string}
     * @memberof ValueRequest
     */
    description?: string;
    /**
     * Specified that the Shared Value contains a secret.
     * @type {boolean}
     * @memberof ValueRequest
     */
    is_secret?: boolean;
    /**
     * The unique key by which the Shared Value can be referenced. pattern: ^[a-zA-Z0-9._-]+$.
     * @type {string}
     * @memberof ValueRequest
     */
    key?: string;
    /**
     * The value that will be stored. (Will be always empty for secrets.)
     * @type {string}
     * @memberof ValueRequest
     */
    value?: string;
    /**
     * 
     * @type {SecretReference}
     * @memberof ValueRequest
     */
    secret_ref?: SecretReference;
}

/**
 * Check if a given object implements the ValueRequest interface.
 */
export function instanceOfValueRequest(value: object): boolean {
    return true;
}

export function ValueRequestFromJSON(json: any): ValueRequest {
    return ValueRequestFromJSONTyped(json, false);
}

export function ValueRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValueRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'is_secret': json['is_secret'] == null ? undefined : json['is_secret'],
        'key': json['key'] == null ? undefined : json['key'],
        'value': json['value'] == null ? undefined : json['value'],
        'secret_ref': json['secret_ref'] == null ? undefined : SecretReferenceFromJSON(json['secret_ref']),
    };
}

export function ValueRequestToJSON(value?: ValueRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'is_secret': value['is_secret'],
        'key': value['key'],
        'value': value['value'],
        'secret_ref': SecretReferenceToJSON(value['secret_ref']),
    };
}


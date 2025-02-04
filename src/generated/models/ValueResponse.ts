/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.2
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { ValueSource } from './ValueSource.js';
import {
    ValueSourceFromJSON,
    ValueSourceFromJSONTyped,
    ValueSourceToJSON,
} from './ValueSource.js';

/**
 * Shared Values can be used to manage variables and configuration that might vary between environments. They are also the way that secrets can be stored securely.
 * 
 * Shared Values are by default shared across all environments in an application. However, they can be overridden on an Environment by Environment basis.
 * 
 * For example: There might be 2 API keys that are used in an application. One development key used in the development and staging environments and another used for production. The development API key would be set at the Application level. The value would then be overridden at the Environment level for the production Environment.
 * @export
 * @interface ValueResponse
 */
export interface ValueResponse {
    /**
     * 
     * @type {Date}
     * @memberof ValueResponse
     */
    created_at: Date;
    /**
     * A Human friendly description of what the Shared Value is.
     * @type {string}
     * @memberof ValueResponse
     */
    description: string;
    /**
     * Specified that the Shared Value contains a secret.
     * @type {boolean}
     * @memberof ValueResponse
     */
    is_secret: boolean;
    /**
     * The unique key by which the Shared Value can be referenced. pattern: ^[a-zA-Z0-9._-]+$.
     * @type {string}
     * @memberof ValueResponse
     */
    key: string;
    /**
     * Location of the secret value in the secret store.
     * @type {string}
     * @memberof ValueResponse
     */
    secret_key: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValueResponse
     */
    secret_store_id: string | null;
    /**
     * Version of the current secret value as returned by the secret store.
     * @type {string}
     * @memberof ValueResponse
     */
    secret_version: string | null;
    /**
     * 
     * @type {ValueSource}
     * @memberof ValueResponse
     */
    source: ValueSource;
    /**
     * 
     * @type {Date}
     * @memberof ValueResponse
     */
    updated_at: Date;
    /**
     * The value that will be stored. (Will be always empty for secrets.)
     * @type {string}
     * @memberof ValueResponse
     */
    value: string;
}

/**
 * Check if a given object implements the ValueResponse interface.
 */
export function instanceOfValueResponse(value: object): boolean {
    if (!('created_at' in value)) return false;
    if (!('description' in value)) return false;
    if (!('is_secret' in value)) return false;
    if (!('key' in value)) return false;
    if (!('secret_key' in value)) return false;
    if (!('secret_store_id' in value)) return false;
    if (!('secret_version' in value)) return false;
    if (!('source' in value)) return false;
    if (!('updated_at' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function ValueResponseFromJSON(json: any): ValueResponse {
    return ValueResponseFromJSONTyped(json, false);
}

export function ValueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValueResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'description': json['description'],
        'is_secret': json['is_secret'],
        'key': json['key'],
        'secret_key': json['secret_key'],
        'secret_store_id': json['secret_store_id'],
        'secret_version': json['secret_version'],
        'source': ValueSourceFromJSON(json['source']),
        'updated_at': (new Date(json['updated_at'])),
        'value': json['value'],
    };
}

export function ValueResponseToJSON(value?: ValueResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['created_at']).toISOString()),
        'description': value['description'],
        'is_secret': value['is_secret'],
        'key': value['key'],
        'secret_key': value['secret_key'],
        'secret_store_id': value['secret_store_id'],
        'secret_version': value['secret_version'],
        'source': ValueSourceToJSON(value['source']),
        'updated_at': ((value['updated_at']).toISOString()),
        'value': value['value'],
    };
}


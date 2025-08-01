/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.28.14
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { AWSSMResponse } from './AWSSMResponse.js';
import {
    AWSSMResponseFromJSON,
    AWSSMResponseFromJSONTyped,
    AWSSMResponseToJSON,
} from './AWSSMResponse.js';
import type { AzureKVResponse } from './AzureKVResponse.js';
import {
    AzureKVResponseFromJSON,
    AzureKVResponseFromJSONTyped,
    AzureKVResponseToJSON,
} from './AzureKVResponse.js';
import type { GCPSMResponse } from './GCPSMResponse.js';
import {
    GCPSMResponseFromJSON,
    GCPSMResponseFromJSONTyped,
    GCPSMResponseToJSON,
} from './GCPSMResponse.js';
import type { VaultResponse } from './VaultResponse.js';
import {
    VaultResponseFromJSON,
    VaultResponseFromJSONTyped,
    VaultResponseToJSON,
} from './VaultResponse.js';

/**
 * Secret Store represents external secret management system used by an organization to store secrets referenced in Humanitec.
 * @export
 * @interface SecretStoreResponse
 */
export interface SecretStoreResponse {
    /**
     * 
     * @type {AWSSMResponse}
     * @memberof SecretStoreResponse
     */
    awssm?: AWSSMResponse;
    /**
     * 
     * @type {AzureKVResponse}
     * @memberof SecretStoreResponse
     */
    azurekv?: AzureKVResponse;
    /**
     * 
     * @type {string}
     * @memberof SecretStoreResponse
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof SecretStoreResponse
     */
    created_by: string;
    /**
     * 
     * @type {GCPSMResponse}
     * @memberof SecretStoreResponse
     */
    gcpsm?: GCPSMResponse;
    /**
     * Humanitec built-in Secret Store specification.
     * @type {object}
     * @memberof SecretStoreResponse
     */
    humanitec?: object;
    /**
     * 
     * @type {string}
     * @memberof SecretStoreResponse
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof SecretStoreResponse
     */
    primary: boolean;
    /**
     * 
     * @type {string}
     * @memberof SecretStoreResponse
     */
    updated_at: string;
    /**
     * 
     * @type {string}
     * @memberof SecretStoreResponse
     */
    updated_by: string;
    /**
     * 
     * @type {VaultResponse}
     * @memberof SecretStoreResponse
     */
    vault?: VaultResponse;
}

/**
 * Check if a given object implements the SecretStoreResponse interface.
 */
export function instanceOfSecretStoreResponse(value: object): boolean {
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('id' in value)) return false;
    if (!('primary' in value)) return false;
    if (!('updated_at' in value)) return false;
    if (!('updated_by' in value)) return false;
    return true;
}

export function SecretStoreResponseFromJSON(json: any): SecretStoreResponse {
    return SecretStoreResponseFromJSONTyped(json, false);
}

export function SecretStoreResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretStoreResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'awssm': json['awssm'] == null ? undefined : AWSSMResponseFromJSON(json['awssm']),
        'azurekv': json['azurekv'] == null ? undefined : AzureKVResponseFromJSON(json['azurekv']),
        'created_at': json['created_at'],
        'created_by': json['created_by'],
        'gcpsm': json['gcpsm'] == null ? undefined : GCPSMResponseFromJSON(json['gcpsm']),
        'humanitec': json['humanitec'] == null ? undefined : json['humanitec'],
        'id': json['id'],
        'primary': json['primary'],
        'updated_at': json['updated_at'],
        'updated_by': json['updated_by'],
        'vault': json['vault'] == null ? undefined : VaultResponseFromJSON(json['vault']),
    };
}

export function SecretStoreResponseToJSON(value?: SecretStoreResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'awssm': AWSSMResponseToJSON(value['awssm']),
        'azurekv': AzureKVResponseToJSON(value['azurekv']),
        'created_at': value['created_at'],
        'created_by': value['created_by'],
        'gcpsm': GCPSMResponseToJSON(value['gcpsm']),
        'humanitec': value['humanitec'],
        'id': value['id'],
        'primary': value['primary'],
        'updated_at': value['updated_at'],
        'updated_by': value['updated_by'],
        'vault': VaultResponseToJSON(value['vault']),
    };
}


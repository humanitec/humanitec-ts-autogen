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
import type { AWSSMRequest } from './AWSSMRequest.js';
import {
    AWSSMRequestFromJSON,
    AWSSMRequestFromJSONTyped,
    AWSSMRequestToJSON,
} from './AWSSMRequest.js';
import type { AzureKVRequest } from './AzureKVRequest.js';
import {
    AzureKVRequestFromJSON,
    AzureKVRequestFromJSONTyped,
    AzureKVRequestToJSON,
} from './AzureKVRequest.js';
import type { GCPSMRequest } from './GCPSMRequest.js';
import {
    GCPSMRequestFromJSON,
    GCPSMRequestFromJSONTyped,
    GCPSMRequestToJSON,
} from './GCPSMRequest.js';
import type { VaultRequest } from './VaultRequest.js';
import {
    VaultRequestFromJSON,
    VaultRequestFromJSONTyped,
    VaultRequestToJSON,
} from './VaultRequest.js';

/**
 * Secret Store represents external secret management system used by an organization to store secrets referenced in Humanitec.
 * @export
 * @interface UpdateSecretStorePayloadRequest
 */
export interface UpdateSecretStorePayloadRequest {
    /**
     * 
     * @type {AWSSMRequest}
     * @memberof UpdateSecretStorePayloadRequest
     */
    awssm?: AWSSMRequest;
    /**
     * 
     * @type {AzureKVRequest}
     * @memberof UpdateSecretStorePayloadRequest
     */
    azurekv?: AzureKVRequest;
    /**
     * 
     * @type {GCPSMRequest}
     * @memberof UpdateSecretStorePayloadRequest
     */
    gcpsm?: GCPSMRequest;
    /**
     * Defines whether the Secret Store is the primary secret management system for the organization.
     * @type {boolean}
     * @memberof UpdateSecretStorePayloadRequest
     */
    primary?: boolean;
    /**
     * 
     * @type {VaultRequest}
     * @memberof UpdateSecretStorePayloadRequest
     */
    vault?: VaultRequest;
}

/**
 * Check if a given object implements the UpdateSecretStorePayloadRequest interface.
 */
export function instanceOfUpdateSecretStorePayloadRequest(value: object): boolean {
    return true;
}

export function UpdateSecretStorePayloadRequestFromJSON(json: any): UpdateSecretStorePayloadRequest {
    return UpdateSecretStorePayloadRequestFromJSONTyped(json, false);
}

export function UpdateSecretStorePayloadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSecretStorePayloadRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'awssm': json['awssm'] == null ? undefined : AWSSMRequestFromJSON(json['awssm']),
        'azurekv': json['azurekv'] == null ? undefined : AzureKVRequestFromJSON(json['azurekv']),
        'gcpsm': json['gcpsm'] == null ? undefined : GCPSMRequestFromJSON(json['gcpsm']),
        'primary': json['primary'] == null ? undefined : json['primary'],
        'vault': json['vault'] == null ? undefined : VaultRequestFromJSON(json['vault']),
    };
}

export function UpdateSecretStorePayloadRequestToJSON(value?: UpdateSecretStorePayloadRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'awssm': AWSSMRequestToJSON(value['awssm']),
        'azurekv': AzureKVRequestToJSON(value['azurekv']),
        'gcpsm': GCPSMRequestToJSON(value['gcpsm']),
        'primary': value['primary'],
        'vault': VaultRequestToJSON(value['vault']),
    };
}


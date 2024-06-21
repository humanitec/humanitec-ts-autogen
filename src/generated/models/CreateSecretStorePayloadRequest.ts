/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types All of the Humanitec API unless explicitly only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning** | | --- | --- | | `200` | Success | | `201` | Success (In future, `201` will be replaced by `200`) | | `204` | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` should be regarded as an error which can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning** | | --- | --- | | `400` | General error. (Body will contain details) | | `401` | Attempt to access protected resource without `Authorization` Header. | | `403` | The `Bearer` or `JWT` does not grant access to the requested resource. | | `404` | Resource not found. | | `405` | Method not allowed | | `409` | Conflict. Usually indicated a resource with that ID already exists. | | `422` | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429` | Too many requests - request rate limit has been reached. | | `500` | Internal Error. If it occurs repeatedly, contact support. | 
 *
 * The version of the OpenAPI document: 0.26.3
 * Contact: apiteam@humanitec.com
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
 * Secret Store represents external secret management system used by an organization to store secrets referenced in Humanitec. It must contain exactly one of the following elements to define Secret Store specification: `awssm` (AWS Secret Manager), `azurekv` (Azure Key Vault), `gcpsm` (GCP Secret Manager), `vault` (HashiCorp Vault).
 * @export
 * @interface CreateSecretStorePayloadRequest
 */
export interface CreateSecretStorePayloadRequest {
    /**
     * 
     * @type {AWSSMRequest}
     * @memberof CreateSecretStorePayloadRequest
     */
    awssm?: AWSSMRequest;
    /**
     * 
     * @type {AzureKVRequest}
     * @memberof CreateSecretStorePayloadRequest
     */
    azurekv?: AzureKVRequest;
    /**
     * 
     * @type {GCPSMRequest}
     * @memberof CreateSecretStorePayloadRequest
     */
    gcpsm?: GCPSMRequest;
    /**
     * The Secret Store ID.
     * @type {string}
     * @memberof CreateSecretStorePayloadRequest
     */
    id: string;
    /**
     * Defines whether the Secret Store is the primary secret management system for the organization.
     * @type {boolean}
     * @memberof CreateSecretStorePayloadRequest
     */
    primary: boolean;
    /**
     * 
     * @type {VaultRequest}
     * @memberof CreateSecretStorePayloadRequest
     */
    vault?: VaultRequest;
}

/**
 * Check if a given object implements the CreateSecretStorePayloadRequest interface.
 */
export function instanceOfCreateSecretStorePayloadRequest(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('primary' in value)) return false;
    return true;
}

export function CreateSecretStorePayloadRequestFromJSON(json: any): CreateSecretStorePayloadRequest {
    return CreateSecretStorePayloadRequestFromJSONTyped(json, false);
}

export function CreateSecretStorePayloadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSecretStorePayloadRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'awssm': json['awssm'] == null ? undefined : AWSSMRequestFromJSON(json['awssm']),
        'azurekv': json['azurekv'] == null ? undefined : AzureKVRequestFromJSON(json['azurekv']),
        'gcpsm': json['gcpsm'] == null ? undefined : GCPSMRequestFromJSON(json['gcpsm']),
        'id': json['id'],
        'primary': json['primary'],
        'vault': json['vault'] == null ? undefined : VaultRequestFromJSON(json['vault']),
    };
}

export function CreateSecretStorePayloadRequestToJSON(value?: CreateSecretStorePayloadRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'awssm': AWSSMRequestToJSON(value['awssm']),
        'azurekv': AzureKVRequestToJSON(value['azurekv']),
        'gcpsm': GCPSMRequestToJSON(value['gcpsm']),
        'id': value['id'],
        'primary': value['primary'],
        'vault': VaultRequestToJSON(value['vault']),
    };
}


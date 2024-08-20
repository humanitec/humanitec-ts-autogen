/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.14
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { AccountCredsRequest } from './AccountCredsRequest.js';
import {
    AccountCredsRequestFromJSON,
    AccountCredsRequestFromJSONTyped,
    AccountCredsRequestToJSON,
} from './AccountCredsRequest.js';
import type { ClusterSecretRequest } from './ClusterSecretRequest.js';
import {
    ClusterSecretRequestFromJSON,
    ClusterSecretRequestFromJSONTyped,
    ClusterSecretRequestToJSON,
} from './ClusterSecretRequest.js';

/**
 * Humanitec can be used to manage registry credentials. The Registry object represents how to match credentials to a particular registry.
 * 
 * Humanitec supports all Docker compatible registries as well as the custom authentication formats used by AWS Elastic Container Registry and Google Container Registry. It also supports the injection of a specific secret to be copied from an existing namespace in the cluster.
 * @export
 * @interface RegistryRequest
 */
export interface RegistryRequest {
    /**
     * 
     * @type {AccountCredsRequest}
     * @memberof RegistryRequest
     */
    creds?: AccountCredsRequest;
    /**
     * Indicates if registry secrets and credentials should be exposed to CI agents.
     * @type {boolean}
     * @memberof RegistryRequest
     */
    enable_ci?: boolean;
    /**
     * Registry ID, unique within the Organization.
     * @type {string}
     * @memberof RegistryRequest
     */
    id: string;
    /**
     * Registry name, usually in a "{domain}" or "{domain}/{project}" format.
     * @type {string}
     * @memberof RegistryRequest
     */
    registry: string;
    /**
     * ClusterSecretsMap stores a list of Kuberenetes secret references for the target deployment clusters.
     * @type {{ [key: string]: ClusterSecretRequest; }}
     * @memberof RegistryRequest
     */
    secrets?: { [key: string]: ClusterSecretRequest; };
    /**
     * Registry type, describes the registry authentication method, and defines the schema for the credentials.
     * 
     * Supported values:
     * 
     * - `public`
     * 
     * - `basic`
     * 
     * - `google_gcr`
     * 
     * - `amazon_ecr`
     * 
     * - `secret_ref`
     * @type {string}
     * @memberof RegistryRequest
     */
    type: string;
}

/**
 * Check if a given object implements the RegistryRequest interface.
 */
export function instanceOfRegistryRequest(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('registry' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function RegistryRequestFromJSON(json: any): RegistryRequest {
    return RegistryRequestFromJSONTyped(json, false);
}

export function RegistryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistryRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'creds': json['creds'] == null ? undefined : AccountCredsRequestFromJSON(json['creds']),
        'enable_ci': json['enable_ci'] == null ? undefined : json['enable_ci'],
        'id': json['id'],
        'registry': json['registry'],
        'secrets': json['secrets'] == null ? undefined : (mapValues(json['secrets'], ClusterSecretRequestFromJSON)),
        'type': json['type'],
    };
}

export function RegistryRequestToJSON(value?: RegistryRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'creds': AccountCredsRequestToJSON(value['creds']),
        'enable_ci': value['enable_ci'],
        'id': value['id'],
        'registry': value['registry'],
        'secrets': value['secrets'] == null ? undefined : (mapValues(value['secrets'], ClusterSecretRequestToJSON)),
        'type': value['type'],
    };
}


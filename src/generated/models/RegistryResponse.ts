/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.18
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { ClusterSecretResponse } from './ClusterSecretResponse.js';
import {
    ClusterSecretResponseFromJSON,
    ClusterSecretResponseFromJSONTyped,
    ClusterSecretResponseToJSON,
} from './ClusterSecretResponse.js';

/**
 * Humanitec can be used to manage registry credentials. The Registry object represents how to match credentials to a particular registry.
 * 
 * Humanitec supports all Docker compatible registries as well as the custom authentication formats used by AWS Elastic Container Registry and Google Container Registry. It also supports the injection of a specific secret to be copied from an existing namespace in the cluster.
 * @export
 * @interface RegistryResponse
 */
export interface RegistryResponse {
    /**
     * The timestamp of when this record was created.
     * @type {string}
     * @memberof RegistryResponse
     */
    created_at?: string;
    /**
     * The user who created this record.
     * @type {string}
     * @memberof RegistryResponse
     */
    created_by?: string;
    /**
     * Indicates if registry secrets and credentials should be exposed to CI agents.
     * @type {boolean}
     * @memberof RegistryResponse
     */
    enable_ci: boolean;
    /**
     * Registry ID, unique within the Organization.
     * @type {string}
     * @memberof RegistryResponse
     */
    id: string;
    /**
     * Registry name, usually in a "{domain}" or "{domain}/{project}" format.
     * @type {string}
     * @memberof RegistryResponse
     */
    registry: string;
    /**
     * ClusterSecretsMap stores a list of Kuberenetes secret references for the target deployment clusters.
     * @type {{ [key: string]: ClusterSecretResponse; }}
     * @memberof RegistryResponse
     */
    secrets?: { [key: string]: ClusterSecretResponse; };
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
     * @memberof RegistryResponse
     */
    type: string;
}

/**
 * Check if a given object implements the RegistryResponse interface.
 */
export function instanceOfRegistryResponse(value: object): boolean {
    if (!('enable_ci' in value)) return false;
    if (!('id' in value)) return false;
    if (!('registry' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function RegistryResponseFromJSON(json: any): RegistryResponse {
    return RegistryResponseFromJSONTyped(json, false);
}

export function RegistryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistryResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'] == null ? undefined : json['created_at'],
        'created_by': json['created_by'] == null ? undefined : json['created_by'],
        'enable_ci': json['enable_ci'],
        'id': json['id'],
        'registry': json['registry'],
        'secrets': json['secrets'] == null ? undefined : (mapValues(json['secrets'], ClusterSecretResponseFromJSON)),
        'type': json['type'],
    };
}

export function RegistryResponseToJSON(value?: RegistryResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': value['created_at'],
        'created_by': value['created_by'],
        'enable_ci': value['enable_ci'],
        'id': value['id'],
        'registry': value['registry'],
        'secrets': value['secrets'] == null ? undefined : (mapValues(value['secrets'], ClusterSecretResponseToJSON)),
        'type': value['type'],
    };
}


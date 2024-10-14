/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.20
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
 * RegistryCreds represents current registry credentials (either, username- or token-based).
 * @export
 * @interface RegistryCredsResponse
 */
export interface RegistryCredsResponse {
    /**
     * Account credentials expiration timestamp.
     * @type {string}
     * @memberof RegistryCredsResponse
     */
    expires?: string;
    /**
     * Account password or token secret.
     * @type {string}
     * @memberof RegistryCredsResponse
     */
    password?: string;
    /**
     * Registry name, usually in a "{domain}" or "{domain}/{project}" format.
     * @type {string}
     * @memberof RegistryCredsResponse
     */
    registry: string;
    /**
     * ClusterSecretsMap stores a list of Kuberenetes secret references for the target deployment clusters.
     * @type {{ [key: string]: ClusterSecretResponse; }}
     * @memberof RegistryCredsResponse
     */
    secrets?: { [key: string]: ClusterSecretResponse; };
    /**
     * Security account login or token.
     * @type {string}
     * @memberof RegistryCredsResponse
     */
    username?: string;
}

/**
 * Check if a given object implements the RegistryCredsResponse interface.
 */
export function instanceOfRegistryCredsResponse(value: object): boolean {
    if (!('registry' in value)) return false;
    return true;
}

export function RegistryCredsResponseFromJSON(json: any): RegistryCredsResponse {
    return RegistryCredsResponseFromJSONTyped(json, false);
}

export function RegistryCredsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistryCredsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'expires': json['expires'] == null ? undefined : json['expires'],
        'password': json['password'] == null ? undefined : json['password'],
        'registry': json['registry'],
        'secrets': json['secrets'] == null ? undefined : (mapValues(json['secrets'], ClusterSecretResponseFromJSON)),
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function RegistryCredsResponseToJSON(value?: RegistryCredsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'expires': value['expires'],
        'password': value['password'],
        'registry': value['registry'],
        'secrets': value['secrets'] == null ? undefined : (mapValues(value['secrets'], ClusterSecretResponseToJSON)),
        'username': value['username'],
    };
}


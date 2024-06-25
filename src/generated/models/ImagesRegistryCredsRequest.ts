/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types All of the Humanitec API unless explicitly only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning** | | --- | --- | | `200` | Success | | `201` | Success (In future, `201` will be replaced by `200`) | | `204` | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` should be regarded as an error which can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning** | | --- | --- | | `400` | General error. (Body will contain details) | | `401` | Attempt to access protected resource without `Authorization` Header. | | `403` | The `Bearer` or `JWT` does not grant access to the requested resource. | | `404` | Resource not found. | | `405` | Method not allowed | | `409` | Conflict. Usually indicated a resource with that ID already exists. | | `422` | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429` | Too many requests - request rate limit has been reached. | | `500` | Internal Error. If it occurs repeatedly, contact support. | 
 *
 * The version of the OpenAPI document: 0.26.5
 * Contact: apiteam@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { ClusterSecretRequest } from './ClusterSecretRequest.js';
import {
    ClusterSecretRequestFromJSON,
    ClusterSecretRequestFromJSONTyped,
    ClusterSecretRequestToJSON,
} from './ClusterSecretRequest.js';

/**
 * ImagesRegistryCreds stores registry credentials details alongside with associated images.
 * @export
 * @interface ImagesRegistryCredsRequest
 */
export interface ImagesRegistryCredsRequest {
    /**
     * List of images associated with the registry.
     * @type {Array<string>}
     * @memberof ImagesRegistryCredsRequest
     */
    images: Array<string>;
    /**
     * Registry name, usually in a "{domain}" or "{domain}/{project}" format.
     * @type {string}
     * @memberof ImagesRegistryCredsRequest
     */
    registry: string;
    /**
     * ClusterSecretsMap stores a list of Kuberenetes secret references for the target deployment clusters.
     * @type {{ [key: string]: ClusterSecretRequest; }}
     * @memberof ImagesRegistryCredsRequest
     */
    secrets?: { [key: string]: ClusterSecretRequest; };
}

/**
 * Check if a given object implements the ImagesRegistryCredsRequest interface.
 */
export function instanceOfImagesRegistryCredsRequest(value: object): boolean {
    if (!('images' in value)) return false;
    if (!('registry' in value)) return false;
    return true;
}

export function ImagesRegistryCredsRequestFromJSON(json: any): ImagesRegistryCredsRequest {
    return ImagesRegistryCredsRequestFromJSONTyped(json, false);
}

export function ImagesRegistryCredsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImagesRegistryCredsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'images': json['images'],
        'registry': json['registry'],
        'secrets': json['secrets'] == null ? undefined : (mapValues(json['secrets'], ClusterSecretRequestFromJSON)),
    };
}

export function ImagesRegistryCredsRequestToJSON(value?: ImagesRegistryCredsRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'images': value['images'],
        'registry': value['registry'],
        'secrets': value['secrets'] == null ? undefined : (mapValues(value['secrets'], ClusterSecretRequestToJSON)),
    };
}

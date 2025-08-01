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
import type { ResourceDefinitions } from './ResourceDefinitions.js';
import {
    ResourceDefinitionsFromJSON,
    ResourceDefinitionsFromJSONTyped,
    ResourceDefinitionsToJSON,
} from './ResourceDefinitions.js';

/**
 * Detailed needed to test a Kubernetes cluster connection
 * @export
 * @interface ClusterConnectionCheckRequest
 */
export interface ClusterConnectionCheckRequest {
    /**
     * The application Id to test
     * @type {string}
     * @memberof ClusterConnectionCheckRequest
     */
    app_id: string;
    /**
     * The environment Id to test
     * @type {string}
     * @memberof ClusterConnectionCheckRequest
     */
    env_id: string;
    /**
     * The environment type to test
     * @type {string}
     * @memberof ClusterConnectionCheckRequest
     */
    env_type: string;
    /**
     * List of the definitions with their type that should be used by the resource graph nodes generated based on the context.
     * @type {Array<ResourceDefinitions>}
     * @memberof ClusterConnectionCheckRequest
     */
    expected_definitions?: Array<ResourceDefinitions>;
}

/**
 * Check if a given object implements the ClusterConnectionCheckRequest interface.
 */
export function instanceOfClusterConnectionCheckRequest(value: object): boolean {
    if (!('app_id' in value)) return false;
    if (!('env_id' in value)) return false;
    if (!('env_type' in value)) return false;
    return true;
}

export function ClusterConnectionCheckRequestFromJSON(json: any): ClusterConnectionCheckRequest {
    return ClusterConnectionCheckRequestFromJSONTyped(json, false);
}

export function ClusterConnectionCheckRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClusterConnectionCheckRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'app_id': json['app_id'],
        'env_id': json['env_id'],
        'env_type': json['env_type'],
        'expected_definitions': json['expected_definitions'] == null ? undefined : ((json['expected_definitions'] as Array<any>).map(ResourceDefinitionsFromJSON)),
    };
}

export function ClusterConnectionCheckRequestToJSON(value?: ClusterConnectionCheckRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'app_id': value['app_id'],
        'env_id': value['env_id'],
        'env_type': value['env_type'],
        'expected_definitions': value['expected_definitions'] == null ? undefined : ((value['expected_definitions'] as Array<any>).map(ResourceDefinitionsToJSON)),
    };
}


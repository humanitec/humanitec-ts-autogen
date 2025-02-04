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
import type { ActiveResourceResponse } from './ActiveResourceResponse.js';
import {
    ActiveResourceResponseFromJSON,
    ActiveResourceResponseFromJSONTyped,
    ActiveResourceResponseToJSON,
} from './ActiveResourceResponse.js';
import type { ResourceDefinitionResponse } from './ResourceDefinitionResponse.js';
import {
    ResourceDefinitionResponseFromJSON,
    ResourceDefinitionResponseFromJSONTyped,
    ResourceDefinitionResponseToJSON,
} from './ResourceDefinitionResponse.js';

/**
 * 
 * @export
 * @interface ConflictingResourcesErrorResponseDetailsResources
 */
export interface ConflictingResourcesErrorResponseDetailsResources {
    /**
     * List of non-deleted Resource Definitions referencing the specified Resource Account.
     * @type {Array<ResourceDefinitionResponse>}
     * @memberof ConflictingResourcesErrorResponseDetailsResources
     */
    resource_definitions?: Array<ResourceDefinitionResponse>;
    /**
     * List of Active Resources referencing the specified Resource Account.
     * @type {Array<ActiveResourceResponse>}
     * @memberof ConflictingResourcesErrorResponseDetailsResources
     */
    active_resources?: Array<ActiveResourceResponse>;
}

/**
 * Check if a given object implements the ConflictingResourcesErrorResponseDetailsResources interface.
 */
export function instanceOfConflictingResourcesErrorResponseDetailsResources(value: object): boolean {
    return true;
}

export function ConflictingResourcesErrorResponseDetailsResourcesFromJSON(json: any): ConflictingResourcesErrorResponseDetailsResources {
    return ConflictingResourcesErrorResponseDetailsResourcesFromJSONTyped(json, false);
}

export function ConflictingResourcesErrorResponseDetailsResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConflictingResourcesErrorResponseDetailsResources {
    if (json == null) {
        return json;
    }
    return {
        
        'resource_definitions': json['resource_definitions'] == null ? undefined : ((json['resource_definitions'] as Array<any>).map(ResourceDefinitionResponseFromJSON)),
        'active_resources': json['active_resources'] == null ? undefined : ((json['active_resources'] as Array<any>).map(ActiveResourceResponseFromJSON)),
    };
}

export function ConflictingResourcesErrorResponseDetailsResourcesToJSON(value?: ConflictingResourcesErrorResponseDetailsResources | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'resource_definitions': value['resource_definitions'] == null ? undefined : ((value['resource_definitions'] as Array<any>).map(ResourceDefinitionResponseToJSON)),
        'active_resources': value['active_resources'] == null ? undefined : ((value['active_resources'] as Array<any>).map(ActiveResourceResponseToJSON)),
    };
}


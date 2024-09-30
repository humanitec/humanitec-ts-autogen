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
import type { WorkloadProfileChartReference } from './WorkloadProfileChartReference.js';
import {
    WorkloadProfileChartReferenceFromJSON,
    WorkloadProfileChartReferenceFromJSONTyped,
    WorkloadProfileChartReferenceToJSON,
} from './WorkloadProfileChartReference.js';
import type { WorkloadProfileSpecDefinition } from './WorkloadProfileSpecDefinition.js';
import {
    WorkloadProfileSpecDefinitionFromJSON,
    WorkloadProfileSpecDefinitionFromJSONTyped,
    WorkloadProfileSpecDefinitionToJSON,
} from './WorkloadProfileSpecDefinition.js';

/**
 * The proposed properties to update a workload profile.
 * @export
 * @interface WorkloadProfileUpdateRequest
 */
export interface WorkloadProfileUpdateRequest {
    /**
     * Describes the workload profile
     * @type {string}
     * @memberof WorkloadProfileUpdateRequest
     */
    description?: string;
    /**
     * A not-empty string indicates that the workload profile is deprecated.
     * @type {string}
     * @memberof WorkloadProfileUpdateRequest
     */
    deprecation_message?: string;
    /**
     * 
     * @type {WorkloadProfileSpecDefinition}
     * @memberof WorkloadProfileUpdateRequest
     */
    spec_definition: WorkloadProfileSpecDefinition;
    /**
     * Version identifier. The version must be unique, but the API doesn't not enforce any ordering. Currently workloads will always use the latest update.
     * 
     * If no identifier is provided, the each update will generate a random version identifier.
     * @type {string}
     * @memberof WorkloadProfileUpdateRequest
     */
    version?: string;
    /**
     * 
     * @type {WorkloadProfileChartReference}
     * @memberof WorkloadProfileUpdateRequest
     */
    workload_profile_chart: WorkloadProfileChartReference;
}

/**
 * Check if a given object implements the WorkloadProfileUpdateRequest interface.
 */
export function instanceOfWorkloadProfileUpdateRequest(value: object): boolean {
    if (!('spec_definition' in value)) return false;
    if (!('workload_profile_chart' in value)) return false;
    return true;
}

export function WorkloadProfileUpdateRequestFromJSON(json: any): WorkloadProfileUpdateRequest {
    return WorkloadProfileUpdateRequestFromJSONTyped(json, false);
}

export function WorkloadProfileUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkloadProfileUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'deprecation_message': json['deprecation_message'] == null ? undefined : json['deprecation_message'],
        'spec_definition': WorkloadProfileSpecDefinitionFromJSON(json['spec_definition']),
        'version': json['version'] == null ? undefined : json['version'],
        'workload_profile_chart': WorkloadProfileChartReferenceFromJSON(json['workload_profile_chart']),
    };
}

export function WorkloadProfileUpdateRequestToJSON(value?: WorkloadProfileUpdateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'deprecation_message': value['deprecation_message'],
        'spec_definition': WorkloadProfileSpecDefinitionToJSON(value['spec_definition']),
        'version': value['version'],
        'workload_profile_chart': WorkloadProfileChartReferenceToJSON(value['workload_profile_chart']),
    };
}


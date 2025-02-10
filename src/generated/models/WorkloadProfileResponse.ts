/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.3
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
 * Workload Profiles provide the baseline configuration for Workloads in Applications in Humanitec. Developers can configure various features of a workload profile to suit their needs. Examples of features might be `schedules` used in Kubernetes CronJobs or `ingress` which might be used to expose Pods controlled by a Kubernetes Deployment.
 * 
 * Workloads in Humanitec are implemented as Helm Charts which must implement a specific schema.
 * @export
 * @interface WorkloadProfileResponse
 */
export interface WorkloadProfileResponse {
    /**
     * Creation date
     * @type {Date}
     * @memberof WorkloadProfileResponse
     */
    created_at: Date;
    /**
     * User created the profile
     * @type {string}
     * @memberof WorkloadProfileResponse
     */
    created_by: string;
    /**
     * Describes the workload profile
     * @type {string}
     * @memberof WorkloadProfileResponse
     */
    description: string;
    /**
     * A not-empty string indicates that the workload profile is deprecated.
     * @type {string}
     * @memberof WorkloadProfileResponse
     */
    deprecation_message?: string;
    /**
     * Workload Profile ID
     * @type {string}
     * @memberof WorkloadProfileResponse
     */
    id: string;
    /**
     * Organization ID
     * @type {string}
     * @memberof WorkloadProfileResponse
     */
    org_id: string;
    /**
     * 
     * @type {WorkloadProfileSpecDefinition}
     * @memberof WorkloadProfileResponse
     */
    spec_definition: WorkloadProfileSpecDefinition;
    /**
     * OpenAPI schema used to validate the spec.
     * @type {any}
     * @memberof WorkloadProfileResponse
     */
    spec_schema: any | null;
    /**
     * Timestamp when the entity was last updated.
     * @type {Date}
     * @memberof WorkloadProfileResponse
     */
    updated_at: Date;
    /**
     * User who last updated the entity.
     * @type {string}
     * @memberof WorkloadProfileResponse
     */
    updated_by: string;
    /**
     * Version identifier.
     * @type {string}
     * @memberof WorkloadProfileResponse
     */
    version: string;
    /**
     * 
     * @type {WorkloadProfileChartReference}
     * @memberof WorkloadProfileResponse
     */
    workload_profile_chart: WorkloadProfileChartReference;
}

/**
 * Check if a given object implements the WorkloadProfileResponse interface.
 */
export function instanceOfWorkloadProfileResponse(value: object): boolean {
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('description' in value)) return false;
    if (!('id' in value)) return false;
    if (!('org_id' in value)) return false;
    if (!('spec_definition' in value)) return false;
    if (!('spec_schema' in value)) return false;
    if (!('updated_at' in value)) return false;
    if (!('updated_by' in value)) return false;
    if (!('version' in value)) return false;
    if (!('workload_profile_chart' in value)) return false;
    return true;
}

export function WorkloadProfileResponseFromJSON(json: any): WorkloadProfileResponse {
    return WorkloadProfileResponseFromJSONTyped(json, false);
}

export function WorkloadProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkloadProfileResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'created_by': json['created_by'],
        'description': json['description'],
        'deprecation_message': json['deprecation_message'] == null ? undefined : json['deprecation_message'],
        'id': json['id'],
        'org_id': json['org_id'],
        'spec_definition': WorkloadProfileSpecDefinitionFromJSON(json['spec_definition']),
        'spec_schema': json['spec_schema'],
        'updated_at': (new Date(json['updated_at'])),
        'updated_by': json['updated_by'],
        'version': json['version'],
        'workload_profile_chart': WorkloadProfileChartReferenceFromJSON(json['workload_profile_chart']),
    };
}

export function WorkloadProfileResponseToJSON(value?: WorkloadProfileResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['created_at']).toISOString()),
        'created_by': value['created_by'],
        'description': value['description'],
        'deprecation_message': value['deprecation_message'],
        'id': value['id'],
        'org_id': value['org_id'],
        'spec_definition': WorkloadProfileSpecDefinitionToJSON(value['spec_definition']),
        'spec_schema': value['spec_schema'],
        'updated_at': ((value['updated_at']).toISOString()),
        'updated_by': value['updated_by'],
        'version': value['version'],
        'workload_profile_chart': WorkloadProfileChartReferenceToJSON(value['workload_profile_chart']),
    };
}


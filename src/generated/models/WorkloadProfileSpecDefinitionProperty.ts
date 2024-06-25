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
import type { WorkloadProfileSpecDefinitionPropertyType } from './WorkloadProfileSpecDefinitionPropertyType.js';
import {
    WorkloadProfileSpecDefinitionPropertyTypeFromJSON,
    WorkloadProfileSpecDefinitionPropertyTypeFromJSONTyped,
    WorkloadProfileSpecDefinitionPropertyTypeToJSON,
} from './WorkloadProfileSpecDefinitionPropertyType.js';
import type { WorkloadProfileSpecDefinitionPropertyUIHints } from './WorkloadProfileSpecDefinitionPropertyUIHints.js';
import {
    WorkloadProfileSpecDefinitionPropertyUIHintsFromJSON,
    WorkloadProfileSpecDefinitionPropertyUIHintsFromJSONTyped,
    WorkloadProfileSpecDefinitionPropertyUIHintsToJSON,
} from './WorkloadProfileSpecDefinitionPropertyUIHints.js';
import type { WorkloadProfileSpecDefinitionRuntimeProperty } from './WorkloadProfileSpecDefinitionRuntimeProperty.js';
import {
    WorkloadProfileSpecDefinitionRuntimePropertyFromJSON,
    WorkloadProfileSpecDefinitionRuntimePropertyFromJSONTyped,
    WorkloadProfileSpecDefinitionRuntimePropertyToJSON,
} from './WorkloadProfileSpecDefinitionRuntimeProperty.js';

/**
 * 
 * @export
 * @interface WorkloadProfileSpecDefinitionProperty
 */
export interface WorkloadProfileSpecDefinitionProperty {
    /**
     * 
     * @type {WorkloadProfileSpecDefinitionPropertyType}
     * @memberof WorkloadProfileSpecDefinitionProperty
     */
    type: WorkloadProfileSpecDefinitionPropertyType;
    /**
     * 
     * @type {string}
     * @memberof WorkloadProfileSpecDefinitionProperty
     */
    feature_name?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkloadProfileSpecDefinitionProperty
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkloadProfileSpecDefinitionProperty
     */
    version?: string;
    /**
     * 
     * @type {WorkloadProfileSpecDefinitionPropertyUIHints}
     * @memberof WorkloadProfileSpecDefinitionProperty
     */
    ui_hints?: WorkloadProfileSpecDefinitionPropertyUIHints;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof WorkloadProfileSpecDefinitionProperty
     */
    schema?: { [key: string]: any; };
    /**
     * 
     * @type {Array<WorkloadProfileSpecDefinitionRuntimeProperty>}
     * @memberof WorkloadProfileSpecDefinitionProperty
     */
    runtime_properties?: Array<WorkloadProfileSpecDefinitionRuntimeProperty>;
    /**
     * Workload spec definition
     * @type {{ [key: string]: WorkloadProfileSpecDefinitionProperty; }}
     * @memberof WorkloadProfileSpecDefinitionProperty
     */
    properties?: { [key: string]: WorkloadProfileSpecDefinitionProperty; };
}

/**
 * Check if a given object implements the WorkloadProfileSpecDefinitionProperty interface.
 */
export function instanceOfWorkloadProfileSpecDefinitionProperty(value: object): boolean {
    if (!('type' in value)) return false;
    return true;
}

export function WorkloadProfileSpecDefinitionPropertyFromJSON(json: any): WorkloadProfileSpecDefinitionProperty {
    return WorkloadProfileSpecDefinitionPropertyFromJSONTyped(json, false);
}

export function WorkloadProfileSpecDefinitionPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkloadProfileSpecDefinitionProperty {
    if (json == null) {
        return json;
    }
    return {
        
        'type': WorkloadProfileSpecDefinitionPropertyTypeFromJSON(json['type']),
        'feature_name': json['feature_name'] == null ? undefined : json['feature_name'],
        'title': json['title'] == null ? undefined : json['title'],
        'version': json['version'] == null ? undefined : json['version'],
        'ui_hints': json['ui_hints'] == null ? undefined : WorkloadProfileSpecDefinitionPropertyUIHintsFromJSON(json['ui_hints']),
        'schema': json['schema'] == null ? undefined : json['schema'],
        'runtime_properties': json['runtime_properties'] == null ? undefined : ((json['runtime_properties'] as Array<any>).map(WorkloadProfileSpecDefinitionRuntimePropertyFromJSON)),
        'properties': json['properties'] == null ? undefined : (mapValues(json['properties'], WorkloadProfileSpecDefinitionPropertyFromJSON)),
    };
}

export function WorkloadProfileSpecDefinitionPropertyToJSON(value?: WorkloadProfileSpecDefinitionProperty | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': WorkloadProfileSpecDefinitionPropertyTypeToJSON(value['type']),
        'feature_name': value['feature_name'],
        'title': value['title'],
        'version': value['version'],
        'ui_hints': WorkloadProfileSpecDefinitionPropertyUIHintsToJSON(value['ui_hints']),
        'schema': value['schema'],
        'runtime_properties': value['runtime_properties'] == null ? undefined : ((value['runtime_properties'] as Array<any>).map(WorkloadProfileSpecDefinitionRuntimePropertyToJSON)),
        'properties': value['properties'] == null ? undefined : (mapValues(value['properties'], WorkloadProfileSpecDefinitionPropertyToJSON)),
    };
}


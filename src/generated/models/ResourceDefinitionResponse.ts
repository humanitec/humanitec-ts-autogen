/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types All of the Humanitec API unless explicitly only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning** | | --- | --- | | `200` | Success | | `201` | Success (In future, `201` will be replaced by `200`) | | `204` | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` should be regarded as an error which can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning** | | --- | --- | | `400` | General error. (Body will contain details) | | `401` | Attempt to access protected resource without `Authorization` Header. | | `403` | The `Bearer` or `JWT` does not grant access to the requested resource. | | `404` | Resource not found. | | `405` | Method not allowed | | `409` | Conflict. Usually indicated a resource with that ID already exists. | | `422` | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429` | Too many requests - request rate limit has been reached. | | `500` | Internal Error. If it occurs repeatedly, contact support. | 
 *
 * The version of the OpenAPI document: 0.26.6
 * Contact: apiteam@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { MatchingCriteriaResponse } from './MatchingCriteriaResponse.js';
import {
    MatchingCriteriaResponseFromJSON,
    MatchingCriteriaResponseFromJSONTyped,
    MatchingCriteriaResponseToJSON,
} from './MatchingCriteriaResponse.js';
import type { ProvisionDependenciesResponse } from './ProvisionDependenciesResponse.js';
import {
    ProvisionDependenciesResponseFromJSON,
    ProvisionDependenciesResponseFromJSONTyped,
    ProvisionDependenciesResponseToJSON,
} from './ProvisionDependenciesResponse.js';
import type { ValuesSecretsRefsResponse } from './ValuesSecretsRefsResponse.js';
import {
    ValuesSecretsRefsResponseFromJSON,
    ValuesSecretsRefsResponseFromJSONTyped,
    ValuesSecretsRefsResponseToJSON,
} from './ValuesSecretsRefsResponse.js';

/**
 * A Resource Definitions describes how and when a resource should be provisioned. It links a driver (the how) along with a Matching Criteria (the when) to a Resource Type. This allows Humanitec to invoke a particular driver for the required Resource Type in the context of a particular Application and Environment.
 * 
 * The schema for the `driver_inputs` is defined by the `input_schema` property on the DriverDefinition identified by the `driver_type` property.
 * @export
 * @interface ResourceDefinitionResponse
 */
export interface ResourceDefinitionResponse {
    /**
     * The timestamp of when this record has been created.
     * @type {Date}
     * @memberof ResourceDefinitionResponse
     */
    created_at: Date;
    /**
     * The user who created this record.
     * @type {string}
     * @memberof ResourceDefinitionResponse
     */
    created_by: string;
    /**
     * The timestamp of when this record has been updated.
     * @type {Date}
     * @memberof ResourceDefinitionResponse
     */
    updated_at?: Date;
    /**
     * The user who updated this record.
     * @type {string}
     * @memberof ResourceDefinitionResponse
     */
    updated_by?: string;
    /**
     * (Optional) The criteria to use when looking for a Resource Definition during the deployment.
     * @type {Array<MatchingCriteriaResponse>}
     * @memberof ResourceDefinitionResponse
     */
    criteria?: Array<MatchingCriteriaResponse>;
    /**
     * (Optional) Security account required by the driver.
     * @type {string}
     * @memberof ResourceDefinitionResponse
     */
    driver_account?: string;
    /**
     * 
     * @type {ValuesSecretsRefsResponse}
     * @memberof ResourceDefinitionResponse
     */
    driver_inputs?: ValuesSecretsRefsResponse;
    /**
     * The driver to be used to create the resource.
     * @type {string}
     * @memberof ResourceDefinitionResponse
     */
    driver_type: string;
    /**
     * The Resource Definition ID.
     * @type {string}
     * @memberof ResourceDefinitionResponse
     */
    id: string;
    /**
     * The Resource Definition Version ID.
     * @type {string}
     * @memberof ResourceDefinitionResponse
     */
    current_version_id: string;
    /**
     * Indicates this definition is a built-in one (provided by Humanitec).
     * @type {boolean}
     * @memberof ResourceDefinitionResponse
     */
    is_default: boolean;
    /**
     * Indicates if this record has been marked for deletion. The Resource Definition that has been marked for deletion cannot be used to provision new resources.
     * @type {boolean}
     * @memberof ResourceDefinitionResponse
     */
    is_deleted: boolean;
    /**
     * The display name.
     * @type {string}
     * @memberof ResourceDefinitionResponse
     */
    name: string;
    /**
     * The Organization ID.
     * @type {string}
     * @memberof ResourceDefinitionResponse
     */
    org_id: string;
    /**
     * (Optional) A map where the keys are resType#resId (if resId is omitted, the same id of the current resource definition is used) of the resources that should be provisioned when the current resource is provisioned. This also specifies if the resources have a dependency on the current resource.
     * @type {{ [key: string]: ProvisionDependenciesResponse; }}
     * @memberof ResourceDefinitionResponse
     */
    provision?: { [key: string]: ProvisionDependenciesResponse; };
    /**
     * The Resource Type.
     * @type {string}
     * @memberof ResourceDefinitionResponse
     */
    type: string;
}

/**
 * Check if a given object implements the ResourceDefinitionResponse interface.
 */
export function instanceOfResourceDefinitionResponse(value: object): boolean {
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('driver_type' in value)) return false;
    if (!('id' in value)) return false;
    if (!('current_version_id' in value)) return false;
    if (!('is_default' in value)) return false;
    if (!('is_deleted' in value)) return false;
    if (!('name' in value)) return false;
    if (!('org_id' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function ResourceDefinitionResponseFromJSON(json: any): ResourceDefinitionResponse {
    return ResourceDefinitionResponseFromJSONTyped(json, false);
}

export function ResourceDefinitionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceDefinitionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'created_by': json['created_by'],
        'updated_at': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'updated_by': json['updated_by'] == null ? undefined : json['updated_by'],
        'criteria': json['criteria'] == null ? undefined : ((json['criteria'] as Array<any>).map(MatchingCriteriaResponseFromJSON)),
        'driver_account': json['driver_account'] == null ? undefined : json['driver_account'],
        'driver_inputs': json['driver_inputs'] == null ? undefined : ValuesSecretsRefsResponseFromJSON(json['driver_inputs']),
        'driver_type': json['driver_type'],
        'id': json['id'],
        'current_version_id': json['current_version_id'],
        'is_default': json['is_default'],
        'is_deleted': json['is_deleted'],
        'name': json['name'],
        'org_id': json['org_id'],
        'provision': json['provision'] == null ? undefined : (mapValues(json['provision'], ProvisionDependenciesResponseFromJSON)),
        'type': json['type'],
    };
}

export function ResourceDefinitionResponseToJSON(value?: ResourceDefinitionResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['created_at']).toISOString()),
        'created_by': value['created_by'],
        'updated_at': value['updated_at'] == null ? undefined : ((value['updated_at']).toISOString()),
        'updated_by': value['updated_by'],
        'criteria': value['criteria'] == null ? undefined : ((value['criteria'] as Array<any>).map(MatchingCriteriaResponseToJSON)),
        'driver_account': value['driver_account'],
        'driver_inputs': ValuesSecretsRefsResponseToJSON(value['driver_inputs']),
        'driver_type': value['driver_type'],
        'id': value['id'],
        'current_version_id': value['current_version_id'],
        'is_default': value['is_default'],
        'is_deleted': value['is_deleted'],
        'name': value['name'],
        'org_id': value['org_id'],
        'provision': value['provision'] == null ? undefined : (mapValues(value['provision'], ProvisionDependenciesResponseToJSON)),
        'type': value['type'],
    };
}


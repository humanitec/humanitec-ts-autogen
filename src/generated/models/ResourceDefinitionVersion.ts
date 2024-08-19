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
 * A Resource Definition Version represents a version of a Resource Definition.
 * @export
 * @interface ResourceDefinitionVersion
 */
export interface ResourceDefinitionVersion {
    /**
     * The Resource Definition Version ID.
     * @type {string}
     * @memberof ResourceDefinitionVersion
     */
    id: string;
    /**
     * The Organization ID.
     * @type {string}
     * @memberof ResourceDefinitionVersion
     */
    org_id: string;
    /**
     * The Resource Definition ID.
     * @type {string}
     * @memberof ResourceDefinitionVersion
     */
    def_id: string;
    /**
     * The display name.
     * @type {string}
     * @memberof ResourceDefinitionVersion
     */
    name: string;
    /**
     * The Resource Type.
     * @type {string}
     * @memberof ResourceDefinitionVersion
     */
    type: string;
    /**
     * The driver to be used to create the resource.
     * @type {string}
     * @memberof ResourceDefinitionVersion
     */
    driver_type: string;
    /**
     * (Optional) Security account required by the driver.
     * @type {string}
     * @memberof ResourceDefinitionVersion
     */
    driver_account: string;
    /**
     * 
     * @type {ValuesSecretsRefsResponse}
     * @memberof ResourceDefinitionVersion
     */
    driver_inputs: ValuesSecretsRefsResponse;
    /**
     * (Optional) A map where the keys are resType#resId (if resId is omitted, the same id of the current resource definition is used) of the resources that should be provisioned when the current resource is provisioned. This also specifies if the resources have a dependency on the current resource.
     * @type {{ [key: string]: ProvisionDependenciesResponse; }}
     * @memberof ResourceDefinitionVersion
     */
    provision: { [key: string]: ProvisionDependenciesResponse; };
    /**
     * The action that generated the Resource Definition Version. Might be one of `created`, `updated` or `deleted`.
     * @type {string}
     * @memberof ResourceDefinitionVersion
     */
    action: string;
    /**
     * The timestamp of when this record has been created.
     * @type {Date}
     * @memberof ResourceDefinitionVersion
     */
    created_at: Date;
    /**
     * The user who created this record.
     * @type {string}
     * @memberof ResourceDefinitionVersion
     */
    created_by: string;
}

/**
 * Check if a given object implements the ResourceDefinitionVersion interface.
 */
export function instanceOfResourceDefinitionVersion(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('org_id' in value)) return false;
    if (!('def_id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('type' in value)) return false;
    if (!('driver_type' in value)) return false;
    if (!('driver_account' in value)) return false;
    if (!('driver_inputs' in value)) return false;
    if (!('provision' in value)) return false;
    if (!('action' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    return true;
}

export function ResourceDefinitionVersionFromJSON(json: any): ResourceDefinitionVersion {
    return ResourceDefinitionVersionFromJSONTyped(json, false);
}

export function ResourceDefinitionVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceDefinitionVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'org_id': json['org_id'],
        'def_id': json['def_id'],
        'name': json['name'],
        'type': json['type'],
        'driver_type': json['driver_type'],
        'driver_account': json['driver_account'],
        'driver_inputs': ValuesSecretsRefsResponseFromJSON(json['driver_inputs']),
        'provision': (mapValues(json['provision'], ProvisionDependenciesResponseFromJSON)),
        'action': json['action'],
        'created_at': (new Date(json['created_at'])),
        'created_by': json['created_by'],
    };
}

export function ResourceDefinitionVersionToJSON(value?: ResourceDefinitionVersion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'org_id': value['org_id'],
        'def_id': value['def_id'],
        'name': value['name'],
        'type': value['type'],
        'driver_type': value['driver_type'],
        'driver_account': value['driver_account'],
        'driver_inputs': ValuesSecretsRefsResponseToJSON(value['driver_inputs']),
        'provision': (mapValues(value['provision'], ProvisionDependenciesResponseToJSON)),
        'action': value['action'],
        'created_at': ((value['created_at']).toISOString()),
        'created_by': value['created_by'],
    };
}


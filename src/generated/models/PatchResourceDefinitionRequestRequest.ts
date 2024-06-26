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
import type { ProvisionDependenciesRequest } from './ProvisionDependenciesRequest.js';
import {
    ProvisionDependenciesRequestFromJSON,
    ProvisionDependenciesRequestFromJSONTyped,
    ProvisionDependenciesRequestToJSON,
} from './ProvisionDependenciesRequest.js';
import type { ValuesSecretsRefsRequest } from './ValuesSecretsRefsRequest.js';
import {
    ValuesSecretsRefsRequestFromJSON,
    ValuesSecretsRefsRequestFromJSONTyped,
    ValuesSecretsRefsRequestToJSON,
} from './ValuesSecretsRefsRequest.js';

/**
 * PatchResourceDefinitionRequest describes a ResourceDefinition change request.
 * @export
 * @interface PatchResourceDefinitionRequestRequest
 */
export interface PatchResourceDefinitionRequestRequest {
    /**
     * (Optional) Security account required by the driver.
     * @type {string}
     * @memberof PatchResourceDefinitionRequestRequest
     */
    driver_account?: string;
    /**
     * 
     * @type {ValuesSecretsRefsRequest}
     * @memberof PatchResourceDefinitionRequestRequest
     */
    driver_inputs?: ValuesSecretsRefsRequest;
    /**
     * (Optional) The driver to be used to create the resource.
     * @type {string}
     * @memberof PatchResourceDefinitionRequestRequest
     */
    driver_type?: string;
    /**
     * (Optional) Resource display name
     * @type {string}
     * @memberof PatchResourceDefinitionRequestRequest
     */
    name?: string;
    /**
     * (Optional) A map where the keys are resType#resId (if resId is omitted, the same id of the current resource definition is used) of the resources that should be provisioned when the current resource is provisioned. This also specifies if the resources have a dependency on the current resource or if they have the same dependent resources.
     * @type {{ [key: string]: ProvisionDependenciesRequest; }}
     * @memberof PatchResourceDefinitionRequestRequest
     */
    provision?: { [key: string]: ProvisionDependenciesRequest; };
}

/**
 * Check if a given object implements the PatchResourceDefinitionRequestRequest interface.
 */
export function instanceOfPatchResourceDefinitionRequestRequest(value: object): boolean {
    return true;
}

export function PatchResourceDefinitionRequestRequestFromJSON(json: any): PatchResourceDefinitionRequestRequest {
    return PatchResourceDefinitionRequestRequestFromJSONTyped(json, false);
}

export function PatchResourceDefinitionRequestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchResourceDefinitionRequestRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'driver_account': json['driver_account'] == null ? undefined : json['driver_account'],
        'driver_inputs': json['driver_inputs'] == null ? undefined : ValuesSecretsRefsRequestFromJSON(json['driver_inputs']),
        'driver_type': json['driver_type'] == null ? undefined : json['driver_type'],
        'name': json['name'] == null ? undefined : json['name'],
        'provision': json['provision'] == null ? undefined : (mapValues(json['provision'], ProvisionDependenciesRequestFromJSON)),
    };
}

export function PatchResourceDefinitionRequestRequestToJSON(value?: PatchResourceDefinitionRequestRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'driver_account': value['driver_account'],
        'driver_inputs': ValuesSecretsRefsRequestToJSON(value['driver_inputs']),
        'driver_type': value['driver_type'],
        'name': value['name'],
        'provision': value['provision'] == null ? undefined : (mapValues(value['provision'], ProvisionDependenciesRequestToJSON)),
    };
}


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
import type { RuntimeInfoModuleController } from './RuntimeInfoModuleController.js';
import {
    RuntimeInfoModuleControllerFromJSON,
    RuntimeInfoModuleControllerFromJSONTyped,
    RuntimeInfoModuleControllerToJSON,
} from './RuntimeInfoModuleController.js';
import type { RuntimeInfoStatus } from './RuntimeInfoStatus.js';
import {
    RuntimeInfoStatusFromJSON,
    RuntimeInfoStatusFromJSONTyped,
    RuntimeInfoStatusToJSON,
} from './RuntimeInfoStatus.js';
import type { RuntimeInfoStatusClass } from './RuntimeInfoStatusClass.js';
import {
    RuntimeInfoStatusClassFromJSON,
    RuntimeInfoStatusClassFromJSONTyped,
    RuntimeInfoStatusClassToJSON,
} from './RuntimeInfoStatusClass.js';

/**
 * Module represents a collection of workload controllers (deployments/statefulsets/etc) for the module.
 * @export
 * @interface RuntimeInfoModule
 */
export interface RuntimeInfoModule {
    /**
     * 
     * @type {RuntimeInfoStatus}
     * @memberof RuntimeInfoModule
     */
    status: RuntimeInfoStatus;
    /**
     * 
     * @type {RuntimeInfoStatusClass}
     * @memberof RuntimeInfoModule
     */
    status_class: RuntimeInfoStatusClass;
    /**
     * A collection of workload controllers.
     * @type {{ [key: string]: RuntimeInfoModuleController; }}
     * @memberof RuntimeInfoModule
     */
    controllers: { [key: string]: RuntimeInfoModuleController; };
}

/**
 * Check if a given object implements the RuntimeInfoModule interface.
 */
export function instanceOfRuntimeInfoModule(value: object): boolean {
    if (!('status' in value)) return false;
    if (!('status_class' in value)) return false;
    if (!('controllers' in value)) return false;
    return true;
}

export function RuntimeInfoModuleFromJSON(json: any): RuntimeInfoModule {
    return RuntimeInfoModuleFromJSONTyped(json, false);
}

export function RuntimeInfoModuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeInfoModule {
    if (json == null) {
        return json;
    }
    return {
        
        'status': RuntimeInfoStatusFromJSON(json['status']),
        'status_class': RuntimeInfoStatusClassFromJSON(json['status_class']),
        'controllers': (mapValues(json['controllers'], RuntimeInfoModuleControllerFromJSON)),
    };
}

export function RuntimeInfoModuleToJSON(value?: RuntimeInfoModule | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': RuntimeInfoStatusToJSON(value['status']),
        'status_class': RuntimeInfoStatusClassToJSON(value['status_class']),
        'controllers': (mapValues(value['controllers'], RuntimeInfoModuleControllerToJSON)),
    };
}

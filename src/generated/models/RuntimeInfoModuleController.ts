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
import type { RuntimeInfoPod } from './RuntimeInfoPod.js';
import {
    RuntimeInfoPodFromJSON,
    RuntimeInfoPodFromJSONTyped,
    RuntimeInfoPodToJSON,
} from './RuntimeInfoPod.js';
import type { RuntimeInfoStatus } from './RuntimeInfoStatus.js';
import {
    RuntimeInfoStatusFromJSON,
    RuntimeInfoStatusFromJSONTyped,
    RuntimeInfoStatusToJSON,
} from './RuntimeInfoStatus.js';

/**
 * K8s controller.
 * @export
 * @interface RuntimeInfoModuleController
 */
export interface RuntimeInfoModuleController {
    /**
     * Controller kind.
     * @type {string}
     * @memberof RuntimeInfoModuleController
     */
    kind: string;
    /**
     * The most recently observed number of replicas.
     * @type {number}
     * @memberof RuntimeInfoModuleController
     */
    replicas?: number;
    /**
     * 
     * @type {RuntimeInfoStatus}
     * @memberof RuntimeInfoModuleController
     */
    status: RuntimeInfoStatus;
    /**
     * If a controller is not in a successful status, the reason from its condition.
     * @type {string}
     * @memberof RuntimeInfoModuleController
     */
    message?: string;
    /**
     * List of pods which belong to the controller.
     * @type {Array<RuntimeInfoPod>}
     * @memberof RuntimeInfoModuleController
     */
    pods?: Array<RuntimeInfoPod>;
    /**
     * Revision of the controller.
     * @type {number}
     * @memberof RuntimeInfoModuleController
     */
    revision?: number;
}

/**
 * Check if a given object implements the RuntimeInfoModuleController interface.
 */
export function instanceOfRuntimeInfoModuleController(value: object): boolean {
    if (!('kind' in value)) return false;
    if (!('status' in value)) return false;
    return true;
}

export function RuntimeInfoModuleControllerFromJSON(json: any): RuntimeInfoModuleController {
    return RuntimeInfoModuleControllerFromJSONTyped(json, false);
}

export function RuntimeInfoModuleControllerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeInfoModuleController {
    if (json == null) {
        return json;
    }
    return {
        
        'kind': json['kind'],
        'replicas': json['replicas'] == null ? undefined : json['replicas'],
        'status': RuntimeInfoStatusFromJSON(json['status']),
        'message': json['message'] == null ? undefined : json['message'],
        'pods': json['pods'] == null ? undefined : ((json['pods'] as Array<any>).map(RuntimeInfoPodFromJSON)),
        'revision': json['revision'] == null ? undefined : json['revision'],
    };
}

export function RuntimeInfoModuleControllerToJSON(value?: RuntimeInfoModuleController | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'kind': value['kind'],
        'replicas': value['replicas'],
        'status': RuntimeInfoStatusToJSON(value['status']),
        'message': value['message'],
        'pods': value['pods'] == null ? undefined : ((value['pods'] as Array<any>).map(RuntimeInfoPodToJSON)),
        'revision': value['revision'],
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.28.4
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { RuntimeInfoContainerStatus } from './RuntimeInfoContainerStatus.js';
import {
    RuntimeInfoContainerStatusFromJSON,
    RuntimeInfoContainerStatusFromJSONTyped,
    RuntimeInfoContainerStatusToJSON,
} from './RuntimeInfoContainerStatus.js';

/**
 * k8s pod.
 * @export
 * @interface RuntimeInfoPod
 */
export interface RuntimeInfoPod {
    /**
     * Pod name.
     * @type {string}
     * @memberof RuntimeInfoPod
     */
    podName: string;
    /**
     * Revision of the pod.
     * @type {number}
     * @memberof RuntimeInfoPod
     */
    revision?: number;
    /**
     * A simple, high-level summary of where the Pod is in its lifecycle.
     * @type {string}
     * @memberof RuntimeInfoPod
     */
    phase: RuntimeInfoPodPhaseEnum;
    /**
     * 
     * @type {string}
     * @memberof RuntimeInfoPod
     */
    status: RuntimeInfoPodStatusEnum;
    /**
     * The list has one entry per container in the manifest.
     * @type {Array<RuntimeInfoContainerStatus>}
     * @memberof RuntimeInfoPod
     */
    containerStatuses: Array<RuntimeInfoContainerStatus>;
}

/**
* @export
* @enum {string}
*/
export enum RuntimeInfoPodPhaseEnum {
    Pending = 'Pending',
    Running = 'Running',
    Succeeded = 'Succeeded',
    Failed = 'Failed',
    Unknown = 'Unknown',
    unknown_default_open_api = '11184809'
}
/**
* @export
* @enum {string}
*/
export enum RuntimeInfoPodStatusEnum {
    Failure = 'Failure',
    Success = 'Success',
    Pending = 'Pending',
    Unknown = 'Unknown',
    unknown_default_open_api = '11184809'
}


/**
 * Check if a given object implements the RuntimeInfoPod interface.
 */
export function instanceOfRuntimeInfoPod(value: object): boolean {
    if (!('podName' in value)) return false;
    if (!('phase' in value)) return false;
    if (!('status' in value)) return false;
    if (!('containerStatuses' in value)) return false;
    return true;
}

export function RuntimeInfoPodFromJSON(json: any): RuntimeInfoPod {
    return RuntimeInfoPodFromJSONTyped(json, false);
}

export function RuntimeInfoPodFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeInfoPod {
    if (json == null) {
        return json;
    }
    return {
        
        'podName': json['podName'],
        'revision': json['revision'] == null ? undefined : json['revision'],
        'phase': json['phase'],
        'status': json['status'],
        'containerStatuses': ((json['containerStatuses'] as Array<any>).map(RuntimeInfoContainerStatusFromJSON)),
    };
}

export function RuntimeInfoPodToJSON(value?: RuntimeInfoPod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'podName': value['podName'],
        'revision': value['revision'],
        'phase': value['phase'],
        'status': value['status'],
        'containerStatuses': ((value['containerStatuses'] as Array<any>).map(RuntimeInfoContainerStatusToJSON)),
    };
}


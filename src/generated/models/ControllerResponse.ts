/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.28.14
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { PodStateResponse } from './PodStateResponse.js';
import {
    PodStateResponseFromJSON,
    PodStateResponseFromJSONTyped,
    PodStateResponseToJSON,
} from './PodStateResponse.js';

/**
 * Controller represents deployment, stateful set etc
 * @export
 * @interface ControllerResponse
 */
export interface ControllerResponse {
    /**
     * 
     * @type {string}
     * @memberof ControllerResponse
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof ControllerResponse
     */
    message: string;
    /**
     * 
     * @type {Array<PodStateResponse>}
     * @memberof ControllerResponse
     */
    pods: Array<PodStateResponse>;
    /**
     * 
     * @type {number}
     * @memberof ControllerResponse
     */
    replicas: number;
    /**
     * 
     * @type {number}
     * @memberof ControllerResponse
     */
    revision: number;
    /**
     * 
     * @type {string}
     * @memberof ControllerResponse
     */
    status: string;
}

/**
 * Check if a given object implements the ControllerResponse interface.
 */
export function instanceOfControllerResponse(value: object): boolean {
    if (!('kind' in value)) return false;
    if (!('message' in value)) return false;
    if (!('pods' in value)) return false;
    if (!('replicas' in value)) return false;
    if (!('revision' in value)) return false;
    if (!('status' in value)) return false;
    return true;
}

export function ControllerResponseFromJSON(json: any): ControllerResponse {
    return ControllerResponseFromJSONTyped(json, false);
}

export function ControllerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ControllerResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'kind': json['kind'],
        'message': json['message'],
        'pods': ((json['pods'] as Array<any>).map(PodStateResponseFromJSON)),
        'replicas': json['replicas'],
        'revision': json['revision'],
        'status': json['status'],
    };
}

export function ControllerResponseToJSON(value?: ControllerResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'kind': value['kind'],
        'message': value['message'],
        'pods': ((value['pods'] as Array<any>).map(PodStateResponseToJSON)),
        'replicas': value['replicas'],
        'revision': value['revision'],
        'status': value['status'],
    };
}


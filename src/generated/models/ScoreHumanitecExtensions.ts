/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.1
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { ScoreHumanitecExtensionsDeploy } from './ScoreHumanitecExtensionsDeploy.js';
import {
    ScoreHumanitecExtensionsDeployFromJSON,
    ScoreHumanitecExtensionsDeployFromJSONTyped,
    ScoreHumanitecExtensionsDeployToJSON,
} from './ScoreHumanitecExtensionsDeploy.js';

/**
 * Humanitec workload extensions for the Workload Artefact Version. These can be used to override the profile, or workload module spec and resource attributes.
 * @export
 * @interface ScoreHumanitecExtensions
 */
export interface ScoreHumanitecExtensions {
    /**
     * The api version describing the format of the extensions.
     * @type {string}
     * @memberof ScoreHumanitecExtensions
     */
    apiVersion: string;
    /**
     * An optional override for the workload profile
     * @type {string}
     * @memberof ScoreHumanitecExtensions
     */
    profile?: string;
    /**
     * A map of additional workload spec fields that will be merged.
     * @type {{ [key: string]: any; }}
     * @memberof ScoreHumanitecExtensions
     */
    spec?: { [key: string]: any; };
    /**
     * 
     * @type {ScoreHumanitecExtensionsDeploy}
     * @memberof ScoreHumanitecExtensions
     */
    deploy?: ScoreHumanitecExtensionsDeploy;
}

/**
 * Check if a given object implements the ScoreHumanitecExtensions interface.
 */
export function instanceOfScoreHumanitecExtensions(value: object): boolean {
    if (!('apiVersion' in value)) return false;
    return true;
}

export function ScoreHumanitecExtensionsFromJSON(json: any): ScoreHumanitecExtensions {
    return ScoreHumanitecExtensionsFromJSONTyped(json, false);
}

export function ScoreHumanitecExtensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoreHumanitecExtensions {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'],
        'profile': json['profile'] == null ? undefined : json['profile'],
        'spec': json['spec'] == null ? undefined : json['spec'],
        'deploy': json['deploy'] == null ? undefined : ScoreHumanitecExtensionsDeployFromJSON(json['deploy']),
    };
}

export function ScoreHumanitecExtensionsToJSON(value?: ScoreHumanitecExtensions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'profile': value['profile'],
        'spec': value['spec'],
        'deploy': ScoreHumanitecExtensionsDeployToJSON(value['deploy']),
    };
}


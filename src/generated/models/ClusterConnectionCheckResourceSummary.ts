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
/**
 * 
 * @export
 * @interface ClusterConnectionCheckResourceSummary
 */
export interface ClusterConnectionCheckResourceSummary {
    /**
     * The resource type that was provisioned
     * @type {string}
     * @memberof ClusterConnectionCheckResourceSummary
     */
    type: string;
    /**
     * The resource class that was provisioned
     * @type {string}
     * @memberof ClusterConnectionCheckResourceSummary
     */
    _class: string;
    /**
     * The resource id that was provisioned
     * @type {string}
     * @memberof ClusterConnectionCheckResourceSummary
     */
    res_id: string;
    /**
     * The globally unique resource identifier for the resource
     * @type {string}
     * @memberof ClusterConnectionCheckResourceSummary
     */
    gu_res_id: string;
    /**
     * The list of globally unique resource identifiers that must be provisioned before this resource
     * @type {Array<string>}
     * @memberof ClusterConnectionCheckResourceSummary
     */
    depends_on: Array<string>;
    /**
     * The resource definition that was used to provision the resource
     * @type {string}
     * @memberof ClusterConnectionCheckResourceSummary
     */
    def_id: string;
    /**
     * The resource definition version that was used to provision the resource
     * @type {string}
     * @memberof ClusterConnectionCheckResourceSummary
     */
    def_version_id: string;
    /**
     * The driver type used by the resource definition, some driver types cannot be checked.
     * @type {string}
     * @memberof ClusterConnectionCheckResourceSummary
     */
    driver_type: string;
}

/**
 * Check if a given object implements the ClusterConnectionCheckResourceSummary interface.
 */
export function instanceOfClusterConnectionCheckResourceSummary(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('_class' in value)) return false;
    if (!('res_id' in value)) return false;
    if (!('gu_res_id' in value)) return false;
    if (!('depends_on' in value)) return false;
    if (!('def_id' in value)) return false;
    if (!('def_version_id' in value)) return false;
    if (!('driver_type' in value)) return false;
    return true;
}

export function ClusterConnectionCheckResourceSummaryFromJSON(json: any): ClusterConnectionCheckResourceSummary {
    return ClusterConnectionCheckResourceSummaryFromJSONTyped(json, false);
}

export function ClusterConnectionCheckResourceSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClusterConnectionCheckResourceSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        '_class': json['class'],
        'res_id': json['res_id'],
        'gu_res_id': json['gu_res_id'],
        'depends_on': json['depends_on'],
        'def_id': json['def_id'],
        'def_version_id': json['def_version_id'],
        'driver_type': json['driver_type'],
    };
}

export function ClusterConnectionCheckResourceSummaryToJSON(value?: ClusterConnectionCheckResourceSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'class': value['_class'],
        'res_id': value['res_id'],
        'gu_res_id': value['gu_res_id'],
        'depends_on': value['depends_on'],
        'def_id': value['def_id'],
        'def_version_id': value['def_version_id'],
        'driver_type': value['driver_type'],
    };
}


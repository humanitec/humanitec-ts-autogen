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
/**
 * MatchingCriteriaRule describes Matching Criteria rules.
 * @export
 * @interface MatchingCriteriaRuleRequest
 */
export interface MatchingCriteriaRuleRequest {
    /**
     * (Optional) The ID of the Application that the Resources should belong to.
     * @type {string}
     * @memberof MatchingCriteriaRuleRequest
     */
    app_id?: string;
    /**
     * (Optional) The class of the Resource in the Deployment Set. Can not be empty, if is not defined, set to `default`.
     * @type {string}
     * @memberof MatchingCriteriaRuleRequest
     */
    _class?: string;
    /**
     * (Optional) The ID of the Environment that the Resources should belong to. If `env_type` is also set, it must match the Type of the Environment for the Criteria to match.
     * @type {string}
     * @memberof MatchingCriteriaRuleRequest
     */
    env_id?: string;
    /**
     * (Optional) The Type of the Environment that the Resources should belong to. If `env_id` is also set, it must have an Environment Type that matches this parameter for the Criteria to match.
     * @type {string}
     * @memberof MatchingCriteriaRuleRequest
     */
    env_type?: string;
    /**
     * (Optional) The ID of the Resource in the Deployment Set. The ID is normally a `.` separated path to the definition in the set, e.g. `modules.my-module.externals.my-database`.
     * @type {string}
     * @memberof MatchingCriteriaRuleRequest
     */
    res_id?: string;
}

/**
 * Check if a given object implements the MatchingCriteriaRuleRequest interface.
 */
export function instanceOfMatchingCriteriaRuleRequest(value: object): boolean {
    return true;
}

export function MatchingCriteriaRuleRequestFromJSON(json: any): MatchingCriteriaRuleRequest {
    return MatchingCriteriaRuleRequestFromJSONTyped(json, false);
}

export function MatchingCriteriaRuleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchingCriteriaRuleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'app_id': json['app_id'] == null ? undefined : json['app_id'],
        '_class': json['class'] == null ? undefined : json['class'],
        'env_id': json['env_id'] == null ? undefined : json['env_id'],
        'env_type': json['env_type'] == null ? undefined : json['env_type'],
        'res_id': json['res_id'] == null ? undefined : json['res_id'],
    };
}

export function MatchingCriteriaRuleRequestToJSON(value?: MatchingCriteriaRuleRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'app_id': value['app_id'],
        'class': value['_class'],
        'env_id': value['env_id'],
        'env_type': value['env_type'],
        'res_id': value['res_id'],
    };
}

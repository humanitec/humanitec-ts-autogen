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
/**
 * An Automation Rule defining how and when artefacts in an environment should be updated.
 * @export
 * @interface AutomationRuleRequest
 */
export interface AutomationRuleRequest {
    /**
     * Whether the rule will be processed or not.
     * @type {boolean}
     * @memberof AutomationRuleRequest
     */
    active?: boolean;
    /**
     * A list of artefact names to be processed by the rule. If the array is empty, it implies include all. If `exclude_artefacts_filter` is true, this list describes the artefacts to exclude.
     * @type {Array<string>}
     * @memberof AutomationRuleRequest
     */
    artefacts_filter?: Array<string>;
    /**
     * Whether the artefacts specified in `artefacts_filter` should be excluded (true) or included (false) in the automation rule.
     * @type {boolean}
     * @memberof AutomationRuleRequest
     */
    exclude_artefacts_filter?: boolean;
    /**
     * DEPRECATED: Whether the images specified in `images_filter` should be excluded (true) or included (false) in the automation rule.
     * @type {boolean}
     * @memberof AutomationRuleRequest
     * @deprecated
     */
    exclude_images_filter?: boolean;
    /**
     * DEPRECATED: A list of image IDs to be processed by the rule. If the array is empty, it implies include all. If `exclude_images_filter` is true, this list describes images to exclude.
     * @type {Array<string>}
     * @memberof AutomationRuleRequest
     * @deprecated
     */
    images_filter?: Array<string>;
    /**
     * DEPRECATED: A regular expression applied to the branch or tag name depending on the value of `update_to`. Defaults to match all if omitted or empty.
     * @type {string}
     * @memberof AutomationRuleRequest
     * @deprecated
     */
    match?: string;
    /**
     * A regular expression applied to the ref of a new artefact version. Defaults to match all if omitted or empty.
     * @type {string}
     * @memberof AutomationRuleRequest
     */
    match_ref?: string;
    /**
     * Specifies the type of event. Currently, only updates to either branches or tags are supported. Must be `"update"`.
     * @type {string}
     * @memberof AutomationRuleRequest
     */
    type: string;
    /**
     * DEPRECATED: Specifies whether the update occurs on commit to branch or creation of tag. Must be one of `"branch"` or `"tag"`.
     * @type {string}
     * @memberof AutomationRuleRequest
     * @deprecated
     */
    update_to?: string;
}

/**
 * Check if a given object implements the AutomationRuleRequest interface.
 */
export function instanceOfAutomationRuleRequest(value: object): boolean {
    if (!('type' in value)) return false;
    return true;
}

export function AutomationRuleRequestFromJSON(json: any): AutomationRuleRequest {
    return AutomationRuleRequestFromJSONTyped(json, false);
}

export function AutomationRuleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutomationRuleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'active': json['active'] == null ? undefined : json['active'],
        'artefacts_filter': json['artefacts_filter'] == null ? undefined : json['artefacts_filter'],
        'exclude_artefacts_filter': json['exclude_artefacts_filter'] == null ? undefined : json['exclude_artefacts_filter'],
        'exclude_images_filter': json['exclude_images_filter'] == null ? undefined : json['exclude_images_filter'],
        'images_filter': json['images_filter'] == null ? undefined : json['images_filter'],
        'match': json['match'] == null ? undefined : json['match'],
        'match_ref': json['match_ref'] == null ? undefined : json['match_ref'],
        'type': json['type'],
        'update_to': json['update_to'] == null ? undefined : json['update_to'],
    };
}

export function AutomationRuleRequestToJSON(value?: AutomationRuleRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'active': value['active'],
        'artefacts_filter': value['artefacts_filter'],
        'exclude_artefacts_filter': value['exclude_artefacts_filter'],
        'exclude_images_filter': value['exclude_images_filter'],
        'images_filter': value['images_filter'],
        'match': value['match'],
        'match_ref': value['match_ref'],
        'type': value['type'],
        'update_to': value['update_to'],
    };
}


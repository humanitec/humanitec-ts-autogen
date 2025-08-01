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
import type { LogoResponse } from './LogoResponse.js';
import {
    LogoResponseFromJSON,
    LogoResponseFromJSONTyped,
    LogoResponseToJSON,
} from './LogoResponse.js';

/**
 * An Organization is the top level object in Humanitec. All other objects belong to an Organization.
 * @export
 * @interface OrganizationResponse
 */
export interface OrganizationResponse {
    /**
     * Timestamp when the Organization was created.
     * @type {Date}
     * @memberof OrganizationResponse
     */
    created_at: Date | null;
    /**
     * User ID that created the Organization.
     * @type {string}
     * @memberof OrganizationResponse
     */
    created_by: string;
    /**
     * Unique ID for the Organization.
     * @type {string}
     * @memberof OrganizationResponse
     */
    id: string;
    /**
     * 
     * @type {LogoResponse}
     * @memberof OrganizationResponse
     */
    logo: LogoResponse;
    /**
     * Human friendly name for the Organization.
     * @type {string}
     * @memberof OrganizationResponse
     */
    name: string;
    /**
     * Timestamp the trial expires at.
     * @type {Date}
     * @memberof OrganizationResponse
     */
    trial_expires_at: Date | null;
    /**
     * URL of the scaffolding service.
     * @type {string}
     * @memberof OrganizationResponse
     */
    scaffolding_url?: string;
}

/**
 * Check if a given object implements the OrganizationResponse interface.
 */
export function instanceOfOrganizationResponse(value: object): boolean {
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('id' in value)) return false;
    if (!('logo' in value)) return false;
    if (!('name' in value)) return false;
    if (!('trial_expires_at' in value)) return false;
    return true;
}

export function OrganizationResponseFromJSON(json: any): OrganizationResponse {
    return OrganizationResponseFromJSONTyped(json, false);
}

export function OrganizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': (json['created_at'] == null ? null : new Date(json['created_at'])),
        'created_by': json['created_by'],
        'id': json['id'],
        'logo': LogoResponseFromJSON(json['logo']),
        'name': json['name'],
        'trial_expires_at': (json['trial_expires_at'] == null ? null : new Date(json['trial_expires_at'])),
        'scaffolding_url': json['scaffolding_url'] == null ? undefined : json['scaffolding_url'],
    };
}

export function OrganizationResponseToJSON(value?: OrganizationResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': (value['created_at'] == null ? null : (value['created_at'] as any).toISOString()),
        'created_by': value['created_by'],
        'id': value['id'],
        'logo': LogoResponseToJSON(value['logo']),
        'name': value['name'],
        'trial_expires_at': (value['trial_expires_at'] == null ? null : (value['trial_expires_at'] as any).toISOString()),
        'scaffolding_url': value['scaffolding_url'],
    };
}


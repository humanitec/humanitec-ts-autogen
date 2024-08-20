/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.14
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * Resource Classes provide a way of specializing Resource Types.
 * Developers can set the class of a Resource alongside the type in their Score File.
 * Platform teams can match the class of a Resource via Matching Criteria.
 * @export
 * @interface ResourceClassResponse
 */
export interface ResourceClassResponse {
    /**
     * ID of the resource class.
     * @type {string}
     * @memberof ResourceClassResponse
     */
    id: string;
    /**
     * Defines the resource type this class is applicable for.
     * @type {string}
     * @memberof ResourceClassResponse
     */
    resource_type: string;
    /**
     * A human readable description when this class should be used.
     * @type {string}
     * @memberof ResourceClassResponse
     */
    description: string;
    /**
     * usedID of the user who created the resource class
     * @type {string}
     * @memberof ResourceClassResponse
     */
    created_by: string;
    /**
     * UTC timestamp at which the resource class was created
     * @type {Date}
     * @memberof ResourceClassResponse
     */
    created_at: Date;
}

/**
 * Check if a given object implements the ResourceClassResponse interface.
 */
export function instanceOfResourceClassResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('resource_type' in value)) return false;
    if (!('description' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('created_at' in value)) return false;
    return true;
}

export function ResourceClassResponseFromJSON(json: any): ResourceClassResponse {
    return ResourceClassResponseFromJSONTyped(json, false);
}

export function ResourceClassResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceClassResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'resource_type': json['resource_type'],
        'description': json['description'],
        'created_by': json['created_by'],
        'created_at': (new Date(json['created_at'])),
    };
}

export function ResourceClassResponseToJSON(value?: ResourceClassResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'resource_type': value['resource_type'],
        'description': value['description'],
        'created_by': value['created_by'],
        'created_at': ((value['created_at']).toISOString()),
    };
}


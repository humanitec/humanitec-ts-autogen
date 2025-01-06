/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.27
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
 * @interface DeltaMetadataResponse
 */
export interface DeltaMetadataResponse {
    /**
     * 
     * @type {boolean}
     * @memberof DeltaMetadataResponse
     */
    archived: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DeltaMetadataResponse
     */
    contributers?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof DeltaMetadataResponse
     */
    created_at: Date;
    /**
     * 
     * @type {string}
     * @memberof DeltaMetadataResponse
     */
    created_by: string;
    /**
     * 
     * @type {string}
     * @memberof DeltaMetadataResponse
     */
    env_id?: string;
    /**
     * 
     * @type {Date}
     * @memberof DeltaMetadataResponse
     */
    last_modified_at: Date;
    /**
     * 
     * @type {string}
     * @memberof DeltaMetadataResponse
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DeltaMetadataResponse
     */
    shared?: boolean;
}

/**
 * Check if a given object implements the DeltaMetadataResponse interface.
 */
export function instanceOfDeltaMetadataResponse(value: object): boolean {
    if (!('archived' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('last_modified_at' in value)) return false;
    return true;
}

export function DeltaMetadataResponseFromJSON(json: any): DeltaMetadataResponse {
    return DeltaMetadataResponseFromJSONTyped(json, false);
}

export function DeltaMetadataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeltaMetadataResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'archived': json['archived'],
        'contributers': json['contributers'] == null ? undefined : json['contributers'],
        'created_at': (new Date(json['created_at'])),
        'created_by': json['created_by'],
        'env_id': json['env_id'] == null ? undefined : json['env_id'],
        'last_modified_at': (new Date(json['last_modified_at'])),
        'name': json['name'] == null ? undefined : json['name'],
        'shared': json['shared'] == null ? undefined : json['shared'],
    };
}

export function DeltaMetadataResponseToJSON(value?: DeltaMetadataResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'archived': value['archived'],
        'contributers': value['contributers'],
        'created_at': ((value['created_at']).toISOString()),
        'created_by': value['created_by'],
        'env_id': value['env_id'],
        'last_modified_at': ((value['last_modified_at']).toISOString()),
        'name': value['name'],
        'shared': value['shared'],
    };
}


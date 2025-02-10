/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.3
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * Artefacts can be registered with Humanitec. Continuous Integration (CI) pipelines notify Humanitec when a new version of an Artefact becomes available. Humanitec tracks the Artefact along with metadata about how it was built.
 * @export
 * @interface ArtefactResponse
 */
export interface ArtefactResponse {
    /**
     * The time when the Artefact was added to Humanitec.
     * @type {string}
     * @memberof ArtefactResponse
     */
    created_at?: string;
    /**
     * The user ID of the user who added the Artefact to Humanitec.
     * @type {string}
     * @memberof ArtefactResponse
     */
    created_by?: string;
    /**
     * The UUID of the Artefact.
     * @type {string}
     * @memberof ArtefactResponse
     */
    id: string;
    /**
     * The name of the Artefact.
     * @type {string}
     * @memberof ArtefactResponse
     */
    name: string;
    /**
     * The type of the Artefact.
     * @type {string}
     * @memberof ArtefactResponse
     */
    type: string;
    /**
     * The time when the Artefact was updated for the last time.
     * @type {string}
     * @memberof ArtefactResponse
     */
    updated_at?: string;
    /**
     * The user ID of the user who updated the Artefact for the last time.
     * @type {string}
     * @memberof ArtefactResponse
     */
    updated_by?: string;
}

/**
 * Check if a given object implements the ArtefactResponse interface.
 */
export function instanceOfArtefactResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function ArtefactResponseFromJSON(json: any): ArtefactResponse {
    return ArtefactResponseFromJSONTyped(json, false);
}

export function ArtefactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArtefactResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'] == null ? undefined : json['created_at'],
        'created_by': json['created_by'] == null ? undefined : json['created_by'],
        'id': json['id'],
        'name': json['name'],
        'type': json['type'],
        'updated_at': json['updated_at'] == null ? undefined : json['updated_at'],
        'updated_by': json['updated_by'] == null ? undefined : json['updated_by'],
    };
}

export function ArtefactResponseToJSON(value?: ArtefactResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': value['created_at'],
        'created_by': value['created_by'],
        'id': value['id'],
        'name': value['name'],
        'type': value['type'],
        'updated_at': value['updated_at'],
        'updated_by': value['updated_by'],
    };
}


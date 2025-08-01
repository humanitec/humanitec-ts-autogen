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
 * Details of a Container Artefact Version
 * @export
 * @interface ContainerArtefactVersion
 */
export interface ContainerArtefactVersion {
    /**
     * If the Artefact Version is archived.
     * @type {boolean}
     * @memberof ContainerArtefactVersion
     */
    archived: boolean;
    /**
     * The UUID of the Artefact.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    artefact_id: string;
    /**
     * (Optional) The commit ID the Artefact Version was built on.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    commit: string;
    /**
     * The time when the Artefact Version was added to Humanitec.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    created_at?: string;
    /**
     * The user ID of the user who added the Artefact Version to Humanitec.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    created_by?: string;
    /**
     * The UUID of the Artefact Version.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    id: string;
    /**
     * The name of the Artefact.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    name: string;
    /**
     * (Optional) The ref the Artefact Version was built from.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    ref: string;
    /**
     * The time when the Artefact Version was updated for the last time.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    updated_at?: string;
    /**
     * The user ID of the user who performed the last updated on the Artefact Version.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    updated_by?: string;
    /**
     * (Optional) The version of the Artefact Version.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    version?: string;
    /**
     * (Optional) The Artefact Version digest.
     * @type {string}
     * @memberof ContainerArtefactVersion
     */
    digest: string;
}

/**
 * Check if a given object implements the ContainerArtefactVersion interface.
 */
export function instanceOfContainerArtefactVersion(value: object): boolean {
    if (!('archived' in value)) return false;
    if (!('artefact_id' in value)) return false;
    if (!('commit' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('ref' in value)) return false;
    if (!('digest' in value)) return false;
    return true;
}

export function ContainerArtefactVersionFromJSON(json: any): ContainerArtefactVersion {
    return ContainerArtefactVersionFromJSONTyped(json, false);
}

export function ContainerArtefactVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerArtefactVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'archived': json['archived'],
        'artefact_id': json['artefact_id'],
        'commit': json['commit'],
        'created_at': json['created_at'] == null ? undefined : json['created_at'],
        'created_by': json['created_by'] == null ? undefined : json['created_by'],
        'id': json['id'],
        'name': json['name'],
        'ref': json['ref'],
        'updated_at': json['updated_at'] == null ? undefined : json['updated_at'],
        'updated_by': json['updated_by'] == null ? undefined : json['updated_by'],
        'version': json['version'] == null ? undefined : json['version'],
        'digest': json['digest'],
    };
}

export function ContainerArtefactVersionToJSON(value?: ContainerArtefactVersion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'archived': value['archived'],
        'artefact_id': value['artefact_id'],
        'commit': value['commit'],
        'created_at': value['created_at'],
        'created_by': value['created_by'],
        'id': value['id'],
        'name': value['name'],
        'ref': value['ref'],
        'updated_at': value['updated_at'],
        'updated_by': value['updated_by'],
        'version': value['version'],
        'digest': value['digest'],
    };
}


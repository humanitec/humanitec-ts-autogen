/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types All of the Humanitec API unless explicitly only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning** | | --- | --- | | `200` | Success | | `201` | Success (In future, `201` will be replaced by `200`) | | `204` | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` should be regarded as an error which can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning** | | --- | --- | | `400` | General error. (Body will contain details) | | `401` | Attempt to access protected resource without `Authorization` Header. | | `403` | The `Bearer` or `JWT` does not grant access to the requested resource. | | `404` | Resource not found. | | `405` | Method not allowed | | `409` | Conflict. Usually indicated a resource with that ID already exists. | | `422` | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429` | Too many requests - request rate limit has been reached. | | `500` | Internal Error. If it occurs repeatedly, contact support. | 
 *
 * The version of the OpenAPI document: 0.26.3
 * Contact: apiteam@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { CreateWorkloadArtefactVersionExtensions } from './CreateWorkloadArtefactVersionExtensions.js';
import {
    CreateWorkloadArtefactVersionExtensionsFromJSON,
    CreateWorkloadArtefactVersionExtensionsFromJSONTyped,
    CreateWorkloadArtefactVersionExtensionsToJSON,
} from './CreateWorkloadArtefactVersionExtensions.js';

/**
 * Details for creating a new Workload Artefact Version
 * @export
 * @interface CreateWorkloadArtefactVersion
 */
export interface CreateWorkloadArtefactVersion {
    /**
     * The Artefact Version type.
     * @type {string}
     * @memberof CreateWorkloadArtefactVersion
     */
    type: string;
    /**
     * The Artefact name.
     * @type {string}
     * @memberof CreateWorkloadArtefactVersion
     */
    name: string;
    /**
     * (Optional) The Artefact Version.
     * @type {string}
     * @memberof CreateWorkloadArtefactVersion
     */
    version?: string;
    /**
     * (Optional) The ref the Artefact Version was built from.
     * @type {string}
     * @memberof CreateWorkloadArtefactVersion
     */
    ref?: string;
    /**
     * (Optional) The commit ID the Artefact Version was built on.
     * @type {string}
     * @memberof CreateWorkloadArtefactVersion
     */
    commit?: string;
    /**
     * A Json object containing the workload specification. Score v1b1 is expected.
     * @type {{ [key: string]: any; }}
     * @memberof CreateWorkloadArtefactVersion
     */
    spec: { [key: string]: any; };
    /**
     * An optional default image to assign to any containers in the workload that do not have an image set or whose image is '.'
     * @type {string}
     * @memberof CreateWorkloadArtefactVersion
     */
    image?: string;
    /**
     * An optional Json object containing the workload overrides. Score v1b1 is expected.
     * @type {{ [key: string]: any; }}
     * @memberof CreateWorkloadArtefactVersion
     */
    overrides?: { [key: string]: any; };
    /**
     * An optional set of path overrides that will be applied to the workload.
     * @type {{ [key: string]: any; }}
     * @memberof CreateWorkloadArtefactVersion
     */
    property_overrides?: { [key: string]: any; };
    /**
     * 
     * @type {CreateWorkloadArtefactVersionExtensions}
     * @memberof CreateWorkloadArtefactVersion
     */
    extensions?: CreateWorkloadArtefactVersionExtensions;
}

/**
 * Check if a given object implements the CreateWorkloadArtefactVersion interface.
 */
export function instanceOfCreateWorkloadArtefactVersion(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('name' in value)) return false;
    if (!('spec' in value)) return false;
    return true;
}

export function CreateWorkloadArtefactVersionFromJSON(json: any): CreateWorkloadArtefactVersion {
    return CreateWorkloadArtefactVersionFromJSONTyped(json, false);
}

export function CreateWorkloadArtefactVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWorkloadArtefactVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'name': json['name'],
        'version': json['version'] == null ? undefined : json['version'],
        'ref': json['ref'] == null ? undefined : json['ref'],
        'commit': json['commit'] == null ? undefined : json['commit'],
        'spec': json['spec'],
        'image': json['image'] == null ? undefined : json['image'],
        'overrides': json['overrides'] == null ? undefined : json['overrides'],
        'property_overrides': json['property_overrides'] == null ? undefined : json['property_overrides'],
        'extensions': json['extensions'] == null ? undefined : CreateWorkloadArtefactVersionExtensionsFromJSON(json['extensions']),
    };
}

export function CreateWorkloadArtefactVersionToJSON(value?: CreateWorkloadArtefactVersion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'name': value['name'],
        'version': value['version'],
        'ref': value['ref'],
        'commit': value['commit'],
        'spec': value['spec'],
        'image': value['image'],
        'overrides': value['overrides'],
        'property_overrides': value['property_overrides'],
        'extensions': CreateWorkloadArtefactVersionExtensionsToJSON(value['extensions']),
    };
}


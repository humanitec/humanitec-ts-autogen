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
 * DEPRECATED: This type exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.
 * 
 * Holds the metadata associated withe a Container Image Build
 * @export
 * @interface ImageBuildResponse
 */
export interface ImageBuildResponse {
    /**
     * The time when the build was added to Humanitec.
     * @type {string}
     * @memberof ImageBuildResponse
     */
    added_at?: string;
    /**
     * The branch name of the branch the build was built on
     * @type {string}
     * @memberof ImageBuildResponse
     */
    branch: string;
    /**
     * The commit ID that this build was built from.
     * @type {string}
     * @memberof ImageBuildResponse
     */
    commit: string;
    /**
     * The fully qualified Image URL including registry, repository and tag.
     * @type {string}
     * @memberof ImageBuildResponse
     */
    image: string;
    /**
     * The tag that the build was built from.
     * @type {Array<string>}
     * @memberof ImageBuildResponse
     */
    tags: Array<string>;
}

/**
 * Check if a given object implements the ImageBuildResponse interface.
 */
export function instanceOfImageBuildResponse(value: object): boolean {
    if (!('branch' in value)) return false;
    if (!('commit' in value)) return false;
    if (!('image' in value)) return false;
    if (!('tags' in value)) return false;
    return true;
}

export function ImageBuildResponseFromJSON(json: any): ImageBuildResponse {
    return ImageBuildResponseFromJSONTyped(json, false);
}

export function ImageBuildResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageBuildResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'added_at': json['added_at'] == null ? undefined : json['added_at'],
        'branch': json['branch'],
        'commit': json['commit'],
        'image': json['image'],
        'tags': json['tags'],
    };
}

export function ImageBuildResponseToJSON(value?: ImageBuildResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'added_at': value['added_at'],
        'branch': value['branch'],
        'commit': value['commit'],
        'image': value['image'],
        'tags': value['tags'],
    };
}


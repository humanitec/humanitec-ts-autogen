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
import type { ImageBuildRequest } from './ImageBuildRequest.js';
import {
    ImageBuildRequestFromJSON,
    ImageBuildRequestFromJSONTyped,
    ImageBuildRequestToJSON,
} from './ImageBuildRequest.js';

/**
 * DEPRECATED: This type exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.
 * 
 * Container Images (known simply as Images) can be registered with Humanitec. Continuous Integration (CI) pipelines can then notify Humanitec when a new build of a Container Image becomes available. Humanitec tracks the Image along with metadata about how it was built.
 * @export
 * @interface ImageRequest
 */
export interface ImageRequest {
    /**
     * The time the first build of this Image was added to the organization
     * @type {string}
     * @memberof ImageRequest
     */
    added_at?: string;
    /**
     * A list of Image Builds ordered by addition date.
     * @type {Array<ImageBuildRequest>}
     * @memberof ImageRequest
     */
    builds?: Array<ImageBuildRequest>;
    /**
     * The ID used to group different builds of the same Image together.
     * @type {string}
     * @memberof ImageRequest
     */
    id?: string;
    /**
     * The Image Source that this Image is added via
     * @type {string}
     * @memberof ImageRequest
     */
    source?: string;
}

/**
 * Check if a given object implements the ImageRequest interface.
 */
export function instanceOfImageRequest(value: object): boolean {
    return true;
}

export function ImageRequestFromJSON(json: any): ImageRequest {
    return ImageRequestFromJSONTyped(json, false);
}

export function ImageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'added_at': json['added_at'] == null ? undefined : json['added_at'],
        'builds': json['builds'] == null ? undefined : ((json['builds'] as Array<any>).map(ImageBuildRequestFromJSON)),
        'id': json['id'] == null ? undefined : json['id'],
        'source': json['source'] == null ? undefined : json['source'],
    };
}

export function ImageRequestToJSON(value?: ImageRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'added_at': value['added_at'],
        'builds': value['builds'] == null ? undefined : ((value['builds'] as Array<any>).map(ImageBuildRequestToJSON)),
        'id': value['id'],
        'source': value['source'],
    };
}


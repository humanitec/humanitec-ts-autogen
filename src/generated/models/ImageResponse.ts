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
import type { ImageBuildResponse } from './ImageBuildResponse.js';
import {
    ImageBuildResponseFromJSON,
    ImageBuildResponseFromJSONTyped,
    ImageBuildResponseToJSON,
} from './ImageBuildResponse.js';

/**
 * DEPRECATED: This type exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.
 * 
 * Container Images (known simply as Images) can be registered with Humanitec. Continuous Integration (CI) pipelines can then notify Humanitec when a new build of a Container Image becomes available. Humanitec tracks the Image along with metadata about how it was built.
 * @export
 * @interface ImageResponse
 */
export interface ImageResponse {
    /**
     * The time the first build of this Image was added to the organization
     * @type {string}
     * @memberof ImageResponse
     */
    added_at: string;
    /**
     * A list of Image Builds ordered by addition date.
     * @type {Array<ImageBuildResponse>}
     * @memberof ImageResponse
     */
    builds: Array<ImageBuildResponse>;
    /**
     * The ID used to group different builds of the same Image together.
     * @type {string}
     * @memberof ImageResponse
     */
    id: string;
    /**
     * The Image Source that this Image is added via
     * @type {string}
     * @memberof ImageResponse
     */
    source: string;
}

/**
 * Check if a given object implements the ImageResponse interface.
 */
export function instanceOfImageResponse(value: object): boolean {
    if (!('added_at' in value)) return false;
    if (!('builds' in value)) return false;
    if (!('id' in value)) return false;
    if (!('source' in value)) return false;
    return true;
}

export function ImageResponseFromJSON(json: any): ImageResponse {
    return ImageResponseFromJSONTyped(json, false);
}

export function ImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'added_at': json['added_at'],
        'builds': ((json['builds'] as Array<any>).map(ImageBuildResponseFromJSON)),
        'id': json['id'],
        'source': json['source'],
    };
}

export function ImageResponseToJSON(value?: ImageResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'added_at': value['added_at'],
        'builds': ((value['builds'] as Array<any>).map(ImageBuildResponseToJSON)),
        'id': value['id'],
        'source': value['source'],
    };
}

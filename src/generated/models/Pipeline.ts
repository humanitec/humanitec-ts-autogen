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
 * An object containing the details of a Pipeline.
 * @export
 * @interface Pipeline
 */
export interface Pipeline {
    /**
     * The id of the Pipeline.
     * @type {string}
     * @memberof Pipeline
     */
    id: string;
    /**
     * The current entity tag value for this Pipeline.
     * @type {string}
     * @memberof Pipeline
     */
    etag: string;
    /**
     * The id of the Organization containing this Pipeline.
     * @type {string}
     * @memberof Pipeline
     */
    org_id: string;
    /**
     * The id of the Application containing this Pipeline.
     * @type {string}
     * @memberof Pipeline
     */
    app_id: string;
    /**
     * The name of the Pipeline.
     * @type {string}
     * @memberof Pipeline
     */
    name: string;
    /**
     * The current status of the Pipeline.
     * @type {string}
     * @memberof Pipeline
     */
    status: string;
    /**
     * The unique id of the current Pipeline Version.
     * @type {string}
     * @memberof Pipeline
     */
    version: string;
    /**
     * The date and time when the Pipeline was created.
     * @type {Date}
     * @memberof Pipeline
     */
    created_at: Date;
    /**
     * The list of trigger types in the current schema.
     * @type {Array<string>}
     * @memberof Pipeline
     */
    trigger_types: Array<string>;
    /**
     * The map of key value pipeline additional information
     * @type {{ [key: string]: string; }}
     * @memberof Pipeline
     */
    metadata?: { [key: string]: string; };
}

/**
 * Check if a given object implements the Pipeline interface.
 */
export function instanceOfPipeline(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('etag' in value)) return false;
    if (!('org_id' in value)) return false;
    if (!('app_id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('status' in value)) return false;
    if (!('version' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('trigger_types' in value)) return false;
    return true;
}

export function PipelineFromJSON(json: any): Pipeline {
    return PipelineFromJSONTyped(json, false);
}

export function PipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pipeline {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'etag': json['etag'],
        'org_id': json['org_id'],
        'app_id': json['app_id'],
        'name': json['name'],
        'status': json['status'],
        'version': json['version'],
        'created_at': (new Date(json['created_at'])),
        'trigger_types': json['trigger_types'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

export function PipelineToJSON(value?: Pipeline | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'etag': value['etag'],
        'org_id': value['org_id'],
        'app_id': value['app_id'],
        'name': value['name'],
        'status': value['status'],
        'version': value['version'],
        'created_at': ((value['created_at']).toISOString()),
        'trigger_types': value['trigger_types'],
        'metadata': value['metadata'],
    };
}


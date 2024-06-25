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
/**
 * A Step within a Job.
 * @export
 * @interface PipelineStep
 */
export interface PipelineStep {
    /**
     * The index of the Step within the Pipeline Schema.
     * @type {number}
     * @memberof PipelineStep
     */
    index: number;
    /**
     * The name of the step or a generated default.
     * @type {string}
     * @memberof PipelineStep
     */
    name: string;
    /**
     * The action used by this step.
     * @type {string}
     * @memberof PipelineStep
     */
    uses: string;
    /**
     * The current status of this Step within the Job.
     * @type {string}
     * @memberof PipelineStep
     */
    status: string;
    /**
     * A human-readable message indicating the reason for the status.
     * @type {string}
     * @memberof PipelineStep
     */
    status_message: string;
    /**
     * The date and time when this Step was first created within the Job.
     * @type {Date}
     * @memberof PipelineStep
     */
    created_at: Date;
    /**
     * The date and time when this Step entered a successful, failed, or cancelled status.
     * @type {Date}
     * @memberof PipelineStep
     */
    completed_at?: Date;
    /**
     * The timeout for this Step.
     * @type {number}
     * @memberof PipelineStep
     */
    timeout_seconds: number;
    /**
     * A map of related object ids that this step created or interacted with.
     * @type {{ [key: string]: string; }}
     * @memberof PipelineStep
     */
    related_entities: { [key: string]: string; };
}

/**
 * Check if a given object implements the PipelineStep interface.
 */
export function instanceOfPipelineStep(value: object): boolean {
    if (!('index' in value)) return false;
    if (!('name' in value)) return false;
    if (!('uses' in value)) return false;
    if (!('status' in value)) return false;
    if (!('status_message' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('timeout_seconds' in value)) return false;
    if (!('related_entities' in value)) return false;
    return true;
}

export function PipelineStepFromJSON(json: any): PipelineStep {
    return PipelineStepFromJSONTyped(json, false);
}

export function PipelineStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineStep {
    if (json == null) {
        return json;
    }
    return {
        
        'index': json['index'],
        'name': json['name'],
        'uses': json['uses'],
        'status': json['status'],
        'status_message': json['status_message'],
        'created_at': (new Date(json['created_at'])),
        'completed_at': json['completed_at'] == null ? undefined : (new Date(json['completed_at'])),
        'timeout_seconds': json['timeout_seconds'],
        'related_entities': json['related_entities'],
    };
}

export function PipelineStepToJSON(value?: PipelineStep | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'index': value['index'],
        'name': value['name'],
        'uses': value['uses'],
        'status': value['status'],
        'status_message': value['status_message'],
        'created_at': ((value['created_at']).toISOString()),
        'completed_at': value['completed_at'] == null ? undefined : ((value['completed_at']).toISOString()),
        'timeout_seconds': value['timeout_seconds'],
        'related_entities': value['related_entities'],
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.20
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * Details of a Run within the Pipeline.
 * @export
 * @interface PipelineRun
 */
export interface PipelineRun {
    /**
     * The unique id of the Run.
     * @type {string}
     * @memberof PipelineRun
     */
    id: string;
    /**
     * The current entity tag value for this Run.
     * @type {string}
     * @memberof PipelineRun
     */
    etag: string;
    /**
     * The id of the Organization containing this Run.
     * @type {string}
     * @memberof PipelineRun
     */
    org_id: string;
    /**
     * The id of the Application containing this Run.
     * @type {string}
     * @memberof PipelineRun
     */
    app_id: string;
    /**
     * Environments linked to this Pipeline Run through input parameters or step executions.
     * @type {Array<string>}
     * @memberof PipelineRun
     */
    env_ids: Array<string>;
    /**
     * The id of the Pipeline associated with the Run.
     * @type {string}
     * @memberof PipelineRun
     */
    pipeline_id: string;
    /**
     * The id of the Pipeline Version associated with the Run.
     * @type {string}
     * @memberof PipelineRun
     */
    pipeline_version: string;
    /**
     * The current status of this Run.
     * @type {string}
     * @memberof PipelineRun
     */
    status: string;
    /**
     * A human-readable message indicating the reason for the status.
     * @type {string}
     * @memberof PipelineRun
     */
    status_message: string;
    /**
     * The date and time when this Run was first created.
     * @type {Date}
     * @memberof PipelineRun
     */
    created_at: Date;
    /**
     * User id that created or triggered the Run.
     * @type {string}
     * @memberof PipelineRun
     */
    created_by: string;
    /**
     * The date and time when this Run entered executing status.
     * @type {Date}
     * @memberof PipelineRun
     */
    executing_at?: Date;
    /**
     * The date and time when cancellation of this Run was requested.
     * @type {Date}
     * @memberof PipelineRun
     */
    cancellation_requested_at?: Date;
    /**
     * The date and time when this Run entered a successful, failed, or cancelled status.
     * @type {Date}
     * @memberof PipelineRun
     */
    completed_at?: Date;
    /**
     * The timeout for this Run.
     * @type {number}
     * @memberof PipelineRun
     */
    timeout_seconds: number;
    /**
     * The trigger type that was triggered this Run to start.
     * @type {string}
     * @memberof PipelineRun
     */
    trigger: string;
    /**
     * The inputs that were provided for this Run.
     * @type {{ [key: string]: any; }}
     * @memberof PipelineRun
     */
    inputs: { [key: string]: any; };
    /**
     * The user id that the pipeline run is executing as when it calls Humanitec APIs.
     * @type {string}
     * @memberof PipelineRun
     */
    run_as: string;
    /**
     * The optional concurrency group for this run within the application
     * @type {string}
     * @memberof PipelineRun
     */
    concurrency_group?: string;
    /**
     * Aggregated events on which run's jobs are waiting for
     * @type {{ [key: string]: string; }}
     * @memberof PipelineRun
     */
    waiting_for: { [key: string]: string; };
}

/**
 * Check if a given object implements the PipelineRun interface.
 */
export function instanceOfPipelineRun(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('etag' in value)) return false;
    if (!('org_id' in value)) return false;
    if (!('app_id' in value)) return false;
    if (!('env_ids' in value)) return false;
    if (!('pipeline_id' in value)) return false;
    if (!('pipeline_version' in value)) return false;
    if (!('status' in value)) return false;
    if (!('status_message' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('timeout_seconds' in value)) return false;
    if (!('trigger' in value)) return false;
    if (!('inputs' in value)) return false;
    if (!('run_as' in value)) return false;
    if (!('waiting_for' in value)) return false;
    return true;
}

export function PipelineRunFromJSON(json: any): PipelineRun {
    return PipelineRunFromJSONTyped(json, false);
}

export function PipelineRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineRun {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'etag': json['etag'],
        'org_id': json['org_id'],
        'app_id': json['app_id'],
        'env_ids': json['env_ids'],
        'pipeline_id': json['pipeline_id'],
        'pipeline_version': json['pipeline_version'],
        'status': json['status'],
        'status_message': json['status_message'],
        'created_at': (new Date(json['created_at'])),
        'created_by': json['created_by'],
        'executing_at': json['executing_at'] == null ? undefined : (new Date(json['executing_at'])),
        'cancellation_requested_at': json['cancellation_requested_at'] == null ? undefined : (new Date(json['cancellation_requested_at'])),
        'completed_at': json['completed_at'] == null ? undefined : (new Date(json['completed_at'])),
        'timeout_seconds': json['timeout_seconds'],
        'trigger': json['trigger'],
        'inputs': json['inputs'],
        'run_as': json['run_as'],
        'concurrency_group': json['concurrency_group'] == null ? undefined : json['concurrency_group'],
        'waiting_for': json['waiting_for'],
    };
}

export function PipelineRunToJSON(value?: PipelineRun | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'etag': value['etag'],
        'org_id': value['org_id'],
        'app_id': value['app_id'],
        'env_ids': value['env_ids'],
        'pipeline_id': value['pipeline_id'],
        'pipeline_version': value['pipeline_version'],
        'status': value['status'],
        'status_message': value['status_message'],
        'created_at': ((value['created_at']).toISOString()),
        'created_by': value['created_by'],
        'executing_at': value['executing_at'] == null ? undefined : ((value['executing_at']).toISOString()),
        'cancellation_requested_at': value['cancellation_requested_at'] == null ? undefined : ((value['cancellation_requested_at']).toISOString()),
        'completed_at': value['completed_at'] == null ? undefined : ((value['completed_at']).toISOString()),
        'timeout_seconds': value['timeout_seconds'],
        'trigger': value['trigger'],
        'inputs': value['inputs'],
        'run_as': value['run_as'],
        'concurrency_group': value['concurrency_group'],
        'waiting_for': value['waiting_for'],
    };
}


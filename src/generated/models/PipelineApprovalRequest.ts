/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.28.4
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * An approval object
 * @export
 * @interface PipelineApprovalRequest
 */
export interface PipelineApprovalRequest {
    /**
     * The id of the approval object.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    id: string;
    /**
     * The id of the Organization.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    org_id: string;
    /**
     * The id of the Application.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    app_id: string;
    /**
     * The id of the Pipeline.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    pipeline_id: string;
    /**
     * The id of the Pipeline's Run.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    run_id: string;
    /**
     * The id of the Run's Job.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    job_id: string;
    /**
     * The environment for which the approver needs to have deploy permission to approve the job.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    env_id: string;
    /**
     * A human-readable message indicating the reason for approval.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    message: string;
    /**
     * The date and time when the approval request was created.
     * @type {Date}
     * @memberof PipelineApprovalRequest
     */
    created_at: Date;
    /**
     * The current status of the approval request.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    status: PipelineApprovalRequestStatusEnum;
    /**
     * The user who approved or denied the request.
     * @type {string}
     * @memberof PipelineApprovalRequest
     */
    approved_by?: string;
    /**
     * The date and time when the request was approved or denied.
     * @type {Date}
     * @memberof PipelineApprovalRequest
     */
    approved_at?: Date;
}

/**
* @export
* @enum {string}
*/
export enum PipelineApprovalRequestStatusEnum {
    waiting = 'waiting',
    approved = 'approved',
    denied = 'denied',
    cancelled = 'cancelled',
    unknown_default_open_api = '11184809'
}


/**
 * Check if a given object implements the PipelineApprovalRequest interface.
 */
export function instanceOfPipelineApprovalRequest(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('org_id' in value)) return false;
    if (!('app_id' in value)) return false;
    if (!('pipeline_id' in value)) return false;
    if (!('run_id' in value)) return false;
    if (!('job_id' in value)) return false;
    if (!('env_id' in value)) return false;
    if (!('message' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('status' in value)) return false;
    return true;
}

export function PipelineApprovalRequestFromJSON(json: any): PipelineApprovalRequest {
    return PipelineApprovalRequestFromJSONTyped(json, false);
}

export function PipelineApprovalRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineApprovalRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'org_id': json['org_id'],
        'app_id': json['app_id'],
        'pipeline_id': json['pipeline_id'],
        'run_id': json['run_id'],
        'job_id': json['job_id'],
        'env_id': json['env_id'],
        'message': json['message'],
        'created_at': (new Date(json['created_at'])),
        'status': json['status'],
        'approved_by': json['approved_by'] == null ? undefined : json['approved_by'],
        'approved_at': json['approved_at'] == null ? undefined : (new Date(json['approved_at'])),
    };
}

export function PipelineApprovalRequestToJSON(value?: PipelineApprovalRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'org_id': value['org_id'],
        'app_id': value['app_id'],
        'pipeline_id': value['pipeline_id'],
        'run_id': value['run_id'],
        'job_id': value['job_id'],
        'env_id': value['env_id'],
        'message': value['message'],
        'created_at': ((value['created_at']).toISOString()),
        'status': value['status'],
        'approved_by': value['approved_by'],
        'approved_at': value['approved_at'] == null ? undefined : ((value['approved_at']).toISOString()),
    };
}


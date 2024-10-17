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
import type { DeploymentPipelineReferenceResponse } from './DeploymentPipelineReferenceResponse.js';
import {
    DeploymentPipelineReferenceResponseFromJSON,
    DeploymentPipelineReferenceResponseFromJSONTyped,
    DeploymentPipelineReferenceResponseToJSON,
} from './DeploymentPipelineReferenceResponse.js';

/**
 * Deployments represent updates to the running state of an Environment.
 * 
 * Deployments are made by applying _Deltas_ to a state defined by an existing Deployment. The Environment’s from_deploy property defines the Deployment. This Deployment is usually but not always in the current Environment. If the Deployment is from another Environment, the state of that Environment will be "cloned" into the current Environment with the option to apply a Delta.
 * @export
 * @interface DeploymentResponse
 */
export interface DeploymentResponse {
    /**
     * An optional comment to help communicate the purpose of the Deployment.
     * @type {string}
     * @memberof DeploymentResponse
     */
    comment: string;
    /**
     * The Timestamp of when the Deployment was initiated.
     * @type {Date}
     * @memberof DeploymentResponse
     */
    created_at: Date;
    /**
     * The user who initiated the Deployment.
     * @type {string}
     * @memberof DeploymentResponse
     */
    created_by: string;
    /**
     * ID of the Deployment Delta describing the changes to the current Environment for this Deployment.
     * @type {string}
     * @memberof DeploymentResponse
     */
    delta_id?: string;
    /**
     * The Environment where the Deployment occurred.
     * @type {string}
     * @memberof DeploymentResponse
     */
    env_id: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResponse
     */
    export_file: string;
    /**
     * The ID of the Dependency Graph which holds the sorted list of the resources provisioned with this deployment.
     * The referenced Graph does not include resources of type k8s-cluster and k8s-namespace (and logging in case of deployments executed in Operator mode).
     * @type {string}
     * @memberof DeploymentResponse
     */
    dependency_graph_id?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResponse
     */
    export_status: string;
    /**
     * The ID of the Deployment that this Deployment was based on.
     * @type {string}
     * @memberof DeploymentResponse
     */
    from_id: string;
    /**
     * The ID of the Deployment.
     * @type {string}
     * @memberof DeploymentResponse
     */
    id: string;
    /**
     * 
     * @type {DeploymentPipelineReferenceResponse}
     * @memberof DeploymentResponse
     */
    pipeline?: DeploymentPipelineReferenceResponse;
    /**
     * ID of the Deployment Set describing the state of the Environment after Deployment.
     * @type {string}
     * @memberof DeploymentResponse
     */
    set_id: string;
    /**
     * The current status of the Deployment. Can be `pending`, `in progress`, `succeeded`, or `failed`.
     * @type {string}
     * @memberof DeploymentResponse
     */
    status: string;
    /**
     * The timestamp of the last `status` change. If `status` is `succeeded` or `failed` it it will indicate when the Deployment finished.
     * @type {Date}
     * @memberof DeploymentResponse
     */
    status_changed_at: Date;
    /**
     * ID of the Value Set Version describe the values to be used for this Deployment.
     * @type {string}
     * @memberof DeploymentResponse
     */
    value_set_version_id?: string;
}

/**
 * Check if a given object implements the DeploymentResponse interface.
 */
export function instanceOfDeploymentResponse(value: object): boolean {
    if (!('comment' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('created_by' in value)) return false;
    if (!('env_id' in value)) return false;
    if (!('export_file' in value)) return false;
    if (!('export_status' in value)) return false;
    if (!('from_id' in value)) return false;
    if (!('id' in value)) return false;
    if (!('set_id' in value)) return false;
    if (!('status' in value)) return false;
    if (!('status_changed_at' in value)) return false;
    return true;
}

export function DeploymentResponseFromJSON(json: any): DeploymentResponse {
    return DeploymentResponseFromJSONTyped(json, false);
}

export function DeploymentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeploymentResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'comment': json['comment'],
        'created_at': (new Date(json['created_at'])),
        'created_by': json['created_by'],
        'delta_id': json['delta_id'] == null ? undefined : json['delta_id'],
        'env_id': json['env_id'],
        'export_file': json['export_file'],
        'dependency_graph_id': json['dependency_graph_id'] == null ? undefined : json['dependency_graph_id'],
        'export_status': json['export_status'],
        'from_id': json['from_id'],
        'id': json['id'],
        'pipeline': json['pipeline'] == null ? undefined : DeploymentPipelineReferenceResponseFromJSON(json['pipeline']),
        'set_id': json['set_id'],
        'status': json['status'],
        'status_changed_at': (new Date(json['status_changed_at'])),
        'value_set_version_id': json['value_set_version_id'] == null ? undefined : json['value_set_version_id'],
    };
}

export function DeploymentResponseToJSON(value?: DeploymentResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'comment': value['comment'],
        'created_at': ((value['created_at']).toISOString()),
        'created_by': value['created_by'],
        'delta_id': value['delta_id'],
        'env_id': value['env_id'],
        'export_file': value['export_file'],
        'dependency_graph_id': value['dependency_graph_id'],
        'export_status': value['export_status'],
        'from_id': value['from_id'],
        'id': value['id'],
        'pipeline': DeploymentPipelineReferenceResponseToJSON(value['pipeline']),
        'set_id': value['set_id'],
        'status': value['status'],
        'status_changed_at': ((value['status_changed_at']).toISOString()),
        'value_set_version_id': value['value_set_version_id'],
    };
}


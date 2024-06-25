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
import type { DeploymentPipelineReferenceRequest } from './DeploymentPipelineReferenceRequest.js';
import {
    DeploymentPipelineReferenceRequestFromJSON,
    DeploymentPipelineReferenceRequestFromJSONTyped,
    DeploymentPipelineReferenceRequestToJSON,
} from './DeploymentPipelineReferenceRequest.js';

/**
 * Deployments represent updates to the running state of an Environment.
 * 
 * Deployments are made by applying _Deltas_ to a state defined by an existing Deployment. The Environment’s from_deploy property defines the Deployment. This Deployment is usually but not always in the current Environment. If the Deployment is from another Environment, the state of that Environment will be "cloned" into the current Environment with the option to apply a Delta.
 * @export
 * @interface DeploymentRequest
 */
export interface DeploymentRequest {
    /**
     * An optional comment to help communicate the purpose of the Deployment.
     * @type {string}
     * @memberof DeploymentRequest
     */
    comment?: string;
    /**
     * ID of the Deployment Delta describing the changes to the current Environment for this Deployment.
     * @type {string}
     * @memberof DeploymentRequest
     */
    delta_id?: string;
    /**
     * 
     * @type {DeploymentPipelineReferenceRequest}
     * @memberof DeploymentRequest
     */
    pipeline?: DeploymentPipelineReferenceRequest;
    /**
     * ID of the Deployment Set describing the state of the Environment after Deployment.
     * @type {string}
     * @memberof DeploymentRequest
     */
    set_id?: string;
    /**
     * ID of the Value Set Version describe the values to be used for this Deployment.
     * @type {string}
     * @memberof DeploymentRequest
     */
    value_set_version_id?: string;
}

/**
 * Check if a given object implements the DeploymentRequest interface.
 */
export function instanceOfDeploymentRequest(value: object): boolean {
    return true;
}

export function DeploymentRequestFromJSON(json: any): DeploymentRequest {
    return DeploymentRequestFromJSONTyped(json, false);
}

export function DeploymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeploymentRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'comment': json['comment'] == null ? undefined : json['comment'],
        'delta_id': json['delta_id'] == null ? undefined : json['delta_id'],
        'pipeline': json['pipeline'] == null ? undefined : DeploymentPipelineReferenceRequestFromJSON(json['pipeline']),
        'set_id': json['set_id'] == null ? undefined : json['set_id'],
        'value_set_version_id': json['value_set_version_id'] == null ? undefined : json['value_set_version_id'],
    };
}

export function DeploymentRequestToJSON(value?: DeploymentRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'comment': value['comment'],
        'delta_id': value['delta_id'],
        'pipeline': DeploymentPipelineReferenceRequestToJSON(value['pipeline']),
        'set_id': value['set_id'],
        'value_set_version_id': value['value_set_version_id'],
    };
}


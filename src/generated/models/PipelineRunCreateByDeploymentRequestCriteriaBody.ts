/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.2
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * Trigger the pipeline that has a deployment_request trigger and criteria that match this target environment. If "delta_id" or "set_id" is provided, the matching criteria must support deployment type "deploy". If "deployment_id" is provided, the matching criteria must support deployment type "re-deploy".
 * When "delta_id" is provided, the inputs to the Pipeline Run will be "env_id", "comment", "delta_id" and "value_set_version_id" if provided. When "deployment_id" is provided, the inputs to the Pipeline Run will be "env_id", "comment", "deployment_id", with "set_id", "value_set_version_id" being retrieved from the deployment itself. When "set_id" is provided, the inputs to the Pipeline Run will be "env_id", "comment", "set_id", and "value_set_version_id" if provided.
 * 
 * @export
 * @interface PipelineRunCreateByDeploymentRequestCriteriaBody
 */
export interface PipelineRunCreateByDeploymentRequestCriteriaBody {
    /**
     * The target environment within the Application to deploy to.
     * @type {string}
     * @memberof PipelineRunCreateByDeploymentRequestCriteriaBody
     */
    env_id?: string;
    /**
     * The target environment within the Application to deploy to.
     * @type {string}
     * @memberof PipelineRunCreateByDeploymentRequestCriteriaBody
     * @deprecated
     */
    environment?: string;
    /**
     * A deployment delta to apply to the target environment. This delta must already exist. This field is mutually exclusive with "deployment_id" and "set_id".
     * @type {string}
     * @memberof PipelineRunCreateByDeploymentRequestCriteriaBody
     */
    delta_id?: string;
    /**
     * An existing deployment to redeploy into the target environment. The deployment set and value set will be copied. This field is mutually exclusive with "delta_id" and "set_id".
     * @type {string}
     * @memberof PipelineRunCreateByDeploymentRequestCriteriaBody
     */
    deployment_id?: string;
    /**
     * A direct deployment set to apply to the target environment. This deployment set must already exist. This field is mutually exclusive with "delta_id" and "set_id".
     * @type {string}
     * @memberof PipelineRunCreateByDeploymentRequestCriteriaBody
     */
    set_id?: string;
    /**
     * The exact value set version to use when deploying to the target environment. This value set version must exist. This field can only be used when "delta_id" or "set_id" is specified.
     * @type {string}
     * @memberof PipelineRunCreateByDeploymentRequestCriteriaBody
     */
    value_set_version_id?: string;
    /**
     * An optional comment to apply to the Deployment.
     * @type {string}
     * @memberof PipelineRunCreateByDeploymentRequestCriteriaBody
     */
    comment?: string;
}

/**
 * Check if a given object implements the PipelineRunCreateByDeploymentRequestCriteriaBody interface.
 */
export function instanceOfPipelineRunCreateByDeploymentRequestCriteriaBody(value: object): boolean {
    return true;
}

export function PipelineRunCreateByDeploymentRequestCriteriaBodyFromJSON(json: any): PipelineRunCreateByDeploymentRequestCriteriaBody {
    return PipelineRunCreateByDeploymentRequestCriteriaBodyFromJSONTyped(json, false);
}

export function PipelineRunCreateByDeploymentRequestCriteriaBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineRunCreateByDeploymentRequestCriteriaBody {
    if (json == null) {
        return json;
    }
    return {
        
        'env_id': json['env_id'] == null ? undefined : json['env_id'],
        'environment': json['environment'] == null ? undefined : json['environment'],
        'delta_id': json['delta_id'] == null ? undefined : json['delta_id'],
        'deployment_id': json['deployment_id'] == null ? undefined : json['deployment_id'],
        'set_id': json['set_id'] == null ? undefined : json['set_id'],
        'value_set_version_id': json['value_set_version_id'] == null ? undefined : json['value_set_version_id'],
        'comment': json['comment'] == null ? undefined : json['comment'],
    };
}

export function PipelineRunCreateByDeploymentRequestCriteriaBodyToJSON(value?: PipelineRunCreateByDeploymentRequestCriteriaBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'env_id': value['env_id'],
        'environment': value['environment'],
        'delta_id': value['delta_id'],
        'deployment_id': value['deployment_id'],
        'set_id': value['set_id'],
        'value_set_version_id': value['value_set_version_id'],
        'comment': value['comment'],
    };
}


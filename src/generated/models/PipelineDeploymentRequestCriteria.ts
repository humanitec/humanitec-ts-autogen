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
 * A deployment request matching criteria for a Pipeline.
 * @export
 * @interface PipelineDeploymentRequestCriteria
 */
export interface PipelineDeploymentRequestCriteria {
    /**
     * The trigger to call
     * @type {string}
     * @memberof PipelineDeploymentRequestCriteria
     */
    trigger: string;
    /**
     * The unique id of the criteria within this Pipeline.
     * @type {string}
     * @memberof PipelineDeploymentRequestCriteria
     */
    id: string;
    /**
     * The id of the Pipeline tied to this deployment request criteria.
     * @type {string}
     * @memberof PipelineDeploymentRequestCriteria
     */
    pipeline_id: string;
    /**
     * The current display name of the Pipeline.
     * @type {string}
     * @memberof PipelineDeploymentRequestCriteria
     */
    pipeline_name: string;
    /**
     * The Environment Type that this criteria will match. If defined, this criteria will only apply to Environments that have this type.
     * 
     * @type {string}
     * @memberof PipelineDeploymentRequestCriteria
     */
    env_type?: string;
    /**
     * The id of the Application for which this criteria matches. If this Pipeline is defined in an Application, then this value can only be null or the id of the Application.
     * 
     * @type {string}
     * @memberof PipelineDeploymentRequestCriteria
     */
    app_id?: string;
    /**
     * The exact id of the Environment which this criteria will match.
     * 
     * @type {string}
     * @memberof PipelineDeploymentRequestCriteria
     */
    env_id?: string;
    /**
     * The type of deployment that this criteria will match. Valid values are "deploy" and "redeploy". "redeploy"  applies only to deployment request to redeploy a previous deployment id while "deploy" will apply to all other requests that include a Delta or Deployment Set. If not defined, all deployment types will match.
     * 
     * @type {string}
     * @memberof PipelineDeploymentRequestCriteria
     */
    deployment_type?: string;
}

/**
 * Check if a given object implements the PipelineDeploymentRequestCriteria interface.
 */
export function instanceOfPipelineDeploymentRequestCriteria(value: object): boolean {
    if (!('trigger' in value)) return false;
    if (!('id' in value)) return false;
    if (!('pipeline_id' in value)) return false;
    if (!('pipeline_name' in value)) return false;
    return true;
}

export function PipelineDeploymentRequestCriteriaFromJSON(json: any): PipelineDeploymentRequestCriteria {
    return PipelineDeploymentRequestCriteriaFromJSONTyped(json, false);
}

export function PipelineDeploymentRequestCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineDeploymentRequestCriteria {
    if (json == null) {
        return json;
    }
    return {
        
        'trigger': json['trigger'],
        'id': json['id'],
        'pipeline_id': json['pipeline_id'],
        'pipeline_name': json['pipeline_name'],
        'env_type': json['env_type'] == null ? undefined : json['env_type'],
        'app_id': json['app_id'] == null ? undefined : json['app_id'],
        'env_id': json['env_id'] == null ? undefined : json['env_id'],
        'deployment_type': json['deployment_type'] == null ? undefined : json['deployment_type'],
    };
}

export function PipelineDeploymentRequestCriteriaToJSON(value?: PipelineDeploymentRequestCriteria | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'trigger': value['trigger'],
        'id': value['id'],
        'pipeline_id': value['pipeline_id'],
        'pipeline_name': value['pipeline_name'],
        'env_type': value['env_type'],
        'app_id': value['app_id'],
        'env_id': value['env_id'],
        'deployment_type': value['deployment_type'],
    };
}


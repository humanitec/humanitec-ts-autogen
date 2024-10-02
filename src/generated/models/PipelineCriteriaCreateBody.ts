/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.18
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { PipelineDeploymentRequestCriteriaCreateBody } from './PipelineDeploymentRequestCriteriaCreateBody.js';
import {
    instanceOfPipelineDeploymentRequestCriteriaCreateBody,
    PipelineDeploymentRequestCriteriaCreateBodyFromJSON,
    PipelineDeploymentRequestCriteriaCreateBodyFromJSONTyped,
    PipelineDeploymentRequestCriteriaCreateBodyToJSON,
} from './PipelineDeploymentRequestCriteriaCreateBody.js';

/**
 * @type PipelineCriteriaCreateBody
 * 
 * @export
 */
export type PipelineCriteriaCreateBody = { trigger: 'deployment_request' } & PipelineDeploymentRequestCriteriaCreateBody;

export function PipelineCriteriaCreateBodyFromJSON(json: any): PipelineCriteriaCreateBody {
    return PipelineCriteriaCreateBodyFromJSONTyped(json, false);
}

export function PipelineCriteriaCreateBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineCriteriaCreateBody {
    if (json == null) {
        return json;
    }
    switch (json['trigger']) {
        case 'deployment_request':
            return {...PipelineDeploymentRequestCriteriaCreateBodyFromJSONTyped(json, true), trigger: 'deployment_request'};
        default:
            throw new Error(`No variant of PipelineCriteriaCreateBody exists with 'trigger=${json['trigger']}'`);
    }
}

export function PipelineCriteriaCreateBodyToJSON(value?: PipelineCriteriaCreateBody | null): any {
    if (value == null) {
        return value;
    }
    switch (value['trigger']) {
        case 'deployment_request':
            return PipelineDeploymentRequestCriteriaCreateBodyToJSON(value);
        default:
            throw new Error(`No variant of PipelineCriteriaCreateBody exists with 'trigger=${value['trigger']}'`);
    }

}


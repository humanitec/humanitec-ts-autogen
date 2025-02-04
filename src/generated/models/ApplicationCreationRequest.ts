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
import type { EnvironmentBaseRequest } from './EnvironmentBaseRequest.js';
import {
    EnvironmentBaseRequestFromJSON,
    EnvironmentBaseRequestFromJSONTyped,
    EnvironmentBaseRequestToJSON,
} from './EnvironmentBaseRequest.js';

/**
 * 
 * @export
 * @interface ApplicationCreationRequest
 */
export interface ApplicationCreationRequest {
    /**
     * 
     * @type {EnvironmentBaseRequest}
     * @memberof ApplicationCreationRequest
     */
    env?: EnvironmentBaseRequest;
    /**
     * The ID which refers to a specific application.
     * @type {string}
     * @memberof ApplicationCreationRequest
     */
    id: string;
    /**
     * The Human-friendly name for the Application.
     * @type {string}
     * @memberof ApplicationCreationRequest
     */
    name: string;
    /**
     * If true, no environment will be created with the application.
     * @type {boolean}
     * @memberof ApplicationCreationRequest
     */
    skip_environment_creation?: boolean;
}

/**
 * Check if a given object implements the ApplicationCreationRequest interface.
 */
export function instanceOfApplicationCreationRequest(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    return true;
}

export function ApplicationCreationRequestFromJSON(json: any): ApplicationCreationRequest {
    return ApplicationCreationRequestFromJSONTyped(json, false);
}

export function ApplicationCreationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCreationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'env': json['env'] == null ? undefined : EnvironmentBaseRequestFromJSON(json['env']),
        'id': json['id'],
        'name': json['name'],
        'skip_environment_creation': json['skip_environment_creation'] == null ? undefined : json['skip_environment_creation'],
    };
}

export function ApplicationCreationRequestToJSON(value?: ApplicationCreationRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'env': EnvironmentBaseRequestToJSON(value['env']),
        'id': value['id'],
        'name': value['name'],
        'skip_environment_creation': value['skip_environment_creation'],
    };
}


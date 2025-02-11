/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.3
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * UpdateDriverRequest describes the update driver details request.
 * @export
 * @interface UpdateDriverRequestRequest
 */
export interface UpdateDriverRequestRequest {
    /**
     * List of resources accounts types supported by the driver
     * @type {Array<string>}
     * @memberof UpdateDriverRequestRequest
     */
    account_types: Array<string>;
    /**
     * A JSON Schema specifying the driver-specific input parameters.
     * @type {{ [key: string]: any; }}
     * @memberof UpdateDriverRequestRequest
     */
    inputs_schema: { [key: string]: any; };
    /**
     * The prefix where the driver resides or, if the driver is a virtual driver, the reference to an existing driver using the `driver://` schema of the format `driver://{orgId}/{driverId}`. Only members of the organization the driver belongs to can see 'target'.
     * @type {string}
     * @memberof UpdateDriverRequestRequest
     */
    target: string;
    /**
     * If the driver is a virtual driver, template defines a Go template that converts the driver inputs supplied in the resource definition into the driver inputs for the target driver.
     * @type {any}
     * @memberof UpdateDriverRequestRequest
     */
    template?: any;
    /**
     * The type of resource produced by this driver
     * @type {string}
     * @memberof UpdateDriverRequestRequest
     */
    type: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateDriverRequestRequest
     * @deprecated
     */
    is_public?: boolean;
}

/**
 * Check if a given object implements the UpdateDriverRequestRequest interface.
 */
export function instanceOfUpdateDriverRequestRequest(value: object): boolean {
    if (!('account_types' in value)) return false;
    if (!('inputs_schema' in value)) return false;
    if (!('target' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function UpdateDriverRequestRequestFromJSON(json: any): UpdateDriverRequestRequest {
    return UpdateDriverRequestRequestFromJSONTyped(json, false);
}

export function UpdateDriverRequestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateDriverRequestRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'account_types': json['account_types'],
        'inputs_schema': json['inputs_schema'],
        'target': json['target'],
        'template': json['template'] == null ? undefined : json['template'],
        'type': json['type'],
        'is_public': json['is_public'] == null ? undefined : json['is_public'],
    };
}

export function UpdateDriverRequestRequestToJSON(value?: UpdateDriverRequestRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_types': value['account_types'],
        'inputs_schema': value['inputs_schema'],
        'target': value['target'],
        'template': value['template'],
        'type': value['type'],
        'is_public': value['is_public'],
    };
}


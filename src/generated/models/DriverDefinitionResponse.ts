/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.1
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * DriverDefinition describes the resource driver.
 * 
 * Resource Drivers are code that fulfils the Humanitec Resource Driver Interface. This interface allows for certain actions to be performed on resources such as creation and destruction. Humanitec provides numerous Resource Drivers “out of the box”. It is also possible to use 3rd party Resource Drivers or write your own.
 * @export
 * @interface DriverDefinitionResponse
 */
export interface DriverDefinitionResponse {
    /**
     * List of resources accounts types supported by the driver
     * @type {Array<string>}
     * @memberof DriverDefinitionResponse
     */
    account_types: Array<string>;
    /**
     * The ID for this driver. Is used as `driver_type`.
     * @type {string}
     * @memberof DriverDefinitionResponse
     */
    id: string;
    /**
     * A JSON Schema specifying the driver-specific input parameters.
     * @type {{ [key: string]: any; }}
     * @memberof DriverDefinitionResponse
     */
    inputs_schema: { [key: string]: any; };
    /**
     * The Organization this driver exists under. Useful as public drivers are accessible to other orgs.
     * @type {string}
     * @memberof DriverDefinitionResponse
     */
    org_id: string;
    /**
     * The prefix where the driver resides or, if the driver is a virtual driver, the reference to an existing driver using the `driver://` schema of the format `driver://{orgId}/{driverId}`. Only members of the organization the driver belongs to can see `target`.
     * @type {string}
     * @memberof DriverDefinitionResponse
     */
    target?: string;
    /**
     * If the driver is a virtual driver, template defines a Go template that converts the driver inputs supplied in the resource definition into the driver inputs for the target driver.
     * @type {any}
     * @memberof DriverDefinitionResponse
     */
    template?: any;
    /**
     * The type of resource produced by this driver
     * @type {string}
     * @memberof DriverDefinitionResponse
     */
    type: string;
}

/**
 * Check if a given object implements the DriverDefinitionResponse interface.
 */
export function instanceOfDriverDefinitionResponse(value: object): boolean {
    if (!('account_types' in value)) return false;
    if (!('id' in value)) return false;
    if (!('inputs_schema' in value)) return false;
    if (!('org_id' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function DriverDefinitionResponseFromJSON(json: any): DriverDefinitionResponse {
    return DriverDefinitionResponseFromJSONTyped(json, false);
}

export function DriverDefinitionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DriverDefinitionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'account_types': json['account_types'],
        'id': json['id'],
        'inputs_schema': json['inputs_schema'],
        'org_id': json['org_id'],
        'target': json['target'] == null ? undefined : json['target'],
        'template': json['template'] == null ? undefined : json['template'],
        'type': json['type'],
    };
}

export function DriverDefinitionResponseToJSON(value?: DriverDefinitionResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_types': value['account_types'],
        'id': value['id'],
        'inputs_schema': value['inputs_schema'],
        'org_id': value['org_id'],
        'target': value['target'],
        'template': value['template'],
        'type': value['type'],
    };
}


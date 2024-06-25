/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types All of the Humanitec API unless explicitly only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning** | | --- | --- | | `200` | Success | | `201` | Success (In future, `201` will be replaced by `200`) | | `204` | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` should be regarded as an error which can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning** | | --- | --- | | `400` | General error. (Body will contain details) | | `401` | Attempt to access protected resource without `Authorization` Header. | | `403` | The `Bearer` or `JWT` does not grant access to the requested resource. | | `404` | Resource not found. | | `405` | Method not allowed | | `409` | Conflict. Usually indicated a resource with that ID already exists. | | `422` | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429` | Too many requests - request rate limit has been reached. | | `500` | Internal Error. If it occurs repeatedly, contact support. | 
 *
 * The version of the OpenAPI document: 0.26.6
 * Contact: apiteam@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * NodeBody represents a node of a Resource Dependency Graph.
 * @export
 * @interface NodeBodyResponse
 */
export interface NodeBodyResponse {
    /**
     * 
     * @type {string}
     * @memberof NodeBodyResponse
     */
    _class: string;
    /**
     * 
     * @type {string}
     * @memberof NodeBodyResponse
     */
    criteria_id: string;
    /**
     * 
     * @type {string}
     * @memberof NodeBodyResponse
     */
    def_id: string;
    /**
     * The Resource Definition Version ID that was used to provision the resource.
     * @type {string}
     * @memberof NodeBodyResponse
     */
    def_version_id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NodeBodyResponse
     */
    depends_on: Array<string>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NodeBodyResponse
     */
    driver: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof NodeBodyResponse
     */
    driver_account?: string;
    /**
     * 
     * @type {string}
     * @memberof NodeBodyResponse
     */
    driver_type: string;
    /**
     * 
     * @type {string}
     * @memberof NodeBodyResponse
     */
    guresid: string;
    /**
     * 
     * @type {string}
     * @memberof NodeBodyResponse
     */
    id: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NodeBodyResponse
     */
    resource: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NodeBodyResponse
     */
    resource_schema: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof NodeBodyResponse
     */
    target?: string;
    /**
     * 
     * @type {string}
     * @memberof NodeBodyResponse
     */
    type: string;
}

/**
 * Check if a given object implements the NodeBodyResponse interface.
 */
export function instanceOfNodeBodyResponse(value: object): boolean {
    if (!('_class' in value)) return false;
    if (!('criteria_id' in value)) return false;
    if (!('def_id' in value)) return false;
    if (!('def_version_id' in value)) return false;
    if (!('depends_on' in value)) return false;
    if (!('driver' in value)) return false;
    if (!('driver_type' in value)) return false;
    if (!('guresid' in value)) return false;
    if (!('id' in value)) return false;
    if (!('resource' in value)) return false;
    if (!('resource_schema' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function NodeBodyResponseFromJSON(json: any): NodeBodyResponse {
    return NodeBodyResponseFromJSONTyped(json, false);
}

export function NodeBodyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeBodyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        '_class': json['class'],
        'criteria_id': json['criteria_id'],
        'def_id': json['def_id'],
        'def_version_id': json['def_version_id'],
        'depends_on': json['depends_on'],
        'driver': json['driver'],
        'driver_account': json['driver_account'] == null ? undefined : json['driver_account'],
        'driver_type': json['driver_type'],
        'guresid': json['guresid'],
        'id': json['id'],
        'resource': json['resource'],
        'resource_schema': json['resource_schema'],
        'target': json['target'] == null ? undefined : json['target'],
        'type': json['type'],
    };
}

export function NodeBodyResponseToJSON(value?: NodeBodyResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'class': value['_class'],
        'criteria_id': value['criteria_id'],
        'def_id': value['def_id'],
        'def_version_id': value['def_version_id'],
        'depends_on': value['depends_on'],
        'driver': value['driver'],
        'driver_account': value['driver_account'],
        'driver_type': value['driver_type'],
        'guresid': value['guresid'],
        'id': value['id'],
        'resource': value['resource'],
        'resource_schema': value['resource_schema'],
        'target': value['target'],
        'type': value['type'],
    };
}


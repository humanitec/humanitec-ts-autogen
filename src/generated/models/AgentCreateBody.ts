/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types All of the Humanitec API unless explicitly only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning** | | --- | --- | | `200` | Success | | `201` | Success (In future, `201` will be replaced by `200`) | | `204` | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` should be regarded as an error which can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning** | | --- | --- | | `400` | General error. (Body will contain details) | | `401` | Attempt to access protected resource without `Authorization` Header. | | `403` | The `Bearer` or `JWT` does not grant access to the requested resource. | | `404` | Resource not found. | | `405` | Method not allowed | | `409` | Conflict. Usually indicated a resource with that ID already exists. | | `422` | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429` | Too many requests - request rate limit has been reached. | | `500` | Internal Error. If it occurs repeatedly, contact support. | 
 *
 * The version of the OpenAPI document: 0.26.5
 * Contact: apiteam@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * An object containing data needed to register an Agent.
 * @export
 * @interface AgentCreateBody
 */
export interface AgentCreateBody {
    /**
     * The Agent id. It can't be empty and should contain only url safe characters.
     * @type {string}
     * @memberof AgentCreateBody
     */
    id: string;
    /**
     * A pcks8 RSA public key PEM encoded (as the ones produced by openssl), whose module length is greater or equal than 4096 bits.
     * @type {string}
     * @memberof AgentCreateBody
     */
    public_key: string;
    /**
     * An optional description to show future users.
     * @type {string}
     * @memberof AgentCreateBody
     */
    description?: string;
}

/**
 * Check if a given object implements the AgentCreateBody interface.
 */
export function instanceOfAgentCreateBody(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('public_key' in value)) return false;
    return true;
}

export function AgentCreateBodyFromJSON(json: any): AgentCreateBody {
    return AgentCreateBodyFromJSONTyped(json, false);
}

export function AgentCreateBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgentCreateBody {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'public_key': json['public_key'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function AgentCreateBodyToJSON(value?: AgentCreateBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'public_key': value['public_key'],
        'description': value['description'],
    };
}


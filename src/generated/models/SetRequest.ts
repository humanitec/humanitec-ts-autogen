/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.14
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { ModuleRequest } from './ModuleRequest.js';
import {
    ModuleRequestFromJSON,
    ModuleRequestFromJSONTyped,
    ModuleRequestToJSON,
} from './ModuleRequest.js';

/**
 * A Deployment Set (or just "Set") defines all of the non-Environment specific configuration for Modules and External Resources. Each of these Modules or External Resources has a unique name.
 * 
 * Deployment Sets are immutable and their ID is a cryptographic hash of their content. This means that a Deployment Set can be globally identified based on its ID. It also means that referencing a Deployment Set by ID will always return the same Deployment Set.
 * 
 * Deployment Sets cannot be created directly, instead they are created by applying a Deployment Delta to an existing Deployment Set.
 * 
 * **Basic Structure**
 * 
 * ```
 *  {
 *    "id": <ID of the Deployment Set>,
 *    "modules" : {
 *      <ID of Module> : {
 *        "profile": <Defines how the optional "spec" property is interpreted>
 *        "spec": {
 *          <Properties that depend on the "profile" property.>
 *        }
 *        "externals": {
 *          <External Resource Name> : {
 *            "type": <Resource Type>,
 *            "params": {
 *              <Properties which parametrize the resource depending on the Resource Type.>
 *            }
 *          }
 *        }
 *      }
 *    }
 *  }
 * ```
 * 
 * For details about how the Humanitec provided profiles work, see (Deployment Set Profiles)[].
 * @export
 * @interface SetRequest
 */
export interface SetRequest {
    /**
     * The Modules that make up the Set
     * @type {{ [key: string]: ModuleRequest; }}
     * @memberof SetRequest
     */
    modules?: { [key: string]: ModuleRequest; };
    /**
     * Resources that are shared across the set
     * @type {{ [key: string]: any; }}
     * @memberof SetRequest
     */
    shared?: { [key: string]: any; };
    /**
     * The version of the Deployment Set Schema to use. (Currently, only 0 is supported, and if omitted, version 0 is assumed.)
     * @type {number}
     * @memberof SetRequest
     */
    version?: number;
}

/**
 * Check if a given object implements the SetRequest interface.
 */
export function instanceOfSetRequest(value: object): boolean {
    return true;
}

export function SetRequestFromJSON(json: any): SetRequest {
    return SetRequestFromJSONTyped(json, false);
}

export function SetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'modules': json['modules'] == null ? undefined : (mapValues(json['modules'], ModuleRequestFromJSON)),
        'shared': json['shared'] == null ? undefined : json['shared'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SetRequestToJSON(value?: SetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'modules': value['modules'] == null ? undefined : (mapValues(value['modules'], ModuleRequestToJSON)),
        'shared': value['shared'],
        'version': value['version'],
    };
}


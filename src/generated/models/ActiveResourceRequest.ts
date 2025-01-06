/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.26.27
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * Active Resources represent the concrete resources provisioned for an Environment. They are provisioned on the first deployment after a dependency on a particular resource type is introduced into an Environment. In general, Active Resources are only deleted when their introductory Environment is deleted.
 * 
 * Active Resources are provisioned based on a Resource Definition. The Resource Definition describes how to provision a concrete resource based on a Resource Type and metadata about the Environment (for example the Environment Type or the Application ID). The criteria for how to choose a Resource Definition is known as a Matching Criteria. If the Matching Criteria changes or the Resource Definition is deleted, the concrete resource represented by an Active Resource might be deleted and reprovisioned when a deployment occurs in the Environment.
 * @export
 * @interface ActiveResourceRequest
 */
export interface ActiveResourceRequest {
    /**
     * The ID of the App the resource is associated with.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    app_id: string;
    /**
     * The Resource Class of the resource
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    _class: string;
    /**
     * The Matching Criteria ID.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    criteria_id?: string;
    /**
     * The Resource Definition that this resource was provisioned from.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    def_id: string;
    /**
     * The Resource Definition Version that this resource was provisioned from.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    def_version_id: string;
    /**
     * The deployment that the resource was last provisioned in.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    deploy_id: string;
    /**
     * (Optional) Security account required by the driver.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    driver_account?: string;
    /**
     * The driver to be used to create the resource.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    driver_type: string;
    /**
     * The ID of the Environment the resource is associated with.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    env_id: string;
    /**
     * The Environment Type of the Environment specified by env_id.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    env_type: string;
    /**
     * Globally unique resource id
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    gu_res_id: string;
    /**
     * the ID of the Organization the Active Resource is associated with.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    org_id: string;
    /**
     * The ID of the resource
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    res_id: string;
    /**
     * The resource provisioning outputs ('values' only).
     * @type {{ [key: string]: any; }}
     * @memberof ActiveResourceRequest
     */
    resource: { [key: string]: any; };
    /**
     * Secret references from the resource provisioning output.
     * @type {{ [key: string]: any; }}
     * @memberof ActiveResourceRequest
     */
    secret_refs?: { [key: string]: any; };
    /**
     * Current resource status: 'pending', 'active', or 'deleting'.
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    status: string;
    /**
     * The Resource Type of the resource
     * @type {string}
     * @memberof ActiveResourceRequest
     */
    type: string;
    /**
     * The time the resource was last provisioned as part of a deployment.
     * @type {Date}
     * @memberof ActiveResourceRequest
     */
    updated_at: Date;
}

/**
 * Check if a given object implements the ActiveResourceRequest interface.
 */
export function instanceOfActiveResourceRequest(value: object): boolean {
    if (!('app_id' in value)) return false;
    if (!('_class' in value)) return false;
    if (!('def_id' in value)) return false;
    if (!('def_version_id' in value)) return false;
    if (!('deploy_id' in value)) return false;
    if (!('driver_type' in value)) return false;
    if (!('env_id' in value)) return false;
    if (!('env_type' in value)) return false;
    if (!('gu_res_id' in value)) return false;
    if (!('org_id' in value)) return false;
    if (!('res_id' in value)) return false;
    if (!('resource' in value)) return false;
    if (!('status' in value)) return false;
    if (!('type' in value)) return false;
    if (!('updated_at' in value)) return false;
    return true;
}

export function ActiveResourceRequestFromJSON(json: any): ActiveResourceRequest {
    return ActiveResourceRequestFromJSONTyped(json, false);
}

export function ActiveResourceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActiveResourceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'app_id': json['app_id'],
        '_class': json['class'],
        'criteria_id': json['criteria_id'] == null ? undefined : json['criteria_id'],
        'def_id': json['def_id'],
        'def_version_id': json['def_version_id'],
        'deploy_id': json['deploy_id'],
        'driver_account': json['driver_account'] == null ? undefined : json['driver_account'],
        'driver_type': json['driver_type'],
        'env_id': json['env_id'],
        'env_type': json['env_type'],
        'gu_res_id': json['gu_res_id'],
        'org_id': json['org_id'],
        'res_id': json['res_id'],
        'resource': json['resource'],
        'secret_refs': json['secret_refs'] == null ? undefined : json['secret_refs'],
        'status': json['status'],
        'type': json['type'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function ActiveResourceRequestToJSON(value?: ActiveResourceRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'app_id': value['app_id'],
        'class': value['_class'],
        'criteria_id': value['criteria_id'],
        'def_id': value['def_id'],
        'def_version_id': value['def_version_id'],
        'deploy_id': value['deploy_id'],
        'driver_account': value['driver_account'],
        'driver_type': value['driver_type'],
        'env_id': value['env_id'],
        'env_type': value['env_type'],
        'gu_res_id': value['gu_res_id'],
        'org_id': value['org_id'],
        'res_id': value['res_id'],
        'resource': value['resource'],
        'secret_refs': value['secret_refs'],
        'status': value['status'],
        'type': value['type'],
        'updated_at': ((value['updated_at']).toISOString()),
    };
}


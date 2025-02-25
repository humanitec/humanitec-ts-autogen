/* tslint:disable */
/* eslint-disable */
/**
 * Humanitec API
 * # Introduction The *Humanitec API* allows you to automate and integrate Humanitec into your developer and operational workflows. The API is a REST based API. It is based around a set of concepts:  * Core * External Resources * Sets and Deltas  ## Authentication  Almost all requests made to the Humanitec API require Authentication. See our [Developer Docs on API Authentication](https://developer.humanitec.com/platform-orchestrator/reference/api-references/#authentication) for instructions.  ## Content Types The Humanitec API, unless explicitly specified, only accepts content types of `application/json` and will always return valid `application/json` or an empty response.  ## Response Codes ### Success Any response code in the `2xx` range should be regarded as success.  | **Code** | **Meaning**                         | |----------|-------------------------------------| | `200`    | Success                             | | `201`    | Success, a new resource was created | | `204`    | Success, but no content in response |  _Note: We plan to simplify the interface by replacing 201 with 200 status codes._  ### Failure Any response code in the `4xx` range should be regarded as an error that can be rectified by the client. `5xx` error codes indicate errors that cannot be corrected by the client.  | **Code** | **Meaning**                                                                                                           | |----------|-----------------------------------------------------------------------------------------------------------------------| | `400`    | General error. (Body will contain details)                                                                            | | `401`    | Attempt to access protected resource without `Authorization` Header.                                                  | | `403`    | The `Bearer` or `JWT` does not grant access to the requested resource.                                                | | `404`    | Resource not found.                                                                                                   | | `405`    | Method not allowed                                                                                                    | | `409`    | Conflict. Usually indicated a resource with that ID already exists.                                                   | | `422`    | Unprocessable Entity. The body was not valid JSON, was empty or contained an object different from what was expected. | | `429`    | Too many requests - request rate limit has been reached.                                                              | | `500`    | Internal Error. If it occurs repeatedly, contact support.                                                             | 
 *
 * The version of the OpenAPI document: 0.27.4
 * Contact: support@humanitec.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * ValuesSecretsRefs stores data that should be passed around split by sensitivity.
 * @export
 * @interface ValuesSecretsRefsResponse
 */
export interface ValuesSecretsRefsResponse {
    /**
     * Secrets section of the data set. They can hold sensitive information that will be stored in the primary organization secret store and replaced with the secret store paths when sent outside, or secret references stored in a defined secret store. Can't be used together with `secrets`.
     * 
     * They can hold a nested structure but leaf objects need to be of type SecretReference, where:
     * 
     * - `store` is a Secret Store id. It can't be `humanitec`. It's mandatory if `ref` is defined and can't be used in request payloads if `value` is defined.
     * 
     * - `ref` is the secret key in the format of the target store. It can't be used in request payloads if `value` is defined.
     * 
     * - `version` is the version of the secret as defined in the target store. It can be defined only if `ref` is defined.
     * 
     * - `value` is the value to store in the organizations primary secret store. It can't be used in request payloads if `ref` is defined.
     * @type {{ [key: string]: any; }}
     * @memberof ValuesSecretsRefsResponse
     */
    secret_refs?: { [key: string]: any; };
    /**
     * Secrets section of the data set. Sensitive information is stored in the primary organization secret store and replaced with the secret store paths when sent outside. Can't be used together with `secret_refs`.
     * @type {{ [key: string]: any; }}
     * @memberof ValuesSecretsRefsResponse
     */
    secrets?: { [key: string]: any; };
    /**
     * Values section of the data set. Passed around as-is.
     * @type {{ [key: string]: any; }}
     * @memberof ValuesSecretsRefsResponse
     */
    values?: { [key: string]: any; };
}

/**
 * Check if a given object implements the ValuesSecretsRefsResponse interface.
 */
export function instanceOfValuesSecretsRefsResponse(value: object): boolean {
    return true;
}

export function ValuesSecretsRefsResponseFromJSON(json: any): ValuesSecretsRefsResponse {
    return ValuesSecretsRefsResponseFromJSONTyped(json, false);
}

export function ValuesSecretsRefsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValuesSecretsRefsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'secret_refs': json['secret_refs'] == null ? undefined : json['secret_refs'],
        'secrets': json['secrets'] == null ? undefined : json['secrets'],
        'values': json['values'] == null ? undefined : json['values'],
    };
}

export function ValuesSecretsRefsResponseToJSON(value?: ValuesSecretsRefsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'secret_refs': value['secret_refs'],
        'secrets': value['secrets'],
        'values': value['values'],
    };
}


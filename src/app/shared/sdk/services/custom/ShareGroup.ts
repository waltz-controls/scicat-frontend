/* eslint-disable */
import { Injectable, Inject, Optional } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { SDKModels } from "./SDKModels";
import { BaseLoopBackApi } from "../core/base.service";
import { LoopBackConfig } from "../../lb.config";
import { LoopBackAuth } from "../core/auth.service";
import { LoopBackFilter } from "../../models/BaseModels";
import { ErrorHandler } from "../core/error.service";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { ShareGroup } from "../../models/ShareGroup";
import { SocketConnection } from "../../sockets/socket.connections";

/**
 * Api services for the `ShareGroup` model.
 *
 * **Details**
 *
 * Definition of groups to share datasets between scicat users
 */
@Injectable()
export class ShareGroupApi extends BaseLoopBackApi {
  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler,
  ) {
    super(http, connection, models, auth, errorHandler);
  }

  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `ShareGroup` object.)
   * </em>
   */
  public patchOrCreate(
    data: any = {},
    customHeaders?: Function,
  ): Observable<any> {
    let _method: string = "PATCH";
    let _url: string =
      LoopBackConfig.getPath() +
      "/" +
      LoopBackConfig.getApiVersion() +
      "/ShareGroups";
    let _routeParams: any = {};
    let _postBody: any = {
      data: data,
    };
    let _urlParams: any = {};
    let result = this.request(
      _method,
      _url,
      _routeParams,
      _urlParams,
      _postBody,
      null,
      customHeaders,
    );
    return result;
  }

  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @param {any} id ShareGroup id
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - An object of model property name/value pairs
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `ShareGroup` object.)
   * </em>
   */
  public patchAttributes(
    id: any,
    data: any = {},
    customHeaders?: Function,
  ): Observable<any> {
    let _method: string = "PATCH";
    let _url: string =
      LoopBackConfig.getPath() +
      "/" +
      LoopBackConfig.getApiVersion() +
      "/ShareGroups/:id";
    let _routeParams: any = {
      id: id,
    };
    let _postBody: any = {
      data: data,
    };
    let _urlParams: any = {};
    let result = this.request(
      _method,
      _url,
      _routeParams,
      _urlParams,
      _postBody,
      null,
      customHeaders,
    );
    return result;
  }

  /**
   * Return facet counts relevant for the given selected subset of datasets.
   *
   * @param {object} fields Define the filter conditions by specifying the name and values of fields. There ia also support for a `text` search to look for strngs anywhere in the dataset.
   *
   * @param {any} facets Defines list of field names, for which facet counts should be calculated
   *
   * @param {object} options
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `ShareGroup` object.)
   * </em>
   */
  public fullfacet(
    fields: any = {},
    facets: any = {},
    customHeaders?: Function,
  ): Observable<any> {
    let _method: string = "GET";
    let _url: string =
      LoopBackConfig.getPath() +
      "/" +
      LoopBackConfig.getApiVersion() +
      "/ShareGroups/fullfacet";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof fields !== "undefined" && fields !== null)
      _urlParams.fields = fields;
    if (typeof facets !== "undefined" && facets !== null)
      _urlParams.facets = facets;
    let result = this.request(
      _method,
      _url,
      _routeParams,
      _urlParams,
      _postBody,
      null,
      customHeaders,
    );
    return result;
  }

  /**
   * Return datasets fulfilling complex filter conditions, including from fields of joined models.
   *
   * @param {object} fields Define the filter conditions by specifying the name of values of fields requested. There ia also support for a `text` search to look for strings anywhere in the dataset. Skip and limit parameters allow for paging.
   *
   * @param {object} limits Define further query parameters like skip, limit, order
   *
   * @param {object} options
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `ShareGroup` object.)
   * </em>
   */
  public fullquery(
    fields: any = {},
    limits: any = {},
    customHeaders?: Function,
  ): Observable<any> {
    let _method: string = "GET";
    let _url: string =
      LoopBackConfig.getPath() +
      "/" +
      LoopBackConfig.getApiVersion() +
      "/ShareGroups/fullquery";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof fields !== "undefined" && fields !== null)
      _urlParams.fields = fields;
    if (typeof limits !== "undefined" && limits !== null)
      _urlParams.limits = limits;
    let result = this.request(
      _method,
      _url,
      _routeParams,
      _urlParams,
      _postBody,
      null,
      customHeaders,
    );
    return result;
  }

  /**
   * <em>
   * (The remote method definition does not provide any description.)
   * </em>
   *
   * @param {object} data Request data.
   *
   *  - `id` – `{string}` -
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `groups` – `{Object}` -
   */
  public getGroups(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string =
      LoopBackConfig.getPath() +
      "/" +
      LoopBackConfig.getApiVersion() +
      "/ShareGroups/:id/register";
    let _routeParams: any = {
      id: id,
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(
      _method,
      _url,
      _routeParams,
      _urlParams,
      _postBody,
      null,
      customHeaders,
    );
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `ShareGroup`.
   */
  public getModelName() {
    return "ShareGroup";
  }
}

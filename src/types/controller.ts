import express from "express";

export type AppController<
  RequestPathParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams,
  Locals,
> = express.RequestHandler<
  RequestPathParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams,
  Locals
>;

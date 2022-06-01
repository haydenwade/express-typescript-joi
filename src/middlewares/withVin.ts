import { NextFunction, Response } from "express";
import { SetMileageRequestQueryParams } from "../interfaces";
import { AppController } from "../types/controller";

//TODO: rename to be generic
export const withVin: AppController<
never,
never,
never,
SetMileageRequestQueryParams,
SetMileageRequestLocals
> = (
  req,
  res,
  next: NextFunction
) => {
  res.locals.vin = "red:" + req.query.userId;
  next();
};

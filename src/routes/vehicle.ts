import express from 'express';
import { SetMileageRequestBody, SetMileageRequestQueryParams } from '../interfaces';
import { withVin } from "../middlewares/withVin";
import { SetMileageBodySchema, SetMileageQuerySchema } from "../schemas/SetMileageSchemas";
import { AppController } from "../types/controller";
import { SetMileageResponse } from '../types/response';
const router = express.Router();

const validator = require("express-joi-validation").createValidator({});

const setMileageCtrl: AppController<
  never,
  SetMileageResponse,
  SetMileageRequestBody,
  SetMileageRequestQueryParams,
  SetMileageRequestLocals
> = (req, res) => {
  const result = res.locals.vin + ":" + req.body.mileage;
  res.json({success:true, result});
};

router.post(
  "/vehicles",
  validator.query(SetMileageQuerySchema),
  validator.body(SetMileageBodySchema),
  withVin,
  setMileageCtrl
);

export const vehicleRouter = router;

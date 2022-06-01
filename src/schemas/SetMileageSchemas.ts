import Joi from "joi";

export const SetMileageQuerySchema = Joi.object({
  userId: Joi.string().required(),
}).meta({className: "SetMileageRequestQueryParams"});

export const SetMileageBodySchema = Joi.object({
  mileage: Joi.number().required(),
}).meta({className: "SetMileageRequestBody"});

//#region other examples to test generator
export const ComplexBodySchema = Joi.object({
  a: Joi.number().optional().min(10).max(1000),
  b: Joi.number().required(),
  x: Joi.boolean().required(),
}).meta({className: "ComplexBodySchema"});
//#endregion

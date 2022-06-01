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


export const PropertiesSchemaV2 = Joi.object()
  .keys({
    page: Joi.number().required().min(0),
    size: Joi.number().required().min(1),
    sortBy: Joi.string().optional().max(255),
    sortOrder: Joi.string().optional().max(255),
    territory: Joi.string().optional().max(255),
    propertyStatus: Joi.string().optional().max(255),
    startDate: Joi.date().timestamp('unix').optional(),
    dateField: Joi.string().optional().max(255),
    distance: Joi.object()
      .keys({
        include: Joi.boolean().required(),
        fromLatitude: Joi.number().required().min(-90).max(90),
        fromLongitude: Joi.number().required().min(-180).max(180)
      })
      .optional()
      .when('sortBy', {
        is: 'distance',
        then: Joi.required()
      })
  })
  .and('dateField', 'startDate');
//#endregion

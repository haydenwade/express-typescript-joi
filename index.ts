import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import Joi from 'joi';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

//#region joi
const validator = require('express-joi-validation').createValidator({})
const querySchema = Joi.object({
  userId: Joi.string().required()
})

const bodySchema = Joi.object({
  a: Joi.number().required()
});
//#endregion

//#region middleware
// We can't guarentee that the request object will be of type IAddRequest so typing it as Request is ok.
// If we want we could define an additional type for the request object.
interface IHasUserIdRequest extends Request {
  query:{
    userId: string;
  }
}
const middleware = (req: IHasUserIdRequest, res: Response, next: NextFunction) => {
  res.locals.sampleProperty = "red:"+ req.query.userId;
  next();
};
//#endregion

//#region route handlers

//could be auto generated from https://github.com/mrjono1/joi-to-typescript
interface IAddRequest extends Request {
  body: {
    a: number;
  }
  query:{
    userId: string;
  }
}

interface IAddResponse extends Response {
  locals:{
    sampleProperty: string;
  }
}
const routeHandler  = (req: IAddRequest, res: IAddResponse) => {
  const result = res.locals.sampleProperty + ":" + req.body.a;
  res.json({result,random:3});//TODO: should error if invalid response type
};
//#endregion

//#region route handler as we do today
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

type AddRequestBody={
  a: number;
}
type AddRequestQueryParams = {
  userId: string;
}
type AddRequestLocals = {sampleProperty:string};
type AddResponse = {result:string};//where's this used? no validation or type safety
const routeHandler2:AppController<never,AddResponse,AddRequestBody,AddRequestQueryParams,AddRequestLocals>  = (req, res) => {
  const result = res.locals.sampleProperty + ":" + req.body.a;
  const finalResult:AddResponse = {result};
  res.json(finalResult);//GOOD
};
//#endregion

//#region route definitions
app.use(express.json());
app.post(
  "/vehicles",
  validator.query(querySchema),
  validator.body(bodySchema),
  middleware,
  routeHandler
);

app.post(
  "/vehicles2",
  validator.query(querySchema),
  validator.body(bodySchema),
  middleware,
  routeHandler2
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
//#endregion

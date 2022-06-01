import express, { Express } from "express";
import dotenv from "dotenv";
import { vehicleRouter } from "./routes/vehicle";
import swaggerUi from 'swagger-ui-express';
// import * as swaggerDocument from './swagger.json';


import j2s from 'joi-to-swagger';
import { SetMileageQuerySchema } from './schemas/SetMileageSchemas';

export const { swagger:swaggerDocument, components } = j2s(SetMileageQuerySchema);

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use('/',vehicleRouter);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

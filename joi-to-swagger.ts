import j2s from 'joi-to-swagger';
import { SetMileageQuerySchema } from './src/schemas/SetMileageSchemas';
import fs from 'fs';

export const { swagger, components } = j2s(SetMileageQuerySchema);

// fs.writeFile('./src/swagger2.json', swagger, err => {
//     if (err) {
//       console.error(err);
//     }
//     // file written successfully
//     console.log('generated swagger models')
//   });

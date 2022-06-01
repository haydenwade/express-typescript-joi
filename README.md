https://blog.logrocket.com/how-to-set-up-node-typescript-express/


## To generate types for Request types
1. Add or update Joi schema
2. Run `npm run types`
3. Import and use type in controller declaration

*Note: Response and Local typings are manually created

## Example Request
POST http://localhost:8000/vehicles?userId=userA123
{
    "mileage": 100
}

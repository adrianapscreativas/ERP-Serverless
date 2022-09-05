import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { APIGatewayEvent } from 'aws-lambda'

/**
 * Its a demos
 * 
 * @returns {string}
 */
const demo: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async () => {
  return formatJSONResponse({
    message: `prueba :V ps !`
  })
}

export const main = middyfy(demo);

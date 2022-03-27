import { generateService } from '.';

generateService({
  schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
  serversPath: './servers',
});
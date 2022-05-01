import { generateService } from '.';

generateService({
  requestImportStatement:`import { API_PREFIX } from '@/constants';import { request } from "@/utils/request"`,
  // schemaPath: 'https://petstore.swagger.io/v2/swagger.json',
  // schemaPath: '../assets/spider-swagger.json',
  schemaPath:'https://localhost:44399/swagger/v1/swagger.json',
  projectName: '',
  serversPath: './servers',
  requestOptionType: 'BBDFE.IRequestOption',
  apiPrefix: 'API_PREFIX',
});

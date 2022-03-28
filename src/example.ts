import { generateService } from '.';

generateService({
  requestImportStatement:`import { API_PREFIX } from '@/constants';import { request } from "@/utils/request"`,
  // schemaPath: 'https://petstore.swagger.io/v2/swagger.json',
  schemaPath: '../test/spider-swagger.json',
  projectName: '',
  serversPath: './servers',
  requestOptionType: 'BBDFE.TRequestOption',
  apiPrefix: 'API_PREFIX',
});

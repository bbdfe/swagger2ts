## 介绍

根据 [OpenApi3](https://swagger.io/blog/news/whats-new-in-openapi-3-0/) 文档生成 request 请求代码。

如果你使用 [umi](https://umijs.org) ,你可以使用[@umijs/plugin-openapi](https://www.npmjs.com/package/@umijs/plugin-openapi) 插件。
## 使用
```node
npm i --save-dev @umijs/openapi
```
在项目根目录新建 ```openapi.config.ts```
```ts
const { generateService } = require('@umijs/openapi')

generateService({
  schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
  serversPath: './servers',
})

```
在 ```package.json``` 的 ```script``` 中添加 api: ```"openapi": "ts-node openapi.config.ts",```

生成api
```node
npm run openapi
```
## 参数
|  属性   | 必填  | 备注 | 类型 | 默认值 |
|  ----  | ----  |  ----  |  ----  |----  |
| requestLibPath  | 否 | 自定义请求方法路径 | string | - |
| requestImportStatement  | 否 | 自定义请求方法表达式 | string | `import { request } from "@/utils/request"` |
| apiPrefix  | 否 | api 的前缀 | string | - |
| serversPath  | 否 | 生成的文件夹的路径 | string | `./services` |
| schemaPath  | 否 | openAPI 3.0 的地址 | string | - |
| projectName  | 否 | 项目名称 | string | `api` |
| namespace  | 否 | 命名空间名称 | string | `API` |
| requestOptionType | 否 | options类型 | string | `{[key: string]: any}` |
| mockFolder  | 否 | mock目录 | string | `false` |


> 默认的潜规则
每次执行会清空文件夹再重新生成，但是不会删掉含有_deperated的路径以及index.ts的文件；可以基于此规则把手写部分的代码放在_deperated中或者写在index.ts中

## 调试

直接F5 即可

> refs

【refs] https://github.com/chenshuai2144/openapi2typescript
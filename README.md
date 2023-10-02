#Typescript MERN Amazona

##Lessons

1. Introduction
2. Install Tools
3. Create Typescript react app by vite
4. create Git Repository
   1.add ReadME.md 2. create github account 3. connect vs code to github 4. publish repository

5. List Products

   1. create Product type
   2. create products array
   3. add product images
   4. render products

6. Add React Bootstrap

   1. npm install react-bootstrap bootstrap
   2. import bootstrap css
   3. update App.tsx

7. Add page routing

   1. npm i react-router-dom
   2. create route for home page
   3. create route for product page
   4. add helmet for setting page title

8. Create Node Server

   1. create beackend folder
      cd backend
      npm init

   2. config typescript
      npm install --save-dev typescript ts-node-dev
      create tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2015",
    "outDir": "./build",
    "strict": true,
    "module": "commonjs",
    "esModuleInterop": true
  }
}
```

      add dev and build command to package.json

`"dev": "ts-node-dev --respawn --transpile-only --files src/index.ts",`

3.  config eslint
    npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    create .eslintrc.js

    ```js
    module.exports = {
      env: {
        es2016: true,
        node: true,
      },
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "es2016",
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
    };
    ```

````

4. create express server
npm install express
npm install --save-sev @types/express

5. create src/index.ts
copy data.ts and Product.ts from frontend to backend

```js
import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
const app = express()
app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts)
})
const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
````

# Day1

- What is VueJS?
- SPA
- new vue3 with vite (npm create vite)
- component
- project structure
  - vite.config.ts
    - theme
    - port
  - main.ts
  - src
  - App.vue
  - assets
  - router/index.ts
  - index.html
- prop (input) ex: <component-name title="1234"...
- emit (output) ex: <button @click....
- prop binding ex: <component-name :title="aVariable"...
- interpolation ex: {{}}
- v-model => fix input and output
- setup ant design for vue
- setup tailwind
- custom theme

# Day2

- <a-form></a-form>
- v-model
- none side-effect variable : ex: let counter = 0
- has side-effect variable : ex: const counter = ref(0) / reactive({counter:0})
- ref and reactive
- ref must .value
- add sub component
- component structures
  - template
  - script
  - style
- flexbox
- load image in assets
- alias import ex: #import {} from "@/.." ("@/_": ["./src/_"])
- axios (http)
- intro backend
- node
- nodemon
- typeorm
  - data-source.ts
  - controller
  - routes.ts
  - cors
  - static file

```ts
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(process.env.ROOT_PATH + "/uploaded"));
```
- Entity
- Intro mongo (no sql)
  + table -> collections
  + column -> fields
  + row -> document

# Day3
- Stock
- Http interceptor (Frontned)
- Backend interceptor (jwt, verify.interceptor.ts)
- JWT  
- vscode extension 
  + connect mongo
  + 



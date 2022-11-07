# Install Antd on Vue3

- yarn add ant-design-vue @ant-design/icons-vue
- Edit main.ts

```ts
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import "./assets/main.css";
import Antd from "ant-design-vue";
....
..

app.use(Antd);

```

- Put the example from https://antdv.com/components/button in App.vue

# Custom Antd Color Theme on Vite

- https://github.com/vueComponent/ant-design-vue/blob/next/components/style/themes/variable.less
- https://2x.antdv.com/docs/vue/customize-theme
- yarn add less
- Edit main.ts by adding

```ts
import "ant-design-vue/dist/antd.less";
```

-- Edit vite.config.ts

```ts
export default defineConfig({
  // Add this ------------------------
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1DA57A",
          "link-color": "#1DA57A",
          "border-radius-base": "2px",
        },
        javascriptEnabled: true,
      },
    },
  },
  // End ------------------------
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

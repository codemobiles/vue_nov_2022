# new project

https://github.com/vuejs/create-vue
npm create vue@3

# packages

# vite

https://segmentfault.com/a/1190000041864625/en

## vuejs

yarn add ant-design-vue @ant-design/icons-vue axios less chart.js @j-t-mcc/vue3-chartjs chartjs-plugin-datalabels chartjs-plugin-zoom url-join @types/url-join dayjs numeral vuex vue-router

## tailwind

https://tailwindcss.com/docs/guides/vite + preflight

## Icons

https://ant.design/components/icon/

## custom antd theme color

- yarn add less
- add import antd.less main.ts

```
import "ant-design-vue/dist/antd.less";
```

- in vite.config.json

```
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
    }
  },
```

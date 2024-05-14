# 后台管理系统框架 ( 前端 )

## 技术选型及官方文档

Vue3 + Vite + + Typescript + Tailwindcss + PrimeVue UI 

Vue: https://vuejs.org/

Tailwindcss: https://tailwindcss.com/docs/guides/vite

Primevue: https://tailwind.primevue.org/builder

## 相关依赖 

tailwindcss primevue 根据官方教程导入

```shell
npm i axios vue-router pinia tailwindcss primevue scss postcss autoprefixer unplugin-vue-components -D -S
```

## 配置自动导入

vite.config.ts

```typescript
// 引入自动导入primeVue组件的插件
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...
    Components({
      resolvers:[
        PrimeVueResolver()
      ]
    }),
    ...
  ],
})

```

## 引入表单验证插件

```shell
npm i vee-validate yup -S -D
```


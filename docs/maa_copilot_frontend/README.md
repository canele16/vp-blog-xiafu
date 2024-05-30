> * @Title: MAA README
> * @Description: maa-copilot-frontend readme
> * @Author: xiafu 
> * @FirstEditDate: 'Tue May 28 2024 17:13:22 GMT+0800 (中国标准时间)'
> * @LastEditDate: 
> * @Links: [maa-copilot-frontend](https://github.com/MaaAssistantArknights/maa-copilot-frontend)  [prts](https://prts.plus/)

Hi there :wave:

终于有带着后台接口文档的项目可以用来练习惹 :kissing_closed_eyes:

但看了一下文档，使用react写的 :sob:

感觉推给main无望了，用vue重写然后推送个新分支叭​ :innocent:

------

拿到源码之后能干啥，对着它发呆 :dizzy_face:

需要了解构建流程 [从零开始的项目架构](https://juejin.cn/column/7199000545830649912)



# Contents

1. 选择合适的构建工具
2. 定制团队代码规范
3. 测试工具
4. 封装自己的组件
5. 自动部署
6. 安全



## 构建工具

- 框架库( vue\react\etc. )
- UI库( Antd\Element\etc. )
- 架构工具(vite\webpack)
- 安装机制等(npm\yarn\etc.)
- 前端工具链(...)

需要了解整个项目的**技术选型**。



### 安装机制，私服部署原理

```shell
npm init
# or
yarn init
```

### 模块

[ESM](https://zh.javascript.info/modules-intro)

> ### [模块代码仅在第一次导入时被解析](https://zh.javascript.info/modules-intro#mo-kuai-dai-ma-jin-zai-di-yi-ci-dao-ru-shi-bei-jie-xi)
>
> 之前看的这个文档的时候没注意，模块具体的一些行为和使用模式需要进一步了解。



## [构建工具](https://zh.javascript.info/modules-intro#gou-jian-gong-ju)

选择：[vite](https://cn.vitejs.dev/guide/)

[为什么是vite?](https://www.bilibili.com/video/BV1kh411Q7WN/?vd_source=527da2089758df2583233272e6cb1ee2)

Vite 是一种新型前端构建工具，旨在提高开发体验和构建速度。与传统的打包工具不同，Vite 利用现代浏览器的原生 ES 模块支持和高效的构建工具（如 esbuild）来实现快速启动和热模块替换（HMR）。

Vite 构建的核心任务是提供极速的开发服务器和高效的生产构建。主要包含以下 3 个阶段：

1. 初始化阶段
   - **初始化参数**：从配置文件、配置对象和命令行参数中读取并与默认参数进行合并，生成最终使用的参数。
   - **创建服务器**：使用上一步得到的参数创建 Vite 开发服务器（dev server）。
   - **初始化插件**：加载并初始化配置的插件，插件系统在 Vite 中非常重要，用于扩展和定制构建流程。
2. 开发阶段
   - **启动开发服务器**：Vite 启动一个本地开发服务器，并利用浏览器的原生 ES 模块支持实现快速的模块加载和热模块替换（HMR）。
   - **处理请求**：当浏览器请求某个模块时，Vite 会即时编译并返回该模块，支持对 TypeScript、JSX、CSS 等进行即时转换。
   - **热模块替换（HMR）**：在模块内容发生变化时，Vite 会即时编译并推送更新到浏览器，无需重新加载整个页面，从而大大提高开发效率。
3. 生产构建阶段
   - **打包与优化**：Vite 使用 Rollup 作为打包工具，将应用的所有模块打包成优化的产物。通过 Tree-shaking、代码分割等技术，生成高效的生产代码。
   - **资源处理**：对静态资源（如 CSS、图片等）进行优化和合并，确保生产环境中的高效加载。
   - **输出文件**：将最终生成的文件输出到指定的输出目录，通常是 `dist` 目录。

`Vite` 作为一种新型构建工具，主要有以下几个特点：

- **极速启动**：Vite 利用浏览器的原生 ES 模块支持，实现了毫秒级的冷启动。
- **即时热模块替换（HMR）**：在开发过程中，Vite 可以实时更新模块内容，而无需刷新整个页面。
- **高效的生产构建**：通过使用 Rollup 和 esbuild，Vite 实现了快速且高效的生产代码构建。
- **插件系统**：Vite 拥有强大的插件系统，支持社区开发的各种插件，极大地扩展了其功能和应用场景。

`Vite` 的优势在于它为现代前端开发提供了更加轻量级和高效的解决方案，特别适合于需要快速迭代和开发体验良好的项目。



### 代码规范

- 校验工具
- 提交 git 规范
- 分支管理



#### 校验工具

[ESLint](https://eslint.org/docs/latest/)

[Prettier](https://prettier.io/docs/en/)



#### Git规范

格式化 [Commit message](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

在 `Angular.js` 的基础上添加了一些 `type`

| 类型     | 功能 | 描述                               |
| :------- | ---- | ---------------------------------- |
| feat     | 功能 | 新增功能，迭代项目需求             |
| fix      | 修复 | 修复缺陷，修复上一版本存在问题     |
| docs     | 文档 | 更新文档，仅修改文档不修改代码     |
| style    | 样式 | 变动格式，不影响代码逻辑           |
| refactor | 重构 | 重构代码，非新增功能也非修复缺陷   |
| perf     | 性能 | 优化性能，提高代码执行性能         |
| test     | 测试 | 新增测试，追加测试用例验证代码     |
| build    | 构建 | 更新构建，改动构建工具或外部依赖   |
| ci       | 脚本 | 更新脚本，改动CI或执行脚本配置     |
| chore    | 事务 | 变动事务，改动其他不影响代码的事务 |
| revert   | 回滚 | 回滚版本，撤销某次代码提交         |
| merge    | 合并 | 合并分支，合并分支代码到其他分支   |
| sync     | 同步 | 同步分支，同步分支代码到其他分支   |
| impr     | 改进 | 改进功能，升级当前功能模块         |



#### 分支管理

改掉直接在 `main` 主分支更新的习惯，自己的练习项目也先在 `dev` 分支改完再合并到 `main`



### 测试

这是之前完全没接触过的内容(如果之前这里算测试的话QvQ [pow测试](https://zh.javascript.info/testing-mocha) )

[前端测试ori](https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests) | [前端测试cn](https://juejin.cn/post/7091890131786792967)

[vitest](https://cn.vitest.dev/)

#### 单元测试

前端单元测试是指对前端代码中的最小可测试部分（通常是函数或组件）进行测试，以确保它们按照预期工作。单元测试的目标是验证每个单独的部分都能正常工作，并在代码更改时快速发现错误。

**前端单元测试的最佳实践**

1. **独立性**：每个单元测试应该是独立的，不依赖于其他测试的结果或状态。
2. **覆盖率**：确保测试覆盖到代码的各个方面，包括函数的不同路径和边界情况。
3. **速度**：单元测试应该尽可能快速，以便在开发过程中频繁运行。避免与外部依赖（如 API 或数据库）的交互。
4. **可读性**：测试代码应易于理解和维护，测试用例的命名应清晰描述其目的。
5. **TDD/BDD 方法**：考虑使用测试驱动开发（TDD）或行为驱动开发（BDD）的方法来编写测试用例，以提高测试和代码的质量。



`基于vue3+vite4+vitest的单元测试`

#### 配置项目

首先，需要创建一个 Vue 3 项目，并配置 Vite 和 Vitest。

1. **创建 Vue 3 项目**：

```bash
npm init vue@latest
# Follow the prompts to set up your project
cd your-project-name
npm install
```

2. **安装 Vitest**：

```bash
npm install vitest @vitejs/plugin-vue --save-dev
```

3. **配置 Vite**：

在 `vite.config.js` 中添加 Vitest 配置：

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
```



#### 编写单元测试

1. **创建一个简单的 Vue 组件**：

创建文件 `src/components/HelloWorld.vue`：

```vue
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
```

2. **编写测试文件**：

创建文件 `src/components/HelloWorld.test.js`：

```js
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello Vitest';
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toContain(msg);
  });
});
```



#### 运行测试

在 `package.json` 中添加测试脚本：

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

运行测试：

```bash
npm run test
```

Vitest 会运行所有的测试文件并报告测试结果。

#### 进一步配置和使用

Vitest 还有许多强大的功能，可以进一步配置和使用，例如模拟、快照测试、覆盖率报告等。你可以根据需要添加更多的配置和插件。
# Changelog

在此处将完整记录所有正式版本的变更日志，无论是微调一行样式还是进行重大改动

---
## 1.1.73 (2023-07-31)

### Bug Fixes

* 响应式问题

---
## 1.1.72 (2023-07-31)

### Bug Fixes

* 全局fx内调用全局变量问题

---
## 1.1.71 (2023-07-27)

### Bug Fixes

* 全局fx内调用全局变量问题

---
## 1.1.71 (2023-07-27)

### Bug Fixes

* 修复全局fx嵌套使用问题

---
## 1.1.68, 1.1.69, 1.1.70 (2023-07-25)

* 支持pxToRem

---
## 1.1.67 (2023-07-21)

### Bug Fixes

* 修复先关闭场景（_env.currentScenes.close()）再触发输出的情况

---
## 1.1.66 (2023-07-18)

### Features

* 支持双端能力、全局fx卡片

---
## 1.1.65 (2023-07-18)

### Bug Fixes

* 获取当前页面类型的时机延后，可能在执行渲染器时，还没有body元素

---
## 1.1.64 (2023-07-18)

### Features

* `env`注入`canvas: {type: 'mobile' | 'pc'}`，当前版本仅屏幕宽度小于等于`414`时type为`mobile`

---
## 1.1.63 (2023-07-17)

### Bug Fixes

* 仅主场景会默认触发“输入项”

---
## 1.1.61, 1.1.62 (2023-07-12)

### Features

* 多场景下，主动触发主场景的输入

### Bug Fixes

* 多场景打开，输入触发时机修改，可能在输入触发前已经完成了页面的注册
* 场景组件在触发_inputsCallable时，当前被打开的场景未完成inputs的注册

---
## 1.1.60 (2023-07-11)

### Features

* `slot` 样式相关，新注入了背景图片、背景色(TODO)

---
## 1.1.59

### Features

* `slot` div容器新增配置 `data-isslot='1'`，配合引擎style配置玩法

---
## 1.1.57, 1.1.58 (2023-07-10)

### Features

* 配合设计引擎 `1.2.83` 版本升级，升级核心组件库版本（场景组件改造），`env` 注入 `openScene`，“打开”场景改造，兼容原先搭建的页面

---
## 1.1.56 (2023-07-05)

### Bug Fixes

* 各类 `容器组件`，销毁时，需要相应的删除注册的组件信息

---
## 1.1.55 (2023-07-05)

### Features

* 插槽className与设计引擎保持一致，用于样式隔离，在插槽dom上添加一个名为slot的class，不包含样式信息，仅用于css选择器

---
## 1.1.54 (2023-07-05)

### Features

* 多场景，外部可通过 `disableAutoRun` 字段控制是否自主控制 `autorun组件` 的执行

---
## 1.1.53 (2023-07-04)

### Bug Fixes

* 补充缺失的多场景输入的“当前输入”数据

---
## 1.1.52 (2023-06-30)

### Bug Fixes

* 历史遗留问题，对应scope插槽的判定，变更为slot配置中type属性必须为scope

---
## 1.1.51 (2023-06-20)

### Bug Fixes

* 例如“页面”级输入打开对话框，此时输入不带有作用域信息（scope），而在对话框作用域内去获取当前输入数据时，无法通过作用域信息（scope）拿到正确的输入信息。目前解决方式为尝试去查找无作用域信息的输入数据。

---
## 1.1.50 (2023-06-20)

### Bug Fixes

* 作用域中如果有自执行组件，且需要获取当前输入的数据，在当前组件渲染插槽时，先注入输入的值，再运行自执行组件，避免时许错乱而拿不到输入值

---
## 1.1.49 (2023-06-20)

### Bug Fixes

* 循环列表场景，自执行组件是否执行，根据当前作用域进行判断
  ``` javascript
  // 旧
  let runExed -> if (!runExed) -> runExed = true
  // 新
  let runExed = {} -> if (!runExed[scopeId]) -> runExed[scopeId] = true
  ```

---
## 1.1.48 (2023-06-20)

### Features

* `env`支持配置`shadowRoot`字段，支持云组件在不同搭建引擎中能够正确渲染`style(生成style标签)`样式
  ``` javascript
    const root = env?.shadowRoot || document.getElementById('_mybricks-geo-webview_')?.shadowRoot
  ```
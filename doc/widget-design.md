
# 部件开发

## 1 开发环境配置

部件为Angular 插件，支持两种方式构建：

> 1. angular library（基于ng-packagr）
> 2. rollup.js

### 基于angular library方式

angular library 是基于ng-packagr进行打包，不过ng-packagr是对rollup.js 的封装,更加易入手。因为angular library是基于angular-cli创建，包含在angular工程下，方便调试。因此推荐此方式。

初始化步骤如下：

1. 安装angular

```javascript
npm install -g angular@6.1.0
```

2. 创建angular工程

```javascript
ng new projectName --style=scss
```

3. 进入工程

```javascript
cd projectName
```

4. 创建部件library

```javascript
ng g library gsp-widget-name -p prefixName
```

5. 安装gsp-widget-core

```javascript
npm install gsp-widget-core@latest
```

6. 打包配置，打包时排除gsp-widget-core。

修改gsp-widget-core目录下的package.json文件，配置打包不要打包gsp-widget-core。增加`"gsp-widget-core"`节点。

```js
  "peerDependencies": {
    "@angular/common": "^6.0.0-rc.0 || ^6.0.0",
    "@angular/core": "^6.0.0-rc.0 || ^6.0.0",
    "gsp-widget-core":"^0.0.1"
  },
```

以上即完成开发环境部署，生成的项目路径如下：
![项目路径](/doc/assets/项目目录.png)

7. 部件组件打标签

开发需要调整gsp-widget-name.component.ts文件，在Component class上打上部件标签`@GspWidgetManifest`,标示此类为小部件标签，示例如下：

```js
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { GspWidgetManifest } from "gsp-widget-core";

 import 'chart.js';

declare var Chart:any;

@GspWidgetManifest("board",[])
@Component({
  selector: 'lib-gsp-widget-board',
  template: `
  <canvas id="myChart" width="400" height="400" #chart></canvas>
  `,
  styles: []
})
export class GspWidgetBoardComponent implements AfterViewInit {
    //...部件代码逻辑
}
```

8. 发布。部件开发完成，通过以下命令进行发布：

```js
ng build gsp-widget-name
```

此命令会在根目录生成dist/gsp-widget-name文件夹,将bundles文件夹下的gsp-widget-name.umd.min.js文件拷贝出来即为打包好的小部件前端包。通过提供的注册方式进行注册，即可。

### rollup.js方式

可以下载seed工程，seed工程已经配置好基本的打包配置，在seed工程基础上进行开发，可快速打包。

## 如何引用并第三方类库

第三方类库分两类`系统插件` `第三方插件`。系统插件主要包含如下模块：

- "@angular/core": "^6.0.0-rc.0 || ^6.0.0"
- "@angular/common": "^6.0.0-rc.0 || ^6.0.0"
- "@angular/animations": "^6.1.0"
- "@angular/forms": "^6.1.0",
- "@angular/http": "^6.1.0",
- "@angular/platform-browser": "^6.1.0",
- "@angular/platform-browser-dynamic": "^6.1.0",
- "@angular/router": "^6.1.0"
- "@angular/compiler": "^6.1.0"

系统模块在就不需要再打包到部件脚本中。

对于其他第三方插件需要通过打包工具配置，将第三方插件也打包到部件脚本中。

angular Library需要将系统插件添加到package.json中的peerDependencies节点下，使系统插件不打包到部件脚本中。配置完成后使用到的第三方插件会自动打包到部件。

rollup.js方式需要配置`rollup.config.js`下的`external`节点,使打包时不自动打包相关插件，示例如下：

```javascript
    external: [
        // 'plugins-core',
        '@angular/core',
        "@angular/common",
        'gsp-widget-core'
    ]
```
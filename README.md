This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

一 目录介绍：
create-react-app 是用于创建新项目的全局命令行实用程序。
note/
    |
    --- /config/            (webpack配置工具)
        |
        --- webpack.config.js   (webpack配置文件)
    --- /public/            (静态目录，存放 img 等资源)
    --- /scripts            (命令配置)
        |
        --- index.html      (模板文件)
        --- favicon.ico     (网站图标)
    --- /src/   (核心代码,项目文件都在这里,webpack只处理其中的文件,您需要在其中放入任何JS和CSS文件src,否则webpack将看不到它们)
        |
        --- components/     (页面，抽离的公用组件)
        --- index.js        (是JavaScript的入口文件)
        --- css/
        --- js/
        --- images/

        --- utils/          (工具函数)
        --- store/          (数据存储及更新)

        --- apiRequest/     (请求目录)

    --- package.json
    --- README.md

二 开发：
在开发之前您可能需要了解：
- react [ 文档：https://react.docschina.org/docs/getting-started.html ]
- ant [ 文档：https://ant.design/components/button-cn/ ]
- scss [ 文档: https://www.sass.hk/docs/ ]
<!-- - mobx [ 文档: https://cn.mobx.js.org/ ] -->

测试git


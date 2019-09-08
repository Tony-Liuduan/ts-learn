const { resolve } = require("path");
const merge = require("webpack-merge");
// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");


// 解析node执行环境，根据node执行环境选择引用的 webpack config 文件
const argc = require("yargs-parser")(process.argv.slice(2));
const _mode = argc.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);


const webpackConfig = {
    entry: {
        app: resolve("./src/web/index.tsx"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/web/index.html",
        }),
    ],
}


module.exports = merge(webpackConfig, _mergeConfig);
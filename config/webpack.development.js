const { join } = require("path");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");


module.exports = {
    devServer: {
        contentBase: join(__dirname, "../dist"),
        // BrowserRouter
        historyApiFallback: true,
        hot: true,
        quiet: true,
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ["You application is running here http://localhost:8081"],
                notes: ["请使用 npm run client:server 运行开发环境"],
            },
            onErrors: function (severity, errors) {
                // You can listen to errors transformed and prioritized by the plugin
                // severity can be 'error' or 'warning'
            },
            // should the console be cleared between each compilation?
            // default is true
            clearConsole: true,

            // add formatters and transformers (see below)
            additionalFormatters: [],
            additionalTransformers: [],
        }),
        new WebpackBuildNotifierPlugin({
            title: "My Project Webpack Build",
            suppressSuccess: true
        })
    ],
};
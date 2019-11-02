const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const autoprefixer = require("autoprefixer");
const mdc = require("material-components-web/dist/material-components-web");
const isProd = process.env.NODE_ENV === "production";
const mdcAutoInit = require("@material/auto-init");
// const CompressionPlugin = require("compression-webpack-plugin");

function tryResolve_(url, sourceFilename) {
    try {
        return require.resolve(url, { paths: [path.dirname(sourceFilename)] });
    } catch (e) {
        return '';
    }
}

function tryResolveScss(url, sourceFilename) {
    const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
    return tryResolve_(normalizedUrl, sourceFilename) ||
        tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
            sourceFilename);
}

function materialImporter(url, prev) {
    if (url.startsWith('@material')) {
        const resolved = tryResolveScss(url, prev);
        return { file: resolved || url };
    }
    return { file: url };
}


module.exports = {
    entry: {
        // html: [
        //     "../src/index.html",
        //     "../src/sub-section.html",
        // ],
        script: [
            "../assets/js/script-default.js"
        ],
        vendor: [
            "./jquery/jquery-3.4.1.min.js",
            "./node_modules/material-components-web/dist/material-components-web.min.js",
            "./node_modules/@material/auto-init/dist/mdc.autoinit.min.js",
        ],
        style: [
            "../assets/css/style.css",
            "./node_modules/material-components-web/material-components-web.scss",
        ]
    },
    cache: false,
    mode: "development",
    node: {
        dns: "mock",
        fs: "empty",
        net: "empty",
        tls: "empty",
        path: true,
        url: false
    },
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "css/mdc.bundle.css",
                        },
                    },
                    { loader: "extract-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            webpackImporter: true,
                            sassOptions: {
                                includePaths: ["node_modules"],
                            }
                        },
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /(\.woff2?|\.woff|\.ttf|\.eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]"
                    },
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /material-components-web.+\.js$/,
                use: [{
                    loader: "expose-loader",
                    options: "mdcAutoInit"
                }, {
                    loader: "expose-loader",
                    options: "mdc"
                }]
            },
            {
                test: /jquery.+\.js$/,
                use: [{
                    loader: "expose-loader",
                    options: "jQuery"
                }, {
                    loader: "expose-loader",
                    options: "$"
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.min.css"),
        new UglifyJsPlugin({
            test: /\.js$/,
            sourceMap: process.env.NODE_ENV === "development"
        }),
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/style.min.css",
        }),
        new webpack.ProvidePlugin({ "$": "jquery", "jQuery": "jquery" }),
        new webpack.ProvidePlugin({
            "mdc": ["node_modules/material-components-web/index.js", "default"]
        }),
    ],
    output: {
        path: path.resolve("../dist/webpack"),
        filename: "[name].js",
    },
    externals: {
        jquery: "jQuery",
        mdc: "default",
    }
}
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: './src/index.tsx',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env", // 能解决大多数样式兼容性问题
                                ],
                            },
                        },
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            esModule: false,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env", // 能解决大多数样式兼容性问题
                                ],
                            },
                        },
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(png|gif|svg|jpe?g)$/,
                type: 'asset',
                generator: {
                    filename: 'images/[name].[hash:6][ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 50 * 1024,
                    },
                },
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash:6][ext]',
                },
            },
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "./src"),
                use: ["babel-loader"],
            },
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "./src"),
                use: ["babel-loader", "ts-loader"]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'jsLadder',
            template: './public/index.html',
        }),
    ],
    devServer: {
        open: true,
        host: "localhost",
        port: 8080,
        hot: true,
        compress: true,
    },
}
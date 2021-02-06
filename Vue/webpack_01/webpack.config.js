const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口文件
    entry: './src/index.js',
    //打包文件
    output: {
        //文件名
        filename: 'main.js',
        //文件夹名
        path: path.resolve(__dirname, './dist')
    },
    //loader
    module: {
        //配置规则
        rules: [
            //配置css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //配置图片
            {
                test: /\.(jpg|jpeg)$/,
                use: ['url-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}
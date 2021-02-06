const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口文件
    entry: './src/index.js',
    //打包文件
    output: {
        //文件名
        filename: 'main.js',
        //路径
        path: path.resolve(__dirname, './dist')
    },
    //配置loader
    module: {
        rules: [
            //配置css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //配置图片
            {
                test: /\.(jpg|jpeg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    //配置插件
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
}

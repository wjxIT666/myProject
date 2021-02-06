const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //设置入口文件
    entry: './src/index.js',
    //设置输出文件
    output: {
        //设置文件的名字
        filename: 'main.js',
        //设置文件夹的名字
        path: path.resolve(__dirname, './dist')
    },
    //配置loader
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
                loader: 'url-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    //配置plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
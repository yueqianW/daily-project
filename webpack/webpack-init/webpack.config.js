const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// 创建插件实例
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: 'development',    //production
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }
        ]

    }
}
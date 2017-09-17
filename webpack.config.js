/**
 * Created by Franco on 2017/9/15
 *
 */

const path = require('path');
const webpack = require('webpack');


const config = {
    entry: {     /*定义webpack构建工程的入口文件，可以定义多个入口*/
        linkButton: './src/js/linkButton.js',
        likeButton_2: './src/js/likeButton_2.js',
        tag: './src/js/tag.js',
        index: './src/js/index.js',
        vendor: 'moment'
    },
    output: {    /*设置编译文件的输出位置及文件名*/
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [       /*设置loader加载器和匹配规则*/
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {   test: /\.(css|less)$/,
                use:["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [    /*申明配置webpack插件，插件使用插件的实例（new 出来）*/
        new webpack.optimize.CommonsChunkPlugin({ //通过插件将公共library和应用代码分离
            name: 'vendor',            /*定义公共库编译后输出的文件名*/
            minChunks: function (module) {
                //设置需要分离的公共库只存在于node_modules文件夹下
                return module.context && module.context.indexOf('.node_modules') !== -1;
            }
        })
    ]
}


module.exports = config;
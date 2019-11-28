
// webpack4的配置
var webpack = require("webpack");
var path = require("path");
var fs = require("fs");
var htmlWebpackPlugin = require("html-webpack-plugin");
var copyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
module.exports = {
    // webpack4需要添加这个配置，development为开发环境，production为生产环境
    mode: "development",//模式，分为开发模式、生产模式。此为4.X里新增的
    entry: {//入口文件（你要打包，就告诉我打包哪些）
        menu: __dirname + "/yangshi/menu.js",
        animation: __dirname + "/yangshi/animation.js",
        rem: __dirname + "/page/js/rem.js",
        website: __dirname + "/page/js/website.js",
        google_analytics: __dirname + "/page/js/google_analytics.js"
    },
    //entry:  __dirname + "/app/main.js", // 之前提到的唯一入口文件
    // output: {
    //     path: __dirname + "/dist", // 打包后的文件存放的地方
    //     filename: "index.js" // 打包后输出文件的文件名
    // },
    output: {//出口文件（我打包完了，给你放到哪里）
        path: path.resolve(__dirname,'./dist'),
        filename: "js/[name].[chunkHash:5].js", // 打包后输出文件的文件名    加入哈希值，每次打包代码生成不一样名字，这样浏览器就不会记住缓存了
        chunkFilename: "js/[id].[chunkHash:5].js",
        publicPath: "./"
    }, 
    devServer: {//devServer：服务器（webpack提供的本地服务器）
        contentBase: "./page", // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
        host:'localhost',// 默认是localhost
        compress:true,
        port:8081,// 端口
        open: true,// 自动打开浏览器
        hot: true  // 开启热更新
    },
    plugins: [ //plugins：插件（辅助开发，提高开发效率）
        new htmlWebpackPlugin({       //根目录的index.html生成dist下的html，可以多个生成
            filename: 'index.html',
            template: './page/index.html',   
            // inject: 'head',           //script标签的放置 有四个选项值 true, body, head, false
            minify: {                    //html压缩
            //removeComments: true,     //移除注释
            //collapseWhitespace: true, //移除空格
            // minifyCSS: true// 压缩内联css
            },
            // chunks: ["menu","animation","rem","browser","website"]
        }),
        // new htmlWebpackPlugin({       //根目录的index.html生成dist下的html，可以多个生成
        //     filename: 'khdStart.html',
        //     template: './src/khdStart.html',   
        //     inject: 'head',           //script标签的放置
        //     minify: {                    //html压缩
        //     //removeComments: true,     //移除注释
        //     //collapseWhitespace: true //移除空格
        //     },
        //     chunks:['khdStart']
        // }),
        new webpack.HotModuleReplacementPlugin(),//热更新
        new copyWebpackPlugin([{
            from:__dirname+'/page/img',//打包的静态资源目录地址
            to:'./img' //打包到dist下面的public
        },{
            from:__dirname+'/page/file',
            to:'./file'
        },{
            from:__dirname+'/page/js/browser.min.js',
            to:'./js/browser.min.js'
        },{
            from:__dirname+'/page/js/vue.js',
            to:'./js/vue.js'
        },{
            from:__dirname+'/page/js/axios.min.js',
            to:'./js/axios.min.js'
        },{
            from:__dirname+'/page/js/jquery-3.4.1.min.js',
            to:'./js/jquery-3.4.1.min.js'
        },{
            from:__dirname+'/page/js/clipboard.min.js',
            to:'./js/clipboard.min.js'
        },{
            from:__dirname+'/page/js/overall.json',
            to:'./js/overall.json'
        }]),

        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkHash:5].css",////都提到build目录下的css目录中
            chunkFilename: "css/[id].[chunkHash:5].css"
        }),
        new OptimizeCssAssetsPlugin(),
        function(){
            this.plugin('done', (stats) => {//当webpack编译完成的时候会触发 done` 事件
                fs.readFile('./page/index.html', 'utf8', (err, data) => {
                    var dataStr = data.toString();
                    
                    stats.compilation.assetsInfo.forEach(function(item,key){
                        var keyStr = key.split('.')[0];
                        // console.log('map+88',key,keyStr);
                        if(keyStr=='css/menu'){
                            dataStr = dataStr.replace('css/menu.css',key);
                        }else if(keyStr=='css/animation'){
                            dataStr = dataStr.replace('css/animation.css',key);
                        }else if(keyStr=='js/rem'){
                            dataStr = dataStr.replace('js/rem.js',key);
                        }else if(keyStr=='js/google_analytics'){
                            dataStr = dataStr.replace('js/google_analytics.js',key);
                        }else if(keyStr=='js/website'){
                            dataStr = dataStr.replace('js/website.js',key);
                        }
                    });
                    
                    fs.writeFile('./dist/index.html', dataStr, err => {
                        if (!err) {
                            console.log('HTML file copy successfully');
                        } else {
                            console.log(err);
                        }
                    })
                })
            })
        }
    ],
    module:{//module：模块（放lorder，编译浏览器不认识的东西）
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname,'/page'),
                exclude: path.resolve(__dirname,'/node_modules')
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader?importLoaders=1!postcss-loader!sass-loader',
                use: [
                    MiniCssExtractPlugin.loader,//注意这边
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader' 
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.woff(\?t=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=100000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?t=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=100000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?t=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=100000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?t=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=100000&mimetype=application/font-eot'
            }
        ]
    }
}
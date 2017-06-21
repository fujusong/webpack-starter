var path=require('path');// 导入路径包 
var webpack=require('webpack'); 
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DEVELOPMENT=process.env.NODE_ENV==='development'; 
var PRODUCTION=process.env.NODE_ENV==='production'; 

console.log(process.env.NODE_ENV);
console.log("production : "+(process.env.NODE_ENV==='production'));
console.log("development : "+(process.env.NODE_ENV==='development'));

var entry=PRODUCTION ? ['./src/index.js'] : [ 
    './src/index.js', 
    'webpack/hot/dev-server',//开启热重载 hot 
    'webpack-dev-server/client?http://localhost:8080'//添加webpack-dev-server客户端 
]; 
var plugins = PRODUCTION ? [ 
    new webpack.optimize.UglifyJsPlugin(/*{//代码压缩 
        comments:true,//显示注释 
        mangle:false,//取消代码混淆 
        compress:{ 
            warnings:true//在UglifyJs删除没有用到的代码时不输出警告 
        } 
    }*/),
        new ExtractTextPlugin('style.css'),

    ] : 
    [ 
        new webpack.HotModuleReplacementPlugin()//全局开启代码热替换 如果是CLI这里则不用写 
    ]; 
plugins.push( 
    new webpack.DefinePlugin({ 
        DEVELOPMENT:JSON.stringify(DEVELOPMENT), 
        PRODUCTION:JSON.stringify(PRODUCTION) 
    }) 
);

const cssIdentifier=PRODUCTION? '[hash:base64:10]' : '[path][name]--[local]'; 

const cssLoader=PRODUCTION ? ExtractTextPlugin.extract('css-loader?localIdentName=' + cssIdentifier) : 
    ['style-loader','css-loader?localIdentName=' + cssIdentifier];

/*
new ExtractTextPlugin( 
'style-[contenthash:10].css'//根据内容生成hash值 
,{allChunks: true}//所有分离文件的样式也会全部压缩到一个文件上 
)
*/



module.exports={ 
    entry:entry,//入口文件
    //devtool:'source-map',//打包代码的同时生成一个sourcemap文件，并在打包文件的末尾添加souceURL注释,注释会告诉JS引擎原始文件位置 
    module: { 
        rules:[ 
            { 
                test: /\.js$/, 
                use: ["babel-loader"], 
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/, 
                //use: ["style-loader","css-loader"], 
                use: cssLoader, 
                // use: ["style-loader","css-loader?localIdentName=[path][name]--[local]"], 
                // use: ["style-loader","css-loader?localIdentName=" + cssIdentifier], 
                exclude: path.resolve(__dirname, 'node_modules'),
            }

        ] 
    },
    plugins:plugins, 
    output:{ 
    path:path.join(__dirname,'dist'),// 指定打包之后的文件夹 
    publicPath:'/dist/',// 指定资源文件引用的目录 
    filename:'bundle.js'// 指定打包为一个文件 bundle.js 
    } 
} 



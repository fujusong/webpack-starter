var path = require('path'); // 导入路径包 

module.exports={ 
	entry:'./src/index.js',//入口文件 
	output:{ 
		path:path.join(__dirname,'dist'),// 指定打包之后的文件夹 
		publicPath:'/dist/',// 指定资源文件引用的目录 
		filename:'bundle.js'// 指定打包为一个文件 bundle.js 
	}
}
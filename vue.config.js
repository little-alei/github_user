/*
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-08 17:00:23
 * @LastEditTime: 2022-03-08 17:07:06
 * @Description: 全局配置
 * 灵感来之不易,积累创造奇迹
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	//开启代理服务器
	devServer: {
		proxy: {
			"/getTasks": {
				target: "http://192.168.100.131:5000",
				pathRewrite: {
					"^/getTasks": "",
				},
				ws: true, //用于支持websocket
				changeOrigin: true, //用于请求头中的host值
			},
		},
	},
});

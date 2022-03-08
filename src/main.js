/*
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-08 17:00:23
 * @LastEditTime: 2022-03-08 17:56:14
 * @Description: 
 * 灵感来之不易,积累创造奇迹
 */
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this;
	},
}).$mount("#app");

<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-08 17:00:23
 * @LastEditTime: 2022-03-08 22:19:24
 * @Description: 用户搜索区域
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div class="searchInput">
			<input type="text" placeholder="enter the name you search" v-model="keyWord" @keyup.enter="searchUser"/>
			<button @click="searchUser">Search</button>
		</div>
	</section>
</template>
<script>
import axios from "axios";
export default {
	name: "SearchInput",
	data() {
		return {
			keyWord: "",
		};
	},
	methods: {
		searchUser() {
			axios
				.get("https://api.github.com/search/users?q=" + this.keyWord)
				.then((response) => {
					this.$bus.$emit("search", response.data.items);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>
<style scoped>
.searchInput {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.searchInput input {
	flex-grow: 1;
}
</style>

<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-08 17:00:23
 * @LastEditTime: 2022-03-08 17:36:28
 * @Description: app组件
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div class="container">
		<SearchInput />
		<UserList />
	</div>
</template>

<script>
import SearchInput from "./components/SearchInput.vue";
import UserList from "./components/UserList.vue";
export default {
	name: "App",
	components: {
		SearchInput,
		UserList,
	},
};
</script>

<style></style>

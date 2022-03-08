<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-08 17:00:23
 * @LastEditTime: 2022-03-08 18:29:46
 * @Description: 用户展示区域
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div>
		<h2 v-show="users.length == 0">Welcome to use</h2>
		<ul v-show="users.length != 0" class="row">
			<li v-for="user in users" class="card" :key="user.login">
				<a :href="user.html_url" target="_blank">
					<img :src="user.avatar_url" style="width: 100px" />
				</a>
				<p class="card-text">{{ user.login }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "UserList",
	data() {
		return {
			users: [],
		};
	},
	methods: {
		getUser(users) {
			console.log(users);
			this.users = users;
		},
	},
	mounted() {
		this.$bus.$on("search", this.getUser);
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	display: contents;
}

.album {
	min-height: 50rem; /* Can be removed; just added for demo purposes */
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: #f7f7f7;
}

.card {
	float: left;
	width: 33.333%;
	padding: 0.75rem;
	margin-bottom: 2rem;
	border: 1px solid #efefef;
	text-align: center;
}

.card > img {
	margin-bottom: 0.75rem;
	border-radius: 100px;
}

.card-text {
	font-size: 85%;
}
</style>

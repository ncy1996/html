<template>
	<div >
		<h1>{{title}}</h1>
		<router-link to="/service/hairdressing">汽车美容</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:"service",
		data(){
			return{
				title:"这是首页旁边的服务"
			}
		}
	}
</script>
<style scoped>
	
</style>
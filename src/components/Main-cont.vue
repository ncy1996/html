<template>
	<div id="cont">
		<!--<h1>{{title}}</h1>-->
		<mainmenu></mainmenu>
		<a href="/service">点击跳转到服务</a>
		<a href="/detail">点击跳转到详情页</a>
	</div>
</template>

<script>
	import Mainmenu from "./内容/Main-menu"
	export default{
		name:"maincont",
		components:{
			Mainmenu
		},
		data(){
			return{
				title:"这是主页的内容"
			}
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	#cont{
		width: 976px;
		background: white;
		margin: 0 auto;
	}
</style>
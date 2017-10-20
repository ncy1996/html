<template>
	<div>
		<h6>{{title}}</h6>
		<h1>这是贴膜的地方</h1>
	</div>
</template>

<script>
	export default {
		name:"keyt",
		props:{
			msg:{}
		},
		data(){
			return{
				title:"这是贴膜"
			}
		}
	}
</script>

<style scoped>
	
</style>
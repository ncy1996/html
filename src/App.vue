<template>
  <div id="cont">
  	<maintitle></maintitle>
  	<div id="app">
		<router-view></router-view>
  	</div>
	<mainfoot></mainfoot>
  </div>
</template>

<script>
import Maintitle from "./components/导航栏/main-title"	
import Mainfoot from "./components/导航栏/main-foot"	
export default {
  name: 'app',
  components: {
	Maintitle,
	Mainfoot
  }
}
</script>
<style scoped>
#cont{
	background: #e9e9e9;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid black;
  margin-bottom: 20px;
  background: darkgray;
}

</style>

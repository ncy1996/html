import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Maincont from './components/Main-cont'
//import Maintitle from './components/导航栏/Main-title'
//import Mainfoot from './components/导航栏/Main-foot'
import Keyt from './components/导航栏/Key-t'
import Keyd from './components/导航栏/Key-d'
import Keyq from './components/导航栏/Key-q'
import Keya from './components/导航栏/Key-a'
import Keys from './components/导航栏/Key-s'
import Service from './components/导航栏/Service'
import Groupon from './components/导航栏/Groupon'
import Forum from './components/导航栏/Forum'
import Hairdressing from './components/服务/Hairdressing'
import Detail from './components/Detail'
import $ from 'jquery'

Vue.use(VueRouter)
Vue.config.productionTip = false
//设置路由
const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
	{path:"/",component:Maincont},
	{path:"/keyd",component:Keyd},
	{path:"/keyt",component:Keyt},
	{path:"/keyq",component:Keyq},
	{path:"/keya",component:Keya},
	{path:"/keys",component:Keys},
	//服务
	{path:"/service",component:Service},
	{path:"/groupon",component:Groupon},
	{path:"/forum",component:Forum},
	//服务下面的二级路由
	{
		path:"/service",
		component:Service,
		children:[
			{path:"/service/hairdressing",component:Hairdressing}
		]
	},
	//详情页
	{path:"/detail",component:Detail}
	]
})
/* eslint-disable no-new */
new Vue({
	router,
template:"<App/>",
components:{App}
}).$mount("#app")


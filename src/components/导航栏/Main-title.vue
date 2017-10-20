<template>
	<div>
		<div id="i_header">
			<div class="i_header_top">
				<div class="i_list">
					<a href="###" class="i_favorite"><img src="../../assets/car-footimage/icon.png"/> 收藏夹</a>
					<a href="###" class="i_read"><img src="../../assets/car-footimage/icon2.png"/> 订阅</a>
					<a href="###" class="i_help"><img src="../../assets/car-footimage/icon3.png"/> 帮助</a>
				</div>
			</div>
			<div class="i_banner">
				<img src="../../assets/car-titleimage/banner.png" alt="" />
				<span class="i_close">+</span>
			</div>
			<div class="i_center">
				<div class="i_center_left">
					<img src="../../assets/car-titleimage/logo.png" alt="" class="i_logo" />
					<span class="i_address">北京</span><br />
					<a href="###" class="i_city" @click="show">[切换城市]</a>
				</div>
				<div class="i_left_list">
					<div class="block">
						<div class="i_cut">
							<a href="###" class="iCity" >按市切换</a>
							<a href="###" class="iProvince">按省切换</a>
							<span class="i_close">+</span>
						</div>
						<div class="i_coreCity" v-for="item in arr">
							<div class="i_coreCityA"><span class="city">{{item.name}}</span></div>
							<div class="i_coreCityB">
								<a href="###" v-for="i in item.cont" class="cityName">{{i}}</a>
							</div>
						</div>
						<div class="i_province" >
							<a href="###" class="i_top_city" v-for="item in beiArr">{{item}}</a>
							<a href="###" class="i_down_city" v-for="item in shangArr">{{item}}</a>
							<a href="###" class="i_down_cityA" v-for="item in shangArr">{{item}}</a>
						</div>
					</div>
				</div>
				<div class="i_center_search">
					<div class="i_searchList">
						<a href="/keyt" class="i_golf">高尔夫</a>
						<a href="/keyd" class="i_citroen">雪铁龙夫</a>
						<a href="/keyq" class="i_audi">奥迪</a>
						<a href="/keya" class="i_golf">高尔夫</a>
						<a href="/keys" class="i_citroen">雪铁龙</a>
						<a href="###" class="i_audiA">奥迪A7</a>
					</div>
					<div class="i_control">
						<input type="text" class="i_search" placeholder="搜索商品名、地址、服务等" />
						<input type="button" value="搜索" class="i_btn" />
					</div>
					<ul class="i_show_list">
						<li>贴贴膜1</li>
						<li>膜膜2</li>
						<li>膜贴膜1贴膜</li>
						<li>贴膜3</li>
						<li>贴膜1</li>
						<li>贴膜贴膜1</li>
						<li>贴膜1</li>
						<li>贴膜贴</li>
						<li>贴膜膜</li>
					</ul>
				</div>
				<div class="i_center_right">
					<span class="i_phone">4006-630-636</span><br />
					<span class="i_time">每日9:00-21:00</span>
				</div>
			</div>
			<div class="i_header_nav">
				<div class="i_nav_center">
					<div class="i_nav_left">
						<a href="/" class="i_homePage">首页</a>
						<a href="/service" class="i_serve">服务</a>
						<a href="" class="i_Shops">商家</a>
						<a href="/groupon" class="i_Woot">团购</a>
						<a href="" class="i_store">商城</a>
						<a href="/forum" class="i_unity">社区</a>
					</div>
					<div class="i_nav_right">
						<a href="" class="i_cart"><img src="../../assets/car-footimage/icon4.png"/> 购物车 <img src="../../assets/car-footimage/icon1.png"/></a>
						<a href="" class="i_browse">最近浏览 <img src="../../assets/car-footimage/icon1.png"/></a>
						<a href="" class="i_vehicles">我的车族</a>
						<a href="" class="i_enter">登录</a>
						<a href="" class="i_enroll">注册</a>
					</div>
					<ul class="i_car_list">
						<li class="i_car_A"><img src="../../assets/car-footimage/car.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><br/><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_car_B"><img src="../../assets/car-footimage/car1.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_car_C"><img src="../../assets/car-footimage/car2.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_car_D"><img src="../../assets/car-footimage/car3.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_car_E"><img src="../../assets/car-footimage/car4.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_ctrl">
							<span class="i_check">查看我的购物车</span>
						</li>
					</ul>
					<ul class="i_car_listA">
						<li class="i_car_A"><img src="../../assets/car-footimage/car.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><br/><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_car_B"><img src="../../assets/car-footimage/car1.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_car_C"><img src="../../assets/car-footimage/car2.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_car_D"><img src="../../assets/car-footimage/car3.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_car_E"><img src="../../assets/car-footimage/car4.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_ctrl">
							<span class="i_check">清空最近浏览记录</span>
						</li>
					</ul>
					<ul class="i_mycar">
						<li>我的订单</li>
						<li>我的评价</li>
						<li>我的收藏</li>
						<li>车族余额</li>
						<li>充值/提现</li>
						<li>代金券</li>
						<li>我的积分</li>
						<li>账户设置</li>
					</ul>
				</div>
			</div>
		</div>
		<!--<router-link to="/">首页</router-link>-->
		<!--<router-link to="/service">服务</router-link>-->
		<!--<router-link to="/groupon">团购</router-link>-->
		<!--<router-link to="/forum">论坛</router-link>-->
	</div>
</template>

<script>
	import '../../assets/title.css'
	

	export default{
//			el: ".i_left_list",
			name: "maintitle",
			data(){
				return{
					arr: [{
						name: "核心城市",
						cont: ["北京", "上海", "天津", "重庆", "深圳", "济南", "长沙", "武汉"]
					}, {
						name: "重点城市",
						cont: ["保定", "长春", "成都", "大连", "东莞", "鄂州", "福州", "佛山", "贵阳", "哈尔滨", "杭州", "合肥", "呼市", "海口", "嘉兴", "金华", "昆明", "兰州", "廊坊", "南昌", "南京", "南宁", "南通", "宁波", "泉州", "青岛", "沈阳", "石家庄", "绍兴", "苏州", "太原"]
					}],
					beiArr:["北京","上海","天津","重庆","深圳"],
//					beiArr:["北京","A 安徽省(合肥)", "G 甘肃省(兰州)", "H 河北省(石家庄)", "L 辽宁省(沈阳)", "S 四川省(成都)"],
					shangArr:["F 福建省(福州)", "H 河南省(郑州)", "H 黑龙江(哈尔滨)", "N 宁夏(银川)", "S 山西省(太原)"],
					tianArr:["G 广东省(广州)", "H 湖北省(武汉)", "J 江苏省(南京)", "N 内蒙古(呼市)", "Y 云南省(昆明)"],
					chongArr:["G 广西省(南宁)", "H 湖南省(长沙)", "J 江西省(南昌)", "Q 青海省(西宁)", "Z 浙江省(杭州)"],
					shenArr:["G 贵州省(贵阳)", "H 海南省(海口)", "J 吉林省(长春)", "S 山东省(济南)"]
//					letArr: [{
//						name: "北京",
//						cont: ["A 安徽省(合肥)", "G 甘肃省(兰州)", "H 河北省(石家庄)", "L 辽宁省(沈阳)", "S 四川省(成都)"]
//					}, {
//						name: "上海",
//						cont: ["F 福建省(福州)", "H 河南省(郑州)", "H 黑龙江(哈尔滨)", "N 宁夏(银川)", "S 山西省(太原)"]
//					}, {
//						name: "天津",
//						cont: ["G 广东省(广州)", "H 湖北省(武汉)", "J 江苏省(南京)", "N 内蒙古(呼市)", "Y 云南省(昆明)"]
//					}, {
//						name: "重庆",
//						cont: ["G 广西省(南宁)", "H 湖南省(长沙)", "J 江西省(南昌)", "Q 青海省(西宁)", "Z 浙江省(杭州)"]
//					}, {
//						name: "深圳",
//						cont: ["G 贵州省(贵阳)", "H 海南省(海口)", "J 吉林省(长春)", "S 山东省(济南)"]
//					}]
				}
			},
			methods:{
				show:function() {
					var leftList = document.getElementsByClassName("i_left_list")[0];        
					leftList.style.display="block";
				}
			},
			mounted(){
//				$(".i_cart,.i_car_list").mousemove(function() {
//					$(".i_car_list").css("display","none");
//				})
			}
		};

	
</script>
	
<style scoped>
	
</style>
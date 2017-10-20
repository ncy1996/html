<template>
	<div id="cont">
		<div class="a_zjp_footLine"></div>
		<div class="a_zjp_aboutUs">
			<dl>
				<dt>帮助中心</dt>
				<dd><a href=""><span></span>购买流程</a></dd>
				<dd><a href=""><span></span>找回密码</a></dd>
				<dd><a href=""><span></span>网站导航</a></dd>
			</dl>
				<dl>
				<dt>官方微博</dt>
				<dd><a href=""><span></span>新浪微博</a></dd>
				<dd><a href=""><span></span>腾讯微博</a></dd>
			</dl>
				<dl>
				<dt>商务合作</dt>
				<dd><a href=""><span></span>商户合作</a></dd>
				<dd><a href=""><span></span>业务合作</a></dd>
				<dd><a href=""><span></span> 开发API</a></dd>
			</dl>
				<dl>
				<dt>关于我们</dt>
				<dd><a href=""><span></span>公司简介</a></dd>
				<dd><a href=""><span></span>联系我们</a></dd>
				<dd><a href=""><span></span>加入我们</a></dd>
			</dl>			
			<dl></dl>
			<div class="a_zjp_aboutUs_phone"><span>客服电话 ( 免长途费 )</span><span>4006-630-636</span></div>
			<div class="a_zjp_aboutUs_link">
				<a href="###">京ICP证110457号</a>
				<a href="###">京ICP备11014893号</a>
				<a href="###">北京双立人网络科技有限公司</a>
				<a href="###">版权所有 Copyright © 2011</a>
				<a href="###">iCarZoo.com</a>
				<a href="###">All Rights Reserved</a>
			</div>
			<div class="a_zjp_aboutUs_linkLogo">
				<a href=""><img src="../../assets/car-footimage/330.png" alt="" /></a>
				<a href=""><img src="../../assets/car-footimage/331.png" alt="" /></a>
				<a href=""><img src="../../assets/car-footimage/332.png" alt="" /></a>
				<a href=""><img src="../../assets/car-footimage/328.png" alt="" /></a>
			</div>
			<div class="a_zjp_aboutUs_friendLink">
				<span>友情链接:</span>
				<a href="http://auto.qq.com/">腾讯汽车</a>
				<a href="http://auto.ifeng.com/">凤凰网汽车</a>
				<a href="https://www.msn.com/zh-tw/autos/">MSN汽车</a>
				<a href="http://www.touch-baby.cn/">北京团购网</a>
				<a href="https://hao.360.cn/">360网址导航</a>
				<a href="http://www.touch-baby.cn/">北京团购网</a>
				<a href="http://www.touch-baby.cn/">北京团购</a>
				<a href="https://www.duba.com/">金山导航</a>
				<a href="http://www.lvse.com/site/temi-com-cn-8940.html">特米购物</a>
				<a href="http://www.tuan800.com/">团购网站大全</a>
				<a href="https://www.114la.com/">114网址导航</a>
				<a href="https://www.114la.com/">114啦网址导航</a>
				<a href="http://www.tuan800.com/">团购大全</a>
			</div>
		</div>
	</div>
</template>
	
<script>
	export default{
		name:"mainfoot",
		data(){
			return{}
		}
	}
</script>

<style scoped>

div,a,span,dl,dt,dd{
	padding:0;
	margin:0;	
}
.a_zjp_footLine{
	height: 5px;
	width: 100%;
	background-color: #213f7b;
	margin-bottom: 11px;
}
.a_zjp_aboutUs{
	position: relative;
	width: 977px;
	margin: 0 auto;	
	text-align: center;
	/*background-color: lightblue;*/
	height: 338px;
}
.a_zjp_aboutUs dl:nth-child(1){
	margin-left: 71px;
}
.a_zjp_aboutUs dl{
		float:left;
		width: 137px;
		height: 128px;
		border-left: 1px solid grey;
}
.a_zjp_aboutUs dl dt{
	padding-top: 24px;
	padding-bottom: 8px;
	font-size: 14px;
	color: #3e4545;
}
.a_zjp_aboutUs dl dd{
	font-size: 12px;
	padding-bottom: 6px;
}
.a_zjp_aboutUs dl dd a{
	text-decoration: none;
	color: #3e4545;
}
.a_zjp_aboutUs dl dd a:hover{
	text-decoration: underline;
	color: #0083c8;
}
.a_zjp_aboutUs dl dd span{
	display: inline-block;
	width: 6px;
	height: 6px;
	margin-right: 7px;
	border: 1px solid #3e4545;
	transform: rotate(45deg);
}
/*关于我们的手机*/
.a_zjp_aboutUs_phone{
	width: 224px;
	height: 72px;
	background-color: #d1d1d1;
	border-radius: 10px;
	position: absolute;
	right: 67px;
	top: 35px;
}
.a_zjp_aboutUs_phone span:nth-child(1){
	font-size: 13px;
}
.a_zjp_aboutUs_phone span:nth-child(2){
	font-size: 20px;
	margin-top: 25px;
}
.a_zjp_aboutUs_phone span{
	display:block;
	line-height: 24px;
	position: absolute;
	left:18px;
	top: 13px;
}
.a_zjp_aboutUs_link{
	width: 100%;
	float: left;
	font-size: 12px;
	margin: 0 auto;
	margin-top: 28px;
}
.a_zjp_aboutUs_link a{
	margin-right: 10px;
	text-decoration: none;
	color: #6f6f6f;
}
.a_zjp_aboutUs_link a:hover{
	text-decoration: underline;
	color: #0083c8;
}
.a_zjp_aboutUs_linkLogo{
	width: 100%;
	margin: 0 auto;
	float: left;
	margin-top: 28px;
	font-size: 0;	
}
.a_zjp_aboutUs_linkLogo a{
	margin-right: 10px;
}
.a_zjp_aboutUs_friendLink{
	width: 912px;
	text-align: left;
	float: left;
	margin-left: 33px;
	margin-top: 28px;
	word-spacing: 12px;
	font-size: 0;
}
.a_zjp_aboutUs_friendLink a{	
	text-decoration: none;
	color: #6f6f6f;
	font-size: 12px;	
}
.a_zjp_aboutUs_friendLink span{
	color:#8d8e90;
	font-size: 12px;	
}
.a_zjp_aboutUs_friendLink a:hover{
	text-decoration: underline;
	color: #0083c8;
}
</style>
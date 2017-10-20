<template>
	<div class="g_cont_nav">
		<h4>全部商品分类</h4>
		<ul>
			<li v-for="item in con_navArr">
				<span class="g_dot"></span>{{item.name}}
				<span class="g_big"></span>
				<div class="g_li_cont">
					<dl v-for="s in item.cont">
						<dt>{{s.name_s}}</dt>
						<dd>
							<a href="###" v-for="i in s.cont_s">{{i}}</a>
						</dd>
					</dl>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import "../../assets/jquery-3.2.1.min.js"
	export default{
		name:"mainMenu",
		data(){
			return{
				
				con_navArr: [{name:"汽车美容", cont:[
							{name_s:"汽车清洗",cont_s:["洗车", "人工洗车", "洗车卡"]},
							{name_s:"车身美容",cont_s: ["打蜡", "封釉", "镀膜", "镀晶", "抛光"]},
							{name_s:"车内美容",cont_s:["内饰清洗", "空调清洗", "真皮座椅保养","高温消毒", "去味除甲醛"]},
							{name_s:"轮胎保养",cont_s:["轮毂上光", "轮毂镀膜", "轮毂清洗"]},
							{name_s:"整车美容",cont_s:["美容养护套餐"]},
							{name_s:"汽车配件",cont_s: ""}
						]
					},
					{
						name:"汽车装饰",cont:[
							{name_s:"汽车贴膜",cont_s:["贴膜", "内膜"]},
							{name_s:"运营商",cont_s:["购机送费", "0元购机", "选好上网"]},
							{name_s:"汽车喷漆",cont_s:["电池", "蓝牙耳机", "充电器/数据线", "手机耳机", "贴膜", "存储卡", "保护套", "车载", "IPone配件", "其他配件"]},
							{name_s:"汽车内饰",cont_s:["数码相机", "单点/微单相机", "打饭相机", "摄像机", "拍立得", "镜头"]},
							{name_s:"汽车底盘",cont_s:["MP3/MP4", "MID", "耳机/耳麦", "音箱", "高清播放器", "电子书", "电子词典", "MP3/MP4配件", "录音笔", "麦克风", "专业视频", "电子教育", "数码相框", "苹果配件"]}
						]
					},
					{
						name:"维修保养",cont: [
							{name_s:"汽车保养",cont_s:["发动机养护", "机油更换", "三滤更换", "安全监测"]},
							{name_s:"汽车维修",cont_s:["车身凹陷修复", "钣金喷漆", "玻璃修复", ]},
							{name_s:"汽车配件",cont_s:["机油滤", "空气滤", "空调滤", "燃油滤", "火花塞", "喇叭", "刹车片", "刹车盘", "减震器", "车身装饰", "尾喉/排气筒", "踏板", "蓄电池", "其他配件"]}
						]
					},
					{
						name:"汽车改装",cont: [
							{name_s:"车外改装",cont_s:["车身改色贴膜", "车灯改装", "更换大灯总成", "疝气大灯", "哑光漆", "轮毂改色"]},
							{name_s:"车内改装",cont_s:["音箱改装", "DVD导航一体机", "隔音"]}
						]
					},
					{
						name:"内饰用品",cont:[
							{name_s:"电子用品",cont_s:["编写GPS导航", "嵌入式导航", "安全预警仪", "行车记录仪", "跟踪防盗器", "倒车雷达", "车载电源", "车载蓝牙", "车载影音", "车载冰箱", "车载吸尘器", "充气泵", "胎压监测"]},
							{name_s:"美容用品",cont_s:["车用香水", "车用炭包", "空气净化", "颈枕/头枕", "抱枕/腰靠", "方向盘套", "挂件", "摆件", "布艺软饰", "功能用品", "整理收纳", "CD夹", "机油", "添加剂", "附属油", "防冻冷却液"]},
							{name_s:"安全用品",cont_s:["儿童安全座椅", "应急救援", "汽修工具", "自家照明", "车衣", "遮阳挡雪档", "车锁地锁", "置物箱", "自驾野营"]}
						]
					},
					{
						name:"外饰装潢",cont: [
							{name_s:"汽车培训",cont_s:["驾校报名", "汽车陪练"]}
						]
					},
					{
						name:"汽车配件",cont:[
							{name_s:"经典品牌",cont_s:["龙膜", "强生", "3M", "雷朋", "威固", "壳牌", "嘉实多", "普斯利通", "龟牌", "量子", "米其林"]},
							{name_s:"金牌商家",cont_s:["霍尼韦尔", "爱艺兴", "PIKA PIKA", "陆桥", "车友会", "庆红"]}
						]
					}
				]

			
			}
		}
}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	ul,li {list-style: none;}
	body {background: #e9e9e9;}
	.g_cont_nav {
		text-align: left;
		height: 261px;
		width: 179px;
		border: 2px solid #213f7b;
		background: #fafafa;
	}
	.g_cont_nav h4 {
		font-size: 16px;
		color: white;
		background: #213f7b;
		line-height: 35px;
		padding-bottom: 4px;
		text-indent: 20px;
	}
	.g_cont_nav ul li {
		padding-left: 9px;
		line-height: 32px;
		position: relative;
	}
	.g_cont_nav ul li:hover .g_li_cont{
		display: block;
	}
	.g_cont_nav .g_dot {
		display: inline-block;
		height: 3px;
		width: 3px;
		background: #213f7b;
		margin-right: 8px;
		vertical-align: middle;
	}
	.g_cont_nav .g_big {
		display: block;
		height: 7px;
		width: 7px;
		border-bottom: 2px solid #213f7b;
		border-right: 2px solid #213f7b;
		vertical-align: middle;
		transform: rotate(-45deg);
		position: absolute;
		bottom: 12px;
		left: 160px;
	}
	.g_cont_nav ul li:hover {
		color: #213f7b;
		text-decoration: underline;
		background: white;
	}
	li .g_li_cont {
		width: 461px;
		background: white;
		position: absolute;
		top: 10px;
		left: 177px;
		display: none;
		border: 1px solid #dddddd;
		padding: 0 15px 28px 8px;
	}
	.g_li_cont dl {
		line-height: 14px;
		font-size: 12px;
		padding-top: 13px;
		padding-bottom: 2px;
		border-top: 1px solid #eeeeee;
	}
	.g_li_cont dl:nth-child(1) {
		border: 0;
	}
	.g_li_cont dl dt {
		width: 56px;
		color: #2f5cb7;
		display: inline-block;
		text-align: right;
	}
	.g_li_cont dl dd {
		width: 400px;
		display: inline-block;
		vertical-align: top;
	}
	.g_li_cont dl dd:nth-child(1) {
		margin-left: 5px;
	}
	.g_li_cont dl dd a {
		display: inline-block;
		border-left: 1px solid #cccccc;
		padding-left: 8px;
		margin-left: 9px;
		margin-bottom: 8px;
		color: #666666;
		text-decoration: none;
	}
	.g_li_cont dl dd a:hover {
		text-decoration: underline;
	}
</style>
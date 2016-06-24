var g_Interval = 1;
var g_Timer;
var running = false;
function beginRndNum(trigger){
	if(running){
		running = false;
		clearTimeout(g_Timer);		
		$(trigger).val("开始");
		$('#ResultNum').css('color','#ffffff');
	}
	else{
		running = true;
		$('#ResultNum').css('color','#ffffff');
		$(trigger).val("停止");
		beginTimer();
	}
}

function updateRndNum(){
	var num = Math.floor(Math.random()*risk.length);
	$('#ResultNum').html(risk[num].text);
}

function beginTimer(){
	g_Timer = setTimeout(beat, g_Interval);
}

function beat() {
	g_Timer = setTimeout(beat, g_Interval);
	updateRndNum();
}

var risk=[
	{text:'扎个辫子在头顶，保持10分钟'},
	{text:'随便找个人表白3分钟'},
	{text:'吃下每个人为你夹得菜（如果是辣椒……）'},
	{text:'深情的吻墙10秒 '},
	{text:'侧抱互相喂酒、喂吃的'},
	{text:'一人先用嘴吸住一纸牌，另一人用嘴从另一面将纸牌吸住移走'},
	{text:'仰躺地上，另外一个人撑在上面，做五下俯卧撑； '},
	{text:'将一个人逼角落，用"调情式"一手撑墙，两人深情对视10秒'},
	{text:'对喝交杯酒'},
	{text:'面对大树或墙壁、大声地喊三声：“我爱你！'},
	{text:'就地闭眼睛，左转三圈，右转三圈，再睁开眼睛，走回自己的座位'},
	{text:'学模特走台步旋转一圈后走回来'},
	{text:'被罚者要亲吻指定的一个桌子5下'},
	{text:'背人蹲起'},
	{text:'坐在椅子上，脚放在桌子上，手碰地'},
	{text:'画花脸'},
	{text:'左手拉右耳，右手拉左耳，从桌子底下过'},
	{text:'你前任结婚了，你愿意参加她婚礼吗？'},
	{text:'你觉得你本人好看，还是照片好看？'},
	{text:'最喜欢在座哪位异性'},
	{text:'初吻是什么时候'},
	{text:'哭得最伤心的是哪一次？为什么？'},
	{text:'你最想要的5样东西'},
	{text:'对你而言，爱情和友情哪个比较重要？'},
	{text:'哭得最伤心的是哪一次？为什么？ '},
	{text:'在爱情和面包中，你会选择哪个？为什么？ '},
	{text:'找一个人，不用手，吃完pock，或者是咪咪'},
	{text:'上厕所后洗手么'},
	{text:'你最短的一次恋爱是多久'},
	{text:'当过第三者么，或者挖过墙角么？'},
	{text:'你的初吻年龄'},
	{text:'给手机里面第1一个异性打电话。说：其实.....我是....'},
	{text:'找个人深情拥抱5秒钟'},
]
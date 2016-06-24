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
	{text:'抓着铁门大喊,放我出去'},
	{text:'随便抓个人说，我怀了你的孩子'},
	{text:'找个同班的异性说，我没穿内裤，你能借我么'},
	{text:'像一位异性表白3分钟'},
	{text:'吃下每个人为你夹得菜（如果是辣椒……）'},
	{text:'深情的吻墙10秒 '},
	{text:'输的人，就地闭眼睛，左转三圈，右转三圈，再睁开眼睛，走回自己的座位'},
	{text:'侧抱互相喂酒、喂吃的'},
	{text:'一人先用嘴吸住一纸牌，另一人用嘴从另一面将纸牌吸住移走'},
	{text:'仰躺地上，男生撑在上面，做五下俯卧撑； '},
	{text:'男生将一个人逼角落，用"调情式"一手撑墙，两人深情对视10秒'},
	{text:'对喝交杯酒'},

]
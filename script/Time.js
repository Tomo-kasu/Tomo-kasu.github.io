window.onload = function(){
	clock();
}
function clock(){
	var realtime = new Date();
	var realhour = realtime.getHours();
	var realminutes = realtime.getMinutes();
	if(realminutes.length == 2){
		var clocktime = realhour + ":" + realminutes;
	}else{
		var clocktime = realhour + ":0" + realminutes;
	}
	document.getElementById("time").innerHTML = clocktime;
	setInterval('clock()',10);

}

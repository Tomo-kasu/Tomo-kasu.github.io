window.onload = function(){
	document.getElementById("loading").style.display = "none";
	clock();
}
function load_newtab(url){
	window.open(url);
}
function load_thistab(url){
	location.href = url;
	loading.style.display = "block";
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

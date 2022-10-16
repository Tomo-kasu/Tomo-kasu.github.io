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
	var clocktime = realhour + ":" + realminutes;
	document.getElementById("time").innerHTML = clocktime;
	setInterval('clock()',10);

}
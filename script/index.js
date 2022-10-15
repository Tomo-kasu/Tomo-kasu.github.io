window.onload = function(){
document.getElementById("loading").style.display ="none";
}
function load_newtab(url){
	window.open(url);
}
function load_thistab(url){
	location.href = url;
	loading.style.display = "block";
}

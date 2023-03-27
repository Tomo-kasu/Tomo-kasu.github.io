function loaded(){
	document.getElementById("loading").style.display = "none";
}
function load_newtab(url){
	window.open(url, '_blank');
}
function load_thistab(url){
	location.href = url;
	loading.style.display = "block";
}


window.onload = function(){
var userAgent = window.navigator.userAgent.toLowerCase();
var bi = document.getElementById("browser");
  
if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
    bi.src = "../Image/ie.png";
} else if(userAgent.indexOf('edge') != -1) {
    bi.src = "../Image/edge.png";
} else if(userAgent.indexOf('chrome') != -1) {
    bi.src = "../Image/chrome.png";
} else if(userAgent.indexOf('safari') != -1) {
    bi.src = "../Image/safari.png.png";
} else if(userAgent.indexOf('firefox') != -1) {
    bi.src = "../Image/firefox.png";
} else if(userAgent.indexOf('opera') != -1) {
    bi.src = "../Image/opera.png";
} else {
        bi.src = "../Image/chrome.png";

}
}

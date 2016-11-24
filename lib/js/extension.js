var duoshuoQuery = {short_name : "lonelyguo"};
var flag = true;
(function() {
	var ds = document.createElement("script");
	ds.type = "text/javascript";
	ds.async = true;
	ds.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//static.duoshuo.com/embed.js";
	ds.charset = "utf-8";
	(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(ds);
})();

function toggleDuoshuoComments(event,container){
	event.target.style.display = "none";
	document.getElementById("retract-comment-box").style.display = "block";
    var el = document.createElement("div");
    el.setAttribute("data-thread-key", "main");
    el.setAttribute("data-url", "https://lonelyguo.github.io/src/main.html");
    el.setAttribute("data-author-key", "lonelyguo");
    DUOSHUO.EmbedThread(el);
    document.getElementById(container).appendChild(el);
    if(flag) {flag=false;customizeDuoshuoStyle();}
}

function retractDuoshuoComments(event,container) {
	event.target.style.display = "none";
	document.getElementById("toggle-comment-box").style.display = "block";
	var el = document.getElementById(container);
	el.removeChild(el.childNodes[0]);
}

function customizeDuoshuoStyle() {
	var x = document.createElement("style");
    var t = document.createTextNode("#ds-thread #ds-reset li.ds-tab a.ds-current {background-color: white;border: none;}" + 
    		"#ds-thread #ds-reset .ds-replybox {z-index: 0;}" + 
    		"#ds-smilies-tooltip ul.ds-smilies-tabs {height: 140px;}" + 
    		"#ds-smilies-tooltip {z-index: 0;}" + 
    		"@media screen and (max-width:600px) {#ds-smilies-tooltip {width: 58%;}}");
    x.appendChild(t);
    document.head.appendChild(x);
}

function close_loader() {
    document.getElementsByClassName("loader")[0].style.display = "none";         
}
(function() {
	request('src/area_0.txt', 'area');
})();
if (window.addEventListener) {
	window.addEventListener("scroll", function() {render();});
	window.addEventListener("resize", function() {render();});
	window.addEventListener("touchmove", function() {render();});
	window.addEventListener("load", function() {render();});
} else if (window.attachEvent) {
	window.attachEvent("onscroll", function() {render();});
	window.attachEvent("onresize", function() {render();});
	window.attachEvent("ontouchmove", function() {render();});
	window.attachEvent("onload", function() {render();});
}
function render() {
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var top = scrolltop();
	if (width < 993 && width > 600) {
		if (top > 100) {
			document.getElementById("main").style.paddingTop = "44px";
			document.getElementById("menu").style.position = "fixed";
			document.getElementById("menu").style.top = "0";
		} else {
			document.getElementById("main").style.paddingTop = "0";
			document.getElementById("menu").style.position = "relative";
		}
	} else {
		if (top > 66) {
			document.getElementById("main").style.paddingTop = "44px";
			document.getElementById("menu").style.position = "fixed";
			document.getElementById("menu").style.top = "0";
		} else {
			document.getElementById("main").style.paddingTop = "0";
			document.getElementById("menu").style.position = "relative";
		}
	}
}
function scrolltop() {
	var top = 0;
	if (typeof (window.pageYOffset) == "number") {
		top = window.pageYOffset;
	} else if (document.body && document.body.scrollTop) {
		top = document.body.scrollTop;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		top = document.documentElement.scrollTop;
	}
	return top;
}

function request(url, id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id).innerHTML = this.responseText;
            if(this.responseText.indexOf("<script>") >= 0 && this.responseText.indexOf("</script>") >= 0) {
            	eval(this.responseText.substring(this.responseText.indexOf("<script>") + 8, this.responseText.indexOf("</script>")));
            }
        } else {
        	document.getElementById(id).innerHTML = "";
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}
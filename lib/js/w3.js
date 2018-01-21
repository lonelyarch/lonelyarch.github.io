var SEC = 0;
var IDX = 0;
var NUM = 0;
(function() {
	document.getElementById("navigate").style.display = "none";
	var i = 0;
	request('src/area_' + i + '/area_' + i + '.css', 'myst');
	request('src/area_' + i + '/area_' + i + '.txt', 'contents');
	var menu_l = document.getElementById("menu-large");
	for(var i=0; i<menu_l.children.length; i++) {
		(function(i) {
			menu_l.children[i].addEventListener("click", function() {
				request('src/area_' + i + '/area_' + i + '.css', 'myst');
				if(i > 1) {
					SEC = i;
					document.getElementById("prevtonext").style.display = "none";
					document.getElementById("archives").style.display = "none";
					document.getElementById("contents").style.display = "block";
					document.getElementById("navigate").style.display = "block";
					document.getElementById("pagination").style.display = "block";
					request('src/area_' + i + '/area_' + i + '_0.txt', 'contents');
				} else {
					request('src/area_' + i + '/area_' + i + '.txt', 'contents');
				}
			});
		})(i);
	}
	var menu_s = document.getElementById("menu-small");
	for(var i=0; i<menu_s.children.length; i++) {
		(function(i) {
			menu_s.children[i].addEventListener("click", function() {
				var x = document.getElementById("menu-small");
				if (x.className === "w3-menu-small" && i != 0) {
					x.className += " responsive";
				} else {
					x.className = "w3-menu-small";
				}
				if(i < 4) {
					request('src/area_' + i + '/area_' + i + '.css', 'myst');
					if(i > 1) {
						SEC = i;
						document.getElementById("prevtonext").style.display = "none";
						document.getElementById("archives").style.display = "none";
						document.getElementById("contents").style.display = "block";
						document.getElementById("navigate").style.display = "block";
						document.getElementById("pagination").style.display = "block";
						request('src/area_' + i + '/area_' + i + '_0.txt', 'contents');
					} else {
						request('src/area_' + i + '/area_' + i + '.txt', 'contents');
					}
				}
			});
		})(i);
	}
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

function fetch(obj) {
	if((typeof obj) === "object") {
        if(Object.prototype.toString.call(obj) === "[object Array]") {
            for(var i=0; i<obj.length; i++) {
                if(obj[i].url === undefined || obj[i].id === undefined) continue;
                request(obj[i].url, obj[i].id);
            }
        }
    }
	document.documentElement.scrollTop = 0;
}

function file() {
    document.getElementById("overview").style.display = "none";
    document.getElementById("contents").style.display = "none";
    document.getElementById("navigate").style.display = "none";
    request("src/area_" + SEC + "/arch.txt", "archives");
    document.getElementById("archives").style.display = "block";
}

function initl() {
	document.getElementById("pagination").style.display = "none";
    document.getElementById("archives").style.display = "none";
    document.getElementById("overview").style.display = "none";
    document.getElementById("contents").style.display = "block";
    document.getElementById("navigate").style.display = "block";
    document.getElementById("prevtonext").style.display = "block";
}
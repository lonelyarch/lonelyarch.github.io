function w3_open_nav(x) {
    search_close();
    w3_close();
    document.getElementById("nav_" + x).getElementsByTagName("span")[0].style.display = "block";
    if (document.getElementById("nav_" + x).style.display == "block") {
        w3_close_nav(x);
    } else {
        w3_close_all_nav();
        document.getElementById("nav_" + x).style.display = "block";
        if (document.getElementById("topnavbtn_" + x)) {
            document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[0].style.display = "none";
            document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[1].style.display = "inline";
        }
    }
}

function w3_close_nav(x) {
    document.getElementById("nav_" + x).style.display = "none";
    if (document.getElementById("topnavbtn_" + x)) {
        document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[0].style.display = "inline";
        document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[1].style.display = "none";
    }
}

function w3_close_all_nav() {
    w3_close_nav("life");
    w3_close_nav("career");
    w3_close_nav("myself");
}

(function() {
    var x, i, m;
    m = document.getElementById("sidenav");
    x = m.getElementsByTagName("a");
    i;
    for (i = 0; i < x.length; i++) {
        if (document.location.href.indexOf(x[i].href) >= 0) {
            x[i].className = "active";
        }
    }
})();

if (window.addEventListener) {
    window.addEventListener("scroll", function() {
        fix_sidemenu();
    });
} else if (window.attachEvent) {
    window.attachEvent("onscroll", function() {
        fix_sidemenu();
    });
}

function fix_sidemenu() {
    var w, top;
    w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    top = scrolltop();
    if (w < 993 && w > 600) {
        if (top == 0) {
            document.getElementById("sidenav").style.top = "112px";
            document.getElementById("searcharticles").style.top = "112px";
        }
        if (top > 0 && top < 100) {
            document.getElementById("sidenav").style.top = (144 - top) + "px";
            document.getElementById("searcharticles").style.top = (144 - top) + "px";
        }
        if (top > 100) {
            document.getElementById("sidenav").style.top = document.getElementById("topnav").offsetHeight + "px";
            document.getElementById("searcharticles").style.top = document.getElementById("topnav").offsetHeight + "px";
            document.getElementById("belowtopnav").style.paddingTop = "44px";
            document.getElementById("topnav").style.position = "fixed";
            document.getElementById("topnav").style.top = "0";
        } else {
            document.getElementById("belowtopnav").style.paddingTop = "0";
            document.getElementById("topnav").style.position = "relative";
        }
        document.getElementById("leftmenuinner").style.paddingTop = "0"; // SCROLLNYTT
    } else {
        if (top == 0) {
            document.getElementById("sidenav").style.top = "112px";
            document.getElementById("searcharticles").style.top = "112px";
        }
        if (top > 0 && top < 66) {
            document.getElementById("sidenav").style.top = (112 - top) + "px";
            document.getElementById("searcharticles").style.top = (112 - top) + "px";
        }
        if (top > 66) {
            document.getElementById("sidenav").style.top = "44px";
            document.getElementById("searcharticles").style.top = "44px";
            if (w > 992) {
                document.getElementById("leftmenuinner").style.paddingTop = "44px";
            } // SCROLLNYTT
            document.getElementById("belowtopnav").style.paddingTop = "44px";
            document.getElementById("topnav").style.position = "fixed";
            document.getElementById("topnav").style.top = "0";
        } else {
            if (w > 992) {
                document.getElementById("leftmenuinner").style.paddingTop = (112 - top) + "px";
            } // SCROLLNYTT
            document.getElementById("belowtopnav").style.paddingTop = "0";
            document.getElementById("topnav").style.position = "relative";
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

function search_open(event) {
    w3_close_all_nav();
    w3_close();
    event.target.className.indexOf("fa-search") == -1 ? event.target.className = event.target.className.replace(" fa-times", " fa-search") : event.target.className = event.target.className.replace(" fa-search", " fa-times");
    if(document.getElementById("topnav").style.position == "fixed") {
        document.getElementById("searcharticles").style.top = "44px";
    } else {
        document.getElementById("searcharticles").style.top = "112px";
    }
    var x = document.getElementById("searcharticles");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function search_filter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchinput");
    filter = input.value.toUpperCase();
    div = document.getElementById("searcharticles");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function search_close() {
    var x = document.getElementById("searcharticles");
    x.className = x.className.replace(" w3-show", "");
}

function w3_open() {
    w3_close_all_nav();
    search_close();
    var x = document.getElementById("myAccordion");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function w3_close() {
    document.getElementById("myAccordion").style.display = "none";
    close_all_xs_menu();
}

function open_xs_menu(event, x) {
    document.getElementById("nav_" + x).getElementsByTagName("span")[0].style.display = "none";
    var e = event.target.children.length == 0 ? event.target.parentElement : event.target;
    if (document.getElementById("sectionxs_" + x).innerHTML == "") {
    	e.getElementsByTagName("i")[0].style.display = "none";
    	e.getElementsByTagName("i")[1].style.display = "inline";
        document.getElementById("sectionxs_" + x).innerHTML = document.getElementById("nav_" + x).innerHTML;
    } else {
    	e.getElementsByTagName("i")[0].style.display = "inline";
    	e.getElementsByTagName("i")[1].style.display = "none";
        document.getElementById("sectionxs_" + x).innerHTML = "";
    }
}

function close_all_xs_menu() {
	close_xs_menu("life");
	close_xs_menu("career");
	close_xs_menu("myself");
	var e = document.getElementById("myAccordion");
	var y = e.getElementsByTagName("div")[0].getElementsByTagName("a");
	for(var i=0; i<y.length; i++) {
		y[i].getElementsByTagName("i")[0].style.display = "inline";
		y[i].getElementsByTagName("i")[1].style.display = "none";
	}
}

function close_xs_menu(x) {
	document.getElementById("sectionxs_" + x).innerHTML = "";
}

function select_item(idx, url) {
	modal_close();
	w3_close();
	close_all_xs_menu();
	request("main", url);
	display_sidenav_item(idx);
}

function display_sidenav_item(idx) {
	var c = document.getElementsByClassName("sidenav-content");
	var len = c.length;
    if(!c || (len == 0)) {return;}
    var x = document.getElementById("topnav").getElementsByTagName("ul");
    var y = x[0].getElementsByTagName("a");
    for(var i=0; i<len; i++) {
    	c[i].style.display = "none";
    	y[i+2].className = "w3-hide-small";
	}
    c[idx].style.display = "block";
    y[idx+2].className = "active";
}

function request(id, url, async) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id).innerHTML = this.responseText;
        } else {
        	document.getElementById(id).innerHTML = "";
        }
    }
    xhttp.open("GET", url, async == undefined ? true : async);
    xhttp.send();
}

function modal_open(event, idx0, idx1) {
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if(w < 993) {
		var m = document.getElementById("myModal");
		m.style.display="block";
		m.children[0].children[0].children[1].innerHTML = document.getElementsByClassName("section_" + idx0)[idx1].children[0].innerHTML;
		m.children[0].children[1].innerHTML = document.getElementsByClassName("section_" + idx0)[idx1].children[1].innerHTML;
	} else {
		display_sidenav_item(idx0);
		var s = document.getElementsByClassName("section_" + idx0);
		for(var i=0; i<s.length; i++) {
			s[i].style.display = "none";
		}
		s[idx1].style.display = "block";
		request("main", "src/articles/initial/" + idx0 + ".txt");
	}
	w3_close_all_nav();
}

function modal_close() {
	document.getElementById("myModal").style.display="none";
}

(function() {
    var c = document.getElementsByClassName("sidenav-content");
    if(!c || (c.length == 0)) {return;}
    c[0].style.display = "block";

    var x = document.getElementById("topnav").getElementsByTagName("ul");
    var y = x[0].getElementsByTagName("a");
    y[2].className = "active";

    var len = c.length;
    for(var i=0; i<len; i++) {
        y[i+2].addEventListener("click", function() {
            w3_close();
            w3_close_all_nav();
            search_close();
            for(var j=0; j<len; j++) {
                y[j+2].className = "w3-hide-small";
                c[j].style.display = "none";
                var s = document.getElementsByClassName("section_" + j);
                if(s.length > 0) {
                	for(var k=0; k<s.length; k++) {
                		s[k].style.display = "block";
                	}
                }
            }
            this.className = "active";
            for(var j=0; j<len; j++) {
                if(y[j+2].className === "active") {
                	c[j].style.display = "block";
                	request("main", "src/articles/initial/" + j + ".txt");
                }
            }
        });
    }
})();
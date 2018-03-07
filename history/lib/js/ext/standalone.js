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

function clear(id) {
	document.getElementById(id).innerHTML = "";
}
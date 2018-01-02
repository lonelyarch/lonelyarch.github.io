(function() {
	var d = document, s = d.createElement('script');
	s.src = 'https://https-lonelyguo-github-io.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	s.async = true;
	(d.head || d.body).appendChild(s);
})();

function close_loader() {
	document.getElementsByClassName("loader")[0].style.display = "none";
}

function link2page(txt) {
	var base = "src/tryit_editor_v1.0.html";
	window.open(encodeURI(base + "?" + "src/articles/" + txt));
}
(function() {
	var d = document, s = d.createElement('script');
	s.src = 'https://https-lonelyguo-github-io.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	var head = document.getElementsByTagName('head')[0];
	var body = document.getElementsByTagName('body')[0];
	(head || body).appendChild(s);
})();

function close_loader() {
	document.getElementsByClassName("loader")[0].style.display = "none";
}

function link2page(txt) {
	var base = "src/tryit_editor_v1.0.html";
	window.open(encodeURI(base + "?" + "src/articles/" + txt));
}
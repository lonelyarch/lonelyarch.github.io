function close_loader() {
	document.getElementsByClassName("loader")[0].style.display = "none";
}

function link2page(txt) {
	var base = "src/tryit_editor_v1.0.html";
	window.open(encodeURI(base + "?" + "src/articles/" + txt));
}

function comment(x,y) {
	var gitment = new Gitment({
		id: x,
		owner: 'lonelyguo',
		repo: 'comments',
		oauth: {
			client_id: '324936ebfe4544fd43e7',
			client_secret: '6dc6a31524a098de996e40b70c6c8ec6f4c68584'
		}
	});
	gitment.render(y);
}
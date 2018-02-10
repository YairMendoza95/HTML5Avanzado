window.addEventListener('load', init);

var ctx, canvas, x = 0, y = 0, v_x = 10, v_y = 10;

window.requestAnimationFrame = (function () {
	return window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function (f) {
		window.setTimeout(f, 1000 / 60);
	}
})();

function init () {
	canvas = document.getElementById('marco');
	ctx = canvas.getContext('2d');
	draw();
}

function draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.beginPath();
	ctx.arc(x, y, 50, 0, 10);
	ctx.closePath();
	ctx.fill();
	x += v_x;
	y += v_y;

	// Rebote 
	if(x < 5 || x > canvas.width - 5) v_x = -v_x;
	if(y < 5 || y > canvas.height - 5) v_y = -v_y;
	requestAnimationFrame(draw);
}

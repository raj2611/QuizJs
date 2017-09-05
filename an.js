
function move2() {
	var r = document.getElementById("b");
	var poss = 0;
	var id2 = setInterval(fadee,7);
	function fadee() {
		if (poss == 800) {
			clearInterval(id2);
		} else {
			poss++;

			r.style.bottom = poss + 'px';
		}

	}
}

function move() {
	var p = document.getElementById("a");
	var pos = 0;
	var id = setInterval(fade,7);
	function fade() {
		if (pos == 800) {
			clearInterval(id);
		} else {
			pos++;
			p.style.right = pos + 'px';
		}

	}
}

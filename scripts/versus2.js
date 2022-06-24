var fileUrl = "output/singles.xml";
var upSpeed = 1750;
var inSpeed = 1000;
var outSpeed = 500;

var p1, p2, s1, s2, mm, gg;

$(function() {
	checkUpdate();
	setInterval(function() { checkUpdate(); }, upSpeed);
});

function getResponse() {
	p1b = getElement(responseXml, "player1A");
	p2b = getElement(responseXml, "player2A");
	p1a = getElement(responseXml, "player1B");
	p2a = getElement(responseXml, "player2B");
	p1c = getElement(responseXml, "image1");
	p2c = getElement(responseXml, "image2");
	s1 = getElement(responseXml, "score1");
	s2 = getElement(responseXml, "score2");
	mm = getElement(responseXml, "matchA");
	gg = getElement(responseXml, "gameA");
}

function runUpdate() {
	if (timeOld == timeNew) return;

	if ($('#mm').get("innerHTML") != mm) {
		updating = true;
		$('.top').animate({$top: '-175px'}, outSpeed).then(function() {
			$('#mm').set("innerHTML", mm);
			$('.top').animate({$top: '0'}, inSpeed).then(function() { updating = false; });
		});
	}

	// if ($('#p1a').get("innerHTML") != p1a || $('#p2a').get("innerHTML") != p2a ||
	// 		$('#p2a').get("innerHTML") != p2a || $('#p2b').get("innerHTML") != p2b) {
	// 	updating = true;
	// 	$('.players').animate({$top: '-175px'}, outSpeed).then(function() {
	// 		$('#p1a').set("innerHTML", p1a);
	// 		$('#p2a').set("innerHTML", p2a);
	// 		$('#p1b').set("innerHTML", p1b);
	// 		$('#p2b').set("innerHTML", p2b);
	// 		$('.players').animate({$top: '0'}, inSpeed).then(function() { updating = false; });
	// 	});
	// }

	if ($('#p1a').get("innerHTML") != p1a || $('#p1b').get("innerHTML") != p1b ||
		  $('#p1c').get("innerHTML") != p1c) {
		updating = true;
		$('.p1bg').animate({$top: '-175px'}, outSpeed).then(function() {
			$('#p1a').set("innerHTML", p1a);
			$('#p1b').set("innerHTML", p1b);
			$('#p1c').set("innerHTML", p1c);
			document.getElementById('p1char').src = "output/singles/image1.png?random="+new Date().getTime();
			$('.p1bg').animate({$top: '0'}, inSpeed).then(function() { updating = false; });
		});
	}

	if ($('#p2a').get("innerHTML") != p2a || $('#p2b').get("innerHTML") != p2b ||
		  $('#p2c').get("innerHTML") != p2c) {
		updating = true;
		$('.p2bg').animate({$top: '-175px'}, outSpeed).then(function() {
			$('#p2a').set("innerHTML", p2a);
			$('#p2b').set("innerHTML", p2b);
			$('#p2c').set("innerHTML", p2c);
			document.getElementById('p2char').src = "output/singles/image2.png?random="+new Date().getTime();
			// $(".p2char").prop("src", "output/singles/image2.png?" + new Date().valueOf());
			$('.p2bg').animate({$top: '0'}, inSpeed).then(function() { updating = false; });
		});
	}

	// if ($('#s1').get("innerHTML") != s1 || $('#s2').get("innerHTML") != s2) {
	// 	updating = true;
	// 	$('.scores').animate({$top: '-175px'}, outSpeed).then(function() {
	// 		$('#s1').set("innerHTML", s1);
	// 		$('#s2').set("innerHTML", s2);
	// 		$('.scores').animate({$top: '0'}, inSpeed).then(function() { updating = false; });
	// 	});
	// }

	if ($('#s1').get("innerHTML") != s1) {
		updating = true;
		$('.s1bg').animate({$top: '-175px'}, outSpeed).then(function() {
			$('#s1').set("innerHTML", s1);
			$('.s1bg').animate({$top: '0'}, inSpeed).then(function() { updating = false; });
		});
	}

	if ($('#s2').get("innerHTML") != s2) {
		updating = true;
		$('.s2bg').animate({$top: '-175px'}, outSpeed).then(function() {
			$('#s2').set("innerHTML", s2);
			$('.s2bg').animate({$top: '0'}, inSpeed).then(function() { updating = false; });
		});
	}

	if ($('#gg').get("innerHTML") != gg) {
		updating = true;
		$('.btm').animate({$bottom: '-175px'}, outSpeed).then(function() {
			$('#gg').set("innerHTML", gg);
			$('.btm').animate({$bottom: '0'}, inSpeed).then(function() { updating = false; });
		});
	}
}

//Pelaajan kasi
function nostakortti() {
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	summa = summa + kortit[kortti][1];
	kortti++;
	if (kortti == 3) {
		document.getElementById("p3").style.visibility = "visible";
		if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
			document.getElementById("p3").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("p3").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		}
	}
	if (summa > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "</div>" + "</div>";
	} else if (summa == 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "</div>" + "</div>";
	}
	if (kortti == 4) {
		document.getElementById("p4").style.visibility = "visible";
		if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
			document.getElementById("p4").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("p4").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		}
	}
	if (summa > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "</div>" + "</div>";
	} else if (summa == 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "</div>" + "</div>";
	}
	if (kortti == 5) {
		document.getElementById("p5").style.visibility = "visible";
		if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
			document.getElementById("p5").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("p5").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		}
	}
	if (summa > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "</div>" + "</div>";
	} else if (summa == 21 || kortti == 5) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "</div>" + "</div>";
	}
}
//Jakajan käsi
function jaa() {
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	var jkortti = 1;
	document.getElementById("j1").style.backgroundImage ="none";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j1").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	} else {
		document.getElementById("j1").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	}
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 >= summa) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "</div>" + "</div>";
		return;
	}
	kortti++;
	jkortti++;
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	document.getElementById("j2").style.visibility = "visible";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j2").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	} else {
		document.getElementById("j2").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	}
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja hävisi" + "</div>" + "</div>";
		return;
	} else if (summa1 == 21 || summa1 >= summa) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "</div>" + "</div>";
		return;
	}
	kortti++;
	jkortti++;
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	document.getElementById("j3").style.visibility = "visible";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j3").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	} else {
		document.getElementById("j3").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	}
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja hävisi" + "</div>" + "</div>";
		return;
	} else if (summa1 == 21 || summa1 >= summa) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "</div>" + "</div>";
		return;
	}
	kortti++;
	jkortti++;
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	document.getElementById("j4").style.visibility = "visible";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j4").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	} else {
		document.getElementById("j4").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	}
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja hävisi" + "</div>" + "</div>";
		return;
	} else if (summa1 == 21 || summa1 >= summa) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "</div>" + "</div>";
		return;
	}
	kortti++;
	jkortti++;
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	document.getElementById("j5").style.visibility = "visible";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j5").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	} else {
		document.getElementById("j5").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	}
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja hävisi" + "</div>" + "</div>";
		return;
	} else if (summa1 == 21 || summa1 >= summa || jkortti == 5) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "</div>" + "</div>";
		return;
	}
}
// Korttipakan luonti ja sekoitus ja kaksi korttia pelaajalle
var maa = '';
var kortit = [];
for (var y = 0; y < 4; y++) {
	if (y == 0) {
		maa = "&clubs;";
	}
	if (y == 1) {
		maa = "&hearts;";
	}
	if (y == 2) {
		maa = "&diams;";
	}
	if (y == 3) {
		maa = "&spades;";
	}
	for (var x = 0; x < 13; x++) {
		kortit.push([
			maa,
			x + 1
		])
	}
};
kortit.sort(function (a, b) { return 0.5 - Math.random() });
var summa1 = 0;
var kortti = 0;
var arvo = kortit[kortti][1];
var maakoodi = kortit[kortti][0];
var summa = kortit[kortti][1];
kortti++;
if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
	document.getElementById("p1").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
} else {
	document.getElementById("p1").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
}
arvo = kortit[kortti][1];
maakoodi = kortit[kortti][0];
summa = summa + kortit[kortti][1];
kortti++;
if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
	document.getElementById("p2").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit-spades-top'>" + maakoodi + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-spades-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
} else {
	document.getElementById("p2").innerHTML = "<div class='value-top'>" + arvo  + "</div><div class='suit-hearts-top'>" + maakoodi + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-hearts-bottom'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
}
if (summa > 21) {
	document.getElementById("loppu").innerHTML = "<div id='overlay'  >" + "<div id='gameover'>" + "Hävisit" + "</div>" + "</div>";
} else if (summa == 21) {
	document.getElementById("loppu").innerHTML = "<div id='overlay'  >" + "<div id='gameover'>" + "Voitit" + "</div>" + "</div>";
}



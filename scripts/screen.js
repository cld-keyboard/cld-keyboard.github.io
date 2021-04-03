var display = document.getElementById("display-text");
var empty = true;
var caps = true;
var length = 0;

function changeDisplay(x){
	

	if (empty == true){
		display.innerHTML = x;
		length++;
		empty = false;
	}
	else {
		if(caps == false){
			if(x == '1'){
				display.append('!');
			}
			else if (x == '2'){
				display.append('@');
			}
			else if (x == '3'){
				display.append('#');
			}
			else if (x == '4'){
				display.append('$');
			}
			else if (x == '5'){
				display.append('%');
			}
			else if (x == '6'){
				display.append('^');
			}
			else if (x == '7'){
				display.append('#');
			}
			else if (x == '8'){
				display.append('*');
			}
			else if (x == '9'){
				display.append('(');
			}
			else if (x == '0'){
				display.append(')');
			}
			else {
				x = x.toString().toLowerCase();
				display.append(x);
			}
			
		}
		else {
			display.append(x);
		}	
	}
}

function backspace(){
	let str = display.innerHTML.toString();
	str = str.slice(0,-1);
	empty = true;
	changeDisplay(str);
}

function shift(){
	capsLock();	
}

function capsLock(){
	//caps on till pressed again
	if (caps === true){
		caps = false;
		document.getElementById("1").src = `assets/EXC.png`;
		document.getElementById("2").src = `assets/@.png`;
		document.getElementById("3").src = `assets/hash.png`;
		document.getElementById("4").src = `assets/$.png`;
		document.getElementById("5").src = `assets/%.png`;
		document.getElementById("6").src = `assets/^.png`;
		document.getElementById("7").src = `assets/&.png`;
		document.getElementById("8").src = `assets/ast.png`;
		document.getElementById("9").src = `assets/(.png`;
		document.getElementById("0").src = `assets/).png`;

		document.getElementById("Q").src = `assets/q2.png`;
		document.getElementById("W").src = `assets/w2.png`;
		document.getElementById("E").src = `assets/e2.png`;
		document.getElementById("R").src = `assets/r2.png`;
		document.getElementById("T").src = `assets/t2.png`;
		document.getElementById("Y").src = `assets/y2.png`;
		document.getElementById("U").src = `assets/u2.png`;
		document.getElementById("I").src = `assets/i2.png`;
		document.getElementById("O").src = `assets/o2.png`;
		document.getElementById("P").src = `assets/p2.png`;

		document.getElementById("A").src = `assets/a2.png`;
		document.getElementById("S").src = `assets/s2.png`;
		document.getElementById("D").src = `assets/d2.png`;
		document.getElementById("F").src = `assets/f2.png`;
		document.getElementById("G").src = `assets/g2.png`;
		document.getElementById("H").src = `assets/h2.png`;
		document.getElementById("J").src = `assets/j2.png`;
		document.getElementById("K").src = `assets/k2.png`;
		document.getElementById("L").src = `assets/l2.png`;

		document.getElementById("Z").src = `assets/z2.png`;
		document.getElementById("X").src = `assets/x2.png`;
		document.getElementById("C").src = `assets/c2.png`;
		document.getElementById("V").src = `assets/v2.png`;
		document.getElementById("B").src = `assets/b2.png`;
		document.getElementById("N").src = `assets/n2.png`;
		document.getElementById("M").src = `assets/m2.png`;
		console.log('caps off');
	}
	else {
		caps = true;
		document.getElementById("1").src = `assets/1.png`;
		document.getElementById("2").src = `assets/2.png`;
		document.getElementById("3").src = `assets/3.png`;
		document.getElementById("4").src = `assets/4.png`;
		document.getElementById("5").src = `assets/5.png`;
		document.getElementById("6").src = `assets/6.png`;
		document.getElementById("7").src = `assets/7.png`;
		document.getElementById("8").src = `assets/8.png`;
		document.getElementById("9").src = `assets/9.png`;
		document.getElementById("0").src = `assets/0.png`;

		document.getElementById("Q").src = `assets/Q.png`;
		document.getElementById("W").src = `assets/W.png`;
		document.getElementById("E").src = `assets/E.png`;
		document.getElementById("R").src = `assets/R.png`;
		document.getElementById("T").src = `assets/T.png`;
		document.getElementById("Y").src = `assets/Y.png`;
		document.getElementById("U").src = `assets/U.png`;
		document.getElementById("I").src = `assets/I.png`;
		document.getElementById("O").src = `assets/O.png`;
		document.getElementById("P").src = `assets/P.png`;

		document.getElementById("A").src = `assets/A.png`;
		document.getElementById("S").src = `assets/S.png`;
		document.getElementById("D").src = `assets/D.png`;
		document.getElementById("F").src = `assets/F.png`;
		document.getElementById("G").src = `assets/G.png`;
		document.getElementById("H").src = `assets/H.png`;
		document.getElementById("J").src = `assets/J.png`;
		document.getElementById("K").src = `assets/K.png`;
		document.getElementById("L").src = `assets/L.png`;

		document.getElementById("Z").src = `assets/Z.png`;
		document.getElementById("X").src = `assets/X.png`;
		document.getElementById("C").src = `assets/C.png`;
		document.getElementById("V").src = `assets/V.png`;
		document.getElementById("B").src = `assets/B.png`;
		document.getElementById("N").src = `assets/N.png`;
		document.getElementById("M").src = `assets/M.png`;
		console.log('caps on');
	}
}

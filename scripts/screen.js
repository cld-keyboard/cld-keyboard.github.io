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
		document.getElementById("1").src = `assets/exc.png`;
		document.getElementById("2").src = `assets/@.png`;
		document.getElementById("3").src = `assets/hash.png`;
		document.getElementById("4").src = `assets/$.png`;
		document.getElementById("5").src = `assets/%.png`;
		document.getElementById("6").src = `assets/^.png`;
		document.getElementById("7").src = `assets/&.png`;
		document.getElementById("8").src = `assets/ast.png`;
		document.getElementById("9").src = `assets/(.png`;
		document.getElementById("0").src = `assets/).png`;

		document.getElementById("Q").src = `assets/Q2.png`;
		document.getElementById("W").src = `assets/W2.png`;
		document.getElementById("E").src = `assets/E2.png`;
		document.getElementById("R").src = `assets/R2.png`;
		document.getElementById("T").src = `assets/T2.png`;
		document.getElementById("Y").src = `assets/Y2.png`;
		document.getElementById("U").src = `assets/U2.png`;
		document.getElementById("I").src = `assets/I2.png`;
		document.getElementById("O").src = `assets/O2.png`;
		document.getElementById("P").src = `assets/P2.png`;

		document.getElementById("A").src = `assets/A2.png`;
		document.getElementById("S").src = `assets/S2.png`;
		document.getElementById("D").src = `assets/D2.png`;
		document.getElementById("F").src = `assets/F2.png`;
		document.getElementById("G").src = `assets/G2.png`;
		document.getElementById("H").src = `assets/H2.png`;
		document.getElementById("J").src = `assets/J2.png`;
		document.getElementById("K").src = `assets/K2.png`;
		document.getElementById("L").src = `assets/L2.png`;

		document.getElementById("Z").src = `assets/Z2.png`;
		document.getElementById("X").src = `assets/X2.png`;
		document.getElementById("C").src = `assets/C2.png`;
		document.getElementById("V").src = `assets/V2.png`;
		document.getElementById("B").src = `assets/B2.png`;
		document.getElementById("N").src = `assets/N2.png`;
		document.getElementById("M").src = `assets/M2.png`;
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

initControllers();

function initControllers(){
	const button9 = document.getElementById("9");
	const button8 = document.getElementById("8");
	const button7 = document.getElementById("7");
	const button6 = document.getElementById("6");
	const button5 = document.getElementById("5");
	const button4 = document.getElementById("4");
	const button3 = document.getElementById("3");
	const button2 = document.getElementById("2");
	const button1 = document.getElementById("1");
	const button0 = document.getElementById("0");

	const buttonQ = document.getElementById("Q");
	const buttonW = document.getElementById("W");
	const buttonE = document.getElementById("E");
	const buttonR = document.getElementById("R");
	const buttonT = document.getElementById("T");
	const buttonY = document.getElementById("Y");
	const buttonU = document.getElementById("U");
	const buttonI = document.getElementById("I");
	const buttonO = document.getElementById("O");
	const buttonP = document.getElementById("P");
	const buttonBACK = document.getElementById("back");

	const buttonCAPS = document.getElementById("caps");
	const buttonA = document.getElementById("A");
	const buttonS = document.getElementById("S");
	const buttonD = document.getElementById("D");
	const buttonF = document.getElementById("F");
	const buttonG = document.getElementById("G");
	const buttonH = document.getElementById("H");
	const buttonJ = document.getElementById("J");
	const buttonK = document.getElementById("K");
	const buttonL = document.getElementById("L");

	const buttonSHIFT = document.getElementById("shift");
	const buttonZ = document.getElementById("Z");
	const buttonX = document.getElementById("X");
	const buttonC = document.getElementById("C");
	const buttonV = document.getElementById("V");
	const buttonB = document.getElementById("B");
	const buttonN = document.getElementById("N");
	const buttonM = document.getElementById("M");
	const buttonCom = document.getElementById(",");
	const buttonDot = document.getElementById(".");
	const buttonQuest = document.getElementById("?");

	const buttonSpace = document.getElementById("space");

	///////////////////

	button9.addEventListener("click", () => changeDisplay('9'));
	button8.addEventListener("click", () => changeDisplay('8'));
	button7.addEventListener("click", () => changeDisplay('7')); 
	button6.addEventListener("click", () => changeDisplay('6')); 
	button5.addEventListener("click", () => changeDisplay('5')); 
	button4.addEventListener("click", () => changeDisplay('4'));
	button3.addEventListener("click", () => changeDisplay('3')); 
	button2.addEventListener("click", () => changeDisplay('2')); 
	button1.addEventListener("click", () => changeDisplay('1')); 
	button0.addEventListener("click", () => changeDisplay('0')); 

	buttonQ.addEventListener("click", () => changeDisplay('Q'));
	buttonW.addEventListener("click", () => changeDisplay('W'));
	buttonE.addEventListener("click", () => changeDisplay('E'));
	buttonR.addEventListener("click", () => changeDisplay('R'));
	buttonT.addEventListener("click", () => changeDisplay('T'));
	buttonY.addEventListener("click", () => changeDisplay('Y'));
	buttonU.addEventListener("click", () => changeDisplay('U'));
	buttonI.addEventListener("click", () => changeDisplay('I'));
	buttonO.addEventListener("click", () => changeDisplay('O'));
	buttonP.addEventListener("click", () => changeDisplay('P'));
	buttonBACK.addEventListener("click", () => backspace());

	buttonCAPS.addEventListener("click", () => capsLock());
	buttonA.addEventListener("click", () => changeDisplay('A'));
	buttonS.addEventListener("click", () => changeDisplay('S'));
	buttonD.addEventListener("click", () => changeDisplay('D'));
	buttonF.addEventListener("click", () => changeDisplay('F'));
	buttonG.addEventListener("click", () => changeDisplay('G'));
	buttonH.addEventListener("click", () => changeDisplay('H'));
	buttonJ.addEventListener("click", () => changeDisplay('J'));
	buttonK.addEventListener("click", () => changeDisplay('K'));
	buttonL.addEventListener("click", () => changeDisplay('L'));

	buttonSHIFT.addEventListener("click", () => shift()); 
	buttonZ.addEventListener("click", () => changeDisplay('Z'));
	buttonX.addEventListener("click", () => changeDisplay('X'));
	buttonC.addEventListener("click", () => changeDisplay('C')); 
	buttonV.addEventListener("click", () => changeDisplay('V')); 
	buttonB.addEventListener("click", () => changeDisplay('B')); 
	buttonN.addEventListener("click", () => changeDisplay('N'));
	buttonM.addEventListener("click", () => changeDisplay('M')); 
	buttonCom.addEventListener("click", () => changeDisplay(','));
	buttonDot.addEventListener("click", () => changeDisplay('.')); 
	buttonQuest.addEventListener("click", () => changeDisplay('?')); 

	buttonSpace.addEventListener("click", () => changeDisplay(' '));;
}



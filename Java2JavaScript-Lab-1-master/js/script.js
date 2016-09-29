" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

/* 2.1 */
function printOneToTen(){
	var str = "";
	for (var i = 1; i <= 10; i++){
		str += i + "<br>";
	}
	display.innerHTML = str;
}

	printOneToTen();

/* 2.2 */
function printPositiveOdds(){
	var str = "";
	for (var i = 1; i < 20; i+=2){
		str += i + "<br>";
	}
	display.innerHTML = str;
}

	printPositiveOdds();

/* 2.3 */
function squares(){
	var str = "";
	for (var i = 1; i <=10; i++){
		str += (i * i) + "<br>";
	}
	display.innerHTML = str;
}

/* 2.4 */
function random4(){
	var str = "";

	for (var i = 0; i < 4; i++){
		str += Math.floor(Math.random(1) * 100)+ 1 + "<br>";
	}
	display.innerHTML = str;
}

/* 2.5 */
function even(num){
	var str = "";

	for (var i = 2; i < num; i += 2 ){
		str += i + "<br>";
	}

	display.innerHTML = str;
}

/* 2.6 */
function powers(num){
	var str = "";

	for (var i = 1; i < num; i++){
		str += Math.pow(2, i) + "<br>";
	}
	display.innerHTML = str;
}

/* 2.7 */
function areWeThereYet(){
	var answer = prompt("Say what?!?!");

	while(answer != "Yes"){
		answer = prompt("Are you sure?");
		if (answer == "Yes"){
			break;
		}
	}

}

/* 2.8 */
function descendingStaircase(){
	var str = "";
	for (var i = 1; i <= 4; i++){
		for (var j = 1; j <= i; j++){
				str += "\\*";
		}
		str += "<br>";
	}
	display.innerHTML = str;
}

/* 2.9 */
function tableSquare(){
	var str = "|";
	for (var i = 1; i <= 4; i++){
		for (var j = 1; j <= 4; j++){
			str += j * i + " | ";
		}
		str += "<br>" + "|";
	}
	display.innerHTML = str;
}

/* 2.10 */
function tablesSquares(num){
	var str = "| ";
	for (var i = 1; i <= num + 1; i++){
		for (var j = 1; j < num + 1; j++){
			str += j * i + " | ";
		}
		str += "<br>" + "|";
	}
	display.innerHTML = str;
}
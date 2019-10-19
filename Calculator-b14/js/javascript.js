
function value() {
	return document.getElementById("history-val").innerText;
}
function printhistory(num) {
	document.getElementById("history-val").innerText=num;
}
function getout() {
	return document.getElementById("output-val").innerText;
}
function printout(num) {
	if (num=="") {
		document.getElementById("output-val").innerText=num;
	}
	else {
		document.getElementById("output-val").innerText=formatNumber(num);
	}
}
function formatNumber(num) {

	var n= Number(num);
	var values =n.toLocaleString("en");
	return values;
}
function reverseNumber(num){
	return Number(num.replace(/,/g,''));
}
function addnumber(num){
	var out =reverseNumber
}

var operators = document.getElementsByClassName("operator");
for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener("click", function(){
		if (this.id=="clear") {
			printhistory("");
			printout("");
		}
		else if (this.id=="all") {
					var out= reverseNumber(getout()).toString();
					if (out) {
						out=out.substr(0,out.length-1);
						printout(out);

				}
		}
		else{
			var output =getout();
			var history =value();	
			if (output!="") {
				output =reverseNumber(output);
				history =history + output ;
				if (this.id=="equals") {
					var resut = eval(history);
					printout(resut);
					printhistory("");
				}
				else{
					history = history+ this.id;
					printhistory(history);
					printout("");
				}

			}
		}
		
	});
}
var theNumber = document.getElementsByClassName("number");
for (var i = 0; i < theNumber.length; i++) {
	theNumber[i].addEventListener("click", function(){
		var outs = reverseNumber(getout());
		if (outs!=NaN) {
			outs = outs + this.id;
			printout(outs);
		}
	});
}


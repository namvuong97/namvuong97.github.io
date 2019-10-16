//bai1
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", changeColor);
function changeColor() {
	document.getElementById("a").style.color="blue";
	document.getElementById("b").style.color="red";
	document.getElementById("c").style.color="yellow";
}
//bai2
function changeBgColor(color){
	document.body.style.backgroundColor = color;
}

//bai3
function copyContent(paragraph1, paragraph2) {

	document.getElementById("text1").removeChild(paragraph1.firstChild);
	paragraph1= document.getElementById("text2").firstChild;
	paragraph2= paragraph1.cloneNode(true);
	document.getElementById("text1").appendChild(paragraph2);
}
//bai4
function changeFontSize(x) {
	document.getElementById("page1").style.fontSize = `${x}px`;
}

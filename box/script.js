for(var i = 0; i < 300; i++) {
document.querySelector(".container").innerHTML += "<div class='box'></div>"
}



console.log()

var arrayOfBoxes = document.querySelectorAll(".box");

for (var i = 0; i < arrayOfBoxes.length; i++) {
	if(i % 2 === 0 ) {
		arrayOfBoxes[i].style.background = "orange";
	}
	else arrayOfBoxes[i].style.background = "red";
}
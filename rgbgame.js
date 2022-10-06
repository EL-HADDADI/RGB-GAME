var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
 var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorCodeDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var numSquares = 6; 


easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	header.style.background = "#232323";
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}

});

hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	header.style.background = "#232323";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		
		
	}
});

reset.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	header.style.background = "#232323";
	this.textContent = "New Colors";

	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
});

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;

		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!!!";
			header.style.background = clickedColor;
			changeColors(clickedColor);
			reset.textContent = "Play Again?"


		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!!";

		}


	});
		}

		function changeColors(color){
			//loop through all squares
			for(var i = 0; i < squares.length; i++){
				//change each color to match given color
			squares[i].style.background = color;
		}
		}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];	
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors ti array
	for (var i = 0; i < num; i++ ){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return the array
	return arr;

}


function randomColor(){
	//get a red from 0-256
	var r = Math.floor(Math.random() * 256);
	//get a green from 0-256
	var g = Math.floor(Math.random() * 256);
	//get a blues from 0-256
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";


 
}

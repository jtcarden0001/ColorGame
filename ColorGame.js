var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1=document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeBtn = document.querySelectorAll('.mode');


init();

function init(){
	setupModeBtn();
	// for(var i = 0; i < modeBtn.length; i++){
	
	// 	modeBtn[i].addEventListener("click", function(){
	// 		modeBtn[0].classList.remove('selected');
	// 		modeBtn[1].classList.remove('selected');
	// 		this.classList.add('selected');
	// 		this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
	// 		reset();

	// 	})
	// }
	colorDisplay.textContent = pickedColor;
	setUpSquares();
	// for(var i = 0; i < squares.length; i++){
 // 	//add initial colors to squares
	// 	squares[i].style.backgroundColor = colors[i];
	// //add click listeners to squares
	// 	squares[i].addEventListener("click", function(){
	// 	//grab color of clicked square
	// 		var clickedColor = this.style.backgroundColor;
		
	// 	//compare color to picked color
	// 		if(clickedColor === pickedColor){
	// 			messageDisplay.textContent = 'Correct!';
	// 			resetButton.textContent = 'Play Again?';
	// 			changeColors(clickedColor);
	// 			h1.style.backgroundColor = pickedColor;
	// 		}else{
	// 			this.style.backgroundColor = '#232323';
	// 			messageDisplay.textContent = 'Try Again';
	// 		}
	// 	})
	// }
	reset();
}

function setupModeBtn(){
	for(var i = 0; i < modeBtn.length; i++){
	
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove('selected');
			modeBtn[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
			reset();

		})
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
 	//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
		//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
		
		//compare color to picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?';
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
			}else{
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		})
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	//pick new random color of array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
	resetButton.textContent = 'New Colors';
	messageDisplay.textContent = '';
}



/////////////////////////////////////////////////////////////////////////
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add('selected');
// 	hardBtn.classList.remove('selected');
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = 'steelblue';
// 	resetButton.textContent = 'New Colors';
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 		squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = 'none';
// 		}
// 	}
// })


// ////////////////////////////////////////////////////////////////////////////
// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove('selected');
// 	hardBtn.classList.add('selected');
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = 'steelblue';
// 	resetButton.textContent = 'New Colors';
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = 'block';
// 		}
// 	}
//})


//////////////////////////////////////////////////////////////////////////
resetButton.addEventListener("click", function(){
	reset();
})


/////////////////////////////////////////////////////////////////////////////
// colorDisplay.textContent = pickedColor;


//  for(var i = 0; i < colors.length; i++){
//  	//add initial colors to squares
// 	squares[i].style.backgroundColor = colors[i];
// 	//add click listeners to squares
// 	squares[i].addEventListener("click", function(){
// 		//grab color of clicked square
// 		var clickedColor = this.style.backgroundColor;
		
// 		//compare color to picked color
// 		if(clickedColor === pickedColor){
// 			messageDisplay.textContent = 'Correct!';
// 			resetButton.textContent = 'Play Again?';
// 			changeColors(clickedColor);
// 			h1.style.backgroundColor = pickedColor;
// 		}else{
// 			this.style.backgroundColor = '#232323';
// 			messageDisplay.textContent = 'Try Again';
// 		}
// 	})
// }


///////////////////////////////////////////////////////////////////////////////
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(number){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < number; i++){
		//get RandomColor and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red
	var red = Math.floor(Math.random() * 256)
	//pick a green
	var green = Math.floor(Math.random() * 256)
	//pick a blue
	var blue = Math.floor(Math.random() * 256)

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
				
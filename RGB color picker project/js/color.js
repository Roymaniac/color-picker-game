console.log("CONNECTED!!!!"); 

var colors = getRandomColors(mode);

var squares = document.querySelectorAll(".square"); //Getting the 6 div square element 

var pickedColor = pickColor();

var colorGenerate = document.getElementById("colorGenerate");

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");

var mode = 6;

var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");

var hardBtn = document.querySelector("#hardBtn");


resetButton.addEventListener("click", function(){
    //generate all new color
    colors = getRandomColors(mode);
    // pick a new random color
    pickedColor = pickColor();
    // change the color generated to mactch picked color
    colorGenerate.textContent = pickedColor;
    //change message displayed
    messageDisplay.textContent = "";
    //chage the play again button back to default
    this.textContent = "New Colors";
    //change the color on the square
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorGenerate.textContent = pickedColor;


for (var i = 0; i < squares.length; i++){
    //add initial colors to squares from array
    squares[i].style.backgroundColor = colors[i]

    //add click listeners to square to get answer
    squares[i].addEventListener("click", function(){
        //grab a color from the clicked squares
        var clickedColor = this.style.backgroundColor;

        //Using if statement to compare the clicked color to the pickedcolor to get an answer
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct !!";
            resetButton.textContent = "Play Again?"
            fullColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again !!"
        }
    });    
} 


//Iterating the array of colors
function fullColor(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change all square to match the picked color
        squares[i].style.backgroundColor= color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function getRandomColors(num){
    //Create an array
    var array = []
    //iterate num 
    for(var i = 0; i < num; i++){
        //get the random color then push it into the empty array
        array.push(randomColor())    
    }
    //return array
    return array;
}

function randomColor(){
    //get a Red rgb value from 0 - 255
    var red = Math.floor(Math.random() * 256);
    //get a Green rgb value from 0 - 255
    var green = Math.floor(Math.random() * 256);
    //get a Blue rgb value from 0 - 255
    var blue = Math.floor(Math.random() * 256);
    //return values in a string RGB(r, g, b)
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//Easy and Hard button

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    mode = 3;
    colors = getRandomColors(mode);
    pickedColor = pickColor();
    colorGenerate.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    mode = 6;
    colors = getRandomColors(mode);
    pickedColor = pickColor();
    colorGenerate.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
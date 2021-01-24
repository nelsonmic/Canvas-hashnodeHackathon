// collating DOM elements
let shapes = [document.getElementById("rectangle"), document.getElementById("polygon"), document.getElementById("circle"), document.getElementById("star")];

let size = [document.getElementById("size-width"), document.getElementById("size-height")];

let direction = [document.getElementById("x-axis"), document.getElementById("y-axis")]

let color = document.getElementById("color-picker");

let manualColor = document.getElementById("color-value");

let drawnShapes =[];

let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

// this function checks to see if user inputed all required variables before calling the square function

const drawSquare = ()=>{
   if(size[0].value === "" && size[1].value === "" && direction[0].value === "" && direction[1].value === ""){
    console.log('no value included');
   } else{
      
      squareShape(direction[0].value, direction[1].value, size[0].value, size[1].value);
   }
   
   // pushing current drawnshape into array to access later for edits 
   drawnShapes.push(squareShape());
   console.log(drawnShapes[0]);
};

// this fucntion takes user input then renders the square shape on the canvas 
const squareShape =  (positionX, positionY, width, height)=>{
   return{
      color: ctx.fillStyle = color.value,
      rectangle : ctx.fillRect(positionX, positionY, width, height)
   }         
};


// listens for a click event on the squareshape icon
shapes[0].addEventListener("click", drawSquare); 
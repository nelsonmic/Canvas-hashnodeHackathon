// collating user inputs

let resizeCanvas = document.getElementById("canvas");

let resizeCanvasWidth = document.getElementById("resize-width");

let resizeCanvasHeight = document.getElementById("resize-height");

let canvasColor = document.getElementById("color-picker1")

let manualColorEntry = document.getElementById("color-value1");


//the following functions mutates the canvas as the user inputs changes
const resizeWidth = ()=>{
    resizeCanvas.style.width = `${resizeCanvasWidth.value}%`;
};

const resizeHeight = ()=>{
    resizeCanvas.style.height = `${resizeCanvasHeight.value}vh`;
};

const bgColorChange = ()=>{
    resizeCanvas.style.backgroundColor = `${canvasColor.value}`;
    
};

const manualBgColorChange = ()=>{
    resizeCanvas.style.backgroundColor = `#${manualColorEntry.value}`;
};

//the following event listeners, listens for the user inputs and then calls its respective function
resizeCanvasWidth.addEventListener('input', resizeWidth);
resizeCanvasHeight.addEventListener('input', resizeHeight);
canvasColor.addEventListener('input', bgColorChange);
manualColorEntry.addEventListener('input', manualBgColorChange);
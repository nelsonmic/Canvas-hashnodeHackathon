
let resizeCanvas = document.getElementById("canvas");

let resizeCanvasWidth = document.getElementById("resize-width");

let resizeCanvasHeight = document.getElementById("resize-height");

let canvasColor = document.getElementById("color-picker1")


const resizeWidth = ()=>{
    resizeCanvas.style.width = `${resizeCanvasWidth.value}%`;
};

const resizeHeight = ()=>{
    resizeCanvas.style.height = `${resizeCanvasHeight.value}vh`;
}

const bgColorChange = ()=>{
    resizeCanvas.style.backgroundColor = `${canvasColor.value}`;
    
}



resizeCanvasWidth.addEventListener('input', resizeWidth);
resizeCanvasHeight.addEventListener('input', resizeHeight);
canvasColor.addEventListener('input', bgColorChange);
var lastpositionofx,lastpositionofy;
var color="black";
var widthoftheline=10;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var width=screen.width;
newwidth=screen.width-80;
newheight=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    color=document.getElementById("color").value;
widthoftheline=document.getElementById("width_of_line").value;
lastpositionofx=e.touches[0].clientX - canvas.offsetLeft;
lastpositionofy=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    var currentpositionoftouchx=e.touches[0].clientX - canvas.offsetLeft;
var currentpositionoftouchy=e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthoftheline;
ctx.moveTo(lastpositionofx,lastpositionofy);
ctx.lineTo(currentpositionoftouchx,currentpositionoftouchy);
ctx.stroke();
lastpositionofx=currentpositionoftouchx;
lastpositionofy=currentpositionoftouchy;

}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }

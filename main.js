status = "";
video ="";

function preload(){

}

function setup(){
    canvas = createCanvas(480, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
    input = document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function draw(){
    image(video, 0, 0, 480, 400);
}
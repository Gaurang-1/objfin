status="";

function setup(){
    canvas=createCanvas(360,360);
    canvas.position(530,250);

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,360,360)
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status").innerHTML="Status = Detecting objects";
    document.getElementById("object").value;
}

function modalLoaded(){
    console.log("Modal Loaded!")
    status=true;
}
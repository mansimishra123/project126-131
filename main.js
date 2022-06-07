song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristy=0;
rightwristx=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()

    video=createCapture(VIDEO);
video.hide()

poseNet=ml5.poseNet(video,modelloaded)

poseNet.on('pose', gotposes)
}


function gotposes(result){

    if(result.length>0){
      
        console.log(result)

        leftwristx=result[0].pose.leftWrist.x;
        leftwristy=result[0].pose.leftWrist.y;
        console.log('leftwristx='+leftwristx+'leftwristy='+leftwristy)
        rightwristy=result[0].pose.rightWrist.x;
        rightwristy=result[0].pose.rightWrist.y;
console.log('rightwristy='+rightwristy+'rightwristx='+rightwristy)

    }
}

function modelloaded(){
    console.log("posenet is Initialize")
}

function draw(){
    image(video,0,0,600,500);
}

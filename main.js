song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristy=0;
rightwristx=0;
song1status="";
song2status="";
scoreleftwrist="";
scorerightwrist="";

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
scoreleftwrist=result[0].pose.keypoints[9].score
    }
}

function modelloaded(){
    console.log("posenet is Initialize")
}

function draw(){
    image(video,0,0,600,500);

    fill("red")
    stroke("red")

   song1status=song1.isPlaying()
   song2status=song2.isPlaying()

   if(scoreleftwrist>0.2){

    circle(leftwristx,leftwristy,20)

    song2.stop()

    if(song1status==false){
        song1.play()
        document.getElementById("song").innerHTML="playing petter pan "
    }
   }

   if(scorerighttwrist>0.2){

    circle(rightwristx,rightwristy,20)

    song1 .stop()

    if(song2status==false){
        song2 .play()
        document.getElementById("song").innerHTML="playing harry potter theme"
    }
   }
}

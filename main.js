noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/8cmJbHBk/Clown-Nose.png');
}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-60;
        noseY = results[0].pose.nose.y-30;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 350, 350);
    image(clown_nose, noseX, noseY, 120, 60);
}

function snapshot(){
    save("Filter.png");
}
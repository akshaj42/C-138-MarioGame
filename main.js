noseX="";
noseY="";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mariojump=loadSound("jump.wav");
	mariocoin=loadSound("coin.wav");
	mariogameover=loadSound("gameover.wav");
	mariodie=loadSound("mariodie.wav");
	mariokick=loadSound("kick.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("MODAL LOADED");
}

function gotPoses(result){
	if(result.length>0){
		noseX=result[0].pose.nose.x;
		noseY=result[0].pose.nose.y;
		
	}
}

function draw(){
	game();
}
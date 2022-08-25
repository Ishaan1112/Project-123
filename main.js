function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
   

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
   poseNet = ml5.poseNet(video, modelLoadad);
   poseNet.on('pose', gotPoses);
  }
  
  
  function modelLoadad() {
      console.log('Moedl Loaded');
  }
  
  
  function draw () {
        background('#969A97')
        
  }

  function gotPoses(results)
  {
    if(results.lengtt > 0)
    {
        console.log(results);
    }
  }
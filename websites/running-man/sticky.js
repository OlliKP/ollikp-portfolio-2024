const video = document.getElementById('myvideo')
const textElement = document.getElementById('text');

document.addEventListener("mousewheel", MouseWheelHandler, false);

// Start in the middle
video.currentTime = 0;

var scheduledAnimationFrame;
var delta;

let currentTime = 0;

function readAndUpdatePage(d){
  currentTime =  Math.max(0, currentTime + delta * 0.1);
   video.currentTime = currentTime;

  // Check if the video currentTime has reached 10 seconds
  if (video.currentTime >= 1) {
    // Add fade-out class to initiate the CSS transition
    textElement.classList.add('fade-out');
  } else {
      // Remove fade-out class to reset the opacity
      textElement.classList.remove('fade-out');
  }
  
  scheduledAnimationFrame = false;
}

function MouseWheelHandler(e) {
  var e = window.event || e;
  delta = e.wheelDelta / -70;

  if (!scheduledAnimationFrame) {
    scheduledAnimationFrame = true;

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(readAndUpdatePage);
  }

  return false;
}








// const video = document.getElementById('myvideo')

// document.addEventListener("mousewheel", MouseWheelHandler, false);

// // Start in the middle
// video.currentTime = 0;

// var scheduledAnimationFrame;
// var delta;

// let currentTime = 0;
// let oldDelta = 0;
// function readAndUpdatePage(d){
//   currentTime =  Math.max(0, currentTime + delta * 0.1);
//    video.currentTime = currentTime;
  
//   scheduledAnimationFrame = false;
// }

// function MouseWheelHandler(e) {
//   var e = window.event || e;
//   delta = e.wheelDelta/-70;//Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//    if (scheduledAnimationFrame){
//     return;
//   }
  
//   scheduledAnimationFrame = true;
  
//   // Can't use RAF - 60 FPS is too fast.
//   setTimeout(readAndUpdatePage,1000/30);
//   return false;
// }
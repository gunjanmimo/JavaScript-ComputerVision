navigator.getUserMedia = navigator.getUserMedia;

// select everything in my html
const video = document.querySelector("#ideo");
const audio = document.querySelector("#audio");
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
let model;

handTrack.startVideo(video).then((status) => {
  if (status) {
    navigator.getUserMedia(
      { video: {} },
      (stream) => {
        video.srcObject = stream;
      },
      (error) => console.log(error)
    );
  }
});

// Load the model.
handTrack.load().then((lmodel) => {
  model = lmodel;
});

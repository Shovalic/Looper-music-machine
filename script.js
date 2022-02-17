// var allTracks = WaveSurfer.create({
//     container: ".tracks",
//     waveColor: "#eee",
//     progressColor: "red",
//     barWidth: 2,
//     barRadius: 3,
//     barHeight: 4,
//   });
//   audioTrack1.load("assets/music/alltracks.mp3");


// Track uploads - Track1 
var audioTrack1 = WaveSurfer.create({
  container: ".audio1",
  waveColor: "#eee",
  progressColor: "red",
  barWidth: 2,
  barRadius: 3,
  barHeight: 4,
});
audioTrack1.load("assets/music/_tambourine_shake_higher.mp3");

// Track uploads - Track2
var audioTrack1 = WaveSurfer.create({
    container: ".audio2",
    waveColor: "#eee",
    progressColor: "orange",
    barWidth: 2,
    barRadius: 3,
    barHeight: 4,
  });
audioTrack1.load("assets/music/bvoc.mp3");

// Track uploads - Track3
var audioTrack1 = WaveSurfer.create({
    container: ".audio3",
    waveColor: "#eee",
    progressColor: "yellow",
    barWidth: 2,
    barRadius: 3,
    barHeight: 2,
  });
audioTrack1.load("assets/music/drums.mp3");

// Track uploads - Track4
var audioTrack1 = WaveSurfer.create({
    container: ".audio4",
    waveColor: "#eee",
    progressColor: "yellowgreen",
    barWidth: 2,
    barRadius: 3,
    barHeight: 4,
  });
audioTrack1.load("assets/music/hehevoc.mp3");

// Track uploads - Track5
var audioTrack1 = WaveSurfer.create({
    container: ".audio5",
    waveColor: "#eee",
    progressColor: "skyblue",
    barWidth: 2,
    barRadius: 3,
    barHeight: 4,
  });
audioTrack1.load("assets/music/highvoc.mp3");

// Track uploads - Track6
var audioTrack1 = WaveSurfer.create({
    container: ".audio6",
    waveColor: "#eee",
    progressColor: "blue",
    barWidth: 2,
    barRadius: 3,
    barHeight: 4,
  });
audioTrack1.load("assets/music/jibrish.mp3");

// Track uploads - Track7
var audioTrack1 = WaveSurfer.create({
    container: ".audio7",
    waveColor: "#eee",
    progressColor: "purple",
    barWidth: 2,
    barRadius: 3,
    barHeight: 4,
  });
audioTrack1.load("assets/music/lead1.mp3");

// Track uploads - Track8
var audioTrack1 = WaveSurfer.create({
    container: ".audio8",
    waveColor: "#eee",
    progressColor: "plum",
    barWidth: 2,
    barRadius: 3,
    barHeight: 4,
  });
audioTrack1.load("assets/music/uuhovoc.mp3");
  
// const playBtn = document.querySelector("#play");
// const pauseBtn = document.querySelector("#pause");
// const stopBtn = document.querySelector("#stop");
// const repeatBtn = document.querySelector("#repeat");

// playBtn.addEventListener("click", () => {
//    audioTrack1.playPause(); 
// })

function start() {
    audioTrack1.playPause();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
}

function pause() {
    audioTrack1.playPause();
    pauseButton.style.display = "none";
    playButton.style.display = "block";
}

function stop() {
    // audioTrack1.currentTime = 0;
    // audioTrack1.play();
    audioTrack1.load("assets/music/uuhovoc.mp3");
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    // var audioTrack1 = document.getElementById('audio1');
    // if (audioTrack1.paused) {
    //     audioTrack1.play();
    // }else{
    //     audioTrack1.currentTime = 0
    // }
    // // audioTrack1.reset();
}
// Create event listeners
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("stop");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", stop);


// function onChange(element) {
// if (element.checked == true && element.value === "track1") {
//     // document.getElementById("none").style.display = "block";
//     // document.getElementById("hide").style.display = "block";

//     let playBtn = document.querySelector("#track1");
//     playBtn.addEventListener("clicked", () =>{
//         audioTrack1.play();
//         if(audioTrack1.isPlaying()){
//             playBtn.classList.add("playing");
//         }else{
//             playBtn.classList.remove("playing");
//         }
//     })
// } else if (element.checked == false && element.value === "track1") {
//     // document.getElementById("none").style.display = "none";
//     // document.getElementById("hide").style.display = "none";
//     audioTrack1.muted();
// } else if (element.checked == true && element.value === "track2") {
//     document.getElementById("none2").style.display = "block";
//     document.getElementById("hide2").style.display = "block";
//     var audioTrack1 = WaveSurfer.create({
//     container: ".audio",
//     waveColor: "#eee",
//     progressColor: "red",
//     barWidth: 2,
//     barRadius: 3,
//     barHeight: 4,
//     });
//     audioTrack1.load("assets/music/_tambourine_shake_higher.mp3");
//     audioTrack1.playPause();
// }else if (element.checked == false && element.value === "track2") {
//     // document.getElementById("none2").style.display = "none";
//     // document.getElementById("hide2").style.display = "none";
// } else {
//     // document.getElementById("none").style.display = "none";
//     // document.getElementById("none2").style.display = "none";
//     // document.getElementById("hide").style.display = "none";
// }
// }
// function musicOn() {
  // let turnOn = onchange(element);
//   var audioAllTracks = WaveSurfer.create({
//     container: ".audio",
//     waveColor: "#eee",
//     progressColor: "red",
//     barWidth: 2,
//     barRadius: 3,
//     barHeight: 4,
//   });
//   audioAllTracks.load("assets/music/alltracks.mp3");
// }

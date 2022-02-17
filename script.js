var tracks = [];
function onChange(element) {
  if(element.checked == true && element.value === "track1") {
    tracks.push("audioTrack1");
  }else if (element.checked == true && element.value === "track2"){
    tracks.push(element.value);
  }else if (element.checked == true && element.value === "track3"){
    tracks.push(element.value);
    audioTrack3.playPause();
  }else if (element.checked == true && element.value === "track4"){
    tracks.push(element.value);
  }else if (element.checked == true && element.value === "track5"){
    tracks.push(element.value);
  }else if (element.checked == true && element.value === "track6"){
    tracks.push(element.value);
  }else if (element.checked == true && element.value === "track7"){
    tracks.push(element.value);
  }else if (element.checked == true && element.value === "track8"){
    tracks.push(element.value);
  }else if(element.checked == false){
    tracks.pop(element.value);
  }
  console.log(tracks)
}
// function onChange(element) {
//   var tracks = [];
//   if(element.checked == true && element.value === "track1") {
//     alert("bjk")
//       tracks.push(element.value);
//     return tracks.push(element.value);
//   }else if (element.checked == true && element.value === "track2"){
//       tracks.push(element.value);
//     return tracks.push(element.value);
//   }else if (element.checked == true && element.value === "track3"){
//       tracks.push(element.value);
//     return tracks.push(element.value);
//   }
// }

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
  width: 30,
  barWidth: 2,
  barRadius: 3,
  barHeight: 17,
});
audioTrack1.load("assets/music/_tambourine_shake_higher.mp3");

// Track uploads - Track2
var audioTrack2 = WaveSurfer.create({
    container: ".audio2",
    waveColor: "#eee",
    progressColor: "orange",
    barWidth: 2,
    barRadius: 3,
    barHeight: 7,
  });
audioTrack2.load("assets/music/bvoc.mp3");

// Track uploads - Track3
var audioTrack3 = WaveSurfer.create({
    container: ".audio3",
    waveColor: "#eee",
    progressColor: "yellow",
    barWidth: 2,
    barRadius: 3,
    barHeight: 2,
  });
audioTrack3.load("assets/music/drums.mp3");

// Track uploads - Track4
var audioTrack4 = WaveSurfer.create({
    container: ".audio4",
    waveColor: "#eee",
    progressColor: "yellowgreen",
    barWidth: 2,
    barRadius: 3,
    barHeight: 7,
  });
audioTrack4.load("assets/music/hehevoc.mp3");

// Track uploads - Track5
var audioTrack5 = WaveSurfer.create({
    container: ".audio5",
    waveColor: "#eee",
    progressColor: "skyblue",
    barWidth: 2,
    barRadius: 3,
    barHeight: 12,
  });
audioTrack5.load("assets/music/highvoc.mp3");

// Track uploads - Track6
var audioTrack6 = WaveSurfer.create({
    container: ".audio6",
    waveColor: "#eee",
    progressColor: "blue",
    barWidth: 2,
    barRadius: 3,
    barHeight: 7,
  });
audioTrack6.load("assets/music/jibrish.mp3");

// Track uploads - Track7
var audioTrack7 = WaveSurfer.create({
    container: ".audio7",
    waveColor: "#eee",
    progressColor: "purple",
    barWidth: 2,
    barRadius: 3,
    barHeight: 7,
  });
audioTrack7.load("assets/music/lead1.mp3");

// Track uploads - Track8
var audioTrack8 = WaveSurfer.create({
    container: ".audio8",
    waveColor: "#eee",
    progressColor: "plum",
    barWidth: 2,
    barRadius: 3,
    barHeight: 7,
  });
audioTrack8.load("assets/music/uuhovoc.mp3");
  
// const playBtn = document.querySelector("#play");
// const pauseBtn = document.querySelector("#pause");
// const stopBtn = document.querySelector("#stop");
// const repeatBtn = document.querySelector("#repeat");

// playBtn.addEventListener("click", () => {
//    audioTrack1.playPause(); 
// })

function start() {
    console.log(tracks)
    audioTrack1.playPause();
    audioTrack2.playPause();
    audioTrack3.playPause();
    audioTrack4.playPause();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
}



function pause() {
    audioTrack1.playPause();
    pauseButton.style.display = "none";
    playButton.style.display = "block";
}

function stop() {
    audioTrack1.stop();
    // audioTrack1.load("assets/music/uuhovoc.mp3");
    playButton.style.display = "block";
    pauseButton.style.display = "none";
}

function repeat() {
    if (typeof audioTrack1.loop == 'boolean')
    {
        audioTrack1.loop = true;
    }
    else
    {
        alert(typeof audioTrack1.loop)

        audioTrack1.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    audioTrack1.play();
    // audioTrack1.play();
    // if (audioTrack1.loop == true){
    //     start();
    // }
    // alert("jk")
    
    // audioTrack1.load();
    // audioTrack1.load("assets/music/uuhovoc.mp3");

    // audioTrack1.playPause();
    

    // audioTrack1.autoplay();

    // audioTrack1.currentTime = 0;

    // audioTrack1.loop = true;
    playButton.style.display = "block";
    pauseButton.style.display = "none";
}

// Create event listeners
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("stop");
let repeatButton = document.getElementById("repeat");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", stop);
repeatButton.addEventListener("click", repeat);




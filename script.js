var firstTrack = document.getElementById("track1");
var secondTrack = document.getElementById("track2");
var thirdTrack = document.getElementById("track3");
var fourthTrack = document.getElementById("track4");
var fifthTrack = document.getElementById("track5");
var sixthTrack = document.getElementById("track6");
var seventhTrack = document.getElementById("track7");
var eighthTrack = document.getElementById("track8");
let isPlaying = false; 

function start(){
    pauseButton.style.display = "block";
    playButton.style.display = "none";
    playSound();
    repeat();
    isPlaying = true; 
}

var tracks = [];
function playSound(){
    // Track1
    if (firstTrack.checked == false){
        tracks.push("track1");
        audioTrack1.setVolume(0);
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    }else{
        audioTrack1.play();
        audioTrack1.setVolume(1);
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    // Track2
    if (secondTrack.checked == false){
        tracks.push("track2");
        audioTrack2.setVolume(0);
        pauseButton.style.display = "none";
        playButton.style.display = "block";

    }else{
        audioTrack2.play();
        audioTrack2.setVolume(1);
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    // Track3
    if (thirdTrack.checked == false){
        tracks.push("track1");
        audioTrack3.setVolume(0);
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    }else{
        audioTrack3.play();
        audioTrack3.setVolume(1);
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    // Track4
    if (fourthTrack.checked == false){
        tracks.push("track1");
        audioTrack4.setVolume(0);
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    }else{
        audioTrack4.play();
        audioTrack4.setVolume(1);
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    // Track5
    if (fifthTrack.checked == false){
        tracks.push("track1");
        audioTrack5.setVolume(0);
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    }else{
        audioTrack5.play();
        audioTrack5.setVolume(1);
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    // Track6
    if (sixthTrack.checked == false){
        tracks.push("track1");
        audioTrack6.setVolume(0);
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    }else{
        audioTrack6.play();
        audioTrack6.setVolume(1);
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    // Track7
    if (seventhTrack.checked == false){
        tracks.push("track1");
        audioTrack7.setVolume(0);
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    }else{
        audioTrack7.play();
        audioTrack7.setVolume(1);
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    // Track8
    if (eighthTrack.checked == false){
        tracks.push("track1");
        audioTrack8.setVolume(0);
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    }else{
        audioTrack8.play();
        audioTrack8.setVolume(1);
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    
    pauseButton.style.display = "block";
    playButton.style.display = "none";
    if (tracks.length === 8){
        pauseButton.style.display = "none";
        playButton.style.display = "block";
        let frameNote = document.getElementById("note-container");
        let note = document.getElementById("msg-result");
        if (!note) {
            note = document.createElement("p");
            note.id = "msg-result";
            note.innerHTML = "Please note, there is no music to play.";
            frameNote.appendChild(note);
            frameNote.style.display = "block";
        }
        const myTimeout = setTimeout(refresh, 1000);
        function refresh(){
            frameNote.style.display = "none";
            window.location = "/index.html";
            window.location = "https://shovalic.github.io/Looper-music-machine/";
        }
    }
}

function onChange(){
  if (isPlaying){
    playSound();
  }
}

function pause() {
    pauseButton.style.display = "none";
    playButton.style.display = "block";
    // track1
    if (firstTrack.checked == false){
        audioTrack1.setVolume(0);
        audioTrack1.pause();
    }else{
        audioTrack1.pause();
    }
    // track2
    if (secondTrack.checked == false){
        audioTrack2.setVolume(0);
        audioTrack2.pause();
    }else{
        audioTrack2.pause();
    }
    // track3
    if (thirdTrack.checked == false){
        audioTrack3.setVolume(0);
        audioTrack3.pause();
    }else{
        audioTrack3.pause();
    }
    // track4
    if (fourthTrack.checked == false){
        audioTrack4.setVolume(0);
        audioTrack4.pause();
    }else{
        audioTrack4.pause();
    }
    // track5
    if (fifthTrack.checked == false){
        audioTrack5.setVolume(0);
        audioTrack5.pause();
    }else{
        audioTrack5.pause();
    }
    // track6
    if (sixthTrack.checked == false){
        audioTrack6.setVolume(0);
        audioTrack6.pause();
    }else{
        audioTrack6.pause();
    }
    // track7
    if (seventhTrack.checked == false){
        audioTrack7.setVolume(0);
        audioTrack7.pause();
    }else{
        audioTrack7.pause();
    }
    // track8
    if (eighthTrack.checked == false){
        audioTrack8.setVolume(0);
        audioTrack8.pause();
    }else{
        audioTrack8.pause();
    }
}

function stop() {
  audioTrack1.stop();
  audioTrack2.stop();
  audioTrack3.stop();
  audioTrack4.stop();
  audioTrack5.stop();
  audioTrack6.stop();
  audioTrack7.stop();
  audioTrack8.stop();
  playButton.style.display = "block";
  pauseButton.style.display = "none";
  playSound();
  // window.location = "/index.html";
  // window.location = "https://shovalic.github.io/Looper-music-machine/";
}

// Track uploads - Track1 
var audioTrack1 = WaveSurfer.create({
  container: ".audio1",
  loopSelection: true,
  waveColor: "#eee",
  progressColor: "red",
  width: 30,
  barWidth: 2,
  barRadius: 3,
  barHeight: 17,
});
audioTrack1.load("assets/music/tambourineshakehigher.mp3");

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
  
function repeat() {
    let loop = document.getElementById("repeat");
    while (loop.checked){
    }
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




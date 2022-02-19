var audioTrack1 = WaveSurfer.create({
    container: ".audio",
    waveColor: "#eee",
    progressColor: "red",
    barWidth: 2,
    barRadius: 3,
    barHeight: 4,
  });
  audioTrack1.load("assets/music/_tambourine_shake_higher.mp3");
// document.getElementById("hide").style.display = "none";
function onChange(element) {
  if (element.checked == true && element.value === "track1") {
    // document.getElementById("none").style.display = "block";
    // document.getElementById("hide").style.display = "block";

    let playBtn = document.querySelector("#track1");
    playBtn.addEventListener("clicked", () =>{
        audioTrack1.play();
        if(audioTrack1.isPlaying()){
            playBtn.classList.add("playing");
        }else{
            playBtn.classList.remove("playing");
        }
    })
  } else if (element.checked == false && element.value === "track1") {
    // document.getElementById("none").style.display = "none";
    // document.getElementById("hide").style.display = "none";
    audioTrack1.muted();
} else if (element.checked == true && element.value === "track2") {
    document.getElementById("none2").style.display = "block";
    document.getElementById("hide2").style.display = "block";
    var audioTrack1 = WaveSurfer.create({
      container: ".audio",
      waveColor: "#eee",
      progressColor: "red",
      barWidth: 2,
      barRadius: 3,
      barHeight: 4,
    });
    audioTrack1.load("assets/music/_tambourine_shake_higher.mp3");
    audioTrack1.playPause();
  }else if (element.checked == false && element.value === "track2") {
    // document.getElementById("none2").style.display = "none";
    // document.getElementById("hide2").style.display = "none";
  } else {
    // document.getElementById("none").style.display = "none";
    // document.getElementById("none2").style.display = "none";
    // document.getElementById("hide").style.display = "none";
  }
}

// function exp(){
//     alert("njk")
// audioTrack1.load('assets/music/_tambourine_shake_higher.mp3');

// audioTrack1.playPause();
// if (audioTrack1.isPlaying()){
//     playBtn.classList.add("playing");
// }else{
//     playBtn.classList.remove("playing");
// }
// }
// const playBtn = document.querySelector("check");
// playBtn.addEventListener("click", () => {
//     audioTrack1.playPause();
//     if (audioTrack1.isPlaying()){
//         playBtn.classList.add("playing");
//     }else{
//         playBtn.classList.remove("playing");
//     }
// }


// <div class="repeat-button">
// <label class="switch" id="red">
//   <input type="checkbox" class="checkbox" id="repeat" onclick="repeat()"/>
//   <span class="slider round" id="loop"></span>
// </label>
// </div>

// function pauseSound(){
//     if (firstTrack.checked == false){
//         audioTrack1.setVolume(0);
//         audioTrack1.pause();
//         pause();
//     }if (secondTrack.checked == false){
//         audioTrack2.setVolume(0);
//         audioTrack2.pause();
//         pause();
//     }if (thirdTrack.checked == false){
//         audioTrack3.setVolume(0);
//         audioTrack3.pause();
//         pause();
//         // audioTrack3.playPause();
//     }if (fourthTrack.checked == false){
//         audioTrack4.setVolume(0);
//         audioTrack4.pause();
//         pause();
//         // audioTrack4.playPause();
//     }if (fifthTrack.checked == false){
//         audioTrack5.setVolume(0);
//         audioTrack5.pause();
//         pause();
//         // audioTrack5.playPause();
//     }if (sixthTrack.checked == false){
//         audioTrack6.setVolume(0);
//         audioTrack6.play();
//         pause();
//         // audioTrack6.playPause();
//     }if (seventhTrack.checked == false){
//         audioTrack7.setVolume(0);
//         audioTrack8.pause();
//         pause();
//         // audioTrack7.playPause();
//     }if (eighthTrack.checked == false){
//         audioTrack8.setVolume(0);
//         audioTrack8.pause();
//         pause();
//         // audioTrack8.playPause();
//     }
// }

// function onSound(){
//     if (firstTrack.checked == true){
//         audioTrack2.playPause();

//         // start();
//     }if (secondTrack.checked == true){
//         // start();
//         // audioTrack2.playPause();
//     }if (thirdTrack.checked == true){
//         // start();
//         // audioTrack3.playPause();
//     }if (fourthTrack.checked == true){
//         // start();
//         // audioTrack4.playPause();
//     }if (fifthTrack.checked == true){
//         // start();
//         // audioTrack5.playPause();
//     }if (sixthTrack.checked == true){
//         // start();
//         // audioTrack6.playPause();
//     }if (seventhTrack.checked == true){
//         // start();
//         // audioTrack7.playPause();
//     }if (eighthTrack.checked == true){
//         // start();
//         // audioTrack8.playPause();
//     }
       

// }

// function onChange(element) {
//     while(element.checked == false){
//         alert("blj")
//         mute.push(element.value);
//         firstTrack.playPause();
//         // muteSound();
//         // tracks.pop(element.value);
//     }
//     console.log(mute.length)

//     while (element.checked == true){
//         switch(element.value){
//             case "track1":
//                 tracks.push("audioTrack1");
//                 audioTrack1.load("assets/music/_tambourine_shake_higher.mp3");
//                 audioTrack1.setVolume(10);
//                 break;
//             case "track2":
//                 tracks.push(element.value);
//                 audioTrack2.load("assets/music/bvoc.mp3");
//                 audioTrack2.setVolume(10);
//                 break;
//             default:
//                 start();
//         }
//     }
// }



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
//   container: ".audio9",
//   waveColor: "#eee",
//   progressColor: "red",
//   barWidth: 2,
//   barRadius: 3,
//   barHeight: 4,
// });


// const playBtn = document.querySelector("#play");
// const pauseBtn = document.querySelector("#pause");
// const stopBtn = document.querySelector("#stop");
// const repeatBtn = document.querySelector("#repeat");

// playBtn.addEventListener("click", () => {
//    audioTrack1.playPause(); 
// })
// var allTracks = WaveSurfer.create({
//   container: ".audio9",
// });
// allTracks.load("assets/music/alltracks.mp3");
// allTracks.playPause();

// function start() {
  // onChange(element);
  // for (let i = 0; i<=tracks.length - 1; i++){
  // (track[i+1]).playPause();
  // }
//   console.log(tracks)
//   audioTrack1.playPause();
  // audioTrack2.playPause();
  // audioTrack4.playPause();
//   playButton.style.display = "none";
//   pauseButton.style.display = "block";
// }

// while (audioTrack1.finish()){
    //   audioTrack1.playPause();
    // }
    // if (typeof audioTrack1.loop == 'boolean')
    // {
    //     audioTrack1.loop = true;
    // }
    // else
    // {
    //     alert(typeof audioTrack1.loop)

    //     audioTrack1.addEventListener('ended', function() {
    //         this.currentTime = 0;
    //         this.play();
    //     }, false);
    // }
    // audioTrack1.play();
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
    // playButton.style.display = "block";
    // pauseButton.style.display = "none";








    
    // track1
    // if (loop.checked == true && audioTrack1.finish() == true){
    //     audioTrack1.play();
    // }
//     // track2
//     if (loop.checked == true && secondTrack.finish() == true){
//         audioTrack2.play();
//     }
//     // track3
//     if (loop.checked == true && thirdTrack.finish() == true){
//         audioTrack3.play();
//     }
//     // track4
//     if (loop.checked == true && fourthTrack.finish() == true){
//         audioTrack4.play();
//     }
//     // track5
//     if (loop.checked == true && fifthTrack.finish() == true){
//         audioTrack5.play();
//     }
//     // track6
//     if (loop.checked == true && sixthTrack.finish() == true){
//         audioTrack6.play();
//     }
//     // track7
//     if (loop.checked == true && seventhTrack.finish() == true){
//         audioTrack7.play();
//         alert("bjk")
//     }
//     // track8
//     if (loop.checked == true && eighthTrack.finish() == true){
//         audioTrack8.play();
//     }


// if (tracks.length === 8){
//     let frameNote = document.getElementById("note-container");
//     let note = document.getElementById("msg-result");
//     if (!note) {
//         note = document.createElement("p");
//         note.id = "msg-result";
//         note.innerHTML = "Please note, there is no music to play.";
//         frameNote.appendChild(note);
//         frameNote.style.display = "block";
//     }
//     const myTimeout = setTimeout(refresh, 1000);
//     function refresh(){
//         window.location = "/index.html";
//     }
// }


// onChange(element);
    // for (let i = 0; i<=tracks.length - 1; i++){
    // (track[i+1]).playPause();
    // }
    // console.log(tracks)
    // audioTrack1.playPause();
    // audioTrack2.playPause();
    // audioTrack4.playPause();
    // playButton.style.display = "none";
    // pauseButton.style.display = "block";

  // audioTrack1.currentTime = 0;
    // audioTrack1.play();
    // var audioTrack1 = document.getElementById('audio1');
    // if (audioTrack1.paused) {
    //     audioTrack1.play();
    // }else{
    //     audioTrack1.currentTime = 0
    // }
    // // audioTrack1.reset();

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
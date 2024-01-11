console.log("Welcome to spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let mastersongName = document.getElementById("mastersongName");

let songs = [
  {
    songName: "Tu Hai Kahan-Usama Ahad",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads",
  },
  {
    songName: "Ve Kameleya-Pritam",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads",
  },
  {
    songName: "O Maahi-Irshad Kamil",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads",
  },
  {
    songName: "Ha Tu Hai-KK,Pritam",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads ",
  },
  {
    songName: "Hawa Banke-Darshan Rawal",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads ",
  },
  {
    songName: "Baate Zaruri Hai-Arman Malik",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads",
  },
  {
    songName: "Jab Koi Baat-Kumar Saanu",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads",
  },
  {
    songName: "Dil Ibadat-KK",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads",
  },
  {
    songName: "Tu Hi Haqeeqat-Pritam,Javed Ali",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads",
  },
  {
    songName: "O Bedardiya-Arijit Singh,Pritam",
    filepath: "C:UsersDellDownloads",
    coverpath: "C:UsersDellDownloads",
  },
];
//audioElement.play();
//Handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
//listen to events
audioElement.addEventListener("timeupdate", () => {
  // Update seekbar or progress bar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );

  myProgressBar.value = progress;
});
myProgressBar.addEventListener("input", () => {
  const seekTime = audioElement.duration * (myProgressBar.value / 100);
  audioElement.currentTime = seekTime;
});
// Select elements by class name "songItem" and attach click event listeners
const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songItemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllplays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `song${songIndex + 1}.mp3`;
      mastersongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `song${songIndex + 1}.mp3`;
  mastersongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `song${songIndex + 1}.mp3`;
  mastersongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});

let nameInfo = document.getElementById("nameInfo"),
    img = document.getElementById("img"),
    main = document.getElementsByClassName("main"),
    prevbtn = document.getElementById("prev"),
    stopp = document.getElementById("stop"),
    nextbtn = document.getElementById("next"),
    pases = document.getElementById("pases"),
    audio = document.getElementById("muzon"),
    index = 0,
    statu = true;

let array = [
    "AzeriPhonk",
    "Mega Toma Bala",
    "Bota",
    "DIKA VIKA (reupload)",
    "Euphoria",
    "MONTAGEM CORAL",
    "Moonlight",
    "I Wanna Be Yours",
    "Paint the Town Red",
    "Popular",
    "Pressure",
    "Rich Nigga Shit",
    "Habibi",
    "Switch Lanes",
    "White Tee",
];
function next1() {
    if (index == array.length - 1) {
        index = 0;
        audio.src = `/mp3/${array[index]}.mp3`;
        img.src = `/imgs/${array[index]}.jpg`;
        audio.play();
        pases.classList.add("fa-pause")
        pases.classList.remove("fa-play")
        statu = false;
    }else{
        index++;
        audio.src = `/mp3/${array[index]}.mp3`;
        img.src = `/imgs/${array[index]}.jpg`;
        audio.play();
        pases.classList.add("fa-pause")
        pases.classList.remove("fa-play")
        statu = false;
    }

}
function prev1() {
    if (index == 0) {
        index = array.length - 1;
        audio.src = `/mp3/${array[index]}.mp3`;
        img.src = `/imgs/${array[index]}.jpg`;
        audio.play();
        statu = false;
        pases.classList.add("fa-pause")
        pases.classList.remove("fa-play");
    }else{
        index--;
        audio.src = `/mp3/${array[index]}.mp3`;
        img.src = `/imgs/${array[index]}.jpg`;
        audio.play();
        statu = false;
        pases.classList.add("fa-pause")
        pases.classList.remove("fa-play");
    }
}
function setPlay() {
    if (statu) {
        audio.src = `/mp3/${array[index]}.mp3`;
        img.src = `/imgs/${array[index]}.jpg`;
        audio.play();
        statu = false;
        pases.classList.add("fa-pause")
        pases.classList.remove("fa-play")
    } else {
        pases.classList.remove("fa-pause")
        pases.classList.add("fa-play")
        audio.pause();
        statu = true;
    }
}
function changer1() {
    next1()
}
function changer2() {
    prev1()
}
stopp.addEventListener("click", setPlay);
nextbtn.addEventListener("click", changer1);
prevbtn.addEventListener("click", changer2);
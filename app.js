//! selectors
let title = document.querySelector("#nameInfo"),
    main = document.querySelector(".main"),
    nesDiv = document.querySelector(".nes-div"),
    img = document.getElementById("img"),
    cover = document.getElementById("cover"),
    prev = document.getElementById("prev"),
    stop = document.getElementById("stop"),
    next = document.getElementById("next"),
    audio = document.getElementById("muzon"),
    pases = document.getElementById("pases"),
    ind = 0,
    statu = 1;

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
    //! functions
function values(e) {
    audio.src = `/mp3/${e}.mp3`;
    title.innerHTML = e;
    img.src = `/imgs/${e}.jpg `;
}
function changer(e) {
    "next" == e ? (ind == array.length - 1 ? (ind = 0) : ind++, abuses()) : "prev" == e ? (0 == ind ? (ind = array.length - 1) : ind--, abuses()) : statu ? ((statu = !1), audio.pause()) : ((statu = !0), audio.play()), ifPlay();
}
function ifPlay() {
    statu ? (pases.classList.add("fa-pause"), pases.classList.remove("fa-play"), main.classList.add("play")) : (pases.classList.add("fa-play"), pases.classList.remove("fa-pause"), main.classList.remove("play"));
}
function abuses() {
    values(array[ind]), (statu = !0), audio.play();
}
function timeupdate(e) {
    let { duration: a, currentTime: t } = e.srcElement;
    (nesDiv.style.width = `${(t / a) * 100}%`), audio.currentTime == audio.duration && changer("next");
}
function setCommon(e) {
    let a = this.clientWidth,
        t = e.offsetX,
        i = audio.duration;
    audio.currentTime = (t / a) * i;
}
values(array[ind]),
    next.addEventListener("click", () => changer("next")),
    prev.addEventListener("click", () => changer("prev")),
    stop.addEventListener("click", () => changer("play")),
    audio.addEventListener("timeupdate", timeupdate),
    cover.addEventListener("click", setCommon);
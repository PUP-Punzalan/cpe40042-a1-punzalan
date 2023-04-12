let audio = document.querySelector(".audio");
let lyrics = document.querySelector(".lyrics");

audio.volume = 0.4

audio.addEventListener("timeupdate", ()=> {
    if (Math.floor(audio.currentTime) <= 28) {
        lyrics.style.top = `0px`;
    }
    else if (Math.floor(audio.currentTime) > 28 && (Math.floor(audio.currentTime) < 52)) {
        lyrics.style.top = `-90px`;
    }
    else if (Math.floor(audio.currentTime) > 52 && (Math.floor(audio.currentTime) < 60+13)) {
        lyrics.style.top = `-300px`;
    }
    else if (Math.floor(audio.currentTime) > 60+13) {
        lyrics.style.top = `-480px`;
    }
})
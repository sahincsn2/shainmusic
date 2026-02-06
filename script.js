let audioPlayer;

document.addEventListener("DOMContentLoaded", function () {
    audioPlayer = document.getElementById("audioPlayer");
});

function playBefore() {
    audioPlayer.src = "audio/song-before.mp3";
    audioPlayer.play();
}

function playAfter() {
    audioPlayer.src = "audio/song-after.mp3";
    audioPlayer.play();
}

$(document).ready(function () {
    initPlayer();
});
var audio;

function initPlayer() {
    audio = new Audio();
    audio.src = 'music/music.mp3';
    audio.play();
}
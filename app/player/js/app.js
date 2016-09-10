$(document).ready(function () {
    initPlayer();
});
var audio;

function initPlayer() {
    audio = new Audio();
    audio.src = 'music/music.mp3';
    $('#play').click( function () {
        playPause();
    });
}

function playPause() {
    if( audio.paused ) {
        audio.play();
        $('#pl-pa').addClass('fa-pause').removeClass('fa-play');
    }
    else {
        audio.pause();
        $('#pl-pa').addClass('fa-play').removeClass('fa-pause');
    }
}
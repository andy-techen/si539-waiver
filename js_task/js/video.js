const video = document.querySelector('video');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const slower = document.querySelector('#slower');
const faster = document.querySelector('#faster');
const skip = document.querySelector('#skip');
const mute = document.querySelector('#mute');
const volume = document.querySelector('#volume');
const slider = document.querySelector('#slider');
const vintage = document.querySelector('#vintage');
const orig = document.querySelector('#orig');

function playVideo() {
	console.log("Play Video");
	video.play();
	volume.textContent = slider.value + '%';
}

function pauseVideo() {
	console.log("Pause Video");
	video.pause();
}

function slowerVideo() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log('New speed is ' + video.playbackRate);
}

function fasterVideo() {
	video.playbackRate = video.playbackRate * (1 / 0.95);
	console.log('New speed is ' + video.playbackRate);
}

function skipVideo() {
	console.log('Original location ' + video.currentTime);
	const duration = video.duration;
	if (video.currentTime + 15 > duration) {
		video.currentTime = 0;
		console.log('Going back to beginning');
	} else {
		video.currentTime += 15;
	}
	console.log('New location ' + video.currentTime);
	video.play();
}

function toggleMute() {
	video.muted = video.muted ? false : true;
	mute.textContent = video.muted ? 'Unmute' : "Mute";
}

function handleVolume() {
	video.volume = slider.value * 0.01;
	console.log(video.volume);
	volume.textContent = slider.value + '%';
}

play.addEventListener("click", playVideo);
pause.addEventListener("click", pauseVideo);
slower.addEventListener("click", slowerVideo);
faster.addEventListener("click", fasterVideo);
skip.addEventListener("click", skipVideo);
mute.addEventListener("click", toggleMute);
slider.addEventListener("change", handleVolume);
vintage.addEventListener("click", () => video.classList.add("oldSchool"));
orig.addEventListener("click", () => video.classList.remove("oldSchool"));

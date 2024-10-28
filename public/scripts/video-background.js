const pauseBtn = document.getElementById("pause-btn")
const video = document.getElementById("video")

pauseBtn.onclick = () => {
    if (video.paused) {
        video.play()
        pauseBtn.textContent = 'Pause'
    } else if (!video.paused) {
        video.pause()
        pauseBtn.textContent = 'Play'
    }
}
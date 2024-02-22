document.addEventListener('DOMContentLoaded', function() {
    let video = document.querySelector('.desktop-video');
    video.addEventListener('ended', function() {
        reverseVideo(video);
    });

    function reverseVideo(videoElement) {
        let frameRate = 30; 
        let frameInterval = 1000 / frameRate;
        let currentFrame = videoElement.duration * frameRate;
        let reverseInterval = setInterval(function() {
            if (currentFrame <= 0) {
                clearInterval(reverseInterval); 
                videoElement.currentTime = 0;
                videoElement.play();
            } else {
                currentFrame--;
                videoElement.currentTime = currentFrame / frameRate;
            }
        }, frameInterval);
    }
});

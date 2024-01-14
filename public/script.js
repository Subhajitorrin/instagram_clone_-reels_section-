// function getDetails() {
//     let reels = document.querySelectorAll(".reel");

//     reels.forEach((reel, index) => {
//             let top = reel.getBoundingClientRect().top;
//             if(top>=-500 && top<=500){
//                 let video=reel.querySelector("video")
//                 video.play();
//                 video.muted=false;
//             }else{
//                 let video=reel.querySelector("video")
//                 video.pause();
//                 video.muted=true;
//             }
//     })
// }

// setInterval(() => {
//     getDetails()
// }, 1000);

// top >=20 && top <= 300

function getDetails() {
    let reels = document.querySelectorAll(".reel");

    reels.forEach((reel, index) => {
        let top = reel.getBoundingClientRect().top;
        let video = reel.querySelector("video");

        if (top >= -500 && top <= 500) {
            // Check if the video exists before manipulating it
            if (video) {
                // Check if the video is not already playing
                if (video.paused) {
                    video.play();
                }

                // Check if the video is muted and unmute it
                if (video.muted) {
                    video.muted = false;
                }
            }
        } else {
            // Check if the video exists before manipulating it
            if (video) {
                // Check if the video is not already paused
                if (!video.paused) {
                    video.pause();
                }

                // Check if the video is not muted and mute it
                if (!video.muted) {
                    video.muted = true;
                }
            }
        }
    });
}

setInterval(() => {
    getDetails();
}, 1000);

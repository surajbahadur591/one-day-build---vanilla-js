const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video : true, audio:false})
    .then(localMediaStream => {
        console.log(localMediaStream);
        video.srcObject  = localMediaStream;
        video.play();
    })
    .catch("allow camera permission");
}

function paintToCanvas(){
    const width1 = video.videoWidth;
    const height1 = video.videoHeight;
    console.log(width1, height1);
    canvas.height = height1;
    canvas.width = width1;

    return setInterval( ()=> {
        ctx.drawImage(video, 0, 0, width1, height1);
    }, 16)
}


function takePhoto(){
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    console.log(data);
}
getVideo();
video.addEventListener('canplay', paintToCanvas )
const startCameraBtn = document.getElementById('start-camera');
const video = document.getElementById('webcam');

startCameraBtn.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        alert('Error accessing webcam: ' + err.message);
    }
});

// Screen Capture API
// The Screen Capture API introduces additions to the existing Media Capture and Streams API to let the user select a screen or portion of a screen (such as a window) to capture as a media stream. This stream can then be recorded or shared with others over the network.
const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// promt to select media stearm, pass to video element, they play
async function selectMediaStream() {
    try{
const mediaStream = await navigator.mediaDevices.getDisplayMedia();
videoElement.srcObject = mediaStream;
videoElement.onloadedmetadata = () =>{
    videoElement.play();
}


    } catch (error){
        // alert("Opps some error here:", error);
    };

}
button.addEventListener('click', async() =>{
    // disble button
button.disabled = true;
// start picture in picture
await videoElement.requestPictureInPicture();
// reset button
button.disabled = false;

});
selectMediaStream();

import React, { useState } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import { ImagePreview } from './imagePreview';
// import 'react-html5-camera-photo/build/css/index.css';

function CameraComponent (props) {
    const [facingMode, setFacingMode] = useState(FACING_MODES.USER);
    const [capturedImageURI, setCapturedImageURI] = useState(null);

    function handleTakePhoto(dataUri) {
      setCapturedImageURI(dataUri); // Store the captured image URI in state
    }


  function handleTakePhotoAnimationDone (dataUri) {
    // Do stuff with the photo...
    // console.log('takePhoto');
    setCapturedImageURI(dataUri); 
  }

  function handleCameraError (error) {
    console.log('handleCameraError', error);
  }

  function handleCameraStart (stream) {
    console.log('handleCameraStart');
  }

  function handleCameraStop () {
    console.log('handleCameraStop');
  }


  function toggleFacingMode() {
    setFacingMode(
      facingMode === FACING_MODES.USER ? FACING_MODES.ENVIRONMENT : FACING_MODES.USER
    );
  }


  return (
<>
   {
    (capturedImageURI)
      ? <ImagePreview dataUri={capturedImageURI}
        // isFullscreen={isFullscreen}
      />

:
<>
<button onClick={toggleFacingMode}>Flip Camera</button>

    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
      onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
      onCameraError = { (error) => { handleCameraError(error); } }
      idealFacingMode = {facingMode}
      idealResolution = {{width: 640, height: 480}}
      imageType = {IMAGE_TYPES.JPG}
      imageCompression = {0.97}
      isMaxResolution = {true}
      isImageMirror = {false}
      isSilentMode = {false}
      isDisplayStartCameraError = {true}
      isFullscreen = {false}
      sizeFactor = {0.5}
      onCameraStart = { (stream) => { handleCameraStart(stream); } }
      onCameraStop = { () => { handleCameraStop(); } }
    /></>
   }
</>
  );
}

export default CameraComponent;

import React from 'react';

function CaptureButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
      Capture Image
    </button>
  );
}

export default CaptureButton;
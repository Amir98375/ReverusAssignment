import React from "react";

export const ImagePreview = (props) => {
  return (
    <>
      <div style={{
        height:'100vh',
        width:'100%',
        border:'1px solid black'
      }}>
        <img src={props?.dataUri} alt="" 
        style={{width:'100%',
        height:'100%',
        objectFit:'cover'}}/>

      </div>
    </>
  );
};

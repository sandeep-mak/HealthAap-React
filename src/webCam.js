import React,{ useEffect, useRef } from "react";
import { useActionData } from "react-router-dom";




export default function WebCam(){

 const videoRef = useRef(null);
 const photoRef = useRef(null);
 const stripRef = useRef(null);

 let b = {"display" : "none"};
 let a =  {"visibility": "visible"};
 let [clicked , setClicked] = React.useState(false);
 let ab = {};

 useEffect(()=>{
  getVideo();
},[videoRef])

  function getVideo(){
    navigator.mediaDevices.getUserMedia(
      {video : {width: 514,
                height: 450}})
    .then((stream)=>{
      let video = videoRef.current;
      video.srcObject = stream ;
      video.onloadedmetadata = () => {
        ab = a ;
        video.play();
      };
    })
    .catch((err) =>{
      console.error('error:' , err);
    });
  };

  const paintToCanvas = () =>{
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext('2d')

    const width = 514;  
    const height = 450;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
      ctx.drawImage(video , 0 ,0 , width , height);
    },200);
  
  };
   const takePhoto =( ) => {
    setClicked((pre) => !pre)
    let photo = photoRef.current;
    let strip = stripRef.current;
    strip.innerHTML = '';
    
    console.warn(strip);

    const data = [];
    data.push(photo.toDataURL('image/jpeg'));
    console.warn(data);
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'myWebcam');
    link.innerHTML = `<img src='${data[data.length-1]}' alt='thumbnail'/>`
    strip.appendChild(link);
   };

  

    return (
        <div className="user-face-container">
          <p>Please Capture your face to continue</p>

          <div className="user-face">
          <canvas ref={photoRef} style={b} />
            <video onCanPlay={() => paintToCanvas()} ref={videoRef} style={ clicked ? b : a} />
            <div ref={stripRef} style={ clicked ? a : b} className="photo"></div>
            {console.log(document.querySelector('.photo'))}
          </div>
          <div>
            
           {
            clicked ? 
            <div class="after-take-btns"><button className="face-pic-btn" onClick={() => takePhoto()}>Re-take</button> 
               <button className="face-pic-btn" >Continue</button>
            </div>
            :
            <button className="face-pic-btn" onClick={() => takePhoto()}>Take a photo</button>}
          </div>
        </div> 
          
        
      );
    

}
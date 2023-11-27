import logo from './logo.svg';
import './App.css';
import './Group-472.jpg' ;
import { Link } from 'react-router-dom';
import React from 'react';
import WebCam from './webCam.js'

function App() {
let [page , setPage] = React.useState(true);
let [showSuccess , setshowSuccess] = React.useState(false);
let [moveForward , setMoveforward] = React.useState(false);

 let signStyle;
 let logInStyle;

 page ? signStyle = {"color" : "#261E3B" , "text-decoration" : "underline"} : logInStyle = {"color" : "#261E3B" , "text-decoration" : "underline"}

function handleClick(){
  setPage((pre) => !pre);
}

function overLay(){
  console.log('loading')
  setshowSuccess( (pre)=> !pre )
}
function logIn(){
  setMoveforward((pre)=> !pre)
}

React.useEffect(() => {
  
  return () => {
    document.querySelector('h1').removeEventListener('click', handleClick);

  };
}, []);

  return (
    
    <div className="index-site">
      <div >
         <img src={require('./Group-472.jpg')} className="img" alt="sicu-aura template"></img>
      </div>
      <div className="form-outline"> 
        <div className="form-cont">
          <div className="form-nav">
             <img src={require('./image 12.jpg')} alt="health-logo" className="health-image"/>
             <div className="form-nav-links">
                <h1 onClick={handleClick} style={signStyle} >Sign Up</h1><h1 onClick={handleClick} style={logInStyle}> / Login</h1>
             </div>
          </div>
          {showSuccess && (
            <div className="overlay" onClick={overLay} >
              <div className="success-box">
                <img className='check-mark' src={require('./Checkmark.png')} ></img>
                <p>Your Registration has been Successful</p>
              </div>
              </div>
          )}


        { page ? <form className="signUp">
          <div className="form-inputs">
              <div className="col1">
                  <input  type="text" className='st-input-boxs' placeholder="Hospital Name"/>
                  <input  type="text" className='input-box' placeholder="Address"/>
                  <input  type="text" className='input-box' placeholder="City"/>
                  <input  type="text" className='input-box' placeholder="State"/>
                  <input  type="text" className='input-box' placeholder="Pincode"/>
                  <input  type="text" className='input-box' placeholder="Hospital Registration Date"/>
                  <input  type="text" className='input-box' placeholder="Number Of Ambulance available"/>
                </div>
                <div className="col2" >
                  <input  type="text" className='input-box' placeholder="Email ID"/>
                  <input  type="text" className='input-box' placeholder="Phone Number"/>
                  <input  type="text" className='input-box' placeholder="Hospital Registration Number"/>
                  <input  type="text" className='input-box' placeholder="Emergency-Ward Number"/> 
                  <div class="file-input-container">
                  <label for="file" className='file-lable'>Registration certificate Upload<hr />
                  </label>
                  <div class="file-input-containerr">
                    <label for="file" class="file-input-label">Choose</label>
                    <input type="file" id="file" class="input-boxs"/>
                    <div class="file-name" id="file-name"></div>
                  </div>
                  </div>
                  <input  type="text" className='input-box' placeholder="Create Password"/>
                  <input  type="text" className='input-box' placeholder="Confirm Password"/>
              </div>  
          </div>

          <button className="form-signUp" type="button" onClick={overLay}>Sign Up</button>
          </form> 
          :
          moveForward ? <WebCam />  :
          <div className='logIn-inputs'>
              <form className='logIn-inputs-form'>
                  <div className="logIn">
                      <h3>Welcome to Sicu-aura</h3>
                      <p>Your one stop safety solutions using innovative technology</p>
                      <input  type="text" className='st-input-boxs' placeholder="Hospital Name"/>
                      <input  type="text" className='input-box' placeholder="Email ID"/>
                      <input  type="text" className='input-box' placeholder="Create Password"/>
                      <input type="text" className="input-box login-AccessCode" placeholder='Special Access Code'></input>
                  </div>
                  <div>
                    <button type="button" className='login-btn' onClick={logIn}>login</button>
                  </div>
              </form>
            </div>}

          

          <p className="foot">Terms and Condition privacy policy</p>
        </div>
      </div>
</div>
    
  );
}

export default App;

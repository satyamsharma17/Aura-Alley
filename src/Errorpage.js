import React from 'react'
import errorimage from "./assets/images/404 error with portals-pana.png"
import "./css/Errorstyle.css"

const Errorpage = () => {
  return (
    <div className='error404div'>
      <img src={errorimage} alt="errorpage" className='error404image'/>
    </div>
  );
}
export default Errorpage;
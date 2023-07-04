import React from 'react'
import './loginform.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping, faUser , faLock } from '@fortawesome/free-solid-svg-icons';



const Loginform = () => {
  return (
    <div className='cover'>

      <div className="mIcon">  
      <FontAwesomeIcon icon={faHandsClapping} className='my-icon' />      </div>


      <div className="inputG">
      
        <span className="input-group-text">
          <FontAwesomeIcon icon={faUser}/>
        </span>
      
      <input type="text" placeholder='USERNAME'/>
     
    </div>
    <div className="inputG"> 
    <span className="input-group-text">
          <FontAwesomeIcon icon={faLock} />
        </span>
      <input type="Password" placeholder='PASSWORD'/>
    </div>
      <div className="btn-login">LOGIN</div>
      <p className="text">Forget Password?</p>
      
    </div>

  )
}

export default Loginform;
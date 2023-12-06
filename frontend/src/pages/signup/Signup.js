import React, { useState } from 'react'
import './signup.css'
import {useNavigate} from 'react-router-dom'
import yoga from '../Yoga/Yoga'
const Signup = () => {
    const [action, setAction] = useState('Log In')
    const navigate = useNavigate();
    <button onClick={()=>navigate("/yoga")}>home</button>


    

  return (
    <div className='container'>
        <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==='Log In'?<div></div>:<div className='input'>
                <img src="" alt=""/>
                <input type="text" placeholder='UserName'/>
            </div>
            }
            
            <div className='input'>
                <img src="" alt=""/>
                <input type="email" placeholder='Email ID'/>
            </div>
            <div className='input'>
                <img src="" alt=""/>
                <input type="password" placeholder='password'/>
            </div>
        </div>
        {action==='Sign Up'?<div></div>:<div className='forgot-password'>Forget Password? <span>Click Here!</span></div>
        }
        
        <div className='submit-container'>
            <div className={action==='Log In'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}} >Sign up</div>
            <div className={action==='Sign Up'?'submit gray':'submit'} onClick={()=>{setAction('Log In')}}>Log in</div>
        </div>
    </div>
  )
  
}

export default Signup
import React from 'react';
import './login.css'

import logo from '../assets/logo.svg'

export default function login() {
  return (
    <div className="login-container" >
     <form action="">
     <img src={logo} alt="Tindev" />
     <input placeholder =  "Digite seu usuário no github" />
     <button type= "submit">Enviar</button>
       </form> 
    </div>
  );

}
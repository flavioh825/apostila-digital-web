import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import api from '../../services/api';
import { login, SignOut } from '../../services/auth';

function Login(props) {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  let authenticate = () => {
    console.log(email, password);
    try {
      api.post('/auth/sign_in', {
        'email': email,
        'password': password
      }).then(response => {
        console.log(response);
        if(response.status === 200) {
          console.log(response.statusText);
          login(response);
        }
      });
      props.history.push('/home');
    } catch (err) {
      console.log(err);
    }
    
  }

  return(
    <>
      <div>
        <form>
          <label>Email</label>
          <input 
            type='email' name="email" onChange={(e) => setEmail(e.target.value) } />
          <label>Senha</label>
          <input 
            type="password" name="password" onChange={ (e) => setPassword(e.target.value) } />
          <button type="button" onClick={ authenticate }>Entrar</button>
        </form>
        <div>
          <Link to={"/signup"}>Cadastrar-se</Link>
          <br />
          <a href="" onClick={ SignOut }>Sair</a>
        </div>
      </div>
    </>
  );
}

export default withRouter(Login);
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import api from '../../services/api';

function SignUp(props) {

  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  let registerNewUser = async () => {
    console.log(name, lastName, email, password);
    try {
      const response = await api.post('auth', {
        'name': name,
        'last_name': lastName,
        'email': email,
        'password': password,
        'kind': 'student'
      });
      console.log(response);
      props.history.push('/');
    }catch(err) {
      console.log(err);
    }
  }

  return(
    <>
      <div>
        <form>
          <label>Nome</label>
          <input type="text" 
            name="name" onChange={ (e) => setName(e.target.value) } />
          <label>Sobrenome</label>
          <input type="text" 
            name="lastName" onChange={ (e) => setLastName(e.target.value) } />
          <label>Email</label>
          <input type="email"
            name="email" onChange={ (e) => setEmail(e.target.value) } />
          <label>Senha</label>
          <input type="password"
            name="password" onChange={ (e) => setPassword(e.target.value) } />
          <button type="button" onClick={ registerNewUser }>Cadastrar-se</button>
        </form>
        <div>
          <Link to="/">Ir para login</Link>
        </div>
      </div>
    </>
  );
}

export default withRouter(SignUp);
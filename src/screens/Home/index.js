import React from 'react';
import { Link } from 'react-router-dom';

import { SignOut } from '../../services/auth';

function Home() {


  return(
    <>
      <div>
        <Link to={"/cursos"}>Cursos</Link>
        <br />
        <a href="" onClick={ SignOut }>Logout</a>
      </div>
    </>
  );
}

export default Home;
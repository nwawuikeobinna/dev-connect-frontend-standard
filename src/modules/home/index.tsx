import React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

const HomePage = ({}: Props) => {
    return (
      <>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link>&nbsp;&nbsp;
      <Link to="/signup">Signup</Link>
      </>
    );
}

export default HomePage;
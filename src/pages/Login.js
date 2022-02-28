import React, { Fragment, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import AuthService from '../services/AuthService';

export default function Login() {

  const { user, setUser } = useContext(UserContext);


  const loginHandler = () => {
    // AuthService.Login()
  }

  return (
    <Fragment>
      <button onClick={loginHandler}>Login</button>
    </Fragment>

  )
}

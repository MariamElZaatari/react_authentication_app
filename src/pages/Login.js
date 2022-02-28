import React, { Fragment, useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import AuthService from '../services/AuthService';

export default function Login() {

  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = () => {
    AuthService.Login(email, password)
      .then(({ data }) => {
        console.log('response', data)
        setUser({
          id: data.user.id,
          email: data.user.email,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          age: data.user.age,
          gender: data.user.gender,
          created_at: data.user.created_at,
          access_token: data.access_token,
          token_type: data.token_type,
          expires_in: data.expires_in
        })
      })
  }

  return (
    <Fragment>
      <input onChange={(e) => setEmail(e.target.value)} type="text" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" />
      <button onClick={loginHandler}>Login</button>
    </Fragment>

  )
}

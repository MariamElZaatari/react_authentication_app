import React, { Fragment, useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Login() {

  const { user, setUser } = useContext(UserContext);


  const loginHandler = () => {
    setUser({
      id: 1,
      email: "unknown",
      first_name: "Omar",
      last_name: "unknown",
      age: 0,
      gender: "F",
      created_at: "unknown",
      access_token: "unknown",
      token_type: "unknown",
      expires_in: 0 //seconds
  })
  }

  return (
    <Fragment>
      <button onClick={loginHandler}>Login</button>
    </Fragment>

  )
}

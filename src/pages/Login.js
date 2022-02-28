import React, { Fragment, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import AuthService from '../services/AuthService';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import isEmail from 'validator/lib/isEmail';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import '../assets/css/login.css'

export default function Login() {

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [LoginFailedAlert, setLoginFailedAlert] = useState(null);

  const loginHandler = () => {

    if (isEmail(email)) {
      setEmailError(false);
    }
    else {
      setEmailError(true);
    }

    if (password.length > 7) {
      setPasswordError(false);
    }
    else {
      setPasswordError(true);
    }

    if (!isEmail(email) || !(password.length > 7)) {
      return false;
    }

    AuthService.Login(email, password)
      .then(({ data }) => {

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

        navigate('/home');
      })
      .catch(error => {
        setLoginFailedAlert(<Alert className="login_text_alert clr_red" severity="error">Email / Password Wrong</Alert>)
      })
  }

  const emailHandler = (email) => {
    setEmailError(false);
    setEmail(email);
  }

  const passwordHandler = (password) => {
    setPasswordError(false);
    setPassword(password);
  }

  const signupHandler = () => {
    navigate('/signup');
  }

  

  return (
    <Fragment>

      <Container maxWidth="sm" align="center" className='section'>
        <br />
        <br />
        <TextField
          error={emailError}
          label="Email"
          color="success"
          onChange={(e) => emailHandler(e.target.value)}
        />
        <br />
        <br />
        <TextField
          error={passwordError}
          type="password"
          color="success"
          label="Password"
          onChange={(e) => passwordHandler(e.target.value)}
        />
        <br />
        <br />

        {LoginFailedAlert ? <>{LoginFailedAlert} <br /></> : null}

        <Button onClick={loginHandler} className="clr_green" variant="contained">Login</Button>

        <p id='login_no_account' onClick={() => signupHandler()}>don't have an account?</p>


      </Container>

    </Fragment>

  )
}

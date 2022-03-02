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
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';


export default function Login() {

  const navigate = useNavigate();

  const { setUserHandler } =useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [LoginFailedAlert, setLoginFailedAlert] = useState(null);

  const loginHandler = () => {

    setLoginFailedAlert(null)

      if (isEmail(email)) {
        setEmailError(false);
      }
      else {
        setEmailError(true);
      }

      if (password.length > 5) {
        setPasswordError(false);
      }
      else {
        setPasswordError(true);
      }

      if (!isEmail(email) || password.length < 5) {
        return false;
      }

      AuthService.Login(email, password)
        .then(({ data }) => {

          setUserHandler({
          id: data.user.id,
          email: data.user.email,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          age: data.user.age,
          gender: data.user.gender,
          phone: data.user.phone,
          created_at: data.user.created_at,
          access_token: data.access_token,
          token_type: data.token_type,
          expires_in: data.expires_in,
          isAuth: true
        })
        
        navigate('/home');

        })
        .catch(error => {
          setLoginFailedAlert(<Alert className="alert" severity="error">Wrong Email or Password</Alert>)
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

  var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '45vw'
  }


  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '84vh' }}
    >

      <Grid item xs={3}>

        <Card className='card'>
          <CardContent align="center" width="50vw">
            <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text title">
              Welcome Back
            </Typography>
            <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text subtitle">
              You have been missed.
            </Typography>
            <TextField
              error={emailError}
              label="Email"
              color="success"
              defaultValue=""
              helperText={emailError == true ? "Enter a valid email." : ''}
              onChange={(e) => emailHandler(e.target.value)}
            />
            <br />
            <br />
            <TextField
              error={passwordError}
              type="password"
              color="success"
              label="Password"
              defaultValue=""
              helperText={passwordError == true ? "Enter a valid password." : ''}
              onChange={(e) => passwordHandler(e.target.value)}
            />
            <br />
            <br />

            {LoginFailedAlert ? <>{LoginFailedAlert} <br /></> : null}

            <Button onClick={loginHandler} className="button">Login</Button>

            <Typography className="clr_brown_text" p={2} fontWeight={300} id='login_no_account' onClick={() => signupHandler()}>
              Don't Have an Account?
            </Typography>
          </CardContent>
        </Card>

      </Grid>
    </Grid>

  )
}

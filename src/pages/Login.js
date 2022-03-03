import React, { Fragment, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import AuthService from '../services/AuthService';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import isEmail from 'validator/lib/isEmail';
import Alert from '@mui/material/Alert';
import '../assets/css/login.css'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';


export default function Login() {

  const navigate = useNavigate();

  // Create useState alert that returns alert Stateful Value and set alert Function to update it
  const [LoginFailedAlert, setLoginFailedAlert] = useState(null);

  // Get setUserHandler from user context to set new logged in user 
  const { setUserHandler } = useContext(UserContext);

  // Create Email useState, Email Error Use State, and Email Handler Function for retrieving email onChange 
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const emailHandler = (email) => {
    setEmailError(false);
    setEmail(email);
  }

  // Create Password useState, Email Error Use State, and Email Handler Function for retrieving email onChange 
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const passwordHandler = (password) => {
    setPasswordError(false);
    setPassword(password);
  }

  // Signup Handler to navigate to signup
  const signupHandler = () => {
    navigate('/signup');
  }

  // Log in Handler Function: Resets Alert, Validates Input, and Posting data using axios
  const loginHandler = () => {

    // Reset Alert
    setLoginFailedAlert(null)

    // Validate Input for Error
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

    // Validate Input to Abort Axios
    if (!isEmail(email) || password.length < 5) {
      return false;
    }

    // Axios
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



  return (
    // Grid with One Grid Item
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

            {/* Start of Title */}
            <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text title">
              Welcome Back
            </Typography>
            <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text subtitle">
              You have been missed.
            </Typography>
            {/* End of Title */}

            {/* Email Input*/}
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

            {/* Password Input*/}
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

            {/* If alert exists,  add alert else null */}
            {LoginFailedAlert ? <>{LoginFailedAlert} <br /></> : null}

            <Button onClick={loginHandler} className="button">Login</Button>

            {/* Signup Navigate */}
            <Typography className="clr_brown_text" p={2} fontWeight={300} id='login_no_account' onClick={() => signupHandler()}>
              Don't Have an Account?
            </Typography>

          </CardContent>
        </Card>

      </Grid>
    </Grid>

  )
}

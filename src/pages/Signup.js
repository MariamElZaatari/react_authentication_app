import React, { Fragment, useState } from 'react'
import '../assets/css/signup.css'
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import isEmail from 'validator/lib/isEmail';
import AuthService from '../services/AuthService';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';


export default function Signup() {

  const navigate = useNavigate();

  const [LoginFailedAlert, setLoginFailedAlert] = useState(null);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState("m");
  const [age, setAge] = useState();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const registerHandler = () => {

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

    if (passwordConfirmation === password) {
      setPasswordConfirmationError(false);
    }
    else {
      setPasswordConfirmationError(true);
    }

    if (firstName.length > 0) {
      setFirstNameError(false);
    }
    else {
      setFirstNameError(true);
    }

    if (lastName.length > 0) {
      setLastNameError(false);
    }
    else {
      setLastNameError(true);
    }

    if (gender === "m" || gender === "f") {
      setGenderError(false);
    }
    else {
      setGenderError(true);
    }

    if (age > 0) {
      setAgeError(false);
    }
    else {
      setAgeError(true);
    }

    if (!isEmail(email) || !(password.length > 7) || passwordConfirmation !== password || firstName.length <= 0 || lastName.length <= 0 || !(gender === "m" || gender === "f") || age < 0) {
      return false;
    }

    AuthService.Register(email, password, passwordConfirmation, firstName, lastName, gender, age)
      .then(({ data }) => {
        navigate('/login');
      })
      .catch(error => {
        setLoginFailedAlert(<Alert className="login_text_alert clr_red" severity="error">Couldn't Create A User With This Info</Alert>)
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

  const passwordConfirmationHandler = (cPassword) => {
    setPasswordConfirmationError(false);
    setPasswordConfirmation(cPassword);
  }

  const firstNameHandler = (firstName) => {
    setFirstNameError(false);
    setFirstName(firstName);
  }

  const lastNameHandler = (lastName) => {
    setLastNameError(false);
    setLastName(lastName);
  }

  const genderHandler = (gender) => {
    setGenderError(false);
    setGender(gender);
  }

  const ageHandler = (age) => {
    setAgeError(false);
    setAge(age);
  }

  return (
    <Fragment>

      <Container maxWidth="sm" align="center">

        <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text">
          Register
        </Typography>

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

        <TextField
          error={passwordConfirmationError}
          type="password"
          color="success"
          label="Password Confirmation"
          onChange={(e) => passwordConfirmationHandler(e.target.value)}
        />
        <br />
        <br />

        <TextField
          error={firstNameError}
          color="success"
          label="First Name"
          onChange={(e) => firstNameHandler(e.target.value)}
        />
        <br />
        <br />

        <TextField
          error={lastNameError}
          color="success"
          label="Last Name"
          onChange={(e) => lastNameHandler(e.target.value)}
        />
        <br />
        <br />

        <TextField
          error={genderError}
          select
          color="success"
          label="Select"
          value={gender}
          onChange={(e) => genderHandler(e.target.value)}
        >
          <MenuItem key="m" value="m">
            Male
          </MenuItem>
          <MenuItem key="f" value="f">
            Female
          </MenuItem>
        </TextField>
        <br />
        <br />

        <TextField
          error={ageError}
          color="success"
          label="Age"
          onChange={(e) => ageHandler(e.target.value)}
        />
        <br />
        <br />

        {LoginFailedAlert ? <>{LoginFailedAlert} <br /></> : null}

        <Button onClick={registerHandler} className="clr_green section" variant="contained">Register</Button>



      </Container>



    </Fragment>
  )
}
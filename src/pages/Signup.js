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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';


export default function Signup() {

  const navigate = useNavigate();

  const [SignUpFailedAlert, setSignUpFailedAlert] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("m");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");


  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);


  const registerHandler = () => {

    setSignUpFailedAlert(null)

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

    if (passwordConfirmation === password) {
      setPasswordConfirmationError(false);
    }
    else {
      setPasswordConfirmationError(true);
    }

    if (firstName.length > 0 && /^[a-zA-Z]+$/.test(firstName)) {
      setFirstNameError(false);
    }
    else {
      setFirstNameError(true);
    }

    if (lastName.length > 0 && /^[a-zA-Z]+$/.test(lastName)) {
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

    if (age > 11 && /^[0-9]+$/.test(age)) {
      setAgeError(false);
    }
    else {
      setAgeError(true);
    }

    if (phone.length == 8 && /^[0-9]+$/.test(phone)) {
      setPhoneError(false);
    }
    else {
      setPhoneError(true);
    }

    if (!isEmail(email) || password.length < 6 || passwordConfirmation !== password || firstName.length <= 0 || !(/^[a-zA-Z]+$/.test(firstName)) || lastName.length <= 0 || !(/^[a-zA-Z]+$/.test(lastName)) ||!(gender === "m" || gender === "f") || age < 12 || !(/^[0-9]+$/.test(age)) || phone.length !== 8 || !(/^[0-9]+$/.test(phone))) {
      return false;
    }

    AuthService.Register(email, password, passwordConfirmation, firstName, lastName, gender, age, phone)
      .then(({ data }) => {
        console.log("r")
        setSignUpFailedAlert(<Alert className="success" severity="success">Account Created Successfully</Alert>)
        setTimeout(() => {
          navigate('/login');
        }, 2000)
      })
      .catch(error => {
        setSignUpFailedAlert(<Alert className="alert" severity="error">Email Already Registered.</Alert>)
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

  const phoneHandler = (phone) => {
    setPhoneError(false);
    setPhone(phone);
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '92vh' }}
    >

      <Grid item xs={3}>

        <Card className='card'>
          <CardContent align="center" width="50vw">

            <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text">
              Register
            </Typography>

            <TextField
              error={emailError}
              label="Email"
              color="success"
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
              helperText={passwordError == true ? "Password should be 6 characters long." : ''}
              onChange={(e) => passwordHandler(e.target.value)}
            />
            <br />
            <br />

            <TextField
              error={passwordConfirmationError}
              type="password"
              color="success"
              label="Password Confirmation"
              helperText={passwordConfirmationError == true ? "Passwords do not match." : ''}
              onChange={(e) => passwordConfirmationHandler(e.target.value)}
            />
            <br />
            <br />

            <TextField
              error={firstNameError}
              color="success"
              label="First Name"
              helperText={firstNameError == true ? "Enter a valid first name." : ''}
              onChange={(e) => firstNameHandler(e.target.value)}
            />
            <br />
            <br />

            <TextField
              error={lastNameError}
              color="success"
              label="Last Name"
              helperText={lastNameError == true ? "Enter a valid last name." : ''}
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
              helperText={genderError == true ? "Gender cannot be empty." : ''}
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
              helperText={ageError == true ? "Enter a valid age." : ''}
              onChange={(e) => ageHandler(e.target.value)}
            />
            <br />
            <br />
            <TextField
              error={phoneError}
              defaultValue={phone}
              color="success"
              label="Phone"
              helperText={phoneError == true ? "Enter a valid phone number." : ''}
              onChange={(e) => phoneHandler(e.target.value)}
            />
            <br />
            <br />

            {SignUpFailedAlert ? <>{SignUpFailedAlert} <br /></> : null}

            <Button onClick={registerHandler} className="button">Register</Button>
          </CardContent>
        </Card>

      </Grid>
    </Grid>
  )
}
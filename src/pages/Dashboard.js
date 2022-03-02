import React, { Fragment, useState, useContext } from 'react'
import '../assets/css/signup.css'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import ProfileService from '../services/ProfileService';
import { UserContext } from '../context/UserContext'
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

export default function Dashboard() {

  const { user, setUserHandler } = useContext(UserContext);

  const [editFailedAlert, setEditFailedAlert] = useState(null);
  const [editSuccessAlert, setEditSuccessAlert] = useState(null);

  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [gender, setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);
  const [phone, setPhone] = useState(user.phone);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const profileEditHandler = () => {

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

    if (phone.length == 8) {
      setPhoneError(false);
    }
    else {
      setPhoneError(true);
    }

    if (firstName.length <= 0 || lastName.length <= 0 || !(gender === "m" || gender === "f") || age < 0) {
      return false;
    }

    ProfileService.Edit(user.id, user.access_token, firstName, lastName, gender, age, phone)
      .then(({ data }) => {
        setUserHandler({
          id: user.id,
          email: user.email,
          first_name: firstName,
          last_name: lastName,
          gender: gender,
          age: age,
          phone: phone,
          created_at: user.created_at,
          access_token: user.access_token,
          token_type: user.token_type,
          expires_in: user.expires_in,
          isAuth: user.isAuth
        })
        setEditSuccessAlert(<Alert className="login_text_alert clr_green" severity="success">User Updated Successfully</Alert>)
      })
      .catch(error => {
        setEditFailedAlert(<Alert className="login_text_alert clr_red" severity="error">Failed to Edit The User Info</Alert>)
      })
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
    <Fragment>

      <Container maxWidth="sm" align="center">

        <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text">
          Edit Profile
        </Typography>

        <TextField
          label="Email"
          color="success"
          defaultValue={email}
          disabled
        />

        <br />
        <br />

        <TextField
          error={firstNameError}
          color="success"
          defaultValue={firstName}
          label="First Name"
          onChange={(e) => firstNameHandler(e.target.value)}
        />
        <br />
        <br />

        <TextField
          error={lastNameError}
          defaultValue={lastName}
          color="success"
          label="Last Name"
          onChange={(e) => lastNameHandler(e.target.value)}
        />
        <br />
        <br />

        <TextField
          error={genderError}
          defaultValue={gender}
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
          defaultValue={age}
          color="success"
          label="Age"
          onChange={(e) => ageHandler(e.target.value)}
        />
        <br />
        <br />

        <TextField
          error={phoneError}
          defaultValue={phone}
          color="success"
          label="Phone"
          onChange={(e) => phoneHandler(e.target.value)}
        />
        <br />
        <br />
        {editFailedAlert ? <>{editFailedAlert} <br /></> : null}

        <Button onClick={profileEditHandler} className="clr_green" variant="contained">Edit Profile</Button>

        <br />
        <br />

        {editSuccessAlert ? <>{editSuccessAlert} <br /></> : null}

      </Container>



    </Fragment>
  )
}

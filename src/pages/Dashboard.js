import React, { Fragment, useState, useContext } from 'react'
import '../assets/css/signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import ProfileService from '../services/ProfileService';
import { UserContext } from '../context/UserContext'
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

export default function Dashboard() {

  // Get User and setUserHandler from user context to set input default value and update user info
  const { user, setUserHandler } = useContext(UserContext);

  // Create useState alert that returns alert Stateful Value and set alert Function to update it
  const [editUserAlert, setEditUserAlert] = useState(null);

  const [email, setEmail] = useState(user.email);

  // Create First Name useState, Email Error Use State, and Email Handler Function for retrieving email onChange 
  const [firstName, setFirstName] = useState(user.first_name);
  const [firstNameError, setFirstNameError] = useState(false);
  const firstNameHandler = (firstName) => {
    setFirstNameError(false);
    setFirstName(firstName);
  }

  // Create Last Name useState, Email Error Use State, and Email Handler Function for retrieving email onChange 
  const [lastName, setLastName] = useState(user.last_name);
  const [lastNameError, setLastNameError] = useState(false);
  const lastNameHandler = (lastName) => {
    setLastNameError(false);
    setLastName(lastName);
  }

  // Create Gender useState, Email Error Use State, and Email Handler Function for retrieving email onChange 
  const [gender, setGender] = useState(user.gender);
  const [genderError, setGenderError] = useState(false);
  const genderHandler = (gender) => {
    setGenderError(false);
    setGender(gender);
  }

  // Create Age useState, Email Error Use State, and Email Handler Function for retrieving email onChange 
  const [age, setAge] = useState(user.age);
  const [ageError, setAgeError] = useState(false);
  const ageHandler = (age) => {
    setAgeError(false);
    setAge(age);
  }

  // Create Phone useState, Email Error Use State, and Email Handler Function for retrieving email onChange 
  const [phone, setPhone] = useState(user.phone);
  const [phoneError, setPhoneError] = useState(false);
  const phoneHandler = (phone) => {
    setPhoneError(false);
    setPhone(phone);
  }

  // Profile Edit Handler Function: Resets Alert, Validates Input, and Posting data using axios
  const profileEditHandler = () => {

    // Reset Alert
    setEditUserAlert(null)

    // Validate Input for Error
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

    // Validate Input to Abort Axios
    if (firstName.length <= 0 || !(/^[a-zA-Z]+$/.test(firstName)) || lastName.length <= 0 || !(/^[a-zA-Z]+$/.test(lastName)) || !(gender === "m" || gender === "f") || age < 12 || !(/^[0-9]+$/.test(age)) || phone.length !== 8 || !(/^[0-9]+$/.test(phone))) {
      return false;
    }

    // Axios
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
        setEditUserAlert(<Alert className="success" severity="success">User Updated Successfully</Alert>)
        
      })
      .catch(error => {
        setEditUserAlert(<Alert className="alert" severity="error">Failed to Edit Account Info</Alert>)
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
      style={{ minHeight: '92vh' }}
    >

      <Grid item xs={3}>

        <Card className='card'>
          <CardContent align="center" width="50vw">

            {/* Title */}
            <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text">
              Edit Profile
            </Typography>

            {/* Start of Input */}

            {/* Email */}
            <TextField
              label="Email"
              color="success"
              defaultValue={email}
              disabled
            />
            <br />
            <br />

            {/* First Name */}
            <TextField
              error={firstNameError}
              color="success"
              defaultValue={firstName}
              label="First Name"
              helperText={firstNameError == true ? "Enter a valid first name." : ''}
              onChange={(e) => firstNameHandler(e.target.value)}
            />
            <br />
            <br />

            {/* Last Name */}
            <TextField
              error={lastNameError}
              defaultValue={lastName}
              color="success"
              label="Last Name"
              helperText={lastNameError == true ? "Enter a valid last name." : ''}
              onChange={(e) => lastNameHandler(e.target.value)}
            />
            <br />
            <br />

            {/* Gender */}
            <TextField
              error={genderError}
              defaultValue={gender}
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

            {/* Age */}
            <TextField
              error={ageError}
              defaultValue={age}
              color="success"
              label="Age"
              helperText={ageError == true ? "Enter a valid age." : ''}
              onChange={(e) => ageHandler(e.target.value)}
            />
            <br />
            <br />

            {/* Phone */}
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
            {/* End of Input */}

            {/* If alert exists,  add alert else null */}
            {editUserAlert ? <>{editUserAlert} <br /></> : null}

            <Button onClick={profileEditHandler} className="clr_green" variant="contained">Edit Profile</Button>
          </CardContent>
        </Card>

      </Grid>
    </Grid>
  )
}

import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import isEmail from 'validator/lib/isEmail';
import ContactService from '../services/ContactService';

export default function Contact() {

  const [PostMessageFailedAlert, setPostMessageFailedAlert] = useState(null);

  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const emailHandler = (email) => {
    setEmailError(false);
    setEmail(email);
  }

  const [subject, setSubject] = useState();
  const [subjectError, setSubjectError] = useState(false);
  const subjectHandler = (subject) => {
    setSubjectError(false);
    setSubject(subject);
  }

  const [text, setText] = useState();
  const [textError, setTextError] = useState(false);
  const textHandler = (subject) => {
    setTextError(false);
    setText(subject);
  }

  const postMessageHandler = () => {

    if (isEmail(email)) {
      setEmailError(false);
    }
    else {
      setEmailError(true);
    }

    if (subject.length > 0) {
      setSubjectError(false);
    }
    else {
      setSubjectError(true);
    }

    if (text.length > 3) {
      setTextError(false);
    }
    else {
      setTextError(true);
    }


    ContactService.PostMessage(email, subject, text)
      .then(({ data }) => {
        //Add Message Sent Successfully
      })
      .catch(error => {
        setPostMessageFailedAlert(<Alert className="login_text_alert clr_red" severity="error">All Fields are Required</Alert>)
      })
  }

  return (
    <div>
      <Container maxWidth="lg" className="section" align="center">
        <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text">
          Contact Us
        </Typography>
        <TextField
          error={emailError}
          color="success"
          label="Email"
          onChange={(e) => emailHandler(e.target.value)}
        /><br /><br />
        <TextField
          error={subjectError}
          color="success"
          label="Subject"
          onChange={(e) => subjectHandler(e.target.value)}
        /><br /><br />
        <TextField
          error={textError}
          color="success"
          label="Text"
          onChange={(e) => textHandler(e.target.value)}
        /><br /><br />
        {PostMessageFailedAlert ? <>{PostMessageFailedAlert} <br /></> : null}
        <Button className="clr_green" variant="contained" onClick={postMessageHandler}>Send</Button>
      </Container></div>
  )
}

import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import isEmail from 'validator/lib/isEmail';
import ContactService from '../services/ContactService';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

export default function Contact() {

  
  const [PostMessageAlert, setPostMessageAlert] = useState(null);
  
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const emailHandler = (email) => {
    setEmailError(false);
    setEmail(email);
  }
  
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState(false);
  const subjectHandler = (subject) => {
    setSubjectError(false);
    setSubject(subject);
  }
  
  const [text, setText] = useState("");
  const [textError, setTextError] = useState(false);
  const textHandler = (subject) => {
    setTextError(false);
    setText(subject);
  }
  
  const postMessageHandler = () => {
    setPostMessageAlert(null)
    
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

    if (text.length > 0) {
      setTextError(false);
    }
    else {
      setTextError(true);
    }

    if (!isEmail(email) || subject.length == 0 || text.length<3) {
      return false;
    }

    ContactService.PostMessage(email, subject, text)
      .then(() => {
        setPostMessageAlert(<Alert className="success" severity="success">Message Sent Successfully</Alert>)
      })
      .catch(error => {
        setPostMessageAlert(<Alert className="alert" severity="error">Error Sending Message</Alert>)
      })
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
              How can we help?
            </Typography>
            <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text subtitle">
              Send us a message.
            </Typography>
            <TextField
              error={emailError}
              color="success"
              label="Email"
              placeholder='Enter your email...'
              helperText={emailError == true ? "Enter a valid email." : ''}
              onChange={(e) => emailHandler(e.target.value)}
            /><br /><br />
            <TextField
              error={subjectError}
              color="success"
              label="Subject"
              placeholder='Enter subject of message...'
              helperText={subjectError == true ? "Subject cannot be empty." : ''}
              onChange={(e) => subjectHandler(e.target.value)}
            /><br /><br />
            <TextField
              error={textError}
              color="success"
              label="Message"
              multiline
              rows={4}
              placeholder='Enter your message...'
              helperText={textError == true ? "Message cannot be empty." : ''}
              onChange={(e) => textHandler(e.target.value)}
            /><br /><br />
            {PostMessageAlert ? <>{PostMessageAlert} <br /></> : null}

            <Button className="button" onClick={postMessageHandler}>Send</Button>
          </CardContent>
        </Card>

      </Grid>
    </Grid>
  )
}

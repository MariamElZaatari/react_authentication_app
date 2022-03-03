import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import isEmail from 'validator/lib/isEmail';
import ContactService from '../services/ContactService';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

export default function Contact() {

  // Create useState that returns alert Stateful Value and set alert Function to update it
  const [PostMessageAlert, setPostMessageAlert] = useState(null);

  // Create Email useState, Email Error Use State, and Email Handler Function for retrieving email onChange 
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const emailHandler = (email) => {
    setEmailError(false);
    setEmail(email);
  }

  // Create Subject useState, Subject Error Use State, and Subject Handler Function for retrieving Subject onChange 
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState(false);
  const subjectHandler = (subject) => {
    setSubjectError(false);
    setSubject(subject);
  }

  // Create Message useState, Message Error Use State, and Message Handler Function for retrieving Message onChange 
  const [text, setText] = useState("");
  const [textError, setTextError] = useState(false);
  const textHandler = (text) => {
    setTextError(false);
    setText(text);
  }

  // Post Message Handler Function: Resets Alert, Validates Input, and Posting data using axios
  const postMessageHandler = () => {

    // Reset Alert
    setPostMessageAlert(null)

    // Validate Input for Error
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

    // Validate Input to Abort Axios
    if (!isEmail(email) || subject.length == 0 || text.length < 3) {
      return false;
    }

    // Axios
    ContactService.PostMessage(email, subject, text)
      .then(() => {
        setPostMessageAlert(<Alert className="success" severity="success">Message Sent Successfully</Alert>)
      })
      .catch(error => {
        setPostMessageAlert(<Alert className="alert" severity="error">Error Sending Message</Alert>)
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
              How can we help?
            </Typography>

            <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text subtitle">
              Send us a message.
            </Typography>
            {/* End of Title */}

            {/* Start of Input */}

            {/* Email */}
            <TextField
              error={emailError}
              color="success"
              label="Email"
              placeholder='Enter your email...'
              helperText={emailError == true ? "Enter a valid email." : ''}
              onChange={(e) => emailHandler(e.target.value)}
            /><br /><br />

            {/* Subject */}
            <TextField
              error={subjectError}
              color="success"
              label="Subject"
              placeholder='Enter subject of message...'
              helperText={subjectError == true ? "Subject cannot be empty." : ''}
              onChange={(e) => subjectHandler(e.target.value)}
            /><br /><br />

            {/* Message */}
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
            {/* End of Input */}

            {/* If alert exists,  add alert else null */}
            {PostMessageAlert ? <>{PostMessageAlert} <br /></> : null}

            <Button className="button" onClick={postMessageHandler}>Send</Button>
          </CardContent>
        </Card>

      </Grid>
    </Grid>
  )
}

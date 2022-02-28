import React,{useState} from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {

  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const emailHandler = (subject) => {
    setEmailError(false);
    setEmail(subject);
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
        /><br/><br/>
        <TextField
          error={subjectError}
          color="success"
          label="Subject"
          onChange={(e) => subjectHandler(e.target.value)}
        /><br/><br/>
        <TextField
          error={textError}
          color="success"
          label="Text"
          onChange={(e) => textHandler(e.target.value)}
        /><br/><br/>
        <Button className="clr_green" variant="contained">Send</Button>
      </Container></div>
  )
}

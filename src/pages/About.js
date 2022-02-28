import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function About() {
  return (
    <div>
      <Container maxWidth="lg" className="section">
        <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_brown_text">
          About Us
        </Typography>

        <Typography gutterBottom variant="h5" component="div" pt={2} pb={2} align="center" fontWeight={500} >
          The Butler & Chef Team is dedicated to transforming your day-to-day life into an easier and well adjusted lifestyle.
        </Typography>
        <Typography gutterBottom variant="h6" component="div" pt={2} pb={2} align="center" fontWeight={400} >
          Become your own butler by shoppig for ingredients and deciding on a recipe. Moreover, we will help you become your own chef by providing endless recipes ranging from chefs to your friends, and even creating your own recipes and sharing them with your followers.
        </Typography>

      </Container></div>
  )
}

import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function About() {
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

      {/* One Grid Item with Three Grid Items; Each containing a typography component */}
      <Grid item xs={3} className="clr_white" width="100%" backgroundColor="#5ACE7F">

        {/* Grid Item 1 */}
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="clr_white_text title">
            About Us
          </Typography>
        </Grid>

        {/* Grid Item 2 */}
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" component="div" pt={2} pb={2} align="center" fontWeight={500} className="clr_white_text subtitle">
            In the midst of the chaos we are living in, we had to think about how we can offer you order.
          </Typography>
        </Grid>

        {/* Grid Item 3 */}
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" component="div" pt={2} pb={2} align="center" fontWeight={400} className="clr_white_text">
            Become your own butler by shoppig for your kitchen and deciding on a recipe swiftly. <br />Moreover, we will help you become your own chef by creating and posting your own recipes to share.
          </Typography>
        </Grid>

      </Grid>
    </Grid>
  )
}

import Service from "../components/Service";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// import MuiImageSlider from 'mui-image-slider';
// // import { UserContext } from '../context/UserContext';

// const images = [
//     'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
//     'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
//     'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
//     'https://homepages.cae.wisc.edu/~ece533/images/barbara.png',
// ];

// <MuiImageSlider images={images}/>


export default function Home() {

  // const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Container maxWidth="sm" className="section">

        <Grid container rowSpacing={2} spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
            <Service />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Service />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Service />
          </Grid>

        </Grid>
      </Container>
      {/* <MuiImageSlider/> */}
      Services


    </div>
  )
}
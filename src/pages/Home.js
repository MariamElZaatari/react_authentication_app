import Service from "../components/Service";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import RecipeImage from "../assets/images/recipe.jpg";
import FridgeImage from "../assets/images/fridge.jpg";
import ShopImage from "../assets/images/shop.jpeg";
import SearchImage from "../assets/images/search.jpg";
import Typography from '@mui/material/Typography';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import '../assets/css/slider.css';



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
      <Container maxWidth="lg" className="section">
        <ImageSlider slides={SliderData} />
      </Container>
      <Container maxWidth="lg" className="section">

        <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="header clr_brown_text">
          Our Services
        </Typography>
        <Grid container
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '41vh' }}>

          <Grid item xs={12} sm={6} md={3}>
            <Service image={RecipeImage} name="Share Your Recipes" desc="Share your recipes with your friends, and wait for the feedback." />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Service image={FridgeImage} name="Manage Your Fridge" desc="Manage your fridge by adding products using a built-in barcode scanner." />
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <Service image={ShopImage} name="Shop Missing Ingredients" desc="Shop missing ingredients from our ButlerChef Shop with One Click Away." />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Service image={SearchImage} name="Find Quick Recipes" desc="Search for recipes based on the time and day or your fridge products." />
          </Grid>

        </Grid>
      </Container>
      {/* <MuiImageSlider/> */}
    </div>
  )
}
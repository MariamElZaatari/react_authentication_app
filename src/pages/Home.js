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

export default function Home() {

  return (
    <div>
      {/* Two Containers for Image Slider and Our Services*/}

      {/* Container 1 */}
      <Container maxWidth="lg" className="section">
        <ImageSlider slides={SliderData} />
      </Container>

      {/* Container 2 */}
      <Container maxWidth="lg" className="section">

        {/* Title */}
        <Typography gutterBottom variant="h4" component="div" pt={2} pb={2} align="center" fontWeight={300} className="header clr_brown_text">
          Our Services
        </Typography>

        {/* Grid with Four Grid Items; Each Item has a Service Component */}
        <Grid container
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '41vh' }}>

          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Service image={RecipeImage} name="Share Your Recipes" desc="Share your recipes with your friends, and wait for the feedback." />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Service image={FridgeImage} name="Manage Your Fridge" desc="Manage your fridge by adding products using a built-in barcode scanner." />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Service image={ShopImage} name="Shop Missing Ingredients" desc="Shop missing ingredients from our ButlerChef Shop with One Click Away." />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Service image={SearchImage} name="Find Quick Recipes" desc="Search for recipes based on the time and day or your fridge products." />
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}
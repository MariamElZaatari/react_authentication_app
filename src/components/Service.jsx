import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {

  // Assigning and declaring variables from props that are passed from parent component
  const name = props.name;
  const desc = props.desc;
  const image = props.image;

  return (
    // Card with Image as Card Media, and Name and Desc as Card Content 
    <Card className='card' type="service">

      <CardMedia
        component="img"
        height="140"
        image={image}
      />

      <CardContent height='45vw'>
        <Typography gutterBottom variant="h5" component="div" className="clr_brown_text">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>

    </Card>
  );
}
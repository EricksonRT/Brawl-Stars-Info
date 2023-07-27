import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function CardEvent({ props }) {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 100 + '%', height: 'auto' }} key={props.slot.id}>
        <CardMedia
          component="img"
          alt={props.slot.name}
          height="140"
          image={props.map.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.slot.name}
            {props.slot.emoji}
          </Typography>
          <Typography variant="p" color="text.primary">
            Inicio del evento:
            {props.startTime}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Cierre: {props.startTime}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

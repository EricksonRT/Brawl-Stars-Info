import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Grid } from '@mui/material';
import { formatDate } from '../Functions/Funtions';

export default function CardEvent({ props }) {
  return (
    <Grid item xs={4}>
      <Card
        sx={{ maxWidth: 100 + '%', height: 'auto' }}
        key={props.slot.id}
        elevation={5}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.slot.name}
          {props.slot.emoji}
        </Typography>
        <CardMedia
          component="img"
          alt={props.slot.name}
          height="140"
          image={props.map.environment.imageUrl}
        />
        <CardContent>
          <Grid container>
            <Grid display="flex" justifyContent="center" alignItems={'top'}>
              <Avatar
                sx={{ width: 100, height: 100, borderRadius: 3 }}
                src={props.map.imageUrl}
              />
              <Typography variant="body2" className="" color="text.primary">
                Comienzo
                <br />
                {formatDate(props.startTime)}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Fin
                <br /> {formatDate(props.endTime)}
              </Typography>{' '}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
}

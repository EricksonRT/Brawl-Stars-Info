import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Badge, Grid } from '@mui/material';
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
          loading="lazy"
          component="img"
          alt={props.slot.name}
          height="140"
          image={props.map.environment.imageUrl}
        />
        <CardContent>
          <Grid container>
            <Grid display="flex" justifyContent="center" alignItems={'top'}>
              <Badge
                className="badge"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'top',
                }}
                color="secondary"
                badgeContent={`Mapa: ${props.map.name}`}
              >
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 3,
                    marginTop: 2.5,
                  }}
                  src={props.map.imageUrl}
                />
              </Badge>
              <Typography variant="body2" className="" color="text.primary">
                Comienzo
                <br />
                {formatDate(props.startTime)}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Fin
                <br /> {formatDate(props.endTime)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </Grid>
  );
}

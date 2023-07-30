import { useEffect, useState } from 'react';
import { getEventsActives, getEventsUpcoming } from '../Functions/Funtions';
import Loading from '../Loading/Loading';
import CardEvent from '../CardEvent/CardEvent';
import { Grid, Typography } from '@mui/material';
// Con la función de getEvent, podemos pasarle el estado de setEvents, y eso hará que nos setee los valores de los eventos en su función

const Events = () => {
  const [events, setEvents] = useState(null);
  const [eventsUpcoming, setEventsUpcoming] = useState(null);
  useEffect(() => {
    getEventsActives(setEvents);
    getEventsUpcoming(setEventsUpcoming);
  }, []);
  console.log(events);
  return (
    <>
      <Typography mt={5} mb={2} variant={'h2'}>
        Activos
      </Typography>
      <Grid
        justifyContent="start"
        alignItems="center"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
      >
        {events === null ? (
          <Loading />
        ) : (
          events.map((event) => <CardEvent props={event} key={event.slot.id} />)
        )}
      </Grid>
      <Typography mt={5} mb={2} variant={'h2'}>
        Proximamente...
      </Typography>
      <Grid
        justifyContent="start"
        alignItems="center"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
      >
        {eventsUpcoming === null ? (
          <Loading />
        ) : (
          eventsUpcoming.map((eventsUp) => <CardEvent props={eventsUp} key={eventsUp.slot.id} />)
        )}
      </Grid>
    </>
  );
};
export default Events;

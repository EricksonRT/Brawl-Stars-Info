import { useEffect, useState } from 'react';
import getEventsActives from '../Functions/Funtions';
import Loading from '../Loading/Loading';
import CardEvent from '../CardEvent/CardEvent';
import { Grid } from '@mui/material';
// Con la función de getEvent, podemos pasarle el estado de setEvents, y eso hará que nos setee los valores de los eventos en su función

const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    getEventsActives(setEvents);
  }, []);
  console.log(events);
  return (
    <>
      <h1>Events</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
      >
        {events === null ? (
          <Loading />
        ) : (
          events.map((event) => (
            <CardEvent props={event} />
            // <div className="div" key={event.slot.id}>
            //   {event.slot.name}
            //   {event.slot.emoji}
            //   {event.slot.hash}
            //   {event.slot.listAlone}
            //   {event.slot.hideable}
            //   {event.slot.hideForSlot}
            //   {event.slot.background}
            //   {event.startTime}
            //   {event.endTime}
            // </div>
          ))
        )}
      </Grid>
    </>
  );
};
export default Events;

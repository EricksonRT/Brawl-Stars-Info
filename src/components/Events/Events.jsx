import { useEffect, useState } from 'react';
import getEventsActives from '../Functions/Funtions';
import Loading from '../Loading/Loading';
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
      <div className="container">
        <div className="component">
          {events === null ? (
            <Loading />
          ) : (
            events.map((event) => (
              <div className="div" key={event.slot.id}>
                {event.slot.name}
                {event.slot.emoji}
                {event.slot.hash}
                {event.slot.listAlone}
                {event.slot.hideable}
                {event.slot.hideForSlot}
                {event.slot.background}
                {event.startTime}
                {event.endTime}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default Events;

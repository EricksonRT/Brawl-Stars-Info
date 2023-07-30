import { Grid, Typography } from '@mui/material';
import Loading from '../Loading/Loading';
import { useEffect, useState } from 'react';
import { getBrawlers } from '../Functions/Funtions';
import BrawlersListContainer from '../BrawlersListContainer/BrawlersListContainer';

const Brawlers = () => {
  const [brawlers, setBrawlers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getBrawlers()
      .then((response) => response.json())
      .then((brawlers) => setBrawlers(brawlers))
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }, []);
  return (
    <Grid mt={5}>
      {isLoading == true && brawlers == null ? (
        <Loading />
      ) : (
        <BrawlersListContainer props={brawlers} />
      )}
    </Grid>
  );
};
export default Brawlers;

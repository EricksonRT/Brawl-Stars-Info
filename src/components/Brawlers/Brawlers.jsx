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
      .then((brawlers) => setBrawlers(brawlers.list))
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }, []);
  return (
    <>
      <Typography mt={5} mb={2} variant={'h2'}>
        Lista de Brawlers
      </Typography>
      <Grid
        gap={3}
        mt={5}
        display={'flex'}
        justifyContent={'center'}
        flexWrap={'wrap'}
        alignItems={'center'}
      >
        {isLoading ? (
          <Loading />
        ) : (
          brawlers != null &&
          brawlers.map((brawl) => (
            <BrawlersListContainer key={brawl.id} props={brawl} />
          ))
        )}
        .
      </Grid>
    </>
  );
};
export default Brawlers;

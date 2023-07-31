import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getBrawlers } from '../Functions/Funtions';
import Loading from '../Loading/Loading';
const BrawlerDetailContainer = () => {
  const { brawlerName } = useParams();
  const [dataBrawler, setDataBrawler] = useState(['']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBrawlers()
      .then((response) => response.json())
      .then((brawler) =>
        setDataBrawler(
          brawler.list.filter((brawler) => brawler.name === brawlerName),
          setIsLoading(!true)
        )
      )
      .catch((err) => console.log(err));
  }, [brawlerName]);
  console.log(dataBrawler[0]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid
          container
          xs={12}
          mt={5}
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          margin={'20 auto'}
          width={'100%'}
        >
          <Box>
            <CardMedia
              // width={10}
              loading="eager"
              component="img"
              height="350"
              image={dataBrawler[0].imageUrl2}
              alt={dataBrawler[0].name}
            />
          </Box>
          <Box m={'0 1%'}>
            <Typography component={'h4'} variant="h4" textAlign={'center'}>
              Información de {dataBrawler[0]?.name}
            </Typography>
            <Grid
              mt={3}
              // display={'flex'}
              alignContent={'center'}
              alignItems={'center'}
              flexWrap={'wrap'}
            >
              <Typography component={'div'} variant="p" fontWeight={600}>
                {/* Este operador permite leer la propiedad class de dataBrawler[0] sin causar un error si dataBrawler[0] es null o undefined. */}
                Tipo de brawler: {dataBrawler[0]?.class?.name}
              </Typography>
              <Typography component={'div'} variant="p" fontWeight={600}>
                Categoria: {dataBrawler[0]?.rarity?.name}
              </Typography>
              <Typography component={'div'} variant="p" fontWeight={600}>
                Descripción: {dataBrawler[0]?.description}
              </Typography>
            </Grid>
          </Box>
        </Grid>
      )}

      <Grid display={'flex'} alignContent={'flex-start'}>
        <Link to={'/brawlers/'}>
          <ArrowBackIcon color="primary" />
          <Button color="primary">Volver</Button>
        </Link>
      </Grid>
    </>
  );
};
export default BrawlerDetailContainer;

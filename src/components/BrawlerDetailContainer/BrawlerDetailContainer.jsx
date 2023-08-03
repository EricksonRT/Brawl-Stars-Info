import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getBrawlers } from '../Functions/Funtions';
import Loading from '../Loading/Loading';
import Modal_Info from './Modal_Info';
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
          className="glassContainer"
          container
          // xs={12}
          mt={5}
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          margin={'20 auto'}
          width={'100%'}
          alignItems={'center'}
        >
          <Box>
            <CardMedia
              className="glassIcon"
              loading="eager"
              component="img"
              height="300em"
              image={dataBrawler[0].imageUrl2}
              alt={dataBrawler[0].name}
              sx={{ borderRadius: '50%' }}
            />
          </Box>
          <Box m={'0 1%'}>
            <Typography component={'h4'} variant="h4" textAlign={'center'}>
              Información de {dataBrawler[0]?.name}
            </Typography>
            <Grid
              mt={3}
              // display={"flex"}
              // alignContent={"space-between"}
              // alignItems={"center"}
              // flexWrap={"wrap"}
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
            <Grid
              container
              display={'flex'}
              flexDirection={'col'}
              flexWrap={'wrap'}
              alignItems={'center'}
            >
              <Grid item xs display={'grid'} gridColumn={'auto'}>
                <CardMedia
                  sx={{ margin: 'auto' }}
                  className="img-gadget"
                  loading="lazy"
                  component="img"
                  height="50px"
                  image={dataBrawler[0].gadgets[0].imageUrl}
                  alt={dataBrawler[0].name}
                />
                <Typography
                  component={'p'}
                  variant="p"
                  fontWeight={600}
                  fontStyle={'italic'}
                >
                  Gadgets
                </Typography>
                <Typography mt={3} component={'div'} variant="p">
                  {/* Muestra los gadgets */}
                  <Modal_Info
                    icon={dataBrawler[0]?.gadgets[0]?.imageUrl}
                    name={dataBrawler[0]?.gadgets[0]?.name}
                    description={dataBrawler[0]?.gadgets[0]?.descriptionHtml}
                  />
                </Typography>
                <Typography mt={1} component={'div'} variant="p">
                  <Modal_Info
                    icon={dataBrawler[0]?.gadgets[0]?.imageUrl}
                    name={dataBrawler[0]?.gadgets[1]?.name}
                    description={dataBrawler[0]?.gadgets[1]?.descriptionHtml}
                  />
                </Typography>
              </Grid>

              <Divider orientation="vertical" flexItem></Divider>
              <Grid item xs mb={7}>
                <CardMedia
                  sx={{ margin: 'auto' }}
                  className="img-gadget"
                  loading="lazy"
                  component="img"
                  height="50px"
                  image={dataBrawler[0].starPowers[0].imageUrl}
                  alt={dataBrawler[0].name}
                />
                <Typography component={'div'} variant="p" fontWeight={600}>
                  Habilidades Estelares
                </Typography>
                <Typography mt={3} component={'div'} variant="p">
                  {/* Renderiza el contenido html */}
                  <Modal_Info
                    icon={dataBrawler[0]?.starPowers[0]?.imageUrl}
                    name={dataBrawler[0]?.starPowers[0]?.name}
                    description={dataBrawler[0]?.starPowers[0]?.descriptionHtml}
                  />
                </Typography>
                <Typography mt={1} component={'div'} variant="p">
                  <Modal_Info
                    icon={dataBrawler[0]?.starPowers[1]?.imageUrl}
                    name={dataBrawler[0]?.starPowers[1]?.name}
                    description={dataBrawler[0]?.starPowers[1]?.descriptionHtml}
                  />
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      )}

      <Grid mt={5} display={'flex'} alignContent={'flex-start'}>
        <Link to={'/brawlers/'}>
          <ArrowBackIcon color="primary" />
          <Button color="primary">Volver</Button>
        </Link>
      </Grid>
    </>
  );
};
export default BrawlerDetailContainer;

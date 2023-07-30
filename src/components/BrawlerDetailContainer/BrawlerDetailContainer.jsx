import { Box, Button, CardMedia, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getBrawlers } from "../Functions/Funtions";
import Loading from "../Loading/Loading";
const BrawlerDetailContainer = () => {
  const { brawlerName } = useParams();
  const [dataBrawler, setDataBrawler] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBrawlers()
      .then((response) => response.json())
      .then((brawler) =>
        setDataBrawler(
          brawler.list.filter((brawler) => brawler.name === brawlerName)
        )
      )
      .catch((err) => console.log(err))
      .finally(setIsLoading(!true));
  }, [brawlerName]);
  console.log(dataBrawler[0]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid mt={5}>
          <Box>Información de {dataBrawler[0].name}</Box>
          <CardMedia
            loading="eager"
            component="img"
            height="194"
            image={dataBrawler[0].imageUrl2}
            alt="Paella dish"
          />
        </Grid>
      )}

      <Grid display={"flex"} alignContent={"flex-start"}>
        <Link to={"/brawlers/"}>
          <ArrowBackIcon color="primary" />
          <Button color="primary">Volver</Button>
        </Link>
      </Grid>
    </>
  );
};
export default BrawlerDetailContainer;

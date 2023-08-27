import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getGameModes } from "../Functions/Funtions";
import Loading from "../Loading/Loading";
const GameModeDetailContainer = () => {
  const { idGameMode } = useParams();
  const [datagameMode, setGameMode] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGameModes()
      .then((response) => response.json())
      .then((gamemode) =>
        setGameMode(
          gamemode.list.filter((gmode) => gmode.id === parseInt(idGameMode)),
          setIsLoading(false)
        )
      )
      .catch((err) => console.log(err));
  }, [idGameMode]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid
          className="glassContainer-gmodes"
          boxShadow={"0 1px 12px 0" + datagameMode[0]?.bgColor}
          container
          mt={5}
          pb={3.7}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          margin={"20 auto"}
          width={"100%"}
          alignItems={"center"}
        >
          <Box>
            <CardMedia
              className="glassIcon"
              loading="eager"
              component="img"
              height="300em"
              image={datagameMode[0]?.imageUrl2}
              alt={datagameMode[0]?.name}
              sx={{}}
            />
          </Box>
          <CardMedia
            className="glassIcon"
            loading="eager"
            component="img"
            height="auto"
            image={datagameMode[0]?.imageUrl}
            alt={datagameMode[0]?.name}
            sx={{ mb: 7, width: "20% !important", position: "absolute" }}
          />
          <Box m={"5% 1% 5%"}>
            <Grid mt={5} mb={"-5%"}>
              <Typography component={"h4"} variant="h4" textAlign={"center"}>
                Información de{" "}
                <span style={{ color: datagameMode[0]?.color }}>
                  {datagameMode[0]?.name}
                </span>
              </Typography>
              <Typography component={"div"} variant="p" fontWeight={600}>
                Tipo de mapa: {datagameMode[0]?.title}
              </Typography>
              <Typography component={"div"} variant="p" fontWeight={600}>
                Descripción simple: {datagameMode[0]?.shortDescription}
              </Typography>
              <Typography mt={2} component={"div"} variant="p" fontWeight={600}>
                Descripción completa: {datagameMode[0]?.description}
              </Typography>
            </Grid>
          </Box>
        </Grid>
      )}

      <Grid mt={5} display={"flex"} alignContent={"flex-start"}>
        <Link to={"/game-modes/"}>
          <ArrowBackIcon color="primary" />
          <Button color="primary">Volver</Button>
        </Link>
      </Grid>
    </>
  );
};

export default GameModeDetailContainer;

import { useEffect, useState } from "react";
import { getGameModes } from "../components/Functions/Funtions";
import GamesModesListContainer from "../components/GameModesListContainer/GamesModesListContainer";
import Loading from "../components/Loading/Loading";
import { Grid, Typography } from "@mui/material";

const GameModes = () => {
  const [gamesmode, setGameModes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getGameModes()
      .then((response) => response.json())
      .then((gamemodes) => setGameModes(gamemodes.list))
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }, []);
  return (
    <>
      <Typography mt={5} mb={2} variant={"h2"}>
        Modos de juego disponibles
      </Typography>
      <Grid
        gap={3}
        mt={5}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        alignItems={"center"}
      >
        {isLoading ? (
          <Loading />
        ) : (
          gamesmode != null &&
          gamesmode.map((gmode) => (
            <GamesModesListContainer key={gmode.id} props={gmode} />
          ))
        )}
        .
      </Grid>
    </>
  );
};
export default GameModes;

import { Grid } from "@mui/material";
import fondobg from "./../../assets/img/brawl-stars.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-home"></div>
      <Grid mt={1.5}>
        <div style={{ position: "relative", top: "-450px" }}>
          <h1 className="txt-center">Descubre Brawlers, Mapas y más</h1>
        </div>
        <h1>Todo en un solo lugar</h1>
        <span>
          Actualmente la información se encuentra en inglés, la idea es poder
          traducirla en un futuro
        </span>
      </Grid>
    </>
  );
};
export default Home;

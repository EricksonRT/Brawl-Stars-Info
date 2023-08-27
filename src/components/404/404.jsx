import { Button, Grid } from "@mui/material";
import "./404.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
const NOT_FOUND_404 = () => {
  return (
    <>
      <Grid mt={5} position={"relative"}>
        <div className="notfound-container">
          <div className="notfound-title">404</div>
          <div className="notfound-description" style={{ fontWeight: 600 }}>
            Página no encontrada
          </div>
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="10"
              y1="10"
              x2="90"
              y2="90"
              stroke="red"
              stroke-width="10"
            />
            <line
              x1="90"
              y1="10"
              x2="10"
              y2="90"
              stroke="red"
              stroke-width="10"
            />
          </svg>
        </div>
      </Grid>
      <Grid mt={5} display={"flex"} alignContent={"flex-start"}>
        <Link to={"/"}>
          <ArrowBackIcon color="primary" />
          <Button color="primary">Volver</Button>
        </Link>
      </Grid>
    </>
  );
};

export default NOT_FOUND_404;

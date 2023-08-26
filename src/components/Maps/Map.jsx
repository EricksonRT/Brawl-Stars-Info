import { Grid } from "@mui/material";

const Map = ({ props }) => {
  console.log(props);
  return (
    <>
      <Grid mt={5}>
        <div className="card">
          <div className="tagMap">
            <img
              className="logo-game"
              src={props?.gameMode?.imageUrl}
              alt={props?.name}
            />
            <span>{props?.gameMode?.hash}</span>
          </div>
          <img
            className="image-map"
            src={props?.imageUrl}
            alt={props?.name}
            loading="lazy"
          />
          <span>{props?.name}</span>
          <span>versión:{props?.version}</span>
          <span>Credits: {props.credit === null ? "None" : props.credit}</span>
        </div>
      </Grid>
    </>
  );
};

export default Map;

import { Grid } from '@mui/material';

const Map = ({ props }) => {
  console.log(props);
  return (
    <>
      <Grid mt={5} key={props.id}>
        <div className="card">
          <span>{props.credit}</span>
          <span>{props.gameMode.hash}</span>
          <img
            className="logo-game"
            src={props.gameMode.imageUrl}
            alt={props.name}
          />
          <span>{props.name}</span>
          <span>{props.version}</span>
          <img className="image-map" src={props.imageUrl} alt={props.name} />
          <span>{props.name}</span>
        </div>
      </Grid>
    </>
  );
};

export default Map;

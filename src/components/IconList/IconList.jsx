import { CardMedia, Grid, ImageListItemBar } from '@mui/material';
import './iconList.css';
const IconList = ({ props }) => {
  return (
    <>
      <Grid mt={2}>
        <div className="hover-container">
          <CardMedia
            width={'100%'}
            component="img"
            height="auto"
            image={props.imageUrl}
            alt={`icon name- ${props.name}`}
            loading="lazy"
          />
          <ImageListItemBar
            className="float-name"
            position="below"
            title={`${props.name ? props.name : 'No contiene'}`}
          />
        </div>
      </Grid>
    </>
  );
};
export default IconList;

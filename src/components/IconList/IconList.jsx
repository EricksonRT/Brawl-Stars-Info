import {
  CardMedia,
  Grid,
  ImageListItem,
  ImageListItemBar,
  ListItem,
  MenuItem,
} from "@mui/material";
import "./iconList.css";
const IconList = ({ props }) => {
  return (
    <>
      <Grid mt={2}>
        <CardMedia
          width={"100%"}
          component="img"
          height="auto"
          image={props.imageUrl}
          alt="green iguana"
          loading="lazy"
        />
        {/* <ImageListItemBar position="below" title={props.name} /> */}
      </Grid>
    </>
  );
};
export default IconList;

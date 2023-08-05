import {
  CardMedia,
  Grid,
  ImageListItem,
  ImageListItemBar,
  ListItem,
} from '@mui/material';

const IconList = ({ props }) => {
  return (
    <>
      <Grid display={'grid'} justifyItems={'center'}>
        <CardMedia
          component="img"
          height="140"
          image={props.imageUrl}
          alt="green iguana"
        />
        <ImageListItemBar position="below" title={props.name} />
      </Grid>
    </>
  );
};
export default IconList;

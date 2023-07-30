import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const BrawlersListContainer = ({ props }) => {
  console.log(props);
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 145, mb: '15%' }}>
          <CardActionArea>
            <CardMedia
              loading="lazy"
              component="img"
              width={100 + '%'}
              height="auto"
              image={props.imageUrl}
              alt={props.name}
            />
            <CardContent sx={{ backgroundColor: props.rarity.color }}>
              <Badge
                className="badgeInfo"
                sx={{ mb: -11, height: 4 }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={props.class.name}
              ></Badge>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={600}
              >
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};
export default BrawlersListContainer;

import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const GamesModesListContainer = ({ props }) => {
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 145, mb: "15%" }}>
          <Link className="link" to={`/game-modes/${props?.id}/`}>
            <CardActionArea sx={{ height: "10% !important" }}>
              <CardMedia
                loading="lazy"
                component="img"
                width={100 + "%"}
                height="auto"
                image={props?.imageUrl}
                alt={props?.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight={600}
                >
                  {props?.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Box>
    </>
  );
};
export default GamesModesListContainer;

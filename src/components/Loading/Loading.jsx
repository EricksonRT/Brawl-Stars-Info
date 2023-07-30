import { Box, Grid, Typography } from '@mui/material';
import './loading.css';
const Loading = () => {
  return (
    <Grid justifyContent="center" container>
      <Box mt={2}>
        <div className="loader">
          <div className="border"></div>
          <div className="loader-inner">
            <div className="image"></div>
          </div>
        </div>
        <Typography mt={0.9} variant="h6" fontWeight={550}>
          Cargando, espere un momento...
        </Typography>
      </Box>
    </Grid>
  );
};
export default Loading;

import { Box, Typography } from '@mui/material';

const BrawlersListContainer = ({ props }) => {
  console.log(props);
  return (
    <>
      <Box>
        <Typography mb={2} variant={'h2'}>
          Lista de Brawlers
        </Typography>
      </Box>
    </>
  );
};
export default BrawlersListContainer;

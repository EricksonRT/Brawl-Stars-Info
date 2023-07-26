import { Container, Typography, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#f8f8f8',
      py: 3, // padding vertical
      mt: 2, // margin top
    }}
    component="footer"
  >
    <Container maxWidth="xs">
      <Typography variant="h6" color="text.primary" align="center">
        Brawl-Stars-info
      </Typography>
      <Typography variant="p" color="text.secondary" align="juastify">
        Ésta aplicación usa la API de{' '}
        <Link component={'www'} to="/acerca-de" color="inherit">
          Brawlify
        </Link>{' '}
        cualquier cambio o limitación de la misma, será por cuestiones de la
        misma
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {/* Asegúrate de reemplazar estas rutas y nombres con los tuyos */}
        <Link component={RouterLink} to="/acerca-de" color="inherit">
          Acerca de
        </Link>{' '}
        |{' '}
        <Link component={RouterLink} to="/contacto" color="inherit">
          Contacto
        </Link>{' '}
        |{' '}
        <Link component={RouterLink} to="/privacidad" color="inherit">
          Política de Privacidad
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Tu Compañía
      </Typography>
    </Container>
  </Box>
);

export default Footer;

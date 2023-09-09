import { Container, Typography, Box, Link, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// Color anterior: f8f8f8
const Footer = () => (
  <Grid display={"flex"} justifyContent={"center"}>
    <Box
      className="color-white"
      sx={{
        backgroundColor: "#1976d2",
        py: 10, // padding vertical
        mt: 10, // margin top
        mb: -4,
        width: 100 + "%",
        height: 100,
      }}
      component="footer"
    >
      <Container maxWidth="sx" spacing={0}>
        <Typography variant="h6" color="text.white" align="center">
          Brawl-Stars-info
        </Typography>
        <Typography variant="p" color="text.white" align="justify">
          Ésta aplicación usa la API de{" "}
          <Link
            component={RouterLink}
            target="_blank"
            to="https://brawlify.com/es/"
            color="inherit"
          >
            Brawlify
          </Link>{" "}
          cualquier cambio, limitación u otro alteramiento en la visibilidad de
          los datos, será por cuestiones de la misma.
        </Typography>
        <Typography variant="body2" color="text.white" align="center">
          <a
            href="https://github.com/EricksonRT"
            style={{ color: "white" }}
            target="_blank"
          >
            Github
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/eric-irusta/"
            target="_blank"
            style={{ color: "white" }}
          >
            LinkedIn
          </a>{" "}
        </Typography>
        <Typography variant="body3" color="text.white" align="center">
          © 2023 - {new Date().getFullYear()} Desarrollado por Eric L. Irusta
        </Typography>
      </Container>
    </Box>
  </Grid>
);

export default Footer;

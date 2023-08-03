import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia, Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "1px ridge #000000",
  borderRadius: "56px",
  p: 4,
};

export default function Modal_Info({ icon, name, description }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Grid
        width={"99%"}
        margin={"0 auto"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <CardMedia
          // sx={{ margin: "auto" }}
          className="img-gadget-icon"
          loading="lazy"
          component="img"
          image={icon}
          alt={name}
        />
        <Button sx={{ textTransform: "capitalize" }} onClick={handleOpen}>
          {name}
        </Button>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

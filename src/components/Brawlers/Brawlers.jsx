import { Grid } from "@mui/material";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { getBrawlers } from "../Functions/Funtions";

const Brawlers = () => {
  const [brawlers, setBrawlers]=useState(null);
  useEffect(()=>{
    getBrawlers(setBrawlers); 
  },[])
  console.log(brawlers);
  return (
    <Grid mt={5}>
    <Loading/>
    </Grid>
  );
};
export default Brawlers;

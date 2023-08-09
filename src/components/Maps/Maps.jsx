import { useEffect, useState } from "react";
import { getMaps } from "../Functions/Funtions";
import { Grid, Tab, Tabs } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const Maps = () => {
  const [maps, setMaps] = useState([""]);
  const [initialValue, setValue] = useState("active");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    getMaps()
      .then((data) => {
        if (data.ok == true) {
          return data.json();
        } else {
          throw new Error();
        }
      })
      .then((mapsJson) => setMaps(mapsJson.list))
      .catch();
  }, []);
  const options = [
    { optionEng: "active", optionpanish: "Activos" },
    { optionEng: "disabled", optionpanish: "No disponibles" },
  ];
  console.log({ ...maps });
  return (
    <>
      <Grid mt={5}>
        <h1>Maps</h1>
        <Tabs value={initialValue} onChange={handleChange} centered>
          {options.map((option) => (
            <Tab
              label={option.optionpanish}
              key={option.optionpanish}
              value={option.optionEng}
            />
          ))}
        </Tabs>
      </Grid>
    </>
  );
};
export default Maps;

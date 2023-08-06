import { Box, Grid, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { getIcons } from "../Functions/Funtions";
import IconList from "../IconList/IconList";
import Loading from "../Loading/Loading";

const Icons = () => {
  // Por defecto, trae a jugadores
  const [initialValue, setValue] = useState("player");
  const [icons, setIcons] = useState([""]);
  const [loading, setLoading] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const options = [
    { tag: "player", tagSpanish: "Jugadores" },
    { tag: "club", tagSpanish: "Club" },
  ];

  useEffect(() => {
    getIcons()
      .then((data) => data.json())
      .then((iconsJson) => {
        if (iconsJson != null)
          setIcons(iconsJson[initialValue], setLoading(false));
      })
      .catch();
  }, [initialValue]);

  return (
    <>
      <Box mt={5} sx={{ width: "100%", bgcolor: "background.paper" }}>
        <h1>Lista de iconos</h1>
        <Tabs value={initialValue} onChange={handleChange} centered>
          {options.map((option) => (
            <Tab
              label={option.tagSpanish}
              key={option.tag}
              value={option.tag}
            />
          ))}
        </Tabs>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid">
            {
              // Esto va cambiando según el filtro, como es un objeto que engloba     otros objetos, accede desde el valor de cada uno
              Object.values(icons).map((iconValue) => (
                <IconList key={`iconList-${iconValue.id}`} props={iconValue} />
              ))
            }
          </div>
        )}
      </Box>
    </>
  );
};
export default Icons;

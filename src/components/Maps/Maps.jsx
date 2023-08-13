import { useEffect, useState } from 'react';
import { getMaps } from '../Functions/Funtions';
import { Grid, Tab, Tabs } from '@mui/material';
import Loading from '../Loading/Loading';
import Map from './Map';

const Maps = () => {
  const [initialValue, setValue] = useState(true);
  const [mapFiltered, setMapFiltered] = useState(['']);
  const [loading, setLoading] = useState(true);
  // Este método, recibe el array de objetos de la api, y también el valor inicial que le damos, sea true o false, para filstrar por el estado de "disabled"
  // Y por ultimo setea mapfiltered con el filtro correspondiente, sea activos o desactivados
  const sendFilter = (maps, value) => {
    console.log(value);
    const listmap = { ...maps };
    const filter = Object.values(listmap).filter(
      (listM) => listM.disabled === value
    );
    setMapFiltered(filter);
  };
  // Este metodo maneja el estado de activos o desactivados
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
      .then(
        (mapsJson) => sendFilter(mapsJson.list, initialValue),
        setLoading(false)
      )
      .catch();
  }, [initialValue]);
  const options = [
    { optionEng: true, optionpanish: 'Activos' },
    { optionEng: false, optionpanish: 'No disponibles' },
  ];

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
        <div className="gallery">
          {loading ? (
            <Loading />
          ) : (
            mapFiltered.map((map) => <Map props={map} />)
          )}
        </div>
      </Grid>
    </>
  );
};
export default Maps;

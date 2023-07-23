require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const port = 5000;

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  console.log('asdsa');
  axios({
    method: 'GET',
    url: `https://api.brawlstars.com/v1/players/${tagPlayer}/battlelog    `,
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjUyYTgyNjQzLWMyYWMtNGY2YS04MTA4LTM3ZWFlYWQwZDE0YiIsImlhdCI6MTY4OTg5MjU2MSwic3ViIjoiZGV2ZWxvcGVyLzlkMDBhMmQyLTk4ZmYtZTNhNi02ZWM1LWFhN2ExNDljMzQ0NCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMjU1LjI1NS4yNTUuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VF75L0qlEYKz5KJlU3F283qBtOsZYok5NFMniwuxfeXNJsaV3-y0eJ9uNZcHzUEszFNhy0SVlX1TcJJNXcwdlQ',
    },
  })
    .then(function (response) {
      // envía la respuesta como HTML
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.send(error);
    });
});

// Configuración incial para hacer petición GET usando el http de node
const tagPlayer = 'Erick';

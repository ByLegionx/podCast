const express = require('express');
const axios = require('axios');
const cache = require('memory-cache');
const app = express();



app.get('/api', async (req, res) => {
  //const id = req.params.id

  const cacheKey = `api_data`;
  const cachedData = cache.get(cacheKey);


  if (cachedData) {
      console.log('La respuesta está en caché');
      res.json(cachedData);
    } else {
      console.log('La respuesta no está en caché');
          try {
              const response = await axios.get(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);
              const responseData = response.data;
              cache.put(cacheKey, responseData, 24 * 60 * 60 * 1000);    
              res.json(responseData);
          }
          catch(error) {
              console.error(error);
              res.status(500).send('Error al obtener los datos');
          }
        }
      
});


app.get('/api/:id', async (req, res) => {
    const id = req.params.id
  
    const cacheKey = `api_data_${id}`;
    const cachedData = cache.get(cacheKey);

  
    if (cachedData) {
      
        console.log('La respuesta está en caché');
        res.json(cachedData);
      } else {
        
        console.log('La respuesta no está en caché');
            try {
                const response = await axios.get(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=200`);
                
                const responseData = response.data;
                cache.put(cacheKey, responseData, 24 * 60 * 60 * 1000);    
                res.json(responseData);
            }
            catch(error) {
                console.error(error);
                res.status(500).send('Error al obtener los datos');
            }
        
        }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
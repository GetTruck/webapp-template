const { Nuxt } = require('nuxt');
const express = require('express');
const cors = require('cors');

const app = express();

const nuxt = new Nuxt({ mode: 'universal', dev: false });

app.use(cors());
app.use(nuxt.render);

app.listen(8000, () => console.log('Server listening'));

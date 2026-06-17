const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.DB)
  .then(() => {
      app.listen(3000);
      console.log('Berjalan di port 3000')
  })
  .catch(err => console.error('Gagal terhubung:', err));

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const mahasiswaRoutes = require('./routes/mahasiswa.js');
const dosenRoutes = require('./routes/dosen.js');
const matakuliahRoutes = require('./routes/matakuliah.js');
const indexController = require('./controller/indexController.js');

app.use('/mahasiswa', mahasiswaRoutes);
app.use('/dosen', dosenRoutes);
app.use('/matakuliah', matakuliahRoutes);

app.get('/', indexController.renderDashboard);

module.exports = app;
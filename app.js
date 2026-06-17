const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const path = require('path'); 

dotenv.config();

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    try {
        await mongoose.connect(process.env.DB);
        console.log('MongoDB Atlas Terhubung');
    } catch (err) {
        console.error('Gagal terhubung:', err);
    }
};

app.use(async (req, res, next) => {
    await connectDB();
    next();
});

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

const mahasiswaRoutes = require('./routes/mahasiswa.js');
const dosenRoutes = require('./routes/dosen.js');
const matakuliahRoutes = require('./routes/matakuliah.js');
const indexController = require('./controller/indexController.js');

app.use('/mahasiswa', mahasiswaRoutes);
app.use('/dosen', dosenRoutes);
app.use('/matakuliah', matakuliahRoutes);

app.get('/', indexController.renderDashboard);

if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => {
        console.log('Berjalan di port 3000');
    });
}

module.exports = app;
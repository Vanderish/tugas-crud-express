const dosen = require('../model/dosen.model.js');
const matakuliah = require('../model/matakuliah.model.js');
const mahasiswa = require('../model/mahasiswa.model.js');

exports.renderDashboard = async (req, res) => {
  try {
    const dataDosen = await dosen.find();
    const dataMatakuliah = await matakuliah.find().populate('pengajar_id');
    const dataMahasiswa = await mahasiswa.find().populate('mk_diambil');

    res.render('index', {
      dataDosen,
      dataMatakuliah,
      dataMahasiswa,
      listDosen: dataDosen,
      listMatakuliah: dataMatakuliah
    });
  } catch (error) {
    res.status(500).send('Terjadi kesalahan pada server: ' + error.message);
  }
};
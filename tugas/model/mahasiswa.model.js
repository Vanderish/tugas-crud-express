const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nrp: { type: String, required: true, unique: true },
  nama: { type: String, required: true },
  mk_diambil: [{ type: String, ref: 'Matakuliah' }]
}, { timestamps: true });

module.exports = mongoose.model('Mahasiswa', mahasiswaSchema);
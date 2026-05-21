const mongoose = require('mongoose');

const matakuliahSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nama_mk: { type: String, required: true },
  pengajar_id: { type: String, ref: 'Dosen', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Matakuliah', matakuliahSchema);
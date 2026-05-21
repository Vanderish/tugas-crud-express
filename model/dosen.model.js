const mongoose = require('mongoose');

const dosenSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nip: { type: String, required: true, unique: true },
  nama: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Dosen', dosenSchema);
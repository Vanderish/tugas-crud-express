const mahasiswa = require('../model/mahasiswa.model.js');

exports.createMahasiswa = async (req, res) => {
  try {
    const mhsBaru = new mahasiswa(req.body);
    await mhsBaru.save();
    res.redirect('/'); 
  } catch (error) {
    res.status(500).send(`Gagal menambahkan mahasiswa: ${error.message}`);
  }
};

exports.getAllMahasiswa = async (req, res) => {
  try {
    const dataMahasiswa = await mahasiswa.find().populate('mk_diambil', 'nama_mk pengajar_id');
    res.status(200).json({ data: dataMahasiswa });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getMahasiswaById = async (req, res) => {
  try {
    const dataMahasiswa = await mahasiswa.findById(req.params.id).populate('mk_diambil', 'nama_mk pengajar_id');
    if (!dataMahasiswa) return res.status(404).send('Mahasiswa tidak ditemukan');
    res.status(200).json({ data: dataMahasiswa });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateMahasiswa = async (req, res) => {
  try {
    const dataMahasiswa = await mahasiswa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dataMahasiswa) return res.status(404).send('Mahasiswa tidak ditemukan');
    res.redirect('/'); 
  } catch (error) {
    res.status(500).send(`Gagal memperbarui mahasiswa: ${error.message}`);
  }
};

exports.deleteMahasiswa = async (req, res) => {
  try {
    const dataMahasiswa = await mahasiswa.findByIdAndDelete(req.params.id);
    if (!dataMahasiswa) return res.status(404).send('Mahasiswa tidak ditemukan');
    res.redirect('/'); 
  } catch (error) {
    res.status(500).send(`Gagal menghapus mahasiswa: ${error.message}`);
  }
};
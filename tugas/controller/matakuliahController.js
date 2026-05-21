const matakuliah = require('../model/matakuliah.model.js');

exports.createMatakuliah = async (req, res) => {
  try {
    const mkBaru = new matakuliah(req.body);
    await mkBaru.save();
    res.redirect('/'); 
  } catch (error) {
    res.status(500).send(`Gagal menambahkan matakuliah: ${error.message}`);
  }
};

exports.getAllMatakuliah = async (req, res) => {
  try {
    const dataMatakuliah = await matakuliah.find().populate('pengajar_id', 'nama nip');
    res.status(200).json({ data: dataMatakuliah });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getMatakuliahById = async (req, res) => {
  try {
    const dataMatakuliah = await matakuliah.findById(req.params.id).populate('pengajar_id', 'nama nip');
    if (!dataMatakuliah) return res.status(404).send('Matakuliah tidak ditemukan');
    res.status(200).json({ data: dataMatakuliah });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateMatakuliah = async (req, res) => {
  try {
    const dataMatakuliah = await matakuliah.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dataMatakuliah) return res.status(404).send('Matakuliah tidak ditemukan');
    res.redirect('/'); 
  } catch (error) {
    res.status(500).send(`Gagal memperbarui matakuliah: ${error.message}`);
  }
};

exports.deleteMatakuliah = async (req, res) => {
  try {
    const dataMatakuliah = await matakuliah.findByIdAndDelete(req.params.id);
    if (!dataMatakuliah) return res.status(404).send('Matakuliah tidak ditemukan');
    res.redirect('/'); 
  } catch (error) {
    res.status(500).send(`Gagal menghapus matakuliah: ${error.message}`);
  }
};
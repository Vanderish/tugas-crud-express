const dosen = require('../model/dosen.model.js');

exports.createDosen = async (req, res) => {
  try {
    const dosenBaru = new dosen(req.body);
    await dosenBaru.save();
    res.redirect('/'); 
  } catch (error) {
    res.status(500).send(`Gagal menambahkan dosen: ${error.message}`);
  }
};

exports.getAllDosen = async (req, res) => {
  try {
    const dataDosen = await dosen.find();
    res.status(200).json({ data: dataDosen });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDosenById = async (req, res) => {
  try {
    const dataDosen = await dosen.findById(req.params.id);
    if (!dataDosen) return res.status(404).send('Dosen tidak ditemukan');
    res.status(200).json({ data: dataDosen });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDosen = async (req, res) => {
  try {
    const dataDosen = await dosen.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dataDosen) return res.status(404).send('Dosen tidak ditemukan');
    res.redirect('/'); 
  } catch (error) {
    res.status(500).send(`Gagal memperbarui dosen: ${error.message}`);
  }
};

exports.deleteDosen = async (req, res) => {
  try {
    const dataDosen = await dosen.findByIdAndDelete(req.params.id);
    if (!dataDosen) return res.status(404).send('Dosen tidak ditemukan');
    res.redirect('/'); 
  } catch (error) {
    res.status(500).send(`Gagal menghapus dosen: ${error.message}`);
  }
};
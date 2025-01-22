const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Contact', ContactSchema);

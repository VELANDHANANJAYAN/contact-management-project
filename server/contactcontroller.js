const mongoose = require('mongoose');
const Contact = require('../models/Contact');

// Get All Contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create Contact
const createContact = async (req, res) => {
  const { name, email, phone, location, status } = req.body;
  try {
    const newContact = await Contact.create({ name, email, phone, location, status });
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, location, status } = req.body;
  try {
    const updatedContact = await Contact.findByIdAndUpdate(id, { name, email, phone, location, status }, { new: true });
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Contact
const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search Contacts
const getContactByQuery = async (req, res) => {
  const { name, email, location, pincode } = req.query;
  try {
    const query = {};
    if (name) query.name = new RegExp(name, 'i');
    if (email) query.email = new RegExp(email, 'i');
    if (location) query.location = new RegExp(location, 'i');
    if (pincode) query.pincode = new RegExp(pincode, 'i');

    const contacts = await Contact.find(query);
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
  getContactByQuery,
};

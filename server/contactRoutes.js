const express = require('express');
const {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
  getContactByQuery,
} = require('../controllers/contactController');

const router = express.Router();

// Routes
router.get('/', getAllContacts);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);
router.get('/search', getContactByQuery);

module.exports = router;

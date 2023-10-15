const express = require('express');
const {
  createRequest,
  updateRequest,
} = require('../controllers/faculty.controller');

const router = express.Router();

router.post('/form', createRequest);
router.put('/form', updateRequest);

module.exports = router;

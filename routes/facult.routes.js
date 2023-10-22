const express = require('express');
const {
  createRequest,
  updateRequest,
  deleteRequest,
  getAllRequest,
  getItemRequest,
} = require('../controllers/faculty.controller');

const router = express.Router();

router.post('/form', createRequest);
router.put('/form', updateRequest);
router.delete('/form', deleteRequest);
router.get('/forms', getAllRequest);
router.get('/form', getItemRequest);


module.exports = router;

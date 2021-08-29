const express = require('express');
const router = express.Router();
const { getSearchData, getIddata } = require('../controllers/searchData');

router
    .route('/')
    .get(getSearchData);

router
    .route('/:id')
    .get(getIddata);

module.exports =  router;
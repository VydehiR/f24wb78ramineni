const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('sculptures', { title: 'Search Results - Sculptures' });
});

module.exports = router;

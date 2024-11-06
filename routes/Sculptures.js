const express = require('express');
const router = express.Router();

// Sample data for Sculptures
const Sculptures = [
    { sculptures_name: "The Thinker", sculptures_height: 182, material: "Bronze" },
    { sculptures_name: "Venus de Milo", sculptures_height : 203, material: "Marble" },
    { sculptures_name: "David", sculptures_height: 517, material: "Marble" }
];

router.get('/', (req, res) => {
  res.render('artifacts', { 
    title: 'Search Results - Sculptures', 
    results: Sculptures 
  });
});

module.exports = router;
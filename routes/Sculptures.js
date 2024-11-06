
var router = express.Router();

/* GET Sculptures page. */
router.get('/', function(req, res, next) {
  const sculptures = [
    { name: "The Thinker", height: 182, material: "Bronze" },
    { name: "Venus de Milo", height: 203, material: "Marble" },
    { name: "David", height: 517, material: "Marble" }
  ];
  
  // Render the sculptures page and pass the sculptures data
  res.render('sculptures', { title: 'Search Results - Sculptures', results: sculptures });
});

module.exports = router;

const express = require('express');
const router = express.Router();

// Sample data for artifacts
const artifacts = [
  { name: "The Thinker", height: 182, material: "Bronze" },
    { name: "Venus de Milo", height: 203, material: "Marble" },
    { name: "David", height: 517, material: "Marble" }
];

router.get('/', (req, res) => {
  res.render('artifacts', { 
    title: 'Search Results - Artifacts', 
    results: artifacts 
  });
});

module.exports = router;
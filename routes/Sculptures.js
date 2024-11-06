

/* GET Sculptures page. */

  const sculptures = [
    { name: "The Thinker", height: 182, material: "Bronze" },
    { name: "Venus de Milo", height: 203, material: "Marble" },
    { name: "David", height: 517, material: "Marble" }
  ];
  
 






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
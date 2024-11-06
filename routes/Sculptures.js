var express = require('express');
var router = express.Router();

/* GET Sculptures page. */
const sculptures = [
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

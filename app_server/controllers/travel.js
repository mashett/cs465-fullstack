//const fs = require('fs');
var fs = require('fs'); 

//const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
};
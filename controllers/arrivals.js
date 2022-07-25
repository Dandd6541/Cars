const Car = require('../models/car'); 
// const Arrival = require('../models/arrival');

module.exports = {
    create
};

function create(req, res) {
    car.findById(req.params.id, function(err, car){
        car.destinations.push(req.body);
        car.save(function(err){
            res.redirect(`/cars/${car._id}`)
        });
    });
}


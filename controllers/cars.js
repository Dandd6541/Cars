const Car = require('../models/cars');
// const Arrival = require('../models/arrival');


module.exports = {
  index,
  new: newcar,
  create,
  show
};
function show(req, res) {
  Car.findById(req.params.id, function(err, car){
    console.log(car)
      res.render('cars/show', {title: 'car Detail', car});
    
  });
}

function create(req, res) {
  const car = new Car(req.body);
  car.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/cars/new');
    console.log(car);
    // for now, redirect right back to new.ejs
    res.redirect('/cars');
});
}
function newcar(req, res) {
    res.render('cars/new');
}
function index(req, res) {
  Car.find({}, function(err, cars) {
    res.render('cars/index', { cars });
  });
}
function edit(req, res) {
  Car.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, car) {
    if (err || !car) return res.redirect('/cars');
    res.render('cars/edit', {car});
  });
}


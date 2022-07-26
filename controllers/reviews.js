const Car = require('../models/cars');

module.exports = {
  create,
  delete: deleteReview
};

async function deleteReview(req, res, next) {
  try {
    const car = await Car.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id});
    if (!car) throw new Error('Nice Try!');
    // Remove the using the remove method on Mongoose arrays
    car.reviews.remove(req.params.id);
    await car.save();
    res.redirect(`/cars/${car._id}`);
  } catch (err) {
    return next(err);
  }
}

function create(req, res) {
    console.log(req.body)
  // The new review will be embedded in the car doc
  Car.findById(req.params.id, function(err, car) {
    // Mongoose arrays have everything that JS arrays
    // have, and more!

    // Add the user-centric info to req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    car.reviews.push(req.body);
    car.save(function(err) {
      // Step 5: Data has been changed
      // so we redirect
      res.redirect(`/cars/${car._id}`);
    });
  });
}
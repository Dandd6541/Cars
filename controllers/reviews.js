const Car = require('../models/cars');

module.exports = {
  create,
  delete: deleteReview,
  edit,
  update
};

function update(req, res) {
    Car.findOne({'reviews._id': req.params.id}, function(err, car) {
      const commentSubdoc = car.reviews.id(req.params.id);
      if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/cars/${car._id}`);
      commentSubdoc.content = req.body.content;
      car.save(function(err) {
        res.redirect(`/cars/${car._id}`);
      });
    });
  }

function edit(req, res) {
  console.log(req.params.id)
    Car.findOne({"reviews._id": req.params.id}, function(err, car) {
     let review = car.reviews.id(req.params.id)
     console.log(review)
      if (err || !car) return res.redirect('/cars');
      res.render('cars/edit', {car, review});
    });
  }

  

async function deleteReview(req, res, next) {
  try {
    const car = await Car.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id});
    if (!car) throw new Error('Nice Try!');
    car.reviews.remove(req.params.id);
    await car.save();
    res.redirect(`/cars/${car._id}`);
  } catch (err) {
    return next(err);
  }
}

function create(req, res) {
    console.log(req.body)
  Car.findById(req.params.id, function(err, car) {
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


  
var User = require("../models/user");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.user_create = function(req, res) {
  console.log(req);
  var user = new User({
    name: req.body.name,
    password: req.body.password,
    number: req.body.number,
    gender: req.body.gender,
    org: req.body.org
  });

  user.save(function(err) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.send({ data: "User Created successfully" });
  });
};

exports.user_details = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return next(err);
    res.send(user);
  });
};

exports.user_update = function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    user
  ) {
    if (err) return next(err);
    res.send("User udpated.");
  });
};

exports.user_delete = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};

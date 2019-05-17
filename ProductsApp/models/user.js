var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  password: { type: String, required: true },
  number: { type: String, required: true, max: 10 },
  gender: { type: String, required: false },
  org: { type: String, required: false }
});

// Export the model
module.exports = mongoose.model("User", UserSchema);

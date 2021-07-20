const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  rootType: {
    type: Stirng,
  },
  rent: {
    type: Number,
    required: true,
  },
  adress: String,
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;

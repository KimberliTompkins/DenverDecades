const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const editsSchema = new Schema({
  content_id: { type: Number, required: true },
  userName: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Edit = mongoose.model("Edit", editsSchema);

module.exports = Edit;

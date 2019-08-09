const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
  name: String, // company name
  website: String, // careers website (if applicable)
  logo: String,
  contact: String, // who to contact about the position
  createdAt: Date, // only included in the post api
  updatedAt: Date, // only included in the update api
});

const Employer = mongoose.model("Employer", EmployerSchema);

module.exports = Employer
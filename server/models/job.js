const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  employer: String, // employer posting the job
  title: String,
  location: String, // location of the job
  payRate: String,
  experience: String,
  description: String, 
  createdAt: Date, // only included in the post api
  updatedAt: Date, // only included in the update api
  filledAt: Date // only included in the update api
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job
var Job = require("../models/job");

const getJobs = function(req, res, next) {
  Job.find(function (error, jobs) {
    if (error) { console.error(error); }
	  res.send({
			jobs: jobs
		})
  })
  .catch(next)
}

const createJob = function(req, res, next) {
  const {
		employerId,
		title,
		location,
		payRate,
		experience,
		description
	} = req.body

	console.log('req.body: ', req.body)

	const now = new Date()

	Job.create({
		employer: employerId, // employer posting the job
    title: title,
    location: location, // location of the job
    payRate: payRate,
    experience: experience,
    description: description,
    createdAt: now
	}, function (err, job) {
		res.send({
			created_job: job
		})
    if (err) return handleError(err);
	})
	.catch(next)
}

module.exports = {
	getJobs,
	createJob
}
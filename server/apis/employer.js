var Employer = require("../models/employer")


const getEmployers = function (req, res) {
  Employer.find(function (error, employers) {
    if (error) { console.error(error); }
	  res.send({
			employers: employers
		})
  })
}

const createEmployer = function (req, res, next) {
  const {
    name,
    website,
    logo,
    contact
  } = req.body

  const now = new Date()

	Employer.create({
		name: name, // company name
    website: website, // careers website (if applicable)
    logo: logo,
    contact: contact, // who to contact about the position
    createdAt: now, // only included in the post api
	}, function (err, employer) {
    res.send({
      created_employer: employer
    })
    if (err) return handleError(err);
  })
}

module.exports = {
  getEmployers,
  createEmployer
}
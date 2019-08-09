const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule')
var db = mongodb_conn_module.connect()

const employer = require('../apis/employer')
app.get('/employers', employer.getEmployers)
app.post('/employer/new', employer.createEmployer)

const job = require('../apis/job')
app.get('/jobs', job.getJobs)
app.post('/job/new', job.createJob)

app.listen(process.env.PORT || 8081)
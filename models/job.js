const mongoose = require('mongoose')
const Schema = mongoose.Schema

// job Schema
const JobSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
  description: {
    type: String,
    required: [true, 'Description field is required']
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
})

const Job = mongoose.model('jobs', JobSchema)

module.exports = Job

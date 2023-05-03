const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema(
  {
    course_name: {
      type: String,
      required: true,
    },
    course_duration: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Course = mongoose.model('Course', CourseSchema)

module.exports = Course;


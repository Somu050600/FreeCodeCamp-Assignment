const CourseSchema = require("../models/CourseSchema");

async function handleCourse(req, res) {
    try {
        const courses = await CourseSchema.find();
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching courses" );
    }
}
module.exports = {
    handleCourse,
};
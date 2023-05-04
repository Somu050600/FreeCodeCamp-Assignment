const CourseSchema = require("../models/CourseSchema");

async function handleCourse(req, res) {
    try {
        const courses = await CourseSchema.find();
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.send("An error occurred while fetching courses" );
    }
}
module.exports = {
    handleCourse,
};
import React, { useState, useEffect } from "react";
import axios from "axios";
import Courselist from "./CourseList";
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const courseAPI = 'http://localhost:5050/course';
    useEffect(() => {
        axios.get(courseAPI).then((response) => {
            setCourses(response.data);
        })
    })
    

    return (
        <div className="homepage_container">
            <div className="content_wraper">
                <div><h1>Welcome To freeCodeCamp.org</h1></div>
                <div className="quote"><p>"I have not failed. I've just found 10,000 ways that won't work."</p><span>-Thomas A. Edison</span></div>
                <div>
                    
                    {courses.map((obj) => {
                        return (
                            <Courselist  
                                course_name={obj.course_name}
                                course_duration={obj.course_duration}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
    
}

export default Home;
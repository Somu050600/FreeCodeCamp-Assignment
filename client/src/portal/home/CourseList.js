import React from "react";
import './courselist.css'

const Courselist = (props) => {
    return(
        <div className="course_list">
            <span>{props.course_name + '('+ props.course_duration + ')'} </span>
        </div>
    )

}
export default Courselist;
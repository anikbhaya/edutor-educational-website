import React from 'react';
import { NavLink } from 'react-router-dom';
import Course from '../Course/Course';
import useCourses from '../hooks/useCourses';

const Courses = (props) => {
    const [courses] = useCourses()
    const latestCourse = courses.slice(0, props.display)
    return (
        <div className="bg-gray-100">

            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5">
                {props.children}
                <div className="grid gap-6  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {
                        props.display ? latestCourse.map(course => <Course children={props.children} course={course} key={course.title}></Course>) : courses.map(course => <Course children={props.children} course={course} key={course.title}></Course>)
                    }
                </div>
                <NavLink className=" bg-green-500 hover:bg-green-600 px-4 py-3 rounded text-white transition-colors mt-10 inline-block" to="/courses">Check All Courses</NavLink>
            </div>
        </div>
    );
};

export default Courses;
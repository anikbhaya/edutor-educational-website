import React from 'react';
import Course from '../Course/Course';
import useCourses from '../hooks/useCourses';

const Courses = (props) => {
    const [courses, setCourses] = useCourses()
    return (
        <div className="bg-gray-100">

            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5">
                {props.children}
                <div className="grid gap-6  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {
                        courses.map(course => <Course children={props.children} course={course} key={course.title}></Course>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;
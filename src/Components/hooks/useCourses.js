import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([])
 
    useEffect( () => {
        fetch('http://localhost:3000/courses.json')
        .then(response => response.json())
        .then(data => setCourses(data))
    },[])
    return [courses, setCourses]
};

export default useCourses;
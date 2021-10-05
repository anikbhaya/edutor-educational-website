import React from 'react';
import Courses from '../Courses/Courses';
import useCourses from '../hooks/useCourses';
import Showcase from '../Showcase/Showcase';

const Home = () => {
    

    return (
        <div>
            <Showcase></Showcase>
            
            <Courses display="6">
                <h2 className="text-3xl font-medium mb-5">Latest Courses</h2>
            </Courses>
        </div>
    );
};

export default Home;
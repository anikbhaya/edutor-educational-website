import React from 'react';
import { NavLink } from 'react-router-dom';

const Showcase = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid gap-20 sm:grid-cols-1 md:grid-cols-2 items-center py-20">
            <div>
                <h1 className="text-5xl font-bold mb-3">Learning to Love, <br/> Loving to Learn</h1>

                <p className="mb-5">We understand the importance of approaching each work integrally and believe in the power of simple</p>
                <NavLink className="bg-green-500 hover:bg-green-600 px-4 py-3 rounded-full text-white transition-colors" to="/courses">Check Latest Courses</NavLink>
            </div>
            <div>
                <img src="./images/showcase.png" alt="" />
            </div>
        </div>
    );
};

export default Showcase;
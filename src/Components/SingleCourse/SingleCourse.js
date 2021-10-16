import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { useHistory, useParams } from 'react-router';
import useCourses from '../hooks/useCourses';
import NotFound from '../NotFound/NotFound';



const SingleCourse = () => {
    const [courses, setCourses] = useCourses();
    const { singleCourse } = useParams()
    const history = useHistory()

    const isRequest = courses.find(c => c.title.replace(/\W+/g, '-').toLowerCase() == singleCourse)





    return (
        <div className="flex flex-col max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <div className="flex justify-between bg-green-500 py-1 px-3 text-white">
                        <p><i className="fas fa-clock"></i> {isRequest?.duration}</p>
                        <p><i className="fas fa-user-graduate"></i> {isRequest?.instructor}</p>
                    </div>
                    <img width="100%" src={`/images/${isRequest?.thumbnail}`} alt="" />
                </div>
                <div>
                    <div className="text-green-500 flex mb-2">
                        <Rating readonly initialRating={isRequest?.rating?.avgRating} fullSymbol="fas fa-star icon-color" emptySymbol="fa fa-star-o icon-color"
                        />  {isRequest?.rating?.avgRating} ({isRequest?.rating?.quantity})
                    </div>
                    <h1 className="text-xl font-medium py-2 uppercase">{isRequest?.title}</h1>
                    <p className=" my-2">
                        {isRequest?.overview}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SingleCourse;
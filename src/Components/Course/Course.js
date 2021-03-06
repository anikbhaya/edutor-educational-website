import React from 'react';
import Rating from 'react-rating'
import { NavLink } from 'react-router-dom';

const Course = (props) => {
    const { id, title, instructor, duration, price, enrolled, thumbnail, overview, rating } = props.course
    const { avgRating, quantity } = rating
    const contentTitle = title.replace(/\W+/g, '-').toLowerCase()
    return (
        <div className="bg-white p-4">
            <div className="flex justify-between bg-green-500 py-1 px-3 text-white">
                <p><i className="fas fa-clock"></i> {duration}</p>
                <p><i className="fas fa-user-graduate"></i> {instructor}</p>
            </div>
            <div>
                <img width="100%" src={`./images/${thumbnail}`} alt="" />
            </div>
            <div className="text-green-500 flex justify-center mt-2">
                <Rating readonly initialRating={avgRating} fullSymbol="fas fa-star icon-color" emptySymbol="fa fa-star-o icon-color"
                />  { avgRating} ({quantity})
            </div>
            <h3 className="text-xl font-medium py-2 uppercase ">{title}</h3>

            <p className=" my-4">
                {overview}
            </p>
            <div className="flex justify-between mt-2">
                <NavLink to={`courses/${contentTitle}`} className="bg-green-500  hover:bg-green-600 transition-colors px-4 py-2 text-white rounded">Enroll</NavLink>
                <h2 className="text-3xl font-bold">${price}</h2>
            </div>
        </div>
    );
};

export default Course;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
            <h2 className="text-3xl font-medium mb-14">We Have a   <span className="text-green-500">Professional</span> Support Team</h2>
            <div className="grid grid-cols-2 gap-10">
                <div className="flex items-center">
                    <div>
                        <i className="fas fa-headset text-7xl text-green-500 p-5"></i>
                    </div>
                    <div>
                        <h3 className="text-3xl">Customer Support</h3>
                        <p className="my-3">Our support will be happy to help you.</p>
                        <NavLink className="bg-green-500 hover:bg-green-600 px-4 py-3 inline-block rounded text-white transition-colors" to="/courses">OPEN A TICKET</NavLink>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                    <i class="fas fa-envelope-open-text text-7xl text-green-500 p-5"></i>
                    </div>
                    <div>
                        <h3 className="text-3xl">Have Any Questions</h3>
                        <p className="my-3">Still have any confusion? Just email us.</p>
                        <NavLink className="bg-green-500 hover:bg-green-600 px-4 py-3 inline-block rounded text-white transition-colors" to="/courses">EMAIL US</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
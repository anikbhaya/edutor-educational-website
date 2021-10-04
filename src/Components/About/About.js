import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
            <h2 className="text-3xl font-bold mb-10">About <span className="text-green-500">Edutor</span></h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <h3 className="text-2xl font-medium">Exclusive Coach</h3>
                    <p>Anyone involved with others – at work or at home – who wants to tackle difficult behaviour more effectively will enjoy this course. It’ll help you successfully settle those difficult interactions that just won’t resolve themselves.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-medium">Creative Minds</h3>
                    <p>With video demonstrations to support the lectures you’ll quickly learn to handle apparently impossible situations where people just won’t co-operate: bosses, co-workers, customers, patients or members of the public who act in unpleasant.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-medium">Direct Discussion</h3>
                    <p>This course tells you how to identify seven common difficult characters, recognise clues to the patterns in their behaviour, and most importantly, how to understand how to prepare yourself, so that you become more effective more often in your relationships.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-medium">Video Tutorials</h3>
                    <p> This course tells you how to identify seven common difficult characters, recognise clues to the patterns in their behaviour, and most importantly, how to understand how to prepare yourself, so that you become more effective more often in your relationships.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
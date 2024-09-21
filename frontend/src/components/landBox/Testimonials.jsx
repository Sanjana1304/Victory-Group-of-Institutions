import React, { useState } from 'react';

const testimonialsData = [
    { id: 1, text: "This is the best service I've ever used!", author: "Customer 1" },
    { id: 2, text: "Fantastic experience and wonderful support!", author: "Customer 2" },
    { id: 3, text: "I highly recommend this to everyone!", author: "Customer 3" },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="testi" className="mt-10 testimonials shadow h-[300px] w-[90%] mx-auto p-5 rounded-full mb-10 bg-gradient-to-r from-cyan-100 to-purple-100">
            <h1 className="flex text-xl md:text-4xl mt-7 mb-7 text-blue justify-center font-bold">Testimonials</h1>
            <div className="testimonial-container relative overflow-hidden w-full flex flex-col justify-center items-center align-items-center">
                {testimonialsData.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`testimonial ${index === currentIndex ? 'block' : 'hidden'}`}
                    >
                        <p className="text-center mb-5">{`"${testimonial.text}"`}</p>
                        <p className="text-center">{` - ${testimonial.author}`}</p>
                    </div>
                ))}
            </div>
            <div className="dots flex justify-center mt-4">
                {testimonialsData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot h-4 w-4 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-blue' : 'bg-gray-300'}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

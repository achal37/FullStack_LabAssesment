import React, { useState } from 'react';

function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/image1.jpg',
        '/image2.jpg',
        '/image3.jpg',
        '/image4.jpg'
    ];

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-3xl font-bold mb-4">Welcome to the Home Page</h2>
            <p className="text-gray-600 mb-8">This is a protected page accessible after login.</p>
            
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
                {/* Carousel Image */}
                <img
                    src={images[currentImage]}
                    alt={`Slide ${currentImage + 1}`}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
                />

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full"
                >
                    ❮
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full"
                >
                    ❯
                </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-gray-700' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;

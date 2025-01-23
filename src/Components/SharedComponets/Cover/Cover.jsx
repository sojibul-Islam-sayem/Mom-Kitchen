import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, heading, details }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero  min-h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 uppercase text-5xl font-bold">{heading}</h1>
                        <p className="mb-5 uppercase">
                            {details}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>



    );
};

export default Cover;
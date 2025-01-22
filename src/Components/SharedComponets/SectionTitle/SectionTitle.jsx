import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-7'>
            <p className='text-xl italic text-[#D99904]'>{subHeading}</p>
            <h3 className='text-4xl py-5 text-black border-y border-[#E8E8E8]'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
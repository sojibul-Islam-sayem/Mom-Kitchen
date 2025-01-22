import React from 'react';
import SectionTitle from '../SharedComponets/SectionTitle/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured_item  bg-fixed my-10'>
            <div className='bg-black bg-opacity-30 pt-10'>
                <SectionTitle subHeading='---Check it out---' heading='FROM OUR MENU' />
                <div className='flex justify-center space-x-5 items-center pb-16'>
                    <img className='md:w-2/5 rounded-2xl' src={featuredImg} alt="" />
                    <div className='text-white md:w-2/6'>
                        <p className='text-2xl'>March 20, 2023</p>
                        <p className='text-2xl'>WHERE CAN I GET SOME?</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='uppercase   font-medium px-7 py-4 rounded-b-xl hover:text-white hover:bg-slate-700 border-b-4 border-white '>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
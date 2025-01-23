import React, { useEffect, useState } from 'react';
import SectionTitle from '../SharedComponets/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-10'>
            <SectionTitle subHeading='---What Our Clients Say---' heading='TESTIMONIALS' />
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {reviews.map(review =>
                    <SwiperSlide
                        key={review._id} className='text-center flex flex-col space-y-4'>
                        <Rating className='mx-auto' style={{ maxWidth: 250 }} value={review.rating}  />
                        <p className='text-black w-3/4 mx-auto' >{review.details}</p>
                        <h3 className='text-3xl uppercase text-[#CD9003] '>{review.name}</h3>

                    </SwiperSlide>)}

            </Swiper>

        </section>
    );
};

export default Testimonials;
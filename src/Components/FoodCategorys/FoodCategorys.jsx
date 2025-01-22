import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import category1 from '../../assets/home/slide1.jpg'
import category2 from '../../assets/home/slide2.jpg'
import category3 from '../../assets/home/slide3.jpg'
import category4 from '../../assets/home/slide4.jpg'
import category5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../SharedComponets/SectionTitle/SectionTitle';

const FoodCategorys = () => {
    return (
        <div>
            <SectionTitle subHeading='---From 11:00am to 10:00pm---' heading='ORDER ONLINE'/>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide >
                    <img src={category1} alt="" />
                    <h3 className='text-4xl uppercase -mt-20 text-center text-white'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category2} alt="" />
                    <h3 className='text-4xl uppercase -mt-20 text-center text-white'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} alt="" />
                    <h3 className='text-4xl uppercase -mt-20 text-center text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category4} alt="" />
                    <h3 className='text-4xl uppercase -mt-20 text-center text-white'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category5} alt="" />
                    <h3 className='text-4xl uppercase -mt-20  text-center text-white'>salads</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default FoodCategorys;
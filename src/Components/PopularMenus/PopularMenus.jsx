import React, { useEffect, useState } from 'react';
import SectionTitle from '../SharedComponets/SectionTitle/SectionTitle';
import { key } from 'localforage';
import MenuItem from '../SharedComponets/MenuItem/MenuItem';

const PopularMenus = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data?.filter(item => item.category === "popular");
                setMenu(popularItems)
            })
    }, [])

    return (
        <section className='my-12'>
            <SectionTitle subHeading='---Check it out---' heading='FROM OUR MENU' />
            <div className='grid grid-cols-2 gap-6 my-6'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className='text-center'>
                <button className='uppercase  text-[#1F2937] font-medium px-7 py-4 rounded-b-xl hover:text-white hover:bg-slate-700 border-b-4 border-[#1F2937] '>View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenus;
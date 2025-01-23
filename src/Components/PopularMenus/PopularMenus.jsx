import SectionTitle from '../SharedComponets/SectionTitle/SectionTitle';
import MenuItem from '../SharedComponets/MenuItem/MenuItem';
import useMenu from '../../Hooks/useMenu';

const PopularMenus = () => {
    const [menu] = useMenu();
    const popular = menu?.filter(item => item.category === 'popular')
    console.log(popular);

    return (
        <section className='my-12'>
            <SectionTitle subHeading='---Check it out---' heading='FROM OUR MENU' />
            <div className='grid grid-cols-2 gap-6 my-6'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className='text-center'>
                <button className='uppercase  text-[#1F2937] font-medium px-7 py-4 rounded-b-xl hover:text-white hover:bg-slate-700 border-b-4 border-[#1F2937] '>View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenus;
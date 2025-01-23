import Cover from "../../../Components/SharedComponets/Cover/Cover";
import MenuItem from "../../../Components/SharedComponets/MenuItem/MenuItem";

const MenuCategory = ({items, title, details, categoryImg}) => {

    return (
        <div className="my-8">
           {title && <Cover img={categoryImg} heading={title} details={details}></Cover>}
            <div className='grid grid-cols-2 gap-6 my-6'>
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className='text-center'>
                <button className='uppercase  text-[#1F2937] font-medium px-7 py-4 rounded-b-xl hover:text-white hover:bg-slate-700 border-b-4 border-[#1F2937] '>View Full  Menu</button>
            </div>
        </div>
    );
};

export default MenuCategory;
import React from 'react';
import useCart from '../../../Hooks/useCart';

const Cart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    return (
        <div>
            <div className='flex justify-around w-full'>
                <h3 className='text-4xl'>Total Item={cart.length}</h3>
                <h3 className='text-4xl'>Total Price : {totalPrice}$</h3>
                <button className='btn btn-primary'>Buy</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {cart.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               <h3>{item.price}</h3>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs">Details</button>
                            </td>
                        </tr>)}
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
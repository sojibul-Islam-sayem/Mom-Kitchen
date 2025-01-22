import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer bg-neutral text-neutral-content p-10">
            <div className='flex flex-col items-center mx-auto'>
                <h3>CONTACT US</h3>
                <p>123 ABS Street, Uni 21, Bangladesh</p>
                <p>+88 123456789</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
            <div className='flex flex-col items-center mx-auto'>
                <h3>Follow US</h3>
                <p>Join us on social media</p>
            </div>
        </div>
             <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </div>
        
    );
};

export default Footer;
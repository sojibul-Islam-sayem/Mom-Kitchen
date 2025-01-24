import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/SharedComponets/Footer/Footer';
import Navbar from '../Components/SharedComponets/Navbar/Navbar';

const Main = () => {
  const location = useLocation()
  console.log(location.pathname);
  const noHeaderFooter = location.pathname.includes('login')


  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
import React from 'react';
import Navbar from './navbar.jsx';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className='md:relative min-h-screen bg-white overflow-x-hidden'>
      <div className=' mb-12 md:mb-20'>
        <Navbar />
      </div>
      <main>{children}</main>
      <div className='w-full mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

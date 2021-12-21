import React from 'react';
import SearchBar from './searchbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='fixed top-0 z-10 w-full bg-purple-700 md:bg-white'>
      <div
        className='max-w-7xl mx-auto px-2 sm:px-2
            md:pl-24 md:pr-4'>
        <div className='relative flex justify-between md:h-16 h-12'>
          <div className='flex-1 flex items-center space-x-10 justify-center md:mr-4 relative md:pl-4 md:ml-4  sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center py-4'>
            <Link href='/'><p
                className='no-underline text-black text-4xl md:border-b-2 md:border-white hover:border-b-4 hover:border-black'
                >
                Gitpedia
              </p>
            </Link>  
            </div>
            <div className='md:relative right-0 md:py-1 md:py-4 md:w-1/2 md:mb-0 md:w-1/3 md:pr-5 md:pr-0 md:flex-shrink-0 invisible md:visible'>
              <SearchBar />
            </div>
            <div class="block lg:hidden m-4">
                <button class="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-black hover:border-white">
                  <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
            <div className='hidden md:flex md:justify-center md:space-x-4 md:w-1/3 absolute md:right-0 md:h-full'>
            <a
                href='#'
                className='text-black md:border-b-2 md:border-white hover:border-b-4 hover:border-black px-3 py-6 text-md font-medium'>
                Conversation
              </a>
              
              <a
                href='#'
                className='text-black md:border-b-2 md:border-white hover:border-b-4 hover:border-black px-3 py-6 text-md font-medium'>
                Contribute
              </a>

              <a
                href='#'
                className='text-black md:border-b-2 md:border-white hover:border-b-4 hover:border-black px-3 py-6 text-md font-medium'>
                Login
              </a>

              <a className='px-3 py-4' href='#'>
                <div className='text-white text-md font-medium rounded w-28 h-10 px-6 pt-2 bg-purple-700'>
                  Sign Up
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>


//     <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  
//   <div class="block lg:hidden">
//     <button class="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-black hover:border-black">
//       <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//     </button>
//   </div>
//   <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//     <div class="text-sm lg:flex-grow">
//       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
//         Docs
//       </a>
//       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
//         Examples
//       </a>
//       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
//         Blog
//       </a>
//       </div>
//   </div>
// </nav>
  );
};

export default Navbar;

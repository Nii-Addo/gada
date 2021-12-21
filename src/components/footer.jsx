import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-200 w-full'>
      <div className='container pt-8 pb-6 '>
        <div className='flex flex-1'>
          <div className='container flex justify-center align-center pt-16 absolute md:relative mt-12 md:mt-0 mb-4 md:mb-0'>
            <p className='mx-auto text-black text-sm inset-y-4'>
              &copy; 2020 | With Love from GH by {' '} <a href='#'>godfada</a>
            </p>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h5 className='uppercase mb-6 font-bold'>Links</h5>
            <ul className='mb-4'>
              <li className='mt-2'>
                <a href='#' className='hover:underline text-black text-xs'>
                  Help
                </a>
              </li>
              <li className='mt-2'>
                <a href='#' className='hover:underline text-black text-xs'>
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h5 className='uppercase mb-6 font-bold'>Legal</h5>
            <ul className='mb-4'>
              <li className='mt-2'>
                <a href='#' className='hover:underline text-black text-xs'>
                  Terms
                </a>
              </li>
              <li className='mt-2'>
                <a href='#' className='hover:underline text-black text-xs'>
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h5 className='uppercase mb-6 font-bold'>Social</h5>
            <ul className='mb-4'>
              <li className='mt-2'>
                <a href='#' className='hover:underline text-black text-xs'>
                  Linkedin
                </a>
              </li>
              <li className='mt-2'>
                <a href='#' className='hover:underline text-black text-xs'>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 text-center md:text-left'>
            <h5 className='uppercase mb-6 font-bold'>Company</h5>
            <ul className='mb-4'>
              <li className='mt-2'>
                <a href='#' className='hover:underline text-black text-xs'>
                  About Gitpedia
                </a>
              </li>
              <li className='mt-2'>
                <a href='#' className='hover:underline text-black text-xs'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

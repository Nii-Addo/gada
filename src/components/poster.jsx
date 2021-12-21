import React from 'react';
import { Link } from 'react-router-dom';

const Poster = ({ post }) => {
  return (
    <Link to={location => ({ ...location, pathname: `/articles/${id}` })}>
      <div className='w-auto max-h-90 h-auto mt-4'>
        <div class='wrapper bg-gray-400 antialiased text-gray-900'>
          <div>
            <img
              src='https://source.unsplash.com/random/350x350'
              alt=' git image'
              class='w-full object-cover object-center shadow-md h-72 md:h-80'
            />
            <div class='relative px-4 -mt-40 pb-2 md:pb-4'>
              <div class='bg-white p-4 rounded-lg shadow-lg'>
                <h4 class='text-md md:text-lg font-bold uppercase leading-tight max-h-16 overflow-ellipsis overflow-hidden'>
                  Add staged files to git mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                  mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                </h4>
                <div class='mt-2 max-h-24 flex'>
                  <p class='text-left text-header text-sm overflow-ellipsis overflow-hidden'>
                    Add files to git after it is staged and then commit it to
                    the current repo.After that push to remote.WWhat
                    arakjaklsdlaksdglkgklakfgkjllllkalgakglkaggas
                    sfsasdfafasfasdfa adfadsfafaaaaaaaaaaaaaa
                    asjdfkadfhjddddddddddddddddddddddddddddddddddddf
                    afdsaasdffffffffffffffffffffffffffff
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Poster;

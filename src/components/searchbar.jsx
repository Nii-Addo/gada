import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchBar = () => {
  return (
    <form className='flex relative mx-auto text-gray-600'>
      <label className='hidden' htmlFor='search-form'>
        Search
      </label>
      <input
        className='border border-gray-300 bg-white w-full h-10 leading-tight text-sm md:text-lg px-5 pr-8 appearance-none rounded:sm focus:outline-none focus:ring-gray-100 '
        type='search'
        name='search'
        placeholder='Search'
      />
      <button type='submit' className='absolute top-2 right-1 mr-2'>
        <FontAwesomeIcon  icon={[ 'fas', 'search']}  />
      </button>
    </form>
  );
};

export default SearchBar;

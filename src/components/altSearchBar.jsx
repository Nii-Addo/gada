import React from 'react';

const AltSearchBar = () => {
  return (
    <div>
      <form className='flex'>
        <label className='hidden' htmlFor='search-form'>
          Search
        </label>
        <input
          className='border md:border-2 md:border-r-0 border-gray-200 md:border-purple-500 w-full bg-white appearance-none leading-tight text-md md:text-lg py-2 px-0 pr-4 pl-5 z-0 mr-0 focus:outline-none focus:ring-gray-100 focus:border-b'
          placeholder='Search anything...'
          type='search'
          name='search'
        />
        <button
          type='submit'
          className='bg-purple-800 z-0 pl-5 pr-6 w-24 border md:border-l-0 md:border-2  border-purple-800 text-lg text-white font-medium flex-shrink-0 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AltSearchBar;
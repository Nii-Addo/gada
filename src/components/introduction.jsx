import React from 'react';
import AltSearchBar from './altSearchBar';

const Introduction = () => {
  return (
    <div className='relative w-full min-h-0 md:h-96 md:max-h-full py-4 md:bg-gray-300 md:py-16 md:rounded-lg'>
      <div className='md:w-1/2 ml-2 md:ml-0 text-left h-auto md:ml-40'>
        <h1 className='font-md md:font-semibold text-4xl md:text-5xl text-intro leading-none md:break-normal md:font-mono '>
          Welcome to Gitpedia, the most trusted gitsheet for all gitcheats
        </h1>
      </div>

      <div className='w-3/5 md:w-1/3 mt-8 ml-2 md:ml-40 h-28 md:h-20 mb-4 md:mb-8 py-4'>
        <h3 className='text-xl font-medium text-intro'>
          Which git command or function are you looking for?
        </h3>
      </div>
      <div className='absolute md:relative bottom-0 md:bottom-12 py-2 md:mb-0 md:w-2/5 mt-4 px-2 md:px-4 bg-purple-600 md:bg-transparent w-full md:ml-36'>
        <AltSearchBar />
      </div>
    </div>
  );
};

export default Introduction;
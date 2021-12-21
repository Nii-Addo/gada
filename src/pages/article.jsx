import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Article = () => {
  return (
    <div className='md:min-h-full md:pt-8 pt-4 pb-8 pr-2 md:pr-0 bg-gray-100'>
      <div className=' md:w-3/4 md:ml-40'>
        <div className='max-h-48 px-2 py-4 md:pt-0 pb-4 bg-white'>
          <h1 className=' max-h-28 text-4xl text-intro font-sans font-semibold leading-tight break-words'>
            Topic
          </h1>
          <div className='max-h-12 mt-2'>
            <div className='flex space-x-1 text-sm'>
              <p>Co-authored by </p>
              <p className='text-green-300 font-semibold'>Nii Kwei</p>
            </div>
            <p className='text-sm text-gray'>Last updated: 17/02/2019</p>
          </div>
        </div>
        <div className='md:hidden relative h-10 justify-center align-middle py-2 bg-white my-4'>
          <div className='absolute right-0 space-x-7 pr-4'>
            <span>
              <FontAwesomeIcon icon={['far', 'star']} />
            </span>
            <span>
              <FontAwesomeIcon icon={['fas', 'edit']} />
            </span>
          </div>
        </div>
        <div className='px-2 md:my-4 h-auto bg-white'>
          <p className=' text-justify'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;

import React from 'react';
import Poster from './poster';

const Articles = ({ data }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
      {data.map((post) => {
        return <Poster key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Articles;
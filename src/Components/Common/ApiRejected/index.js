import React from 'react';
import './style.css';

function ApiRejected({error}) {
  return (
    <div className='apiRejected__wrapper'>
      <h2 className="api__rejected">
        Oops, there is a <span>{error}</span>. Please try again later 😞
      </h2>
    </div>
  );
}

export default ApiRejected;
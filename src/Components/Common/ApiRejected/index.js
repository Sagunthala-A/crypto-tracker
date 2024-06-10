import React from 'react';
import './style.css';

function ApiRejected({error}) {
  return (
    <h2 className="api__rejected">
      Oops, there is a <span>{error}</span>. Please try again later 😞{" "}
    </h2>
  );
}

export default ApiRejected;
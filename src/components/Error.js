import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h2>{(err.status)} - {err.statusText}</h2>
        <p>{err.error.message}</p>
    </div>
  )
}

export default Error
import React from 'react';
import { Dna } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Dna
      height="80"
      width="80"
      radius="9"
      color="#367570"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
export default Loader;

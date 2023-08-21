import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      wrapperClassName=""
      visible={true}
    />
  );
};
export default Loader;

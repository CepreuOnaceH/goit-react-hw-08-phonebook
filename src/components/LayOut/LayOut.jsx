import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { PiSpinnerGap } from 'react-icons/pi';

const LayOut = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={<PiSpinnerGap size={50} className="spinner main-spinner" />}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default LayOut;

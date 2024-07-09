import React from 'react';
import { useUser,useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import Lottie, { Player } from 'lottie-react';


const withAuth = (Component) => {
  return (props) => {
    const { isSignedIn, isLoaded } = useAuth();

    if (!isLoaded) {
      return (
        <div className='flex justify-center items-center h-screen'>
          <Lottie className=' w-64 h-64' loop={true} />
        </div>
      );
    }

    if (isSignedIn) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/" />;
    }
  };
};

export default withAuth;
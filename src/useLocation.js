import { useState, useEffect } from 'react';

const useLocation = () => {
  const [latitude] = useState(null);
  const [errorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => position,
      error => error
    );
  }, []);
};

export default useLocation;

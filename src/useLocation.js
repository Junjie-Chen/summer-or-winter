import { useState, useEffect } from 'react';

const useLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLatitude(position.coords.latitude),
      error => error
    );
  }, []);
};

export default useLocation;

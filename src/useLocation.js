import { useState } from 'react';

const useLocation = () => {
  const [latitude] = useState(null);
  const [errorMessage] = useState('');
};

export default useLocation;

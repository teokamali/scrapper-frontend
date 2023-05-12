import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/redux/hooks';

export const useAuth = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const { accessToken, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user && accessToken) {
      setIsUserLogin(true);
    }
  }, [user, accessToken]);

  return isUserLogin;
};

// src/utils/authUtils.js
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const getUserIdFromToken = () => {
  const token = Cookies.get('authToken'); // Assuming the token is stored in a cookie named 'authToken'

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.userId; // Adjust this according to the actual structure of your token
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  }

  return null;
};

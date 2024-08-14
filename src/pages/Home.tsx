import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

interface User {
  username: string;
}

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get('/auth/user');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {user ? <p>Welcome, {user.username}!</p> : <p>Loading...</p>}
    </div>
  );
};

export default Home;

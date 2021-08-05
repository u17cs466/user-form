import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';

function AllUsers() {
      const [userData, setUserData] = useState([]);
      const [error, setError] = useState(null);

      useEffect(() => {
            return fetch(`http://localhost:5000/api/users`)
                  .then((res) => res.json())
                  .then((res) => {
                        if (res.status === 'success') {
                              setUserData(res.data);
                        } else {
                              setError('please try again sometime');
                        }
                  });
      }, []);

      
      return (
            <div>
                  {error}
                  <div>
                        {' '}
                        <Link to='/'>
                              <div>
                                    <button className=" mt-10 ml-16 h-10 w-20 bg-green-300">Add User</button>
                              </div>
                        </Link>

                  </div>
                  <div class='grid grid-flow-row grid-cols-4 grid-rows-4 gap-3'>
                        {userData.map((user) => (
                              <UserCard {...user} />
                        ))}
                  </div>
            </div>
      );
}

export default AllUsers;

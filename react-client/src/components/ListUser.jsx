import React from 'react';

const ListUser = ({user}) => (
  <div className='ListUser'>
    <p>{user.name}</p>
    <p>Total plays: {user.playcount}</p>
    <img src={Object.values(user.image[2])} />
  </div>
)

export default ListUser;
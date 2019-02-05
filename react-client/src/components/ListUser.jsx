import React from 'react';

const ListUser = ({user}) => (
  <div className='ListUser'>
    <p>{user.name}</p>
    <p>Total plays: {user.playcount}</p>
    <a href={user.url}>
    <img src={Object.values(user.image[2])[1]} />
    </a>
  </div>
)

export default ListUser;
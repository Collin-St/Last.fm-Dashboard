import React from 'react';
import ListUser from './ListUser.jsx';
import ListTracks from './ListTracks.jsx';

const List = ({users, tracks}) => (
  <div className='List'>

    {(users.length) ? users.map((user, i) => <ListUser key={i} user={user.user}/>) : null}

    {(tracks.length) ? tracks.map((track, i) => <ListTracks key={i} ten={track.recenttracks.track}/>) : null}
 
  </div>
)

export default List;
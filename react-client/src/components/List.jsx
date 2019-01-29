import React from 'react';
import ListUser from './ListUser.jsx';
import ListTracks from './ListTracks.jsx';
import Weekly from './Weekly.jsx';

const List = ({users, tracks, weekly}) => (
  <div className='List'>

    {(users.length) ? users.map((user, i) => <ListUser key={i} user={user.user}/>) : null}

    {(tracks.length) ? tracks.map((track, i) => <ListTracks key={i} ten={track.recenttracks.track}/>) : null}
 
    {(weekly.length) ? weekly.map((item, i) => <Weekly key={i} week={item.weeklytrackchart.track}/>) : null}

  </div>
)

export default List;
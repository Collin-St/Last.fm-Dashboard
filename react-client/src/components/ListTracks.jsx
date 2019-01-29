import React from 'react';

const ListTracks = ({ten}) => (
  <div className='ListTracks'>
  <h3 className='tracks-header'>Ten Most Recent Tracks</h3>
    <ul>
      {ten.map((item, i) => (
        <div>
        <a href={item.url}><img className='album' src={Object.values(item.image[1])}/></a>
        <li className='tracks' key={i}><b>{Object.values(item.artist)[0]}</b> - "{item.name}" - <i>played {Object.values(item.date)[1]}</i>
        </li>
        </div>
      ))}
    </ul>
  </div>
)

export default ListTracks;
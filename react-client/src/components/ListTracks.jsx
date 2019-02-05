import React from 'react';

const ListTracks = ({ten}) => (
  <div className='ListTracks'>
  <h3 className='tracks-header'>Ten Most Recent Tracks</h3>
    <ul>
      {ten.map((item, i) => (
        <div>
        <a href={item.url}><img className='album' src={Object.values(item.image[1])[1]}/></a>
        {/* {console.log(Object.values(item.image[1])[1])} */}
        {/* <li className='now'>Now playing: <b>{Object.values(item.artist)[1]}</b> - <i>"{item.name}"</i></li> */}
        <li className='tracks' key={i}>
        <b>{Object.values(item.artist)[1]}</b> - "{item.name}" - <i>played {(Object.values(item.date)[1])}</i>
        {/* {console.log(item.name)} */}
        {/* {console.log(Object.values(item.artist)[1])} */}
        {/* {console.log(Object.values(item.date)[1])} */}
        </li>
        </div>
      ))}
    </ul>
  </div>
)

export default ListTracks;
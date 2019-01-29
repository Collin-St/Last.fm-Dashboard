import React from 'react';

const Weekly = ({week}) => (
  <div className='Weekly'>
  <h3 className='weekly-header'>Top tracks this week</h3>
    <ul>
      {week.map((item, i) => (
        <div>
          <a href={item.url}><img className='weekly-album' src={Object.values(item.image[1])[1]}/></a>
          <li className='weekly-items' key={i}> 
          <b>{Object.values(item.artist)[1]}</b> - "{Object.values(item.name)}" - <i>rank: {Object.values(item['@attr'].rank)}, playcount: {item.playcount}</i>
          </li>
        </div>
      ))}
    </ul>

  </div>
)

export default Weekly;
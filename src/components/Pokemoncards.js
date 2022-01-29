import React from 'react';

function Pokemoncards({num,id,name,image,type}) {
  return (
      <>
  
        <div className='card_container'>
            <div className='num'>
              <p>{num}.</p>
            </div>
            <img src={image} alt={name}/>
            <div className='card_details'>
              <h3>{name}</h3>
              <small>#00{id}</small>
              <p>Type: {type}</p>
            </div>
        </div>
      </>
  );
}

export default Pokemoncards;

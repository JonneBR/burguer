import React from 'react';
import './Menu.css';
import { burguers } from '../../../BurguersList/Burguers';

function Menu() {
  return (
    <>
      <div className='menu-section'>
        <div className='menu-header-title'>
          <h1>Menu</h1>
        </div>
        <div className='menu-list-items'>
          {burguers.map((burguer, index) => (
            <div key={index} className='item-container'>
              <div className='burguer-image'>
                <img src={burguer['image']} alt='' />
              </div>
              <div className='burguer-name'>
                <h1>{burguer['name']}</h1>
              </div>
              <div className='burguer-price'>
                <p>{burguer['price']}</p>
              </div>
              <div className='burguer-ingredientes'>
                <p>{burguer['description']}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='bottom-container'>
          <div className='button-container'>
            <button className='button-subject'>PEÇA AGORA</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;

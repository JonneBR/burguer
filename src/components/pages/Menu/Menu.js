import React from 'react';
import './Menu.css';
import burguerOne from '../../../images/burguer-one.jpg';

function Menu() {
  return (
    <>
      <div className='menu-section'>
        <div className='menu-header-title'>
          <h1>Menu</h1>
        </div>
        <div className='menu-list-items'>
          <div className='item-container'>
            <div className='burguer-image'>
              <img src={burguerOne} alt='' />
            </div>
          </div>
          <div className='item-container'>
            <div className='burguer-image'>
              <img src={burguerOne} alt='' />
            </div>
          </div>
          <div className='item-container'>
            <div className='burguer-image'>
              <img src={burguerOne} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;

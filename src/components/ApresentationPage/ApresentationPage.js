import React from 'react';
import imgOne from '../../images/apresentation-one.jpg';
import imgTwo from '../../images/apresentation-two.jpg';
import imgThree from '../../images/apresentation-three.jpg';
import './ApresentationPage.css';

function ApresentationPage() {
  return (
    <>
      <section className='section-content'>
        <header className='apresentation-images'>
          <div className='images-wrapper'>
            <div className='image-item'>
              <img src={imgOne} alt='' />
            </div>
            <div className='image-item'>
              <img src={imgTwo} alt='' />
            </div>
            <div className='image-item'>
              <img src={imgThree} alt='' />
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default ApresentationPage;

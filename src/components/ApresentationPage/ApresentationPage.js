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
          <div className='description-wrapper'>
            <div className='content-description'>
              <h1>PARA TODOS OS GOSTOS !</h1>
              <p>
                Seja vegano ou hamburguer artesanal, você irá se apaixonar pelo
                sabor!
              </p>
            </div>
            <div className='content-description'>
              <h1>PARA TODOS OS GOSTOS !</h1>
              <p>
                Seja vegano ou hamburguer artesanal, você irá se apaixonar pelo
                sabor!
              </p>
            </div>
            <div className='content-description'>
              <h1>PARA TODOS OS GOSTOS !</h1>
              <p>
                Seja vegano ou hamburguer artesanal, você irá se apaixonar pelo
                sabor!
              </p>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default ApresentationPage;

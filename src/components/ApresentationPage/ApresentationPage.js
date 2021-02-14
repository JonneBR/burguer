import React from 'react';
import imgOne from '../../images/image1.PNG';
import imgTwo from '../../images/image2.PNG';
import imgThree from '../../images/image3.PNG';
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
      </section>
    </>
  );
}

export default ApresentationPage;

import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      <section className='landingpage-section'></section>
      <div className='bottom-content'>
        <div className='info-container'>
          <h1 className='header-title'>Horários:</h1>
          <p className='description'>De quarta a segunda apartir das 19h</p>
        </div>
        <div className='button-container'>
        <button className="button-subject">PEÇA AGORA</button>
          
        </div>
        <div className='info-container'>
          <h1 className='header-title'>Telefone:</h1>
          <p className='description'>11998324414
11994144238</p>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

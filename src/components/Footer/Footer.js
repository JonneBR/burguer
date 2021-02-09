import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className='footer-container'>
        <div className='footer-wrapper'>
          <div className='address-info'>
            <h1>Endereço</h1>
            <p>
              Avenida <span>Rodolpho Sales</span> Rua{' '}
              <span>Flavio Beta, 513</span>
            </p>
          </div>
          <div className='social-medias'>
            <h1>Fale Conosco</h1>
            <i class='fab fa-facebook-square'></i>
            <i class='fab fa-instagram'></i>
            <i class='fab fa-whatsapp'></i>
          </div>
        </div>
        <div className='creator-info'></div>
      </footer>
    </>
  );
}

export default Footer;

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
            <i className='fab fa-facebook-square'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-whatsapp'></i>
          </div>
        </div>
        <div className='creator-info'>
          <p>Desenvolvido por João Marcos Gonçalves | © 2021 Jonne Soluções</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

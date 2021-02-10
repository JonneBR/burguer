import React from 'react';
import './About.css';
import logo from '../../../images/burguer-logo.png';

function About() {
  return (
    <>
      <div className='about-hero-section'>
        <div className='container-info-wrapper'>
          <div className='container-info'>
            <h1>CONHEÇA A NOSSA HISTÓRIA:</h1>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos,{' '}
              <span>e vem sendo utilizado desde o século XVI</span>, quando um
              impressor desconhecido pegou uma bandeja de tipos e os embaralhou
              para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu
              não só a cinco séculos, como também ao salto para a editoração
              eletrônica, permanecendo essencialmente inalterado.{' '}
              <span>Se popularizou na década de 60</span>, quando a Letraset
              lançou decalques contendo passagens de Lorem Ipsum, e mais
              recentemente quando passou a ser integrado a softwares de
              editoração eletrônica como Aldus PageMaker.
            </p>
          </div>
        </div>
        <div className='img-container'>
          <img src={logo} alt='' />
        </div>
      </div>
    </>
  );
}

export default About;

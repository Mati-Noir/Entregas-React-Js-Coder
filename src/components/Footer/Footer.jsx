import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='estructura-footer'>
        <h2 className='subtitulo'>Noir & Company 2023</h2>
        <a className='sociales' href="https://www.facebook.com/Coderhouse/" target="_blank">Facebook</a>
        <a className='sociales' href="https://www.instagram.com/coderhouse/?hl=es" target="_blank">Instagram</a>
        <a className='sociales' href="https://twitter.com/coderhouse?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">Twitter</a>
    </div>
  )
}

export default Footer;
import React from 'react'
import './Footer.css';
import Footerleft from './footerleft';
import Footerright from './footerright';
function Footer() {
  return (<>
    <div className='footer'>
        <Footerleft/>     
       <Footerright/>
    </div>
        </>
   
  )
}
export default  Footer;
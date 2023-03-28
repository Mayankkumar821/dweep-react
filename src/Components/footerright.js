import React from 'react'
import LinkedIn from '../assets/LinkedinLogo.svg';
import Instagram from '../assets/InstagramLogo.svg';
import './footerright.css';
export default function footerright() {
  return (<>
    <div className='footerright'>  <ul class="footer-list2">
            <li>Dweep.io</li>
            <li>Made with love in India</li>
            <li class="logo-list">
                <img src={LinkedIn} alt="linkedin" style={{height:'4vh', width:'5vh'}}/>
                <img src={Instagram} alt="instagram"style={{height:'4vh', width:'5vh'}}/>
            </li>
            <li>&nbsp;</li>
            <li>hello@dweep.io</li>
        </ul></div></>
  )
}

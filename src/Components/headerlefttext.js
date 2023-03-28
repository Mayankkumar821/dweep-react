import React from 'react'
import './headerlefttext.css';
 function headerlefttext() {
  return (<>
    <div className='headerlefttext'>
        <h1 className='heading1'>An inspiring design delivered to your inbox every morning </h1>
        <h2 className='heading2'>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</h2>
        <h3 className='heading3'>Show me how it looks</h3>
        <div className='textinput'>
          <input type="text" placeholder='Your e-mail address'></input>
          <button>Register Now</button>
         
        </div>
        <p>Free - No Spam - No Data Sharing</p>
    </div></>
  )
}
export default headerlefttext;
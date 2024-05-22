import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='outer-footer'>
    <div className='footer'>
        <div className='footer-1'>
            <h2 className='footer-heading'>ABOUT US</h2>
           <hr/>
            <ul className='footer-content'></ul>
            <li>About Donateease</li>
            <li>Impact</li>
            <li>Reach & Presence</li>
            <li>Privacy Policy</li>
            

        </div>

        <div className='footer-1'>
            <h2 className='footer-heading'>OUR WORK</h2>
            <hr/>
            <ul className='footer-content'></ul>
            <li>Education</li>
            <li>Health</li>
            <li>Livelihood</li>
            <li>Women Empowerment</li>
            

        </div>

        <div className='footer-1'>
            <h2 className='footer-heading'>CAMPAINGS</h2>
            <hr/>
            <ul className='footer-content'></ul>
            <li>Shiksha Ka Naya Rukh</li>
            <li>Health Cannot Wait</li>
            <li>She Can Fly</li>
            <li>Tayyari Kal Ki</li>
            

        </div>
        <div className='footer-logo'>
            <h2 className='footer-heading'>CONTACTS</h2>
            <hr/>
            <div className='logo-icon'>
                <div><img src='src/assets/icons8-facebook-50.png'/></div>
                <div><img src='src/assets/icons8-linkedin-50.png'/></div>
                <div><img src='src/assets/icons8-twitter-circled-50.png'/></div>
                <div><img src='src/assets/icons8-youtube-music-50.png'/></div>
                </div>
            

        </div>
        
    </div>
    <p>Copyright © 2024 DonateEase . All Rights Reserved</p>
    </div>
  )
}

export default Footer
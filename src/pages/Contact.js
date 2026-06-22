import React from 'react'
import '../styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAt} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {

  const copyToClipboard = async () => {
    const email = 'lalithkumarmsd7@gmail.com';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      toast.success('Email copied to clipboard!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        type:'success',
        className: 'custom-toast'
      });
    } catch (error) {
      toast.error('Failed to copy!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }


  }
  return (
    <div className='contact-page-wrapper'>
      
      {/* Header Panel */}
      <div className='contact-header-panel'>
        <div className='title-area'>
          <div className='icon-circle' onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faAt} className='header-at-icon' />
          </div>
          <div>
            <h1>CONTACT ME</h1>
            <p className='subtitle'>Feel free to reach out for R&D collaborations or job opportunities</p>
          </div>
        </div>
      </div>

      <div className='contact-container'>
        <ToastContainer />
        <div className='contact-card'>
          <div className='contact-info-section'>
            <p className='contact-intro'>
              For research collaborations, R&D projects, or professional opportunities, please reach out directly using the email card below or connect with me through my social channels.
            </p>
          </div>
          
          <div className='contact-actions-section'>
            <div className='mail-action-card' onClick={copyToClipboard} title="Click to copy email address">
              <div className='mail-icon-glow'>
                <FontAwesomeIcon icon={faAt} className='contact-at-icon' />
              </div>
              <div className='mail-details'>
                <span className='mail-label'>EMAIL ADDRESS</span>
                <span className='mail-address'>lalithkumarmsd7@gmail.com</span>
              </div>
              <div className='copy-badge'>Click to Copy</div>
            </div>
            
            <div className='socials-grid-wrapper'>
              <span className='socials-label'>CONNECT WITH ME</span>
              <div className='other-wrapper'>
                <div className='social-icon-wrapper'>
                  <a href='https://github.com/LalithKumar-S' target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} className='contact-icon'/>
                  </a>
                </div>
                <div className='social-icon-wrapper'>
                  <a href='https://linkedin.com/in/lalithkumar007' target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className='contact-icon'/>
                  </a>
                </div>
                <div className='social-icon-wrapper'>
                  <a href='https://www.instagram.com/lalith_kumar_.s/' target="_blank" rel="noopener noreferrer" title="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className='contact-icon'/>
                  </a>
                </div>
                <div className='social-icon-wrapper'>
                  <a href='https://www.youtube.com/channel/UC7T-yxPQAxMLnRze57iYq9Q/featured' target="_blank" rel="noopener noreferrer" title="YouTube">
                    <FontAwesomeIcon icon={faYoutube} className='contact-icon'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


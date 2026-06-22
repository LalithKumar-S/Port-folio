import React from 'react'
import '../styles/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip, faCode, faTools, faAtom, faBrain } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <>
    <div className='about-container'>
      <div className='about'>
        <p id='title'>ABOUT ME</p>
        <p id='par'>
          Hi, I'm Lalith. I am an Electronics and Communication Engineer specializing in <strong>Analog Integrated Circuit Design, Semiconductor Devices, and Low-Power VLSI Systems</strong>. My engineering philosophy bridges the gap between device physics and practical circuit architecture.
          <br/><br/>
          From analyzing the nanoscale behaviors of Carbon Nanotube Field-Effect Transistors (CNTFETs) to designing and simulating core analog blocks like Op-Amps, BGRs, and ADCs, I focus on optimizing the trade-offs between power, speed, and area. Whether in the lab conducting research or executing hundreds of corner simulations in Cadence Virtuoso, I thrive on making silicon smarter, faster, and significantly more energy-efficient.
        </p>
      </div>
      <div className='about-img-wrapper'>
        <img src='https://programminginsider.com/wp-content/uploads/2023/10/techies.gif'
        className='about-img' alt='Tech illustration'/>
      </div>
    </div>
    <hr/>
    <div id='skills'>
      <p className='section-title'>TECHNICAL SKILLS</p>
      <div className='skills-grid'>
        <div className='skill-card'>
          <FontAwesomeIcon icon={faMicrochip} className='skill-icon' />
          <h3>Analog & VLSI Design</h3>
          <p>Op-Amps, Amplifiers, Bandgap References, ADC Fundamentals, Memory Elements, Low-Power Design Methodologies</p>
        </div>
        <div className='skill-card'>
          <FontAwesomeIcon icon={faAtom} className='skill-icon' />
          <h3>Semiconductor Physics</h3>
          <p>MOSFET Fundamentals, CNTFET Modeling, Device Physics, Nanoscale Technology Node Exploration</p>
        </div>
        <div className='skill-card'>
          <FontAwesomeIcon icon={faTools} className='skill-icon' />
          <h3>EDA Tools</h3>
          <p>Cadence Virtuoso, Synopsys TCAD, Microwind, MATLAB</p>
        </div>
        <div className='skill-card'>
          <FontAwesomeIcon icon={faCode} className='skill-icon' />
          <h3>Languages</h3>
          <p>Python, C</p>
        </div>
        <div className='skill-card'>
          <FontAwesomeIcon icon={faBrain} className='skill-icon' />
          <h3>Research Areas</h3>
          <p>Analog IC Design, Low-Power VLSI, Semiconductor Devices, Mixed-Signal Systems, TCAD</p>
        </div>
      </div>
    </div>
    </>
  )
}


import React from 'react'
import profile from '../assets/profile.jpeg'
import '../styles/Home.css'

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-image-container">
        <div className="circle-frame">
          <img src={profile} alt='Lalith Kumar S' className="hero-image" />
        </div>
      </div>
      <div className='heroBox'>
        <h1 className='name'>Lalith Kumar S</h1>
        <h2 className="title">Analog IC Design & VLSI Research Engineer</h2>
        <p className="para">
          "Designing low-power, high-efficiency silicon architectures for the next generation of nanoscale technologies."
        </p>
        <div className="gist-container">
          <p className="gist">
            Electronics and Communication Engineer with a strong interest in Analog Integrated Circuit Design, Semiconductor Devices, and Low-Power VLSI Systems. Research experience includes CNTFET-based circuit design, device modeling and performance optimization for nanoscale technologies.
          </p>
        </div>
        <a className="hbtn hb-fill-right-bg"
          href="/RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >Download CV</a>
      </div>
    </section>
  )
}


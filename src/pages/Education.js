import React from 'react'
import '../styles/Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faBookOpen, faSchool } from '@fortawesome/free-solid-svg-icons'

export default function Education() {
  return (
    <div className='education-page-wrapper'>
      
      {/* Header Panel */}
      <div className='education-header-panel'>
        <div className='title-area'>
          <div className='icon-circle'>
            <FontAwesomeIcon icon={faUserGraduate} className='header-grad-icon' />
          </div>
          <div>
            <h1>MY EDUCATION JOURNEY</h1>
            <p className='subtitle'>Academic milestones that shaped my foundation in ECE and Research</p>
          </div>
        </div>
        <div className='motto-area'>
          <div className='motto-chip'>
            <p>⚡ Building circuits. Building knowledge. Building the future.</p>
          </div>
        </div>
      </div>

      {/* SVG Graph Container */}
      <div className='graph-container'>
        <svg viewBox="0 0 800 450" className="grade-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            {/* Glow Filter */}
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Linear Gradient for Line */}
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8000ff" />
              <stop offset="50%" stopColor="#5be1f0" />
              <stop offset="100%" stopColor="#bf5bff" />
            </linearGradient>

            {/* Linear Gradient for Area Fill */}
            <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(91, 225, 240, 0.15)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </linearGradient>
          </defs>

          {/* Grid lines (dashed, light gray) */}
          <line x1="100" y1="100" x2="720" y2="100" className="grid-line" strokeDasharray="5,5" stroke="rgba(255,255,255,0.06)" />
          <line x1="100" y1="150" x2="720" y2="150" className="grid-line" strokeDasharray="5,5" stroke="rgba(255,255,255,0.06)" />
          <line x1="100" y1="200" x2="720" y2="200" className="grid-line" strokeDasharray="5,5" stroke="rgba(255,255,255,0.06)" />
          <line x1="100" y1="250" x2="720" y2="250" className="grid-line" strokeDasharray="5,5" stroke="rgba(255,255,255,0.06)" />
          <line x1="100" y1="300" x2="720" y2="300" className="grid-line" strokeDasharray="5,5" stroke="rgba(255,255,255,0.06)" />
          <line x1="100" y1="350" x2="720" y2="350" className="grid-line" stroke="rgba(255,255,255,0.15)" />

          {/* Y Axis Labels */}
          <text x="75" y="105" className="axis-label-y">100%</text>
          <text x="75" y="155" className="axis-label-y">90%</text>
          <text x="75" y="205" className="axis-label-y">80%</text>
          <text x="75" y="255" className="axis-label-y">70%</text>
          <text x="75" y="305" className="axis-label-y">60%</text>
          <text x="75" y="355" className="axis-label-y">50%</text>

          {/* X & Y Axis titles */}
          <text x="45" y="225" className="axis-title-y" transform="rotate(-90 45 225)">Grades / Percentage (%)</text>
          <text x="410" y="415" className="axis-title-x">Education Level</text>

          {/* Projection Dashed Lines */}
          {/* SSLC Point: 75% -> y=225, x=200 */}
          <line x1="100" y1="225" x2="200" y2="225" className="projection-line" strokeDasharray="4,4" stroke="rgba(91, 225, 240, 0.4)" />
          <line x1="200" y1="350" x2="200" y2="225" className="projection-line" strokeDasharray="4,4" stroke="rgba(91, 225, 240, 0.4)" />

          {/* HSC Point: 80.2% -> y=199, x=450 */}
          <line x1="100" y1="199" x2="450" y2="199" className="projection-line" strokeDasharray="4,4" stroke="rgba(91, 225, 240, 0.4)" />
          <line x1="450" y1="350" x2="450" y2="199" className="projection-line" strokeDasharray="4,4" stroke="rgba(91, 225, 240, 0.4)" />

          {/* B.Tech Point: 89.9% -> y=150.5, x=700 */}
          <line x1="100" y1="150.5" x2="700" y2="150.5" className="projection-line" strokeDasharray="4,4" stroke="rgba(91, 225, 240, 0.4)" />
          <line x1="700" y1="350" x2="700" y2="150.5" className="projection-line" strokeDasharray="4,4" stroke="rgba(91, 225, 240, 0.4)" />

          {/* Area under the path */}
          <path d="M 200 350 L 200 225 L 450 199 L 700 150.5 L 700 350 Z" fill="url(#area-gradient)" />

          {/* Linear Line Connectors */}
          <path d="M 200 225 L 450 199 L 700 150.5" fill="none" stroke="url(#line-gradient)" strokeWidth="4" filter="url(#neon-glow)" />

          {/* Nodes Circles */}
          {/* P1: SSLC */}
          <circle cx="200" cy="225" r="7" className="graph-dot dot-sslc" fill="#fafafa" stroke="#8000ff" strokeWidth="3" filter="url(#neon-glow)" />
          {/* P2: HSC */}
          <circle cx="450" cy="199" r="7" className="graph-dot dot-hsc" fill="#fafafa" stroke="#5be1f0" strokeWidth="3" filter="url(#neon-glow)" />
          {/* P3: BTech */}
          <circle cx="700" cy="150.5" r="7" className="graph-dot dot-btech" fill="#fafafa" stroke="#bf5bff" strokeWidth="3" filter="url(#neon-glow)" />

          {/* Tooltip Badges (Static premium labels as per the reference design image) */}
          {/* SSLC Tooltip */}
          <g transform="translate(155, 160)" className="graph-tooltip">
            <rect x="0" y="0" width="90" height="38" rx="6" fill="rgba(20, 20, 30, 0.9)" stroke="rgba(128, 0, 255, 0.4)" strokeWidth="1" />
            <text x="45" y="16" textAnchor="middle" fill="rgba(250,250,250,0.6)" fontSize="9" fontWeight="bold">SSLC</text>
            <text x="45" y="29" textAnchor="middle" fill="#5be1f0" fontSize="11" fontWeight="bolder">75%</text>
            <polygon points="40,38 50,38 45,43" fill="rgba(20, 20, 30, 0.9)" stroke="rgba(128, 0, 255, 0.4)" strokeWidth="0" />
          </g>

          {/* HSC Tooltip */}
          <g transform="translate(405, 134)" className="graph-tooltip">
            <rect x="0" y="0" width="90" height="38" rx="6" fill="rgba(20, 20, 30, 0.9)" stroke="rgba(91, 225, 240, 0.4)" strokeWidth="1" />
            <text x="45" y="16" textAnchor="middle" fill="rgba(250,250,250,0.6)" fontSize="9" fontWeight="bold">HSC</text>
            <text x="45" y="29" textAnchor="middle" fill="#5be1f0" fontSize="11" fontWeight="bolder">80.2%</text>
            <polygon points="40,38 50,38 45,43" fill="rgba(20, 20, 30, 0.9)" stroke="rgba(91, 225, 240, 0.4)" strokeWidth="0" />
          </g>

          {/* BTech Tooltip */}
          <g transform="translate(650, 80)" className="graph-tooltip">
            <rect x="0" y="0" width="100" height="42" rx="6" fill="rgba(20, 20, 30, 0.9)" stroke="rgba(191, 91, 255, 0.4)" strokeWidth="1" />
            <text x="50" y="16" textAnchor="middle" fill="rgba(250,250,250,0.6)" fontSize="9" fontWeight="bold">B.Tech (ECE)</text>
            <text x="50" y="32" textAnchor="middle" fill="#bf5bff" fontSize="11" fontWeight="bolder">8.99 CGPA</text>
            <polygon points="45,42 55,42 50,47" fill="rgba(20, 20, 30, 0.9)" stroke="rgba(191, 91, 255, 0.4)" strokeWidth="0" />
          </g>

          {/* X Axis Labels */}
          <text x="200" y="380" className="axis-label-x">SSLC</text>
          <text x="450" y="380" className="axis-label-x">HSC</text>
          <text x="700" y="380" className="axis-label-x">B.Tech</text>
        </svg>
      </div>

      {/* Detail Cards List */}
      <div className='cards-parent'>
        
        {/* Card 1: B.Tech */}
        <div className='education-card-row'>
          <div className='card-icon-container'>
            <FontAwesomeIcon icon={faUserGraduate} className='card-timeline-icon' />
          </div>
          <div className='education-card-content'>
            <span className='card-badge'>2021 - 2025</span>
            <h3>B.Tech in Electronics and Communication Engineering</h3>
            <h4 className='institution-name'>SRM Institute of Science and Technology, Chennai</h4>
            <p className='score-highlight'>CGPA: 8.99 / 10.00</p>
            <p className='card-details'>Specialized in Semiconductor devices, low-power VLSI design, and analog integrated circuits. Ranked among the top 5 students in the department.</p>
          </div>
        </div>

        {/* Card 2: HSC */}
        <div className='education-card-row'>
          <div className='card-icon-container'>
            <FontAwesomeIcon icon={faBookOpen} className='card-timeline-icon' />
          </div>
          <div className='education-card-content'>
            <span className='card-badge'>2020 - 2021</span>
            <h3>Higher Secondary Education (Class XII)</h3>
            <h4 className='institution-name'>Vani Vidyalaya Matric. Hr. Sec. School, Vellore</h4>
            <p className='score-highlight'>Percentage: 80.2%</p>
            <p className='card-details'>Focused core subjects: Physics, Chemistry, Mathematics, and Computer Science.</p>
          </div>
        </div>

        {/* Card 3: SSLC */}
        <div className='education-card-row'>
          <div className='card-icon-container'>
            <FontAwesomeIcon icon={faSchool} className='card-timeline-icon' />
          </div>
          <div className='education-card-content'>
            <span className='card-badge'>2018 - 2019</span>
            <h3>Secondary Education (Class X)</h3>
            <h4 className='institution-name'>Vani Vidyalaya Matric. Hr. Sec. School, Vellore</h4>
            <p className='score-highlight'>Percentage: 75.0%</p>
            <p className='card-details'>Acquired fundamental secondary education certificate with distinction in mathematics.</p>
          </div>
        </div>

      </div>

    </div>
  )
}


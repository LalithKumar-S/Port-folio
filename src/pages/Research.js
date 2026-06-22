import React, { useState } from 'react'
import '../styles/Research.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faBook, faFlask, faBriefcase, faChevronDown, faChevronUp, faCircle } from '@fortawesome/free-solid-svg-icons'

export default function Research() {
  // State to track which node details are open
  // Keys can be: 'pub1', 'pub2', 'proj1', 'proj2', 'proj3', 'exp1'
  const [openNodes, setOpenNodes] = useState({
    pub1: false,
    pub2: false,
    proj1: false,
    proj2: false,
    proj3: false,
    exp1: false,
  });

  const toggleNode = (nodeKey) => {
    setOpenNodes((prev) => ({
      ...prev,
      [nodeKey]: !prev[nodeKey],
    }));
  };

  const expandAll = () => {
    setOpenNodes({
      pub1: true,
      pub2: true,
      proj1: true,
      proj2: true,
      proj3: true,
      exp1: true,
    });
  };

  const collapseAll = () => {
    setOpenNodes({
      pub1: false,
      pub2: false,
      proj1: false,
      proj2: false,
      proj3: false,
      exp1: false,
    });
  };

  return (
    <div className='research-page-wrapper'>
      
      {/* Header Panel */}
      <div className='research-header'>
        <div className='title-area'>
          <div className='icon-circle'>
            <FontAwesomeIcon icon={faFlask} className='header-flask-icon' />
          </div>
          <div>
            <h1>RESEARCH & PROJECTS</h1>
            <p className='subtitle'>Nano-scale semiconductor modeling & analog VLSI architecture design</p>
          </div>
        </div>
        <div className='tree-controls'>
          <button className='control-btn' onClick={expandAll}>Expand All Branches</button>
          <button className='control-btn' onClick={collapseAll}>Collapse All Branches</button>
        </div>
      </div>

      {/* Tree Branches Structure */}
      <div className='tree-container'>
        <div className='tree-root'>
          <div className='root-node'>
            <span className='root-text'>LALITH KUMAR S</span>
            <span className='root-subtext'>R&D Portfolio Tree</span>
          </div>

          <div className='tree-branches'>
            
            {/* Branch 1: Publications */}
            <div className='tree-branch'>
              <div className='branch-header'>
                <FontAwesomeIcon icon={faBook} className='branch-icon' />
                <h2>Research Publications</h2>
              </div>
              <div className='branch-leaves'>
                
                {/* Leaf 1: BEAST Flip Flop */}
                <div className={`tree-leaf-node ${openNodes.pub1 ? 'active' : ''}`}>
                  <div className='leaf-header' onClick={() => toggleNode('pub1')}>
                    <span className='leaf-bullet'><FontAwesomeIcon icon={faCircle} /></span>
                    <span className='leaf-title'>BEAST Flip-Flop Design & Optimization (2025)</span>
                    <span className='leaf-arrow'>
                      <FontAwesomeIcon icon={openNodes.pub1 ? faChevronUp : faChevronDown} />
                    </span>
                  </div>
                  {openNodes.pub1 && (
                    <div className='leaf-content'>
                      <span className='leaf-badge'>ICIMA 2025 Conference</span>
                      <p className='leaf-desc'><strong>Full Title:</strong> Design and Optimization of CNTFET based Binary Edge Activated Synchronous Trigger Flip-Flop (BEAST)</p>
                      <ul className='leaf-list'>
                        <li>Published in the 7th International Conference on Inventive Material Science and Applications.</li>
                        <li>Designed a CNTFET-based low-power flip-flop architecture for Ultra Large Scale Integration (ULSI) applications.</li>
                        <li>Achieved major improvements in power consumption, switching speed, and Power Delay Product (PDP) through device-level parameter optimization.</li>
                        <li>Validated performance through extensive Cadence Virtuoso simulations.</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Leaf 2: TG Flip Flop */}
                <div className={`tree-leaf-node ${openNodes.pub2 ? 'active' : ''}`}>
                  <div className='leaf-header' onClick={() => toggleNode('pub2')}>
                    <span className='leaf-bullet'><FontAwesomeIcon icon={faCircle} /></span>
                    <span className='leaf-title'>TG Logic CNTFET Flip-Flop Design (2025)</span>
                    <span className='leaf-arrow'>
                      <FontAwesomeIcon icon={openNodes.pub2 ? faChevronUp : faChevronDown} />
                    </span>
                  </div>
                  {openNodes.pub2 && (
                    <div className='leaf-content'>
                      <span className='leaf-badge'>ICMSCI 2025 Conference</span>
                      <p className='leaf-desc'><strong>Full Title:</strong> CNTFET based Pulse Implied Binary Edge Activated Flip-Flop using Transmission Gate Logic</p>
                      <ul className='leaf-list'>
                        <li>Published in the International Conference on Multi-Agent Systems for Collaborative Intelligence.</li>
                        <li>Proposed a transmission-gate based Carbon Nanotube FET (CNTFET) flip-flop architecture for low-power VLSI systems.</li>
                        <li>Performed comparative analysis against conventional silicon MOSFET implementations.</li>
                        <li>Investigated low-power design methodologies at nanoscale technology nodes.</li>
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Branch 2: Research Projects */}
            <div className='tree-branch'>
              <div className='branch-header'>
                <FontAwesomeIcon icon={faFileCode} className='branch-icon' />
                <h2>Research Projects</h2>
              </div>
              <div className='branch-leaves'>

                {/* Leaf 3: Device Modeling */}
                <div className={`tree-leaf-node ${openNodes.proj1 ? 'active' : ''}`}>
                  <div className='leaf-header' onClick={() => toggleNode('proj1')}>
                    <span className='leaf-bullet'><FontAwesomeIcon icon={faCircle} /></span>
                    <span className='leaf-title'>CNTFET Device Modeling & Analysis</span>
                    <span className='leaf-arrow'>
                      <FontAwesomeIcon icon={openNodes.proj1 ? faChevronUp : faChevronDown} />
                    </span>
                  </div>
                  {openNodes.proj1 && (
                    <div className='leaf-content'>
                      <span className='leaf-badge-proj'>Device Modeling</span>
                      <ul className='leaf-list'>
                        <li>Studied the influence of Carbon Nanotube chirality and diameter on threshold voltage (V<sub>th</sub>), drain current (I<sub>d</sub>), and power consumption.</li>
                        <li>Investigated analytical relationships between CNT physical structures and transistor performance metrics.</li>
                        <li>Analyzed nanoscale device behavior using semiconductor device modeling principles and Synopsys TCAD simulation tools.</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Leaf 4: Low Power Flip Flop */}
                <div className={`tree-leaf-node ${openNodes.proj2 ? 'active' : ''}`}>
                  <div className='leaf-header' onClick={() => toggleNode('proj2')}>
                    <span className='leaf-bullet'><FontAwesomeIcon icon={faCircle} /></span>
                    <span className='leaf-title'>Low-Power Flip-Flop Designs (CNTFET)</span>
                    <span className='leaf-arrow'>
                      <FontAwesomeIcon icon={openNodes.proj2 ? faChevronUp : faChevronDown} />
                    </span>
                  </div>
                  {openNodes.proj2 && (
                    <div className='leaf-content'>
                      <span className='leaf-badge-proj'>VLSI Architecture</span>
                      <ul className='leaf-list'>
                        <li>Designed and optimized CNTFET-based flip-flop topologies for low-power VLSI digital circuits.</li>
                        <li>Evaluated Power Delay Product (PDP), Energy Delay Product (EDP), and power dissipation metrics.</li>
                        <li>Performed extensive comparative trade-off studies between CNTFET and traditional MOSFET configurations.</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Leaf 5: Analog Circuit Studies */}
                <div className={`tree-leaf-node ${openNodes.proj3 ? 'active' : ''}`}>
                  <div className='leaf-header' onClick={() => toggleNode('proj3')}>
                    <span className='leaf-bullet'><FontAwesomeIcon icon={faCircle} /></span>
                    <span className='leaf-title'>Analog Circuit Design Studies</span>
                    <span className='leaf-arrow'>
                      <FontAwesomeIcon icon={openNodes.proj3 ? faChevronUp : faChevronDown} />
                    </span>
                  </div>
                  {openNodes.proj3 && (
                    <div className='leaf-content'>
                      <span className='leaf-badge-proj'>Analog Circuit Design</span>
                      <ul className='leaf-list'>
                        <li>Designed and simulated core Analog building blocks including Operational Amplifiers (Op-Amps), Amplifiers, and Bandgap Reference (BGR) circuits.</li>
                        <li>Analyzed AC/DC gain, stability margin, bandwidth, and power-performance tradeoffs.</li>
                        <li>Validated circuit layouts under multi-corner parameters using Cadence Virtuoso.</li>
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Branch 3: Industry Experience */}
            <div className='tree-branch'>
              <div className='branch-header'>
                <FontAwesomeIcon icon={faBriefcase} className='branch-icon' />
                <h2>Industry Experience</h2>
              </div>
              <div className='branch-leaves'>

                {/* Leaf 6: Sasken Intern */}
                <div className={`tree-leaf-node ${openNodes.exp1 ? 'active' : ''}`}>
                  <div className='leaf-header' onClick={() => toggleNode('exp1')}>
                    <span className='leaf-bullet'><FontAwesomeIcon icon={faCircle} /></span>
                    <span className='leaf-title'>Analog Circuit Design Intern @ Sasken Silicon</span>
                    <span className='leaf-arrow'>
                      <FontAwesomeIcon icon={openNodes.exp1 ? faChevronUp : faChevronDown} />
                    </span>
                  </div>
                  {openNodes.exp1 && (
                    <div className='leaf-content'>
                      <span className='leaf-badge-exp'>Jan 2025 - Jul 2025</span>
                      <p className='leaf-desc'><strong>Sasken Silicon Technologies Pvt Ltd, Bangalore</strong></p>
                      <ul className='leaf-list'>
                        <li>Designed and analyzed analog building blocks including Amplifiers, Op-Amps, Bandgap References, and ADC subsystems.</li>
                        <li>Performed DC, AC, transient, and corner simulations in Cadence Virtuoso to assure performance robustness.</li>
                        <li>Evaluated trade-offs among gain, bandwidth, power consumption, and silicon area through extensive simulation runs.</li>
                        <li>Executed over 200+ simulations to characterize circuit behavior under varied temperature, voltage, and process parameters.</li>
                        <li>Participated actively in analog circuit validation and semiconductor R&D workflows.</li>
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

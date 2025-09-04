import React from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const RESUME_URL = '/assets/docs/Resume_Lucas_Holliday.pdf'

export default function About() {
  return (
    <main>
      <div className="container">
        <h1 className="page-title">About Me</h1>
        <div className="about-grid">
          <img
            src="/assets/images/LucasHeadshot.png"
            alt="Lucas Holliday headshot"
            className="headshot"
          />

          <div>
            <h2>Lucas Holliday</h2>
            <p>
              I’m a junior at Northwestern University pursuing a dual degree in Computer Science and Industrial Engineering and Management Science. My coursework has included data structures, algorithms, artificial intelligence, machine learning, data analysis and optimization, probability and statistics, and economics and finance. 

            </p>
            <p>
              Outside of academics, I enjoy soccer, basketball, tennis, golfing, and skiing.
            </p>

            

            {/* Actions: Download first (button), then plain icon links */}
            <div className="about-actions">
             
            <div className="actions">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"><button className="button primary">Download Resume <Download size={18}/></button></a>
            </div>
              
              
              <nav className="actions" aria-label="social links">
                          <a href="https://github.com/lucasholliday" className="button" target="_blank" rel="noopener noreferrer"><Github size={28}/>Github</a>
                          <a href="https://linkedin.com/in/lucas-holliday" className="button" target="_blank" rel="noopener noreferrer"><Linkedin size={28}/>Linkedin</a>
                          <a href="mailto:lucasholliday2027@u.northwestern.edu" className="button"><Mail size={28}/>Email</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>

    
  )
}

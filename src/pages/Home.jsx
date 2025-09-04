import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, ArrowRight, Download, Github, Linkedin, Mail, Code2, BarChart3, Award, Dribbble, ChartNetwork } from 'lucide-react'
import { TbChess } from 'react-icons/tb'


const RESUME_URL = '/assets/docs/Resume_Lucas_Holliday.pdf'
const ICON_SIZE = 48

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="education">
            <GraduationCap size={16}/> Northwestern | CS & Industrial Engineering
          </div>
          <h1>Hi, I’m Lucas Holliday</h1>
          <p className="lead">
            Studying Computer Science and Industrial Engineering interested in applying AI, analytics, and optimization to solve complex business problems.
          </p>
          <div className="actions">
            <Link to="/projects"><button className="button primary">View My Work <ArrowRight size={16}/></button></Link>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"><button className="button outline">Download Resume <Download size={16}/></button></a>
          </div>
          <nav className="actions" aria-label="social links">
            <a href="https://github.com/lucasholliday" className="button" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={28}/></a>
            <a href="https://linkedin.com/in/lucas-holliday" className="button" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><Linkedin size={28}/></a>
            <a href="mailto:lucasholliday2027@u.northwestern.edu" className="button" aria-label="Email"><Mail size={28}/></a>
          </nav>
        </div>
      </section>

     
    

{/* Featured Projects */}
<section>
  <div className="container">
    <h2 className="page-title">Featured Projects</h2>
    <p className="page-subtitle">Three highlights of my project work.</p>

    <div className="grid cols-2 cols-3">
      {/* Hoop Deck */}
      <article className="card">
        <p className="pill orange">Web App</p>
        <div className="media purple"><Dribbble size={ICON_SIZE} /></div>
        <div className="body">
          <h3>Hoop Deck</h3>
          <p>AI-powered March Madness app to predict game outcomes and support bracket analysis.</p>
          <ul className="badges">
            <li className="badge">AWS</li>
            <li className="badge">SageMaker</li>
            <li className="badge">RDS</li>
            <li className="badge">S3</li>
            <li className="badge">Lambda</li>
            <li className="badge">API Gateway</li>
            <li className="badge">Docker</li>
            <li className="badge">Python</li>
            <li className="badge">SQL</li>
          </ul>
          <footer className="actions left">
            <a href="https://github.com/lucasholliday/hoopdeck-aws" className="button" target="_blank" rel="noopener noreferrer">
              <Github size={20}/> GitHub
            </a>
          </footer>
        </div>
      </article>

      {/* NBA Social Network Analysis */}
      <article className="card">
        <p className="pill red">Data Analysis</p>
        <div className="media blue"><ChartNetwork size={ICON_SIZE} /></div>
        <div className="body">
          <h3>NBA Social Network Analysis</h3>
          <p>Built player passing networks and applied advanced network modeling to evaluate how player roles and connections impact team success and scoring performance.</p>
          <ul className="badges">
            <li className="badge">R</li>
            <li className="badge">Python</li>
            <li className="badge">pandas</li>
            <li className="badge">igraph</li>
            <li className="badge">Network Analysis</li>
            <li className="badge">Data Visualization</li>
          </ul>
          <footer className="actions left">
            <a href="https://github.com/lucasholliday/nba-passing-networks" className="button" target="_blank" rel="noopener noreferrer">
              <Github size={20}/> GitHub
            </a>
          </footer>
        </div>
      </article>

      {/* Chess Game */}
      <article className="card">
        <p className="pill blue">Software Development</p>
        <div className="media silver"><TbChess size={ICON_SIZE} /></div>
        <div className="body">
          <h3>Chess Game</h3>
          <p>Built a chess engine focused on test-driven design and boundary value analysis, achieving 100% code coverage and no mutations.</p>
          <ul className="badges">
            <li className="badge">Java</li>
            <li className="badge">TDD</li>
            <li className="badge">BVA</li>
            <li className="badge">PIT Mutation Testing</li>
            <li className="badge">JUnit</li>
            <li className="badge">JaCoCo</li>
          </ul>
          <footer className="actions left">
            <a href="https://github.com/lucasholliday" className="button" target="_blank" rel="noopener noreferrer">
              <Github size={20}/> GitHub
            </a>
          </footer>
        </div>
      </article>
    </div>

    <footer className="actions">
      <Link to="/projects" onClick={() => window.scrollTo({ top: 0, left: 0})}>
        <button className="button outline">View all projects <ArrowRight size={16}/></button>
      </Link>
    </footer>
  </div>
</section>

    

    </main>
  )
}

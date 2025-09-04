import React from 'react'
import { Code2, BarChart3, Trophy, FileSpreadsheet, FileText, Dribbble, ChartNetwork, PencilRuler, Github, Linkedin, Mail, Blocks, Square, Factory, Smartphone } from 'lucide-react'
import { TbChess } from "react-icons/tb"
import { Link } from "react-router-dom"

const ICON_SIZE = 48

export default function Projects() {
  return (
    <main>
      <div className="container">
        <h1 className="page-title">Projects</h1>
        <br></br>

        <div className="grid cols-2 cols-3">
          <article className="card">
            <p className="pill orange">Web App</p>
            <div className="media purple"><Dribbble size={ICON_SIZE} /></div>
            <div className="body">
              <h2>Hoop Deck</h2>
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
                <a href="https://github.com/lucasholliday/hoopdeck-aws" className="button" target="_blank" rel="noopener noreferrer"><Github size={24}/>Github</a>
              </footer>
            </div>
          </article>

          <article className="card">
            <p className="pill red">Data Analysis</p>
            <div className="media blue"><ChartNetwork size={ICON_SIZE} /></div>
            <div className="body">
              <h2>NBA Social Network Analysis</h2>
              <p>Built player passing networks and applied advanced network modeling to evaluate how player roles and connections impact team success and scoring performance.</p>
              <ul className="badges">
                <li className="badge">R</li>
                <li className="badge">Python</li>
                <li className="badge">pandas</li>
                <li className="badge">igraph</li>
                <li className="badge">Git</li>
                <li className="badge">Network Analysis</li>
                <li className="badge">Data Visualization</li>
              </ul>

              <footer className="actions left">
                <a href="https://github.com/lucasholliday/nba-passing-networks" className="button" target="_blank" rel="noopener noreferrer"><Github size={24}/>Github</a>
              </footer>


            </div>
          </article>

          <article className="card">
            <p className="pill blue">Software Development</p>
            <div className="media silver"><TbChess size={ICON_SIZE} /></div>
            <div className="body">
              <h2>Chess Game</h2>
              <p>Built a chess engine focused on test-driven design and boundary value analysis, achieving 100% code coverage and no mutations.</p>
              <ul className="badges">
                <li className="badge">Java</li>
                <li className="badge">Git</li>
                <li className="badge">TDD</li>
                <li className="badge">BVA</li>
                <li className="badge">JUnit</li>
                <li className="badge">PIT Mutation Testing</li>
                <li className="badge">JaCoCo</li>
                <li className="badge">i18n</li>
                
              </ul>

              <footer className="actions left">
                <a href="https://github.com/lucasholliday" className="button" target="_blank" rel="noopener noreferrer"><Github size={24}/>Github</a>
              </footer>
            </div>
          </article>

          <article className="card">
            <p className="pill green">Excel Analysis</p>
            <div className="media green"><Factory size={ICON_SIZE} /></div>
            <div className="body">
              <h2>Case Study: Power Generation</h2>
              <p>Built a 26-year Excel model to evaluate landfill gas-to-energy options, comparing NPVs and testing sensitivity to market and policy factors.</p>
              <ul className="badges">
                <li className="badge">Excel</li>
                <li className="badge">Decision Analysis</li>
                <li className="badge">NPV Modeling</li>
                <li className="badge">Data Visualization</li>
              </ul>

              <footer className="actions left">
                <a href="/assets/docs/Case1Report.docx" className="button" target="_blank" rel="noopener noreferrer">
                  <FileSpreadsheet size={24}/> Details
                </a>
              </footer>
            </div>
          </article>

          <article className="card">
            <p className="pill green">Excel Analysis</p>
            <div className="media green"><Smartphone size={ICON_SIZE} /></div>
            <div className="body">
              <h2>Case Study: Smart Software</h2>
              <p>Modeled Cerebrosoft’s AI launch in Excel with a decision tree, applying Bayes’ Theorem and Value of Information to guide strategy.</p>
              <ul className="badges">
                <li className="badge">Excel</li>
                <li className="badge">TreePlan</li>
                <li className="badge">Decision Analysis</li>
                <li className="badge">Probability</li>
                <li className="badge">Value of Information</li>
              </ul>

              <footer className="actions left">
                <a href="/assets/docs/Case2Report.docx" className="button" target="_blank" rel="noopener noreferrer">
                  <FileSpreadsheet size={24}/> Details
                </a>
              </footer>
            </div>
          </article>

          <article className="card">
            <p className="pill cyan">Product Development</p>
            <div className="media orange"><Blocks size={ICON_SIZE} /></div>
            <div className="body">
              <h2>Nesting Number Blocks</h2>
              <p>Designed wooden math manipulatives for Misericordia, a Chicago residential community for adults with disabilities, using prototyping and user-centered design.</p>
              <ul className="badges">
                <li className="badge">Product Design</li>
                <li className="badge">Prototyping</li>
                <li className="badge">Accessibility</li>
                <li className="badge">Presentation</li>
                <li className="badge">Collaboration</li>

              </ul>

              <footer className="actions left">
                <a href="/assets/docs/NestingNumberBlocks.pdf" className="button" target="_blank" rel="noopener noreferrer">
                  <FileSpreadsheet size={24}/> Details
                </a>
              </footer>
            </div>
          </article>

          <article className="card">
            <p className="pill yellow">Product Development</p>
            <div className="media pink"><Square size={ICON_SIZE} /></div>
            <div className="body">
              <h2>Crate-X</h2>
              <p>Developed a sustainable, customizable crate system for Tradecraft Crating in Chicago to improve artwork storage and shipping while reducing environmental impact.</p>
              <ul className="badges">
                <li className="badge">Product Design</li>
                <li className="badge">Prototyping</li>
                <li className="badge">Sustainability</li>
                <li className="badge">Presentation</li>
                <li className="badge">Collaboration</li>
              </ul>

              <footer className="actions left">
                <a href="https://www.canva.com/design/DAGF-Yxpf7Q/gRnxFQQ4kB0dGg3OSvOygQ/view?utm_content=DAGF-Yxpf7Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2799dbf5f0" className="button" target="_blank" rel="noopener noreferrer">
                  <FileSpreadsheet size={24}/> Details
                </a>
              </footer>
            </div>
          </article>


        </div>
      </div>
    </main>
  )
}

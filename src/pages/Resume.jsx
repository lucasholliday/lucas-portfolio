import React from 'react'

export default function Resume() {
  return (
    <main>
      <div className="container">
        <h1 className="page-title">Skills</h1>
        <br></br>

        <div className="grid cols-2">
          <article className="card">
            <div className="body">
              <h2>Programming Languages</h2>
              <ul className="badges">
                <li className="badge">Python</li>
                <li className="badge">R</li>
                <li className="badge">Java</li>
                <li className="badge">C</li>
                <li className="badge">C++</li>
                <li className="badge">Assembly</li>
                <li className="badge">MATLAB</li>
                <li className="badge">SQL</li>
                <li className="badge">HTML</li>
                <li className="badge">CSS</li>
                <li className="badge">JavaScript</li>
              </ul>
            </div>
          </article>
          <article className="card">
            <div className="body">
              <h2>Frameworks & Libraries</h2>
              <ul className="badges">
                <li className="badge">React</li>
                <li className="badge">Node.js</li>
                <li className="badge">pandas</li>
                <li className="badge">NumPy</li>
                <li className="badge">matplotlib</li>
                <li className="badge">scikit-learn</li>
                <li className="badge">TensorFlow</li>
                <li className="badge">PyTorch</li>
                <li className="badge">igraph</li>
              </ul>
            </div>
          </article>
          <article className="card">
            <div className="body">
              <h2>Tools & Platforms</h2>
              <ul className="badges">
                <li className="badge">Excel</li>
                <li className="badge">Git</li>
                <li className="badge">AWS</li>
                <li className="badge">RDS</li>
                <li className="badge">S3</li>
                <li className="badge">Lambda</li>
                <li className="badge">API Gateway</li>
                <li className="badge">SageMaker</li>
                <li className="badge">Elastic Beanstalk</li>
                <li className="badge">Azure</li>
                <li className="badge">REST API</li>
                <li className="badge">Docker</li>
                <li className="badge">OpenAI API</li>
                <li className="badge">Power BI</li>
              </ul>
            </div>
          </article>
          <article className="card">
            <div className="body">
              <h2>Coursework</h2>
              {/* CS 111, 211, 212, 213, 310, 349, 348, 397, 396, 336, 343 */}
              {/* EA 1, 2, 3, */}
              {/* IEMS 302, 303, 315, */}
              <ul className="badges">
                <li className="badge">
                  <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/214.html" target="_blank" rel="noopener noreferrer">
                    Data Structures
                  </a>
                </li>
                <li className="badge">
                  <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/336.html" target="_blank" rel="noopener noreferrer">
                    Algorithms
                  </a>
                </li>
                <li className="badge">
                  <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/212.html" target="_blank" rel="noopener noreferrer">
                    Mathematical Foundations
                  </a>
                </li>
                <li className="badge">
                  <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/213-20.html" target="_blank" rel="noopener noreferrer">
                    Computer Systems
                  </a>
                </li>
                <li className="badge">
                  <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/343.html" target="_blank" rel="noopener noreferrer">
                    Operating Systems
                  </a>
                </li>
                <li className="badge">
                  <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/310.html" target="_blank" rel="noopener noreferrer">
                    Scalable Software Architectures
                  </a>
                </li>
                <li className="badge">
                  <a href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/211.html" target="_blank" rel="noopener noreferrer">
                    Fundamentals of Computer Programming
                  </a>
                </li>
                <li className="badge">
                  <a href="https://www.mccormick.northwestern.edu/industrial/academics/courses/descriptions/302.html" target="_blank" rel="noopener noreferrer">
                    Probability
                  </a>
                </li>
                <li className="badge">
                  <a href="https://www.mccormick.northwestern.edu/industrial/academics/courses/descriptions/303.html" target="_blank" rel="noopener noreferrer">
                    Statistics
                  </a>
                </li>

              </ul>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}

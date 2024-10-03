import React from 'react'
import '../styles/viewapplicant.css'
import { Link } from 'react-router-dom'
import Adminnav from './Adminnav'
const ViewApplicant = () => {
  return (
    <div>
          <Adminnav heading="View Applicants"/>
          <main className='main-viewApplicant'>
              <section class="applicant-list">
                  <h2>Applicants for Your Job Openings</h2>
                  <table>
                      <thead>
                          <tr>
                              <th>Applicant Name</th>
                              <th>Applied Job</th>
                              <th>Resume</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>John Doe</td>
                              <td>Software Developer</td>
                              <td><Link to="resume.pdf" target="_blank">Download</Link></td>
                          </tr>
                          <tr>
                              <td>Jane Smith</td>
                              <td>Marketing Intern</td>
                              <td><Link to="resume.docx" target="_blank">Download</Link></td>
                          </tr>
                   
                      </tbody>
                  </table>
              </section>
          </main>
          <footer>
              <p>&copy; 2023 Placement Management System</p>
          </footer>
    </div>
  )
}

export default ViewApplicant
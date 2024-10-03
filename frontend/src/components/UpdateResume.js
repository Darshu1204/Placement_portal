import React from 'react'
import '../styles/updateresume.css'
import Studentnav from './Studentnav'
const Updateresume = () => {
  return (
    <div className='updateResume'>
      <Studentnav heading={"Update Resume"}/>
          <main class="resumeSection">
              <section className="update-form">
                  <h2>Update Your Resume</h2>
                  <form>
                      <div>
                        {/* <label htmlFor="resume"><i class="fas fa-upload"></i>Upload Resume</  label> */}
                        <input type="file" id="resume"  name="resume" accept=".pdf,.doc,.docx"/>
                      <button type="submit">Update</button>
                      </div>

                  <div className='buildCheck'>
                  <a href='https://resume.io/resume-builder?ga_utm_source=google&ga_utm_medium=ppc&ga_utm_campaign=18251012851&ga_utm_term=create%20resume%20online&gad_source=1&gclid=Cj0KCQiA5fetBhC9ARIsAP1UMgF6gichTHdXRAtwXajB8WMv4taJtC5-iPdLfkV2Hy14uQIdKIXBUqMaAg0bEALw_wcB' target='_blank'><i class="fas fa-file"></i>create Resume</a>

                  <a href='https://www.jobscan.co/resume-scanner?utm_term=check%20my%20resume%20ats%20score&utm_campaign=Non+Brand+-+ATS&utm_source=adwords&utm_medium=ppc&hsa_acc=6653739431&hsa_cam=13543830643&hsa_grp=124066336776&hsa_ad=676024188128&hsa_src=g&hsa_tgt=kwd-1457847095009&hsa_kw=check%20my%20resume%20ats%20score&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAiP2tBhBXEiwACslfngDZvI6O6bWsC9X_WNFAwLHNJf_K-qo5h415rEu5kB7GW34fI5a5rhoCQVEQAvD_BwE' target='_blank'><i class="fas fa-check"></i>Check ATS Score</a>
                  </div>
                  </form>
              </section>
          </main>
          <footer>
              <p>&copy; 2023 Placement Management System</p>
          </footer>

    </div>
  )
}

export default Updateresume

import React, {useState} from 'react'
import '../about/about.css'

const About = () => {
const [toggleState, setToggleState] = useState(1);

const toggleTab = (index) => {
  setToggleState(index);
}
  return (
    <section id="about">
      <h2>About me </h2> 
      <div className='container about_container home_container'>
        <div className='about_tabs '>

          <div className={toggleState ===1 ? "about_button about_active" : "about_button"} onClick={()=> toggleTab(1)}>
            <i > Education </i>
          </div>

          <div className={toggleState ===2 ? "about_button about_active" : "about_button"} onClick={()=> toggleTab(2)}>
            <i > Experience </i>
          </div>
          </div>

          <div className='about_section'>
            <div className={toggleState === 1? 'about_content about_content_active' : 'about_content'}>
              <div className='about_data'>
                <div>
                <h3 className='about_title'> Computer Science</h3>
                <span className='about_subtitle'>SQU</span>
                <div className='about_calender'>
                  <i className='uil uil-calendar-alt'></i> <p>2016 - 2022</p>
                </div>

              </div>

              <div>
                <span className='about_rounder'></span>
                <span className='about_line' ></span>
              </div>
              </div>

              <div className='about_data'>
                <div></div>

                <div>
                <span className='about_rounder'></span>
                <span className='about_line' ></span>
              </div>

                <div>
                <h3 className='about_title'> School certificate</h3>
                <span className='about_subtitle'>Rabea’ Al Adawya</span>
                <div className='about_calender'>
                  <i className='uil uil-calendar-alt'></i> <p>2015 - 2016 </p>
                </div>

              </div>


              </div>


            </div>

            <div className={toggleState === 2? 'about_content about_content_active' : 'about_content'}>
              <div className='about_data'>
                <div>
                <h3 className='about_title'> Admin Specialist</h3>
                <span className='about_subtitle'> National University </span>
                <div className='about_calender'>
                  <i className='uil uil-calendar-alt'></i> <p>2023 - Present </p>
                </div>

              </div>

              <div>
                <span className='about_rounder'></span>
                <span className='about_line' ></span>
              </div>
              </div>

              <div className='about_data'>
                <div></div>

                <div>
                <span className='about_rounder'></span>
                <span className='about_line' ></span>
              </div>

                <div>
                <h3 className='about_title'> Graphic design</h3>
                <span className='about_subtitle'>Awj Company</span>
                <div className='about_calender'>
                  <i className='uil uil-calendar-alt'></i> <p> Jan 2023 - Feb 2023 </p>
                </div>

              </div>


              </div>

              <div className='about_data'>
                <div>
                <h3 className='about_title'> UI/UX design</h3>
                <span className='about_subtitle'>Frontech company</span>
                <div className='about_calender'>
                  <i className='uil uil-calendar-alt'></i> <p>May 2022 - Jul 2022 </p>
                </div>

              </div>

              <div>
                <span className='about_rounder'></span>
                <span className='about_line' ></span>
              </div>
              </div>

              <div className='about_data'>
                <div></div>

                <div>
                <span className='about_rounder'></span>
                <span className='about_line' ></span>
              </div>

                <div>
                <h3 className='about_title'> Graphic design</h3>
                <span className='about_subtitle'>Library</span>
                <div className='about_calender'>
                  <i className='uil uil-calendar-alt'></i> <p>2021 - 2022</p>
                </div>

              </div>


              </div>

            </div>

          </div>
        </div> 


      
    </section>
  )
}

export default About
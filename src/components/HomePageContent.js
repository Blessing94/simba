import React, { Component } from 'react'
import '../homepage.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSchool } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { IoIosSchool } from "react-icons/io";
import { MdEventAvailable } from "react-icons/md";
import { Link } from 'react-router-dom';

const btnline ={
    
    textDecoration: "none"
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#57c4e5" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#57c4e5" }}
      onClick={onClick}
    />
  );
}

export class HomePageContent extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        slidesToScroll: 1
      };
      var config = {
        dots: false,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        slidesToScroll: 1
      };
        return (

         <>
          <div className='body'>
            <div className='Intro'>
              
          <h2>Simba English</h2> 
          { <p>International Training Center</p> }
          { <p><i> "If your plan is for one year plant rice. If your plan is for 10 years plant trees, but if your plan is for 100 years Educate your Childern."</i>~ Confusious</p> }
            </div>
          <Slider {...settings} className='slides'>
  
          <div className = 'slider1'>
            <h2>Together we can make a difference</h2>
           
           </div>
          <div className = 'slider2'>
          
          </div>
          <div className = 'slider3'>
          
          </div>
          <div className = 'slider4'>
          
          </div>
          <div className = 'slider5'>
         
          </div>
          <div className = 'slider6'>
         
          </div>
      
        </Slider> 

          <div className='homepageWrapper'>
             <div className='container'>
                <div className='subContainer'>
                    <div className='enrollContainer'>
                    <h2>Come and join the pride.</h2>
                    <Link style={btnline}to ='/Enrolment'>
                    <div class="btnwrapper">
  <div class="link_wrapper">
    <button className='btn'>Enroll Now!</button>
    <div class="btnicon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
  </div>
  </Link>
                    <p> Our experienced group of teachers 
                    are dedicated to giving students the best  
                    English learning experience and they take <b>pride </b> in it.  </p>
                    </div>
                    <div className='firstBox'>
                      <div className='enroll'>
                      <h2> Why You Should Enroll!</h2>
                      <p> <IoIosSchool className='icon1'/></p>
                      </div>

                     <div className='boxContainer'> 
                     <div className='box1'>
                      <div className="iconwrapper">
                      <p> <FaBook  className='icon2'/></p>
                      </div>
                      <div className='firstcard'>
                      <h3> Rich Curriculum</h3> 
                      <p> Our carriculum was design by experts with the goal of making English learning an unforgetable experience</p> 
                      </div>
                      </div>

                      <div className='box2'>
                      <div className="iconwrapper">
                      <p> <FaSchool className='icon2'/></p>
                      </div>
                      <div className='firstcard'>
                      <h3> Great Learning Enviroment</h3> 
                      <p> Our carriculum was design by experts with the goal of making English learning an unforgetable experience</p> 
                      </div>
                      </div>

                      <div className='box3'>
                      <div className="iconwrapper">
                      <p> <GiTeacher className='icon2'/></p>
                      </div>
                      <div className='firstcard'>
                      <h3> Experienced Educators</h3> 
                      <p> Our carriculum was design by experts with the goal of making English learning an unforgetable experience</p> 
                      </div>
                      </div>

                      <div className='box4'>
                      <div className="iconwrapper">
                      <p> <MdEventAvailable  className='icon2'/></p>
                      </div>
                      <div className='firstcard'>
                      <h3> Cool Events and Activities</h3> 
                      <p> Our carriculum was design by experts with the goal of making English learning an unforgetable experience</p> 
                      </div>
                      </div>
                     </div>
                     </div>
<div className='secondSlideContainer'>
                     <h2>WHAT PEOPLE SAY</h2>
                     <Slider {...config} className='secondSlide'>
                     <div className = 'slide1'>
                       <div className='slideAbout'> <h3>About Classes</h3></div>
                       <p>
                         "I love attending classes at Simba acedemy. the teachers are very 
                         friendly and they help me every time i get something wrong.
                         i dont ever want to leave this school."
                       </p>
                       <h3> Christin Chu</h3>
                       <p>Student</p>
   
                    </div>
                    
                    <div className = 'slide2'>
                    <div className='slideAbout'> <h3>ABOUT EVENTS</h3></div>
                       
                       <p>
                        i like it every time we have events or trips. they are fun, 
                        entertaining and educative. They helps us learn about new things.
                       </p>
                       <h3> Dru Mtero</h3>
                       <p>Student</p>
                    </div>
                    
                    <div className = 'slide3'>
                    <div className='slideAbout'> <h3>ABOUT THE CURRICULUM</h3></div>
                       <p>
                         I enrolled my doughter to this school after looking at thier 
                         curriculum and i was very impressed. They are very thorough 
                         and teach a diverse and wide range of topics within different subjects. 
                       </p>
                       <h3> Bridget Booker</h3>
                       <p>Parent</p>
                    </div>
                    <div className = 'slide4ç'>
                    <div className='slideAbout'> <h3>About The Teachers</h3></div>
                       <p>
                         Simba acedemy boasts a roaster of highly qualified teachers who  
                        are passionate about education. i highly recomend it if there is one in your 
                        viccinity. 
                       </p>
                       <h3> Scotty Earl Lance</h3>
                       <p>Parent</p>
                    </div>
</Slider> 
</div>
                     <div className='secondBox'>
                       <div className='jobImageContainer'>
                       <h1> Good News For <span>Job Seekers</span></h1>
                       <div className='jobImage'></div>
                       </div>
                       <div className='jobInfo'>
                        <h2> We Have Vacancies In Our Different Schools.</h2>
                        <h3> Check Out These Positions </h3>
                        <div className='jobList'>
                          <div className='vacantPositions1'> 
                          <div className='vacancyImage'></div>
                          <div className='jobText'>
                          <h4>PYP Teachers</h4>
                          <p> dugcugvcuf cuygcs cgwygc cgugcc ugcgs cugcw cgugwsc 
                            cuygc cug cgugw cucwn uwdy wdgg</p>
                          </div>
                          <div className='jobRequirements'> Non-Natives Accepted</div>
                          </div>

                          <div className='vacantPositions2'> 
                          <div className='vacancyImage'></div>
                          <div className='jobText'>
                          <h4>PYP Teachers</h4>
                          <p> dugcugvcuf cuygcs cgwygc cgugcc ugcgs cugcw cgugwsc 
                            cuygc cug cgugw cucwn uwdy wdgg</p>
                          </div>
                          <div className='jobRequirements'> Non-Natives Accepted</div>
                          </div>

                          <div className='vacantPositions3'> 
                          <div className='vacancyImage'></div>
                          <div className='jobText'>
                          <h4>PYP Teachers</h4>
                          <p> dugcugvcuf cuygcs cgwygc cgugcc ugcgs cugcw cgugwsc 
                            cuygc cug cgugw cucwn uwdy wdgg</p>
                          </div>
                          <div className='jobRequirements'> Non-Natives Accepted</div>
                          </div>

                          <div className='vacantPositions4'> 
                          <div className='vacancyImage'></div>
                          <div className='jobText'>
                          <h4>PYP Teachers</h4>
                          <p> dugcugvcuf cuygcs cgwygc cgugcc ugcgs cugcw cgugwsc 
                            cuygc cug cgugw cucwn uwdy wdgg</p>
                          </div>
                          <div className='jobRequirements'> Non-Natives Accepted</div>
                          </div>
                        </div>
                       </div>
                       <div className='jobLocations'>
                         <h2> We Have Locations In Different<span>Cities Across China</span></h2>
                         <div className='joblocationsImages'>
                         <div className='Beijing'> 
                           <div className='img7'>
                             <h3>Teach In Beijing</h3>
                             <button className='citybtn'>View Campus</button>
                             </div>
                            </div>

                         <div className='Shanghai'>
                         <div className='img8'>
                         <h3>Teach In Beijing</h3>
                             <button className='citybtn'>View Campus</button>
                           </div>
                         </div>
                        
                         <div className='Guangzhou'>
                         <div className='img9'>
                         <h3>Teach In Beijing</h3>
                             <button className='citybtn'>View Campus</button>
                         </div>
                         </div>

                         <div className='Shenzhen'>
                         <div className='img10'>
                         <h3>Teach In Beijing</h3>
                             <button className='citybtn'>View Campus</button>
                         </div>
                         </div>

                         </div>
                         </div>
                       </div>

                     </div>

                </div>
            </div> 
       </div>
      
       
    </>
       )
    }
}


export default HomePageContent

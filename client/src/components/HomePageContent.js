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
import logo from '../img/Simba-logo.png';


import video from '../img/video.mp4';

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
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        fade: true,
        focusOnSelect: false
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
          <div className='videoContainer'>
                <video autoPlay loop muted className='video'>
                  <source src ={video} type='video/mp4'/>
                </video>
                <div className='overlay'>
                <h1>HOME OF EXCELLENCE</h1>
                </div>
                <div className="text-container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter"> Simba </h3>
    </div>
  </div>
</div>
              </div>
            <div className='Intro'>
            <div className='introImg'> <img className = 'logo' src = {logo} alt='Home' /> </div>

         
           <p><i> "If your plan is for one year plant rice. If your plan is for 10 years plant trees, but if your plan is for 100 years Educate your Childern."</i>~ Confusious</p> 
            </div>
            <div>
          <Slider {...settings} className='slides' >
  
          <div className = 'slider1'>
        
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
        </div>
          <div className='homepageWrapper'>
             <div className='container'>
                <div className='subContainer'>
                    <div className='enrollContainer'>
                    <h2>Come and join the pride.</h2>
                    <Link style={btnline}to ='/Enrolment'>
                    <div className="btnwrapper">
  <div className="link_wrapper">
    <button className='btn'>Enroll Now!</button>
    <div className="btnicon">
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
                       <div className='slideAbout'> <h3>About Our Classes</h3></div>
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
<div>

</div>
                     <div className='secondBox'>
                       <div className='jobImageContainer'>
                       <h1> Good News For <span>Job Seekers</span></h1>
                       <div className='jobImage'></div>
                       </div>
                       <div className='jobInfo'>
                        <h2> We Have Vacancies In Our Different Locations.</h2>
                        <h3> Check Out These Positions </h3>
                        <div className='jobList'>
                          <a href='./jobs' className='vacancyLink'>
                          <div className='vacantPositions1'>
                          <div className='vacancyImage1'></div>
                          <div className='jobText'>
                          <h3>Science Teacher</h3>
                          <p> We are seeking talented educators to collaborate with our existing team of teachers and curriculum designers </p>
                          <h4>Click to apply</h4>
                          </div>
                          <div className='jobRequirements'>  Vacancies: 2 </div>
                          </div>
                          </a>
                          <a href='./jobs' className='vacancyLink'>
                          <div className='vacantPositions2'>
                          <div className='vacancyImage2'></div>
                          <div className='jobText'>
                          <h3>Elementary Gym Teacher</h3>
                          <p> We are looking for an energetic gym teacher for our elementary school students. </p>
                          <h4>Click to apply</h4>
                          </div>
                          <div className='jobRequirements'> Vacancies: 3</div>
                          </div>
                          </a>
                          <a href='./jobs' className='vacancyLink'>
                          <div className='vacantPositions3'> 
                          <div className='vacancyImage3'></div>
                          <div className='jobText'>
                          <h3>Support Services</h3>
                          <p> We are looking for a teacher who can provide remedial instruction in basic skills such as reading and writing to students who need extra support</p>
                          <h4>Click to apply</h4>
                          </div>
                          <div className='jobRequirements'> Vacancies: 1</div>
                          </div>
                          </a>
                          <a href='./jobs' className='vacancyLink'>
                          <div className='vacantPositions4'> 
                          <div className='vacancyImage'></div>
                          <div className='jobText'>
                          <h3>PYP Teachers</h3>
                          <p> Provide specific intervention methods to the children in the areas of academic, behaviour learning, social and communication skills.</p>
                          <h4>Click to apply</h4>
                          </div>
                          <div className='jobRequirements'> Vacancies: 2</div>
                          </div>
                          </a>
                        </div>
                       </div>
                       <div className='jobLocations'>
                         <h2> We Have Locations In Different<span>Cities Across China</span></h2>
                         <div className='joblocationsImages'>
                          <a href='./campuses'>
                          <div className='Beijing'> 
                           <div className='img7'>
                           <div className='cityName'>
                          <h3>Beijing Campus</h3>
                          </div>
                             </div>
                            </div>
                          </a>
                         
                         <a href='./campuses'>
                         <div className='Shanghai'>
                         <div className='img8'>
                         <div className='cityName'>
                          <h3>Shanghai Campus</h3>
                          </div>
                         </div>
                         </div>
                         </a>
                        
                        <a href='./campuses'>
                        <div className='Guangzhou'>
                         <div className='img9'>
                         <div className='cityName'>
                          <h3>Guangzhou Campus</h3>
                          </div>
                         </div>
                         </div>
                        </a>
                       
                       <a href='./campuses'>
                       <div className='Shenzhen'>
                         <div className='img10'>
                          <div className='cityName'>
                          <h3>Shenzhen Campus</h3>
                          </div>
                         
                         </div>
                         </div>
                       </a>
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

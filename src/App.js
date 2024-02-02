
import './App.css';
import { FaCertificate, FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope, FaGoogle, FaHandPointRight, FaUniversity } from "react-icons/fa";
import { BsWhatsapp, BsFillCaretRightFill } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { IoLogoYoutube, IoMdStar, IoMdStarHalf, IoIosArrowRoundForward, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import logo from './image/logo.svg';
import logo1 from './image/logo-white.svg';

function App() {
  return (
    <div className="App">
      {/* -start header- */}
      <header>
        <div className="bgblue">
          <div className="container">
            <div className='topheader flex justify-content align-center'>
              <div className="left_add c_width">
                <ul>
                  <li>
                    <i><FaEnvelope></FaEnvelope></i>
                    <span>info@cdmi.in</span>
                  </li>
                  <li>
                    <i><FaCertificate></FaCertificate></i>
                    <span>Verify Certificate</span>
                  </li>
                </ul>
              </div>
              <div className='center c_width'>
                <span>HAVE ANY QUESTIONS ? +91 90333 16003</span>
              </div>
              <div className="right_social c_width">
                <ul>
                  <li><a href='' target='_blank'><i><FaFacebookF></FaFacebookF></i></a></li>
                  <li><a href='' target='_blank'><i><FaTwitter></FaTwitter></i></a></li>
                  <li><a href='' target='_blank'><i><FaGoogle></FaGoogle></i></a></li>
                  <li><a href='' target='_blank'><i><FaLinkedin></FaLinkedin></i></a></li>
                  <li><a href='' target='_blank' className='fc'><i><ImInstagram></ImInstagram></i></a></li>
                  <li><a href='' target='_blank'><i><IoLogoYoutube></IoLogoYoutube></i></a></li>
                  <li><a href='' target='_blank'><i><BsWhatsapp></BsWhatsapp></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* -end header- */}

      {/* -start logo-header- */}
      <div className='container'>
        <div className='logoheader flex justify-content align-center'>
          <div className='main_logo'>
            <a>
              <img src={logo} className='logo'></img>
            </a>
          </div>
          {/* -start navbar- */}
          <div className='navbar'>
            <nav>
              <ul className='main_menu flex'>
                <li><a className='active'>HOME</a></li>
                <li><a>COURSES<span><FaAngleDown></FaAngleDown></span></a></li>
                <li><a>ACTIVITIES<span><FaAngleDown></FaAngleDown></span></a></li>
                <li><a>BLOG</a></li>
                <li><a>KNOW US<span><FaAngleDown></FaAngleDown></span></a></li>
                <li><a>GET IN TOUCH</a></li>
                <li><a>STUDENT ZONE<span><FaAngleDown></FaAngleDown></span></a></li>
              </ul>
            </nav>
          </div>
          {/* -end navbar- */}

        </div>
      </div>
      {/* -end logo-header- */}

      {/* -start banner- */}
      <section>
        <div className='banner'>
          <a>
            <img src={require(`./image/asset 7.webp`)} className='img'></img>
          </a>
        </div>
      </section>
      {/* -end banner- */}

      {/* -start course-section- */}
      <div className='spacer pb'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-1'>
              <div className='text'>
                <span className='sub_heading'>CREATIVE COURSE</span>
                <h2>OFFERED COURSE</h2>
              </div>
            </div>
          </div>
          <div className='row flex'>
            <div className='col-w'>
              <div className='content_box'>
                <div className='content_img'>
                  <img src={require(`./image/asset 13.webp`)} className='img'></img>
                </div>
                <div className='content_des'>
                  <h4 className='title'>Development Courses </h4>
                </div>
                <div className='content-foot flex justify-content'>
                  <div className='star'>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStarHalf></IoMdStarHalf></i>
                  </div>
                  <div className='button'>
                    <a className='price'>Know more..!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='content_box'>
                <div className='content_img'>
                  <img src={require(`./image/asset 15.webp`)} className='img'></img>
                </div>
                <div className='content_des'>
                  <h4 className='title'>Design Courses</h4>
                </div>
                <div className='content-foot flex justify-content'>
                  <div className='star'>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStarHalf></IoMdStarHalf></i>
                  </div>
                  <div className='button'>
                    <a className='price'>Know more..!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='content_box'>
                <div className='content_img'>
                  <img src={require(`./image/asset 18.webp`)} className='img'></img>
                </div>
                <div className='content_des'>
                  <h4 className='title'>Programming IT</h4>
                </div>
                <div className='content-foot flex justify-content'>
                  <div className='star'>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStarHalf></IoMdStarHalf></i>
                  </div>
                  <div className='button'>
                    <a className='price'>Know more..!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='content_box'>
                <div className='content_img'>
                  <img src={require(`./image/asset 27.webp`)} className='img'></img>
                </div>
                <div className='content_des'>
                  <h4 className='title'>Trendy Courses</h4>
                </div>
                <div className='content-foot flex justify-content'>
                  <div className='star'>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStarHalf></IoMdStarHalf></i>
                  </div>
                  <div className='button'>
                    <a className='price'>Know more..!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='content_box'>
                <div className='content_img'>
                  <img src={require(`./image/asset 21.webp`)} className='img'></img>
                </div>
                <div className='content_des'>
                  <h4 className='title'>Civil-Mech.Engineering</h4>
                </div>
                <div className='content-foot flex justify-content'>
                  <div className='star'>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStarHalf></IoMdStarHalf></i>
                  </div>
                  <div className='button'>
                    <a className='price'>Know more..!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='content_box'>
                <div className='content_img'>
                  <img src={require(`./image/asset 16.webp`)} className='img'></img>
                </div>
                <div className='content_des'>
                  <h4 className='title'>Business Development</h4>
                </div>
                <div className='content-foot flex justify-content'>
                  <div className='star'>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStar></IoMdStar></i>
                    <i><IoMdStarHalf></IoMdStarHalf></i>
                  </div>
                  <div className='button'>
                    <a className='price'>Know more..!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-center'>
            <div className='col-1'>
              <div className='text'>
                <div className='devider'></div>
                <div className='btn'><a>View All Courses<i><IoIosArrowRoundForward></IoIosArrowRoundForward></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end course-section- */}

      {/* -start about-section- */}
      <div className='spacer'>
        <div className='a_rowalign-center flex justify-content'>
          <div className='col-a1'>
            <div className='a_box'>
              <div className='container'>

                <div className='heading'>
                  <span className='sub_heading'>About us</span>
                  <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
                </div>
                <p className='ap'>
                  Creative Design & Multimedia Institute(CDMI)  is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields.
                  Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                </p>
              </div>
            </div>
          </div>
          <div className='col-a2'>
            <div className='position'>
              <img src={require(`./image/asset 29.jpeg`)} className='img'></img>
            </div>
            {/* <a className='v_icon'> */}
            {/* <span className='ripple'><i><BsFillCaretRightFill></BsFillCaretRightFill></i></span> */}
            {/* </a> */}
          </div>
        </div>
      </div>
      {/* -end about-section- */}

      {/* -start counter-area- */}
      <div className='spacer'>
        <img src={require(`./image/w1.png`)} className='img'></img>
      </div>
      {/* -end counter-area- */}

      {/* -start testimonial-area- */}
      <div className='spacer'>
        <div className='container'>
          <div className='row'>
            <div className='col-t1'>
              <div className='l_box'>
                <div className='heading'>
                  <span className='sub_heading'>HAPPY STUDENTS</span>
                  <h2>ALUMNI SPEAK</h2>
                </div>
                <div className='t_devider'></div>
                <div className='testimonial'>
                  <i><BiSolidQuoteSingleRight></BiSolidQuoteSingleRight></i>
                  <i><BiSolidQuoteSingleRight></BiSolidQuoteSingleRight></i>
                  <div className='owl_outer'>
                    <div className='owl_stage'>
                      <div className='owl_item'>
                        <div className='t_box'>
                          <div className='meta'>
                            <div className='t_des'>
                              <p>Good place to get trained on all the programming languages! Highly qualified trainers with enthusiastic founder! Must visit for all the students who are interested to get jobs!</p>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className='t_image'>
                              <img src={require(`./image/asset 33.jpeg`)}></img>
                            </div>
                            <div className='u_name'>
                              <h6>Nilay Rabadiya</h6>
                              <span className='name'>CEO</span>
                              <span> @ </span>
                              <span> Techtical Solution</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='owl_nav'>
                      <div className='prev'><i><IoIosArrowBack></IoIosArrowBack></i></div>
                      <div className='next'><i><IoIosArrowForward></IoIosArrowForward></i></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-t2'>
              <div className='img_holder'>
                <div className='shape'>
                  <img src={require(`./image/asset 39.png`)} className='img'></img>
                </div>
                <div className='bg_img'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end testimonial-area- */}

      {/* -start feature-area- */}
      <div className='bg_grey'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-1'>
              <div className='text'>
                <span className='sub_heading'>READ OUR DIFFERENCE</span>
                <h2>WHY CHOOSE CREATIVE</h2>
              </div>
            </div>
          </div>
          <div className='row flex'>
            <div className='col-w'>
              <div className='icon_box'>
                <div className='icon_img red'>
                       <img src={require(`./image/p1.png`)} className='img'></img> 
                </div>
                <div className='intro_des'>
                  <h5>Industry experts as Trainers</h5>
                  <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='icon_box'>
                <div className='icon_img yellow'>
                <img src={require(`./image/p1.png`)} className='img'></img> 

                </div>
                <div className='intro_des'>
                  <h5>Industry experts as Trainers</h5>
                  <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='icon_box'>
                <div className='icon_img green'>
                <img src={require(`./image/p1.png`)} className='img'></img> 

                </div>
                <div className='intro_des'>
                  <h5>Industry experts as Trainers</h5>
                  <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='icon_box'>
                <div className='icon_img purple'>
                <img src={require(`./image/p1.png`)} className='img'></img> 

                </div>
                <div className='intro_des'>
                  <h5>Industry experts as Trainers</h5>
                  <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='icon_box'>
                <div className='icon_img blue'>
                <img src={require(`./image/p1.png`)} className='img'></img> 

                </div>
                <div className='intro_des'>
                  <h5>Industry experts as Trainers</h5>
                  <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                </div>
              </div>
            </div>
            <div className='col-w'>
              <div className='icon_box'>
                <div className='icon_img pink'>
                <img src={require(`./image/p2.png`)} className='img'></img> 

                </div>
                <div className='intro_des'>
                  <h5>Industry experts as Trainers</h5>
                  <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end feature-area- */}

      {/* -start client-area- */}
      <div className='spacer'>
        <div className='container'>
          <div className='row justify-center mb'>
            <div className='col-1'>
              <div className='text'>
                <span className='sub_heading'>STUDENT PLACEMENT</span>
                <h2>OUR RECRUITMENT PARTNERS</h2>
              </div>
            </div>
          </div>
          <div className='row flex'>
            <div className='col-c'>
              <div className='owl_fit'>
                <div className='item'>
                  <a><img src={require(`./image/asset 40.png`)} className='img'></img></a>
                </div>
              </div>

            </div>
            <div className='col-c'>
              <div className='owl_fit'>
                <div className='item'>
                  <a><img src={require(`./image/asset 45.png`)} className='img'></img></a>
                </div>
              </div>
            </div>
            <div className='col-c'>
              <div className='owl_fit'>
                <div className='item'>
                  <a><img src={require(`./image/asset 41.png`)} className='img'></img></a>
                </div>
              </div>
            </div>
            <div className='col-c'>
              <div className='owl_fit'>
                <div className='item'>
                  <a><img src={require(`./image/asset 42.png`)} className='img'></img></a>
                </div>
              </div>
            </div>
            <div className='col-c'>
              <div className='owl_fit'>
                <div className='item'>
                  <a><img src={require(`./image/asset 43.png`)} className='img'></img></a>
                </div>
              </div>
            </div>
            <div className='col-c'>
              <div className='owl_fit'>
                <div className='item'>
                  <a><img src={require(`./image/asset 44.png`)} className='img'></img></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end client-area- */}


      {/* -start tag-area- */}
      <div className='container'>
        <div className='row'>
          <div className='col-o'>
            <div>
              <h5 className='o_title'>Our Demanded Course - </h5>
              <div className='foot_tag'>
                <a>game design class in Mota Varachha</a>
                <a>Advance nodejs training institute in surat</a>
                <a>Unity 3d training institute in Mota Varachha</a>
                <a>Learn animation course</a>
                <a>Android training institute in surat</a>
                <a>wordpress training institute in Mota Varachha</a>
                <a>solidworks training institute in varachha</a>
                <a>Best game development training institute</a>
                <a>flutter training institute in varachha</a>
                <a>Best codeigniter training institute</a>
                <a>Graphics design training in katargam</a>
                <a>flutter training course</a>
                <a>Web development training institute in katargam</a>
                <a>Advance Laravel training institute in surat</a>
                <a>Video editing  training course institute</a>
                <a>Photoshop training institute in varachha</a>
                <a>solidworks training institute in Mota Varachha</a>
                <a>Adobe illustrator design</a>
                <a>Best nodejs training institute</a>
                <a>Web design training in varachha</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end tag-area- */}

      {/* -start footer-area- */}
      <footer>
        <div className='spacer pb'>
          <div className='bg_dark'>
            <div className='top_foot'>
              <div className='container'>
                <div className='row flex'>
                  <div className='col-f1'>
                    <div className='foot_logo'>
                      <a><img src={logo1} className='logo'></img></a>
                    </div>
                    <p className='justify'>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                    <h6 className='w_title'>Follow Us On</h6>
                    <ul className='style'>
                      <li><a href='' target='_blank'><i><FaFacebookF></FaFacebookF></i></a></li>
                      <li><a href='' target='_blank'><i><FaTwitter></FaTwitter></i></a></li>
                      <li><a href='' target='_blank'><i><FaGoogle></FaGoogle></i></a></li>
                      <li><a href='' target='_blank'><i><FaLinkedin></FaLinkedin></i></a></li>
                      <li><a href='' target='_blank' className='fc'><i><ImInstagram></ImInstagram></i></a></li>
                      <li><a href='' target='_blank'><i><IoLogoYoutube></IoLogoYoutube></i></a></li>
                      <li><a href='' target='_blank'><i><BsWhatsapp></BsWhatsapp></i></a></li>
                    </ul>
                  </div>
                  <div className='col-f2'>
                    <h6 className='d_title'>Feature Links</h6>
                    <ul className='w_links'>
                      <li><a><i><FaHandPointRight></FaHandPointRight></i>About Us</a></li>
                      <li><a><i><FaHandPointRight></FaHandPointRight></i>Blog</a></li>
                      <li><a><i><FaHandPointRight></FaHandPointRight></i>Join Us</a></li>
                      <li><a><i><FaHandPointRight></FaHandPointRight></i>Company Login</a></li>
                      <li><a><i><FaHandPointRight></FaHandPointRight></i>Certificate Verification</a></li>
                    </ul>
                  </div>
                  <div className='col-f3'>
                    <h6 className='f_title'>Contact Us</h6>
                    <div>
                      <h6 className='add_title'>
                        <a>Head Office - Yogichowk</a>
                      </h6>
                      <span className='add'>
                        401-404, 4<sup>th</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha,
                      </span>
                      <span className='add'> Surat.</span>
                      <p className='mo'> Mo :<a><span> +91 90333 16003</span></a></p>
                    </div>
                    <div>
                      <h6 className='add_title'><a>Other Branches</a></h6>
                      <ul className='w_links'>
                        <li><a><i><FaUniversity></FaUniversity></i>Katargam</a></li>
                        <li><a><i><FaUniversity></FaUniversity></i>Mota Varachha</a></li>
                        <li><a><i><FaUniversity></FaUniversity></i>Adajan</a></li>
                        <li><a><i><FaUniversity></FaUniversity></i>Navsari</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className='bottom_foot'>
              <div className='container'>
                <div className='row align-center'>
                  <div className='col'>
                    <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </footer>
      {/* -end footer-area- */}


    </div>
  );
}

export default App;

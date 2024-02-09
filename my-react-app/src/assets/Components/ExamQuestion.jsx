
import React, { useState } from 'react';
import { AiOutlineHourglass,AiFillBank,}  from "react-icons/ai";
import { AiFillHeart } from 'react-icons/ai';
import { AiFillFire} from 'react-icons/ai'
import { IoNotificationsOutline } from "react-icons/io5";
import { AiFillSecurityScan } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiNotificationBold } from "react-icons/pi";
import { BsLadder, BsFillRocketFill, BsFillMotherboardFill,
    BsBezier,BsFillTvFill, BsFlower1,BsStopwatch,
     BsQuestionCircle,BsFillBarChartFill,BsTrophy,BsPerson, } from "react-icons/bs"
import { Select } from '@chakra-ui/select'

function ExamQuestion() {

    const [selectedOption, setSelectedOption] = useState('tutorials');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const hiddenLinkMap = 'Tutorials';
  return (

    <div className="main">
        <div className="left_seiection">
            <div className="left">
                <div className="logo">
                    <BsFlower1 style={{ fontSize: '2em', color: 'blue' }} />
                    <h2>Ulearngo</h2>
                </div>
                <div className="link_items">
                    <AiFillBank style={{ fontSize: '2em', color: '#fff' }}/>
                    <a href="#">Home</a>
                </div>
         
            <div className="link_items dropdown">
                <BsLadder style={{ fontSize: '2em', color: '#fff', }} />
                <a href={hiddenLinkMap[selectedOption]}>
                    {'Tutorials '}</a>

                        {/* Dropdown for selecting hidden links */}
                <select value={selectedOption} onChange={handleSelectChange} className='dropdown'>
                    <option value="selected" className='dropdown'><a href="" className='dropdown'> <BsLadder /></a></option>
                    <option value="Biology"><a href=""><AiOutlineHourglass /> Biology</a></option>
                    <option value="Chemistry"><a href="#"><BsFillRocketFill /> Chemistry</a></option>
                    <option value="physics"><a href="#"><BsFillRocketFill /> Physics</a></option>
                    <option value="mathematics"><a href="#"> <BsFillRocketFill /> Mathematics</a></option>
                    <option value="english language"><a href="#"><BsFillMotherboardFill /> English Language</a></option>
                    <option value="government"><a href="#"> <BsBezier /> Government</a></option>
                    <option value="Computer studies"><a href="#"> <BsFillTvFill /> Computer studies</a></option>
                </select>
            </div>
            <div className="link_items">
                <BsFillBarChartFill style={{ fontSize: '2em', color: '#fff' }} />
                <a href="/StudyProgress">Study progress</a>
            </div>
            <div className="link_items">
                <BsQuestionCircle style={{ fontSize: '2em', color: '#fff' }}/>
                <a href="#">Exam Questions</a>
            </div>
            <div className="link_items">
                <BsStopwatch style={{ fontSize: '2em', color: '#fff' }}/>
                <a href="#">Practice Exam</a>
                </div>
            <div className="link_items">
                <BsStopwatch style={{ fontSize: '2em', color: '#fff' }} />
                <a href="#">Exam History</a>
            </div>
            <div className="link_items">
                <BsTrophy style={{ fontSize: '2em', color: 'white' }}/>
                <a href="#">Leaderboards</a>
            </div>
            <div className="link_items">
                <PiNotificationBold style={{ fontSize: '2em', color: '#fff' }}/>
                <a href="#">Subscription</a>
            </div>
            <div className="link_items">
                <BsPerson style={{ fontSize: '2em', color: '#fff' }}/>
                <a href="#">Profile</a>
            </div>
            <div className="link_items">
                <IoNotificationsOutline style={{ fontSize: '2em', color: '#fff' }}/>
                <a href="#">Notification</a>
            </div>
        </div>
    </div>

    <div className="right_section">

    <div className="header">
                <div className="header_inner">
                    <div className="icon_wrap">
                    <div className="icon1">
                        <h3><AiFillThunderbolt />0</h3>
                    </div>
                    <div className="icon2">
                        <h3><AiFillSecurityScan />5</h3>
                    </div>
                    <div className="icon3">
                        <h3><AiFillHeart />2</h3>
                    </div>
                    <div className="icon1">
                        <h3><AiFillFire/>0</h3>
                    </div>
                    <div className="note">
                        <h3> <a href="#"><IoNotificationsOutline /></a></h3>
                    </div>
                    </div>
    
            </div>   
        </div>

        <div className='exam_quest'>
            <h1>Study Exam Questions</h1>
            <p>Select Examination</p>
        </div>

        <div className="select_wrap">
            <div className="selec con">
            <h4>Choose exam category</h4>
            <div className="select_item">
            <Select placeholder=''className='optional'>
                <option value='option1'>Nigerian School Leaver Exams</option>
                <option value='option2'>Nigerian University Entry Exams </option>
                <option value='option3'>US College Admission Exams</option>
            </Select>           
        </div>
            </div>
        <div className="sele_con">
            <h4>Choose examination</h4>
        <div className="select_item">
            <Select placeholder=''>
                <option value='option1'>WAEC SSCE</option>
                <option value='option2'>JAMB UTME </option>
                <option value='option3'>NECO SSCE</option>
            </Select>           
        </div>
        </div>
       
        </div>
            <div className="avail">
                <h2>Available Subjects</h2>
                </div>
            <div className="section">
                <div className="row_wrap">
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Account</h4> 
                        </div>
                        <div className="in_text">
                            <p>Accounts, otherwise know as <br />principles of Accounts in some exam...</p>
                        </div>
                        <div className="in_page">
                            <p>3722 questions <span><CiCircleQuestion style={{ fontSize:'25'}} /></span></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Agricultural science</h4> 
                        </div>
                        <div className="in_text">
                            <p>Agricultural science looks at the <br />
                            science or practice of farming...</p>
                        </div>
                        <div className="in_page">
                            <p>3092 questions <CiCircleQuestion style={{ fontSize:'25',paddingTop:'25'}}/></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Animal Husbandry</h4> 
                        </div>
                        <div className="in_text">
                            <p>Animal husbandry is the branch <br />
                            agriculture concerned with animals...</p>
                        </div>
                        <div className="in_page">
                            <p>311 questions <span><CiCircleQuestion style={{ fontSize:'25'}}/></span></p>
                        </div>
                    </div>
                </div>
                
                <div className="row_wrap">
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Biology</h4> 
                        </div>
                        <div className="in_text">
                            <p>Biology studies life and living <br />
                            organism. Biology can be divided into...</p>
                        </div>
                        <div className="in_page">
                            <p>6677 questions <span><CiCircleQuestion style={{ fontSize:'25'}} /></span></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Catering Craft Practice </h4> 
                        </div>
                        <div className="in_text">
                            <p>Catering craft practiceis related to  <br />
                            the practical skill and knowledge involve...</p>
                        </div>
                        <div className="in_page">
                            <p>456 questions <CiCircleQuestion style={{ fontSize:'25'}}/></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Chemistry</h4> 
                        </div>
                        <div className="in_text">
                            <p>Chemistry generally expolres the <br />
                            substances of which matter is...</p>
                        </div>
                        <div className="in_page">
                            <p>5334 questions <span><CiCircleQuestion style={{ fontSize:'25'}}/></span></p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="row_wrap">
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Christain Religious Knowledge</h4> 
                        </div>
                        <div className="in_text">
                            <p>Christain religious studies, also known <br />
                            as Christain religious knowledge(CRK...</p>
                        </div>
                        <div className="in_page">
                            <p>4983 questions <span><CiCircleQuestion style={{ fontSize:'25'}} /></span></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Civic Education </h4> 
                        </div>
                        <div className="in_text">
                            <p>Civic education refers to both formal <br />
                           and informal training aimed at...</p>
                        </div>
                        <div className="in_page">
                            <p>537 questions <CiCircleQuestion style={{ fontSize:'25',}}/></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Commerce</h4> 
                        </div>
                        <div className="in_text">
                            <p>Commerce is an organized system for <br />
                            the exchange of goods between buyer...</p>
                        </div>
                        <div className="in_page">
                            <p>4793 questions <span><CiCircleQuestion style={{ fontSize:'25'}}/></span></p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="row_wrap">
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Computer Studies</h4> 
                        </div>
                        <div className="in_text">
                            <p>Computer studies deals with general <br />
                            knowledge of computer and computing...</p>
                        </div>
                        <div className="in_page">
                            <p>777 questions <span><CiCircleQuestion style={{ fontSize:'25'}} /></span></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Data Processing </h4> 
                        </div>
                        <div className="in_text">
                            <p>Data Processing covers the  <br />
                           understanding and application of tool...</p>
                        </div>
                        <div className="in_page">
                            <p>405 questions <CiCircleQuestion style={{ fontSize:'25',}}/></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Economics</h4> 
                        </div>
                        <div className="in_text">
                            <p>Economics studies social behavoir <br />
                            guding the allocation of scarce...</p>
                        </div>
                        <div className="in_page">
                            <p>5459 questions <span><CiCircleQuestion style={{ fontSize:'25'}}/></span></p>
                        </div>
                    </div>
                      
                </div>
                <div className="row_wrap">
                    <div className="wrap_all">
                        <div className="account">
                        <h4>English Language</h4> 
                        </div>
                        <div className="in_text">
                            <p>English language is simple the studies of  <br />
                            the English language with the aim of...</p>
                        </div>
                        <div className="in_page">
                            <p>10861 questions <span><CiCircleQuestion style={{ fontSize:'25'}} /></span></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Further Mathematics </h4> 
                        </div>
                        <div className="in_text">
                            <p> Further mathematics is an advanced <br />
                           mathematics that usually pick...</p>
                        </div>
                        <div className="in_page">
                            <p>966 questions <CiCircleQuestion style={{ fontSize:'25',}}/></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Geography</h4> 
                        </div>
                        <div className="in_text">
                            <p> Geography is the subject that sudies the <br />
                            lands,the features, the inhabitants an...</p>
                        </div>
                        <div className="in_page">
                            <p>4777 questions <span><CiCircleQuestion style={{ fontSize:'25'}}/></span></p>
                        </div>
                    </div>
                    
                    
                </div>   
                <div className="row_wrap">
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Government</h4> 
                        </div>
                        <div className="in_text">
                            <p>Government involves the studies of   <br />
                            political institutions, processes and...</p>
                        </div>
                        <div className="in_page">
                            <p>6194 questions <span><CiCircleQuestion style={{ fontSize:'25'}} /></span></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Insurance </h4> 
                        </div>
                        <div className="in_text">
                            <p> Insurance covers the principles, types, <br />
                           and the applications of insurance,...</p>
                        </div>
                        <div className="in_page">
                            <p>173 questions <CiCircleQuestion style={{ fontSize:'25',}}/></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Islamic Religious Knowledge</h4> 
                        </div>
                        <div className="in_text">
                            <p> Islamic religious studies otherwise <br />
                            known as Islamic religious knowledge...</p>
                        </div>
                        <div className="in_page">
                            <p>1823 questions <span><CiCircleQuestion style={{ fontSize:'25'}}/></span></p>
                        </div>
                    </div>
                    
                    
                </div>   
                <div className="row_wrap">
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Literature In English</h4> 
                        </div>
                        <div className="in_text">
                            <p>Literature in English is the studies of   <br />
                            literature written in the English...</p>
                        </div>
                        <div className="in_page">
                            <p>4467 questions <span><CiCircleQuestion style={{ fontSize:'25'}} /></span></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Marketing</h4> 
                        </div>
                        <div className="in_text">
                            <p>Marketing explores the foundational <br />
                           theories and the Practice of Marketing...</p>
                        </div>
                        <div className="in_page">
                            <p>368 questions <CiCircleQuestion style={{ fontSize:'25',}}/></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Mathematics </h4> 
                        </div>
                        <div className="in_text">
                            <p>Mathematics studies measurement <br />
                            relationships, and properties of...</p>
                        </div>
                        <div className="in_page">
                            <p>6396 questions <span><CiCircleQuestion style={{ fontSize:'25'}}/></span></p>
                        </div>
                    </div>
                    
                    
                </div>   
                <div className="row_wrap last_wrap">
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Office Practices</h4> 
                        </div>
                        <div className="in_text">
                            <p>Office practices typically covers the <br />
                            fundamental skills and knowledge...</p>
                        </div>
                        <div className="in_page">
                            <p>168 questions <span><CiCircleQuestion style={{ fontSize:'25'}} /></span></p>
                        </div>
                    </div>
                    <div className="wrap_all">
                        <div className="account">
                        <h4>Physics</h4> 
                        </div>
                        <div className="in_text">
                            <p>Physics is a science discipline <br />
                           concerned with the nature and...</p>
                        </div>
                        <div className="in_page">
                            <p>5951 questions <CiCircleQuestion style={{ fontSize:'25',}}/></p>
                        </div>
                    </div>
               
                    
                    
                </div>   
            </div>     
    </div>
    </div>
  








  )
}

export default ExamQuestion








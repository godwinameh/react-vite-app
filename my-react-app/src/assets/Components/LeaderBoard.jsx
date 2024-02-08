
import React, { useState } from 'react';
import { AiOutlineHourglass,AiFillBank,}  from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiFillSecurityScan } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillSlackCircle } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiNotificationBold } from "react-icons/pi";
import { BsLadder, BsFillRocketFill, BsFillMotherboardFill,
    BsBezier,BsFillTvFill, BsFlower1,BsStopwatch,
     BsQuestionCircle,BsFillBarChartFill,BsTrophy,BsPerson, } from "react-icons/bs"


function LeaderBoard() {
    const [selectedOption, setSelectedOption] = useState('tutorials');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    }
      const hiddenLinkMap = 'Tutorials';
  return (
    <div className='main'>
        <div className="left">
            <div className="logo">
                <BsFlower1 style={{ fontSize: '2em', color: 'blue' }} />
                <h2>Ulearngo</h2>
            </div>
            <div className="link_items">
                <AiFillBank style={{ fontSize: '2em', color: '#fff' }}/>
                <a href="/Home">Home</a>
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
                <a href="#">Study progress</a>
            </div>
            <div className="link_items">
                <BsQuestionCircle style={{ fontSize: '2em', color: '#fff' }}/>
                <a href="/ExamQuestion">Exam Questions</a>
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
                <a href="/LeaderBoard">Leaderboards</a>
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

        <div className="right">
        <div className="header"> 
                    {/* <div className="row">&nbsp;</div> */}
                    <div className="icon_wrap">
                            <div className="icon">
                                <h3><AiFillThunderbolt style={{padding:'0 9',color:'yellow'}}/>0</h3>
                            </div>
                            <div className="icon">
                                <h3><AiFillSecurityScan style={{padding:'0 9',color:'blue'}}/>5</h3>
                            </div>
                            <div className="icon">
                                <h3><AiTwotoneHeart style={{padding:'0 9',color:'red'}}/>2</h3>
                            </div>
                            <div className="icon">
                                <h3><AiFillFire style={{padding:'0 9',color:'gray'}}/>0</h3>
                            </div>
                            <div className="note icon">
                                <h3> <a href="#"><IoNotificationsOutline style={{padding:'0 9',color:'blue'}} /></a></h3>
                            </div>
                    </div>  
        </div>
            <div className="back">
                <p> <AiOutlineLeft />back</p> 
            </div>
            <div className="text">   
                <h3> Leaderboards</h3>
            </div>
    <div className="one_fam">
        <div className="wrap_cover">
            <div className="in_letter">
                    <h3>Weekly Leaderboard</h3>
                </div>
        
            <div className="uni_all">
                <div class="uni_circle">
                    <span>GA</span>
                </div>
                <div class="uni_content">
                    <p>Godwin Ameh</p>
                    <span>279 XP</span>
                </div>
                <div className="uni_num">
                    <p>2</p>
                </div>
            </div>
        
            <div className="uni_all">
                <div class="uni_circle">
                    <span>FG</span>
                </div>
                <div class="uni_content">
                    <p>Favour Godspower</p>
                    <span>274 XP</span>
                </div>
                <div className="uni_num"> 
                    <p>1</p>
                </div>
            </div>
            <div className="uni_all">
                <div class="uni_circle">
                    <span>DEA</span>
                </div>
                <div class="uni_content don">
                    <p>Dominion Enkodun </p>
                    <span>278 XP</span>
                </div>
                <div className="uni_num"> 
                    <p>3</p>
                </div>
            </div>
            <div className="uni_all">
                <div class="uni_circle">
                    <span>VEA</span>
                </div>
                <div class="uni_content ameh">
                    <p>Virtue Enekole Ameh</p>
                    <span>298 XP</span>
                </div>
                <div className="uni_num"> 
                    <p>4</p>
                </div>
            </div>
            <div className="uni_all">
                <div class="uni_circle">
                    <span>CA</span>
                </div>
                <div class="uni_content">
                    <p>Clinton Ameh</p>
                    <span>288 XP</span>
                </div>
                <div className="uni_num"> 
                    <p>5</p>
                </div>
            </div>
            <div className="uni_all">
                <div class="uni_circle">
                    <span>GA</span>
                </div>
                <div class="uni_content">
                    <p>Gladys Ameh</p>
                    <span>298 XP</span>
                </div>
                <div className="uni_num"> 
                    <p>6</p>
                </div>
            </div>
            <div className="uni_all">
                <div class="uni_circle">
                    <span>NI</span>
                </div>
                <div class="uni_content">
                    <p>Nelly Idoko</p>
                    <span>278 XP</span>
                </div>
                <div className="uni_num"> 
                    <p>7</p>
                </div>
            </div>
            <div className="uni_all">
                <div class="uni_circle">
                    <span>PA</span>
                </div>
                <div class="uni_content">
                    <p>Peter Audu</p>
                    <span>360 XP</span>
                </div>
                <div className="uni_num"> 
                    <p>8</p>
                </div>
            </div>
            <div className="uni_all">
                <div class="uni_circle">
                    <span>EO</span>
                </div>
                <div class="uni_content">
                    <p>Emma Onogwu</p>
                    <span>298 XP</span>
                </div>
                <div className="uni_num"> 
                    <p>9</p>
                </div>
            </div>
            <div className="uni_all">
                <div class="uni_circle">
                    <span>GA</span>
                </div>
                <div class="uni_content">
                    <p>Grace Agbo</p>
                    <span>398 XP</span>
                </div>
                <div className="uni_num"> 
                    <p>10</p>
                </div>
            </div>
            
                  <div className="btn">
                    <button className='btn2'>Next</button>
                    </div>

            </div>

    <div className="fam_left">
        <div className="letter_head">
            <h4>Exam Top Scores</h4>
            <select name="year" className='year'>
                <option value="past month">past month</option>
                <option value="past year">past year</option>
            </select>
        </div>
        <div className="ameh_select">
            <select name="" className='month'>
                <option value="past month">Nigerian School Leaver Exams</option>
                <option value="past year">Nigerian University Entry Exams</option>                <option value="past year">US College Admisson Exams</option>
            </select>
            <select name="" className='exam_wjn'>
                <option value="past">WAEC SSEC</option>
                <option value="past year">JAMB UTME</option>
                <option value="past year">NECO SSEC</option>
            </select>
        </div>
        <div className="contain_all">
            <div className="inn_content">
                    <p className='f_circl'>F</p>
                    <div className="fw">
                    <h3>Freedom Ewere</h3>
                    <p className='time'>Time Advantage: 43 minutes 18 seconds </p>
                </div>
                <div className="gold">
                    <div className="time_power">
                        <h4>90%</h4>
                    </div>
                </div>
            </div>   
        </div>
        <div className="biology">
            <div className="bio">
                <p>Biology</p>
            </div>
            <div className="percentage">
                <h4>90</h4>
            </div>
        </div>
        <div className="contain_all">
            <div className="inn_content">
                    <p className='f_circl'>F</p>
                    <div className="fw">
                    <h3>Freedom Ewere</h3>
                    <p className='time'>Time Advantage: 43 minutes 18 seconds </p>
                </div>
                <div className="gold">
                    <div className="time_power">
                        <h4>90%</h4>
                    </div>
                </div>
            </div>   
        </div>
                     <div className="biology">
                        <div className="bio">
                            <p>Biology</p>
                        </div>
                        <div className="percentage">
                            <h4>90</h4>
                        </div>
                    </div>
    </div>
                          


    </div>
        </div>
        </div>

           
        
    
  )
}

export default LeaderBoard
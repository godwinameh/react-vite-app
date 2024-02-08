
import React, { useState } from 'react';
import { AiOutlineHourglass,
        AiFillBank,}  from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiFillSecurityScan } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillSlackCircle } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiNotificationBold } from "react-icons/pi";
import { BsLadder, BsFillRocketFill, BsFillMotherboardFill,
        BsBezier,BsFillTvFill, BsFlower1,BsStopwatch,
         BsQuestionCircle,BsFillBarChartFill,BsTrophy,BsPerson, } from "react-icons/bs"
import { Select } from "@chakra-ui/select"

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('tutorials');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    }
  
    const hiddenLinkMap = 'Tutorials';
  return (


    <div className='main'>
       
        <div className="left">
            <div className="left_section">
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
                <a href="/StudyProgress">Study progress</a>
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

        <div className="text_item tag">
            Resume Study
        </div>
        <div className="text_item">
            Tutorial Library
        </div>   
        <section className="row">
            <div className="container">
                <div className="inner_container">
                    <div className="inner">
                        <AiOutlineHourglass style={{ fontSize: '3em', color: 'green', }} />
                        <h1>Biology</h1>
                    </div>
                </div>

                <div className="inner_container">
                    <div className="inner">
                    <AiFillSlackCircle style={{ fontSize: '3em', color: 'blue', }} />
                        <h1>Chemistry</h1>
                    </div>
                </div>

                <div className="inner_container">
                    <div className="inner">
                    <BsFillRocketFill  style={{ fontSize: '3em', color: 'blue', }} />
                        <h1>Physics</h1>
                    </div>
                </div>
            </div> 

            <div className="container">
                <div className="inner_container">
                    <div className="inner">
                    <AiFillSlackCircle  style={{ fontSize: '3em', color: 'red', }} />
                        <h1>Mathematics</h1>
                    </div>
                </div>
                <div className="inner_container">
                    <div className="inner">
                    <BsFillMotherboardFill style={{ fontSize: '3em', color: 'brown', }} />
                        <h1>English Language</h1>
                    </div>
                </div>
                <div className="inner_container">
                    <div className="inner">
                        <BsBezier style={{ fontSize: '3em', color: 'green', }} />
                        <h1>Government</h1>
                    </div>
                </div>
            </div> 
            <div className="container row_end">
                <div className="inner_container">
                    <div className="inner">
                        <BsFillTvFill style={{ fontSize: '3em', color: 'green', }} />
                        <h1>Computer Studies</h1>
                    </div>
                </div>
                <div className="inner_container">
                    <div className="inner">
                        < AiOutlineHourglass style={{ fontSize: '3em', color: 'green', }} />
                        <h1>Economics</h1>
                    </div>
                </div>
            </div> 
        </section>
        <div className="last_text">
            <h2>Practice Exams</h2>
        </div>
        <div className="select_item">
            <Select placeholder=''>
                <option value='option1'>Nigerian School Leaver Exams</option>
                <option value='option2'>Nigerian University Entry Exams </option>
                <option value='option3'>US College Admission Exams</option>
            </Select>           
        </div>
        <section className='last_row'>
            <div className="wrap">
                <div className="inner_wrap">
                    <div className="wac">
                        <h3>WAEC SSCE</h3>
                    </div>
                    <div className="inner_wac">
                       <p>The West African Senior School <br />
                        Certificate Examination (WASSCE)is as...</p> 
                    </div>
                    <div className="inner_suj">
                        <p>23 subjects</p>
                    </div>

                </div>
            </div>
            <div className="wrap">
                <div className="inner_wrap">
                    <div className="wac">
                        <h3>JAMB UTME</h3>
                    </div>
                    <div className="inner_wac">
                        <p>The Joint Admission and Matriculation <br />
                        Board (JAMB) is a Nigerian Entrance...</p>
                    </div>
                    <div className="inner_suj">
                       <p> 22 subjects</p>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <div className="inner_wrap">
                    <div className="wac">
                        <h3>NECO SSCE</h3>
                    </div>
                    <div className="inner_wac">
                        <p>The National Examination Council <br />
                        (NECO) is an examination boby in (WASSCE)is as...</p>
                    </div>
                    <div className="inner_suj neco">
                       <p> 9 subjects</p>
                    </div>
                </div>
            </div>

        </section>
    </div>
</div>
  )
}

export default Home
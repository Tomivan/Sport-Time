import React from "react";
import Albert from '../assets/images/albert.png';
import Ball from '../assets/images/ball.png';
import Calendar from '../assets/images/calendar.png';
import Date from '../assets/images/date.png';
import Group from '../assets/images/group.png';
import Home from '../assets/images/home.png';
import Jacob from '../assets/images/jacob.png';
import Jane from '../assets/images/jane.png';
import Marni from '../assets/images/marni.png';
import Martin from '../assets/images/martin.png';
import People from '../assets/images/people.png';
import Profile from '../assets/images/profile.png';
import Results from '../assets/images/results.png';
import Search from '../assets/images/search.png';
import Setting from '../assets/images/setting.png';
import Sms from '../assets/images/sms.png';
import Toggle from '../assets/images/toggle.png';
import Toggles from '../assets/images/toggle-1.png';
import "./dashboard.css";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <nav className="sidenav">
                <h1>Sport Time</h1>
                <div className="icons">
                    <img src={Home} alt="An icon navigating to the home section" className="nav-icon"/>
                    <img src={Date} alt="An icon navigating to the date section" className="nav-icon"/>
                    <img src={People} alt="An icon navigating to the people section" className="nav-icon"/>
                    <img src={Sms} alt="An icon navigating to the messages section" className="nav-icon"/>
                    <img src={Setting} alt="An icon navigating to the settings section" className="nav-icon"/>
                </div>
                <img src={Group} alt="An icon for showing more details" className="nav-more"/>
            </nav>
            <div className="top-right">
                <p>April 18, 2021</p>
                <div className="search">
                   <img src={Search} alt="the search icon" className="search-icon"/>
                   <input type="search" placeholder="Search" />
                </div>
                <div className="admin">
                    <div className="admin-info">
                        <p>Eleanor Pena</p>
                        <p>Admin</p>
                    </div>
                    <img src={Profile} alt="a woman wearing glasses" className="admin-image"/>
                </div>
            </div>
            <h2>Dashboard</h2>
            <main className="main">
                <div className="main-left">
                    <div className="main-left-top">
                        <div className="greeting">
                            <div className="left">
                            <h3>Good morning, Eleanor</h3>
                            <p>Welcome to your daily event calendar.<br/>
                                Here you can see all the upcoming events,<br />
                                meeting and create new events.</p>
                            <button className="create-event"> + Create event</button>
                            </div>
                            <div className="images">
                                <img src={Marni} alt=" a juggling lady" className="marni"/>
                                <img src={Ball} alt="a football" className="ball"/>
                            </div>
                        </div>
                        <div className="reminder">
                            <h3>Reminder</h3>
                            <div className="box">
                                <img src={Toggle} alt="toggle is off" className="toggle"/>
                                <div className="reminder-info">
                                    <p>Training session</p>
                                    <p>10:00am</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={Toggles} alt="toggle is on" className="toggle"/>
                                <div className="reminder-info">
                                    <p>Team meetings</p>
                                    <p>1:00pm</p>
                                </div>
                            </div>
                            <button className="add-new"> + Add new</button>
                        </div>
                    </div>
                    <div className="main-left-bottom">
                        <div className="contacts">
                            <div className="contacts-top">
                                <h3>Contacts</h3>
                                <p><span className="view">View all</span></p>
                            </div>
                            <div className="contact-info">
                                <img src={Martin} alt="a gym instructor" className="contact-image"/>
                                <div className="name">
                                    <p>Martins Black</p>
                                    <sub>Coach</sub>
                                </div>
                                <img src={Group} alt="An icon for showing more details" className="more"/>
                            </div>
                            <div className="contact-info">
                                <img src={Jane} alt="a blonde woman" className="contact-image"/>
                                <div className="name">
                                    <p>Jane cooper</p>
                                    <sub>Manager</sub>
                                </div>
                                <img src={Group} alt="An icon for showing more details" className="more"/>
                            </div>
                            <div className="contact-info">
                                <img src={Jacob} alt="a man wearing glasses" className="contact-image"/>
                                <div className="name">
                                    <p>Jacob Gate</p>
                                    <sub>Player</sub>
                                </div>
                                <img src={Group} alt="An icon for showing more details" className="more"/>
                            </div>
                            <div className="contact-info">
                                <img src={Albert} alt="" className="contact-image"/>
                                <div className="name">
                                    <p>Albert Fox</p>
                                    <sub>Player</sub>
                                </div>
                                <img src={Group} alt="An icon for showing more details" className="more"/>
                            </div>
                        </div>
                        <div className="results">
                            <img src={Results} alt="" className="result-image"/>
                        </div>
                    </div>
                </div>
                <div className="main-right">
                    <img src={Calendar} alt="A calndar showing the present date" />
                    <div className="schedule">
                        <div className="schedule-top">
                            <h3>Schedule</h3>
                            <p><span className="view">View all</span></p>
                        </div>
                        <div className="schedule-box">
                            <div className="box-info">
                                <p><span className="team">Team meetings</span></p>
                                <p>BD & Treatment Centre</p>
                                <p>4:15pm - 6:00pm</p>
                            </div>
                            <img src={Group} alt="" className="more"/>
                        </div>
                        <div className="schedule-box">
                            <div className="box-info">
                                <p><span className="medical">Medical Checks</span></p>
                                <p>BD & Treatment Centre</p>
                                <p>4:15pm - 6:00pm</p>
                            </div>
                            <img src={Group} alt="" className="more"/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;
import React, { useState } from 'react'
import visitor from '../../../common/images/visitor.jpg'
import './visitorProfile.scss'
import { Link } from 'react-router-dom'
import { VisitStepper } from '../VisitStepper/VisitStepper'
interface VisitorProfileProps {
    item: {
        code: String
    }
}



export const VisitorProfile: React.FC<VisitorProfileProps> = ({ item }) => {
    const [hidden, setHidden] = useState<Boolean>(true)
    const handleHide = () => {
        setHidden(!hidden)
    }
    return (
        <div className="visitor__profile">
            <div className="left__panel">
                <div className="visitor__details">
                    <div className="visitor__image">
                        <img className="visitor__icon" src={visitor} alt="visitor" />
                    </div>
                    <div className="visitor__info">
                        <p>Visitor Profile</p>
                        <span>username</span>
                        <div className="container">
                            <div className="service__box">
                                <div className="service__item">
                                    <span className={`flag-icon flag-icon-${item.code} mx-1`}></span>
                                    <span className="service__title">Finland</span>
                                </div>
                            </div>
                            <div className="service__box">
                                <div className="service__item">
                                    <img className="icon__image" src="https://img.icons8.com/fluency/48/000000/chrome.png" />
                                    <span className="service__title">Chrome</span>
                                </div>
                            </div>
                            <div className="service__box">
                                <div className="service__item">
                                    <img className="icon__image" src="https://img.icons8.com/color/48/000000/windows-10.png" />
                                    <span className="service__title">Windows</span>
                                </div>
                            </div>
                            <div className="service__box">
                                <div className="service__item">
                                    <img src="https://img.icons8.com/material-outlined/24/000000/monitor.png" />
                                    <span className="service__title">Desktop</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="summary">
                    <h5>
                        Summary
                    </h5>
                    <p>Spent a total of 13 min 59s on the website, and performed 21 actions (9 Pageviews, 12 Events) in 1 visits.</p>
                    <p>Converted 0 Goals.</p>
                    <p>Each page took on average 3.475s to load for this visitor.</p>
                </div>
                <div className="vistis__Timing">
                    <div className="left">
                        <h5>First Visit</h5>
                        <p>Sunday, August 29, 2021 - 0 days ago from Direct Entry</p>
                    </div>
                    <div className="right">
                        <h5>Last Visit</h5>
                        <p>Sunday, August 29, 2021 - 0 days ago from Direct Entry</p>
                    </div>
                </div>
                <div className="devices">
                    <h5>Devices</h5>
                    <div>
                        <img src="https://img.icons8.com/material-outlined/24/000000/monitor.png" />
                        <p>1 visits from Desktop devices: Generic Desktop (1x)</p>
                    </div>
                </div>
                <div className="locations">
                    <h5>Location</h5>
                    <p>1 visit from Masku, Finland <Link to=''>(show on Map)</Link></p>
                </div>
            </div>
            <div className="right__panel">
                <div className="visit__title" title='click here to view more information' onClick={handleHide}>
                    Visit #
                    <span className='counter'>1</span>
                    <span>Sunday, August 29, 2021 14:03:21</span>
                    {hidden &&
                        <span title='Visitor ID: 43630ea2299819b2
                Visit ID: 550961
                Germany
                GPS (lat/long): 51.299000,9.491000'>
                            IP: 148.251.0.0
                            <br />
                            <span>
                                <img width='16' className='flag' src='' />
                                Germany
                            </span>
                            <div className='visitorReference'>Direct Entry</div>

                        </span>
                    }
                </div>
                <VisitStepper/>
            </div>
        </div >
    );
}
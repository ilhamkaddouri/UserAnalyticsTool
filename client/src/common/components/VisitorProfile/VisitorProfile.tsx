import React, { useState } from 'react';
import visitor from '../../../common/images/visitor.jpg';
import './visitorProfile.scss';
import { Link } from 'react-router-dom';
import { VisitStepper } from '../VisitStepper/VisitStepper';
import moment from 'moment';
import {FavoritesMap} from '../../../components/Behavior/FavoritesMap';

interface VisitorProfileProps {
    item: {
        url: String,
    method: String,
    responseTime: Number,
    day: String,
    month: String,
    year: Number,
    hour: Number,
    time: String,
    date: String,
    ip: String,
    countryCode: String,
    country: String,
    city: String,
    latitude: String,
    longitude: String,
    region: String,
    continent: String,
    language: String,
    browser: String,
    device: String,
    deviceVednor: String,
    deviceModel: String,
    os: String,
    osVersion: String,
    engine: String,
    createdAt: Date
    }
}



export const VisitorProfile: React.FC<VisitorProfileProps> = ({ item }) => {
    const [hidden, setHidden] = useState<Boolean>(false)
    const [hideMap, setHideMap] = useState<Boolean>(false)
    const handleHide = () => {
        setHidden(!hidden)
    }

    const handleMap = ()=>{
        setHideMap(!hideMap)
    }
    function jsUcfirst(string: String) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function jsLwfirst(string: String) 
    {
        return string.charAt(0).toLowerCase() + string.slice(1);
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
                        <span>{item.ip}</span>
                        <div className="container">
                            <div className="service__box">
                                <div className="service__item">
                                    <span title={`${jsUcfirst(item.country)}`} className={`flag-icon flag-icon-${item.countryCode.toLowerCase()} mx-1`}></span>
                                    <span title={`${jsUcfirst(item.country)}`} className="service__title">{item.city}, {item.country}</span>
                                </div>
                            </div>
                            <div className="service__box">
                                <div className="service__item">
                                    <img title={`${jsUcfirst(item.browser)}`} className="icon__image" src={`https://img.icons8.com/color/48/000000/${jsLwfirst(item.browser) === `edge` ? `ms-edge` : jsLwfirst(item.browser)}.png`} />
                                    <span title={`${jsUcfirst(item.browser)}`} className="service__title">{item.browser}</span>
                                </div>
                            </div>
                            <div className="service__box">
                                <div className="service__item">
                                    <img title={`${jsUcfirst(item.os)}`} className="icon__image" src={`https://img.icons8.com/color/48/000000/${jsLwfirst(item.os)}.png`} />
                                    <span className="service__title">{item.os}</span>
                                </div>
                            </div>
                            <div className="service__box">
                                <div className="service__item">
                                    <img title={`${jsUcfirst(item.device)}`} src={`https://img.icons8.com/material-outlined/24/000000/${jsLwfirst(item.device) ===`desktop` ? `monitor`: jsLwfirst(item.browser)}.png`} />
                                    <span title={`${jsUcfirst(item.device)}`} className="service__title">{jsUcfirst(item.device)}</span>
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
                        <p>1 visits from Desktop devices: <b>{jsUcfirst(item.device)}</b></p>
                    </div>
                </div>
                <div className="locations">
                    <h5>Location</h5>
                    <p>1 visit from <b> {item.city}, {item.country}</b> <button className='map__button' onClick={handleMap}> <span title={`${jsUcfirst(item.country)}`} className={`flag-icon flag-icon-${item.countryCode.toLowerCase()} mx-1`}></span>(show on Map)</button></p>
                    {
                        hideMap && <FavoritesMap list={[{
                            city: item.city,
                            country: item.country,
                            region: item.region,
                            lat: Number(item.latitude),
                            lon: Number(item.longitude),
                        }]}/>
                    }
                </div>
            </div>
            <div className="right__panel">
                <div className="visit__title" title='click here to view more information' onClick={handleHide}>
                    Visit #
                    <span className='counter'>1</span>
                    <span>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    {hidden &&
                        <span title='Visitor ID: 43630ea2299819b2
                Visit ID: 550961
                Germany
                GPS (lat/long): 51.299000,9.491000'>
                            IP: ${item.ip}
                            <br />
                            <span>
                                <img width='16' className='flag' src='' />
                                ${item.country}
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
import React, {useState, useEffect} from 'react'
import '../../styles/styles.scss'
import './Visitors.scss'
import {useTranslation} from 'react-i18next'
import Pusher, { Channel } from 'pusher-js'

import {getVisits} from '../../services/logsService'
interface VisitsLogsProps {

}
const key = 'f836fe696615af7319c1'
type res = {
    averageResponseTime: any;
    statsPerRoute: any;
    requestsPerDay: any;
    requestsPerHour: any;
    totalRequests: any;
}
type visit = {
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
    country: String,
    language: String,
    browser: String
}
export const VisitsLogs: React.FC<VisitsLogsProps> = ({}) => {
    const { t } = useTranslation()
    const [data, setData] = useState<res>();
    const [pusherChannel, setPusherChannel] = useState<Channel>();
    const [visits, setVisits] = useState([])

    useEffect(()=>{
        var pusher = new Pusher(key);
      
        const channel = pusher.subscribe('analytics');
        setPusherChannel(channel);
        async function getUserVisits() {
            let response = await getVisits();
            if (response.data) {
                setVisits(response.data)
            }
        }
        getUserVisits()
    },[])
    useEffect(() => {
        console.log("Updated data : ", data);
        if(pusherChannel && pusherChannel.bind){
          console.log("Unbinding Event");
          pusherChannel.unbind('updated');
          console.log("Rebinding Event");
          pusherChannel.bind('updated', (pusherData: res) => {
            // USE UPDATED "data" here
            setData(pusherData);
          })}
      }, [pusherChannel, data]);
          
    return (
        <div className="page__container">
            <div className="element__container">
                <span className='visitors__element__title'>{t('Visitors.vistisOverTime')}</span>
                <div>
                {visits && visits.map((visit: visit)=>(
                    <div className='visit'>
                        <span><b>{visit.day}, {visit.month}, {visit.hour},{visit.year} - {visit.time}</b></span>
                        {/* <span>{visit.date}</span> */}
                        <p>IP: {visit.ip}</p>
                        <p>URL: {visit.url}</p>
                        <p>Browser: {visit.browser}</p>
                        <p>Language: {visit.language}</p>
                    </div>
                ))}
                <div className='graph__options'>
                
                </div>
                </div>
            </div>
            <div className="element__container">
                <span className='visitors__element__title'>{t('Visitors.overviewVisits')}</span>
            </div>
        </div>
    );
}
import React, {useState, useEffect} from 'react'
import '../../styles/styles.scss'
import './Visitors.scss'
import {useTranslation} from 'react-i18next'
import './Visitors.scss'
import '../Dashboard/dashboard.scss'
import {getVisitsDate} from '../../services/logsService'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
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
    _id: Number,
    numberOfRequests: Number,
}
export const VisitsTime: React.FC<VisitsLogsProps> = ({}) => {
    const { t } = useTranslation()
    const [visitsHour, setVisitsHour] = useState([])
    const [visitsDay, setVisitsDay] = useState([])
    const [visitsMonth, setVisitsMonth] = useState([])
    const [visitsYear, setVisitsYear] = useState([])

    useEffect(()=>{
       
        async function getUserVisits() {
            let response = await getVisitsDate();
            if (response.data) {
                setVisitsHour(response.data.requestsPerHour);
                setVisitsDay(response.data.requestsPerDay);
                setVisitsMonth(response.data.requestsPerMonth);
                setVisitsYear(response.data.requestsPerYear)
            }
        }
        getUserVisits()
    },[])
          
    return (
        <div className="dashboard__container">
            <div className="container__box">
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>Visits Per Hour</span>
                    <div className='dashboard__item chart__item'>
                    {
                        visitsHour && visitsHour.map((visitHour: visit)=>(
                            <div className='visit'>
                                <p> <AccessTimeIcon fontSize='inherit'/><b> Hour :</b> {visitHour._id}</p>
                                <p> numberOfRequests : {visitHour.numberOfRequests}</p>
                            </div>
                        ))
                    }
                    <span className='info'>2788 visits</span>
                    </div>
                    
                </div>
                
            </div>
            <div className="container__box">
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>Visits Per Day</span>
                    <div className='dashboard__item'>
                    {
                        visitsHour && visitsDay.map((visitHour: visit)=>(
                            <div className='visit'>
                                <p><TodayIcon fontSize='inherit'/> <b>Day : </b>{visitHour._id}</p>
                                <p>numberOfRequests : {visitHour.numberOfRequests}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className="container__box">
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>Visits Per Month</span>
                    <div className='dashboard__item'>
                    {
                        visitsHour && visitsMonth.map((visitHour: visit)=>(
                            <div className='visit'>
                                <p><DateRangeIcon fontSize='inherit'/> <b>Month : </b>{visitHour._id}</p>
                                <p>numberOfRequests : {visitHour.numberOfRequests}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>Visits Per Year</span>
                    <div className='dashboard__item'>
                    {
                        visitsHour && visitsYear.map((visitHour: visit)=>(
                            <div className='visit'>
                                <p><CalendarViewDayIcon fontSize='inherit'/><b>Year : </b>{visitHour._id}</p>
                                <p>numberOfRequests : {visitHour.numberOfRequests}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}
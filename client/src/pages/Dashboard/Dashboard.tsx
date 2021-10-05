import React,{useState, useEffect} from 'react'
import './dashboard.scss'
import {VisitsChart} from '../../common/components/Visits/VisitsChart'
import {VisitsTable} from '../../common/components/VisitsTable/VisitsTable'
import {useTranslation} from 'react-i18next'
import { WorldMapChart } from '../../common/components/Map/WorldMapChart'
import { TableChannel } from '../../common/components/ChannelTable/TableChannel'
import {getVisitsDate} from '../../services/logsService'
import { ChannelTable } from '../../common/components/ChannelTable/ChannelTable'
import {DataTable} from '../../common/components/Behavior/DataTable'
import { TotalVisits } from '../../components/Dashboard/TotalVisits'
import {getVisitsData} from '../../services/logsService'
const data = [
    {
        month: 'Jun',
        visits: 4000,
    },
    {
        month: 'Feb',
        visits: 3000,
    },
    {
        month: 'Mar',
        visits: 2700,
    },
    {
        month: 'Apr',
        visits: 2070,
    },
    {
        month: 'May',
        visits: 2000,
    },
    {
        month: 'June',
        visits: 9800,
    },
    {
        month: 'July',
        visits: 4000
    },
    {
        month: 'Aug',
        visits: 500
    },
    {
        month: 'Sept',
        visits: 1000
    },
    {
        month: 'Nov',
        visits: 3400
    },
    {
        month: 'Oct',
        visits: 340
    },
    {
        month: 'Dec',
        visits: 1500
    }
]
const days = [
    {
        month: 'Mon',
        visits: 4000,
    },
    {
        month: 'Tue',
        visits: 3000,
    },
    {
        month: 'Wed',
        visits: 2700,
    },
    {
        month: 'Thu',
        visits: 2070,
    },
    {
        month: 'Fri',
        visits: 2000,
    },
    {
        month: 'Sat',
        visits: 9800,
    },
    {
        month: 'Sun',
        visits: 4000
    },
]

const datas = [
    {
      type:'1',
      uniqueVistors: '12'
    },
    {
      type:'2',
      uniqueVistors: '24'
    },
    {
        type:'3',
        uniqueVistors: '44'
      },
      {
        type:'4',
        uniqueVistors: '12'
      },
      {
        type:'5',
        uniqueVistors: '34'
      },
      {
          type:'6',
          uniqueVistors: '78'
        },
        {
            type:'7',
            uniqueVistors: '3'
          },
          {
            type:'8',
            uniqueVistors: '123'
          },
          {
              type:'9',
              uniqueVistors: '24'
            },
  ];
  
  const tableHeaders = [{id: "type", label:'Type'}, {id:"uniqueVistors", label:'Unique Visitors'}];
  
  const tableBodies = [
    `type`,
    `uniqueVistors`,
  ];

interface DashboardProps {

}

export const Dashboard: React.FC<DashboardProps> = ({ }) => {
    const { t } = useTranslation()
    const [visitsMonth, setVisitsMonth] = useState([])
    const [visitsDay, setVisitsDay] = useState([])
    const [visits, setVisits] = useState(0);

        useEffect(()=>{
            async function getUserVisits() {
                let response = await getVisitsDate();
                let result = await getVisitsData()
                if(result){
                    setVisits(result.data.visits);
                }
                if (response.data) {
                    setVisitsMonth(response.data.requestsPerMonth);
                    setVisitsDay(response.data.requestsPerDay);
                }
            }
            getUserVisits()
        },[])
    return (
        <div className="dashboard__container">
            <div className="container__box">
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visits')}</span>
                    <div className='dashboard__item chart__item'>
                    
                    <span className='info' title='total visits until today'>{visits} visits</span>
                    </div>
                    
                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitsInrealTime')}</span>
                    <div className='dashboard__item'>
                        <VisitsTable/>
                    </div>
                </div>
            </div>
            <div className="container__box">
            <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visits')}</span>
                    <div className='dashboard__item chart__item'>
                    <VisitsChart data={visitsMonth}/>
                    </div>
                    
                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitsOverTime')}</span>
                    <div className='dashboard__item'>
                        <VisitsChart data={visitsDay}/>
                    </div>
                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitsOverview')}</span>
                    <div className='dashboard__item'>
                        <TotalVisits/>
                    </div>
                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitsMoversShakes')}</span>
                    <div className='dashboard__item'>
                        <div className="movers__content">No rows match this critrea</div>
                    </div>

                </div>
            </div>
            <div className="container__box">
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitorMap')}</span>
                    <div className='dashboard__item'>
                        <WorldMapChart/>
                    </div>
                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.channelTypes')}</span>
                    <div className='dashboard__item'>
                    <DataTable
                        data={datas}
                        tableHeaders={tableHeaders}
                        tableBodies={tableBodies}
                        name='channelTypes'
                        title='Continent'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
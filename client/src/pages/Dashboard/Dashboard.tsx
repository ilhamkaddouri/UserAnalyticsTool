import React from 'react'
import './dashboard.scss'
import {VisitsChart} from '../../common/components/Visits/VisitsChart'
import {VisitsTable} from '../../common/components/VisitsTable/VisitsTable'
import {useTranslation} from 'react-i18next'
import { WorldMapChart } from '../../common/components/Map/WorldMapChart'
import { TableChannel } from '../../common/components/ChannelTable/TableChannel'
import { ChannelTable } from '../../common/components/ChannelTable/ChannelTable'
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
interface DashboardProps {

}

export const Dashboard: React.FC<DashboardProps> = ({ }) => {
    const { t } = useTranslation()
    return (
        <div className="dashboard__container">
            <div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visits')}</span>
                    <div className='dashboard__item chart__item'>
                    <VisitsChart data={data}/>
                    <span className='info'>2788 visits</span>
                    </div>
                    
                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitsInrealTime')}</span>
                    <div className='dashboard__item'>
                        <VisitsTable/>
                    </div>
                </div>
            </div>
            <div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitsOverTime')}</span>
                    <div className='dashboard__item'>
                        <VisitsChart data={days}/>
                    </div>
                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitsMoversShakes')}</span>
                    <div className='dashboard__item'>
                        <div className="movers__content">No rows match this critrea</div>
                    </div>

                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitsOverview')}</span>
                    <div className='dashboard__item'>

                    </div>
                </div>
            </div>
            <div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.visitorMap')}</span>
                    <div className='dashboard__item'>
                        <WorldMapChart/>
                    </div>
                </div>
                <div className='dashboard__element__container'>
                    <span className='dashboard__element__title'>{t('Dashboard.channelTypes')}</span>
                    <div className='dashboard__item'>
                        <ChannelTable/>
                    </div>
                </div>
            </div>
        </div>
    );
}
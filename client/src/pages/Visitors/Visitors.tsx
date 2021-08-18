import React from 'react'
import { VisitsChart } from '../../common/components/Visits/VisitsChart'
import {useTranslation} from 'react-i18next'
import { IconButton } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ImageIcon from '@material-ui/icons/Image';
import MessageIcon from '@material-ui/icons/Message';
import ArchiveIcon from '@material-ui/icons/Archive';
import './Visitors.scss'
import '../../styles/styles.scss'
interface VisitorsProps {

}

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

export const Visitors: React.FC<VisitorsProps> = ({}) => {
        const { t } = useTranslation()
        return (
            <div className="page__container">
                <div className="element__container">
                    <span className='visitors__element__title'>{t('Visitors.vistisOverTime')}</span>
                    <VisitsChart data={data}/>
                    <div>
                    <div className='graph__options'>
                        <IconButton>
                            <ArchiveIcon style={{ color: '#7cbd7f' }}/>
                        </IconButton>
                        <IconButton>
                            <ImageIcon style={{ color: '#7cbd7f' }}/>
                        </IconButton>
                        <IconButton>
                            <MessageIcon style={{ color: '#7cbd7f' }}/>
                        </IconButton>
                        <IconButton>
                            <DateRangeIcon style={{ color: '#7cbd7f' }}/>
                        </IconButton>
                    </div>
                    </div>
                </div>
                <div className="element__container">
                    <span className='visitors__element__title'>{t('Visitors.overviewVisits')}</span>
                </div>
            </div>
        );
}
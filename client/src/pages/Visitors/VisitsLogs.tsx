import React from 'react'
import '../../styles/styles.scss'
import './Visitors.scss'
import {useTranslation} from 'react-i18next'
interface VisitsLogsProps {

}

export const VisitsLogs: React.FC<VisitsLogsProps> = ({}) => {
    const { t } = useTranslation()
    return (
        <div className="page__container">
            <div className="element__container">
                <span className='visitors__element__title'>{t('Visitors.vistisOverTime')}</span>
                
                <div>
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
import React from 'react'
import {WorldMapChart} from '../../common/components/Map/WorldMapChart'
import {useTranslation} from 'react-i18next'
interface RealTimeMapProps {

}

export const RealTimeMap: React.FC<RealTimeMapProps> = ({}) => {
    const { t } = useTranslation()
        return (
            <div className="page__container">
            <div className="element__container">
                <span className='visitors__element__title'>{t('Visitors.realtimeMap')}</span>
                <WorldMapChart/>
            </div>
        </div>
        );
}
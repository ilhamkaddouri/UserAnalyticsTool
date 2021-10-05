import React from 'react'
import { WorldMapChart } from '../../common/components/Map/WorldMapChart'
import { useTranslation } from 'react-i18next'
import {FavoritesMap} from '../../components/Behavior/FavoritesMap'
import { RealTimeMaps } from '../../components/Behavior/RealTimeMaps'
import '../../styles/styles.scss'
interface RealTimeMapProps {

}

const list =[
    {
        city: "Helsinki",
        country: "Finland",
        region: "Uuasima",
        lat: 60.1719,
        lon: 24.9347,
        uniqueVisitors: 1245
    },
    {
        city: "Tan-tan",
        country: "Morocco",
        region: "Guelmim-Oued Noun",
        lat: 28.43799,
        lon: -11.10321,
        uniqueVisitors: 458
    },

];
export const RealTimeMap: React.FC<RealTimeMapProps> = ({ }) => {
    const { t } = useTranslation()
    return (
        <div className="page__container">
            <div className="element__container">
                <span className='visitors__element__title'>{t('Visitors.realtimeMap')}</span>
                <FavoritesMap list={list} />
            </div>
        </div>
    );
}
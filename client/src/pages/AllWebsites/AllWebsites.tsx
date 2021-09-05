import React from 'react'
import { TableData } from '../../components/AllWebsites/TableData/TableData'
import {Toolbar} from '../../components/Toolbar/Toolbar'
import { Search } from '../../components/AllWebsites/Search/Search'
import './allWebSites.scss'
interface AllWebsitesProps {

}

export const AllWebsites: React.FC<AllWebsitesProps> = ({}) => {
        return (
            <div className="page__container">
                <Toolbar/>
                    <div className="search">
                        <Search/>
                    </div>
                <div className="page__data">
                    <p className='table__title'>All Websites dashboard <span className="details">(Total: 145 visits, 2,048 pageviews, 2,491 actions, 0 revenue)</span></p>
                    <div>
                        <TableData/>
                    </div>
                </div>
            </div>
        );
}
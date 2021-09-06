import React, {useState} from 'react'
import {sidebarData} from './SidebarData'
import {SubMenu} from './SubMenu'
import './sidebar.scss'
interface SidebarProps {

}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
    const [sidebar, setSidebar] = useState<Boolean>(false)
    const showSideBar = ()=> setSidebar(!sidebar)
    return (
        <div className='sidebar'>
            <div className='sidebar__container'>
                <div className="sidebar__menu">
                    {sidebarData.map((menuItem,index)=>{
                        return <SubMenu key={menuItem.title} item={menuItem} />
                    })}
                </div>
            </div>
        </div>
    );
}
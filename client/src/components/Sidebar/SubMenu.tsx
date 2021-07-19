import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './submenu.scss'
interface SubMenuProps {
    item: MenuData
}
type MenuData = {
    title: string;
    path: string;
    icon: JSX.Element;
    iconClosed: JSX.Element;
    iconOpened: JSX.Element;
    subMenu: {
        title: string;
        path: string;
    }[];
}
export const SubMenu: React.FC<SubMenuProps> = ({item}) => {
    const [subMenu, setSubMenu] = useState<Boolean>(false);
    const showSubMenu = ()=> setSubMenu(!subMenu)
    return (
        <>
            <Link to={item.path} onClick={item.subMenu && showSubMenu} className='submenu__link'>
                <div>
                    {item.icon}
                    <span className='submenu__title'>{item.title}</span>
                </div>
                <div>
                    {item.subMenu && subMenu
                    ? item.iconOpened
                    : item.subMenu
                    ? item.iconClosed
                    : null
                    }
                </div>
            </Link>
            {subMenu && item.subMenu.map((item,index)=>{
                return (
                    <Link className='submenu__link' to={item.path}>
                        <span className='submenu__title'>{item.title}</span>
                    </Link>
                )
            })}
        </>
        
    );
}
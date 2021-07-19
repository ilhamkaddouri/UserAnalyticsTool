import React, { useState } from 'react'
import logo from '../../common/images/OC_logo.png'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InfoIcon from '@material-ui/icons/Info';
import LanguageIcon from '@material-ui/icons/Language';
import {Link} from 'react-router-dom'
import supportedLocales from '../../i18n/locales.json'
import './toolbar.scss'

interface ToolbarProps {

}

export const Toolbar: React.FC<ToolbarProps> = ({}) => {
    const [openLanguage, setOpenLanguage] = useState<Boolean>(false);
    const showLanguage = ()=> setOpenLanguage(!openLanguage)
    return (
        <div className='header'>
            <div className='header__container'>
                <div className='header__left'>
                    <img className='header__logo' src={logo} alt='OpusCapita'/>
                </div>
                <div className='header__right'>
                    {/* <div className='contents'>
                        <li>Dahboard</li>
                        <li>All websites</li>
                        <li>Task Manager</li>
                    </div> */}
                    <div className='header__icons'>
                        <IconButton>
                            <InfoIcon/>
                        </IconButton>
                        <IconButton>
                            <NotificationsIcon/>
                        </IconButton>
                        <IconButton onClick={showLanguage}>
                            <LanguageIcon/>
                            {openLanguage && supportedLocales.map((item:any,index:any)=>{
                            return (
                                <Link className='submenu__link' to={item}>
                                    <span>{item}</span>
                                </Link>
                            )
            })}
                        </IconButton>
                        <IconButton>
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
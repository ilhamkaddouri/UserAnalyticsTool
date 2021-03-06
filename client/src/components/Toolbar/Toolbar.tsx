import React, { useState } from 'react'
import logo from '../../common/images/OC_logo.png'
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InfoIcon from '@material-ui/icons/Info';
import LanguageIcon from '@material-ui/icons/Language';
import {useTranslation} from 'react-i18next'
import {DropDownLanguage} from './DropDownLanguage'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import './toolbar.scss'
import { Link } from 'react-router-dom';
interface ToolbarProps {

}

export const Toolbar: React.FC<ToolbarProps> = ({}) => {
    const [openLanguage, setOpenLanguage] = useState<Boolean>(false);
    const [showToggle, setShowToggle] = useState<Boolean>(false);
    const showLanguage = ()=> setOpenLanguage(!openLanguage)
    const { t } = useTranslation()

    return (
        <div className='header'>
            <div className='header__container'>
                <div className='formatalign'>
                    <IconButton>
                        <FormatAlignJustifyIcon fontSize='large'  style={{color: 'black'}}/>
                    </IconButton>
                </div>
                <div className='header__left'>
                    <img className='header__logo' src={logo} alt='OpusCapita'/>
                </div>
                <div className='header__right' id={showToggle ? "hidden" : ""}>
                    <div className='header__links' id={showToggle ? "link" : ""}>
                        <Link className='page__link' to='/dashboard'>{t('Header.dashboard')}</Link>
                        <Link className='page__link' to='/allwebsites'>{t('Header.website')}</Link>
                        <Link className='page__link' to='/taskManagers'>{t('Header.manager')}</Link>
                    </div>
                    <div className='header__icons' id={showToggle ? "icon" : ""}>
                        <button className='header__button'>
                            <InfoIcon color='action'/>
                        </button>
                        <button className='header__button'>
                            <NotificationsIcon color='action'/>
                        </button>
                        <button onClick={showLanguage} className='header__button'>
                            <LanguageIcon color='action'/>
                            {openLanguage && <DropDownLanguage/>}
                        </button>
                        <button className='header__button'>
                            <AccountCircle color='action'/>
                        </button>
                    </div>
                </div>
                <div className='morevert'>
                    <IconButton>
                        <MoreVertIcon fontSize='large' style={{color: 'black'}} onClick={()=> setShowToggle(!showToggle)}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
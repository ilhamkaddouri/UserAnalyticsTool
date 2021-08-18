import React from 'react'
import logo from '../../../common/images/OC_logo.png'
import './Header.scss'
interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <div className="header__container">
                <img className='oc__image'src={logo} alt="OC"/>
            </div>
        );
}
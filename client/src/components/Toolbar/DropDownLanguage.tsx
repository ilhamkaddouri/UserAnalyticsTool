import React from 'react'
import { LanguageItems } from './LanguageItems'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
import './dropdownlanguage.scss'
interface DropDownLanguageProps {

}

export const DropDownLanguage: React.FC<DropDownLanguageProps> = ({ }) => {
    return (
        <div className="header__language__dropdown">
            {LanguageItems.map((item: any, index: any) => {
                return (
                    <li key={index} className='header__link'>
                        <Link to={item} className='header_language' onClick={()=> i18next.changeLanguage(item.code)}>
                            <span className={`flag-icon flag-icon-${item.code} mx-1`}></span>
                            {item.name}
                        </Link>
                    </li>
                )
            })
            }
        </div>
    );
}
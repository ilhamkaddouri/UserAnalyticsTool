import React from 'react'
import {AddUserComp} from '../../components/Users/AddUser'
import {useTranslation} from 'react-i18next'
import './addUser.scss'
interface AddUserProps {

}

export const AddUser: React.FC<AddUserProps> = ({}) => {
    const { t } = useTranslation()
        return (
            <div className="user__container">
            <div className="element__container">
                <span className='visitors__element__title'>{t('Users.manage')}</span>
                <div className='dashboard__item chart__item'>
                    <AddUserComp />
                </div>
            </div>
        </div>
        );
}
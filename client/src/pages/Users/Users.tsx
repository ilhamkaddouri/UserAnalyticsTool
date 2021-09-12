import React from 'react'
import { UsersTable } from '../../components/Users/UsersTable'
import {useTranslation} from 'react-i18next'
interface UsersProps {

}

export const Users: React.FC<UsersProps> = ({ }) => {
    const { t } = useTranslation()
    return (
        <div className="page__container">
            <div className="element__container">
                <span className='visitors__element__title'>{t('Users.title')}</span>
                <div className='dashboard__item chart__item'>
                    <UsersTable />
                </div>
            </div>
        </div>
    );
}
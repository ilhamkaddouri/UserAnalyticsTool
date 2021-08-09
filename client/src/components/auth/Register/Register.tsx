import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './register.scss'
import {useTranslation} from 'react-i18next'
interface RegisterProps {

}

export const Register: React.FC<RegisterProps> = ({}) => {
    const { t } = useTranslation()
    return (
        <>
        <form className="register__form" noValidate autoComplete="off">
            <TextField id="standard-basic" label={t('Login.firstName')} className='register__input'/>
            <TextField id="standard-basic" label={t('Login.lastName')} className='register__input'/>
            <TextField id="standard-basic" label={t('Login.username')} className='register__input'/>
            <TextField id="standard-basic" label={t('Login.email')} className='register__input'/>
            <TextField id="standard-basic" label={t('Login.password')} className='register__input'/>
            <Button variant="contained" className="register__button">{t('Register.action')}</Button>
        </form>
    </>
    );
}
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useTranslation} from 'react-i18next'
import './login.scss'
interface LoginProps {

}

export const Login: React.FC<LoginProps> = ({}) => {
    const { t } = useTranslation()
    return (
        <div className="login__container">
            <form className="login__form" noValidate autoComplete="off">
                <TextField id="standard-basic" label={t('Login.email')} className='login__input'/>
                <TextField id="standard-basic" label={t('Login.password')} className='login__input'/>
                <Button variant="contained" className="login__button">{t('Login.action')}</Button>
            </form>
        </div>
    );
}
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useTranslation } from 'react-i18next'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import {Link} from 'react-router-dom'
import {signIn} from '../../../services/authService'
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import { Header } from '../Header/Header'

import { ErrorNotice } from '../../../common/Errors/ErrorNotice'
import '../Login/login.scss'

interface RegisterProps {

}
interface State {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '90%',
            margin: 'auto',
            color: '#9e9e9e'
        },
    }),
);

export const Register: React.FC<RegisterProps> = ({ }) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const history = useHistory();
    const [error, setError] = useState<string>();
    const [values, setValues] = React.useState<State>({
        firstName:'',
        lastName:'',
        email:'',
        username:'',
        password: '',
        showPassword: false,
    });
    const [checkBox, setcheckBox] = React.useState({
        checkedA: false,
    });


    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setcheckBox({ ...checkBox, [event.target.name]: event.target.checked });
    }

    const SignIn = async ()=>{
        const firstName = values.firstName
        const lastName = values.lastName
        const username = values.username
        const email = values.email
        const password = values.password
        const user  = {firstName, lastName, username, email, password}
        try{
            const result = await signIn(user)
            setTimeout(() => {}, 2000);
            history.push('/')
        }catch(error){
            error.response.data.msg && setError(error.response.data.msg);
        }
    }

    return (
        <div className="login__container">
            <Header />
            <form className="login__form" autoComplete="off">
                {/* <TextField id="standard-basic" label={t('Login.password')} style={{ color: '#9e9e9e' }} className='login__input' /> */}
                <div className="login__label">
                    <span>Sign Up</span>
                </div>
                {/* <TextField
                    label="Username or Email"
                    id="standard-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                /> */}
                {error && (
                    <ErrorNotice
                        message={error}
                    //clearError={() => setError(undefined)}
                    />
                )}
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel className='login__input' htmlFor="standard-adornment-password"> First Name </InputLabel>
                    <Input id="standard-adornment"
                        type='text'
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel className='login__input' htmlFor="standard-adornment-password"> Last Name</InputLabel>
                    <Input id="standard-adornment-password"
                        type='text'
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel className='login__input' htmlFor="standard-adornment-password"> Username </InputLabel>
                    <Input id="standard-adornment-password"
                        type='text'
                        value={values.username}
                        onChange={handleChange('username')}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel className='login__input' htmlFor="standard-adornment-password"> Email</InputLabel>
                    <Input id="standard-adornment-password"
                        type='text'
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel className='login__input' htmlFor="standard-adornment-password"><LockIcon fontSize='inherit' /> Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div className="login__actions">
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={checkBox.checkedA} onChange={handleChangeCheckbox} name="checkedA" />}
                            label="Remember Me"
                            style={{ color: '#9e9e9e' }}
                        />
                    </FormGroup>
                    <Button variant="contained" className="login__button" onClick={SignIn}>Sign Up</Button>
                </div>
                <div className="login__forget__password">
                    <span className="login__forget__password__span"><Link to='/'>Already have an Account? Sign In</Link></span>
                </div>
            </form>
        </div>
    );
}
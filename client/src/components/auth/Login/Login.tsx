import React, { useState, useContext } from 'react'
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
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { logIn } from '../../../services/authService'
import { User } from '../../../models/User'
import { Header } from '../Header/Header'
import './login.scss'
import { ErrorNotice } from '../../../common/Errors/ErrorNotice'
import { SuccessNotice } from '../../../common/Errors/SuccessNotice'
import UserContext from '../../../context/UserContext'
interface LoginProps {

}
interface State {
    email: string,
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

export const Login: React.FC<LoginProps> = ({ }) => {
    const { t } = useTranslation();
    const history = useHistory();
    const classes = useStyles();
    const {setUserData} = useContext(UserContext)
    const [error, setError] = useState<string>();

    /** Successful registration of account */
    const [success, setSuccess] = useState<string>();


    const [values, setValues] = React.useState<State>({
        email: '',
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

    const signIn = async () => {
        const email = values.email
        const password = values.password
        const user = { email, password }
        try {
            const loginUser = await logIn(user)
            if (loginUser.data.token) {
                setSuccess("Account created successfully. Welcome aboard !");
                setUserData({
                    token: loginUser.data.token,
                    user: loginUser.data.user.id,
                  });
            }
            setTimeout(() => { }, 2000);
            localStorage.setItem("auth-token", loginUser.data.token);
            history.push('/dashboard')

        } catch (error) {
            setError('Cannot log in');
        }
    }

    return (
        <div className="login__container">
            <Header />
            <form className="login__form" autoComplete="off">
                {/* <TextField id="standard-basic" label={t('Login.password')} style={{ color: '#9e9e9e' }} className='login__input' /> */}
                <div className="login__label">
                    <span>Sign In</span>
                </div>
                {/* <TextField
                    label="Username or Email"
                    id="standard-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                /> */}
                {success && (
                    <SuccessNotice
                        message={success}
                    //clearError={() => setSuccess(undefined)}
                    />
                )}

                {error && (
                    <ErrorNotice
                        message={error}
                    //clearError={() => setError(undefined)}
                    />
                )}
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel className='login__input' htmlFor="standard-adornment-password"><PersonIcon fontSize='inherit' /> Username or Email</InputLabel>
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
                    <Button variant="contained" className="login__button" onClick={signIn}>Sign In</Button>
                </div>
                <div className="login__forget__password">
                    <span className="login__forget__password__span"><a href=''>Forgot your password?</a></span>
                    <span className="login__forget__password__span"><Link to='/register'>Sign Up</Link></span>
                </div>
            </form>
        </div>
    );
}
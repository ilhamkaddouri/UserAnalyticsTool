import React, {useState, useContext} from 'react'
import UserContext from "../../context/UserContext"
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
import {SuccessNotice} from '../../common/Errors/SuccessNotice'
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import {createUser} from '../../services/userService'
interface AddUserProps {

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

export const AddUserComp: React.FC<AddUserProps> = ({ }) => {

    const userData = useContext(UserContext);

    const [success, setSuccess] = useState<string>();
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

    const addUser = async ()=>{
        const firstName = values.firstName
        const lastName = values.lastName
        const username = values.username
        const email = values.email
        const password = values.password
        const user  = {firstName, lastName, username, email, password}
        try{
            console.log(user)
            const token = userData.userData.token;
            if (token == undefined) {
                setError("You must be logged in to post a question.");
                setTimeout(() => {}, 2500);
              }
            const result = await createUser(user, token)
            console.log(result)
            setTimeout(() => {}, 2000);
            if (result.data.user_id) {
                setSuccess("Account created successfully !");
            }
        }catch(error){
            error.response.data.msg && setError(error.response.data.msg);
        }
    }


    return (
        <div>
             {success && (
                    <SuccessNotice
                        message={success}
                    //clearError={() => setSuccess(undefined)}
                    />
                )}
            <form autoComplete="off">
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
                    <Button variant="contained" className="login__button" onClick={addUser}>Create an account</Button>
                </div>
            </form>
        </div>
    );
}
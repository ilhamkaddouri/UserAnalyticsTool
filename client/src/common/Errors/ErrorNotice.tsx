import React from 'react'
import Alert from 'react-bootstrap/Alert'
import {Link} from 'react-router-dom'
import './error.scss'
interface ErrorNoticeProps {
    message: string
}

export const ErrorNotice: React.FC<ErrorNoticeProps> = ({ message }) => {
    return (
        <Alert variant='danger' id="err_message">
            <span className='text'> {message}
                {/* <Link id='link_signin' to="/login"> {props.link}</Link> */}
            </span>
            {/* <button onClick={props.clearError}>X</button> */}

        </Alert>
    );
}
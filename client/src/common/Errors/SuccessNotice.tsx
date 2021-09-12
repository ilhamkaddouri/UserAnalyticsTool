import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom'
import './error.scss'
interface SuccessNoticeProps {
    message: string
}

export const SuccessNotice: React.FC<SuccessNoticeProps> = ({ message } ) => {
    return (
        <div>
            <Alert variant='success' id='succ_message'>
                <span className='success'> 
                    {message}
                </span>
            </Alert>
        </div>
    );
}
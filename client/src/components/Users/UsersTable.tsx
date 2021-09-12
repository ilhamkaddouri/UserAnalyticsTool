import React, { useState, useEffect ,useContext} from 'react'
import UserContext from "../../context/UserContext"
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { User } from '../../models/User'
//import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Modal from "react-bootstrap/Modal";
import { getUsers, getUser, banUser, deleteUser } from '../../services/userService';
import './userTable.scss'

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

function createData(id: string, firstName: string, lastName: string, username: string, email: string, banned: boolean) {
    return { id, firstName, lastName, username, email, banned };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            alignItems: 'center',
            textAlign: 'center'
        },
    }),
);



interface UsersTableProps {

}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export const UsersTable: React.FC<UsersTableProps> = ({ }) => {
    const userData = useContext(UserContext);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [error, setError]  = React.useState('')
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [users, setUsers] = useState<any>([])

    useEffect(() => {
        async function getAllUsers() {
            const token = userData.userData.token;
            if (token == undefined) {
                setError("You must be logged first.");
                setTimeout(() => {}, 2500);
              }
            let response = await getUsers(token);
            if (response.data) {
                setUsers(response.data)
            }
        }
        getAllUsers()
        console.log(users)
    }, [])

    const rows = [
        ...users.map((user: any) => createData(user._id, user.firstName, user.lastName, user.username, user.email, user.banned)
        )
    ];

    const deltUser = async (id: String) => {
        try {
            const token = userData.userData.token;
            if (token == undefined) {
                setError("You must be logged first.");
                setTimeout(() => {}, 2500);
              }
           const user =  await deleteUser(id, token)
           console.log(user)
            setOpen(false);
            //message.success("Successfully deleted !");
            setTimeout(() => { }, 2000);
            window.location.reload();
        } catch (err) {

        }
    }

    const doBanUser = async (id: string) => {
        try{
            const token = userData.userData.token;
            if (token == undefined) {
                setError("You must be logged first.");
                setTimeout(() => {}, 2500);
              }
            await banUser(id, token);
            setOpen(false);
            //message.success("Successfully deleted !");
            setTimeout(() => { }, 2000);
            window.location.reload();
        }catch(err){

        }
    }

    const deleteModal = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Delete a user</h2>
            <p id="simple-modal-description">
                Are you sure you want to Delete this user?
            </p>
            <div className="modal__actions">
                <button className="button cancel__button">Cancel</button>
                <button className="button danger__button">Delete</button>
            </div>
        </div>
    );
    const editModal = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Ban a user</h2>
            <p id="simple-modal-description">
                Are you sure you want to Ban this sue?
            </p>
            <div className="modal__actions">
                <button className="button cancel__button">Cancel</button>
                <button className="button danger__button">Ban</button>
            </div>
        </div>
    );

    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>First Name</StyledTableCell>
                        <StyledTableCell align="right">Last Name</StyledTableCell>
                        <StyledTableCell align="right">Username</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">isBanned</StyledTableCell>
                        <StyledTableCell align="right">Edit</StyledTableCell>
                        <StyledTableCell align="right">Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.email}>
                            <StyledTableCell component="th" scope="row">
                                {row.firstName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                            <StyledTableCell align="right">{row.username}</StyledTableCell>
                            <StyledTableCell align="right">{row.email}</StyledTableCell>
                            <StyledTableCell align="right" style={{ color: row.banned ? 'red' : 'green' }}>{row.banned ? 'Banned' : 'Not Banned'}</StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton onClick={handleOpen}>
                                    <EditIcon style={{ color: 'black' }} />
                                </IconButton>
                                <>
                                    <Modal show={open} onHide={handleClose}>
                                        <Modal.Body>
                                           <p>User : {row.firstName} {row.lastName}</p>
                                            Are you sure you want to ban/unban this user ?
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button className='button cancel__button' onClick={handleClose}>
                                                Cancel
                                            </button>
                                            <button className='button danger__button' onClick={() => doBanUser(row.id)}>
                                                Ban/Unban
                                            </button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton onClick={handleOpen}>
                                    <DeleteIcon style={{ color: 'red' }} />
                                </IconButton>
                                <>
                                    <Modal show={open} onHide={handleClose}>
                                        <Modal.Body>
                                           <p>User : {row.firstName} {row.lastName}</p>
                                            Are you sure you want to delete this user ?
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button className='button cancel__button' onClick={handleClose}>
                                                Cancel
                                            </button>
                                            <button className='button danger__button' onClick={() => deltUser(row.id)}>
                                                Delete
                                            </button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
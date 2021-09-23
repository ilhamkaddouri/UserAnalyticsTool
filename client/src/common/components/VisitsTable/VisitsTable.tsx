import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import MuiTableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PauseIcon from '@material-ui/icons/Pause';
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom'
import './visitsTabls.scss'
import { Visit } from '../../components/Visit/Visit'
import {getVisitsPerTime} from '../../../services/logsService'
const useStyles = makeStyles({
    table: {
        width: '100%'
    },
});
const TableHeadColor = withStyles(theme => ({
    root: {
      backgroundColor: '#eff0f1'
    }
  }))(MuiTableHead);

function createData(name: string, action: number, visit: number) {
    return { name, action, visit };
}


const item = {
    code: 'fi'
}
interface VisitsTableProps {

}

export const VisitsTable: React.FC<VisitsTableProps> = ({ }) => {
    const classes = useStyles();
    const [visitsTimePastHour, setVisitsTimePastHour]= useState([]);
    const [visitsTimePastHalfDay, setVisitsTimePastHalfDay]= useState([]);
    const [visitsTimePastDay, setVisitsTimePastDay]= useState([]);
    const [total, setTotal] = useState<number>(0)
    useEffect(()=>{
        const getData = async ()=>{
            const result = await getVisitsPerTime();
            if(result && result.data){
                await setVisitsTimePastHour(result.data.visitsLastPastHour);
                await setTotal(visitsTimePastHour.length);
                setVisitsTimePastHalfDay(result.data.visitsLastPastDay)
                setVisitsTimePastDay(result.data.visitsLastDay)
            }
        }
        getData()
    }, [total])
    let rows = [
        createData('Last 24 hours', total, 6),
        createData('Last 12 hours', 1, 9),
        createData('Last 30 minutes', 4, 16),
    ];
    return (
        <>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHeadColor>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
                        <TableCell align="right">Visits</TableCell>
                    </TableRow>
                </TableHeadColor>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.action}</TableCell>
                            <TableCell align="right">{row.visit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <div className="table__actions">
            <div>
                <IconButton size='small'>
                    <PauseIcon fontSize='small' style={{ color : 'red'}} />
                </IconButton>
            </div>
            <div>
                <Link to='./' className="link__to__detail">View detailed visits</Link>
            </div>
        </div>
        <div className='visits__container'>
            <Visit item={item}/> 
        </div>          
        </>
    );
}
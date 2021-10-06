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
import {getVisitsPerTime, getVisitsTotals, getLastVisitsTotals} from '../../../services/logsService'
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

function createData(name: string, visit: number) {
    return { name, visit };
}


const item = {
    code: 'us'
}
interface VisitsTableProps {

}

export const VisitsTable: React.FC<VisitsTableProps> = ({ }) => {
    const classes = useStyles();
    const [visitsTimePastHour, setVisitsTimePastHour]= useState<number>(0);
    const [visitsTimePastHalfDay, setVisitsTimePastHalfDay]= useState<number>(0);
    const [visitsTimePastDay, setVisitsTimePastDay]= useState<number>(0);
    const [visits, setVisits]= useState([]);
    const [total, setTotal] = useState<number>(0)
    useEffect(()=>{
        const getData = async ()=>{
            const result = await getLastVisitsTotals();
            const visitsData = await getVisitsTotals();
            console.log(result.data.visitsLastPastDay)
            if(result && result.data){
                await setVisitsTimePastHour(result.data.visitsLastPastHour);
                //await setTotal(visitsTimePastHour.length);
                setVisitsTimePastHalfDay(result.data.visitsLastPastDay)
                setVisitsTimePastDay(result.data.visitsLastDay)
            }
            if(visitsData && visitsData.data){
                setVisits(visitsData.data);
            }
        }
        getData();
    }, [total])
    let rows = [
        createData('Last 24 hours', visitsTimePastHour),
        createData('Last 12 hours', visitsTimePastHalfDay),
        createData('Last 30 minutes', visitsTimePastDay),
    ];
    return (
        <>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHeadColor>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Visits</TableCell>
                    </TableRow>
                </TableHeadColor>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
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
                <Link to='/visitors/visitsLog' className="link__to__detail">View detailed visits</Link>
            </div>
        </div>
        <div className='visits__container'>
            {
                visits.map((item)=>(
                    <Visit item={item}/> 
                ))
            }
        </div>          
        </>
    );
}
import React from 'react'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MuiTableHead from '@material-ui/core/TableHead';

const useStyles = makeStyles({
    table: {
        
    },
});

function createData(ChannelType: string, uniqueVisitors: number, visits: number, users: number, actions: number,  actionsPerVisit: number, avgTime: string) {
    return { ChannelType, uniqueVisitors, visits, users, actions,actionsPerVisit,avgTime  };
}

const rows = [
    createData('Direct Entry', 159, 6.0, 24, 4.0, 200, '21 mins'),
    createData('Websites', 237, 9.0, 37, 4.3, 456, '23 mins and 34 sec'),

];


interface ChannelTableProps {

}

const TableHeadColor = withStyles(theme => ({
    root: {
      backgroundColor: '#eff0f1'
    }
  }))(MuiTableHead);

export const ChannelTable: React.FC<ChannelTableProps> = ({ }) => {
    const classes = useStyles();
    
    return (
        <>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table" style={{ width: '100%' }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ position: "sticky", backgroundColor: '#eff0f1' }}>Channel Type</TableCell>
                <TableCell align="right">Visits</TableCell>
                <TableCell align="right">Unique Visitors</TableCell>
                <TableCell align="right">Visits</TableCell>
                <TableCell align="right">Users</TableCell>
                <TableCell align="right">Actions</TableCell>
                <TableCell align="right">Actions per Visit</TableCell>
                <TableCell align="right">Avg Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.ChannelType}>
                  <TableCell component="th" scope="row" style={{ position: "sticky", left: 0,backgroundColor: '#f0f4f4'}}>
                    {row.ChannelType}
                  </TableCell>
                  <TableCell align="right">{row.uniqueVisitors}</TableCell>
                  <TableCell align="right">{row.visits}</TableCell>
                  <TableCell align="right">{row.users}</TableCell>
                  <TableCell align="right">{row.actions}</TableCell>
                  <TableCell align="right">{row.actionsPerVisit}</TableCell>
                  <TableCell align="right">{row.avgTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
      );
}
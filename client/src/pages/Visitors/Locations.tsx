import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './Visitors.scss'
import { DataTable } from '../../common/components/Behavior/DataTable';
interface LocationsProps {

}

const datas = [
  {
    type:'1',
    uniqueVistors: '12'
  },
  {
    type:'2',
    uniqueVistors: '24'
  },
  {
      type:'3',
      uniqueVistors: '44'
    },
    {
      type:'4',
      uniqueVistors: '12'
    },
    {
      type:'5',
      uniqueVistors: '34'
    },
    {
        type:'6',
        uniqueVistors: '78'
      },
      {
          type:'7',
          uniqueVistors: '3'
        },
        {
          type:'8',
          uniqueVistors: '123'
        },
        {
            type:'9',
            uniqueVistors: '24'
          },
];

const tableHeaders = [{id: "type", label:'Type'}, {id:"uniqueVistors", label:'Unique Visitors'}];

const tableBodies = [
  `type`,
  `unique`
]
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '5'
    },
  }),
);

export const Locations: React.FC<LocationsProps> = ({ }) => {
    const classes = useStyles();
    return (
        <div className="page__container">
            <Grid container spacing={3}>
                <Grid item xs={6} className='grid'>
                <Paper className={classes.paper}>
                  <DataTable data={datas}
                        tableHeaders={tableHeaders}
                        tableBodies={tableBodies}
                        name='channelTypes' />
                </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DataTable data={datas}
                        tableHeaders={tableHeaders}
                        tableBodies={tableBodies}
                        name='channelTypes'/>
                  </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
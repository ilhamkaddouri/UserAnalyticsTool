import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './style.scss'
import { DataTable } from '../../common/components/Behavior/DataTable';
import { MapChart } from '../../common/components/Map/MapChart';
import { WorldMapChart } from '../../common/components/Map/WorldMapChart';
import {getVisitsLocations} from '../../services/logsService'
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

const tableHeadersCities = [{id: "_id", label:'City'}, {id:"uniqueVistors", label:'Unique Visitors'}];

const tableHeadersRegions = [{id: "_id", label:'Region'}, {id:"uniqueVistors", label:'Unique Visitors'}];

const tableHeadersCountries = [{id: "_id", label:'Country'}, {id:"uniqueVistors", label:'Unique Visitors'}];

const tableHeadersContinent = [{id: "_id", label:'Continent'}, {id:"uniqueVistors", label:'Unique Visitors'}];
const tableBodies = [
  `_id`,
  `numberOfRequests`
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

    const [cities, setCities] = useState([]);
    const [regions, setRegions] = useState([]);
    const [countries, setCountries] = useState([]);
    const [continents, setContinents] = useState([]);

    useEffect(()=>{
      const getData = async ()=>{
        const datas = await getVisitsLocations();
        console.log(datas.data.statsPerCity)
        if(datas && datas.data){
            setCities(datas.data.statsPerCity);
            setRegions(datas.data.statsPerRegion);
            setCountries(datas.data.statsPerCountry);
            setContinents(datas.data.statsPerContinent);
        }
    }
    getData()
    },[])

    return (
        <div className="container">
            <div className="flex">
                <div className="sameRow">
                <WorldMapChart/>
                </div>
                <div className="sameRow">
                <DataTable data={countries}
                        tableHeaders={tableHeadersCountries}
                        tableBodies={tableBodies}
                        name='CountryData'
                        title='Country'
                        />
                </div>
                <div className="sameRow">
                <DataTable data={cities}
                        tableHeaders={tableHeadersCities}
                        tableBodies={tableBodies}
                        name='cityData'
                        title='City'
                        />
                </div>
            </div>
            <div className="flex">
                <div className="sameRow">
                <DataTable data={continents}
                        tableHeaders={tableHeadersContinent}
                        tableBodies={tableBodies}
                        name='continetData'
                        title='Continent'
                        />
                </div>
                <div className="sameRow">
                <DataTable data={regions}
                        tableHeaders={tableHeadersRegions}
                        tableBodies={tableBodies}
                        name='regionData'
                        title='Region'
                        />
                </div>
            </div>
            {/* <div className="flex">
                <div className="sameRow">
                <DataTable data={datas}
                        tableHeaders={tableHeadersCities}
                        tableBodies={tableBodies}
                        name='cityData'
                        title='City'
                        />
                </div>
                <div className="sameRow">
                <DataTable data={datas}
                        tableHeaders={tableHeaders}
                        tableBodies={tableBodies}
                        name='browserlngData'
                        title='Browser Language'
                        />
                </div>
            </div> */}
        </div>
    );
}
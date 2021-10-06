import React, {useState, useEffect} from 'react'
import { DataTable } from '../../common/components/Behavior/DataTable'
import './style.scss'
import {getOs, getBrowsers } from '../../services/logsService'

interface SoftwaresProps {

}

const tableHeadersOs = [{id: "_id", label:'Operating System'}, {id:"numberOfRequests", label:'Unique Visitors'}];
const tableHeadersBrowsers = [{id: "_id", label:'Operating System'}, {id:"numberOfRequests", label:'Unique Visitors'}]; 

const tableBodies = [
  `_id`,
  `numberOfRequests`
]

export const Softwares: React.FC<SoftwaresProps> = ({}) => {
    const [os, setOs] = useState([]);
    const [browsers, setBrowsers] = useState([]);

    useEffect(()=>{
        const getos = async ()=>{
            const types = await getOs();
            if(types && types.data){
                await setOs(types.data.statsPerOs);
            }
        }
        const getbrowsers = async ()=>{
            const models = await getBrowsers();
            if(models && models.data){
                await setBrowsers(models.data.statsPerBrowser);
            }
        }
        getos();
        getbrowsers();
    }, [])
        return (
            <div className="container">
            <div className="flex">
                <div className="sameRow">
                <DataTable data={os}
                        tableHeaders={tableHeadersOs}
                        tableBodies={tableBodies}
                        name='OsType' 
                        title='Operating Systems'
                        />
                </div>
                <div className="sameRow">
                <DataTable data={browsers}
                        tableHeaders={tableHeadersBrowsers}
                        tableBodies={tableBodies}
                        name='Browsers'
                        title='Browsers'
                        />
                </div>
            </div>
            <div  className="flex">

            </div>
        </div>
        );
}
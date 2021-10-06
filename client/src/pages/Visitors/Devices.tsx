import React, {useState, useEffect} from 'react'
import './style.scss'
import { DataTable } from '../../common/components/Behavior/DataTable';

import {getDevicesTypes, getDevicesModels, getDevicesBrands} from '../../services/logsService'

interface DevicesProps {

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
  
  const tableHeaders = [{id: "_id", label:'Model'}, {id:"numberOfRequests", label:'Unique Visitors'}];
  
  const tableBodies = [
    `_id`,
    `numberOfRequests`
  ]

export const Devices: React.FC<DevicesProps> = ({ }) => {
    const [devicesType, setDevicesType] = useState([]);
    const [devicesModel, setDevicesModel] = useState([]);
    const [devicesBrand, setDevicesBrand] = useState([]);

    useEffect(()=>{
        const getDevicesType = async ()=>{
            const types = await getDevicesTypes();
            if(types && types.data){
                await setDevicesType(types.data.statsPerDevice);
            }
        }
        const getDevicesModel = async ()=>{
            const models = await getDevicesModels();
            if(models && models.data){
                await setDevicesModel(models.data.statsPerDeviceModel);
            }
        }
        const getDevicesBrand = async ()=>{
            const brands = await getDevicesBrands();
            if(brands && brands.data){
                await setDevicesBrand(brands.data.statsPerDeviceBrand);
            }
        }
        getDevicesType();
        getDevicesModel()
        getDevicesBrand();
    }, [])

    return (
        <div className="container">
            <div className="flex">
                <div className="sameRow">
                <DataTable data={devicesType}
                        tableHeaders={tableHeaders}
                        tableBodies={tableBodies}
                        name='DevicesType' 
                        title='Device Type'
                        />
                </div>
                <div className="sameRow">
                <DataTable data={devicesModel}
                        tableHeaders={tableHeaders}
                        tableBodies={tableBodies}
                        name='DevicesModel'
                        title='Device Model'
                        />
                </div>
            </div>
            <div className="flex">
                <div className="sameRow">
                <DataTable data={devicesBrand}
                        tableHeaders={tableHeaders}
                        tableBodies={tableBodies}
                        name='DevicesBrand'
                        title='Device Brand'
                        />
                </div>

            </div>
        </div>

    );
}
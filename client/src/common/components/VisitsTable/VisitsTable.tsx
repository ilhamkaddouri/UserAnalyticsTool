import React from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Date', width: 130},
    { field: 'visits', headerName: 'Visits', width: 130},
    { field: 'actions', headerName: 'Actions', width: 130},
];

const rows = [
    { id:1, date:'Lst 24 hours', visits: 717, actions: 107500 },
    { id:2, date:'Last 12 hours', visits: 512, actions: 8900 },
    { id:3, date:'Last 6 hours', visits: 212, actions: 5700 },
    { id:4, date:'Last 30 minutes', visits: 9, actions: 92 },
];
interface VisitsTableProps {

}

export const VisitsTable: React.FC<VisitsTableProps> = ({ }) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />

        </div>
    );
}
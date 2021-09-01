import * as React from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Nome',
        width: 130,
        editable: true,
    },
    {
        field: 'created_at',
        headerName: 'Criado em',
        type: 'date',
        width: 150,
        editable: true,
    },
    {
        field: 'situation',
        headerName: 'Situação',
        type: 'boolean',
        width: 150,
        editable: true,
        cellClassName: (params: GridCellParams) =>
            clsx('super-app', {
                positive: params.value === true,
                negative: params.value === false,
                notValidate: params.value === null
            }),
    }
];

const useStyles = makeStyles({
    root: {
        '& .super-app.positive': {
            backgroundColor: 'rgba(157, 255, 118, 0.49)',
        },
        '& .super-app.negative': {
            backgroundColor: 'rgba(255, 0, 0, 0.49)',
        },
        '& .super-app.notValidate': {
            backgroundColor: '#fff'
        }
    },
});
// { data }: { data: { id: number, name: string, created_at: Date, situation: boolean }[] }
const rows = [
    { id: 1, name: 'Snow', created_at: 35, situation: true },
    { id: 2, name: 'Lannister', created_at: 42, situation: true },
    { id: 3, name: 'Lannister', created_at: 45, situation: true },
    { id: 4, name: 'Stark', created_at: 16, situation: true },
    { id: 5, name: 'Targaryen', created_at: null, situation: true },
    { id: 6, name: 'Melisandre', created_at: 150, situation: null },
    { id: 7, name: 'Clifford', created_at: 44, situation: false },
    { id: 8, name: 'Frances', created_at: 36, situation: true },
    { id: 9, name: 'Roxie', created_at: 65, situation: true },
];

export default function RegistersTable() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root} style={{ height: 500 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={7}
                disableSelectionOnClick
                onRowClick={(e) => history.push('/' + e.row.name + '/validar')}
            />
        </div>
    );
}
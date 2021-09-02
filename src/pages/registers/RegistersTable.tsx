import * as React from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ICollaborator from '../../interfaces/ICollaborator';

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
        field: 'valid',
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

export default function RegistersTable({ data }: { data: ICollaborator[] }) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root} style={{ height: 500 }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={7}
                disableSelectionOnClick
                onRowClick={(e) => history.push('/' + e.row.name + '/validar')}
            />
        </div>
    );
}
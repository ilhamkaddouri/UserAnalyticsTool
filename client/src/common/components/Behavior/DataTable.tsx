import React, { useState, useEffect } from "react";
import { makeStyles, withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import GetAppIcon from '@material-ui/icons/GetApp';
import { IconButton } from '@material-ui/core';
import './dataTable.scss'

const options = {
  exportButton: {
    csv: true,
    pdf: false,
  },
};
const useStyles = makeStyles({
  root: {
    width: "100%",
    height:'100%'
  },
  container: {
    maxHeight: 440
  },
});

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.warning.light,
      //color: theme.palette.secondary.light,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const getProperty = (obj: any, prop: any) => {
  var parts = prop.split(".");

  if (Array.isArray(parts)) {
    var last = parts.length > 1 ? parts.pop() : parts;
    var l = parts.length,
      i = 1,
      current = parts[0];

    while ((obj = obj[current]) && i < l) {
      current = parts[i];
      i++;
    }

    if (typeof obj === "object") {
      return obj[last];
    }
    return obj;
  } else {
    throw "parts is not valid array";
  }
};



export function DataTable({ data, tableHeaders, tableBodies, name, title }: { data: any, tableHeaders: any, tableBodies: any, name: string, title: string }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState(tableHeaders[1].id);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);


  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any) => {
    console.log(property)
    const isAsc = orderBy === property && order === 'asc';
    console.log(isAsc)
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property);
  };

  const downloadExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, `${name}`);
    let buf = XLSX.write(workBook, {bookType:"xlsx", type:'buffer'});
    XLSX.write(workBook, {bookType:"xlsx", type:'binary'});
    XLSX.writeFile(workBook, `${name}.xlsx`)
  }

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text(`${name} Details`, 20, 10);
    // doc.autoTable({
    //   columns: tableHeaders.map((col: any) => ({...col, datakey: col.label})),
    //   body: data
    // })
    autoTable(doc, { html: '#my-table' })
    doc.save(`${name}.pdf`)
  }

  return (
    <Paper className={classes.root}>
      <div>
        <div className='left'>
          <h4>{title}</h4>
        </div>
        <div className='right'>
        <IconButton title='Export to Excel' style={{color: '#7cbd7f '}} size='small' onClick={()=> downloadExcel()}><GetAppIcon/></IconButton>
        <IconButton title='Export to PDF' style={{color: '#7cbd7f '}} size='small' onClick={()=> downloadPdf()}><PictureAsPdfIcon/></IconButton>
        </div>
       
      </div>
     
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" id='my-table'>
          <TableHead>
            <StyledTableRow>
              {tableHeaders.map((header: any, index: any) => (
                <StyledTableCell key={index} sortDirection={orderBy === header.id ? order : false}>
                  <TableSortLabel
                    active={orderBy === header.id}
                    direction={orderBy === header.id ? order : 'asc'}
                    onClick={createSortHandler(header.id)}
                  >
                    {header.label}

                  </TableSortLabel>


                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {stableSort(data, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data: any) => (
              <StyledTableRow key={data.id} hover>
                {tableBodies.map((body: any) => (

                  <StyledTableCell key={body}>{getProperty(data, body)}
                  </StyledTableCell>
                )
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

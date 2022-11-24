import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Paper, TableContainer, Table, TableBody, TableRow, TableCell, TableHead } from '@mui/material'

import { EmployeeStates } from './EmployeeStates'

import { fetchEmployees } from 'utils/api'

export const Employees = () => {
    const { data } = useQuery(['employees'], fetchEmployees)

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.first_name}
                            </TableCell>
                            <TableCell align="right">{row.last_name}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                            <TableCell align="right">
                                <EmployeeStates id={row.id} state={row.state} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

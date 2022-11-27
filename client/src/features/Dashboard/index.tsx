import * as React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { Employees } from './components/Employees'
import { NewEmployee } from './components/NewEmployee'

export const Dashboard = () => (
    <Box padding={2}>
        <Stack direction="column">
            <Box>
                <Typography variant="h1" align="center">
                    Workmotion Frontend Challenge
                </Typography>
            </Box>
            <Stack spacing={2}>
                <NewEmployee />
                <Employees />
            </Stack>
        </Stack>
    </Box>
)

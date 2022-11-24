import * as React from 'react'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'

import { EmployeeState } from 'utils/types'
import { employeeStates } from 'utils/constants'
import './index.css'

type Props = {
    id: number
    state: EmployeeState
}

export const EmployeeStates = ({ id, state }: Props) => {
    const handleStateChange = () => ({ id, state })

    return (
        <Box className="EmployeeStates-ButtonGroup">
            <ToggleButtonGroup size="small" exclusive onChange={handleStateChange}>
                {employeeStates.map((employeeState) => (
                    <ToggleButton key={employeeState} value={employeeState}>
                        {employeeState}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    )
}

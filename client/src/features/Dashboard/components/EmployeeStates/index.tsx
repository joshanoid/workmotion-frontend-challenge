import * as React from 'react'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useMutation } from '@tanstack/react-query'

import { ChangeEmployeeStatePayload, EmployeeState } from 'utils/types'
import { employeeStates } from 'utils/constants'
import { changeEmployeeState } from 'utils/api'
import './index.css'

type Props = {
    id: number
    state: EmployeeState
}

export const EmployeeStates = ({ id, state }: Props) => {
    const [selectedState, setSelectedState] = React.useState<EmployeeState>(state)
    const setEmployeeState = useMutation((payload: ChangeEmployeeStatePayload) => changeEmployeeState(payload))

    const handleStateChange = (_event: React.MouseEvent<HTMLElement>, newState: EmployeeState | null) => {
        if (newState) {
            setSelectedState(newState)
            setEmployeeState.mutate({ id, state: newState })
        }
    }

    return (
        <Box className="EmployeeStates-ButtonGroup">
            <ToggleButtonGroup value={selectedState} size="small" exclusive onChange={handleStateChange}>
                {employeeStates.map((employeeState) => (
                    <ToggleButton key={employeeState} value={employeeState}>
                        {employeeState}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    )
}

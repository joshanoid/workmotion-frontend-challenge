import * as React from 'react'
import {
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
} from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { employeeFormReducer } from './reducer'
import { EmployeeForm, FormErrors } from './types'
import { emailRegex } from './utils'

import { Employees, EmployeeState } from 'utils/types'
import { employeeStates } from 'utils/constants'
import { postEmployee } from 'utils/api'

export const NewEmployee = () => {
    const queryClient = useQueryClient()
    const [open, setOpen] = React.useState(false)
    const [errors, setErrors] = React.useState<FormErrors>({})
    const [form, dispatch] = React.useReducer(employeeFormReducer, {
        first_name: '',
        last_name: '',
        email: '',
        state: 'ADDED',
    })
    const saveEmployee = useMutation((payload: EmployeeForm) => postEmployee(payload), {
        onMutate: async (variables) => {
            await queryClient.cancelQueries({ queryKey: ['employees'] })

            queryClient.setQueryData<Employees>(['employees'], (old) => {
                if (old) {
                    return [...old, { ...variables, id: old.length + 1 }]
                }

                return [{ ...variables, id: 1 }]
            })
        },
        onError: () => {
            queryClient.setQueryData<Employees>(['todos'], (old) => old?.slice(0, -1))
        },
    })

    const onSubmit = () => {
        let formErrors: FormErrors = {}

        if (!form.first_name) {
            formErrors = { ...formErrors, first_name: 'Required.' }
        }

        if (!form.last_name) {
            formErrors = { ...formErrors, last_name: 'Required.' }
        }

        if (!emailRegex.test(form.email)) {
            formErrors = { ...formErrors, email: 'Please enter an email address.' }
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)

            return
        }

        saveEmployee.mutate(form)
        setOpen(false)
    }

    return (
        <Box>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Add New Employee
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
                <DialogTitle>Add New Employee</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} pt={2}>
                        <TextField
                            autoFocus
                            id="first_name"
                            label="First Name"
                            type="text"
                            variant="outlined"
                            value={form.first_name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch({ type: 'setFirstName', payload: event.target.value })
                            }
                            error={!!errors.first_name}
                            helperText={errors.first_name}
                        />
                        <TextField
                            id="last_name"
                            label="Last Name"
                            type="text"
                            variant="outlined"
                            value={form.last_name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch({ type: 'setLastName', payload: event.target.value })
                            }
                            error={!!errors.last_name}
                            helperText={errors.last_name}
                        />
                        <TextField
                            id="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            value={form.email}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch({ type: 'setEmail', payload: event.target.value })
                            }
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <FormControl fullWidth>
                            <InputLabel htmlFor="state">State</InputLabel>
                            <Select
                                name="state"
                                value={form.state}
                                label="Age"
                                onChange={(event: SelectChangeEvent<EmployeeState>) =>
                                    dispatch({ type: 'setState', payload: event.target.value as EmployeeState })
                                }
                            >
                                {employeeStates.map((employeeState) => (
                                    <MenuItem key={employeeState} value={employeeState}>
                                        {employeeState}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={onSubmit}>Add</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

import { EmployeeForm } from './types'

import { EmployeeState } from 'utils/types'

type Action =
    | {
          type: 'setFirstName'
          payload: string
      }
    | {
          type: 'setLastName'
          payload: string
      }
    | {
          type: 'setEmail'
          payload: string
      }
    | {
          type: 'setState'
          payload: EmployeeState
      }

export const employeeFormReducer = (state: EmployeeForm, action: Action): EmployeeForm => {
    switch (action.type) {
        case 'setFirstName':
            return { ...state, first_name: action.payload }
        case 'setLastName':
            return { ...state, last_name: action.payload }
        case 'setEmail':
            return { ...state, email: action.payload }
        case 'setState':
            return { ...state, state: action.payload }
        default:
            return state
    }
}

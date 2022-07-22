import { createContext } from "react";

const EmployeesListContext  = createContext({
    employees: [],
    pushNewEmployeeData: () => {

    },
    updateList: () => {
        
    }
}); 

export { EmployeesListContext }

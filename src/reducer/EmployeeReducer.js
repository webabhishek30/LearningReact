// STEP 1
export const EmployeeInitialValue = {
    name : "Devki",
    age: 38,
    education: "Master",
    visible: true
}

// STEP 2
export const employeeReducer = (state, action) => {
    switch(action.type){
        case "CHANGE_NAME" : 
            return {...state, name:action.updateValue, visible: false}
        case "CHANGE_AGE" : 
            return {...state, age:action.updateValue}    
        case "CHANGE_EDUCATION" : 
            return {...state, education: action.updateValue} 
        default: 
            return state;         
    }
}
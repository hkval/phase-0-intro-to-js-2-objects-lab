// Write your solution in this file!
const employee = {}
employee.name = 'Gizzy'
employee.streetAddress = 'Adams'

function updateEmployeeWithKeyAndValue(obj, key, val){
    return {...obj, [key]: val}
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val){
    obj[key] = val
    return obj
}
function deleteFromEmployeeByKey(obj, key){
    const newEmp = {...obj}
    delete newEmp[key]
    return newEmp
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}
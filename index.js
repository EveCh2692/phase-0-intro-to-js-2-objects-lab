const employee= {
    name: someOnesName,
    streetAddress: someOnesAddress,
}

const updatedEmployeeWithKeyAndValue = function(employee, key, value){
    return { ...employee, ...{[key]:value}}
}
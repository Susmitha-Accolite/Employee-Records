const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    sessionStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateEmployeeId() {
    if (sessionStorage.getItem(KEYS.employeeId) == null)
        sessionStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(sessionStorage.getItem(KEYS.employeeId))
    sessionStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (sessionStorage.getItem(KEYS.employees) == null)
        sessionStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(sessionStorage.getItem(KEYS.employees));
}
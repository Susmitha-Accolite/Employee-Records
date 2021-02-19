const KEYS ={
    employees:'employees',
    employeeId:'employeeId',
    // empId: ''
}
var idx;
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

export function getEmployeeById(id) {
    if(id === '0'){
        return [];
    } else {
        let employees = getAllEmployees();
        let currentEmployee = employees.filter(emp => emp['id'] === id);
        idx = employees.indexOf(currentEmployee[0]);
        return currentEmployee;
    }
}

export function editEmployee(details){
    let employees = getAllEmployees();
    console.log('index',idx);
    console.log('no change',employees);
    employees.splice(idx, 1);
    console.log('deleting',employees);
    employees.splice(idx, 0, details);
    sessionStorage.setItem(KEYS.employees, JSON.stringify(employees));
    console.log('adding',employees);
}

export function deleteEmployee(id){
    let employees = getAllEmployees().filter(emp => emp['id'] !== id);
    sessionStorage.setItem(KEYS.employees, JSON.stringify(employees));
    sessionStorage.setItem(KEYS.employeeId, KEYS.employees.length);
}
module.exports.rolesFormData = [
    { field: 'text', name: 'name', label: 'Name', placeHolder: 'Enter Role Name', required: true, filtered: true },
    { field: 'text', name: 'description', label: 'Description', placeHolder: 'Enter Role Description!', required: true },
    { field: 'select2', name: 'roletype', label: 'Role Type', required: true, static: true, data: [{ label: "Admin", value: "admin" }, { label: "Sales & Marketing", value: "salesnmarketing" }, { label: "Agent", value: "agent" }], filtered: true },
    { field: 'checkboxtree', name: 'roletype', label: 'Role Type', required: true },
]

module.exports.modules = [
    { field: 'text', name: 'label', label: 'Module label', placeHolder: 'Enter Module label', required: true, filtered: true },
    { field: 'text', name: 'icon', label: 'Module Icon', placeHolder: 'Enter Module Icon', required: true, filtered: true },
    { field: 'text', name: 'url', label: 'Module URL', placeHolder: 'Enter Module URL', required: false, filtered: true },
    { field: 'number', name: 'order', label: 'Module Order', placeHolder: 'Enter Module Number', required: true, filtered: false },
    { field: 'checkbox', name: 'hasChild', label: 'Has Child', placeHolder: 'Enter Module Number', required: false, filtered: false },
]

module.exports.page = [
    { field: 'text', name: 'label', label: 'Page label', placeHolder: 'Enter Page label', required: true, filtered: true },
    { field: 'select2', name: 'moduleId', label: 'Module Id', placeHolder: 'Enter Page Icon', model: "Modules", required: true, filtered: true },
    { field: 'text', name: 'icon', label: 'Page Icon', placeHolder: 'Enter Page Icon', required: true, filtered: true },
    { field: 'text', name: 'url', label: 'Page URL', placeHolder: 'Enter Page URL', required: false, filtered: true },
    { field: 'number', name: 'order', label: 'Page Order', placeHolder: 'Enter Page Number', required: true, filtered: false },
]

module.exports.users = [
    { field: 'text', name: 'name', label: 'Name', placeHolder: 'Enter Name', required: true, filtered: true },
    { field: 'text', name: 'email', label: 'Email', placeHolder: 'Enter Email', required: true, filtered: true },
    { field: 'select2', name: 'roleId', label: 'Role', placeHolder: 'Select Role',model: "Roles", required: true, filtered: true },
    { field: 'number', name: 'age', label: 'Age', placeHolder: 'Enter Age', required: true, filtered: true },
    { field: 'text', name: 'designation', label: 'Designation', placeHolder: 'Enter Designation', required: true, filtered: true },
    { field: 'number', name: 'branchId', label: 'Branch ID', placeHolder: 'Enter Branch ID', required: true, filtered: true },
]
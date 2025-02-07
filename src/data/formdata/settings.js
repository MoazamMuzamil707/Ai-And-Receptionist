module.exports.rolesFormData = [
    { field: 'text', name: 'name', label: 'Name', placeHolder: 'Enter Role Name', required: true, filtered: true },
    { field: 'text', name: 'description', label: 'Description', placeHolder: 'Enter Role Description!', required: true },
    { field: 'select2', name: 'roletype', label: 'Role Type', required: true, static: true, data: [{ label: "Admin", value: "admin" }, { label: "Sales & Marketing", value: "salesnmarketing" }, { label: "Agent", value: "agent" }], filtered: true },
    { field: 'checkboxtree', name: 'roletype', label: 'Role Type', required: true },
]

module.exports.workcodesFormData = [
    { field: 'select2', name: 'CollectionType', label: 'Collection Type', required: true, static: true, data: [{ label: "New", value: "new" }, { label: "Exiting", value: "exitting" }], filtered: true },
    { field: 'select2', name: 'querytype', label: 'Query Type', required: true, static: true, data: [{ label: "Complaint", value: "Complaint" }, { label: "Inquiries", value: "Inquiries" }], filtered: true },
    { field: 'text', name: 'workcode', label: 'Workcode', placeHolder: 'Enter Work Code', required: true, filtered: true }, { field: 'switch', name: 'workcodestatus', label: 'Work Code Status', placeHolder: 'Work Code Status', required: true, filtered: false },
]

module.exports.templateFormData = [
    { field: 'text', name: 'template_name', label: 'Template Name', placeHolder: 'Enter Template Name', required: true, filtered: true },
    { field: 'textarea', name: 'template_desc', label: 'Template Desc', placeHolder: 'Enter Template Desc', required: true, filtered: false },
    { field: 'switch', name: 'template_status', label: 'Template Status', placeHolder: 'Template Status', required: true, filtered: false },
    { field: 'flatpicker', name: 'Flatpicker', label: 'Date & Time picker', placeHolder: 'Enter Date & Time', required: true, filtered: true },
    { field: 'RangeFlatpicker', name: 'RangeFlatpicker', label: 'Start & End Date', placeHolder: 'Enter Start & End Date', required: true, filtered: true },
    { field: 'dropzone', name: 'RangeFlatpicker', label: 'Start & End Date', placeHolder: 'Enter Start & End Date', required: true, filtered: true }
]

module.exports.templates = [
    { field: 'text', name: 'template_name', label: 'Template Name', placeHolder: 'Enter Template Name', required: true, filtered: true },
    { field: 'textarea', name: 'template_desc', label: 'Template Desc', placeHolder: 'Enter Template Desc', required: true, filtered: false },
    { field: 'switch', name: 'template_status', label: 'Template Status', placeHolder: 'Template Status', required: true, filtered: false },
    { field: 'flatpicker', name: 'Flatpicker', label: 'Date & Time picker', placeHolder: 'Enter Date & Time', required: true, filtered: true },
    { field: 'RangeFlatpicker', name: 'RangeFlatpicker', label: 'Start & End Date', placeHolder: 'Enter Start & End Date', required: true, filtered: true },
    { field: 'text', name: 'name', label: 'Name', placeHolder: 'Enter Role Name', required: true, filtered: true },
    { field: 'text', name: 'description', label: 'Description', placeHolder: 'Enter Role Description!', required: true },
    { field: 'select2', name: 'roletype', label: 'Role Type', required: true, static: true, data: [{ label: "Admin", value: "admin" }, { label: "Sales & Marketing", value: "salesnmarketing" }, { label: "Agent", value: "agent" }], filtered: true },
    { field: 'checkboxtree', name: 'roletype', label: 'Role Type', required: true },
    { field: 'RangeFlatpicker', name: 'RangeFlatpicker', label: 'Start & End Date', placeHolder: 'Enter Start & End Date', required: true, filtered: true },
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
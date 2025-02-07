module.exports.loginFormData = [
    // {
    //     field: 'email',
    //     name: 'email',
    //     type: 'email',
    //     label: 'Email',
    //     value: "",
    //     required: true,
    //     // pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
    //     err: false,
    //     errMsg: "",
    //     placeHolder: "example@gmail.com",
    //     displayPattern: "example@gmail.com"
    // },
    {
        field: 'text',
        name: 'username',
        type: 'text',
        label: 'User Name',
        value: "",
        required: true,
        pattern: "^[a-zA-Z]{3,}$",
        err: false,
        errMsg: "",
        placeHolder: "Jhon",
        displayPattern: "Jhon"
    },
    {
        field: 'link',
        label: 'Forgot Password ?',
        url: '/ForgotPassword',
        className: 'd-flex justify-content-end'
    },
    {
        field: 'password',
        name: 'password',
        type: 'password',
        label: 'Password',
        value: "",
        required: true,
        checkPattern: true,
        // pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        err: false,
        errMs: "",
        displayPattern: "",
        placeHolder: "********"
    },
    {
        field: 'checkbox',
        name: 'rememberme',
        label: 'Remember me',
        className: ''
    }
];

module.exports.SignUpFormData = [
    {
        field: 'email',
        name: 'email',
        type: 'email',
        label: 'Email',
        value: "",
        required: true,
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        err: false,
        errMsg: "",
        placeHolder: "example@gmail.com",
        displayPattern: "example@gmail.com"
    },
    {
        field: 'text',
        name: 'username',
        type: 'text',
        label: 'User Name',
        value: "",
        required: true,
        pattern: "^[a-zA-Z]{3,}$",
        err: false,
        errMsg: "",
        placeHolder: "Jhon",
        displayPattern: "Jhon"
    }, {
        field: 'select2',
        name: 'occupation',
        label: 'Occupation Type',
        col: '12',
        required: true,
        static: true,
        data: [
            { label: "Doctor", value: "doctor" },
            { label: "Lawyer", value: "lawyer" }
        ]
    },
    {
        field: 'password',
        name: 'password',
        type: 'password',
        label: 'Password',
        value: "",
        required: true,
        checkPattern: true,
        pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        err: false,
        errMs: "",
        displayPattern: "",
        placeHolder: "********"
    },
    {
        field: 'password',
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        value: "",
        required: true,
        checkPattern: true,
        pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        err: false,
        errMs: "",
        displayPattern: "",
        placeHolder: "********"
    }
];

module.exports.changePasswaordFormData = [
    {
        field: 'password',
        name: 'currentPassword',
        type: 'password',
        label: 'Current Password',
        value: "",
        required: true,
        checkPattern: true,
        pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        err: false,
        errMs: "",
        displayPattern: "",
        placeHolder: "********"
    },
    {
        field: 'password',
        name: 'newPassword',
        type: 'password',
        label: 'New Password',
        value: "",
        required: true,
        checkPattern: true,
        pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        err: false,
        errMs: "",
        displayPattern: "",
        placeHolder: "********"
    },
    {
        field: 'password',
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        value: "",
        required: true,
        checkPattern: true,
        pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        err: false,
        errMs: "",
        displayPattern: "",
        placeHolder: "********"
    }
];

module.exports.forgotpasswordFormData = [
    { 
        field: 'email', 
        name: 'email',
        type: 'email',  
        label: 'Email', 
        value:"",
        required: true,
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        err: false,
        errMsg: "",
        placeHolder: "example@gmail.com", 
        displayPattern: "example@gmail.com" 
    }
]
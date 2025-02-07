module.exports.forgotpasswordFormData = [
    { 
        field: 'email', 
        name: 'email',
        type: 'email',  
        label: 'Email', 
        value:"",
        required: true,
        pattern: "^[\\w.-]+@[\\w-]+\\.[\\w]{2,4}$",
        err: false,
        errMsg: "",
        placeHolder: "example@gmail.com", 
        displayPattern: "example@gmail.com" 
    }
]
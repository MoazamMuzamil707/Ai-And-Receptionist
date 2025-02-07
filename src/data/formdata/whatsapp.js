module.exports.templates = [
    { field: 'text', name: 'templateName', label: 'Template Name', placeHolder: 'Enter Template Name', required: true, filtered: true, },
    { field: 'viewtext', text: `1) Allowed only 80 characters.<br/> 2) Allowed Alphanumeric and _ underscore` },
    { field: 'select2', name: 'category', id: 'CategoryId', label: 'Category', required: true, static: true, data: [{ label: "Marketing", value: "marketing" }, { label: "Utility", value: "utility" }], filtered: true },
    {field:'emptyview', text:``},
    { field: 'select2', name: 'language', label: 'Language', required: true, static: true, data: [{ label: "English (US)", value: "en_US" }, { label: "Urdu", value: "ur" }], filtered: true },
    {field:'emptyview', text:``},
    { field: 'SelectMultiOption', name: 'headerType', label: 'Select Header (Optional)', required: false, static: true, data: [{ label: "Media", value: "media" }, { label: "Text", value: "text" }], filtered: false },
    { field: 'viewtext', text: `*Please follow these conditions if you select 'Text' as your header type.*<br/> 1)  Allowed only 60 characters.<br/> 2) The message header can't have any newlines, formatting characters, emojis, or asterisks.` },
    { field: 'textarea', name: 'bodyDesc', label: 'Body Text', cols: "30", rows: "5", placeHolder: 'Enter Body Text', required: false, filtered: false, col: "6", required: true },
    {field: 'viewtext', text: `1) Allowed only 1024 characters.<br/> 2) Use parameters like {{1}},{{2}}.<br/>3) Always parameters start from {{1}}. You can not get any random parameters.<br/>4) Get parameters in numeric form which starts from {{1}}.<br/>5) For Bold Text your message with an asterisk(*) on both sides of the text.<br/>6) For Italic Text your message with an underscore( _ ) on both sides of the text.<br/>
        7) For Struck Through Text your message with an tilde(~) on both sides of the text.<br/> 8) Variable parameters should not be at the beginning or end of the message.`},
    { field: 'textarea', name: 'footerDesc', label: 'Footer Text (Optional)', cols: "30", rows: "5", placeHolder: 'Enter Footer Text', required: false, filtered: false,col:6 },
    {field:'viewtext', text:`1) Allowed only 60 characters.<br/>2) The message footer can't have any newlines or emojis.<br/>3) Add a short line of text to the bottom of your message template.`},
    { field: 'SelectMultiOption', name: 'headerType', label: 'Button (Optional)', required: false, static: true, data: [{ label: "Call to action", value: "action" }, { label: "Quick Reply", value: "reply" }], filtered: false },
    {field:'viewtext', text:`1) Create buttons that let customers respond to your message or take action.`},
]

module.exports.chats = [
    { field: 'flatpicker', name: 'startDate', label: 'Start Date', placeHolder: 'Enter Start Date', required: true, filtered: true, },
    { field: 'flatpicker', name: 'endDate', label: 'End Date', placeHolder: 'Enter End Date', required: true, filtered: true, },
    { field: 'select2', name: 'agent', label: 'Agent',placeHolder:"Select Agent", required: true, static: true, data: [{ label: "English (US)", value: "en_US" }, { label: "Urdu", value: "ur" }], filtered: true },
    { field: 'text', name: 'email', label: 'Email', placeHolder: 'Enter Email', required: true, filtered: true, },
    { field: 'text', name: 'contact', label: 'Contact', placeHolder: 'Enter Contact', required: true, filtered: true, },
    { field: 'select2', name: 'chatType', label: 'Chat Type', required: true, static: true, data: [{ label: "Web", value: "web" }, { label: "Whatsapp", value: "whatsapp" }], filtered: true },
]
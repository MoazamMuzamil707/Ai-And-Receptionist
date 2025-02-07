module.exports.nodeFromData = [
    { field: 'text', name: 'nameNode', label: 'Node Name', placeHolder: 'Enter Node Name',col:'6', required: true},
    { field: 'select2', name: 'nodeType', label: 'Node Type',col:'6', required: true, static: true, data: [{ label: "Message", value: "message" }, { label: "Image", value: "image" }, { label: "Document", value: "document" }]}
]
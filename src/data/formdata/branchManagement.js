module.exports.cluster = [
  { field: 'text', name: 'name', label: 'Name', placeHolder: 'Enter Name', required: true, filtered: true },
  { field: 'text', name: 'description', label: 'Description', placeHolder: 'Enter Description', required: false },
]

module.exports.areas = [
  { field: 'text', name: 'name', label: 'Name', placeHolder: 'Enter Name', required: true, filtered: true },
  { field: 'text', name: 'description', label: 'Description', placeHolder: 'Enter Description', required: false },
  { field: 'select2', name: 'clusterId', label: 'Cluster', placeHolder: 'Enter Description', model: "Clusters", required: false },
]

module.exports.branches = [
  { field: 'text', name: 'name', label: 'Name', placeHolder: 'Enter Name', required: true, filtered: true },
  { field: 'text', name: 'branchCode', label: 'Branch Code', placeHolder: 'Enter Branch Code', required: false },
  { field: 'text', name: 'city', label: 'City', placeHolder: 'Enter City', required: false },
  { field: 'select2', name: 'areaId', label: 'Area', placeHolder: 'Enter Area', model: "Areas", required: true },
  { field: 'select2', name: 'clusterId', label: 'Cluster', placeHolder: 'Enter Cluster', model: "Clusters", required: false },
  { field: 'text', name: 'BMEmailId', label: 'BM Email Id', placeHolder: 'Enter BM Email Id', required: true, filtered: true },
  { field: 'text', name: 'longitude', label: 'Longitude', placeHolder: 'Enter Longitude', required: true, filtered: true },
  { field: 'text', name: 'latitute', label: 'Latitute', placeHolder: 'Enter Latitute', required: true, filtered: true },
]
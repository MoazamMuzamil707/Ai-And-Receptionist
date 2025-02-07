// module.exports = (arr) => {
//   console.log("arr====>>>>",arr);
//   const transformedArr = arr.map(value => {
//     const modifiedValue = value?.name?.replace(/_/g, ' ').replace(/(?:^|\s)\S/g, char => char.toUpperCase());
  //     if(value.name == "id")
  //       delete value.name
  //     return { name: value.name, value: modifiedValue };
//   });

//   return [...transformedArr];
// }

module.exports = (arr) => {
  // Extract the columns array from the input structure
  const columns = arr[0]?.columns || [];

  // Transform the columns
  const transformedArr = columns.map(name => {
    // Modify the name by replacing underscores with spaces and capitalizing it
    const modifiedValue = name.replace(/_/g, ' ').replace(/(?:^|\s)\S/g, char => char.toUpperCase());
    
    // If the name is "id", skip adding it to the result
    if (name.toLowerCase() === "id") {
      return null;  // Return null to indicate it should be skipped
    }

     // If the name is "id", skip adding it to the result
     if (name.toLowerCase() === "actions") {
      return null;  // Return null to indicate it should be skipped
    }

    // Return the transformed object
    return { name, value: modifiedValue };
  }).filter(Boolean);  // Filter out any null values

  return transformedArr;
}

module.exports.transformcolumns = (arr) => {
 const columns = arr[0]?.columns || [];
 const transformedArr = columns.map(name => {
  const modifiedValue = name.replace(/_/g, ' ').replace(/(?:^|\s)\S/g, char => char.toUpperCase());

   return { name, value: modifiedValue };
 }).filter(Boolean);

 return transformedArr;
};

// module.exports.simpleLabel = (arr) => {
//   console.log("arr", arr);

//   const transformedArr = arr.map(value => {
//     // Convert the string to the desired format
//     const modifiedValue = value?.replace(/_/g, ' ')?.replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());

//     // If the value is "Id", ignore it
//     // if (value.toLowerCase() === "id") {
//     //   return null; // Return null or undefined to exclude
//     // }

//     return { name: value, value: modifiedValue };
//   }).filter(Boolean); // Filter out null values

//   return transformedArr;
// };

// transformColumns.js
// transformColumns.js

module.exports.simpleLabel = (arr) => {
  console.log("arr", arr);

  // Extract the 'columns' from the array
  const columnsArray = arr[0]?.columns || []; // Assuming arr is an array of objects

  const transformedArr = columnsArray.map(value => {
    // Ensure value is a string and trim any whitespace like tabs
    const stringValue = typeof value === 'string' ? value.trim() : String(value).trim();

    // Convert the string to the desired format
    const modifiedValue = stringValue
      .replace(/_/g, ' ')
      .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());

    return { name: stringValue, value: modifiedValue };
  }).filter(Boolean); // Filter out null values

  return transformedArr;
};



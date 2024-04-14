// function printValues() {
//   let values = [];

//   // Retrieve values of all textboxes and restrict them to be between 0 and 1
//   for (let i = 1; i <= 4; i++) {
//       let value = parseFloat(document.getElementById('textbox' + i).value);
//       values.push(restrictValue(value));
//   }

//   // Print values in console
//   values.forEach((value, index) => {
//       console.log("Textbox " + (index + 1) + ":", value);
//   });
// }

// function restrictValue(value) {
//   // Ensure the value is within the range [0, 1]
//   if (value < 0) {
//       window.alert("The element must be greater than 0");
//   } else if (value > 1) {
//       return 1;
//   } else if (isNaN(value)) {
//       return 0; // Treat non-numeric input as 0
//   }
//   return value;
// }
function printValues() {
  let values = [];

  // Retrieve values of all textboxes and restrict them to be between 0 and 1
  for (let i = 1; i <= 4; i++) {
      let value = parseFloat(document.getElementById('textbox' + i).value);
      if (!isValidValue(value)) {
          alert("Please enter a value between 0 and 1 for Textbox " + i);
          return;
      }
      values.push(value);
  }

  // Print values in console
  values.forEach((value, index) => {
      console.log("Textbox " + (index + 1) + ":", value);
  });
}

function isValidValue(value) {
  // Check if the value is a number and within the range [0, 1]
  return !isNaN(value) && value >= 0 && value <= 1;
}
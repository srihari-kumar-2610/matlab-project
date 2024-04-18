function printValues() {
  let values = [];

  // Retrieve values of all textboxes and restrict them to be between 0 and 1
  for (let i = 1; i <= 5; i++) {
    let textbox = document.getElementById('textbox' + i);
    if (!textbox) {
      console.error("Textbox " + i + " not found.");
      continue; // Skip to the next iteration if the textbox is not found
    }

    let value = parseFloat(textbox.value);
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

  // Retrieve selected radio button values
  for (let i = 1; i <= 5; i++) {
    let radios = document.getElementsByName('options' + i);
    let selectedValue = null;
    radios.forEach(radio => {
      if (radio.checked) {
        selectedValue = radio.value;
      }
    });
    if (selectedValue !== null) {
      console.log("Radio button group " + i + " selected value:", selectedValue);
    } else {
      console.log("No radio button selected for group " + i);
    }
  }
}

function isValidValue(value) {
  // Check if the value is a number and within the range [0, 1]
  return !isNaN(value) && value >= 0 && value <= 1;
}

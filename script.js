function firstChar(text) {
    // Remove leading and trailing spaces
  inputString = inputString.trim();

  // Check if the resulting string is empty
  if (inputString === '') {
    return '';
  }

  // Return the first character of the cleaned string
  return inputString.charAt(0);
}


// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

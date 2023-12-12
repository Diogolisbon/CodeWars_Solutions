function bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements if they are in the wrong order
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  function alphabetical(str) {
    // Convert the string to an array of characters
    const charactersArray = [];
    for (let i = 0; i < str.length; i++) {
      charactersArray.push(str[i]);
    }
  
    // Convert each character to lowercase
    const lowercaseArray = [];
    for (let i = 0; i < charactersArray.length; i++) {
      const char = charactersArray[i];
      const lowercaseChar = char >= 'A' && char <= 'Z' ? String.fromCharCode(char.charCodeAt(0) + 32) : char;
      lowercaseArray.push(lowercaseChar);
    }
  
    // Use the bubbleSort function to sort the array of lowercase letters
    const sortedArray = bubbleSort(lowercaseArray);
  
    // Concatenate the sorted array into a string
    let sortedString = '';
    for (let i = 0; i < sortedArray.length; i++) {
      sortedString += sortedArray[i];
    }
  
    // Return the sorted string
    return sortedString;
  }
  
  const phrase = "Adhffh djdid Hhur";
  
  // Call the function and log the result
  console.log(alphabetical(phrase));
  
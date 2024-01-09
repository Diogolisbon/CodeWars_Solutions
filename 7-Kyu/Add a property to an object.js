/*
Description:
Write a function that adds a named property to an object. 
It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.
*/

function addProperty(obj, propName, propValue) {
  if (obj.hasOwnProperty(propName)) {
      throw new Error(`Property "${propName}" already exists on the object.`);
  }

  Object.defineProperty(obj, propName, {
      value: propValue,
      writable: true,
      enumerable: true,
      configurable: true
  });
}


function addProperty(obj, propName, propValue) {
  try {
      if (obj[propName] !== undefined) {
          throw new Error(`Property "${propName}" already exists on the object.`);
      }

      obj[propName] = propValue;
  } catch (error) {
      console.error(error.message);
  }
}

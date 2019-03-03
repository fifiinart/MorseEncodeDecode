valueIn = function(item, array) {
  for (let i of array) {
    slice = array.slice(i, i + item.length);
    if (i === item) {
      return true;
    }
  }
  return false;
}
let morseEncoder = {
  "A": ".- ",
  "a": ".- ",
  "B": "-... ",
  "b": "-... ",
  "C": "-.-. ",
  "c": "-.-. ",
  "D": "-.. ",
  "d": "-.. ",
  "E": ". ",
  "e": ". ",
  "F": "..-. ",
  "f": "..-. ",
  "G": "--. ",
  "g": "--. ",
  "H": ".... ",
  "h": ".... ",
  "I": ".. ",
  "i": ".. ",
  "J": ".--- ",
  "j": ".--- ",
  "K": "-.- ",
  "k": "-.- ",
  "L": ".-.. ",
  "l": ".-.. ",
  "M": "-- ",
  "m": "-- ",
  "N": "-. ",
  "n": "-. ",
  "O": "--- ",
  "o": "--- ",
  "P": ".--. ",
  "p": ".--. ",
  "Q": "--.- ",
  "q": "--.- ",
  "R": ".-. ",
  "r": ".-. ",
  "S": "... ",
  "s": "... ",
  "T": "- ",
  "t": "- ",
  "U": "..- ",
  "u": "..- ",
  "V": "...- ",
  "v": "...- ",
  "W": ".-- ",
  "w": ".-- ",
  "X": "-..- ",
  "x": "-..- ",
  "Y": "-.-- ",
  "y": "-.-- ",
  "Z": "--.. ",
  "z": "--.. ",
  "0": "----- ",
  "1": ".---- ",
  "2": "..--- ",
  "3": "...-- ",
  "4": "....- ",
  "5": "..... ",
  "6": "-.... ",
  "7": "--... ",
  "8": "---.. ",
  "9": "----. ",
  " ": " "
};
module.exports = {
  morse: function(type, message) {
    let request = `${type} "${message}" `
    if (type === 'encode') {

      // Check if message length is 0
      if (message.length == 0) {
        return {
          request,
          "error": "Cannot Encode Empty Text",
          "success": false
        }
      }

      // Check if message contains only '.' or '-'
      let unique = [];
      for (const index in message) {
        if (!valueIn(message[index], unique) && !(message[index] == "." || message[index] == "-")) {
          unique.push(message[index]);
        }
      }

      if (unique.length == 0) {
        return {
          request,
          "error": "Cannot Encode Morse Code",
          "success": false
        }
      }

      // Encode message; Everything is okay message-wise
      let result = "";
      let char;
      for (const i in message) {
        char = message[i];

        // Find if char is in morseEncoder
        if (char in morseEncoder) {
          result += morseEncoder[char];
        }
      }

      return {
        request,
        "success": true,
        "value": result
      }
    } else if (type === 'decode') {
      let chars = [...message.trim()];
      // Make sure morse code is being decoded
      for (let i of chars) {
        if (i !== " " && i !== "-" && i !== ".") {
          return {
            request,
            "error": "Can only decode morse code",
            "success": false
          }
        }
      }
      // Split into morse code characters
      let tokens = message.trim()
        .split(" ");
      for (let i in tokens) {
        tokens[i] += " ";
        for (let j in morseEncoder) {
          // Replace the morse code with the corresponding letter
          if (morseEncoder[j] === tokens[i]) {
            tokens[i] = j;
          }
        }
      }
      return {
        request,
        "success": true,
        "value": tokens.join("")
      }
    } else {
      return {
        request,
        "error": "type is not encode or decode",
        "success": false
      }
    }
  },
  version: require("./package.json")
    .version
}
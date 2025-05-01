/*
 * Starter file 
 */
(function() {
  "use strict";

  /*
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  

  /*
   * runs when the page is fully loaded.
   */
  function init() {
    console.log("Window loaded!");
    let encryptButton = document.getElementById("encrypt-it");
    let resetButton = document.getElementById("reset");
    encryptButton.addEventListener("click", handleEncryption);
    resetButton.addEventListener("click", handleReset);
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

   //Called when the Encrypt-It! button is clicked
   function handleEncryption() {
    let inputTxt = document.getElementById("input-text").value;
    // Encrypt the text using shiftCipher
    let encryptedText = shiftCipher(inputTxt);

    // Display encrypted text in the result paragraph
    document.getElementById("result").textContent = encryptedText;
  }
   //Called when the reset button is clicked
  function handleReset() {
    // Clear the textarea and the result paragraph
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

/*
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}
})();

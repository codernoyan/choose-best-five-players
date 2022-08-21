// get input value from an input field
function getInputValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);
    return inputFieldValue;
}

// get inner text value from a text element
function getTextElementValueById(elementId) {
    const elementText = document.getElementById(elementId);
    const elementValueString = elementText.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}

// set inner text value to an element
function setTextElementValueById(elementId, newValue) {
    const elementText = document.getElementById(elementId);
    elementText.innerText = newValue;
}
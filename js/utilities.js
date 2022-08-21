function getInputValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const elementText = document.getElementById(elementId);
    const elementValueString = elementText.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}

function setTextElementValueById(elementId, newValue) {
    const elementText = document.getElementById(elementId);
    elementText.innerText = newValue;
}
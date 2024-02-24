const setvalue = document.querySelector('#counter');

const increment = () => {
    // get the value 
    let value = parseInt(setvalue.innerText);
    //update the value of the ui
    value = value + 1;
    // set the value to the UI
    setvalue.innerText = value;
}

const decrement = () => {
    // Get the value from the UI
    let value = parseInt(setvalue.innerText);
    //Update 
    value = value - 1;
    // Set the Value
    setvalue.innerText = value;
}
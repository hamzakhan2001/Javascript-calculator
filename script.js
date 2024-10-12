const display = document.getElementById("display");

function appendToDisplay(input){
    display.value  += input;  // Adds the new number to the end of the existing value in the "display" element

}


function clearDisplay(){
    display.value = "";
}

function calculate(){

    display.value = eval(display.value);
    try {
        var result = eval(display.value); // Evaluate the expression

        // Check if the result is a finite number
        if (isFinite(result)) {
            display.value = result;
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function square() {
    var currentValue = parseFloat(display.value);
    var result = Math.square(currentValue); // Square root
    display.value = result;
}

function exponent()
{
    display.value = Math.exp(display.value)
}

function pie_val(){
    display.value = Math.PI
}


function deleteVal() { 

if (display.value.length > 0) {
    display.value = display.value.slice(0, -1); // Remove the last character
}
}


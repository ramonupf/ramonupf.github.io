function apply(value_code){
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result;
    var errorMessage = '';
    try{
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Please input a number in each field.")
        }
        switch(value_code.trim()){
            case "+":
                result = num1+num2;
                break;
            case "-":
                result = num1-num2;
                break;
            case "*":
                result = num1*num2;
                break;
            case "/":
                if(num2==0){
                    throw new Error("Division by 0");
                }
                result = num1/num2;
                break;
            default:
                throw new Error("Invalid operation");
        }
    } catch(error){
        errorMessage = error.message;
        console.log(errorMessage);
    }

    // Get the result input field and error message div
    var resultField = document.getElementById('result');
    var errorField = document.getElementById('error');

    // Check if there is an error
    if (errorMessage) {
        resultField.value = ''; // Clear the result field
        errorField.textContent = errorMessage; // Display the error message
    } else {
        resultField.value = result; // Display the result
        errorField.textContent = ''; // Clear any previous error message
    }
}
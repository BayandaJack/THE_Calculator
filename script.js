document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  const buttons = document.querySelectorAll(".calc-btn");
  const display = document.querySelector(".display-calc");
  let expression = "";
  //Loop through the buttons and add click functionality
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
       if (value === "AC") {
        display.textContent = "";
        expression = "";
      } else if (value === "=") {
        try {
          const result = eval(expression); // simple but risky method for now
          display.textContent = result;
          expression = result.toString(); // so you can continue calculating
        } catch (error) {
          display.textContent = "Error";
          expression = "";
        }
      } else if (value === "back"){
        expression = expression.slice(0, -1);
        display.textContent = expression;
      } else {
        expression += value;
        display.textContent = expression;
      }
    })
  })

});

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  const buttons = document.querySelectorAll(".calc-btn");
  const display = document.querySelector(".display-calc");
  let sum = 0;
  //Loop through the buttons and add click functionality
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      if (value === "AC"){
        display.textContent = "";
      }else if (typeof value === 'number'){
        display.textContent = display.textContent + value;
        sum = sum + parseInt(value);
        //console.log('Button clicked: ', value);
      }
    })
  })

});

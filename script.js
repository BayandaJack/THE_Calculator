document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  const buttons = document.querySelectorAll(".calc-btn");
  const display = document.querySelector(".display-calc");
  //Loop through the buttons and add click functionality
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      if (value === "AC"){
        display.textContent = "";
      }else{
        display.textContent = display.textContent + value;
        //console.log('Button clicked: ', value);
      }
    })
  })

});

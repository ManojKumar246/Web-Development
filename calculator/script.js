document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      if (this.id === "clear") {
        currentInput = "";
      } else if (this.id === "calculate") {
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else {
        currentInput += this.textContent;
      }
      display.value = currentInput;
    });
  });
});

  
  
  
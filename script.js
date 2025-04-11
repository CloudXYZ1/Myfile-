window.onload = function () {
  const formInputs = document.querySelectorAll('input[type="text"], input[type="number"]');

  // Add input validation
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() === "") {
        input.style.borderColor = "blue"; // Highlight empty fields
      } else {
        input.style.borderColor = "#ccc"; // Reset to default
      }
    });
  });

  // Form submission validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      let isValid = true;

      formInputs.forEach((input) => {
        if (input.value.trim() === "") {
          isValid = false;
          input.style.borderColor = "red";
        }
      });

      if (!isValid) {
        e.preventDefault(); // Prevent form submission
        alert("Please fill in all the required fields.");
      }
    });
  }
};
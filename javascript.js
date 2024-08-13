window.addEventListener("DOMContentLoaded", () => {
    const options = document.getElementsByClassName("option");
    let selectedOption = null;

    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            // Remove the 'selected' class from any previously selected option
            for (let j = 0; j < options.length; j++) {
                options[j].classList.remove("selected");
            }

            // Add the 'selected' class to the clicked option
            this.classList.add("selected");

            // Store the selected option
            selectedOption = this.textContent;
            sessionStorage.setItem("selectedOption", selectedOption);
        });
    }

    // Handle submit button click
    const submitButton = document.querySelector(".submit-btn button");
    if (submitButton) {
        submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (selectedOption) {
                window.location.href = "index2.html";
            } else {
                alert("Please select a rating before submitting!");
            }
        });
    }

    // Thank you page logic
    const result = document.querySelector(".result");
    if (result) {
        const storedOption = sessionStorage.getItem("selectedOption");
        if (storedOption) {
            result.textContent = `You selected ${storedOption} out of 5`;
        } else {
            result.textContent = "No rating selected";
        }
    }
});


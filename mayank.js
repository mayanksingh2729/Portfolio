function showPopup1() {
    document.getElementById("popup1").style.display = "flex";
}

function hidePopup1() {
    document.getElementById("popup1").style.display = "none";
}

function showPopup2() {
    document.getElementById("popup2").style.display = "flex";
}

function hidePopup2() {
    document.getElementById("popup2").style.display = "none";
}
function showPopup3() {
    document.getElementById("popup3").style.display = "flex";
}

function hidePopup3() {
    document.getElementById("popup3").style.display = "none";
}

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("error-message").innerText = "Please fill in all fields.";
    } else {
        // Perform form submission or further processing here
        alert("Form submitted successfully! Out team will contact you shortly");
        // Reset the form or redirect as needed
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the "About Us" link and the "About" section
    var educationLink = document.getElementById("educationLink");
    var educationSection = document.getElementById("educationSection");

    // Add click event listener to the "About Us" link
    educationLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        // Scroll to the "About" section smoothly
        educationSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the "About Us" link and the "About" section
    var skillLink = document.getElementById("skillLink");
    var skillSection = document.getElementById("skillSection");

    // Add click event listener to the "About Us" link
    skillLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        // Scroll to the "About" section smoothly
        skillSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the "About Us" link and the "About" section
    var contactLink = document.getElementById("contactLink");
    var contactSection = document.getElementById("contactSection");

    // Add click event listener to the "About Us" link
    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        // Scroll to the "About" section smoothly
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// --- Code to clear form on successful submission ---

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function (event) {
            // Prevent default submission to allow the SB Forms script to handle it via AJAX/Fetch
            event.preventDefault(); 
            
            // We set a small delay to wait for the external SB Forms script 
            // to successfully send the data and remove the 'd-none' class from the success message.
            setTimeout(function() {
                const successMessage = document.getElementById('submitSuccessMessage');
                
                // Check if the success message is visible (SB Forms removes 'd-none' on success)
                if (!successMessage.classList.contains('d-none')) {
                    // **1. Clear the form fields**
                    form.reset();
                    
                    // **2. Optional: Hide the success message after 5 seconds**
                    // This allows the user to easily submit a new message without refreshing the page.
                    setTimeout(function() {
                        successMessage.classList.add('d-none');
                        
                        // Optional: Re-enable the submit button if SB Forms disabled it
                        const submitButton = document.getElementById('submitButton');
                        if (submitButton) {
                            submitButton.disabled = false;
                        }
                    }, 5000); // 5000 milliseconds = 5 seconds
                }
            }, 500); // Wait 500ms after submission attempt
        });
    }
});
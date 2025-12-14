document.getElementById("consentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const checkbox = document.getElementById("consentCheckbox");

    if (checkbox.checked) {
        // Array of placeholder links
        const links = [
            "https://forms.office.com/e/KN0fVUAJ5R", // Placeholder link 1
            "https://forms.office.com/e/bec4RHtVz9"  // Placeholder link 2
        ];

        // Randomly select one link
        const randomIndex = Math.floor(Math.random() * links.length);
        const selectedLink = links[randomIndex];

        // Redirect to the selected link
        window.location.href = selectedLink;
    } else {
        alert("Please check the box to give your consent before continuing.");
    }
});

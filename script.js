document.getElementById("consentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const checkbox = document.getElementById("consentCheckbox");

    if (checkbox.checked) {
        const links = [
            "https://forms.office.com/e/KN0fVUAJ5R", // Placeholder link 1
            "https://forms.office.com/e/bec4RHtVz9"  // Placeholder link 2
        ];

        const randomIndex = Math.floor(Math.random() * links.length);
        const selectedLink = links[randomIndex];

        window.location.href = selectedLink;
    } else {
        alert("Please check the box to give your consent before continuing.");
    }
});

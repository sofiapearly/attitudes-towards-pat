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

function setPdfZoom() {
    const pdf = document.getElementById("pdfViewer");
    let zoom;

    if (window.innerWidth >= 1200) {
        zoom = 150; // large screens
    } else if (window.innerWidth >= 800) {
        zoom = 130; // medium screens
    } else {
        zoom = 100; // small screens (phones/tablets)
    }

    // Add PDF open parameter to iframe src
    pdf.src = `consent.pdf#zoom=${zoom}&view=FitH`;
}

// Set zoom on page load
window.addEventListener("load", setPdfZoom);

// Optional: adjust if user resizes window
window.addEventListener("resize", setPdfZoom);


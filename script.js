document.getElementById("consentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const checkbox = document.getElementById("consentCheckbox");

    if (checkbox.checked) {
        const links = [
            "https://forms.office.com/e/KN0fVUAJ5R",
            "https://forms.office.com/e/bec4RHtVz9"
        ];

        const randomIndex = Math.floor(Math.random() * links.length);
        const selectedLink = links[randomIndex];
        window.location.href = selectedLink;
    } else {
        alert("Please check the box to give your consent before continuing.");
    }
});

function setPdfZoom() {
    const pdf = document.getElementById("pdfViewer");
    let zoomParam;

    if (window.innerWidth >= 1200) {
        zoomParam = "zoom=150";
    } else if (window.innerWidth >= 800) {
        zoomParam = "zoom=130";
    } else if (window.innerWidth >= 500) {
        zoomParam = "zoom=110";
    } else {
        zoomParam = "view=FitH"; // small phones: fit width
    }

    pdf.src = `consent.pdf#${zoomParam}`;
}

window.addEventListener("load", setPdfZoom);
window.addEventListener("resize", setPdfZoom);

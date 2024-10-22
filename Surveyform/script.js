function submitForm() {
    const form = document.getElementById("surveyForm");
    if (form.checkValidity()) {
        const popup = document.getElementById("popup");
        const popupContent = document.getElementById("popup-content");
        const formElements = form.elements;
        let content = "<ul>";
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.type !== "button") {
                content += `<li><strong>${element.name}:</strong> ${element.value}</li>`;
            }
        }
        content += "</ul>";
        popupContent.innerHTML = content;
        popup.style.display = "block";
        form.reset();
    } else {
        alert("Please fill in all required fields.");
    }
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

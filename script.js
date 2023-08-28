const englishSection = document.getElementById("englishSection");
const banglaSection = document.getElementById("banglaSection");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    if (englishSection.style.display === "none") {
        englishSection.style.display = "block";
        banglaSection.style.display = "none";
    } else {
        englishSection.style.display = "none";
        banglaSection.style.display = "block";
    }
});


const themeBtn = document.getElementById("theme-btn");
const visitorForm = document.getElementById("visitor-form");
const statusMsg = document.getElementById("status-msg");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

visitorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();

    if (!emailInput) {
        statusMsg.textContent = "Please enter an email address.";
        return;
    }

    const displayName = nameInput || "Classmate";
    statusMsg.textContent = `Hello, ${displayName}! Your details were noted.`;
    visitorForm.reset();
});
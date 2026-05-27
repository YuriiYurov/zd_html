let isRed = true;
function toggleTheme() {
    const theme = document.getElementById("theme");
    isRed = !isRed;
    theme.href = isRed ? "red.css" : "green.css";
}

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("result").textContent = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name) {
        document.getElementById("nameError").textContent = "Wpisz imie";
        isValid = false;
    } else if (/\d/.test(name)) {
        document.getElementById("nameError").textContent = "Nie można wpisywać liczby!!";
        isValid = false;
    }

    if (!surname) {
        document.getElementById("surnameError").textContent = "Wpisz nazwisko";
        isValid = false;
    } else if (/\d/.test(surname)) {
        document.getElementById("surnameError").textContent = "Nie można wpisywać liczby!!";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        document.getElementById("emailError").textContent = "Wpisz email";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Wpisz prawidlowy email";
        isValid = false;
    }

    if (!message) {
        document.getElementById("messageError").textContent = "Wpisz wiadomość";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("result").textContent = "Sukces";
        document.getElementById("myForm").reset();
    }
});
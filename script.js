let isRed = true;
function toggleTheme() {
    const theme = document.getElementById("theme");
    isRed = !isRed;
    theme.href = isRed ? "red.css" : "green.css";
}

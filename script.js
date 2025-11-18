const increaseText = document.getElementById("increaseText");
increaseText.addEventListener("click", () => {
    document.body.style.fontSize = "larger";
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

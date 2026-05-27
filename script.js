// Klucz dla localStorage
const STORAGE_KEY = 'my_todo_list';

// 3. Odczyt danych po załadowaniu strony
document.addEventListener('DOMContentLoaded', loadTasks);

// Funkcja dodawania zadania
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;

    if (taskText === '') return; // Prosta walidacja

    const tasks = getTasksFromStorage();
    tasks.push(taskText);

    // 2. Zapisywanie danych w localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

    input.value = '';
    renderTasks();
}

// Pobieranie zadań z localStorage
function getTasksFromStorage() {
    const tasks = localStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
}

// 4. Usuwanie elementu
function deleteTask(index) {
    const tasks = getTasksFromStorage();
    tasks.splice(index, 1); // Usuwamy 1 element według indeksu
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    renderTasks();
}

// 5. Wyświetlanie (renderowanie) danych
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    const tasks = getTasksFromStorage();

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(${index})">Usuń</button>`;
        taskList.appendChild(li);
    });
}

// Ładowanie zadań przy starcie
function loadTasks() {
    renderTasks();
}

fetch("data.json")
    .then(res => res.json())
    .then(data => {

        // Umiejętności
        const skillsList = document.getElementById("skills");
        data.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });
        //Projekty
        const projectsList = document.getElementById("projects");
        data.projects.forEach(project => {
            const li = document.createElement("li");
            li.textContent = project.title + " — " + project.desc;
            projectsList.appendChild(li);
        });
    })
    .catch(err => console.log("Błąd ładowania:", err));

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
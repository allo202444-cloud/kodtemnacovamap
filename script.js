// Конфиг Firebase (ВСТАВЬ СВОЙ!)
const firebaseConfig = {
    apiKey: "твой_ключ",
    databaseURL: "твоя_урл",
    projectId: "твой_айди"
};
firebase.initializeApp(firebaseConfig);

// Логика входа
document.getElementById('loginBtn').addEventListener('click', () => {
    const user = document.getElementById('username').value;
    if(user) {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('op-name').innerText = user;
    }
});

// Карта
const map = L.map('map').setView([48.3794, 31.1656], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Функции переключения режимов
document.querySelectorAll('.obj-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const mode = this.getAttribute('data-mode');
        if(mode) console.log("Режим изменен на: " + mode);
        // Добавь сюда логику выбора объекта
    });
});

document.getElementById('toggleSettings').onclick = () => {
    const panel = document.getElementById('settings-panel');
    panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
};

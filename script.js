// Конфигурация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAs-L3X0l-Y6z5X8z5X8z5X8z5X8z5X8",
    authDomain: "operativno-ecil.firebaseapp.com",
    databaseURL: "https://operativno-ecil-default-rtdb.firebaseio.com",
    projectId: "operativno-ecil",
    storageBucket: "operativno-ecil.appspot.com",
    messagingSenderId: "105656565656",
    appId: "1:105656565656:web:6z5X8z5X8z5X8z5X8"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Инициализация карты Leaflet
const map = L.map('map', {
    zoomControl: false,
    attributionControl: false
}).setView([48.3794, 31.1656], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Логика авторизации
window.login = function() {
    const nick = document.getElementById('username').value;
    if (nick.trim() !== "") {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('op-name').innerText = nick;
        
        // Запись в БД о входе
        db.ref('presence/' + nick).set({
            status: 'online',
            last_seen: Date.now()
        });
    } else {
        alert("Введіть нік!");
    }
};

// Переключение режимов (Shahed, KAB и т.д.)
document.querySelectorAll('.obj-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.classList.contains('disabled')) return;
        
        document.querySelectorAll('.obj-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const mode = this.id.replace('btn-', '');
        document.getElementById('status-text').innerText = mode.toUpperCase();
        console.log("Active Mode:", mode);
    });
});

// Настройки (Шестеренка)
window.toggleP = function(id) {
    const panel = document.getElementById(id);
    panel.style.display = (panel.style.display === 'flex') ? 'none' : 'flex';
};

// Ватермарки
window.updWM = function() {
    const owl = document.getElementById('chk-owl').checked;
    const dog = document.getElementById('chk-bulldog').checked;
    
    document.getElementById('wm-owl').style.display = owl ? 'block' : 'none';
    document.getElementById('wm-bulldog').style.display = dog ? 'block' : 'none';
};

// Изменение размера иконок
window.changeIconSize = function(val) {
    document.getElementById('size-val').innerText = val;
    // Тут логика изменения размера маркеров на карте
};

// Google Карты
window.toggleGoogle = function() {
    console.log("Switching to Google Terrain...");
    // Логика смены слоя на Google
};

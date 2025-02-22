let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0; // Lade Score aus localStorage
let autoClickerActive = localStorage.getItem("autoClickerActive") === 'true'; // Lade Status des Auto-Clickers
let doubleClickActive = localStorage.getItem("doubleClickActive") === 'true'; // Lade Status von Double-Click
let clickMultiplier = localStorage.getItem("clickMultiplier") ? parseInt(localStorage.getItem("clickMultiplier")) : 1;
let shopVisible = false;

// Get elements
const cookie = document.getElementById("cookie");
const scoreDisplay = document.getElementById("score");
const shopToggle = document.getElementById("shopToggle");
const shop = document.getElementById("shop");
const closeShop = document.getElementById("closeShop");
const autoClicker = document.getElementById("autoClicker");
const doubleClick = document.getElementById("doubleClick");
const goldenCookie = document.getElementById("goldenCookie");
const megaClick = document.getElementById("megaClick");
const clickSound = document.getElementById("clickSound");
const purchaseSound = document.getElementById("purchaseSound");

// Funktion zum Speichern des Scores und Status der Items im localStorage
function saveGame() {
    localStorage.setItem("score", score);
    localStorage.setItem("autoClickerActive", autoClickerActive);
    localStorage.setItem("doubleClickActive", doubleClickActive);
    localStorage.setItem("clickMultiplier", clickMultiplier);
}

// Funktion zum Starten des Auto-Clickers
function startAutoClicker() {
    if (autoClickerActive) {
        setInterval(() => {
            score += 1 * clickMultiplier;
            updateScore();
            saveGame(); // Speichern des Spiels nach jedem Klick des Auto-Clickers
        }, 1000);
    }
}

// Klick auf den Cookie
cookie.addEventListener("click", () => {
    score += 1 * clickMultiplier;
    updateScore();
    saveGame(); // Speichern nach jedem Klick
    clickSound.play();
});

// Update der Anzeige
function updateScore() {
    scoreDisplay.textContent = `Cookies: ${score}`;
}

// Shop einblenden/ausblenden
shopToggle.addEventListener("click", () => {
    shopVisible = !shopVisible;
    shop.style.display = shopVisible ? "block" : "none";
});

closeShop.addEventListener("click", () => {
    shopVisible = false;
    shop.style.display = "none";
});

// Event-Listener für Shop-Items
const shopItems = [
    { element: autoClicker, cost: 10, action: () => { autoClickerActive = true; startAutoClicker(); } },
    { element: doubleClick, cost: 50, action: () => { doubleClickActive = true; clickMultiplier = 2; } },
    { element: goldenCookie, cost: 200, action: () => { /* Golden Cookie Logic */ } },
    { element: megaClick, cost: 500, action: () => { /* Mega Click Logic */ } },
    { element: cookieStorm, cost: 250, action: () => { /* Cookie Storm Logic */ } },
    // Weitere Items...
];

// Event-Listener für jedes Shop-Item
shopItems.forEach(item => {
    item.element.addEventListener("click", () => {
        if (score >= item.cost && !item.element.disabled) {
            score -= item.cost;
            item.element.disabled = true;
            updateScore();
            item.action();
            purchaseSound.play();
            saveGame(); // Speichern nach jedem Kauf
        }
    });
});

// Lade gespeicherte Einstellungen
window.addEventListener("load", () => {
    updateScore();
    if (autoClickerActive) {
        startAutoClicker(); // Wenn der Auto-Clicker aktiv ist, starte ihn
    }
    if (doubleClickActive) {
        clickMultiplier = 2; // Setze den Click Multiplier auf 2, wenn aktiviert
    }

    // Setze den Status von Shop-Items
    if (autoClickerActive) {
        autoClicker.disabled = true;
    }
    if (doubleClickActive) {
        doubleClick.disabled = true;
    }
    // Füge hier auch für andere Items hinzu, dass sie deaktiviert sind, wenn sie gekauft wurden
});

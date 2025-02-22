// Shop Items korrekt referenzieren
const shopItems = [
    { id: "autoClicker", cost: 10, action: () => { autoClickerActive = true; startAutoClicker(); } },
    { id: "doubleClick", cost: 50, action: () => { doubleClickActive = true; clickMultiplier = 2; } },
    { id: "goldenCookie", cost: 200, action: () => { /* Golden Cookie Logic */ } },
    { id: "megaClick", cost: 500, action: () => { /* Mega Click Logic */ } },
    { id: "clickMultiplier", cost: 100, action: () => { clickMultiplier *= 2; } },
    { id: "cookieStorm", cost: 250, action: () => { /* Cookie Storm Logic */ } },
    { id: "cookieExplosion", cost: 500, action: () => { /* Cookie Explosion Logic */ } },
    { id: "cookieRain", cost: 750, action: () => { /* Cookie Rain Logic */ } },
    { id: "timeFreeze", cost: 1000, action: () => { /* Time Freeze Logic */ } },
    { id: "cookieMagnet", cost: 200, action: () => { /* Cookie Magnet Logic */ } },
    { id: "goldenBiscuit", cost: 1000, action: () => { /* Golden Biscuit Logic */ } },
    { id: "tripleClick", cost: 150, action: () => { clickMultiplier = 3; } },
    { id: "cookieDrone", cost: 200, action: () => { /* Cookie Drone Logic */ } },
    { id: "cookieFactory", cost: 500, action: () => { /* Cookie Factory Logic */ } },
    { id: "cookieBoost", cost: 300, action: () => { /* Cookie Boost Logic */ } },
    { id: "superClick", cost: 400, action: () => { /* Super Click Logic */ } },
    { id: "cookieMachine", cost: 600, action: () => { /* Cookie Machine Logic */ } },
    { id: "ultimateClicker", cost: 800, action: () => { /* Ultimate Clicker Logic */ } },
    { id: "doubleSpeed", cost: 1200, action: () => { /* Double Speed Logic */ } },
    { id: "autoProduction", cost: 1500, action: () => { /* Auto Production Logic */ } },
    { id: "cookieMansion", cost: 2000, action: () => { /* Cookie Mansion Logic */ } },
    { id: "cookieResearch", cost: 2500, action: () => { /* Cookie Research Logic */ } },
    { id: "megaBoost", cost: 3000, action: () => { /* Mega Boost Logic */ } },
    { id: "cookieRobot", cost: 3500, action: () => { /* Cookie Robot Logic */ } },
    { id: "doubleCookies", cost: 600, action: () => { /* Double Cookies Logic */ } },
    { id: "timeAccelerator", cost: 700, action: () => { /* Time Accelerator Logic */ } },
    { id: "cookiePrinter", cost: 800, action: () => { /* Cookie Printer Logic */ } },
    { id: "cookieHarvest", cost: 1000, action: () => { /* Cookie Harvest Logic */ } },
    { id: "superMegaClick", cost: 1500, action: () => { /* Super Mega Click Logic */ } },
    { id: "cookieStormMachine", cost: 2000, action: () => { /* Cookie Storm Machine Logic */ } },
    { id: "infiniteCookies", cost: 5000, action: () => { /* Infinite Cookies Logic */ } },
    { id: "cookieRocket", cost: 6000, action: () => { /* Cookie Rocket Logic */ } },
    { id: "megaClicker", cost: 4000, action: () => { /* Mega Clicker Logic */ } },
    { id: "hyperClick", cost: 10000, action: () => { /* Hyper Click Logic */ } }
];

// Event-Listener für die Shop-Items hinzufügen
shopItems.forEach(item => {
    const element = document.getElementById(item.id);
    if (element) {
        element.addEventListener("click", () => {
            if (score >= item.cost && !element.disabled) {
                score -= item.cost;
                updateScore();
                element.disabled = true; // Falls das Item nur einmal gekauft werden darf
                item.action();
                purchaseSound.play();
            }
        });
    } else {
        console.warn(`Shop-Item mit ID "${item.id}" nicht gefunden.`);
    }
});

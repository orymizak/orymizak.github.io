let currentLang = "es";

const btn = document.getElementById("langBtn");
const elements = document.querySelectorAll("[data-es]");

function updateLanguage() {
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
    btn.textContent = currentLang === "es" ? "🇲🇽 ES" : "🇺🇸 EN";
}

btn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    updateLanguage();
});

updateLanguage();

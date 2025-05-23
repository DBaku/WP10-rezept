// app.js

document.getElementById("recipeForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Formulareingaben auslesen
    const titel = document.getElementById("titel").value;
    const kategorien = document
        .getElementById("kategorien")
        .value.split(",")
        .map((kat) => kat.trim());
    const beschreibung = document.getElementById("beschreibung").value;
    const zutaten = document
        .getElementById("zutaten")
        .value.split("\n")
        .map((zutat) => {
            const [name, menge] = zutat.split(",").map((z) => z.trim());
            return { name, menge };
        });
    const zubereitungsdauer = parseInt(document.getElementById("zubereitungsdauer").value);

    const bewertungen = document
        .getElementById("bewertungen")
        .value.split("\n")
        .map((b) => {
            const [benutzer_id, bewertung, kommentar] = b.split(",").map((bw) => bw.trim());
            return { benutzer_id, bewertung: parseInt(bewertung), kommentar };
        });

    const kommentare = document
        .getElementById("kommentare")
        .value.split("\n")
        .map((k) => {
            const [benutzer_id, text] = k.split(",").map((kom) => kom.trim());
            return { benutzer_id, text };
        });

    const rezept = {
        titel,
        kategorien,
        beschreibung,
        zutaten,
        zubereitungsdauer,
        erstellt_am: new Date(),
        bewertungen,
        kommentare,
    };

    // Verbindung zur MongoDB (im Backend, nicht direkt im Browser)
    try {
        await saveRecipeToDB(rezept);
        renderRecipeCard(rezept);
    } catch (error) {
        console.error("Fehler beim Speichern des Rezepts:", error);
    }
});

// Funktion zum Speichern des Rezepts in die MongoDB (über Backend)
async function saveRecipeToDB(rezept) {
    // Hier wird normalerweise eine Anfrage an das Backend gesendet, z.B. mit Fetch oder Axios
    // Für eine Express.js/MongoDB-Anwendung:
    const response = await fetch("/api/rezepte", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rezept),
    });

    if (!response.ok) {
        throw new Error("Fehler beim Speichern in der Datenbank");
    }
}

// Funktion zur Darstellung des Rezepts als Rezeptkarte
function renderRecipeCard(rezept) {
    const cardContainer = document.getElementById("recipeCardContainer");
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
        <h2>${rezept.titel}</h2>
        <p><strong>Kategorien:</strong> ${rezept.kategorien.join(", ")}</p>
        <p><strong>Zubereitungsdauer:</strong> ${rezept.zubereitungsdauer} Minuten</p>
        <p><strong>Beschreibung:</strong> ${rezept.beschreibung}</p>
        <p><strong>Zutaten:</strong> ${rezept.zutaten
            .map((z) => `${z.name} (${z.menge})`)
            .join(", ")}</p>
        <p><strong>Bewertungen:</strong></p>
        <ul>${rezept.bewertungen
            .map((b) => `<li>${b.benutzer_id}: ${b.bewertung} Sterne - "${b.kommentar}"</li>`)
            .join("")}</ul>
        <p><strong>Kommentare:</strong></p>
        <ul>${rezept.kommentare.map((k) => `<li>${k.benutzer_id}: "${k.text}"</li>`).join("")}</ul>
    `;

    cardContainer.appendChild(card);
}

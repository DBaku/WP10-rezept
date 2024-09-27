document.getElementById("recipeForm").addEventListener("submit", function (e) {
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

    // Rezeptkarte rendern
    renderRecipeCard(rezept);
});

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

//db_connection aufbau
const { MongoClient } = require("mongodb");

// Verbindungs-URL von MongoDB Atlas
const uri =
    "mongodb+srv://dimaba487:dima1234@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Erstelle eine neue MongoClient-Instanz
const client = new MongoClient(uri);

async function run() {
    try {
        // Verbinde zum MongoDB-Server
        await client.connect();
        console.log("Verbunden mit MongoDB Atlas!");

        // Zugriff auf die Datenbank und Collection
        const database = client.db("myDatabase");
        const collection = database.collection("myCollection");

        // Daten einfügen (optional)
        const insertResult = await collection.insertOne({
            title: "The Way of Kings",
            author: "Brandon Sanderson",
            pages: 1007,
            genres: ["fantasy", "epic"],
            rating: 9,
        });
        console.log("Eingefügtes Dokument:", insertResult.insertedId);
    } finally {
        // Verbindung schließen
        await client.close();
    }
}

run().catch(console.dir);

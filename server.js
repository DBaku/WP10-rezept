// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware zum Verarbeiten von JSON-Daten
app.use(express.json());
app.use(cors());

// MongoDB-Verbindung herstellen (Verwende den Connection-String deiner Remote-Datenbank)
mongoose
    .connect(
        "mongodb+srv://dimaba487:dima1234@dimacluster2.1i2qt.mongodb.net/?retryWrites=true&w=majority&appName=Dimacluster2",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Mit MongoDB verbunden"))
    .catch((error) => console.error("Fehler bei der Verbindung:", error));

app.get("/rezepterstellen", async (req, res) => {
    try {
        // Abrufen aller Rezepte aus der Datenbank
        const rezepte = await Rezept.find();

        // Rückgabe der Daten an den Client
        res.json(rezepte);
    } catch (error) {
        // Fehlerbehandlung
        console.error("Fehler beim Abrufen der Rezepte:", error);
        res.status(500).json({ error: "Fehler beim Abrufen der Rezepte" });
    }
});

// Rezept-Schema und Modell
const rezeptSchema = new mongoose.Schema({
    titel: String,
    kategorien: [String],
    beschreibung: String,
    zutaten: [{ name: String, menge: String }],
    zubereitungsdauer: Number,
    autor_id: String, // hier als String für einfacheren Test
    erstellt_am: { type: Date, default: Date.now },
});

const Rezept = mongoose.model("Rezept", rezeptSchema);

// POST-Endpunkt zum Hinzufügen eines neuen Rezepts
app.post("/rezepte", async (req, res) => {
    try {
        const neuesRezept = new Rezept(req.body);
        await neuesRezept.save();
        res.status(201).json(neuesRezept);
    } catch (error) {
        res.status(400).json({ error: "Fehler beim Speichern des Rezepts" });
    }
});

// // GET-Endpunkt zum Abrufen aller Rezepte
// app.get("/rezepte", async (req, res) => {
//     try {
//         const rezepte = await Rezept.find();
//         res.json(rezepte);
//     } catch (error) {
//         res.status(500).json({ error: "Fehler beim Abrufen der Rezepte" });
//     }
// });
app.get("/rezepte", async (_req, res) => {
    console.log("GET-Anfrage auf /rezepte erhalten");
    try {
        const rezepte = await Rezept.find();
        console.log("Rezepte aus der Datenbank:", rezepte);
        res.json(rezepte);
    } catch (error) {
        console.error("Fehler beim Abrufen der Rezepte:", error);
        res.status(400).json({ error: "Fehler beim Abrufen der Rezepte" });
    }
});

app.get("/", (req, res) => {
    res.send("Hallo, Welt! hallo hallo ");
});

app.get("/rezepterstellen", (req, res) => {
    res.send("");
});
// Server starten
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});

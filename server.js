// server.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // JSON-Daten verarbeiten

// MongoDB-Verbindung herstellen
mongoose
    .connect(
        "mongodb+srv://dimaba487:dima1234@dimacluster2.1i2qt.mongodb.net/?retryWrites=true&w=majority&appName=Dimacluster2",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Mit der Remote MongoDB verbunden"))
    .catch((error) => console.error("Fehler bei der Remote-Verbindung:", error));

// Rezept-Schema erstellen
const rezeptSchema = new mongoose.Schema({
    titel: String,
    kategorien: [String],
    beschreibung: String,
    zutaten: [{ name: String, menge: String }],
    zubereitungsdauer: Number,
    erstellt_am: { type: Date, default: Date.now },
    autor_id: mongoose.Schema.Types.ObjectId,
    bewertungen: [
        {
            benutzer_id: mongoose.Schema.Types.ObjectId,
            bewertung: Number,
            kommentar: String,
            datum: { type: Date, default: Date.now },
        },
    ],
    kommentare: [
        {
            benutzer_id: mongoose.Schema.Types.ObjectId,
            text: String,
            datum: { type: Date, default: Date.now },
        },
    ],
});

// Rezept-Modell erstellen
const Rezept = mongoose.model("Rezept", rezeptSchema);

// POST-Endpunkt zum Hinzufügen eines neuen Rezepts
app.post("/rezepte", async (req, res) => {
    try {
        const neuesRezept = new Rezept(req.body); // Rezept-Daten aus dem Request-Body
        await neuesRezept.save(); // Rezept in der Datenbank speichern
        res.status(201).send(neuesRezept);
    } catch (error) {
        res.status(400).send({ error: "Fehler beim Speichern des Rezepts" });
    }
});

// Server starten
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});

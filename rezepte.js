//------------------------------------------------

//---meine Testabfragen ----

//const rezepte: Diese Zeile weist die rezepte Collection der Variablen rezepte zu. Das bedeutet, dass alle nachfolgenden Operationen, die auf rezepte ausgeführt werden (z.B. Einfügen, Suchen, Aktualisieren), in der "rezepte" Collection der Datenbank erfolgen.
//const rezepte = db.getCollection("rezepte");

//------------------------------------------------

rezepte.find({}); // Findet alle Dokumente in der "rezepte"-Collection

// rezepte.insertOne({ titel: "Erdbeer Eton Mess", zutaten: [...] }); // Fügt ein neues Rezept hinzu

// rezepte.findOne(ObjectId("......."));

rezepte.findOne({
    titel: "Vegane Lasagne",
});

rezepte.find({
    kategorie: "Hauptgericht",
});

//finde einen authoren
rezepte.find({
    autor_id: ObjectId("6511ae27f1a1bc1d12345678"),
});

// finde die zutat lachs in gerichten
rezepte.find({
    "zutaten.name": "Lachs",
});

rezepte.find({
    "zutaten.name": { $in: ["Lachs", "Hähnchen"] },
});

// zeige bewertungen mit mehr als 3 und weniger als 5 *
rezepte.find({
    "bewertungen.bewertung": { $gte: 3, $lte: 5 },
});

// $ne: gibt alle rezepte zurück bei denen die bewertung nicht 3 sterne ist.
ezepte.find({
    "bewertungen.bewertung": { $ne: 3 },
});

// zeige rez mit mehr als 2 bewertungen( weil start 0 ist dh mindestens 3 beweertungen )
rezepte.find({
    "bewertungen.2": { $exists: true },
});

// $lt = weniger als
rezepte.find({
    zubereitungsdauer: { $lt: 20 },
});

// $gt = größer als
rezepte.find({
    zubereitungsdauer: { $gt: 25 },
});

rezepte.find({
    zubereitungsdauer: { $gt: 20, $lt: 45 },
});

// suche nach bestimmten komments von usern
rezepte.find({
    "kommentare.benutzer_id": ObjectId("6511b828f1a1bc1d87654321"),
});

// nach bestimmten datum suchen
rezepte.find({
    erstellt_am: { $gte: ISODate("2000-09-01T00:00:00Z") },
});

// suche nach user mit mehr als 5 rezepten
benutzer.find({
    "rezeptebuch.5": { $exists: true },
});

// nach allen benutzer suchen, die "kochmeister123" (der nutzer mit der ID "6511ae27f1a1bc1d12345678") folgen.
benutzer.find({
    folge_benutzer: ObjectId("6511ae27f1a1bc1d12345678"),
});

//----------------------------

//-----help-------

//Zugriff auf DBRef:

// MongoDB kann DBRef-Verweise auflösen, aber es erfordert eine manuelle Nachverfolgung der Verweise. Du musst also in deinem Code (z.B. in einer Node.js-Anwendung) die referenzierte Collection abfragen, um die vollständigen Daten des referenzierten Dokuments zu erhalten. Zum Beispiel könntest du das Rezept nach seiner ID suchen:

// const rezepteCollection = db.getCollection("rezepte");
// const bewertungMitRezept = db.getCollection("bewertungen").findOne({_id: ObjectId("6537be27f1a1bc1d87654321")});

// // Zugriff auf das referenzierte Rezept
// const referenziertesRezept = rezepteCollection.findOne({_id: bewertungMitRezept.rezept.$id});

//----------------------------

// vollständiger rezeptbuch eintrag

db.rezepte.insertOne({
    titel: "Lachs Tagliatelle mit Zitronensoße",
    kategorien: ["Mittagessen", "Pasta", "Schenll"],
    beschreibung: "Ein köstliches Nudelgericht mit frischem Lachs und einer cremigen Zitronensoße.",
    zutaten: [
        { name: "Tagliatelle", menge: "200g" },
        { name: "Lachsfilet", menge: "150g" },
        { name: "Zitrone", menge: "1 Stück" },
        { name: "Sahne", menge: "100ml" },
        { name: "Petersilie", menge: "2 EL" },
        { name: "Olivenöl", menge: "1 EL" },
    ],
    anweisungen:
        "1. Die Tagliatelle nach Packungsanweisung kochen. 2. Den Lachs in Olivenöl anbraten. 3. Sahne und Zitronensaft hinzufügen und aufkochen. 4. Mit Salz und Pfeffer würzen und die Nudeln unterheben. 5. Mit Petersilie garnieren.",
    bilder: [
        "https://example.com/images/lachs_tagliatelle1.jpg",
        "https://example.com/images/lachs_tagliatelle2.jpg",
    ],
    autor_id: ObjectId("6511ae27f1a1bc1d12345678"),
    bewertungen: [
        {
            benutzer_id: ObjectId("6511b828f1a1bc1d87654321"),
            bewertung: 4,
            kommentar: "Lecker, aber hätte etwas mehr Zitronengeschmack vertragen können.",
            datum: ISODate("2024-09-24T11:15:10Z"),
        },
        {
            benutzer_id: ObjectId("6511c728f1a1bc1d11223344"),
            bewertung: 5,
            kommentar: "Perfekt, werde es wieder kochen!",
            datum: ISODate("2024-09-25T09:30:45Z"),
        },
    ],
    kommentare: [
        {
            benutzer_id: ObjectId("6511b828f1a1bc1d87654321"),
            kommentar: "Tolles Rezept, danke fürs Teilen!",
            datum: ISODate("2024-09-24T10:45:00Z"),
        },
        {
            benutzer_id: ObjectId("6511b828f1a1bc1d87654666"),
            kommentar:
                "Hey ObjectID('6511b828f1a1bc1d87654666') benutz doch einach das nächste mal etwas mehr zitrone!",
            datum: ISODate("2024-09-24T10:45:00Z"),
        },
    ],
    erstellt_am: ISODate("2024-09-22T13:40:00Z"),
});

// inkl. refeerenzierung auf andere user und vorhergehende kommentare

//----------------------------

db.rezepte.insertOne({
    titel: "Spaghetti Carbonara",
    kategorien: ["Hauptgericht", "Pasta"],
    kurzbeschreibung: "Ein klassisches italienisches Nudelgericht mit Speck und Ei.",
    zutaten: [
        { name: "Spaghetti", menge: "400g" },
        { name: "Speck", menge: "150g" },
        { name: "Eier", menge: "4" },
        { name: "Parmesan", menge: "50g" },
        { name: "Pfeffer", menge: "nach Geschmack" },
    ],
    anleitung: [
        "Schritt 1: Spaghetti in Salzwasser kochen.",
        "Schritt 2: Speck anbraten, Eier mit Parmesan mischen.",
        "Schritt 3: Spaghetti abgießen und mit der Eimischung vermengen.",
        "Schritt 4: Mit Pfeffer und Parmesan servieren.",
    ],
    zubereitungsdauer: 20,
    schwierigkeitsgrad: "Einfach",
    bewertungen: [],
    kommentare: [],
});

db.rezepte.insertOne({
    titel: "Vegane Buddha Bowl",
    kategorien: ["Vegan", "Salat"],
    kurzbeschreibung: "Eine gesunde und ausgewogene Schüssel mit vielen frischen Zutaten.",
    zutaten: [
        { name: "Quinoa", menge: "200g" },
        { name: "Süßkartoffel", menge: "1" },
        { name: "Kichererbsen", menge: "1 Dose" },
        { name: "Avocado", menge: "1" },
        { name: "Spinat", menge: "100g" },
        { name: "Tahini-Sauce", menge: "2 EL" },
    ],
    anleitung: [
        "Schritt 1: Quinoa kochen und abkühlen lassen.",
        "Schritt 2: Süßkartoffel im Ofen backen.",
        "Schritt 3: Kichererbsen rösten.",
        "Schritt 4: Alles zusammen mit Spinat und Avocado in einer Schüssel anrichten.",
        "Schritt 5: Mit Tahini-Sauce servieren.",
    ],
    zubereitungsdauer: 35,
    schwierigkeitsgrad: "Einfach",
    bewertungen: [],
    kommentare: [],
});

db.rezepte.insertOne({
    titel: "Schoko-Bananen-Smoothie",
    kategorien: ["Getränk", "Smoothie"],
    kurzbeschreibung: "Ein cremiger und süßer Smoothie mit Schokolade und Banane.",
    zutaten: [
        { name: "Banane", menge: "2" },
        { name: "Kakaopulver", menge: "2 EL" },
        { name: "Mandeldrink", menge: "250ml" },
        { name: "Erdnussbutter", menge: "1 EL" },
    ],
    anleitung: [
        "Schritt 1: Bananen schälen und in den Mixer geben.",
        "Schritt 2: Kakaopulver, Mandeldrink und Erdnussbutter hinzufügen.",
        "Schritt 3: Alles gut mixen und kalt servieren.",
    ],
    zubereitungsdauer: 5,
    schwierigkeitsgrad: "Einfach",
    bewertungen: [],
    kommentare: [],
});

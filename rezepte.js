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

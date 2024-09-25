nachdem wir uns die aufgabenstellung verdeutlicht haben...

beginne ich nun indem eine test.json erstelle und dort mein chema ausprobiere:

id wird automatisch erstellt daher brauche ich nur schlüsselwertepärchen bilden oder kann

person:{
name:harun
alter:11.02.1999
herkunft:indien
}

bsp für ein benutzer chema:

{
"\_id": ObjectId("..."),
"name": "Emil Sinclair",
"profiltext": "Über mich..., geboren am 2. 7. 1877 in Calw (Württemberg), gestorben am 9. 8. 1962 in Montagnola (Tessin). Hesse verbrachte den Großteil seiner Kindheit in Basel. Von seinem Vater für die Theologenlaufbahn bestimmt, trat er 1891 in das evangelische Kloster Maulbronn ein, aus dem er neun Monate später flüchtete. Nach einer Buchhändlerlehre in Tübingen kehrte er nach Basel zurück, wo seine ersten literarischen Werke erschienen. Geprägt vom Gelehrtentum seiner Vorfahren und deren Missionarstätigkeit in Indien, wirkte sich in seinem umfangreichen Werk seine Beschäftigung mit der ostasiatischen Kultur, dem Buddhismus und Taoismus, aus, insbesondere in seinen bekanntesten Romanen "Siddhartha", "Steppenwolf" und "Das Glasperlenspiel". Nach dem Ausbruch des Ersten Weltkriegs erschienen seine völkerversöhnenden politischen Aufsätze und offenen Briefe in Zeitungen und Zeitschriften des deutschsprachigen Raumes. Ab 1917 war er auch als Maler erfolgreich. Von 1919 bis zu seinem Tod in Montagnola im Tessin lebend, wurde er 1924 Staatsbürger der Schweiz. 1946 erhielt Hesse den Nobelpreis für Literatur, dem zahlreiche weitere Preise folgten",
"geburtstag": "1877-07-02",
"links": {
"github": "https://github.com/DBaku",
"instagram": "https://www.instagram.com/db.art.studios/",
"wikipedia": "https://de.wikipedia.org/wiki/Hermann_Hesse"
},
"followers": [ ObjectId("...") ],
"following": [ ObjectId("...") ],
"rezeptbuch": [ ObjectId("...") ] // maximal 100 Rezepte
}

---

---

-   bsp für ein rezept chema:

{
"\_id": ObjectId("..."),

"titel": "Rezeptname",
"kategorien": ["Hauptgericht", "Vegan"],
"kurzbeschreibung": "Kurze Beschreibung des Rezepts...",
"zutaten": [
{ "name": "Zutat", "menge": "200g" },
{ "name": "Zutat", "menge": "1 TL" }
],
"anleitung": [
"Schritt 1: Mach dies...",
"Schritt 2: Mach das..."
],
"zubereitungsdauer": 30, // in Minuten
"schwierigkeitsgrad": "Mittel", // Einfach, Mittel, Schwer
"bewertungen": [
{
"benutzerId": ObjectId("..."),
"bewertung": 4 // Bewertung zwischen 1 und 5 Sternen
}
],
"kommentare": [
{
"benutzerId": ObjectId("..."),
"text": "Tolles Rezept!",
"datum": ISODate("2024-09-24T12:34:56Z")
}
]
}

---

---

Um einen Benutzer zu aktualisieren:

    db.benutzer.updateOne({ name: "Max Mustermann" }, { $set: { profiltext: "Ich bin ein leidenschaftlicher Koch!" } })

---

---

## unsere heutigen inserts und abfragen +-

weitere inserts in meiner rezepte collection zu finden in wp10

// Select the database to use.
use("wp10");

const benutzer = db.getCollection("benutzer");

// benutzer.findOne(ObjectId("66f3c627fff6a115dd5aeb91"));

const rezepte = db.getCollection("rezepte");

// // rezepte.findOne(ObjectId(""));

// rezepte.findOne({
// titel: "Vegane Lasagne",
// });

// rezepte.find({
// zubereitungsdauer: { $gt: 35 },
// });
// rezepte.find({
// zubereitungsdauer: { $lt: 35 },
// });

// ---inserts------

db.rezepte.insertOne({
titel: "Beef Wellington",
kategorien: ["Hauptgericht", "Fleisch"],
kurzbeschreibung:
"Ein aufwendig zubereitetes Gericht mit Rinderfilet, umhüllt von Blätterteig.",
zutaten: [
{ name: "Rinderfilet", menge: "1kg" },
{ name: "Blätterteig", menge: "500g" },
{ name: "Champignons", menge: "300g" },
{ name: "Schinken", menge: "200g" },
{ name: "Senf", menge: "2 EL" },
{ name: "Eigelb", menge: "1" },
{ name: "Olivenöl", menge: "2 EL" },
],
anleitung: [
"Schritt 1: Das Rinderfilet scharf anbraten und mit Senf bestreichen.",
"Schritt 2: Champignons fein hacken und anbraten.",
"Schritt 3: Schinken auf Klarsichtfolie legen, die Champignons darauf verteilen und das Filet darin einwickeln.",
"Schritt 4: Den Blätterteig ausrollen und das eingewickelte Filet darin einschlagen.",
"Schritt 5: Blätterteig mit Eigelb bestreichen und im Ofen bei 200°C für 30 Minuten backen.",
],
zubereitungsdauer: 90,
schwierigkeitsgrad: "Schwer",
bewertungen: [],
kommentare: [],
});

// db.rezepte.insertOne({
// titel: "Süßkartoffel Pommes",
// kategorien: ["Hauptgericht", "Deftig"],
// kurzbeschreibung:
// "gesunde Süßkartoffel Pommes nach art desd Hauses mit Cajenpfeffer und ketchub+ Majo.",
// zutaten: [
// { name: "Süßkartoffel", menge: "450g" },
// { name: "Oliven Oil", menge: "50ml" },
// { name: "Pfeffer", menge: "nach Geschmack" },
// { name: "Salz", menge: "nach Geschmack" },
// ],
// anleitung: [
// "Schritt 1: Kartoffeln schneiden und anbraten.",
// "Schritt 2: Cajenpfeffer hinzugeben und servieren.",
// ],
// zubereitungsdauer: 30,
// schwierigkeitsgrad: "Sehr leicht",
// bewertungen: [],
// kommentare: [],
// });

// db.benutzer.insertOne({
// name: "lax lustermann",
// profiltext: "Ich hasse kochen!",
// geburtstag: "1998-12-11",
// links: { facebook: "https://facebook.com/lax", instagram: "https://instagram.com/lax" },
// followers: [],
// following: [],
// rezeptbuch: [],
// });

// ----------------------

// Insert a few documents into the sales collection.
// db.getCollection("sales").insertMany([
// { item: "abc", price: 10, quantity: 2, date: new Date("2014-03-01T08:00:00Z") },
// { item: "jkl", price: 20, quantity: 1, date: new Date("2014-03-01T09:00:00Z") },
// { item: "xyz", price: 5, quantity: 10, date: new Date("2014-03-15T09:00:00Z") },
// { item: "xyz", price: 5, quantity: 20, date: new Date("2014-04-04T11:21:39.736Z") },
// { item: "abc", price: 10, quantity: 10, date: new Date("2014-04-04T21:23:13.331Z") },
// { item: "def", price: 7.5, quantity: 5, date: new Date("2015-06-04T05:08:13Z") },
// { item: "def", price: 7.5, quantity: 10, date: new Date("2015-09-10T08:43:00Z") },
// { item: "abc", price: 10, quantity: 5, date: new Date("2016-02-06T20:20:13Z") },
// ]);

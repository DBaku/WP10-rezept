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

db.schauspieler.insertMany([
// {
// name: "Leonardo DiCaprio",
// kategorien: ["Drama", "Thriller"],
// kurzbeschreibung:
// "Oscar-prämierter Schauspieler der bekannt für ist seine Filme wie'Inception & Wolf of of Wallstreet'.",
// bekannte_filme: [
// { titel: "Inception", jahr: 2010 },
// { titel: "Titanic", jahr: 1997 },
// { titel: "The Revenant", jahr: 2015 },
// { titel: "Wolf of Wallstreet", jahr: 2014 },
// ],
// bewertungen: [],
// kommentare: [],
// },
// {
// name: "Meryl Streep",
// kategorien: ["Drama", "Biografie"],
// kurzbeschreibung:
// "Mehrfach oscarprämierte Schauspielerin, bekannt für Filme wie 'Die Eiserne Lady' und 'Mamma Mia!'.",
// bekannte_filme: [
// { titel: "Die Eiserne Lady", jahr: 2011 },
// { titel: "Der Teufel trägt Prada", jahr: 2006 },
// { titel: "Mamma Mia!", jahr: 2008 },
// ],
// bewertungen: [],
// kommentare: [],
// },
// {
// name: "Denzel Washington",
// kategorien: ["Drama", "Action"],
// kurzbeschreibung:
// "Charismatischer Schauspieler, bekannt für 'Training Day' und 'The Equalizer'.",
// bekannte_filme: [
// { titel: "Training Day", jahr: 2001 },
// { titel: "The Equalizer", jahr: 2014 },
// { titel: "Fences", jahr: 2016 },
// ],
// bewertungen: [],
// kommentare: [],
// },
// {
// name: "Scarlett Johansson",
// kategorien: ["Action", "Science-Fiction"],
// kurzbeschreibung:
// "Bekannt für ihre Rollen im Marvel Cinematic Universe und 'Lost in Translation'.",
// bekannte_filme: [
// { titel: "Avengers: Endgame", jahr: 2019 },
// { titel: "Lost in Translation", jahr: 2003 },
// { titel: "Lucy", jahr: 2014 },
// ],
// bewertungen: [],
// kommentare: [],
// },
// {
// name: "Brad Pitt",
// kategorien: ["Action", "Drama"],
// kurzbeschreibung: "Bekannt für 'Fight Club' und 'Once Upon a Time in Hollywood'.",
// bekannte_filme: [
// { titel: "Fight Club", jahr: 1999 },
// { titel: "Once Upon a Time in Hollywood", jahr: 2019 },
// { titel: "World War Z", jahr: 2013 },
// ],
// bewertungen: [],
// kommentare: [],
// },
// {
// name: "Tom Hanks",
// kategorien: ["Drama", "Komödie"],
// kurzbeschreibung: "Legendärer Schauspieler, bekannt für 'Forrest Gump' und 'Cast Away'.",
// bekannte_filme: [
// { titel: "Forrest Gump", jahr: 1994 },
// { titel: "Cast Away", jahr: 2000 },
// { titel: "Der Soldat James Ryan", jahr: 1998 },
// ],
// bewertungen: [],
// kommentare: [],
// },
// ]);

// db.rezepte.insertOne({
// titel: "Zucchini-Nudeln mit Pesto",
// kategorien: ["Mittagessen", "Low Carb", "Gesund", "Schenll"],
// kurzbeschreibung:
// "Ein leichtes und schnelles Gericht mit Zucchini-Nudeln und hausgemachtem Pesto.",
// zutaten: [
// { name: "Zucchini", menge: "2" },
// { name: "Basilikum", menge: "1 Bund" },
// { name: "Knoblauch", menge: "1 Zehe" },
// { name: "Pinienkerne", menge: "2 EL" },
// { name: "Parmesan", menge: "30g" },
// { name: "Olivenöl", menge: "3 EL" },
// ],
// anleitung: [
// "Schritt 1: Zucchini mit einem Spiralschneider in Nudelform schneiden.",
// "Schritt 2: Basilikum, Knoblauch, Pinienkerne, Parmesan und Olivenöl im Mixer zu Pesto verarbeiten.",
// "Schritt 3: Zucchini-Nudeln in eine Pfanne geben und kurz erwärmen.",
// "Schritt 4: Pesto darüber geben und sofort servieren.",
// ],
// zubereitungsdauer: 15,
// schwierigkeitsgrad: "Einfach",
// bewertungen: [],
// kommentare: [],
// });

// db.rezepte.insertOne({
// titel: "Schneller Linsensalat",
// kategorien: ["Mittagessen", "Vegetarisch", "Gesund", "Schnell"],
// kurzbeschreibung: "Ein frischer und proteinreicher Salat mit Linsen und frischem Gemüse.",
// zutaten: [
// { name: "Linsen (vorgekocht)", menge: "200g" },
// { name: "Paprika", menge: "1" },
// { name: "Gurke", menge: "1/2" },
// { name: "Zwiebel", menge: "1/2" },
// { name: "Petersilie", menge: "1 Bund" },
// { name: "Olivenöl", menge: "2 EL" },
// { name: "Zitronensaft", menge: "2 EL" },
// ],
// anleitung: [
// "Schritt 1: Paprika, Gurke und Zwiebel klein schneiden.",
// "Schritt 2: Linsen abspülen und mit dem Gemüse mischen.",
// "Schritt 3: Mit Olivenöl, Zitronensaft und gehackter Petersilie abschmecken.",
// "Schritt 4: Gut vermengen und sofort servieren.",
// ],
// zubereitungsdauer: 10,
// schwierigkeitsgrad: "Einfach",
// bewertungen: [],
// kommentare: [],
// });

// db.rezepte.insertOne({
// titel: "Quinoa-Gemüse-Bowl",
// kategorien: ["Mittagessen", "Vegan", "Gesund", "Schnell"],
// kurzbeschreibung: "Eine nährstoffreiche Bowl mit Quinoa und frischem Gemüse.",
// zutaten: [
// { name: "Quinoa", menge: "100g" },
// { name: "Avocado", menge: "1" },
// { name: "Gurke", menge: "1/2" },
// { name: "Kirschtomaten", menge: "100g" },
// { name: "Spinat", menge: "50g" },
// { name: "Olivenöl", menge: "1 EL" },
// { name: "Zitronensaft", menge: "1 EL" },
// ],
// anleitung: [
// "Schritt 1: Quinoa nach Packungsanweisung kochen.",
// "Schritt 2: Gemüse klein schneiden und Avocado in Scheiben schneiden.",
// "Schritt 3: Quinoa in eine Schüssel geben, mit Gemüse und Spinat belegen.",
// "Schritt 4: Mit Olivenöl und Zitronensaft beträufeln und sofort servieren.",
// ],
// zubereitungsdauer: 15,
// schwierigkeitsgrad: "Einfach",
// bewertungen: [],
// kommentare: [],
// });

// db.rezepte.insertOne({
// titel: "Mango Lassi",
// kategorien: ["Getränk", "Shake"],
// kurzbeschreibung: "Ein erfrischendes indisches Getränk mit Mango und Joghurt.",
// zutaten: [
// { name: "Mango", menge: "1" },
// { name: "Joghurt", menge: "200ml" },
// { name: "Milch", menge: "100ml" },
// { name: "Honig", menge: "1 EL" },
// { name: "Kardamom", menge: "1 Prise" },
// ],
// anleitung: [
// "Schritt 1: Mango schälen und das Fruchtfleisch vom Kern schneiden.",
// "Schritt 2: Mango, Joghurt, Milch, Honig und Kardamom in einen Mixer geben und gut mixen.",
// "Schritt 3: Kalt servieren und genießen.",
// ],
// zubereitungsdauer: 10,
// schwierigkeitsgrad: "Einfach",
// bewertungen: [],
// kommentare: [],
// });

// db.rezepte.insertOne({
// titel: "Bananen-Schoko-Shake",
// kategorien: ["Getränk", "Shake"],
// kurzbeschreibung: "Ein erfrischender Shake mit Banane und Schokolade.",
// zutaten: [
// { name: "Banane", menge: "2" },
// { name: "Kakaopulver", menge: "2 EL" },
// { name: "Milch", menge: "250ml" },
// { name: "Eiswürfel", menge: "4" },
// ],
// anleitung: [
// "Schritt 1: Bananen schälen und zusammen mit den anderen Zutaten in einen Mixer geben.",
// "Schritt 2: Alles gut mixen, bis der Shake cremig ist.",
// "Schritt 3: In einem Glas servieren und kalt genießen.",
// ],
// zubereitungsdauer: 5,
// schwierigkeitsgrad: "Einfach",
// bewertungen: [],
// kommentare: [],
// });

// db.rezepte.insertOne({
// titel: "Bauerntopf",
// kategorien: ["Eintopf", "Hausmannskost"],
// kurzbeschreibung: "Ein deftiger Eintopf mit Hackfleisch, Kartoffeln und Gemüse.",
// zutaten: [
// { name: "Hackfleisch", menge: "500g" },
// { name: "Kartoffeln", menge: "700g" },
// { name: "Paprika", menge: "2" },
// { name: "Zwiebeln", menge: "2" },
// { name: "Tomatenmark", menge: "2 EL" },
// { name: "Rinderbrühe", menge: "500ml" },
// { name: "Rotwein Merlot", menge: "200ml - 300ml" },
// ],
// anleitung: [
// "Schritt 1: Kartoffeln schälen und in Würfel schneiden.",
// "Schritt 2: Hackfleisch in einem großen Topf anbraten.",
// "Schritt 3: Zwiebeln und Paprika hinzufügen und mit Tomatenmark anrösten.",
// "Schritt 4: Kartoffeln, Rotwein und Brühe hinzufügen, alles köcheln lassen, bis die Kartoffeln weich sind.",
// "Schritt 5: Mit Salz, Pfeffer und Paprika abschmecken und eventuell etwas schmand dazu.",
// ],
// zubereitungsdauer: 50,
// schwierigkeitsgrad: "Mittel",
// bewertungen: ["", ],
// kommentare: [],
// });

// db.rezepte.insertOne({
// titel: "Lachs Tagliatelle mit Zitronensoße",
// kategorien: ["Hauptgericht", "Pasta"],
// kurzbeschreibung: "Tagliatelle mit frischem Lachs und einer cremigen Zitronen-Sahne-Soße.",
// zutaten: [
// { name: "Tagliatelle", menge: "300g" },
// { name: "Lachsfilet", menge: "200g" },
// { name: "Zitrone", menge: "1" },
// { name: "Sahne", menge: "200ml" },
// { name: "Knoblauch", menge: "1 Zehe" },
// { name: "Olivenöl", menge: "2 EL" },
// ],
// anleitung: [
// "Schritt 1: Tagliatelle in Salzwasser al dente kochen.",
// "Schritt 2: Lachs in Würfel schneiden und in einer Pfanne mit Olivenöl anbraten.",
// "Schritt 3: Knoblauch hinzufügen und kurz mitbraten.",
// "Schritt 4: Sahne und den Saft einer Zitrone hinzufügen, kurz aufkochen.",
// "Schritt 5: Tagliatelle unter die Soße mischen und sofort servieren.",
// ],
// zubereitungsdauer: 25,
// schwierigkeitsgrad: "Mittel",
// bewertungen: [],
// kommentare: [],
// });

// db.rezepte.insertOne({
// titel: "Big King XXL Menü",
// kategorien: ["Fast Food", "Burger", "Favorite"],
// kurzbeschreibung: "Ein großer, saftiger Doppelburger mit Käse, Zwiebeln und Big King Sauce.",
// zutaten: [
// { name: "Rindfleischpattys", menge: "2" },
// { name: "Käse", menge: "2 Scheiben" },
// { name: "Zwiebeln", menge: "1" },
// { name: "Salat", menge: "2 Blätter" },
// { name: "Big King Sauce", menge: "4 EL" },
// { name: "Hamburger-Brötchen", menge: "1" },
// { name: "Pommes-frites", menge: "300g" },
// ],
// anleitung: [
// "Schritt 1: Burgerpattys in einer Pfanne oder auf dem Grill anbraten.",
// "Schritt 2: Zwiebeln in Ringe schneiden und ebenfalls anbraten.",
// "Schritt 3: Hamburger-Brötchen toasten und die Big King Sauce auf beide Hälften verteilen.",
// "Schritt 4: Käse auf die Pattys legen, dann mit Zwiebeln und Salat belegen.",
// "Schritt 5: Alles zusammenfügen und mit Pommes servieren.",
// ],
// zubereitungsdauer: 30,
// schwierigkeitsgrad: "Mittel",
// bewertungen: [],
// kommentare: [],
// });

// db.rezepte.insertOne({
// titel: "Erdbeer Eton Mess",
// kategorien: ["Dessert"],
// kurzbeschreibung:
// "Ein einfaches, sommerliches Dessert mit frischen Erdbeeren, Baiser und Sahne.",
// zutaten: [
// { name: "Erdbeeren", menge: "300g" },
// { name: "Baiser", menge: "100g" },
// { name: "Schlagsahne", menge: "250ml" },
// { name: "Vanillezucker", menge: "1 Päckchen" },
// ],
// anleitung: [
// "Schritt 1: Erdbeeren waschen und in kleine Stücke schneiden.",
// "Schritt 2: Schlagsahne mit Vanillezucker steif schlagen.",
// "Schritt 3: Baiser zerbröseln und unter die Sahne mischen.",
// "Schritt 4: Erdbeeren vorsichtig unterheben und sofort servieren.",
// ],
// zubereitungsdauer: 10,
// schwierigkeitsgrad: "Einfach",
// bewertungen: [],
// kommentare: [],
// });

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

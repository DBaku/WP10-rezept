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

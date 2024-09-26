# Abfrage- und Projektionsoperatoren

## Hinweis

Für Details zu einem bestimmten Operator, einschließlich Syntax und Beispielen, Klicken Sie auf den Link zur Referenzseite des Betreibers.

## Kompatibilität

Sie können verwenden Abfrage- und Projektionsoperatoren für Bereitstellungen, die im Folgenden gehostet werden Umgebungen:

MongoDB-Atlas: Das vollständig Managed Service für MongoDB-Bereitstellungen in der Cloud

MongoDB Enterprise: Das Abonnementbasierte, selbstverwaltete Version von MongoDB

MongoDB Community: Das Quellverfügbare, kostenlose und selbstverwaltete Version von MongoDB

Trinkgeld
Sie können Operatoren verwenden, wenn Sie Ihre Daten abfragen mit mongosh Methoden, die Atlas UI, oder Kompass.

### Abfrageauswahl

---

---

---

## Vergleich

Zum Vergleich verschiedener BSON-Typwerte siehe die angegeben BSON Vergleichsreihenfolge.

-   $expr
    Ermöglicht die Verwendung von Aggregationsausdrücken innerhalb der Abfragesprache.

-   $jsonSchema
    Überprüfen Sie Dokumente gegen das gegebene JSON-Schema.

-   $mod
    Führt einen Modulovorgang für den Wert eines Feldes aus und wählt Dokumente mit einem bestimmten Ergebnis aus.

-   $regex
    Wählt Dokumente aus, in denen Werte mit einem bestimmten regulären Ausdruck übereinstimmen.

-   $text
    Führt die Textsuche durch.

## Hinweis

-   $text
    bietet Textabfragefunktionen für die Selbstverwaltung (Nicht-Atlas-) Bereitstellungen. Für Daten, die auf MongoDB Atlas gehostet werden, MongoDB bietet eine verbesserte Volltextabfragelösung, Atlas Suche.

-   $where
    Passt zu Dokumenten, die einen JavaScript-Ausdruck erfüllen.

---

---

## Geospatial

-   $geoIntersects
    Wählt Geometrien aus, die sich mit a schneiden GeoJSON Geometrie. Das 2dsphere Index unterstützt $geoIntersects.

-   $geoWithin
    Wählt Geometrien innerhalb einer Grenze aus GeoJSON-Geometrie. Das 2dsphere und 2d Indexunterstützung $geoWithin.

-   $near
    Gibt Geodaten in der Nähe eines Punktes zurück. Benötigt einen Geodeindex. Das 2dsphere und 2d Indexunterstützung $near.

-   $nearSphere
    Gibt Geodaten in der Nähe eines Punktes auf einer Kugel zurück. Benötigt einen Geodeindex. Das 2dsphere und 2d Indexunterstützung $nearSphere.

---

---

## Array

-   $all
    Stimmt mit Arrays überein, die alle in der Abfrage angegebenen Elemente enthalten.

-   $elemMatch
    Wählt Dokumente aus, wenn das Element im Array-Feld mit allen angegebenen übereinstimmt $elemMatch Bedingungen.

-   $size
    Wählt Dokumente aus, wenn das Array-Feld eine bestimmte Größe hat.

---

---

## Bitweise

-   $bitsAllClear
    Passt zu numerischen oder binären Werten, in denen eine Reihe von Bitpositionen steht alles einen Wert von haben 0.

-   $bitsAllSet
    Passt zu numerischen oder binären Werten, in denen eine Reihe von Bitpositionen steht alles einen Wert von haben 1.

-   $bitsAnyClear
    Entspricht numerischen oder binären Werten, in denen irgendwelche Bit aus einer Reihe von Bitpositionen hat den Wert von 0.

-   $bitsAnySet
    Entspricht numerischen oder binären Werten, in denen irgendwelche Bit aus einer Reihe von Bitpositionen hat den Wert von 1.

---

---

## Projektionsoperatoren

-   $
    Projiziert das erste Element in einem Array, das der Abfragebedingung entspricht.

-   $elemMatch
    Projiziert das erste Element in einem Array, das mit dem angegebenen übereinstimmt $elemMatch Bedingung.

-   $meta
    Projiziert die während des $text Betrieb.

---

---

## Hinweis

-   $text bietet Textabfragefunktionen für die Selbstverwaltung (Nicht-Atlas-)
    Bereitstellungen. Für Daten, die auf MongoDB Atlas gehostet werden, MongoDB bietet eine verbesserte Volltextabfragelösung, Atlas Suche.

-   $slice
    Begrenzt die Anzahl der von einem Array projizierten Elemente. Unterstützt überspringen und begrenzen Sie Scheiben.

---

---

## Verschiedene Betreiber

-   $comment
    Fügt einem Abfrageprädikat einen Kommentar hinzu.

-   $rand
    Erzeugt einen zufälligen Schwimmer zwischen 0 und 1.

---------------------------Ende---------------------

# Parken und Belege — Web-App

## Enthalten in dieser Version
- Parkscheine erfassen (Foto + automatische Texterkennung mit Bestätigung, manuell nachbearbeitbar)
- **Foto-Ausrichtung wird automatisch korrigiert** (behebt das Problem gedreht angezeigter Fotos) und **manueller Zuschnitt-Dialog** direkt nach der Aufnahme, damit nur der eigentliche Beleg erfasst wird
- **Sprachnotizen**: Optionale Sprachaufnahme zu Parkscheinen und Nebenkosten, direkt in der Liste abspielbar (z. B. praktisch während der Fahrt, ohne zu tippen)
- **Eigenständiger "Notizen"-Reiter**: Freie Sprachnotizen unabhängig von Parkscheinen/Belegen, mit optionalem Titel
- Nebenkosten mit Kategorien (Betriebsmittel, Spesen, Hotelrechnung + eigene, **umbenennbar und löschbar**) und Notizen
- Fahrten-Modul: Kilometererfassung (Von/Nach/Zweck/km), automatische Berechnung mit Kilometerpauschale (voreingestellt 0,30 €/km, anpassbar)
- **Kilometerstand-Modul** (dritte Option im "Kosten"-Bereich): Kilometerstand mit Datum, **optionalem Foto** und optionalem Ort/Anlass (z. B. beim Tanken) erfassen, Standort wird automatisch erfasst und auf der Karte angezeigt
- Bearbeiten & Löschen von Einträgen (Parkscheine, Nebenkosten, Fahrten)
- Such-/Filterfunktion in beiden Bereichen
- **Duplikat-Warnung**: Warnt beim Speichern, falls am selben Tag bereits ein Eintrag mit demselben Betrag existiert (z. B. wenn ein Beleg versehentlich zweimal fotografiert wird)
- **Monatsauswahl mit Vor-/Zurück-Pfeilen** – Auswertung und PDF-Export sind für jeden vergangenen Monat einzeln möglich, nicht nur den aktuellen
- Monats- und Jahresübersicht (umschaltbar) mit Ausgabenverlauf-Diagramm, inkl. Fahrten
- **Individuell antippbare Auswahl** (Parkscheine/Nebenkosten/Fahrten), was im PDF/CSV-Export enthalten sein soll
- PDF-Export (mit eingebetteten Belegbildern im korrekten Seitenverhältnis) für Monat und Jahr, sowie CSV-Export für Excel/Buchhaltung – beide über einen zweistufigen "Erstellen → Speichern/Teilen"-Ablauf, der zuverlässig den nativen iOS-Teilen-Dialog öffnet (dort "In Dateien sichern" wählbar, beliebiger Zielordner)
- **Vollständiges Backup (JSON)**: enthält wirklich alles inkl. Fotos und Sprachnotizen, dazu passende **Backup-Importieren-Funktion** zum 1:1-Wiederherstellen (z. B. nach Datenverlust oder auf einem neuen Gerät)
- **Excel-Export (.xlsx)**: formatierte Datei mit eigenen Tabellenblättern pro Bereich und Summenzeilen, als Alternative zum reinen CSV. **Kategorien und Zeitraum (Monat) auswählbar**, mit **Tabellen-Vorschau** vor dem eigentlichen Erstellen
- Backup-Erinnerung, wenn seit 14 Tagen kein Export gemacht wurde
- Karte mit zuletzt erfasstem Parkort (OpenStreetMap)
- Dark Mode (Symbol oben rechts in jedem Bildschirm)
- Impressum- und Datenschutz-Seiten direkt in der App (Link unten auf der Startseite) — bitte deine Kontaktdaten in `impressum.html` und `datenschutz.html` eintragen (Platzhalter in eckigen Klammern)
- Keine Google Fonts, ausschließlich Systemschriften (DSGVO-Risiko vermieden)
- Alles läuft offline im Browser, Daten bleiben nur auf dem Gerät (IndexedDB)

## Für die Zukunft denkbar (aktuell bewusst nicht enthalten)
- Vorder-/Rückseite eines Belegs fotografieren
- Feinere Anpassungen für sehr kleine Bildschirme
- Umfangreicheres Testen der Texterkennung mit vielen echten Parkscheinen unterschiedlicher Automaten

## Veröffentlichung auf GitHub Pages (kostenlos)

**Wichtig: Die GitHub-App (Mobile App) unterstützt aktuell KEINEN Datei-Upload.** Bitte die Schritte im **Safari-Browser** auf github.com durchführen (die App ist nur zum Erstellen des Repos brauchbar, danach bitte im Browser weitermachen).

1. Gehe in **Safari** auf **github.com** und melde dich mit deinem Account an
2. Klicke auf **"New repository"**, gib z. B. `parken-und-belege` als Namen ein, wähle **Public**, dann **"Create repository"**
3. Klicke auf **"uploading an existing file"** (oder "Add file" → "Upload files")
4. Ziehe **alle Dateien aus diesem Ordner als echte Dateien** hinein — index.html, style.css, app.js, db.js, manifest.json, sw.js, impressum.html, datenschutz.html, sowie den Ordner "icons" mit den zwei Bildern. Es reicht, die Dateien auszuwählen/hineinzuziehen; Inhalte müssen **nicht** manuell kopiert werden. Bestätige mit "Commit changes"
5. Gehe im Repository auf **Settings → Pages**
6. Unter "Branch" wähle **main** und Ordner **/ (root)**, dann **Save**
7. Nach 1–2 Minuten ist die App erreichbar unter:
   `https://DEIN-BENUTZERNAME.github.io/parken-und-belege/`

## Impressum & Datenschutz ausfüllen
Bevor du den Link teilst: Öffne `impressum.html` und `datenschutz.html` (z. B. direkt auf GitHub über den Stift/"Edit"-Button bearbeiten) und ersetze die Platzhalter in eckigen Klammern ([Vor- und Nachname] usw.) durch deine echten Angaben. Das ist unabhängig von GitHub selbst — GitHub muss nicht extra "angepasst" werden, nur der Inhalt dieser beiden Dateien.

## Nutzung auf dem iPhone
1. Link in **Safari** öffnen (wichtig: Safari, nicht Chrome — nur Safari kann PWAs auf iOS installieren)
2. Teilen-Symbol antippen → **"Zum Home-Bildschirm"**
3. Die App erscheint als eigenes Icon, öffnet sich ohne Browser-Leiste

## Wichtig zur Kamera-Berechtigung
Beim ersten Fotografieren fragt Safari nach Kamera-Zugriff — das muss erlaubt werden, sonst funktioniert das Scannen nicht.

## Backup nicht vergessen
Da die Daten nur im Browser gespeichert sind, bitte regelmäßig (die App erinnert automatisch nach 14 Tagen) über die Monatsübersicht ein CSV-Backup erstellen und sicher ablegen (z. B. per Mail an dich selbst oder in die Dateien-App).

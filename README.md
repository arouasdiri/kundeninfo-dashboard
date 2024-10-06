# Callcenter-Agent Dashboard

## Projektübersicht

Das Projekt stellt ein Dashboard für Callcenter-Agenten dar. Es zeigt relevante Kundeninformationen an, nachdem der Agent den Kundennamen eingegeben hat und das System den Kunden gefunden hat. Das Dashboard wurde mit einem klaren, benutzerfreundlichen Layout entwickelt, um die Arbeitsabläufe der Agenten zu optimieren.

## Struktur der Dateien und Ordner

- **index.html**: Haupt-Dashboard-Ansicht.
- **css/**: Enthält die CSS-Dateien zur Definition des Layouts und des Stils des Dashboards.
  - `layout.css`: Definiert die grundlegende Layoutstruktur des Dashboards.
  - `style.css`: Enthält das allgemeine Styling für Elemente und Komponenten.
- **font/**: Enthält die Schriftarten, die auf dem Dashboard verwendet werden.
- **img/**: Enthält Bilder und Videos, die als grafische Elemente verwendet werden.
- **js/script.js**: Enthält die JavaScript-Funktionalitäten für die interaktiven Elemente des Dashboards.

## Installation und Verwendung

1. **Installation**:

   - Laden Sie das Repository herunter oder klonen Sie es mit `git clone`.
   - Platzieren Sie die Dateien auf Ihrem Webserver.

2. **Starten des Dashboards**:

   - Öffnen Sie die `index.html` in einem Browser, um das Dashboard anzuzeigen.

3. **Benutzung**:
   - Geben Sie den Namen eines Kunden in das Eingabefeld ein.
   - Nach Eingabe des Namens und Bestätigung zeigt das Dashboard die zugehörigen Kundeninformationen an.

## Designentscheidungen

Das Dashboard-Design wurde unter Berücksichtigung von UX/UI-Prinzipien entwickelt:

- **Klarheit**: Die Anordnung der Elemente wurde so gestaltet, dass der Agent Informationen schnell finden kann.
- **Konsistenz**: Alle Komponenten und Stile wurden einheitlich gestaltet, um ein harmonisches Erscheinungsbild zu gewährleisten.
- **Benutzerfreundlichkeit**: Interaktive Elemente und Daten wurden so gestaltet, dass sie leicht zugänglich und verständlich sind.

## Technische Details

- **HTML**: Die Struktur des Dashboards ist in `index.html` definiert. Hier werden verschiedene Abschnitte wie Kopfzeile, Hauptinhalt und Fußzeile angelegt.
- **CSS**:
  - `layout.css` definiert das allgemeine Layout des Dashboards.
  - `style.css` wird verwendet, um Farben, Schriftarten und andere visuelle Aspekte festzulegen.
- **JavaScript**:
  - `script.js` enthält Funktionen zur Handhabung von Benutzereingaben und dynamischer Anzeige von Informationen.

## Weitere Hinweise

- Das Dashboard wurde mit dem Ziel einer Desktop-Ansicht entwickelt und ist nicht für mobile Endgeräte optimiert.
- Der Code wurde mit Blick auf Lesbarkeit und Wartbarkeit geschrieben und kann leicht erweitert oder angepasst werden.

## Verbesserungsmöglichkeiten

- **Erweiterung des Dashboards**: Hinzufügen weiterer interaktiver Elemente, wie z.B. Diagramme oder Metriken, die dem Agenten noch mehr Informationen bieten.
- **Integration**: Möglichkeit, das Dashboard mit einer Backend-Datenbank zu verbinden, um echte Kundendaten abzurufen.

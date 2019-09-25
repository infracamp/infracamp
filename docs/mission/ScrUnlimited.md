# ScrUnlimited

Massive Scale SCRUM


## Ziele

- Wissentransfer
- Abwechslung
- Kontinuierliches Refactoring
- Interdisziplinäre Projekte
- Gemeinsames unterstützen und an einem Strang ziehen
- Objektive Bewertung der Velocity



## Methode

Es existieren keine Teams und keine Abteilungen mehr. Die gesamte
Firma (30 Personen) trifft sich zur Sprintplanung. 

Teams finden sich dynamisch für einen Sprint zusammen und bearbeiten 
diese in Teams mit mindestens zwei Personen.

Gedränge: In der Sprint Planung müssen sich Teams finden und die User-Stories
akzeptieren. User-Story Bazar - Teams handeln und tauschen User Stories, die 
für sie am besten passen.

## Kanban board

### Company Board

- Die User-Stories werden mit Story-Points versehen. Ein Story-Point entspricht
  einem 4 Stunden (1/2 Manntag). 
- User stories werden accepted, bis die theoretisch maximal erreichbare Anzahl Story
  Points (Urlaub abgerechnet) erreicht ist.


### Story Team Board

- Hier werden die Tasks festgehalten, die jedes Team-Mitglied zu tun hat. 


## Rollen

### Product Owner

Halten den Kontakt zu den Product-Ownern beim Kunden oder Intern. Sie sind für den 
wirtschaftlichen Erfolg ihrer User-Stories zuständig. Sie verstehen den Kunden und
seine Anfordungen und sollten jederzeit in der Lage sein, auf Rückfragen seitens
der Entwickler zu reagieren.

Seine Aufgabe ist auch, bei den Dailys nach "kritischen" Kommentaren zu horchen.

### Story Team

Ein DevOps Team besteht aus:

- einem Story-Manager
- mindestens einem Entwickler
- und einer Fachabteilung (Marketing, Analytics)

und wird betreut durch mindestens einen Architect / Senior.

Jedes Team führt ein eigenes Scrum-Board mit Tasks. Die Tasks sollten soll spezifiziert sein,
dass bei Ausfall eines Team-Mitglieds, die anderen seine Aufgabe zumindest vorübergehend 
übernehmen können. Die Teams übernehmen 

#### Story Manager

Der Story-Manager ist für den erfolgreichen Abschluss einer User-Story verantwortlich.
Er sucht sich Entwickler, Analysten, Seniors und vereinbart die Termine sowie Räumlichkeiten
zur Durchführung. Er koordiniert die Tasks und liefert rechzeitig Feedback and die POs,
wenn ein Termin zu platze droht.

#### Entwickler

Entwickler ist jeder, der im Team ist. 

#### Architect / Senior

Der Architect/Senior ist, je bei Bedarf, bei Vorbereitung, Planung und bei Rückfragen des Teams präsent. Seine
Aufgabe ist es, die technische Sicht auf die Story zu vertreten und das Team bei der
Dürchführung zu unterstützen. Seine Aufgabe ist Fragen zu stellen. 

Durch Pair-Programming vermittelt er seine Erfahrung an das Team und sammelt Verbesserungen
für das Framework ein und vermittelt gleichzeitig sein Know How an die nächste Generation.

Der Senior ist die letzte Rettung, sollte ein Sprint doch nicht erfolgreich abgeschlossen
werden können.

Zu den Aufgaben des Seniors gehört auch, komplexe Themen zu bearbeiten und im Steering
Commitee die Ausrichtung der Plattform zu verhandeln. Außerdem sorgen die Seniors dafür, dass
die SLAs eingehalten werden können.



## Events

### Company-Daily 

- Aus jedem Story-Team berichtet mindestens einer über den Arbeitsfortstritt. Company Daily
  ist täglich um 11:00. Der Termin ist fix und wird nicht verschoben. Wer nicht da ist, ist
  nicht da. (Dauer: Max 15 Min).
  Das Company Daily sollte zentrale Anlaufstelle sein, falls ein Task/US nicht in Time umgesetzt
  werden kann und Untersützung notwending ist.
  
### Story-Team-Daily

- Sollte Team-Intern abgestimmt und mit POs für die Aufgaben kommuniziert sein. Für jedes 
  Team sollte es ein eigenes Whiteboard geben. (Oder Online)
  POs sollten mindestens einmal die Woche bei einem Story-Team Daily dabei sein.

### Sprint-Planning

Sowohl User Stories als auch Refined Stories werden in einer E-Mail bis spätestens Donnerstags
0:00 Uhr veröffentlicht (PO). Teilzeitler können sich dann bis Montags 6:00 Uhr darauf bewerben und 
Präferenzen angeben. Die POs organisieren dies.

- Durch die POs werden neue User-Stories im Backlog kurz vorgestellt bzw. zurück gestellte 
  Stories nochmals betont. Die POs werben aktiv für Refinement Teams, die die
  User-Stories weiter ausarbeiten. (Es können auch interne User-Stories durch Architects / Seniors
  vorgestellt werden)
  
- Die User-Stories werden nach jeder Vorstellung mit Complexity-Poker geschätzt. 1-5 (höchste Komplexität).
  Niedrigste und Höchste Werte werden befragt. Enthaltungen sind möglich.
  
- Refinement-Bazar: Wer hat Interesse? Es wird ein Refinement Team zusammengestellt und ein
  Termin für das Refinement klar gemacht.
  
- Danach wird jeweils von den Refinement Teams (voriger Sprint) die Refined US vorgestellt.

- Jedes Refinement wird anhand Story-Pokers mit SP geschätzt. Weichen die SP zu weit ab, 
  wird nachgefragt und diskutiert, bis ein committeter wert heraus kommt. Legt jemand
  Veto ein, wird das Thema vertagt. Der Mittelwert wird von den POs auf den User-Stories
  vermerkt. (daran orientiert sich später die Bewertung.)

- Danach sollen sich Teams finden, die anhand ihrer verfügbaren SP die US committen. Die 
  US sollten so gewählt sein, dass jedes Team-Mitglied seine max verfügbaren SP aufbraucht.
  Nicht verbrauchte SP können als "Listener" in anderen Product Refinements oder Projekten
  gebucht werden.
  [Wollen mehrere Teams in Competition treten, so wir das mit der niedrigeren SP ausgewählt - gefährlich!]

- POs versuchen restliche US unterzubringen.

### Sprint Review

- Die Ergebnisse des Sprints werden von den einzelnen Teams vorgestellt. 

### Sprint Retrospektive

(ohne POs)
- Es werden die KPIs ermittelt und mitgeteilt und grafisch aufgereitet präsentiert.
- Es wird hinterfragt, was zu Erfolg beigetragen hat

## Ermittelbare KPIs

Dadurch, dass mit realen SP verglichen wird, kann ein Zielerreichungs-Prozentsatz ermittelt
werden.

Für jeden Sprint wird ermittelt

- Realer SP: Netto-Arbeitszeit - Urluab - Krankheit
- Kranheitsgrad

Gegen den realen SP wird der grad der Zielerreichung ermittelt und festgehalten. 

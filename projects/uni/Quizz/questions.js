//Algorithem, Rekursion, Turingmaschine, EBNF, Substitutionsmodell, Asymptotische Komplexität, Zahlensysteme, Festkommazahlen, Fließkommazahlen
//Pointer, Speicherverwaltung, Lambda-Ausdrücke, Listen, Zeigerarithmetik, Funktionsaufrufe, Rekursion, Arrays, Variablennamen, Speicherfreigabe

//Klassen, Vererbung, Polymorphie, Operatoren, Überladung, Konstruktoren, Destruktoren, Kopierkonstruktoren, Zuweisungsoperatoren, Objektorientierung
const quizData = [
    {
      index: 0,
      question: "Was trifft auf determinierte Algorithmen zu?",
      answers: [
        "Der Algorithmus ist für jede Eingabe gleich und liefert immer ein anderes Ergebnis",
        "Der Algorithmus ist für jede Eingabe unterschiedlich und liefert immer das gleiche Ergebnis",
        "Der Algorithmus ist für jede Eingabe gleich und liefert immer das gleiche Ergebnis",
        "Der Algorithmus ist für jede Eingabe unterschiedlich und liefert immer ein anderes Ergebnis"
      ],
      correctAnswer: "Der Algorithmus ist für jede Eingabe gleich und liefert immer das gleiche Ergebnis"
    },
    {
      index: 1,
      question: "Ist ein Alorithmus terminierend und nichtdeterministisch, dann...",
      answers: [
        "ist er immer determiniert",
        "kann er determiniert sein oder nicht",
        "ist er immer nichtdeterminiert",
        "ist er nicht endlich"
      ],
      correctAnswer: "kann er determiniert sein oder nicht"
    },
    {
      index: 2,
      question: "Was bedeutet intuitiv berechenbar laut Church'scher-These?",
      answers: [
        "Eine Funktion ist intuitiv berechenbar, wenn sie durch ein neuronales Netzwerk gelöst werden kann",
        "Eine Funktion ist intuitiv berechenbar, wenn sie von einer Turing-Maschine berechnet werden kann",
        "Eine Funktion ist intuitiv berechenbar, wenn sie mit jedem mathematischen Modell darstellbar ist",
        "Eine Funktion ist intuitiv berechenbar, wenn sie ausschließlich auf Basis von menschlicher Intuition gelöst werden kann"
      ],
      correctAnswer: "Eine Funktion ist intuitiv berechenbar, wenn sie von einer Turing-Maschine berechnet werden kann"
    },
    {
      index: 3,
      question: "Was ist der korrekte Workflow bei einer Programmerstellung?",
      answers: [
        "Algorithmus, Problem, Maschinenprogramm, Programm, Prozessor, Auswertung",
        "Problem, Programm, Prozessor, Algorithmus, Maschinenprogramm, Auswertung",
        "Problem, Algorithmus, Programm, Maschinenprogramm, Prozessor, Auswertung",
        "Maschinenprogramm, Algorithmus, Problem, Programm, Prozessor, Auswertung",
      ],
      correctAnswer: "Problem, Algorithmus, Programm, Maschinenprogramm, Prozessor, Auswertung"
    },
    {
      index: 4,
      question: "Was ist ein Algorithmus?",
      answers: [
        "Eine unendliche Folge von Schritten, die ein Problem lösen",
        "Eine endliche Folge von Schritten, die ein Problem nicht lösen",
        "Eine endliche Folge von Schritten, die ein Problem lösen",
        "Eine unendliche Folge von Schritten, die ein Problem nicht lösen"
      ],
      correctAnswer: ""
    },
    {
      index: 5,
      question: "Welche grundlegenden Bestandteile hat eine Turingmaschine?",
      answers: [
        "Ein Prozessor, ein RAM und eine Festplatte",
        "Ein Eingabeband, ein Lesekopf, eine Druckerkomponente",
        "Ein Band, ein Lesekopf/Schreibkopf, eine Zustandssteuerung",
        "Ein Bildschirm, ein Lesegerät und ein Speicherchip",
      ],
      correctAnswer: "Ein Band, ein Lesekopf/Schreibkopf, eine Zustandssteuerung"      
    },
    {
      index: 6,
      question: "Was macht der Lesekopf einer Turingmaschine?",
      answers: [
        "Er gibt den aktuellen Zustand aus",
        "Er liest Symbole vom Band, kann aber keine Symbole schreiben",
        "Er liest und schreibt Symbole auf dem Band sowie bewegt sich darauf",
        "Er führt die gesamte Logiksteuerung der Turingmaschine aus",
      ],
      correctAnswer: "Er liest und schreibt Symbole auf dem Band sowie bewegt sich darauf"      
    },
    {
      index: 7,
      question: "Was macht ein Turingmaschinen-Programm, das alle Einsen auf einem Band durch Nullen ersetzt?",
      answers: [
        "Es löscht alle Einsen vom Band",
        "Es bewegt den Lesekopf nur nach rechts",
        "Es ersetzt jede Eins auf dem Band durch eine Null und bleibt stehen",
        "Es bewegt den Lesekopf in beide Richtungen, ohne etwas zu ändern",
      ],
      correctAnswer: "Es ersetzt jede Eins auf dem Band durch eine Null und bleibt stehen"      
    },
    {
      index: 8,
      question: "Welche Probleme kann eine Turingmaschine lösen?",
      answers: [
        "Alle mathematischen Probleme",
        "Nur Probleme mit endlicher Eingabe",
        "Alle berechenbaren Probleme",
        "Nur Probleme mit einer Lösung in polynomieller Zeit",
      ],
      correctAnswer: "Alle berechenbaren Probleme"      
    },
    {
      index: 9,
      question: "Was macht eine Turingmaschine, die zwei Zahlen auf einem Band multipliziert (z. B. 3 x 2)?",
      answers: [
        "Sie addiert die Zahlen mehrfach und speichert das Ergebnis auf dem Band",
        "Sie addiert die Zahlen direkt auf einem separaten Speicher",
        "Sie schreibt das Produkt der Zahlen direkt ins erste Bandfeld",
        "Sie gibt die Zahlen unverändert zurück",
      ],
      correctAnswer: "Sie addiert die Zahlen mehrfach und speichert das Ergebnis auf dem Band"      
    },
    {
      index: 10,
      question: "Was ist der Hauptunterschied zwischen Infix- und Präfix-Schreibweise?",
      answers: [
        "In der Infix-Schreibweise stehen die Operatoren vor den Operanden, in der Präfix-Schreibweise dazwischen",
        "In der Präfix-Schreibweise stehen die Operatoren vor den Operanden, in der Infix-Schreibweise dazwischen",
        "In der Infix-Schreibweise werden Klammern verwendet, in der Präfix-Schreibweise nie",
        "In der Präfix-Schreibweise werden Operatoren nach den Operanden geschrieben, in der Infix-Schreibweise davor",
      ],
      correctAnswer: "In der Präfix-Schreibweise stehen die Operatoren vor den Operanden, in der Infix-Schreibweise dazwischen"      
    },
    {
      index: 11,
      question: "Welcher Ausdruck ist ein Beispiel für eine Präfix-Schreibweise?",
      answers: [
        "(A+B)*C",
        "*(+(A,B),C)",
        "(((A,B)+),C)*",
        "(+(A,B)*C)",
      ],
      correctAnswer: "*(+(A,B),C)"
    },
    {
      index: 12,
      question: "Wofür werden Lambda-Funktionen in C++ häufig verwendet?",
      answers: [
        "Um Objekte in Klassen zu erstellen",
        "Um kurze, anonyme Funktionen direkt in Ausdrücken zu definieren",
        "Um Speicher manuell zu verwalten",
        "Um Rückgabewerte von Funktionen zu verwerfen",
      ],
      correctAnswer: "Um kurze, anonyme Funktionen direkt in Ausdrücken zu definieren"      
    },
    {
      index: 13,
      question: "Was ist NICHT Teil einer Funktionsdefinition?",
      answers: [
        "Der Rückgabetyp",
        "Der Funktionsname",
        "Die Argumente der Funktion",
        "Die Ausführung des Programms",
      ],
      correctAnswer: "Die Ausführung des Programms"      
    },
    {
      index: 14,
      question: "Welche Art von rekursivem Prozess ist die Berechnung der Fibonacci-Zahlen?",
      answers: [
        "Baumrekursion",
        "Linear rekursive Rekursion",
        "Linear iterative Rekursion",
        "Keine davon",
      ],
      correctAnswer: "Baumrekursion"
    },
    {
      index: 15,
      question: "Welche Art von rekursivem Prozess ist die Berechnung der Fakultät?",
      answers: [
        "Baumrekursion",
        "Linear rekursive Rekursion",
        "Linear iterative Rekursion",
        "Keine davon",
      ],
      correctAnswer: "Linear rekursive Rekursion"
    },
    {
      index: 16,
      question: "Was bedeutet es, wenn eine Funktion zweistellig ist?",
      answers: [
        "Die Funktion hat zwei Rückgabewerte",
        "Die Funktion hat zwei Eingabewerte",
        "Die Funktion gibt einen Wert zurück, der zwei Ziffern enthält",
        "Die Funktion arbeitet nur mit zwei Variablen",
      ],
      correctAnswer: "Die Funktion hat zwei Eingabewerte"      
    },
    {
      index: 17,
      question: "Wie wird das Substitutionsmodell bei Funktionsaufrufen angewendet?",
      answers: [
        "Die Funktionsdefinition wird direkt in den Funktionsaufruf eingefügt, indem Parameter durch Argumente ersetzt werden",
        "Der Funktionsaufruf wird durch eine Schleife ersetzt",
        "Es wird nur der Rückgabewert der Funktion verwendet, die Argumente werden ignoriert",
        "Es wird ein alternativer Algorithmus verwendet, der ohne Variablen auskommt",
      ],
      correctAnswer: "Die Funktionsdefinition wird direkt in den Funktionsaufruf eingefügt, indem Parameter durch Argumente ersetzt werden"      
    },
    {
      index: 18,
      question: "Was beschreibt das Substitutionsmodell in der Programmierung?",
      answers: [
        "Es beschreibt, wie Variablen durch ihre Werte ersetzt werden, um den Programmfluss zu analysieren",
        "Es erklärt, wie eine Funktion durch eine Schleife ersetzt werden kann",
        "Es zeigt, wie ein Programm in einer anderen Programmiersprache übersetzt wird",
        "Es beschreibt den Ablauf eines Programms bei der Ausführung von Datentypen",
      ],
      correctAnswer: "Es beschreibt, wie Variablen durch ihre Werte ersetzt werden, um den Programmfluss zu analysieren"      
    },
    {
      index: 19,
      question: "Was passiert im Substitutionsmodell, wenn eine Variable in einem Ausdruck ersetzt wird?",
      answers: [
        "Die Variable wird durch den Wert ersetzt, den sie zum Zeitpunkt der Auswertung hatte",
        "Die Variable wird durch eine konstante Zahl ersetzt",
        "Die Variable wird durch den Funktionsnamen ersetzt",
        "Es wird geprüft, ob die Variable eine Schleife enthält",
      ],
      correctAnswer: "Die Variable wird durch den Wert ersetzt, den sie zum Zeitpunkt der Auswertung hatte"      
    },
    {
      index: 20,
      question: "Was ist das Hauptziel der erweiterten Backus-Naur-Form (EBNF)?",
      answers: [
        "Sie dient zur Beschreibung von Syntaxregeln für Programmiersprachen.",
        "Sie wird verwendet, um Code in ausführbare Programme zu übersetzen.",
        "Sie beschreibt den Ablauf von Algorithmen in einer Programmiersprache.",
        "Sie optimiert die Ausführungsgeschwindigkeit von Programmen.",
      ],
      correctAnswer: "Sie dient zur Beschreibung von Syntaxregeln für Programmiersprachen."      
    },
    {
      index: 21,
      question: "Welches Symbol wird in der EBNF verwendet, um eine Wahl zwischen Optionen darzustellen?",
      answers: [
        "[]",
        "{}",
        "|",
        "()",
      ],
      correctAnswer: "|"      
    },
    {
      index: 22,
      question: "Wie wird eine Wiederholung in der EBNF dargestellt?",
      answers: [
        "[]",
        "()",
        "{}",
        ";",
      ],
      correctAnswer: "{}"      
    },
    {
      index: 23,
      question: "Welche EBNF-Beschreibung entspricht der Regel für einen einfachen mathematischen Ausdruck wie 'a + b'?",
      answers: [
        "<Ausdruck> ::= <Variable> | <Zahl> | <Ausdruck> <Operator> <Ausdruck>",
        "<Ausdruck> ::= (<Variable> |< Zahl>) <Operator> (<Variable> | <Zahl>)",
        "<Ausdruck> ::= <Variable> <Operator> <Variable>",
        "<Ausdruck> ::= <Zahl> <Operator> <Zahl>",
      ],
      correctAnswer: "<Ausdruck> ::= <Variable> | <Zahl> | <Ausdruck> <Operator> <Ausdruck>"      
    },
    {
      index: 24,
      question: "Welche EBNF-Beschreibung entspricht einer Zahl, die aus einer Folge von Ziffern besteht?",
      answers: [
        "<Zahl> ::= <Ziffer> | <Zahl> <Ziffer>",
        "<Zahl> ::= <Ziffer> {<Ziffer>}",
        "<Zahl> ::= (<Ziffer> | <Punkt>) {<Ziffer>}",
        "<Zahl> ::= (<Ziffer>)+",
      ],
      correctAnswer: "<Zahl> ::= <Ziffer> {<Ziffer>}"      
    },
    {
      index: 25,
      question: "Welche Aussage trifft NICHT auf linear rekursive Prozesse zu?",
      answers: [
        "Die jeweiligen Ergbnisse sind bereits im Abwärtspfad bekannt",
        "Der Speicheraufwand wächst linear mit der Eingabegröße",
        "Die Anzahl der Schritte wächst linear mit der Eingabegröße",
        "Die Aufrufe formen eine lineare Kette von Funktionsaufrufen",
      ],
      correctAnswer: "Die jeweiligen Ergbnisse sind bereits im Abwärtspfad bekannt"
    },
    {
      index: 26,
      question: "Welche Aussage über linear iterative Prozesse ist wahr?",
      answers: [
        "Der Speicheraufwand wächst linear mit der Eingabegröße",
        "Der Zustand des Programms lässt sich durch eine feste Zahl von Zustandsgrößen beschreiben",
        "Die jeweiligen Ergbnisse erst im Aufwärtspfad bekannt",
        "Hat einen schnelleren Rechenaufwand als linear rekursive Prozesse",
      ],
      correctAnswer: "Der Zustand des Programms lässt sich durch eine feste Zahl von Zustandsgrößen beschreiben"
    },
    {
      index: 27,
      question: "Welche asymptotische Komplexität hat ein Algorithmus, der alle Elemente einer Liste miteinander vergleicht?",
      answers: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)",
      ],
      correctAnswer: "O(n^2)"      
    },
    {
      index: 28,
      question: "Welche asymptotische Komplexität hat ein Algorithmus, der die Fakultät einer Zahl berechnet?",
      answers: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)",
      ],
      correctAnswer: "O(n)"      
    },
    {
      index: 29,
      question: "Welche asymptotische Komplexität hat ein Algorithmus, der die optimierte Primfaktorzerlegung durchführt?",
      answers: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(sqrt(n))",
      ],
      correctAnswer: "O(sqrt(n))"      
    },
    {
      index: 30,
      question: "Was ist die asymptotische Komplexität?",
      answers: [
        "Die asymptotische Komplexität beschreibt die minimale Anzahl von Operationen, die ein Algorithmus ausführt",
        "Die asymptotische Komplexität beschreibt das Verhalten eines Algorithmus in Bezug auf die Zeit oder den Speicherbedarf im Hinblick auf die Eingabemenge",
        "Die asymptotische Komplexität ist immer gleich, unabhängig von der Größe der Eingabemenge",
        "Die asymptotische Komplexität beschreibt die größe eines Algorithmus",
      ],
      correctAnswer: "Die asymptotische Komplexität beschreibt das Verhalten eines Algorithmus in Bezug auf die Zeit oder den Speicherbedarf im Hinblick auf die Eingabemenge"      
    },
    {
      index: 31,
      question: "Wie bildet man das Zweierkomplement eines Binärzahl?",
      answers: [
        "Man negiert alle Bits und addiert 1",
        "Man subtrahiert 1 von der Binärzahl",
        "Man addiert 1 zur Binärzahl und negiert dann alle Bits",
        "Man nimmt die Summe der Binärzahl mit ihrer Hälfte und negiert das Ergebnis",
      ],
      correctAnswer: "Man negiert alle Bits und addiert 1"      
    },
    {
      index: 32,
      question: "Welchen Wertebereich hat das Zweierkomplement für eine n-Bit-Binärzahl?",
      answers: [
        "[-2^(n-1) ; 2^(n-1) - 1]",
        "[0 ; 2^n - 1]",
        "[-2^n ; 2^n - 1]",
        "[-2^(n-1) ; 2^n - 1]",
      ],
      correctAnswer: "[-2^(n-1) ; 2^(n-1) - 1]"
    },
    {
      index: 33,
      question: "Was ist der Hauptunterschied zwischen Festkommazahlen und Fließkommazahlen?",
      answers: [
        "Festkommazahlen haben eine feste Anzahl von Dezimalstellen, während Fließkommazahlen eine exponentielle Form haben",
        "Fließkommazahlen haben eine feste Anzahl von Dezimalstellen, während Festkommazahlen eine exponentielle Form haben",
        "Festkommazahlen verwenden immer eine Exponentialdarstellung, während Fließkommazahlen nur für ganze Zahlen verwendet werden",
        "Es gibt keinen Unterschied, beide sind Arten von Dezimalzahlen",
      ],
      correctAnswer: "Festkommazahlen haben eine feste Anzahl von Dezimalstellen, während Fließkommazahlen eine exponentielle Form haben"      
    },
    {
      index: 34,
      question: "Wie ist eine Fließkommazahl im IEEE 754 Standard aufgebaut?",
      answers: [
        "Sie besteht aus einem Vorzeichenbit, einem Exponenten und einer Mantisse",
        "Sie besteht aus einem Vorzeichenbit, einem Exponenten und einer Basis",
        "Sie besteht aus einer Basis, einem Exponenten und einer Zahl als String",
        "Sie besteht aus einer Ganzzahl und einer festen Anzahl von Nachkommastellen",
      ],
      correctAnswer: "Sie besteht aus einem Vorzeichenbit, einem Exponenten und einer Mantisse"      
    },
    {
      index: 35,
      question: "Welche Aussage über die Genauigkeit von Festkommazahlen ist wahr?",
      answers: [
        "Festkommazahlen sind bei der Darstellung von Brüchen ungenau, da sie immer eine feste Anzahl von Dezimalstellen haben.",
        "Festkommazahlen sind bei der Darstellung von Brüchen genau, da sie immer eine feste Anzahl von Dezimalstellen haben.",
        "Festkommazahlen sind genauso genau wie Fließkommazahlen.",
        "Festkommazahlen können nur ganze Zahlen darstellen und sind daher nicht genau für Dezimalzahlen.",
      ],
      correctAnswer: "Festkommazahlen sind bei der Darstellung von Brüchen ungenau, da sie immer eine feste Anzahl von Dezimalstellen haben."
      
    },
    {
      index: 36,
      question: "Fließkommazahlen sind immer genauer als Festkommazahlen.",
      answers: [
        "Immer wahr",
        "Immer falsch",
        "Abhängig von der Anzahl der Dezimalstellen",
        "Nicht eindeutig",
      ],
      correctAnswer: "Falsch"      
    },
    {
      index: 37,
      question: "Was ist der Unterschied zwischen einer Definition und einer Deklaration?",
      answers: [
        "Eine Definition erstellt eine Variable und weist ihr einen Wert zu, während eine Deklaration nur den Typ einer Variablen angibt",
        "Eine Definition beschreibt nur den Datentyp einer Variablen, während eine Deklaration den Wert zuweist",
        "Eine Deklaration erstellt eine Variable und weist ihr einen Wert zu, während eine Definition nur den Typ einer Variablen angibt",
        "Eine Deklaration beschreibt nur den Datentyp einer Variablen, während eine Definition nur den Wert zuweist"
      ],
      correctAnswer: "Eine Definition erstellt eine Variable und weist ihr einen Wert zu, während eine Deklaration nur den Typ einer Variablen angibt"      
    },
    {
      index: 38,
      question: "Was bedeutet es, eine Variable zu initialisieren?",
      answers: [
        "Der Variablen wird einen Anfangswert zuzuweisen",
        "Der Variablen wird einen Datentyp zuzuweisen",
        "Die Variable zu deklarieren, aber noch keinen Wert zuzuweisen",
        "Die Variable zu löschen"
      ],
      correctAnswer: "Der Variablen wird einen Anfangswert zuzuweisen"    
    },
    {
      index: 39,
      question: "Welche der folgenden Schleifen ist eine gültige For-Schleife?",
      answers: [
        "for(int i = 0; i < 10; i++)",
        "for(i = 0; i < 10; i++)",
        "for(int i; i < 10; ++i)",
        "for(int i = 0; i < 10)"
      ],
      correctAnswer: "for(int i = 0; i < 10; i++)"        
    },
    {
      index: 40,
      question: "Welche der folgenden Aussagen über globale Variablen ist korrekt?",
      answers: [
        "Globale Variablen können von jedem Teil des Programms aus verwendet werden",
        "Globale Variablen können nur in der main-Funktion verwendet werden",
        "Globale Variablen sind immer konstant",
        "Globale Variablen dürfen nicht verändert werden"
      ],
      correctAnswer: "Globale Variablen können von jedem Teil des Programms aus verwendet werden"      
    },
    {
      index: 41,
      question: "Was beschreibt das Umgebungsmodell in der Programmierung?",
      answers: [
        "Es beschreibt, wie der Speicher und die Variablen eines Programms verwaltet werden",
        "Es beschreibt den Ablauf von Programmanweisungen",
        "Es beschreibt den Ablauf von Schleifen in einem Programm",
        "Es beschreibt nur die Art und Weise, wie Eingabe und Ausgabe gehandhabt werden"
      ],
      correctAnswer: "Es beschreibt, wie der Speicher und die Variablen eines Programms verwaltet werden"      
    },
    {
      index: 42,
      question: "Was ist eine Referenz?",
      answers: [
        "Eine Referenz ist ein Alias für eine bereits existierende Variable",
        "Eine Referenz ist ein Zeiger, der auf einen bestimmten Speicherort verweist",
        "Eine Referenz ist eine spezielle Art von Zeiger, der nullwertig ist",
        "Eine Referenz ist eine Art von globaler Variable"
      ],
      correctAnswer: "Eine Referenz ist ein Alias für eine bereits existierende Variable"      
    },
    {
      index: 43,
      question: "Was ist der Hauptunterschied zwischen einem Zeiger und einer Referenz?",
      answers: [
        "Ein Zeiger kann auf null gesetzt werden, während eine Referenz immer auf ein gültiges Objekt zeigt",
        "Ein Zeiger ist nur für Arrays verwendbar, während eine Referenz für alle Datentypen verwendet werden kann",
        "Ein Zeiger zeigt immer auf ein Objekt, während eine Referenz nie dereferenziert wird",
        "Ein Zeiger muss immer initialisiert werden, eine Referenz nicht"
      ],
      correctAnswer: "Ein Zeiger kann auf null gesetzt werden, während eine Referenz immer auf ein gültiges Objekt zeigt"
      
    },
    {
      index: 44,
      question: "Wie deklariert man ein Feld (Array) mit 10 Ganzzahlen?",
      answers: [
        "int array[10]",
        "int[10] array",
        "array[10] int",
        "int array = 10"
      ],
      correctAnswer: "int array[10]"
      
    },
    {
      index: 45,
      question: "Welche Aussage über das Speicherverhalten ist wahr?",
      answers: [
        "Dynamisch allokierter Speicher wird auf dem Stack gespeichert",
        "Statisch allokierter Speicher wird auf dem Heap gespeichert",
        "Der Stack wird für lokale Variablen verwendet, der Heap für dynamisch allokierte Daten",
        "Lokale Variablen werden immer auf dem Heap gespeichert"
      ],
      correctAnswer: "Der Stack wird für lokale Variablen verwendet, der Heap für dynamisch allokierte Daten"      
    },
    {
      index: 46,
      question: "Welche der folgenden Aussagen ist korrekt im Bezug auf den Stack und den Heap?",
      answers: [
        "Der Stack hat eine begrenzte Größe und wird für lokale Variablen verwendet, während der Heap dynamisch wächst",
        "Der Heap hat eine feste Größe und wird für lokale Variablen verwendet",
        "Der Stack wird für dynamische Speicherzuteilung verwendet, der Heap für globale Variablen",
        "Der Stack wird für Daten verwendet, die nicht mehr verändert werden"
      ],
      correctAnswer: "Der Stack hat eine begrenzte Größe und wird für lokale Variablen verwendet, während der Heap dynamisch wächst"
      
    },
    {
      index: 47,
      question: "Was ist ein Lambda-Ausdruck in C++?",
      answers: [
        "Ein Lambda-Ausdruck ist eine anonyme Funktion, die inline im Code definiert wird",
        "Ein Lambda-Ausdruck ist eine spezielle Art von Zeiger auf eine Funktion",
        "Ein Lambda-Ausdruck ist eine verschachtelte Schleife",
        "Ein Lambda-Ausdruck ist ein Algorithmus, der den Code automatisiert"
      ],
      correctAnswer: "Ein Lambda-Ausdruck ist eine anonyme Funktion, die inline im Code definiert wird"      
    },
    {
      index: 48,
      question: "",
      answers: [
        "",
        "",
        "",
        "",
      ],
      correctAnswer: ""
    },
    {
      index: 49,
      question: "Welches der folgenden ist ein zusammengesetzter Datentyp in C++?",
      answers: [
        "Array",
        "int",
        "char",
        "float"
      ],
      correctAnswer: "Array"      
    },
    {
      index: 50,
      question: "Was ist eine einfach verkettete Liste?",
      answers: [
        "Eine Liste, bei der jedes Element auf das nächste verweist und das letzte Element null zeigt",
        "Eine Liste, bei der jedes Element auf das vorherige verweist",
        "Eine Liste, bei der jedes Element auf ein beliebiges anderes Element verweist",
        "Eine Liste, die keine Elemente enthält"
      ],
      correctAnswer: "Eine Liste, bei der jedes Element auf das nächste verweist und das letzte Element null zeigt"      
    },
    {
      index: 51,
      question: "Wie sieht ein Lambda-Ausdruck in C++ aus?",
      answers: [
        "[](int x, int y) { return x + y; }",
        "lambda(int x, int y) { return x + y; }",
        "int lambda(int x, int y) { return x + y; }",
        "function(int x, int y) { return x + y; }"
      ],
      correctAnswer: "[](int x, int y) { return x + y; }"
    },
    {
      index: 52,
      question: "Was ist eine doppelt verkettete Liste?",
      answers: [
        "Eine Liste, bei der jedes Element auf das nächste und das vorherige Element verweist",
        "Eine Liste, bei der jedes Element auf das vorherige Element verweist",
        "Eine Liste, bei der jedes Element auf das nächste Element verweist und das letzte Element null zeigt",
        "Eine Liste, bei der jedes Element auf zwei verschiedene Listen verweist"
      ],
      correctAnswer: "Eine Liste, bei der jedes Element auf das nächste und das vorherige Element verweist"      
    },
    {
      index: 53,
      question: "Was passiert, wenn ein Zeiger auf null gesetzt wird?",
      answers: [
        "Der Zeiger verweist auf einen ungültigen Speicherort",
        "Der Zeiger verweist auf den ersten Speicherort im Speicher",
        "Der Zeiger wird automatisch deallokiert",
        "Der Zeiger zeigt auf einen Speicherbereich, der immer 0 ist"
      ],
      correctAnswer: "Der Zeiger verweist auf einen ungültigen Speicherort"      
    },
    {
      index: 54,
      question: "Welches der folgenden Schlüsselwörter wird zur dynamischen Speicherzuteilung verwendet?",
      answers: [
        "new",
        "malloc",
        "alloc",
        "calloc"
      ],
      correctAnswer: "new"      
    },
    {
      index: 55,
      question: "Welche der folgenden Aussagen ist über Pointerarithmetik korrekt?",
      answers: [
        "Pointerarithmetik kann verwendet werden, um auf benachbarte Speicherstellen eines Arrays zuzugreifen",
        "Pointerarithmetik ist nur für Referenzen gültig",
        "Pointerarithmetik kann nur für globale Variablen verwendet werden",
        "Pointerarithmetik funktioniert nur mit Zeigern, die auf konstante Werte zeigen"
      ],
      correctAnswer: "Pointerarithmetik kann verwendet werden, um auf benachbarte Speicherstellen eines Arrays zuzugreifen"      
    },
    {
      index: 56,
      question: "Welche der folgenden Optionen stellt einen gültigen Funktionsaufruf in C++ dar?",
      answers: [
        "myFunction()",
        "function:myFunction()",
        "call myFunction()",
        "myFunction{}"
      ],
      correctAnswer: "myFunction()"      
    },
    {
      index: 57,
      question: "Wie kann eine Funktion in C++ mehrere Rückgabewerte haben?",
      answers: [
        "Indem man eine Struktur oder ein Array zurückgibt",
        "Indem man mehrere Funktionen mit einem gemeinsamen Rückgabewert erstellt",
        "Indem man Zeiger auf mehrere Werte zurückgibt",
        "Indem man eine globale Variable verändert"
      ],
      correctAnswer: "Indem man eine Struktur oder ein Array zurückgibt"      
    },
    {
      index: 58,
      question: "Was ist Rekursion in einer Funktion?",
      answers: [
        "Wenn eine Funktion sich selbst aufruft, um eine Teilaufgabe zu lösen",
        "Wenn eine Funktion mehrere Funktionen gleichzeitig aufruft",
        "Wenn eine Funktion keine Argumente verwendet",
        "Wenn eine Funktion eine Schleife verwendet"
      ],
      correctAnswer: "Wenn eine Funktion sich selbst aufruft, um eine Teilaufgabe zu lösen"      
    },
    {
      index: 59,
      question: "Wie greift man auf das fünfte Element eines Arrays zu?",
      answers: [
        "array[4]",
        "array[5]",
        "array{5}",
        "array(5)"
      ],
      correctAnswer: "array[4]"      
    },
    {
      index: 60,
      question: "Welche der folgenden Variablennamen ist gültig?",
      answers: [
        "int 5variable",
        "int myVariable",
        "int variable-name",
        "int #variable"
      ],
      correctAnswer: "int myVariable"      
    },
    {
      index: 61,
      question: "Welches der folgenden Schlüsselwörter wird verwendet, um dynamisch zugewiesenen Speicher freizugeben?",
      answers: [
        "delete",
        "dealloc",
        "free",
        "clear"
      ],
      correctAnswer: "delete"
      
    },
    {
      index: 62,
      question: "Was ist ein Segfault (Segmentation Fault)?",
      answers: [
        "Ein Fehler, der auftritt, wenn auf einen ungültigen Speicherbereich zugegriffen wird",
        "Ein Fehler, der auftritt, wenn eine Schleife endlos läuft",
        "Ein Fehler, der auftritt, wenn ein Funktionsaufruf eine unzulässige Rückgabe hat",
        "Ein Fehler, der auftritt, wenn eine Variable nicht initialisiert wurde"
      ],
      correctAnswer: "Ein Fehler, der auftritt, wenn auf einen ungültigen Speicherbereich zugegriffen wird"      
    },
    {
      index: 63,
      question: "Was passiert, wenn man auf einen Nullzeiger zugreift?",
      answers: [
        "Es führt zu einem Laufzeitfehler oder Segmentation Fault",
        "Es gibt keine Auswirkungen, der Code läuft normal",
        "Es gibt eine Warnung, aber der Code läuft weiter",
        "Der Zeiger wird auf den ersten verfügbaren Speicherort umgebogen"
      ],
      correctAnswer: "Es führt zu einem Laufzeitfehler oder Segmentation Fault"      
    },
    {
      index: 64,
      question: "Wie erfolgt die Speicherverwaltung bei lokal deklarierten Variablen?",
      answers: [
        "Der Speicher wird automatisch freigegeben, wenn die Funktion beendet ist",
        "Der Speicher muss explizit freigegeben werden",
        "Der Speicher bleibt dauerhaft bestehen",
        "Der Speicher wird nur freigegeben, wenn der Compiler das für notwendig erachtet"
      ],
      correctAnswer: "Der Speicher wird automatisch freigegeben, wenn die Funktion beendet ist"      
    },
    {
      index: 65,
      question: "Was ist ein Funktionszeiger in C++?",
      answers: [
        "Ein Zeiger, der auf eine Funktion zeigt, sodass die Funktion dynamisch aufgerufen werden kann",
        "Ein Zeiger, der auf eine Variable zeigt",
        "Ein Zeiger, der auf ein Array zeigt",
        "Ein Zeiger, der auf eine Referenz zeigt"
      ],
      correctAnswer: "Ein Zeiger, der auf eine Funktion zeigt, sodass die Funktion dynamisch aufgerufen werden kann"      
    },
    {
      index: 66,
      question: "Was passiert, wenn ein Parameter einer Funktion per Referenz übergeben wird?",
      answers: [
        "Die Funktion kann die ursprüngliche Variable im Aufrufer verändern",
        "Die Funktion erhält eine Kopie der Variablen",
        "Der Parameter kann nicht verändert werden",
        "Es wird automatisch eine Fehlermeldung generiert"
      ],
      correctAnswer: "Die Funktion kann die ursprüngliche Variable im Aufrufer verändern"      
    },
    {
      index: 67,
      question: "Welche der folgenden Bedingungen führt zu einer Endlosschleife in einer For-Schleife?",
      answers: [
        "for(int i = 0; i < 10; i++)",
        "for(int i = 0; i != 10; i++)",
        "for(int i = 0; ; i++)",
        "for(int i = 0; i <= 10; i++)"
      ],
      correctAnswer: "for(int i = 0; ; i++)"      
    },
    {
      index: 68,
      question: "Was ist der Unterschied zwischen Wertübergabe und Referenzübergabe in Funktionen?",
      answers: [
        "Bei der Wertübergabe wird eine Kopie des Arguments erstellt, bei der Referenzübergabe wird auf das Originalargument zugegriffen",
        "Bei der Wertübergabe wird auf das Originalargument zugegriffen, bei der Referenzübergabe wird eine Kopie des Arguments erstellt",
        "Wertübergabe kann nur für ganze Zahlen verwendet werden, Referenzübergabe nur für Fließkommazahlen",
        "Es gibt keinen Unterschied zwischen Wertübergabe und Referenzübergabe"
      ],
      correctAnswer: "Bei der Wertübergabe wird eine Kopie des Arguments erstellt, bei der Referenzübergabe wird auf das Originalargument zugegriffen"

    },
    {
      index: 69,
      question: "Was ist das Ergebnis des folgenden Codes?",
      src: "image-1.png",
      code: true,
      answers: [
        "3",
        "2",
        "Fehler wegen doppelter Deklaration von 'x'",
        "Es gibt eine Laufzeitfehler wegen falscher Zeigerdereferenzierung"
      ],
      correctAnswer: "3"
    },
    {
      index: 70,
      question: "Gibt es einen Fehler im Code?",
      src: "image-2.png",
      code: true,
      answers: [
        "Es fehlt die Initialisierung von 'ptr'",
        "Der Code ist korrekt",
        "Es fehlt der Dereferenzierungsoperator",
        "Es gibt einen Segmentation Fault"
      ],
      correctAnswer: "Es fehlt die Initialisierung von 'ptr'"
    },
    {
      index: 71,
      question: "Was gibt der Funktionsaufruf 'myFunction(5)' zurück?",
      src: "image-3.png",
      code: true,
      answers: [
        "120",
        "5",
        "0",
        "Es gibt einen Stackoverflow-Fehler"
      ],
      correctAnswer: "120"      
    },
    {
      index: 72,
      question: "Was passiert, wenn der Funktionsaufruf 'add(3, 4)' ausgeführt wird?",
      src: "image-4.png",
      code: true,
      answers: [
        "Die Funktion 'add' für Ganzzahlen wird aufgerufen",
        "Es gibt einen Fehler, weil Funktionsnamen überladen sind",
        "Die Funktion 'add' für Fließkommazahlen wird aufgerufen",
        "Es gibt keinen Unterschied zwischen den beiden Funktionen"
      ],
      correctAnswer: "Die Funktion 'add' für Ganzzahlen wird aufgerufen"   
    },
    {
      index: 73,
      question: "Was wird durch diesen Code ausgegeben?",
      src: "image-5.png",
      code: true,
      answers: [
        "5",
        "6",
        "0",
        "Fehlerhafte Referenz"
      ],
      correctAnswer: "6"
    },
  ];
  
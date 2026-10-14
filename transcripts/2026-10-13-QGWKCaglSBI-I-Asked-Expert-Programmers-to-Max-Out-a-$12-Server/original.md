---
title: "I Asked Expert Programmers to Max Out a $12 Server"
author: "Arjay McCandless"
site: "YouTube"
published: 2026-10-13T07:00:33-07:00
source: "https://www.youtube.com/watch?v=QGWKCaglSBI"
domain: "youtube.com"
language: "nl"
description: "I challenged you to max out a $12 server, and you got it to 64,000 concurrent users. Same 1 vCPU / 2 GB box where my best result last video was 14,050.All su..."
word_count: 5324
---

![](https://www.youtube.com/watch?v=QGWKCaglSBI)

## Transcript

### Intro

**0:00** · Vorige week heb ik acht programmeertalen gebenchmarkt op een server van $ 12 met een single-core CPU en twee GB RAM om te zien hoeveel verkeer elke taal aankan met een standaard setup. Specifiek het populairste framework voor die taal, Postgres en Nginx. Het was een vrij simpel experiment. Ik bouwde exact dezelfde API in elke taal en voerde het aantal virtuele gebruikers op dat de API benaderde totdat de server niet meer aan mijn criteria voldeed. Het beste resultaat in die hele video was Rust met SQLite, dat op het hoogtepunt ongeveer 14.000 gebruikers ondersteunde . En velen van jullie dachten dat het veel beter kon.

**0:27** · Dus maakte ik een GitHub-repository aan, plaatste de vereisten en vroeg jullie om de snelst mogelijke implementatie te maken voor al deze programmeertalen. Ik kreeg inzendingen in 13 verschillende talen en de beste implementatie kon 64.000 gelijktijdige gebruikers aan op dezelfde server van $ 12, meer dan vier keer ons vorige resultaat.

**0:42** · Vandaag gaan we dus door al deze implementaties heen , bespreken we welke optimalisaties mensen hebben doorgevoerd waarmee we zoveel meer uit de server konden halen, wat we hebben opgeofferd met deze implementaties, waarom je deze dingen misschien niet in een echte productieomgeving wilt doen, en welke trucs je wel in je eigen systemen kunt gebruiken om zoveel mogelijk uit je virtuele machines te halen. En als je deze implementaties zelf wilt bekijken, ze staan allemaal op mijn GitHub, die ik in de beschrijving zal linken, zodat je tijdens de video mee kunt kijken.

**1:08** · Ik zal ook proberen de relevante codefragmenten tijdens de video te laten zien, zodat je dat niet zelf hoeft te doen, maar als je wilt, voel je vrij om het te bekijken. Eerst een korte samenvatting van hoe de benchmark werkt. We gebruiken exact dezelfde setup als in mijn vorige video's: een server van $ 12 met één gedeelde CPU, twee GB RAM en 50 GB opslag. Elke ontwikkelaar moet dezelfde simpele social media API implementeren, eigenlijk zoiets als Twitter. Er zijn vijf endpoints, inclusief een health check. Gebruikers kunnen de feed laden, een bericht openen, een bericht liken of een bericht aanmaken, en elke inzending moest slagen voor een testsuite met 42 controles, en de API-antwoorden moesten exact overeenkomen met mijn specificaties.

### Rules

**1:39** · Voor de database moet iedereen SQLite gebruiken die in hetzelfde proces draait als de applicatie. Het is niet toegestaan om een aparte databaseserver , Redis, Postgres, een aparte cacheserver of iets dergelijks te gebruiken. Elk geauthenticeerd verzoek moest de handtekening van het inlogtoken verifiëren, en wanneer iemand een bericht aanmaakte of iets likete, moest de transactie worden doorgevoerd voordat de gebruiker wist dat het gelukt was. Je kon meerdere schrijfacties in één transactie bundelen, wat we nog wel vaker zullen zien, maar je kon pas reageren nadat die transactie was doorgevoerd. Dit is belangrijk voor de latentie-eisen.

**2:04** · Verder ben je vrij om zo'n beetje te optimaliseren zoals je zelf wilt. Je kunt een framework gebruiken, je eigen HTTP-server schrijven, Nginx verwijderen, je kunt doen wat je wilt.

**2:11** · Om deze implementaties te testen, gebruikte ik K6 om duizenden virtuele gebruikers te simuleren. Elke gebruiker gedraagt zich zo'n beetje als een echt persoon. Ze laden de feed, wachten een paar seconden, openen een bericht, liken soms iets en maken soms een bericht aan. Daarna blijf ik meer gebruikers toevoegen totdat de server niet meer aan de eisen kan voldoen. En de eisen zijn: om een level te halen, moet de server die gebruikersbelasting 5 volle minuten aankunnen, waarbij 95% van de verzoeken binnen een halve seconde klaar is, 99%binnen 1 seconde, en een foutpercentage van minder dan 1% . Ik probeer dus niet een eenmalige piek in verkeer te meten. Ze moeten deze belasting daadwerkelijk een behoorlijke tijd volhouden, wat belangrijk werd tijdens mijn testen.

**2:41** · Voordat we naar de inzendingen kijken, wil ik kort iets vertellen over mijn testmethode. In mijn vorige video had ik maar één virtuele machine nodig om al mijn verkeer te genereren, en deze keer waren sommige implementaties zo snel dat mijn load generator de bottleneck werd, nog voordat mijn server van $ 12 dat werd. Mijn machine die K6 draaide kwam geheugen tekort omdat hij probeerde te veel gebruikers te simuleren. Er zijn een heleboel dingen die ik had kunnen doen om de machine die de belasting genereert efficiënter te maken. Ik had bijvoorbeeld elke virtuele gebruiker meer verzoeken kunnen laten genereren, maar mensen hadden hun code al geoptimaliseerd voor deze specifieke werklast, en ik wilde het experiment halverwege niet veranderen.

### Load testing

**3:09** · Dus heb ik uiteindelijk maar meer virtuele machines gehuurd om de belasting te creëren, omdat Digital Ocean me om de een of andere reden geen grotere server laat kopen. Uiteindelijk gebruikte ik vier afzonderlijke virtuele machines die allemaal verkeer genereerden naar de server van $ 12. Zonder verder oponthoud, laten we naar de daadwerkelijke resultaten kijken. We hebben inzendingen in C, C ++, Rust, Zig, Go, TypeScript, Python, Bun, PHP, Ruby, Erlang, Fortran, R en TypeScript draaiend op Bun. En ja, iemand heeft daadwerkelijk Fortran ingediend, en de resultaten waren behoorlijk verrassend.

### Submissions

**3:34** · Van deze 28 inzendingen heb ik er 26 gebenchmarkt. Eén C ++ implementatie gebruikte geen SQLite. Het laadde alles in een in-memory database, wat tegen de regels was, maar het is een erg toffe inzending. Bekijk het op mijn GitHub als je geïnteresseerd bent. En een R-inzending kon niet starten op de testmachine omdat er een systeembibliotheek ontbrak. Ik ontving ook nul Java-inzendingen en nul Node-inzendingen. Dus, Java-ontwikkelaars, jullie hebben me in de steek gelaten. Volgende keer beter.

### Ruby

**3:53** · Goed, laten we de talen één voor één doorlopen. Als eerste is Ruby aan de beurt. Ruby zat niet in mijn oorspronkelijke video, dus ik had er geen basislijn voor, maar we kregen twee Rails-inzendingen. Zij ondersteunden 3.000 en 3.500 gebruikers . Niet slecht. Dit zou het aan de langzamere kant hebben geplaatst van mijn vorige video, waar ik frameworks gebruikte. De snelste Ruby-inzending kon echter 14.000 gelijktijdige gebruikers aan. Dat is vier keer het beste Rails-resultaat, en deze implementatie lijkt nauwelijks op Ruby.

**4:14** · Het gebruikt een webserver genaamd Iodine, die feitelijk in C is geschreven met één worker en één thread, en het schakelt Ruby's YJIT-compiler in. Dat was erg snel, maar een andere interessante optimalisatie is hoe het met JSON omgaat. Normaal gesproken, wanneer je een database bevraagt, krijg je datarijen terug, bouw je objecten in je applicatie en serialiseer je die objecten naar JSON voordat je ze terugstuurt naar de gebruiker. Nou, dat proces is traag, dus deze ontwikkelaar heeft in feite het hele proces overgeslagen. In plaats daarvan bouwt SQLite de JSON-respons direct, en Ruby stuurt het enkel terug. We hoeven dus geen heleboel Ruby-objecten aan te maken of ze door een JSON-serializer te halen.

**4:42** · En dit is een optimalisatie die we in deze video keer op keer gaan terugzien in meerdere verschillende talen. En bij 14.000 gebruikers voelde Ruby zich comfortabel. P95-latentie was 50 ms, P99 was 154, nul fouten en CPU-gebruik op 62%. Maar als we slechts 1.000 gebruikers toevoegen tot 15.000, stort onze latentie volledig in. De P99 springt over een seconde heen en de P99 gaat naar 2,5 seconde, wat de faalconditie was. Vervolgens hebben we Erlang, dat 15.000 gebruikers ondersteunde. Deze implementatie gebruikt een webserver genaamd Cowboy, en een interessant aspect van Erlang is dat het is ontworpen rond deze zeer lichtgewicht processen.

### Erlang

**5:12** · Dus elke verbinding kan zijn eigen proces hebben zonder de overhead die je normaal associeert met besturingssysteemprocessen. Maar Erlang is ook ontworpen om werk te spreiden over meerdere CPU-kernen, en wij draaien op een machine met slechts één CPU. De ontwikkelaar configureerde de runtime om één scheduler te gebruiken en liet één proces de SQLite-verbinding beheren.

**5:29** · Net als bij Ruby werd JSON direct binnen SQLite gegenereerd. Zoals ik al zei, zullen we dit nog een paar keer tegenkomen. Bij 15.000 gebruikers was de P95-latentie 171 ms en de P99 320 ms , maar het CPU-gebruik zat al op 83%en we gebruikten 600 MB aan RAM, wat eigenlijk een van de hoogste is in deze hele batch. En bij 16.000 gebruikers ging de P95 over de 4 seconden heen.

**5:47** · Bij deze was de CPU zo goed als uitgeput. Vervolgens hebben we Python.

### Python

**5:51** · Als iemand die veel in Python programmeert, was ik erg blij met dit resultaat. In mijn originele video gebruikte ik FastAPI met Postgres, en dat ondersteunde ongeveer 2.150 gebruikers. De snelste Python-inzending van vandaag ondersteunt er 22.000. Dat is ongeveer 10 keer zoveel. Natuurlijk moeten we erkennen dat we van Postgres naar SQLite zijn overgestapt en Nginx hebben verwijderd, dus het is geen eerlijke vergelijking, maar het blijft erg gaaf. Dit is wat het echt interessant maakt. Een van de eerste inzendingen die ik kreeg, was een vrij normale FastAPI-applicatie, behalve dat deze SQLite, UVloop en orjson gebruikte . Die applicatie verwerkte 11.000 gebruikers.

**6:21** · Daarna nam een andere ontwikkelaar vrijwel exact dezelfde implementatie en verdubbelde de prestaties naar 22.000. Ze analyseerden de applicatie en ontdekten dat veel CPU-tijd opging aan FastAPI en Starlette, simpelweg door verzoeken door het framework te sluizen, zoals bij dependency injection, middleware en het opbouwen van request-en response-objecten. Niets hiervan deed daadwerkelijk het echte werk van de API . Ze hebben dus vrijwel alle lagen verwijderd totdat verzoeken direct van Uvicorn naar de eigenlijke handler konden gaan. Dit verdubbelde het aantal gebruikers dat de applicatie aankon, en ik vind dit een van de meest interessante resultaten van dit hele experiment. Nu was hier de limiet van Python echt de CPU.

**6:51** · Bij 22.000 gebruikers was het CPU-gebruik 91%, vrijwel volledig benut. P95 op 353 milliseconden, P99 op 653, nul fouten.

**7:00** · En bij 23.000 gebruikers ging de P95 voorbij de seconde, P99 bereikte drie en een halve seconde, oftewel een faalconditie. Dit is op dezelfde manier als waarop de oorspronkelijke FastAPI-implementatie faalde, alleen met veel meer gebruikers. Vervolgens hebben we Go, dat eigenlijk gelijk eindigde met Python op 22.000 gebruikers, wat ik bizar vind omdat Go in mijn tests zeer performant was. Maar we kregen slechts één Go-inzending, dus ik zou dit niet toeschrijven aan Go als taal, ik zou zeggen dat dit de limiet is van deze specifieke implementatie. Iets interessants aan deze inzending is hoe databasebewerkingen werden afgehandeld.

### Go

**7:26** · In plaats van elk HTTP-verzoek onafhankelijk met SQLite te laten praten, stuurde het de aanvragen via één Go-routine die de database beheerde, en die routine kon 256 verzoeken tegelijk verzamelen.

**7:34** · Vervolgens voerde het de database-operaties uit, committe de schrijfacties in één transactie en reageerde daarna op iedereen. Dit heet een 'group commit' en het is een van de meest voorkomende en belangrijkste optimalisaties die we in dit experiment zullen zien. Kortom, in plaats van de overhead te betalen om elke database-schrijfactie afzonderlijk te commiten, groeperen we een heleboel schrijfacties en commiten we ze allemaal tegelijk. We wachten nog steeds tot de transactie is voltooid voordat we de gebruikers antwoord geven , dus we bedriegen hen niet door te zeggen dat het klaar is terwijl dat niet zo is, maar we verminderen wel de werklast voor de database. Nu had deze specifieke Go-implementatie een interessante beperking.

**8:05** · Zodra er meer dan 16.000 open verbindingen waren, begon het clients te vragen de verbinding te verbreken en opnieuw te maken. En op deze schaal werd dat erg kostbaar. Ik vermoed dus dat er meer prestaties uit te halen waren geweest.

**8:17** · En als er Go-ontwikkelaars zijn die deze implementatie willen bekijken: reageer op de PR en kijk hoe veel sneller je het kunt maken. Ik ben erg benieuwd waar jullie mee kunnen komen.

**8:24** · Terug naar de cijfers: bij 22.000 gebruikers was de latentie prima, P95 143 milliseconden, P99 318, maar het foutpercentage zat al op een half procent met een limiet van één. En bij 23.000 gebruikers overschreed het een foutpercentage van 1%. Het CPU-gebruik was hier slechts 78%. Het was dus geen CPU-bottleneck, maar een tekort aan verbindingen. Vervolgens hebben we C#. In mijn oorspronkelijke video ondersteunde C#4.400 gebruikers.

### C

**8:44** · Niet slecht. Deze implementatie haalde er 32.000. Het gebruikt nog steeds Kestrel, de standaard ASP.NET Core-webserver, maar het is vrijwel alle andere ballast kwijtgeraakt. Geen middleware, routing-laag of standaard HTTP-contextobjecten. In plaats daarvan creëerde de ontwikkelaar een piepkleine applicatie die direct communiceert met de low-level interfaces van Kestrel. Een andere grote optimalisatie hier is geheugenallocatie. Normaal gesproken moet een applicatie bij binnenkomende verzoeken een heleboel kleine objecten aanmaken, die de garbage collector uiteindelijk moet opruimen. Deze implementatie probeerde dat in de eerste plaats al te vermijden.

**9:10** · Het gebruikt gepoolde buffers om JSON-antwoorden op te bouwen en verifieert inlogtokens met op de stack gealloceerd geheugen. Het kan dus duizenden verzoeken verwerken zonder constant nieuwe objecten aan te maken voor de garbage collector. Op een machine met slechts één CPU maakt het vermijden van al dat extra werk een behoorlijk groot verschil. Bij 32.000 gebruikers was de P95-latentie 346 milliseconden, de P99 731, en er waren nul fouten. Het CPU-gebruik was 93%, het hoogste van alle inzendingen in de top 15, en deze kwam CPU tekort. Bij 3.300 gebruikers ging de P95 over de seconde heen. Als volgende hebben we Fortran.

### Fortran

**9:40** · Dit was een van de meest onverwachte inzendingen in het hele experiment. Volgens mij kwam Fortran uit in de jaren 50, en ik heb nog nooit een regel Fortran in mijn leven geschreven. Grappig genoeg was mijn moeder vroeger eigenlijk een Fortran-ontwikkelaar. En hier verslaat het Python, Go en C#. Bij een web-API.

**9:54** · Deze implementatie gebruikt een C-bibliotheek genaamd libmicrohttpd voor HTTP-verbindingen met een klein beetje C-code die het verbindt met Fortran. En een van de meest interessante details is hoe het met JSON omgaat. In plaats van een JSON-bibliotheek in Fortran te gebruiken, gebruikt de ontwikkelaar de JSON-functie van SQLite om data te parsen en op te bouwen. Zelfs de validatie van inlogtokens wordt uitgevoerd met SQL-queries. Net als Go gebruikt het 'group commit' om database-schrijfacties te groeperen. En het is een erg goed voorbeeld van hoe belangrijk applicatiearchitectuur kan zijn, ongeacht de taal waarin je programmeert. Bij 38.000 gebruikers was de P99-latentie 944 milliseconden.

**10:22** · Het CPU-gebruik was 85%en het gebruikte 700 megabyte aan RAM. Bij 3.900 gebruikers ging de P99 naar 1,7 seconden, waarmee de test faalde. Als volgende hebben we PHP. In mijn oorspronkelijke video gebruikte ik Laravel en dat kon 750 gebruikers ondersteunen. Ik vond dat een verschrikkelijk resultaat, dus deed ik wat kleine optimalisaties en probeerde ik 'bare' PHP met PHP-FPM, waarmee ik uiteindelijk op 2.700 gebruikers uitkwam. Deze inzending ondersteunde er 40.000, meer dan 50 keer het oorspronkelijke Laravel-resultaat. En de gehele applicatie bestaat uit slechts 250 regels PHP.

### PHP

**10:53** · Het grootste verschil is iets genaamd Swoole, een C-extensie voor PHP waarmee je PHP kunt draaien als een langlopende server in plaats van het traditionele PHP-FPM request-model te gebruiken. Herinner je dat een van de oorspronkelijke problemen waar ik het in de eerste video over had, was dat Laravel veel overhead heeft bij het initialiseren van het framework. Bij een traditionele PHP-opstelling moet voor elk verzoek veel werk opnieuw worden gedaan. Met Swoole start de applicatie één keer, opent een databaseverbinding, bereidt de queries voor en blijft draaien. Dus wanneer er een volgend verzoek binnenkomt, hoeft de applicatie niet opnieuw te initialiseren; het verwerkt het verzoek direct.

**11:20** · Deze specifieke implementatie heeft ook PHP's JIT-compiler ingeschakeld, en dit stelt het in staat om die 40.000 gebruikers te ondersteunen op dezelfde server waar Laravel er slechts 750 aankon. En ik kreeg een tweede Swoole-implementatie die 39.000 gebruikers ondersteunde, dus precies daartussenin. Die ontwikkelaar heeft Swoole aangepast om ook het geheugengebruik voor inactieve verbindingen te verminderen. Best gaaf.

**11:37** · Bij 40.000 gebruikers was de P95 189 milliseconden, de P99 853, en er waren nul fouten. Bij 41.000 gebruikers was de P95 nog steeds prima met 182 milliseconden. Zeer prestatiegericht.

**11:48** · Maar de P99 schoot omhoog naar bijna 2,4 seconden. Dus de meeste gebruikers zaten hier eigenlijk nog goed. Nu, C.

### C

**11:53** · De snelste C-implementatie ondersteunde 46.000 gebruikers en gebruikt een Linux-interface genaamd IO uring.

**11:58** · Normaal gesproken communiceren applicaties met het besturingssysteem via systeemaanroepen. Bijvoorbeeld wanneer je een verbinding moet accepteren, data moet lezen of een reactie moet sturen, en deze aanroepen hebben overhead. Met IO uring kun je operaties naar de kernel sturen en de resultaten in batches ophalen, wat het heen en weer sturen voor je applicatie vermindert. Maar dat was niet de enige optimalisatie hier. De ontwikkelaar heeft SQLite zelf ook geoptimaliseerd.

**12:16** · Tijdens het buildproces lieten ze een representatieve werklast door SQLite draaien om te achterhalen welke delen van de code vaker worden uitgevoerd.

**12:22** · Vervolgens gebruikten ze die info om een versie van SQLite te compileren die voor deze applicatie is geoptimaliseerd . We optimaliseren dus in essentie de database-binary voor de exacte query's die ze uitvoeren. Ze herschreven ook de feed-query om te voorkomen dat likes voor individuele berichten herhaaldelijk geteld worden wanneer een enkele range scan volstaat. Het interessante is dat deze implementatie faalde bij 4.700 gebruikers, terwijl de server slechts ongeveer een derde van zijn CPU gebruikte. Dus in tegenstelling tot andere implementaties werd het niet beperkt door brute rekenkracht, maar was er een andere bottleneck in de implementatie, waarschijnlijk bij de verbindingsafhandeling of interne wachtrijlimieten. Ik denk dat er nog wel wat meer prestaties in deze taal verborgen kunnen zitten.

**12:50** · Bij 4.600 gebruikers was de P95-latentie 54 milliseconden, de P99 178, en er waren nul fouten met 39 megabyte aan RAM, het minste van alle inzendingen. Bij 47.000 gebruikers duurde het mediaanverzoek nog steeds 5 milliseconden. De P99 ging naar 1.000. Het miste dus de drempel van 1 seconde met 43 milliseconden. Ik ging op zoek naar wat er echt op was, en de CPU is in orde met 36%zoals ik al noemde. Er was nog zeeën van geheugen over, en het lag niet aan mijn load-generatoren. Dus mijn beste gok is iets in het ontwerp. Het draait acht worker-threads op één CPU, en alle acht nemen ze de beurt bij een enkele lock om toegang te krijgen tot de database.

**13:21** · Het wacht ook op 128 events voordat er een batch wordt verwerkt.

**13:25** · Dus naarmate de belasting toeneemt, moeten sommige ongelukkige verzoeken wachten achter andere threads, en dat is als eerste zichtbaar in de P99. Ik heb het niet geprofileerd om dat te bewijzen. Dus, als de ontwikkelaars meekijken, hoor ik graag in de reacties wat jullie denken dat hier aan de hand is. Hierna volgt TypeScript op Bun. In mijn originele video kon Bun 4.200 gebruikers aan. Deze inzending verwerkte er 47.000. Dat is meer dan 11 keer zoveel gebruikers. En dat doet het in ongeveer 350 regels TypeScript. Best indrukwekkend. Het gebruikt echter niet de normale HTTP-server van Bun, die bekend staat als behoorlijk snel. Deze ontwikkelaar gebruikte ruwe TCP-sockets en implementeerde net genoeg HTTP-parsing om deze API af te handelen .

### Bun

**13:55** · In plaats van dat een algemene HTTP-server elk verzoek verwerkt, scant de code de inkomende bytes op de specifieke headers die nodig zijn. Het gebruikt SQLite om die JSON-antwoorden direct te genereren. Nogmaals, dit hebben we al eerder gezien. En het vertelt SQLite om de JSON als ruwe bytes terug te geven. De bytes hoeven dus niet eens een JavaScript-string te worden voordat ze naar de client worden gestuurd, wat volgens mijn regels was toegestaan. En het gebruikt een herbruikbare output-buffer om het antwoord te versturen. De ontwikkelaar riep ook een C-bibliotheek aan om de verbinding-backlog te vergroten voorbij de normale instellingen van Bun. Het is dus een behoorlijk extreem voorbeeld van alles weglaten wat je niet nodig hebt. Maar de afweging is vrij duidelijk.

**14:26** · We gebruiken geen normaal HTTP-framework meer. We hebben in feite een gespecialiseerde server geschreven voor deze ene toepassing. Het is erg snel voor deze werklast, maar ik zou dit waarschijnlijk niet doen in productie voor een algemene productie-API. Bij 47.000 gebruikers was de P95 96 ms, de P99 356 ms, en waren er nul fouten bij een CPU-gebruik van 72%met 150 MB RAM. Minder geheugen dan Erlang, Go of Python. Maar bij 48.000 gebruikers liep de P95 op naar 12 seconden en begon het meer dan 1%van de verzoeken te falen. Laten we het over Rust hebben. We hebben twee behoorlijk goede Rust-implementaties omdat ze verschillende benaderingen kozen.

### Rust

**14:57** · De eerste gebruikt Axum, hetzelfde framework dat ik gebruikte in mijn originele Rust-benchmark, die 43.000 gebruikers ondersteunde. Dit gebeurde met één thread met een toegewezen taak die de database afhandelde en schrijfacties bundelde, precies zoals we bij Go zagen. Het begon ook verbindingen te sluiten boven de 40.000, wat waarschijnlijk bijdroeg aan waar we ons plafond bereikten. Dat kunnen we zien in de cijfers. Bij 43.000 gebruikers was de latentie prima , maar begonnen er fouten te verschijnen. En bij 44.000 liep de P99 op naar 1,3 seconden. Bij 52.000 faalt 6%van de verzoeken. Het gebruikt ook het meeste geheugen van alle inzendingen, 1,1 GB RAM op een machine met slechts twee.

**15:26** · De tweede Rust-implementatie gebruikte IO Uring, vergelijkbaar met de C-implementatie waar we het eerder over hadden, maar ze gingen nog een stap verder. Ze gebruikten een modus waarin de kernel socket-referenties direct kan beheren, wat de overhead van een normale bestandsdescriptor-tabel vermindert. En in plaats van database-schrijfacties één voor één te verwerken, verzamelt de event loop een batch aan events, voert de bewerkingen uit, committeert de transactie en verstuurt het antwoord. Klinkt bekend, toch? Dit bracht ons op 64.000 gebruikers met een P99-latentie van slechts 224 ms. En de server gebruikte op dit niveau slechts de helft van zijn CPU en minder dan 100 MB aan RAM. Nu komen we bij een limiet die ik moet toelichten.

**15:57** · Elk van mijn K6 virtuele gebruikers houdt een open verbinding met de server, en de Linux-firewall houdt deze verbindingen bij in een zogenaamde connection tracking table. Op deze machine was de tabel geconfigureerd voor 65.000 gebruikers. Zodra we voorbij de 64.000 gebruikers kwamen, raakte die tabel vol en begon de kernel pakketjes te droppen . Ik had het besturingssysteem kunnen tunen om meer verbindingen toe te staan , maar mijn regels stonden geen kernel-aanpassingen toe omdat het doel was om deze implementaties onder dezelfde serverbeperkingen te testen.

**16:22** · Dus, 64.000 werd de praktische maximumscore voor deze test, en Rust bereikte dit met de helft van zijn CPU-capaciteit nog beschikbaar, wat betekent dat we eigenlijk niet weten hoeveel meer gebruikers we hadden kunnen ondersteunen zonder die limiet.

**16:33** · Dat zouden er aanzienlijk meer kunnen zijn. Houd dit in gedachten, want dit is niet de enige implementatie die tegen de limiet van 64.000 aanliep.

**16:39** · Daarom noemde ik het RAM-en CPU-gebruik , aangezien die uiteindelijk de doorslag zullen geven. Dan hebben we Zig. Velen van jullie vroegen me in mijn oorspronkelijke video om Zig te testen, dus ik ben blij dat iemand het heeft ingediend. De implementatie ondersteunde 61.000 gebruikers in ongeveer 680 regels code. Het gebruikt een kleine C-netwerkbibliotheek genaamd uSockets, en opnieuw batch database-schrijfacties via group commit . Het piekte op ongeveer 61.000 gebruikers omdat de ontwikkelaar een harde limiet van 60.000 persistente verbindingen had ingesteld. En daarboven begint de server clients te vragen om de verbinding te verbreken en opnieuw te verbinden. Net als bij de Go-implementatie zorgt het constant sluiten en heropenen van verbindingen voor te veel overhead, waardoor het net daarboven begint te falen.

### Zig

**17:09** · En in dit geval zorgt het er ook voor dat vermeldingen in de Linux connection tracking table blijven staan, waardoor we tegen dezelfde verbindingslimiet van de server aanliepen als bij de Rust-implementatie. Dezelfde ontwikkelaar diende twee C ++- implementaties in met vrijwel dezelfde limiet, en alle drie kwamen uit op 61.000 gebruikers. Dus ik vermoed dat als we die instelling zouden wijzigen, Zig ook de limiet van 64.000 gebruikers had kunnen halen. De cijfers ondersteunen dit. Bij 62.000 gebruikers was de latentie uitstekend en was de P99 slechts 268 milliseconden. Het faalde puur door fouten van 1,02% vanwege die geforceerde herverbindingen .

**17:37** · En het CPU-gebruik lag op 69%, aanzienlijk meer dan Rust, maar nog steeds ruim onder de veilige limieten voor wat we hadden kunnen bereiken. En op een gedeelde eerste plaats hebben we C ++ met 64.000 gebruikers. Deze implementatie gebruikt één thread, één event loop en communiceert rechtstreeks met SQLite. Uh, er zijn geen worker pools, locks of reverse proxies. Een behoorlijk interessante optimalisatie zat hier binnen SQLite.

### C

**17:56** · Ze hebben de applicatie geprofileerd en ontdekten dat SQLite 13%van de CPU-tijd van de applicatie besteedde aan het scannen van de eigen page cache bij het doorvoeren van transacties. Dus hebben ze aangepast hoe SQLite caching afhandelt, waar ik wat sceptisch over was met de regels in gedachten. Maar in feite hebben ze de interne cache van SQLite tot bijna niets verkleind en de database in het geheugen gemapt, zodat leesacties de page cache van het besturingssysteem konden gebruiken, wat de hoeveelheid werk voor SQLite verminderde. Ze hebben ook gewijzigd wanneer SQLite checkpoint-operaties uitvoerde, die deel uitmaken van hoe SQLite zijn write-ahead log beheert.

**18:23** · Dus in plaats van verzoeken uit te voeren terwijl er onderhoudswerk plaatsvond, haalden ze checkpoints uit het responspad. Nu is er één detail dat hier het vermelden waard is. De implementatie gebruikt SQLite's write-ahead logging-modus met synchronous op normal. Het is geldig en voldoet aan de regels van de uitdaging, maar het brengt een aanzienlijke afweging op het gebied van duurzaamheid met zich mee. Een transactie kan worden doorgevoerd zonder de garantie dat deze een plotselinge stroomstoring overleeft , omdat 'normal' niet afdwingt dat de write-ahead loggegevens van elke transactie onmiddellijk naar permanente opslag worden gesynchroniseerd. Wanneer we zeggen dat deze implementaties moeten doorvoeren voordat ze antwoorden , betekent dit niet automatisch dat elke bevestigde schrijfactie gegarandeerd behouden blijft als de machine stroom verliest.

**18:53** · Het is iets om rekening mee te houden als je deze optimalisaties in een echte applicatie wilt gebruiken. Ik ga hier een sterretje bij plaatsen vanwege dit aspect. En om terug te komen op mijn caching-regel: het opslaan van de database in je eigen in-memory structuur was tegen de regels, maar dat gebeurde hier eigenlijk niet. Het warmde de file cache van het besturingssysteem op, wat een normaal onderdeel is van hoe databases werken en toegestaan was. Dus deze implementatie was in feite geldig. En net als Rust haalde het de 64.000 gebruikers voordat we de door Linux opgelegde limiet voor connection tracking bereikten. Bij 64.000 gebruikers had C ++ een P99-latentie van 910 milliseconden en Rust een P99 van slechts 224 milliseconden.

**19:24** · Dat betekent dat de traagste 1%van de aanvragen een veel hogere latentiedrempel bereikte in C ++, ook al ondersteunden beide applicaties hetzelfde aantal virtuele gebruikers hier, opnieuw door die limiet. En C ++ gebruikte ook ongeveer 68%van de server-CPU in vergelijking met Rust.

**19:40** · Dus, ook al eindigden ze volgens de regels in een gelijkspel, Rust had op dit niveau aanzienlijk meer speelruimte , en daarom is dit onze snelste taal in de community-benchmark. Dus, wat maakte deze implementaties nu eigenlijk zo snel? Ik heb er gedurende de video een paar genoemd, maar ik wilde stilstaan bij de punten die telkens weer naar voren kwamen. Ten eerste: bijna alle snelste implementaties lieten Nginx achterwege en serveerden HTTP-verkeer direct. Nginx is ongelooflijk nuttig in een productieomgeving. Het kan TLS-beëindiging, load balancing, buffering, routing en nog veel meer afhandelen. Maar in dit experiment draaien we alles op één kleine machine met één CPU.

### Takeaways

**20:08** · Dus als je Nginx voor je applicatie plaatst, moet elk verzoek door een extra proces voordat het je code bereikt. Dit betekent meer werk, meer gegevensverplaatsing en meer CPU-tijd. Wanneer je probeert elke laatste druppel uit deze kleine CPU te persen, is die overhead echt van belang . Niet elke inzending verwijderde het.

**20:23** · We hadden implementaties die het behielden, zoals Rust Axum en een van de Rails-inzendingen. Maar de snelste inzendingen serveerden het verkeer direct. Ten tweede: bijna elke topinzending bereidde zijn SQLite-query's één keer voor en hergebruikte één databaseverbinding.

**20:34** · Dit voorkomt het herhaaldelijk parseren van dezelfde SQL-statements en maakt databasetoegang voorspelbaarder. Ten derde: veel implementaties gebruikten SQLite om hun JSON-antwoorden te genereren. In plaats van die databaserijen om te zetten naar applicatieobjecten en ze te serialiseren, lieten ze SQLite het antwoord direct opbouwen. Dit bespaarde enorm veel tijd. En ten vierde: de meeste van de snelste inzendingen gebruikten group commit. Dus in plaats van elke schrijfactie individueel vast te leggen, bundelden ze meerdere schrijfacties in transacties en commiten ze deze tegelijk. Bij een werklast met schrijfacties, en zeker als er meer schrijfacties zijn, kan dit een heel groot verschil maken. Tot slot : de snelste implementaties gingen verder dan het framework en vervingen het framework volledig.

**21:03** · Mensen implementeerden hun eigen servers, geheugenbeheer en event loops, wat me brengt bij een van de belangrijkere onderdelen van het experiment: de afwegingen die mensen maakten. Hoewel deze cijfers super indrukwekkend waren, zou ik de meeste van deze implementaties waarschijnlijk niet uitrollen of deze PR's goedkeuren voor een grootschalige applicatie op het werk. Bijvoorbeeld, de winnende C ++ inzending bevat meer dan 1.300 regels code in één bestand, inclusief een eigen HTTP-en JSON-parser. De snelste Rust-implementatie bestaat uit ongeveer 2.400 regels code en gebruikt veel ' unsafe' Rust. Het is afhankelijk van vrij moderne Linux-functies en de Bun-inzending implementeert alleen de HTTP-onderdelen die deze specifieke API echt nodig heeft. Het is dus niet zo uitbreidbaar als het zou kunnen zijn.

### Trade-offs

**21:36** · En als kanttekening: geen van deze beslissingen is slecht en ik ben erg blij dat mensen ze hebben genomen om ons tot het uiterste te drijven. Dat was het doel van deze uitdaging. Maar in de meeste productieomgevingen waar onderhoudbaarheid, beveiliging, overdraagbaarheid en de inwerkbaarheid voor andere technici belangrijk zijn, zijn de benchmarks uit mijn vorige video, die je zeker moet kijken als je hem nog niet hebt gezien, wellicht realistischer. Dan is er ook nog de kant van de database. Group commit is een superhandige optimalisatie, maar het verandert hoe je verzoeken beheert.

**21:58** · Als een transactie mislukt, moeten alle verzoeken die op die transactie wachten mogelijk ook allemaal mislukken.

**22:02** · Wanneer één databaseverbinding al je werk afhandelt, moet je voorzichtig zijn met hoe verzoeken worden gepland, zodat één trage operatie niet iedereen ophoudt. Nogmaals, als je de code wilt bekijken of denkt dat je deze implementaties kunt verbeteren, vind je de challenge-repository in de beschrijving. Ik zou vooral graag meer Java-, Node-en Go-inzendingen zien. En trouwens, als je beter wilt begrijpen hoe systemen zoals deze echt werken, bekijk dan mijn app, DevMax. DevMax is als de Duolingo voor systeemontwerp. Je krijgt dagelijkse systeemontwerpvragen, korte lessen en uitleg van de concepten en terminologie die elke software-engineer zou moeten kennen. Je moet ook lid worden van mijn privédienst op Discord, waar je kunt chatten met collega's en mij direct vragen kunt stellen.

**22:33** · Ik geloof echt dat naarmate AI beter wordt in het schrijven van code, het begrijpen van systeemontwerp een van de meest waardevolle vaardigheden wordt voor een engineer. Ik zie het als alles boven de code: de architectuur, de strategieën, de afwegingen en de taal die je nodig hebt om na te denken over systemen zoals degene die we vandaag hebben getest. Als dat interessant klinkt, kun je een gratis proefperiode van 7 dagen krijgen op devmax.dev/get, of download hem op iOS en Android. En als je genoten hebt van deze video, zorg dan dat je abonneert en dan zie ik jullie volgende week weer.

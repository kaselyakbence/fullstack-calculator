# Calculator PWA

Egy egyszerű fullstack számológép.

## Állapot:

     Fejlesztés alatt

- Új design
- Pwa funkciók bővítése

## Használat:

Az alkalmazás elérhető [itt](https://www.calc.kaselyakbence.me/)

Az alkalmazás két extra feature-je az értékek online adatbázisban való mentése és onnan való betöltése.
A menü gomb megnyomásával lehetővé válik a a képernyőn látható érték elmentése (S) és a már mentett adatok betöltése (L).

## Használt technológiák:

- [React](https://reactjs.org/)
- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Leírás:

Az alkalmazás frontend és backend részre oszlik amik egy REST APIn kommunikálnak.

#### Frontend:

A kliens egy React-tal készült egyszerű SPA (Single-page application).
PWA képességekkel rendelkezik.
A PWA vagy progressive web application egy viszonylag új technológia.
Célja, hogy az újonnan népszerű webes applikációkat és SPAkat vegyítse a telefonos és asztali natív alkalmazásokkal, ezzel egy natív alkalmazás érzését nyújtja
(pl. offline működés,push-notifications,szenzorok használata) és webes alkalmazás könnyű elérhetőségével is bír.

- Offline firs cachet használ. Ez lehetővé teszi az alkalmazás gyorsabb és korlátozott offline használatát is.
- Telepíthető, ezzel natív app érzését biztosítja

#### Backend:

Egy Node.js Express alapú RESTful API mely legfőbb feladata, hogy biztonságos és kontrollált kapcsolatot tegyen lehetővé egy adatbázissal.
Az adatbázis MongoDB-vel van megvalósítva,mely perzisztens tárhelyet és gyors elérést nyújt minden kliensnak.

## Hibák:

Ha hibát találsza kódban,azt kérlek egy issue leadásával vagy emailben [itt](mailto:kaselyakbence.dev@gmail.com)

#### Készítette: Kaselyák Bence

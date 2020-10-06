#Skálázhatóság és éles környezet

Frontend:
A frontend a React framework miatt könnyen skálázható.
Ennek ellenére a legjobb skálázhatósághoz szükség lenne:

- Környezeti változók használatára pl .env segítségével (egyszerűség végett hardcodeolva lett,de ez éles környezetben súlyos biztonsági hiba )
- valamilyen Css framework vagy prepocesszor használata (pl scss/bootstrap)
- Ha a állapot(state) bonyolultabb lesz akkor a Context api helyett valami állapot kezelő könyvtár használata ajánlott (pl Redux)
- Mivel a frontended create-react-app segítségével csináltam ezért szükséges a könyezet finomhangolása/migrálás Reactra (a cra sok plusszal jár pl scss támogatás,amik feleslegesek ettől lassúl a program)

Backend:

- Szintén környezeti változók használata
- Fájlban tárolás helyett adatbázis használata elkerülhetetlen egy többszerveres környezet esetén
- Input validáció finomítása (pl Joi)
- Biztonság feljavítása (pl Helmet)
- Automata tesztesetek írása
- Arcthitektúra változtatása (pl routeok,validáció külön fileba rendezése)

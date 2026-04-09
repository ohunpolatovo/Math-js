//Integer1. Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.
//let son = +prompt("uch xonali son kiriting");
//let birlik = son % 10;
//let onlik = Math.trunc((son / 10) % 10);
//console.log("birliklar:  " + birlik + "  onliklar:" + onlik);
//=============================================================================
//Integer2. Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi programma tuzilsin.
//let son = +prompt("Uch xonali son kiriting:");

//let yuzlar = Math.trunc(son / 100);
//let onliklar = Math.trunc((son / 10) % 10);
//let birliklar = son % 10;

//let yigindi = yuzlar + onliklar + birliklar;

//console.log("Raqamlar yig'indisi: " + yigindi);
//====================================================================================
//Integer3. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo`lgan sonni aniqlovchi program tuzilsin.
//let son = +prompt("uch honali son kiriting");
//let yuzlar = Math.trunc(son / 100);
//let onliklar = Math.trunc((son / 10) % 10);
//let birliklar = son % 10;
//let teskariSon = birliklar * 100 + onliklar * 10 + yuzlar;
//console.log("kiritilgan son:   " + son +  "teskari son:" + teskariSon);

//Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
//Input: 123
//Output: 213
//let son = +prompt("uch honali son kiriting");
//let yuzlar = Math.trunc(son / 100);
//let onlar = Math.trunc((son / 10) % 10);
//let birlik = Math.trunc(son % 10);
//let teskari = onlar * 100 + yuzlar * 10 + birlik;
//console.log("kiritilgan son   " + teskari);

//Integer5. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
//Input: 123
//Output: 132
//let son = +prompt("uch honali son kiriting");
//let yuzlar = Math.trunc(son / 100);
//let onlar = Math.trunc((son / 10) % 10);
//let birlik = Math.trunc(son % 10);
//let teskari = yuzlar * 100 + birlik * 10 + onlar;
//console.log(teskari);

//Integer6. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib berilgan sonni mingliklar xonasidagi sonni aniqlovchi programma tuzilsin.
//Input: 98123
//Output: 8
//let son = +prompt("son kirtiing");
//let natija = Math.trunc(son / 1000) % 10;
//console.log("Minglik xonasidagi son  " + natija);

//1 minut = 60 s
//1 soat = 60 minut
//1 soat = 3600s
//1 sutka = 24 soat

//Integer7. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to'la o`tganligini aniqlovchi programma tuzilsin.
//let N = +prompt("sekundni kiriting");
//let natija = Math.trunc(N / 60);
//console.log("kun boshidan boshlab  " + natija + "  minut otdi");

//Integer8. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to'la soat o`tganligini aniqlovchi programma tuzilsin.
//let N = +prompt("Sekundni kiriting");
//let natija = Math.trunc(N / 3600);
//console.log(natija);

//Integer9. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi programma tuzilsin.
let son = +prompt("sekundni kiriting");
let minut = Math.trunc(son / 60);

console.log("kun boshidan boshlab  " + minut + "  minut otdi  ");

//Integer10. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi programma tuzilsin.

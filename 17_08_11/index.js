//STRICT CODE - upotreba "use strict;" deklaracije
//VARIABLE SCOPE 
/* 
    global scope -  vidi se gde god da se nalazi u kodu
        var global = 'test';

        function scopeTest() {
            var global = '123'; - gazi se globalni aspekt 
            i gleda lokalni, odstampace '123'

            global = '123'; 
            var b = 'asdf'
            //console.log(global);
        }

        console.log(global);
        scopeTest();
        console.log(global);
        console.log(b); - izbacuje gresku jer nije definisano van funckije

        const - koristi se za vrednosti koji se nece menjati kasnije
        var - sluzi samo za globalne aspekte
        let - moze da se menja
        razlika izmedju let i var? var se vidi globalno i vidi se u celoj funkciji,
        let se vidi samo u tom bloku koda

    local scope - 
*/

/*let specChar = ['.', ',', ':', ';', '?', '!']


let title = 'Apád vagy,... Anyád?';

let mit = [' ', '.', ',', '?', 'é', 'á'];
let mire = ['-', '', '', '', 'e', 'a'];

for (let i = 0; i < mit.length; i++) {
    if (title.includes(mit[i])) {
        while (title.includes(mit[i]) == true) {
            title = title.toLowerCase();
            title = title.replace(mit[i], mire[i])

        }
    }

};*/

/*
let title = 'Apád vagy, ...Anyád?';

let mit = [' ', '.', ',', '?', 'é', 'á'];
let mire = ['-', '', '', '', 'e', 'a'];

for (let i = 0; i < mit.length; i++) {
    if (title.substring(i,i+1)==mit[i]) {
        while (title.includes(mit[i]) == true) {
            title = title.toLowerCase();
            title = title.substring(mit[i], mire[i])

        }
    }

}
ű
ű
title = title.replace(/[\?\:;,\.\+\*]/g, '');


*/
let title = 'Ap^ˇ˘ˇád vagy,  ... Anyád?';

function titleNameConverter(titleName) {
    //címet átkonvertál használható formátúmuvá



    titleName = titleName.toLocaleLowerCase();

    //cseretömb
    const hunChars = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        ö: 'o',
        ő: 'o',
        ü: 'u',
        ű: 'u'
    };
    titleName = titleName.replace(/[áéíúóöű]/g, c => hunChars[c]); //ékezetes karaktert cserél
    titleName = titleName.replace(/[^a-z0-9 -]/g, ''); // ami nem normál karakter az kidobja
    titleName = titleName.replace(/[ -]+/g, '-'); //bármennyi space-t és kötőjelet egy kötőjellre cserél
    console.log(titleName);
}
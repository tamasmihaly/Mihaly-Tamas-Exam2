function callback(data) {

    let JSONmovies = JSON.parse(data.responseText).movies;
    console.log(JSONmovies);
    ObjectMovie.rendez(JSONmovies);
    ObjectMovie.kategoria(JSONmovies);
    //   ObjectMovie.szuro(JSONmovies, "director", "Fábri");
    ObjectMovie.megjelenit(JSONmovies);

    document.querySelector("form .button").addEventListener("click", searchFun)



    function searchFun() {
        let optVal = document.querySelector("#select-opt").value;
        let searchInputVal = document.querySelector("#search-text-input").value
        console.log("searchpar", searchInputVal);
        console.log("optval", optVal);
        ObjectMovie.megjelenit(ObjectMovie.szuro(JSONmovies, optVal, searchInputVal))
    }



    // ObjectMovie.megjelenit(ObjectMovie.szuro(JSONmovies, "title", "ötödik"));


}

function ajaxRequest(method, url) {

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () { //xmlhttp.onreadystatechange =  () => {

        switch (xmlhttp.readyState) {
            case 0:
                console.log("Nincs inicializálva a kérés");
                break;
            case 1:
                console.log("A kapcsolat létrejött");
                break;
            case 2:
                console.log("A kérelem fogadva");
                break;
            case 3:
                console.log("A kérelem feldolgozás alatt");
                break;
            case 4:
                console.log("A kérelem feldolgozva, válasz kész");
                if (xmlhttp.status == 200) {
                    console.log("callback")
                    callback(xmlhttp)
                } else {
                    console.log(`${xmlhttp.status}hiba`);
                }
                break;
            default:
                alert("Valami hiba történt");


        }
    }

    xmlhttp.open("GET", url); // default true : async, user, pass)
    xmlhttp.send();


}

ajaxRequest('GET', '/json/movies.json');

var ObjectMovie = {
    rendez: function sortByTitle(data) {
        data.sort(function (a, b) {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }

        })
    },
    kategoria: function (data) {
        for (let i = 0; i < data.length; i++)

            for (let j = 0; j < data[i].categories.length; j++) {
                data[i].categories[j] = data[i].categories[j].toLowerCase();
                data[i].categories[j] = data[i].categories[j][0].toUpperCase() + data[i].categories[j].substring(1, data[i].categories[j].length);


            }
    },


    megjelenit: function (data) {
        let movieDiv = "";

        for (let i = 0; i < data.length; i++) {

            movieDiv += `
                <div class="movie">
                <img src="/img/covers/${titleNameConverter(data[i].title)}.jpg" alt="${titleNameConverter(data[i].title)}.jpg">
                    <p class="title-para">
                        Cím: ${data[i].title}
                    </p>
                    <p class="duration-para">
                        Hossz: ${data[i].timeInMinutes} perc
                    </p>
                    <p class="premier-para">
                        Premier: ${data[i].premierYear}.
                    </p>
                    <p class="categories-para">
                        Kategória:${data[i].categories.join(", ")}
                    </p>
                    <p class="director-para">
                        Rendező: ${data[i].directors.join(", ")}
                    </p>`;

            let castDiv = "";
            for (let j = 0; j < data[i].cast.length; j++) {
                castDiv += `<img class="character-img" src="/img/actors/${titleNameConverter(data[i].cast[j].name)}.jpg" alt="${titleNameConverter(data[i].cast[j].name)}.jpg">
                    <p>${data[i].cast[j].name} (${data[i].cast[j].characterName})</p>
                    <p>${data[i].cast[j].birthYear}, ${data[i].cast[j].birthCountry} ${data[i].cast[j].birthCity}</p>`;
            }
            movieDiv += castDiv;

            movieDiv += `</div> `;


        }
        document.querySelector("#ideberak").innerHTML = movieDiv;


    },
    szuro: function (data, opt, searcParameter) {
        let szurtAdatok = [];


        switch (opt) {
            case "title":

                for (let i = 0; i < data.length; i++) {
                    if (data[i].title.toLocaleLowerCase().indexOf(searcParameter.toLocaleLowerCase()) != -1) {
                        szurtAdatok.push(data[i])
                    }

                }
                break;
            case "director":

                for (let i = 0; i < data.length; i++) {
                    if (data[i].directors.join().toLocaleLowerCase().indexOf(searcParameter.toLocaleLowerCase()) != -1) {
                        szurtAdatok.push(data[i])
                    }

                }
                break;


            case "character":
                console.log("beletpem");
                for (let i = 0; i < data.length; i++) {

                    for (let j = 0; j < data[i].cast.length; j++)
                        if (data[i].cast[j].name == searcParameter) {

                            // data[i].cast[j].name.toLocaleLowerCase().indexOf(searcParameter.toLocaleLowerCase()) != -1)
                            szurtAdatok.push(data[i])
                            // console.log(i, j);
                        }
                };
                break;

            default:
                console.log("switch dafault case");

        }
        console.log("1", szurtAdatok);
        return szurtAdatok;


    }




}





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
    titleName = titleName.replace(/[áéíúóöőüű]/g, c => hunChars[c]); //ékezetes karaktert cserél
    titleName = titleName.replace(/[^a-z0-9 -]/g, ''); // ami nem normál karakter az kidobja
    titleName = titleName.replace(/[ -]+/g, '-'); //bármennyi space-t és kötőjelet egy kötőjellre cserél
    //console.log(titleName);
    return titleName;
}
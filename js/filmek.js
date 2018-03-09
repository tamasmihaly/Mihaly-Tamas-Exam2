function callback(data) {

    let JSONmovies = JSON.parse(data.responseText).movies;
    console.log(JSONmovies);
    ObjectMovie.rendez(JSONmovies)
    ObjectMovie.kategoria(JSONmovies)



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

    }
    megjelenit


}
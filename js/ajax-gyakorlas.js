function callback(data) {
    console.log(data.responseText);
    console.log(typeof JSON.parse(data.responseText);


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

    ajaxRequest('GET', '/json/players.json');
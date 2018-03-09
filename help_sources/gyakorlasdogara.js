function done(data) {
    // console.log(data.responseText);
    let got = JSON.parse(data.responseText);
    got = halottKiszures(got);
    //console.log(got[1].name - got[2].name);

    got = sortCharacters(got);
    console.log(got);
    createView(got);
}


function xhr(method, url, done) {

    let xmlHTTP = new XMLHttpRequest();

    xmlHTTP.onreadystatechange = function () {
        if (xmlHTTP.readyState == 4 && xmlHTTP.status == 200) {
            done(xmlHTTP);
        }
    }

    xmlHTTP.open(method, url)
    xmlHTTP.send();



};

xhr("GET", "/json/characters.json", done);



function halottKiszures(data) {
    let livingChars = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].dead != "1")
            livingChars.push(data[i]);

    }
    return livingChars;
};


function sortCharacters(data) {

    data.sort(function (a, b) {
        if (a.name > b.name) {
            return 1
        } else if (a.name < b.name) {
            return -1
        } else {
            return 0
        }
    });
    return data;
    console.log(data);



}

function createView(data) {
    for (var i = 0; i < data.length; i++) {
        let divElement = document.createElement("div");
        divElement.className = "character";
        let img = document.createElement("img");
        img.src = "/" + data[i].portrait;
        img.alt = data[i].name;

        let para = document.createElement("p");
        para.textContent = data[i].name;

        divElement.appendChild(img)
        divElement.appendChild(para)
    }

}
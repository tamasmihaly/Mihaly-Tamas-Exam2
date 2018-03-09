var obj = (function () {
    var privateProp = 'Privát tulajdonság'
    return {
        publicProp: "Publikus tualjdonság",
        getPrivateProp: function () {
            console.log(privateProp)
        },
        setPrivateProp: function (value) {
            privateProp = value
        }
    }


})();

console.log(obj.getPrivateProp());
console.log(obj.children);


/// lényeg hogy nem látjuk a változókat amiket nem akarunk, ezekhez csak a programon beül férünk hozzá



var obj = (function () {
    var privateProp = 'Privát tulajdonság'
    module.publicProp = 'pulikus tul'
    module.getPrivateProp = function () {
        console.log(privateProp)
    }
})();

console.log(obj.getPrivateProp());
console.log(obj.children);

// még egy pattern talán ez a legátláthatóbb

var obj = (function () {
    var privateProp = 'Privát tulajdonság'
    var publicProp = 'publikus tul'

    function getPrivateProp() {
        console.log(privateProp)
    }

    return {
        publicProp: publicProp,
        getPrivateProp
    }
})();

console.log(obj.getPrivateProp());
console.log(obj.children);
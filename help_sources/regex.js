var checkRegex = {
    cardNumber: "1234 5678 9123 4567",
    szigNumber: "123456AB",
    szemelyiNumber: "1-123456-1234",
    email: "valami1@gmail.com",

    cardNumberCheck: function () {
        var regexP = /^(\d{4} ){3}\d{4}$/;
        if (checkRegex.cardNumber.search(regexP) === 0) {
            console.log("ok!");
        } else {
            console.log("wrong card number");
        }

    },
    szigNumberCheck: function () {
        var regexP = /^\d{6}[A-Z]{2}$/
        if (checkRegex.szigNumber.search(regexP) === 0) {
            console.log("ok!");
        } else {
            console.log("wrong SZIG number");
        }
    },
    szemelyiNumberCheck: function () {
        var regexP = /^(1|2)-\d{6}-\d{4}$/
        if (checkRegex.szemelyiNumber.search(regexP) === 0) {
            console.log("ok!");
        } else {
            console.log("wrong SZEMÉLYI number");
        }
    },
    emailCheck: function () {
        var regexP = /^[a-zA-Z0-9]{1,}@.+\.[a-z.]{2,}+$/;
        if (checkRegex.email.search(regexP) === 0) {
            console.log("ok!");
        } else {
            console.log("wrong email");
        }
    },


}
let loginUserDetails = () => {
    try {
        let email1 = document.querySelector(".email").value;
        let pass1 = document.querySelector(".Password").value;
        let getData = JSON.parse(localStorage.getItem("User-Objects"));
        getData.forEach((objects) => {
            if (objects.Email === email1 && objects.password === pass1) {
                window.open('/Admin-Pannel/admin.html');
            };
            // if (email1 !== objects.Email) {
            //     document.querySelector(".incorrec-email").innerHTML = " **Incorrect Email ";

            // };
            if (email1 == "") {

                document.querySelector(".incorrec-email").innerHTML = " **Write Email ";

            };

            if (objects.password !== pass1) {
                document.querySelector(".incorrec-pass").innerHTML = " **Incorrect Password ";


            };
            if (pass1 == "") {
                document.querySelector(".incorrec-pass").innerHTML = " **Write Password ";

            };

        });
    } catch (error) {
        console.log(error);
    }
}
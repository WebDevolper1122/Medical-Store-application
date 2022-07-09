const $ = document.querySelector.bind(document);

let newObj = {
    Name: String,
    Email: String,
    Number: Number,
    coffee: String,
    password: Number
}
let signUpUserDetails = () => {
    try {
        let emptyArray = [];
        let Name = $('.Name').value;
        let email = $('.email').value;
        let Number = $('.Number').value;
        //  let coffee = $('.coffee:checked').value;
        let Password = $('.Password').value;

        newObj.Name = Name;
        newObj.Email = email;
        newObj.Number = Number;
        //newObj.coffee = coffee;
        newObj.password = Password;
        let saveData = JSON.parse(localStorage.getItem('User-Objects'));
        if (saveData === null) {
            emptyArray.unshift(newObj);
            localStorage.setItem('User-Objects', JSON.stringify(emptyArray));
        } else {
            emptyArray.unshift(newObj);
            saveData.forEach((Object) => {
                emptyArray.unshift(Object);
            })
            localStorage.setItem('User-Objects', JSON.stringify(emptyArray));
        }

    } catch (error) {
        console.log(error.message);
        alert(error.message)
    }
}
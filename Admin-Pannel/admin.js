let getData = JSON.parse(localStorage.getItem('User-Objects'));
let newnumber = 0;
getData.forEach((element, i) => {

    let number = document.querySelector(".no");

    i++;
    number = number + i;
    let tableData = document.querySelector(".tableData");

    tableData.innerHTML += `
    <tr>
    <td>${number}</td>
    <td>${element.Name}</td>
    <td>${element.Email}</td>
    <td>${element.Number}</td>
    <td>${element.password}</td>
    <td><button class="btn btn-outline-danger" onclick="del('${element.Email}')">Delete</button></td>
    
    </tr>
    `

    newnumber = i;

});
let totalnumber = document.querySelector(".total");
totalnumber.innerHTML = `
 Total user length is <strong> ${newnumber}</strong>
`

let del = (userEmail) => {
    let newUserData = getData.filter((obj) => {
        return !(userEmail === obj.Email)



    })
    localStorage.setItem('User-Objects', JSON.stringify(newUserData))
}